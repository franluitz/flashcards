// =============================================================
// ORGANIZADOR DE ESTUDOS - script.js
// Lógica do app: cadastro de tarefas, armazenamento local,
// estatísticas e os recursos de PWA (Service Worker e instalação).
// =============================================================


// -------------------------------------------------------------
// 1. REGISTRO DO SERVICE WORKER  (o coração do PWA)
// -------------------------------------------------------------
// O Service Worker é um script que o navegador executa "por trás"
// da página. Ele intercepta as requisições e consegue responder
// com arquivos salvos em cache, permitindo que o app abra OFFLINE.
// Só funciona em HTTPS ou em http://localhost.
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./service-worker.js")
            .then(registro => console.log("Service Worker registrado:", registro.scope))
            .catch(erro => console.error("Falha ao registrar o Service Worker:", erro));
    });
}


// -------------------------------------------------------------
// 2. INSTALAÇÃO DO APP (botão "Instalar aplicativo")
// -------------------------------------------------------------
// Quando o site cumpre os requisitos de PWA (manifest + ícones +
// service worker + HTTPS), o Chrome/Edge disparam o evento
// "beforeinstallprompt". Guardamos esse evento para mostrar a
// janela de instalação só quando o usuário clicar no nosso botão.
let eventoInstalacao = null;
const botaoInstalar = document.getElementById("botaoInstalar");

window.addEventListener("beforeinstallprompt", evento => {
    evento.preventDefault();          // impede o aviso automático do navegador
    eventoInstalacao = evento;        // guarda para usar depois
    botaoInstalar.hidden = false;     // mostra o nosso botão
});

botaoInstalar.addEventListener("click", async () => {
    if (!eventoInstalacao) return;

    eventoInstalacao.prompt();                         // abre a janela de instalação
    const escolha = await eventoInstalacao.userChoice; // espera o usuário decidir
    console.log("Resultado da instalação:", escolha.outcome);

    eventoInstalacao = null;          // o evento só pode ser usado uma vez
    botaoInstalar.hidden = true;
});

// Disparado quando o app termina de ser instalado
window.addEventListener("appinstalled", () => {
    botaoInstalar.hidden = true;
    console.log("App instalado com sucesso!");
});


// -------------------------------------------------------------
// 3. AVISO DE ONLINE / OFFLINE
// -------------------------------------------------------------
// navigator.onLine diz se há conexão; os eventos "online" e
// "offline" avisam quando isso muda.
const statusConexao = document.getElementById("statusConexao");

function atualizarStatusConexao() {
    statusConexao.hidden = navigator.onLine;
}

window.addEventListener("online", atualizarStatusConexao);
window.addEventListener("offline", atualizarStatusConexao);
atualizarStatusConexao();


// -------------------------------------------------------------
// 4. ARMAZENAMENTO DAS TAREFAS (localStorage)
// -------------------------------------------------------------
// O localStorage guarda textos no próprio navegador, mesmo depois
// de fechar o app. Como ele só aceita texto, convertemos a lista
// de tarefas para JSON ao salvar e de volta para objeto ao ler.
const CHAVE_STORAGE = "studyplan-tarefas";

function carregarTarefas() {
    try {
        return JSON.parse(localStorage.getItem(CHAVE_STORAGE)) || [];
    } catch {
        return []; // se o dado estiver corrompido, começa do zero
    }
}

function salvarTarefas() {
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(tarefas));
}

// Lista principal do app. Cada tarefa tem o formato:
// { id, nome, disciplina, prazo: "AAAA-MM-DD", concluida: true/false }
let tarefas = carregarTarefas();


// -------------------------------------------------------------
// 5. ELEMENTOS DA PÁGINA
// -------------------------------------------------------------
const formTarefa = document.getElementById("formTarefa");
const campoNome = document.getElementById("nomeTarefa");
const campoDisciplina = document.getElementById("disciplina");
const campoPrazo = document.getElementById("prazo");
const filtroTarefas = document.getElementById("filtroTarefas");
const listaTarefas = document.getElementById("listaTarefas");
const estadoVazio = document.getElementById("estadoVazio");

// Ícone e cor de cada disciplina (usados no painel "Minhas disciplinas"
// e para montar as opções do campo "Disciplina" do formulário)
const DISCIPLINAS = {
    "Direito Penal":                 { icone: "⚖️", cor: "fundo-roxo" },
    "Direito Processual Penal":      { icone: "🔒", cor: "fundo-azul" },
    "Direito Processual Civil":      { icone: "📑", cor: "fundo-verde" },
    "Direito Constitucional":        { icone: "🏛️", cor: "fundo-roxo" },
    "Direito Administrativo":        { icone: "🏢", cor: "fundo-azul" },
    "Normas da Corregedoria (TJSP)": { icone: "📋", cor: "fundo-verde" },
    "Língua Portuguesa":             { icone: "✍️", cor: "fundo-roxo" },
    "Outras":                        { icone: "📝", cor: "fundo-azul" }
};

