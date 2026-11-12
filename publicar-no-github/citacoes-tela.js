// =============================================================
// ABA "CITAÇÕES": alterna entre Flashcards e Citações e
// monta a lista de citações filtrada por tema.
// =============================================================
(function () {
    const abaFlash = document.getElementById("abaFlashcards");
    const abaCit = document.getElementById("abaCitacoes");
    const telaCit = document.getElementById("telaCitacoes");
    const telasFlash = ["telaInicio", "telaEstudo", "telaFim"].map(id => document.getElementById(id));
    const chips = document.getElementById("temasCitacoes");
    const lista = document.getElementById("listaCitacoes");
    let telaFlashVisivel = telasFlash[0];
    let temaAtual = "Todos";

    function mostrarAba(qual) {
        const citacoes = qual === "citacoes";
        if (citacoes) {
            telaFlashVisivel = telasFlash.find(t => !t.hidden) || telasFlash[0];
            telasFlash.forEach(t => t.hidden = true);
        } else {
            telaFlashVisivel.hidden = false;
        }
        telaCit.hidden = !citacoes;
        abaCit.classList.toggle("ativa", citacoes);
        abaFlash.classList.toggle("ativa", !citacoes);
        abaCit.setAttribute("aria-selected", citacoes);
        abaFlash.setAttribute("aria-selected", !citacoes);
        window.scrollTo(0, 0);
        try { localStorage.setItem("studyplan-aba", qual); } catch (e) {}
    }

    function el(tag, classe, texto) {
        const e = document.createElement(tag);
        if (classe) e.className = classe;
        if (texto !== undefined) e.textContent = texto;
        return e;
    }

    function montarChips() {
        chips.innerHTML = "";
        const temas = ["Todos", ...Object.keys(TEMAS_CITACOES)];
        temas.forEach(tema => {
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

    abaFlash.addEventListener("click", () => mostrarAba("flashcards"));
    abaCit.addEventListener("click", () => mostrarAba("citacoes"));
    montarChips();
    montarLista();
    let salva = null;
    try { salva = localStorage.getItem("studyplan-aba"); } catch (e) {}
    if (salva === "citacoes") mostrarAba("citacoes");
})();
