// =============================================================
// FLASHCARDS TJ-SP - flashcards.js
// Lógica: escolher matéria/modo, montar a sessão, corrigir a
// resposta, mostrar o artigo e guardar o progresso (localStorage).
// =============================================================

// Registra o mesmo Service Worker do app (funciona offline)
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
}

const TAMANHO_SESSAO = 20;
const CHAVE_PROGRESSO = "studyplan-flashcards";

const ICONES = {
    "Todas as matérias": "📚",
    "Direito Penal": "⚖️",
    "Direito Processual Penal": "🔒",
    "Direito Processual Civil": "📑",
    "Direito Constitucional": "🏛️",
    "Direito Administrativo": "🏢",
    "Língua Portuguesa": "✍️"
};


// -------------------------------------------------------------
// PROGRESSO SALVO
// Formato: { idDoCartao: { acertos, erros, caixa, ultimaVez } }
// "caixa" é o sistema de Leitner: 0 = novo/errado ... 3 = dominado.
// Acertou -> sobe uma caixa. Errou -> volta para a caixa 0.
// -------------------------------------------------------------
function carregarProgresso() {
    try { return JSON.parse(localStorage.getItem(CHAVE_PROGRESSO)) || {}; }
    catch { return {}; }
}
function salvarProgresso() {
    try { localStorage.setItem(CHAVE_PROGRESSO, JSON.stringify(progresso)); } catch {}
}
let progresso = carregarProgresso();

function registrarResposta(cartao, acertou) {
    const p = progresso[cartao.id] || { acertos: 0, erros: 0, caixa: 0, ultimaVez: 0 };
    if (acertou) { p.acertos++; p.caixa = Math.min(p.caixa + 1, 3); }
    else { p.erros++; p.caixa = 0; }
    p.ultimaVez = Date.now();
    progresso[cartao.id] = p;
    salvarProgresso();
}

// Um cartão está "para revisar" se já foi visto e está na caixa 0 (último erro)
const paraRevisar = c => progresso[c.id] && progresso[c.id].caixa === 0;


// -------------------------------------------------------------
// ELEMENTOS
// -------------------------------------------------------------
const $ = id => document.getElementById(id);
const telas = { inicio: $("telaInicio"), estudo: $("telaEstudo"), fim: $("telaFim") };

function mostrarTela(nome) {
    Object.entries(telas).forEach(([n, el]) => el.hidden = n !== nome);
    window.scrollTo(0, 0);
}

let materiaEscolhida = "Todas as matérias";
const MATERIAS = ["Todas as matérias", ...new Set(CARTOES.map(c => c.d))];
const cartoesDa = m => m === "Todas as matérias" ? CARTOES : CARTOES.filter(c => c.d === m);


// -------------------------------------------------------------
// TELA INICIAL
// -------------------------------------------------------------
function renderizarInicio() {
    const vistos = CARTOES.filter(c => progresso[c.id]);
    const acertos = vistos.reduce((s, c) => s + progresso[c.id].acertos, 0);
    const tentativas = vistos.reduce((s, c) => s + progresso[c.id].acertos + progresso[c.id].erros, 0);
    $("geralRespondidos").textContent = `${vistos.length}/${CARTOES.length}`;
    $("geralAcerto").textContent = tentativas ? Math.round(acertos / tentativas * 100) + "%" : "–";
    $("geralRevisar").textContent = CARTOES.filter(paraRevisar).length;

    const lista = $("listaMaterias");
    lista.innerHTML = "";
    MATERIAS.forEach(m => {
        const cartoes = cartoesDa(m);
        const dominados = cartoes.filter(c => progresso[c.id] && progresso[c.id].caixa >= 2).length;
        const revisar = cartoes.filter(paraRevisar).length;

        const botao = document.createElement("button");
        botao.type = "button";
        botao.className = "materia" + (m === materiaEscolhida ? " selecionada" : "");
        botao.innerHTML = `
            <span class="materia-icone">${ICONES[m] || "📝"}</span>
            <span class="materia-info">
                <strong></strong>
                <small>${cartoes.length} cartões · ${dominados} dominados${revisar ? ` · ${revisar} para revisar` : ""}</small>
                <div class="mini-barra"><div style="width:${Math.round(dominados / cartoes.length * 100)}%"></div></div>
            </span>`;
        botao.querySelector("strong").textContent = m;
        botao.addEventListener("click", () => { materiaEscolhida = m; renderizarInicio(); });
        lista.appendChild(botao);
    });
    $("avisoInicio").hidden = true;
}