// Estilo usado para disciplinas antigas que não estão mais na lista acima
const ESTILO_PADRAO = { icone: "📝", cor: "fundo-azul" };

// Conteúdo programático do edital TJ-SP (Escrevente), usado pelo botão
// "Importar edital TJ-SP": cada tópico vira uma tarefa de estudo.
const EDITAL_TJSP = {
    "Direito Penal": [
        "CP – Crimes contra a fé pública (arts. 293 a 305)",
        "CP – Falsidades específicas (arts. 307 e 308)",
        "CP – Fraudes em certames de interesse público (art. 311-A)",
        "CP – Crimes de funcionário público contra a administração (arts. 312 a 317)",
        "CP – Crimes de funcionário público contra a administração (arts. 319 a 333)",
        "CP – Desobediência e desacato (arts. 336 e 337)",
        "CP – Crimes contra a administração da justiça (arts. 339 a 347, 357 e 359)"
    ],
    "Direito Processual Penal": [
        "CPP – Sujeitos e auxiliares da justiça / impedimentos e suspeições (arts. 251 a 258)",
        "CPP – Defensor (arts. 261 a 267)",
        "CPP – Intimações (art. 274)",
        "CPP – Citações e intimações (arts. 351 a 372)",
        "CPP – Procedimentos (arts. 394 a 405)",
        "CPP – Tribunal do Júri (arts. 406 a 497)",
        "CPP – Arts. 531 a 538 (procedimento sumário)",
        "CPP – Arts. 541 a 548",
        "CPP – Recursos e disposições gerais (arts. 574 a 667)",
        "Lei 9.099/95 – Juizados Especiais Criminais (arts. 60 a 83, 88 e 89)"
    ],
    "Direito Processual Civil": [
        "CPC – Juízes e auxiliares da justiça / impedimento e suspeição (arts. 144 a 155)",
        "CPC – Prazos e atos processuais (arts. 188 a 237)",
        "CPC – Citações e intimações (arts. 238 a 275)",
        "CPC – Tutela provisória (arts. 294 a 311)",
        "CPC – Procedimento comum (arts. 318 a 512)",
        "CPC – Cumprimento de sentença (arts. 513 a 538)",
        "CPC – Dos recursos (arts. 994 a 1026)",
        "Lei 9.099/95 – Juizados Especiais Cíveis (arts. 3º a 19)",
        "Lei 12.153/09 – Juizados Especiais da Fazenda Pública (lei completa)"
    ],
    "Direito Constitucional": [
        "CF/88 – Direitos e deveres individuais e coletivos (art. 5º)",
        "CF/88 – Direitos sociais, nacionalidade e direitos políticos (arts. 6º a 17)",
        "CF/88 – Administração Pública e servidores (Título III, Cap. VII, Seções I e II – arts. 37 a 41)",
        "CF/88 – Órgãos do Poder Judiciário (art. 92)"
    ],
    "Direito Administrativo": [
        "Lei Estadual 10.261/68 – Estatuto dos Servidores de SP (arts. 1º a 86)",
        "Lei Estadual 10.261/68 – Arts. 171 a 175",
        "Lei Estadual 10.261/68 – Regime disciplinar e penalidades (arts. 239 a 323)",
        "Lei 8.429/92 – Improbidade Administrativa (lei completa, atualizada)"
    ],
    "Normas da Corregedoria (TJSP)": [
        "Regimento Interno do TJSP e Normas da Corregedoria – rotinas cartorárias",
        "Normas da Corregedoria – processo eletrônico e prazos internos"
    ],
    "Língua Portuguesa": [
        "Português – Interpretação de texto",
        "Português – Ortografia, acentuação e hífen",
        "Português – Crase",
        "Português – Concordância verbal e nominal",
        "Português – Regência verbal e nominal",
        "Português – Colocação pronominal",
        "Português – Pontuação",
        "Português – Classes de palavras, conjunções e vozes verbais",
        "Português – Sinônimos, antônimos e parônimos"
    ]
};


// -------------------------------------------------------------
// 6. FUNÇÕES AUXILIARES DE DATA
// -------------------------------------------------------------
// Data de hoje no formato "AAAA-MM-DD" (mesmo formato do <input type="date">).
// Usamos a data local, e não toISOString(), que usa o fuso UTC.
function hojeISO() {
    const d = new Date();
    const mes = String(d.getMonth() + 1).padStart(2, "0");
    const dia = String(d.getDate()).padStart(2, "0");
    return `${d.getFullYear()}-${mes}-${dia}`;
}

