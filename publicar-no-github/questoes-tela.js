// =============================================================
// ABA "QUESTÕES": múltipla escolha estilo VUNESP (A a E)
// Depois de responder, mostra gabarito, explicação e o artigo da lei.
// =============================================================
(function () {
    const tela = document.getElementById("telaQuestoes");
    if (!tela || typeof QUESTOES === "undefined") return;

    const CHAVE = "studyplan-questoes";
    const TAM = 10;
    const LETRAS = ["A", "B", "C", "D", "E"];
    const ICONE = d => (typeof ICONES !== "undefined" && ICONES[d]) || "📝";
    let prog = {};
    try { prog = JSON.parse(localStorage.getItem(CHAVE)) || {}; } catch (e) {}
    const salvar = () => { try { localStorage.setItem(CHAVE, JSON.stringify(prog)); } catch (e) {} };

    let materia = "Todas as matérias";
    let sessao = null;
    const MATERIAS = ["Todas as matérias", ...new Set(QUESTOES.map(q => q.d))];
    const daMateria = m => m === "Todas as matérias" ? QUESTOES : QUESTOES.filter(q => q.d === m);

    function el(tag, classe, texto) {
        const e = document.createElement(tag);
        if (classe) e.className = classe;
        if (texto !== undefined) e.textContent = texto;
        return e;
    }
    function embaralhar(a) {
        a = [...a];
        for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
        return a;
    }

    // ---------------- TELA INICIAL DAS QUESTÕES ----------------
    function inicio() {
        tela.innerHTML = "";
        const resp = QUESTOES.filter(q => prog[q.id]);
        const ac = resp.reduce((s, q) => s + prog[q.id].a, 0);
        const tot = resp.reduce((s, q) => s + prog[q.id].a + prog[q.id].e, 0);
        const resumo = el("div", "resumo-geral");
        [[`${resp.length}/${QUESTOES.length}`, "questões feitas"],
         [tot ? Math.round(ac / tot * 100) + "%" : "–", "de acerto"],
         [QUESTOES.filter(q => prog[q.id] && prog[q.id].ult === false).length, "para refazer"]]
            .forEach(([n, t]) => { const d = el("div"); d.append(el("strong", "", n), el("span", "", t)); resumo.appendChild(d); });
        tela.appendChild(resumo);

        tela.appendChild(el("p", "q-intro", "Questões inéditas de múltipla escolha no estilo VUNESP, feitas a partir dos PDFs de legislação. Depois de responder, você vê o gabarito comentado e o artigo da lei."));
        tela.appendChild(el("h2", "titulo-secao", "1. Escolha a matéria"));
        const chips = el("div", "chips chips-quebra");
        MATERIAS.forEach(m => {
            const b = el("button", "chip" + (m === materia ? " ativa" : ""), `${ICONE(m)} ${m} (${daMateria(m).length})`);
            b.type = "button";
            b.addEventListener("click", () => { materia = m; inicio(); });
            chips.appendChild(b);
        });
        tela.appendChild(chips);

        tela.appendChild(el("h2", "titulo-secao", "2. Comece"));
        const base = daMateria(materia);
        const b1 = el("button", "botao grande", `▶ Fazer ${Math.min(TAM, base.length)} questões`);
        b1.type = "button";
        b1.addEventListener("click", () => {
            // prioriza as que errei e as que nunca fiz
            const peso = q => !prog[q.id] ? 1 : prog[q.id].ult === false ? 0 : 2 + Math.random();
            iniciar(embaralhar(base).sort((a, b) => peso(a) - peso(b)).slice(0, TAM));
        });
        tela.appendChild(b1);
        const erradas = base.filter(q => prog[q.id] && prog[q.id].ult === false);
        if (erradas.length) {
            const b2 = el("button", "botao secundario grande", `❌ Refazer as que errei (${erradas.length})`);
            b2.type = "button";
            b2.addEventListener("click", () => iniciar(embaralhar(erradas)));
            tela.appendChild(b2);
        }
        const zerar = el("button", "botao-link", "Zerar progresso das questões");
        zerar.type = "button";
        let armado = null;
        zerar.addEventListener("click", () => {
            if (!armado) { zerar.textContent = "Toque de novo para apagar"; armado = setTimeout(() => { armado = null; zerar.textContent = "Zerar progresso das questões"; }, 4000); return; }
            clearTimeout(armado); prog = {}; salvar(); inicio();
        });
        tela.appendChild(zerar);
    }

    // ---------------- SESSÃO ----------------
    function iniciar(fila) {
        sessao = { fila, i: 0, acertos: 0, erradas: [] };
        questao();
    }

    function questao() {
        const q = sessao.fila[sessao.i];
        tela.innerHTML = "";
        window.scrollTo(0, 0);

        const barra = el("div", "barra-sessao");
        const sair = el("button", "botao-link", "✕ Sair");
        sair.type = "button";
        sair.addEventListener("click", inicio);
        barra.append(sair, el("span", "", `${sessao.i + 1} / ${sessao.fila.length}`), el("span", "", `✅ ${sessao.acertos} · ❌ ${sessao.erradas.length}`));
        tela.appendChild(barra);
        const trilho = el("div", "trilho");
        const pre = el("div", "trilho-preenchido");
        pre.style.width = (sessao.i / sessao.fila.length * 100) + "%";
        trilho.appendChild(pre);
        tela.appendChild(trilho);

        const card = el("article", "cartao");
        card.appendChild(el("span", "etiqueta", `${ICONE(q.d)} ${q.d}`));
        card.appendChild(el("p", "q-enunciado", q.enun));
        const alts = el("div", "q-alternativas");
        const botoes = q.alt.map((txt, k) => {
            const b = el("button", "q-alt");
            b.type = "button";
            b.append(el("span", "q-letra", LETRAS[k]), el("span", "q-texto", txt));
            b.addEventListener("click", () => responder(k, botoes, card));
            alts.appendChild(b);
            return b;
        });
        card.appendChild(alts);
        tela.appendChild(card);
    }

    function responder(k, botoes, card) {
        const q = sessao.fila[sessao.i];
        const certo = k === q.resp;
        botoes.forEach((b, j) => {
            b.disabled = true;
            if (j === q.resp) b.classList.add("correta");
            else if (j === k) b.classList.add("errada");
        });
        const p = prog[q.id] || { a: 0, e: 0 };
        if (certo) { p.a++; sessao.acertos++; } else { p.e++; sessao.erradas.push(q); }
        p.ult = certo;
        prog[q.id] = p;
        salvar();

        const verso = el("div", "verso");
        verso.appendChild(el("div", "resultado " + (certo ? "acertou" : "errou"), certo ? "🎉 Você acertou!" : `😬 Você marcou ${LETRAS[k]}.`));
        const gab = el("p", "gabarito", "Gabarito: ");
        gab.appendChild(el("strong", "", LETRAS[q.resp]));
        verso.appendChild(gab);
        verso.appendChild(el("h3", "", certo ? "💡 Comentário" : "❗ Por que a resposta é " + LETRAS[q.resp]));
        verso.appendChild(el("p", "explicacao", q.exp));
        const icone = q.d === "Língua Portuguesa" ? "📘 Regra –" : q.d === "Atualidades 2026" ? "📰" : "📜";
        verso.appendChild(el("h3", "", `${icone} ${q.ref}`));
        verso.appendChild(el("blockquote", "texto-lei", q.lei));
        const prox = el("button", "botao grande", sessao.i + 1 < sessao.fila.length ? "Próxima →" : "Ver resultado");
        prox.type = "button";
        prox.addEventListener("click", () => { sessao.i++; sessao.i < sessao.fila.length ? questao() : fim(); });
        verso.appendChild(prox);
        card.appendChild(verso);
        prox.focus({ preventScroll: true });
    }

    function fim() {
        tela.innerHTML = "";
        window.scrollTo(0, 0);
        const total = sessao.fila.length;
        const pct = Math.round(sessao.acertos / total * 100);
        const card = el("div", "cartao fim");
        card.appendChild(el("span", "fim-icone", pct >= 80 ? "🏆" : pct >= 50 ? "💪" : "📖"));
        card.appendChild(el("h2", "", `${sessao.acertos} de ${total} (${pct}%)`));
        card.appendChild(el("p", "", pct >= 80 ? "Excelente! Ritmo de aprovação." : pct >= 50 ? "Bom caminho! Revise os erros abaixo." : "Releia os artigos abaixo e tente de novo."));
        const lista = el("div", "fim-erros");
        sessao.erradas.forEach(q => {
            const d = el("div");
            d.append(el("strong", "", `${q.ref} — resposta ${LETRAS[q.resp]}`), document.createTextNode(q.exp));
            lista.appendChild(d);
        });
        card.appendChild(lista);
        if (sessao.erradas.length) {
            const b = el("button", "botao grande", "Refazer as que errei");
            b.type = "button";
            const erradas = sessao.erradas;
            b.addEventListener("click", () => iniciar(embaralhar(erradas)));
            card.appendChild(b);
        }
        const v = el("button", "botao secundario grande", "Voltar às questões");
        v.type = "button";
        v.addEventListener("click", inicio);
        card.appendChild(v);
        tela.appendChild(card);
    }

    // Embaralha a ordem das alternativas? Não: a VUNESP mantém a ordem; mantemos a original.
    inicio();
})();
