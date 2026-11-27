// =============================================================
// ABAS: Flashcards / Questões / Citações
// + tela de Citações para redação
// =============================================================
(function () {
    const abas = {
        flashcards: document.getElementById("abaFlashcards"),
        questoes: document.getElementById("abaQuestoes"),
        citacoes: document.getElementById("abaCitacoes")
    };
    const telaCit = document.getElementById("telaCitacoes");
    const telaQst = document.getElementById("telaQuestoes");
    const telasFlash = ["telaInicio", "telaEstudo", "telaFim"].map(id => document.getElementById(id));
    const chips = document.getElementById("temasCitacoes");
    const lista = document.getElementById("listaCitacoes");
    let telaFlashVisivel = telasFlash[0];
    let temaAtual = "Todos";

    function mostrarAba(qual) {
        if (!abas[qual]) qual = "flashcards";
        const flashAberto = telasFlash.some(t => !t.hidden);
        if (flashAberto) telaFlashVisivel = telasFlash.find(t => !t.hidden);
        telasFlash.forEach(t => t.hidden = true);
        if (qual === "flashcards") telaFlashVisivel.hidden = false;
        if (telaCit) telaCit.hidden = qual !== "citacoes";
        if (telaQst) telaQst.hidden = qual !== "questoes";
        Object.entries(abas).forEach(([nome, b]) => {
            if (!b) return;
            b.classList.toggle("ativa", nome === qual);
            b.setAttribute("aria-selected", nome === qual);
        });
        window.scrollTo(0, 0);
        try { localStorage.setItem("studyplan-aba", qual); } catch (e) {}
    }
    window.mostrarAba = mostrarAba;

    function el(tag, classe, texto) {
        const e = document.createElement(tag);
        if (classe) e.className = classe;
        if (texto !== undefined) e.textContent = texto;
        return e;
    }

    function montarChips() {
        chips.innerHTML = "";
        ["Todos", ...Object.keys(TEMAS_CITACOES)].forEach(tema => {
            const qtd = tema === "Todos" ? CITACOES.length : CITACOES.filter(c => c.temas.includes(tema)).length;
            const b = el("button", "chip" + (tema === temaAtual ? " ativa" : ""),
                (tema === "Todos" ? "📚 " : TEMAS_CITACOES[tema] + " ") + tema + " (" + qtd + ")");
            b.type = "button";
            b.addEventListener("click", () => { temaAtual = tema; montarChips(); montarLista(); });
            chips.appendChild(b);
        });
    }

    function montarLista() {
        lista.innerHTML = "";
        CITACOES.filter(c => temaAtual === "Todos" || c.temas.includes(temaAtual)).forEach(c => {
            const card = el("article", "citacao");
            const tags = el("div", "citacao-tags");
            c.temas.forEach(t => tags.appendChild(el("span", "etiqueta", TEMAS_CITACOES[t] + " " + t)));
            card.appendChild(tags);
            card.appendChild(el("blockquote", "citacao-frase", "“" + c.frase + "”"));
            const autor = el("p", "citacao-autor");
            autor.appendChild(el("strong", "", c.autor));
            autor.appendChild(document.createTextNode(" — " + c.fonte));
            card.appendChild(autor);
            const det = el("details", "citacao-uso");
            det.appendChild(el("summary", "", "✍️ Como usar na redação"));
            det.appendChild(el("p", "", c.uso));
            card.appendChild(det);
            lista.appendChild(card);
        });
    }

    Object.entries(abas).forEach(([nome, b]) => b && b.addEventListener("click", () => mostrarAba(nome)));
    if (chips && lista && typeof CITACOES !== "undefined") { montarChips(); montarLista(); }
    let salva = null;
    try { salva = localStorage.getItem("studyplan-aba"); } catch (e) {}
    if (salva && salva !== "flashcards") mostrarAba(salva);
})();