// "2026-10-23" -> "23/10/2026"
function formatarData(dataISO) {
    const [ano, mes, dia] = dataISO.split("-");
    return `${dia}/${mes}/${ano}`;
}


// -------------------------------------------------------------
// 7. AÇÕES: ADICIONAR, CONCLUIR E EXCLUIR
// -------------------------------------------------------------
// Toda ação segue o mesmo ciclo:  altera a lista -> salva -> redesenha a tela
formTarefa.addEventListener("submit", evento => {
    evento.preventDefault(); // evita que o formulário recarregue a página

    const nome = campoNome.value.trim();
    if (!nome) return;

    tarefas.push({
        id: Date.now(),          // número único baseado no horário
        nome: nome,
        disciplina: campoDisciplina.value,
        prazo: campoPrazo.value,
        concluida: false
    });

    salvarTarefas();
    renderizar();

    formTarefa.reset();
    campoNome.focus();
});

function alternarConclusao(id) {
    const tarefa = tarefas.find(t => t.id === id);
    tarefa.concluida = !tarefa.concluida;
    salvarTarefas();
    renderizar();
}

function excluirTarefa(id) {
    if (!confirm("Deseja excluir esta tarefa?")) return;
    tarefas = tarefas.filter(t => t.id !== id);
    salvarTarefas();
    renderizar();
}

// Botão "+ Nova tarefa": leva até o formulário e foca no campo de nome
document.getElementById("botaoNovaTarefa").addEventListener("click", () => {
    formTarefa.scrollIntoView({ behavior: "smooth" });
    campoNome.focus({ preventScroll: true });
});

filtroTarefas.addEventListener("change", renderizar);

// Preenche o <select> de disciplinas a partir do objeto DISCIPLINAS,
// assim basta editar a lista em um único lugar.
Object.keys(DISCIPLINAS).forEach(nome => {
    const opcao = document.createElement("option");
    opcao.textContent = nome;
    campoDisciplina.appendChild(opcao);
});

// Botão "Importar edital TJ-SP": cria uma tarefa para cada tópico do
// edital, com prazos de um tópico por dia a partir de amanhã.
// Tópicos que já existem (mesmo nome e disciplina) não são duplicados.
document.getElementById("botaoImportarEdital").addEventListener("click", () => {
    const novos = [];
    Object.entries(EDITAL_TJSP).forEach(([disciplina, topicos]) => {
        topicos.forEach(nome => {
            const existe = tarefas.some(t => t.nome === nome && t.disciplina === disciplina);
            if (!existe) novos.push({ nome, disciplina });
        });
    });

    if (novos.length === 0) {
        alert("Todos os tópicos do edital já estão nas suas tarefas.");
        return;
    }
    if (!confirm(`Adicionar ${novos.length} tópico(s) do edital TJ-SP como tarefas (um por dia, a partir de amanhã)?`)) return;

    const base = new Date();
    novos.forEach((topico, i) => {
        const d = new Date(base.getFullYear(), base.getMonth(), base.getDate() + i + 1);
        const prazo = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
        tarefas.push({
            id: Date.now() + i,   // soma i para os ids não se repetirem
            nome: topico.nome,
            disciplina: topico.disciplina,
            prazo: prazo,
            concluida: false
        });
    });

    salvarTarefas();
    renderizar();
});


// -------------------------------------------------------------
// 8. DESENHAR A TELA (renderização)
// -------------------------------------------------------------
// A tela é sempre recriada a partir do array "tarefas".
// Assim a interface nunca fica diferente dos dados salvos.
function renderizar() {
    renderizarLista();
    renderizarResumo();
    renderizarDisciplinas();
    renderizarCalendario();
}

function renderizarLista() {
    const filtro = filtroTarefas.value;
    const hoje = hojeISO();

    // Aplica o filtro escolhido e ordena pelo prazo mais próximo
    const visiveis = tarefas
        .filter(t => filtro === "todas"
            || (filtro === "pendentes" && !t.concluida)
            || (filtro === "concluidas" && t.concluida))
        .sort((a, b) => a.prazo.localeCompare(b.prazo));

    listaTarefas.innerHTML = "";
    estadoVazio.hidden = visiveis.length > 0;

    visiveis.forEach(tarefa => {
        const atrasada = !tarefa.concluida && tarefa.prazo < hoje;

        const item = document.createElement("li");
        item.className = "tarefa";
        if (tarefa.concluida) item.classList.add("concluida");
        if (atrasada) item.classList.add("atrasada");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tarefa.concluida;
        checkbox.setAttribute("aria-label", "Marcar como concluída");
        checkbox.addEventListener("change", () => alternarConclusao(tarefa.id));

        // Usamos textContent (e não innerHTML) para o texto digitado pelo
        // usuário: assim, se alguém digitar código HTML, ele aparece como
        // texto comum e não é executado (proteção contra XSS).
        const info = document.createElement("div");
        info.className = "tarefa-info";
        const titulo = document.createElement("strong");
        titulo.textContent = tarefa.nome;
        const detalhes = document.createElement("p");
        detalhes.textContent = `${tarefa.disciplina} • Prazo: ${formatarData(tarefa.prazo)}`
            + (atrasada ? " • Atrasada!" : "");
        info.append(titulo, detalhes);

        const botaoExcluir = document.createElement("button");
        botaoExcluir.type = "button";
        botaoExcluir.className = "botao-excluir";
        botaoExcluir.textContent = "🗑️";
        botaoExcluir.setAttribute("aria-label", "Excluir tarefa");
        botaoExcluir.addEventListener("click", () => excluirTarefa(tarefa.id));

        item.append(checkbox, info, botaoExcluir);
        listaTarefas.appendChild(item);
    });
}