function embaralhar(lista) {
    const a = [...lista];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// Monta a fila de cartões da sessão de acordo com o modo
function montarSessao(modo, base) {
    if (modo === "erros") return embaralhar(base.filter(paraRevisar)).slice(0, TAMANHO_SESSAO);
    if (modo === "todos") return embaralhar(base);

    // Revisão inteligente: primeiro os errados, depois os novos,
    // depois os de caixa mais baixa / vistos há mais tempo.
    const peso = c => {
        const p = progresso[c.id];
        if (!p) return 1;                 // novo
        if (p.caixa === 0) return 0;      // errado: prioridade máxima
        return 1 + p.caixa + Math.random() * 0.5;
    };
    return embaralhar(base)
        .sort((a, b) => peso(a) - peso(b))
        .slice(0, TAMANHO_SESSAO);
}

$("botaoComecar").addEventListener("click", () => {
    const modo = document.querySelector('input[name="modo"]:checked').value;
    const fila = montarSessao(modo, cartoesDa(materiaEscolhida));
    if (fila.length === 0) {
        $("avisoInicio").textContent = "Nenhum cartão para revisar nessa matéria. Escolha outro modo! 🎉";
        $("avisoInicio").hidden = false;
        return;
    }
    iniciarSessao(fila);
});

// Confirmação em dois toques (sem confirm(), que não funciona em todo lugar)
let zerarArmado = null;
$("botaoZerar").addEventListener("click", () => {
    const botao = $("botaoZerar");
    if (!zerarArmado) {
        botao.textContent = "Toque de novo para apagar todo o progresso";
        zerarArmado = setTimeout(() => {
            zerarArmado = null;
            botao.textContent = "Zerar meu progresso";
        }, 4000);
        return;
    }
    clearTimeout(zerarArmado);
    zerarArmado = null;
    botao.textContent = "Progresso apagado";
    progresso = {};
    salvarProgresso();
    renderizarInicio();
});


// -------------------------------------------------------------
// SESSÃO DE ESTUDO
// -------------------------------------------------------------
let sessao = { fila: [], indice: 0, acertos: 0, errados: [] };

function iniciarSessao(fila) {
    sessao = { fila, indice: 0, acertos: 0, errados: [] };
    mostrarTela("estudo");
    mostrarCartao();
}

function mostrarCartao() {
    const c = sessao.fila[sessao.indice];
    const total = sessao.fila.length;

    $("contadorSessao").textContent = `${sessao.indice + 1} / ${total}`;
    $("placarSessao").textContent = `✅ ${sessao.acertos} · ❌ ${sessao.errados.length}`;
    $("trilhoPreenchido").style.width = (sessao.indice / total * 100) + "%";

    $("cartaoMateria").textContent = c.d;
    $("cartaoAfirmacao").textContent = c.af;
    $("botoesResposta").hidden = false;
    $("verso").hidden = true;

    // reinicia a animação de entrada do cartão
    const el = $("cartao");
    el.style.animation = "none"; void el.offsetWidth; el.style.animation = "";
}

function responder(respostaUsuario) {
    const c = sessao.fila[sessao.indice];
    const acertou = respostaUsuario === c.c;

    registrarResposta(c, acertou);
    if (acertou) sessao.acertos++; else sessao.errados.push(c);

    const r = $("resultado");
    r.className = "resultado " + (acertou ? "acertou" : "errou");
    r.textContent = acertou ? "🎉 Você acertou!" : "😬 Você errou!";
    $("gabarito").textContent = c.c ? "CERTO" : "ERRADO";
    $("tituloExplicacao").textContent = c.c ? "💡 Ponto-chave" : "❗ O que estava errado";
    $("explicacao").textContent = c.exp;
    // Em Português o "artigo" é a regra gramatical
    $("iconeReferencia").textContent = c.d === "Língua Portuguesa" ? "📘 Regra –" : "📜";
    $("referencia").textContent = c.ref;
    $("textoLei").textContent = c.lei;
    $("placarSessao").textContent = `✅ ${sessao.acertos} · ❌ ${sessao.errados.length}`;

    $("botoesResposta").hidden = true;
    $("verso").hidden = false;
    $("botaoProximo").focus({ preventScroll: true });
}

document.querySelectorAll("#botoesResposta .botao").forEach(b =>
    b.addEventListener("click", () => responder(b.dataset.resposta === "true")));

$("botaoProximo").addEventListener("click", () => {
    sessao.indice++;
    if (sessao.indice < sessao.fila.length) mostrarCartao();
    else mostrarFim();
});

$("botaoSair").addEventListener("click", () => {
    renderizarInicio();
    mostrarTela("inicio");
});

// Atalhos de teclado (útil no computador): C = certo, E = errado, Enter = próximo
document.addEventListener("keydown", e => {
    if (telas.estudo.hidden) return;
    const k = e.key.toLowerCase();
    if (!$("botoesResposta").hidden && (k === "c" || k === "e")) responder(k === "c");
    else if (!$("verso").hidden && k === "enter") { e.preventDefault(); $("botaoProximo").click(); }
});


// -------------------------------------------------------------
// FIM DA SESSÃO
// -------------------------------------------------------------
function mostrarFim() {
    const total = sessao.fila.length;
    const pct = Math.round(sessao.acertos / total * 100);
    $("fimIcone").textContent = pct >= 80 ? "🏆" : pct >= 50 ? "💪" : "📖";
    $("fimTitulo").textContent = `${sessao.acertos} de ${total} (${pct}%)`;
    $("fimTexto").textContent = pct >= 80 ? "Excelente! Está pronto para a VUNESP."
        : pct >= 50 ? "Bom caminho! Revise os erros abaixo."
        : "Releia os artigos abaixo e tente de novo.";

    const lista = $("fimErros");
    lista.innerHTML = "";
    sessao.errados.forEach(c => {
        const div = document.createElement("div");
        const s = document.createElement("strong");
        s.textContent = c.ref;
        div.append(s, document.createTextNode(c.exp));
        lista.appendChild(div);
    });
    $("botaoRevisarErros").hidden = sessao.errados.length === 0;
    mostrarTela("fim");
}

$("botaoRevisarErros").addEventListener("click", () => iniciarSessao(embaralhar(sessao.errados)));
$("botaoVoltarInicio").addEventListener("click", () => { renderizarInicio(); mostrarTela("inicio"); });


// Primeira renderização
renderizarInicio();
