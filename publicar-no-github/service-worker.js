// =============================================================
// SERVICE WORKER - permite que o app funcione OFFLINE
// =============================================================
// Ciclo de vida de um Service Worker:
//   1. install  -> baixa e guarda no cache os arquivos do app
//   2. activate -> limpa caches de versões antigas
//   3. fetch    -> intercepta cada requisição da página
//
// IMPORTANTE: sempre que alterar algum arquivo do app (HTML, CSS,
// JS...), mude a versão abaixo (v2, v3...). Assim o navegador
// percebe que existe um Service Worker novo e atualiza o cache.
const CACHE_NAME = "studyplan-v5";

// Arquivos essenciais do app ("app shell") guardados para uso offline
const arquivos = [
    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./flashcards.html",
    "./flashcards.css",
    "./flashcards.js",
    "./flashcards-dados.js",
    "./flashcards-dados-2.js",
    "./flashcards-portugues.js",
    "./manifest.json",
    "./icons/icon-192.png",
    "./icons/icon-512.png",
    "./icons/icon-maskable-512.png"
];


// 1. INSTALAÇÃO: abre o cache e salva todos os arquivos da lista
self.addEventListener("install", event => {
    // waitUntil faz o navegador esperar o cache terminar antes de
    // considerar a instalação concluída
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(arquivos))
    );

    // Ativa a nova versão sem esperar outras abas fecharem
    self.skipWaiting();
});


// 2. ATIVAÇÃO: remove caches de versões anteriores
self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys()
            .then(chaves => Promise.all(
                chaves
                    .filter(chave => chave !== CACHE_NAME)
                    .map(chave => caches.delete(chave))
            ))
            // passa a controlar as páginas já abertas imediatamente
            .then(() => self.clients.claim())
    );
});


// 3. REQUISIÇÕES: estratégia "Cache First" (primeiro o cache)
//    - Se o arquivo está no cache, responde na hora (rápido e offline).
//    - Se não está, busca na internet e guarda uma cópia no cache.
//    - Se estiver offline e for a abertura de uma página, entrega o index.html.
self.addEventListener("fetch", event => {

    // Trata apenas requisições GET do mesmo endereço do app
    if (
        event.request.method !== "GET" ||
        new URL(event.request.url).origin !== self.location.origin
    ) {
        return;
    }

    event.respondWith(
        caches.match(event.request).then(respostaCache => {
            if (respostaCache) {
                return respostaCache;
            }

            return fetch(event.request)
                .then(respostaRede => {
                    // Guarda uma cópia para a próxima vez (clone, pois a
                    // resposta só pode ser lida uma vez)
                    if (respostaRede.ok) {
                        const copia = respostaRede.clone();
                        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copia));
                    }
                    return respostaRede;
                })
                .catch(() => {
                    // Sem internet e sem cache: se for navegação, abre o app
                    if (event.request.mode === "navigate") {
                        return caches.match("./index.html");
                    }
                });
        })
    );
});