function renderizarResumo() {
    const total = tarefas.length;
    const concluidas = tarefas.filter(t => t.concluida).length;
    const pendentes = total - concluidas;
    const porcentagem = total === 0 ? 0 : Math.round((concluidas / total) * 100);

    document.getElementById("totalTarefas").textContent = total;
    document.getElementById("totalConcluidas").textContent = concluidas;
    document.getElementById("totalPendentes").textContent = pendentes;
    document.getElementById("totalProgresso").textContent = porcentagem + "%";

    document.getElementById("progressoTexto").textContent = porcentagem + "%";
    document.getElementById("barraPreenchida").style.width = porcentagem + "%";

    // Mensagem motivacional de acordo com o progresso
    let mensagem;
    if (total === 0) mensagem = "Cadastre suas primeiras tarefas para começar!";
    else if (porcentagem === 100) mensagem = "Parabéns! Todas as tarefas foram concluídas! 🎉";
    else if (porcentagem >= 50) mensagem = "Mais da metade concluída. Continue assim!";
    else mensagem = `Você tem ${pendentes} tarefa(s) pendente(s). Bora estudar!`;
    document.getElementById("mensagemProgresso").textContent = mensagem;
}

function renderizarDisciplinas() {
    const container = document.getElementById("listaDisciplinas");
    container.innerHTML = "";

    // Inclui também disciplinas antigas que ainda tenham tarefas salvas
    const nomes = new Set([...Object.keys(DISCIPLINAS), ...tarefas.map(t => t.disciplina)]);

    nomes.forEach(nome => {
        const estilo = DISCIPLINAS[nome] || ESTILO_PADRAO;
        const daDisciplina = tarefas.filter(t => t.disciplina === nome);
        const feitas = daDisciplina.filter(t => t.concluida).length;

        const item = document.createElement("div");
        item.className = "disciplina-item";
        item.innerHTML = `
            <div class="disciplina-icone ${estilo.cor}">${estilo.icone}</div>
            <div class="disciplina-info">
                <strong>${nome}</strong>
                <p>${daDisciplina.length === 0
                    ? "Nenhuma tarefa"
                    : `${feitas} de ${daDisciplina.length} tarefa(s) concluída(s)`}</p>
            </div>
        `;
        container.appendChild(item);
    });
}

function renderizarCalendario() {
    const container = document.getElementById("listaCalendario");
    container.innerHTML = "";

    // Agrupa as tarefas pendentes por data: { "2026-10-25": [tarefa, ...], ... }
    const porData = {};
    tarefas
        .filter(t => !t.concluida)
        .forEach(t => {
            porData[t.prazo] = porData[t.prazo] || [];
            porData[t.prazo].push(t);
        });

    const datas = Object.keys(porData).sort();

    if (datas.length === 0) {
        container.innerHTML = '<p class="texto-vazio">Nenhum prazo pendente. 🎉</p>';
        return;
    }

    const hoje = hojeISO();
    datas.forEach(data => {
        const bloco = document.createElement("div");
        bloco.className = "dia-calendario";

        const titulo = document.createElement("h3");
        titulo.textContent = formatarData(data)
            + (data === hoje ? " (hoje)" : data < hoje ? " (atrasado)" : "");

        const lista = document.createElement("ul");
        porData[data].forEach(t => {
            const li = document.createElement("li");
            li.textContent = `${t.nome} — ${t.disciplina}`;
            lista.appendChild(li);
        });

        bloco.append(titulo, lista);
        container.appendChild(bloco);
    });
}


// -------------------------------------------------------------
// 9. MENU: destaca o item clicado
// -------------------------------------------------------------
document.querySelectorAll(".menu-item").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".menu-item.ativo")?.classList.remove("ativo");
        link.classList.add("ativo");
    });
});


// Primeira renderização ao abrir o app
renderizar();
