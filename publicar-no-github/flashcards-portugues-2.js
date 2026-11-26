// =============================================================
// FLASHCARDS TJ-SP - LÍNGUA PORTUGUESA POR TEMA (estilo VUNESP)
// Campo "t" = tema, usado no seletor de temas de Português.
// =============================================================

CARTOES.push(

// ===================== MODOS E TEMPOS VERBAIS =====================
{ id: "pt2-mt1", d: "Língua Portuguesa", t: "Modos e tempos verbais", ref: "Modo subjuntivo",
  af: "Em “Espero que todos estejam presentes na audiência”, a forma “estejam” está no presente do subjuntivo.",
  c: true, lei: "O subjuntivo exprime hipótese, desejo ou incerteza. Presente do subjuntivo: que eu esteja, que ele esteja, que eles estejam.",
  exp: "Correto. O verbo “esperar” expressa desejo e pede o subjuntivo na oração seguinte." },

{ id: "pt2-mt2", d: "Língua Portuguesa", t: "Modos e tempos verbais", ref: "Correlação de tempos",
  af: "Em “Se ele estudasse mais, passaria no concurso”, há correlação entre o pretérito imperfeito do subjuntivo e o futuro do pretérito do indicativo.",
  c: true, lei: "Hipótese no passado/presente: SE + pretérito imperfeito do subjuntivo (estudasse) → futuro do pretérito (passaria).",
  exp: "Correto. É a correlação típica das orações condicionais hipotéticas." },

{ id: "pt2-mt3", d: "Língua Portuguesa", t: "Modos e tempos verbais", ref: "Correlação de tempos",
  af: "A frase “Se eu tivesse tempo, irei à reunião” respeita a correlação verbal exigida pela norma-padrão.",
  c: false, lei: "Correlações corretas: “Se eu tiver tempo, irei” (futuro do subjuntivo + futuro do presente) ou “Se eu tivesse tempo, iria” (imperfeito do subjuntivo + futuro do pretérito).",
  exp: "“Tivesse” pede “iria”, e não “irei”. Erro de correlação muito cobrado pela VUNESP." },

{ id: "pt2-mt4", d: "Língua Portuguesa", t: "Modos e tempos verbais", ref: "Pretérito mais-que-perfeito",
  af: "Em “Eu já tinha saído quando você ligou”, a locução “tinha saído” está no pretérito mais-que-perfeito composto do indicativo.",
  c: true, lei: "Mais-que-perfeito: ação passada anterior a outra também passada. Simples: “saíra”. Composto: “tinha/havia saído”.",
  exp: "Correto. “Tinha saído” equivale a “saíra”." },

{ id: "pt2-mt5", d: "Língua Portuguesa", t: "Modos e tempos verbais", ref: "Pretérito mais-que-perfeito simples",
  af: "A forma “fizera”, em “Ele fizera o relatório antes do prazo”, está no pretérito perfeito do indicativo.",
  c: false, lei: "Pretérito perfeito: fez. Pretérito mais-que-perfeito simples: fizera (= tinha feito).",
  exp: "“Fizera” é pretérito MAIS-QUE-PERFEITO simples." },

{ id: "pt2-mt6", d: "Língua Portuguesa", t: "Modos e tempos verbais", ref: "Imperativo – uniformidade de tratamento",
  af: "A frase “Venha logo e traz os documentos” mantém a uniformidade de tratamento exigida pela norma-padrão.",
  c: false, lei: "Não se misturam as pessoas “tu” e “você”: “Vem e traz” (tu) ou “Venha e traga” (você).",
  exp: "“Venha” é da 3ª pessoa (você) e “traz” da 2ª (tu). O correto seria “Venha logo e traga os documentos”." },

{ id: "pt2-mt7", d: "Língua Portuguesa", t: "Modos e tempos verbais", ref: "Imperativo negativo",
  af: "Pela norma-padrão, o imperativo negativo de “fazer” na 2ª pessoa do singular (tu) é “não faças”.",
  c: true, lei: "O imperativo negativo é formado pelo presente do subjuntivo: não faças (tu), não faça (você), não façamos, não façais, não façam.",
  exp: "Correto. “Não faz isso” é forma coloquial." },

{ id: "pt2-mt8", d: "Língua Portuguesa", t: "Modos e tempos verbais", ref: "Futuro do pretérito – polidez",
  af: "Em “Você poderia me enviar o processo?”, o futuro do pretérito é usado para expressar polidez.",
  c: true, lei: "O futuro do pretérito (poderia, gostaria) expressa fato condicionado, incerteza ou atenua um pedido (polidez).",
  exp: "Correto." },

{ id: "pt2-mt9", d: "Língua Portuguesa", t: "Modos e tempos verbais", ref: "Presente histórico",
  af: "Em “Em 1822, D. Pedro proclama a Independência”, o presente do indicativo foi empregado para narrar fato passado.",
  c: true, lei: "Presente histórico (narrativo): uso do presente para relatar fatos passados, dando-lhes vivacidade.",
  exp: "Correto." },

{ id: "pt2-mt10", d: "Língua Portuguesa", t: "Modos e tempos verbais", ref: "Verbo “caber”",
  af: "O presente do subjuntivo do verbo “caber” é “que ele caba”.",
  c: false, lei: "Caber (irregular): eu caibo; que eu caiba, que ele caiba; pretérito: coube; futuro do subjuntivo: couber.",
  exp: "O correto é “que ele CAIBA” (e “se couber recurso”)." },

{ id: "pt2-mt11", d: "Língua Portuguesa", t: "Modos e tempos verbais", ref: "Gerundismo",
  af: "A construção “Vou estar enviando o documento amanhã” é recomendada pela norma-padrão em textos formais.",
  c: false, lei: "Gerundismo: uso desnecessário de “ir + estar + gerúndio” para ação futura pontual. Prefira “enviarei” ou “vou enviar”.",
  exp: "É vício de linguagem (gerundismo), condenado em textos formais." },

{ id: "pt2-mt12", d: "Língua Portuguesa", t: "Modos e tempos verbais", ref: "Futuro do subjuntivo",
  af: "Em “Quando o juiz decidir, as partes serão intimadas”, “decidir” está no futuro do subjuntivo.",
  c: true, lei: "Futuro do subjuntivo: quando eu decidir, se ele decidir. Indica fato futuro hipotético, depois de “quando”, “se”, “enquanto”.",
  exp: "Correto. Embora coincida com o infinitivo nesse verbo, a função aqui é de futuro do subjuntivo." },

// ===================== PRONOMES =====================
{ id: "pt2-pr1", d: "Língua Portuguesa", t: "Pronomes", ref: "Pronome após preposição",
  af: "A frase “Entre mim e você não há desentendimento” está de acordo com a norma-padrão.",
  c: true, lei: "Depois de preposição usam-se os pronomes oblíquos tônicos: entre mim e ti, para mim, sem mim.",
  exp: "Correto. “Entre eu e você” é inadequado." },

{ id: "pt2-pr2", d: "Língua Portuguesa", t: "Pronomes", ref: "Pronome “o” x “lhe”",
  af: "Em “Eu lhe vi na audiência”, o pronome está empregado conforme a norma-padrão.",
  c: false, lei: "Verbo transitivo direto → o, a, os, as (Eu o vi). Verbo transitivo indireto (com “a”) → lhe (Eu lhe obedeço).",
  exp: "“Ver” é transitivo direto: o correto é “Eu O vi” (ou “a vi”)." },

{ id: "pt2-pr3", d: "Língua Portuguesa", t: "Pronomes", ref: "Pronome “lhe”",
  af: "Em “Entreguei-lhe o processo”, o pronome “lhe” funciona como objeto indireto.",
  c: true, lei: "Entregar algo (OD) a alguém (OI). O pronome “lhe” substitui o complemento introduzido por “a”: entreguei o processo a ele = entreguei-lhe o processo.",
  exp: "Correto." },

{ id: "pt2-pr4", d: "Língua Portuguesa", t: "Pronomes", ref: "Pronome “lo”",
  af: "Substituindo o complemento por pronome, “É preciso analisar o processo” fica “É preciso analisá-lo”.",
  c: true, lei: "Verbo terminado em R, S ou Z: cai a consoante final e o pronome vira LO, LA, LOS, LAS (analisá-lo, fê-lo, fi-lo).",
  exp: "Correto." },

{ id: "pt2-pr5", d: "Língua Portuguesa", t: "Pronomes", ref: "Pronome “no”",
  af: "“Os servidores entregaram os autos” fica, com pronome, “Os servidores entregaram-os”.",
  c: false, lei: "Verbo terminado em som nasal (-am, -em, -ão, -õe): o pronome vira NO, NA, NOS, NAS (entregaram-nos, põe-no).",
  exp: "O correto é “entregaram-NOS”." },

{ id: "pt2-pr6", d: "Língua Portuguesa", t: "Pronomes", ref: "Pronome relativo “onde”",
  af: "Pela norma-padrão, em “A reunião onde discutimos o caso foi longa”, seria mais adequado empregar “em que” no lugar de “onde”.",
  c: true, lei: "“Onde” deve retomar LUGAR físico. Para tempo, situação ou evento, use “em que” ou “na qual”.",
  exp: "Correto. Reunião não é lugar físico: “A reunião em que (na qual) discutimos…”." },

{ id: "pt2-pr7", d: "Língua Portuguesa", t: "Pronomes", ref: "Demonstrativos – retomada",
  af: "Em “O prazo terminou. Isso preocupou a defesa”, o pronome “isso” retoma uma informação já mencionada.",
  c: true, lei: "Isso/esse: retomam o que já foi dito (anafórico). Isto/este: anunciam o que vai ser dito (catafórico).",
  exp: "Correto." },

{ id: "pt2-pr8", d: "Língua Portuguesa", t: "Pronomes", ref: "Pronome “consigo”",
  af: "Dirigindo-se ao interlocutor, a frase “O diretor quer falar consigo” está de acordo com a norma-padrão.",
  c: false, lei: "“Si” e “consigo” são reflexivos: referem-se ao próprio sujeito (Ele trouxe os documentos consigo). Para o interlocutor: “com você”, “com o senhor”.",
  exp: "Pela norma-padrão, o correto é “O diretor quer falar com você (com o senhor)”." },

{ id: "pt2-pr9", d: "Língua Portuguesa", t: "Pronomes", ref: "Pronome após preposição sem infinitivo",
  af: "Em “Para mim, a decisão foi justa”, o correto seria “Para eu, a decisão foi justa”.",
  c: false, lei: "Usa-se “eu” apenas quando o pronome é SUJEITO de um infinitivo: “para eu assinar”. Sem verbo no infinitivo, usa-se “mim”.",
  exp: "“Para mim” está correto: o pronome não é sujeito de verbo nenhum." },

{ id: "pt2-pr10", d: "Língua Portuguesa", t: "Pronomes", ref: "Pronome relativo “o qual”",
  af: "Em “As testemunhas, as quais foram ouvidas ontem, confirmaram a versão”, o pronome relativo concorda com o antecedente “testemunhas”.",
  c: true, lei: "O qual / a qual / os quais / as quais concordam em gênero e número com o antecedente.",
  exp: "Correto." },

{ id: "pt2-pr11", d: "Língua Portuguesa", t: "Pronomes", ref: "Pronomes de tratamento",
  af: "Ao se dirigir diretamente ao juiz, deve-se usar “Sua Excelência”.",
  c: false, lei: "VOSSA Excelência: quando se fala COM a autoridade. SUA Excelência: quando se fala SOBRE ela. O verbo e os possessivos ficam na 3ª pessoa.",
  exp: "Falando diretamente com o juiz, usa-se VOSSA Excelência." },

// ===================== ADVÉRBIOS =====================
{ id: "pt2-adv1", d: "Língua Portuguesa", t: "Advérbios", ref: "Advérbio – função",
  af: "Em “Ela é muito competente”, o advérbio “muito” intensifica um adjetivo.",
  c: true, lei: "O advérbio modifica verbo, adjetivo ou outro advérbio, indicando circunstância (tempo, lugar, modo, intensidade etc.).",
  exp: "Correto. “Competente” é adjetivo." },

{ id: "pt2-adv2", d: "Língua Portuguesa", t: "Advérbios", ref: "Advérbio de dúvida",
  af: "Em “Talvez a audiência seja adiada”, “talvez” é advérbio de afirmação.",
  c: false, lei: "Advérbios de dúvida: talvez, possivelmente, provavelmente, acaso. Afirmação: sim, certamente, realmente.",
  exp: "“Talvez” é advérbio de DÚVIDA (por isso leva o verbo ao subjuntivo)." },

{ id: "pt2-adv3", d: "Língua Portuguesa", t: "Advérbios", ref: "Advérbio modalizador",
  af: "Em “Infelizmente, o prazo expirou”, o advérbio expressa um ponto de vista do enunciador sobre o fato.",
  c: true, lei: "Advérbios como “infelizmente”, “felizmente”, “certamente” e “obviamente” são modalizadores: revelam a avaliação de quem fala.",
  exp: "Correto. A VUNESP costuma perguntar o que esse advérbio revela (opinião, lamento)." },

{ id: "pt2-adv4", d: "Língua Portuguesa", t: "Advérbios", ref: "Advérbios em “-mente” em sequência",
  af: "Na norma-padrão, é possível escrever “Agiu rápida e eficientemente”, usando o sufixo “-mente” apenas no último advérbio.",
  c: true, lei: "Em advérbios terminados em “-mente” coordenados, o sufixo pode aparecer só no último.",
  exp: "Correto." },

{ id: "pt2-adv5", d: "Língua Portuguesa", t: "Advérbios", ref: "Advérbio invariável",
  af: "Em “Os advogados falaram alto”, a palavra “alto” é advérbio e, por isso, permanece invariável.",
  c: true, lei: "Adjetivos empregados como advérbio (falar alto, custar caro, ver claro) ficam invariáveis.",
  exp: "Correto. Compare: “vozes altas” (adjetivo, varia)." },

{ id: "pt2-adv6", d: "Língua Portuguesa", t: "Advérbios", ref: "“Mais bem” antes de particípio",
  af: "A frase “Os candidatos melhores preparados foram aprovados” está de acordo com a norma-padrão.",
  c: false, lei: "Antes de particípio, usa-se “mais bem” e “mais mal”: “os candidatos mais bem preparados”.",
  exp: "O correto é “MAIS BEM preparados”." },

{ id: "pt2-adv7", d: "Língua Portuguesa", t: "Advérbios", ref: "Pronome x advérbio",
  af: "Em “Ninguém compareceu à sessão”, a palavra “ninguém” é advérbio de negação.",
  c: false, lei: "Ninguém, nada, nenhum: pronomes indefinidos. Advérbios de negação: não, nunca, jamais, tampouco.",
  exp: "“Ninguém” é PRONOME INDEFINIDO (e é sujeito da oração)." },

{ id: "pt2-adv8", d: "Língua Portuguesa", t: "Advérbios", ref: "Locução adverbial",
  af: "Em “O documento foi entregue às pressas”, “às pressas” é locução adverbial de modo.",
  c: true, lei: "Locução adverbial: duas ou mais palavras com valor de advérbio (às pressas, de vez em quando, à noite, sem dúvida).",
  exp: "Correto." },

{ id: "pt2-adv9", d: "Língua Portuguesa", t: "Advérbios", ref: "Advérbio de tempo",
  af: "Em “Ainda há recursos pendentes”, a palavra “ainda” expressa circunstância de tempo.",
  c: true, lei: "“Ainda”, “já”, “sempre”, “nunca”, “hoje”, “cedo” e “tarde” são advérbios de tempo.",
  exp: "Correto." },

{ id: "pt2-adv10", d: "Língua Portuguesa", t: "Advérbios", ref: "Advérbio de lugar",
  af: "Em “O réu mora longe do fórum”, “longe” é advérbio de modo.",
  c: false, lei: "Advérbios de lugar: aqui, ali, lá, longe, perto, dentro, fora, acima, abaixo.",
  exp: "“Longe” é advérbio de LUGAR." },

{ id: "pt2-adv11", d: "Língua Portuguesa", t: "Advérbios", ref: "Advérbio x adjetivo",
  af: "Em “Ela ficou meio preocupada”, a palavra “meio” é advérbio e, por isso, não concorda com “preocupada”.",
  c: true, lei: "“Meio” = um pouco → advérbio, invariável (meio preocupada). “Meio” = metade → numeral, varia (meia hora).",
  exp: "Correto. “Meia preocupada” estaria errado." },

{ id: "pt2-adv12", d: "Língua Portuguesa", t: "Advérbios", ref: "Advérbio de intensidade",
  af: "Em “Ele trabalha demais”, “demais” é advérbio de intensidade.",
  c: true, lei: "Advérbios de intensidade: muito, pouco, bastante, demais, tão, quase, assaz.",
  exp: "Correto." },

// ===================== PREPOSIÇÃO =====================
{ id: "pt2-prep1", d: "Língua Portuguesa", t: "Preposição", ref: "Valor semântico – meio",
  af: "Em “Ele veio de ônibus”, a preposição “de” estabelece relação de meio.",
  c: true, lei: "As preposições ligam termos e estabelecem relações: meio (de ônibus), causa (de fome), origem (de São Paulo), posse (livro de Ana).",
  exp: "Correto." },

{ id: "pt2-prep2", d: "Língua Portuguesa", t: "Preposição", ref: "Valor semântico – causa",
  af: "Em “Muitos morreram de fome”, a preposição “de” indica causa.",
  c: true, lei: "Morrer DE fome: a fome é a causa.",
  exp: "Correto." },

{ id: "pt2-prep3", d: "Língua Portuguesa", t: "Preposição", ref: "Valor semântico – origem",
  af: "Em “Saiu de casa cedo”, a preposição “de” indica destino.",
  c: false, lei: "“De” indica ponto de partida/origem (saiu de casa); “para”/“a” indicam destino (foi para casa).",
  exp: "Indica ORIGEM (ponto de partida)." },

{ id: "pt2-prep4", d: "Língua Portuguesa", t: "Preposição", ref: "Locução prepositiva",
  af: "Em “Ficou em casa por causa da chuva”, a locução “por causa de” indica finalidade.",
  c: false, lei: "“Por causa de”, “em razão de”, “devido a”: causa. “A fim de”, “para”: finalidade.",
  exp: "Indica CAUSA." },

{ id: "pt2-prep5", d: "Língua Portuguesa", t: "Preposição", ref: "Preposição + sujeito de infinitivo",
  af: "Pela norma-padrão, prefere-se “Chegou a hora de o juiz decidir” a “Chegou a hora do juiz decidir”.",
  c: true, lei: "Não se contrai a preposição com o artigo que inicia o SUJEITO de um verbo no infinitivo: “antes de o prazo acabar”, “apesar de o réu confessar”.",
  exp: "Correto. Ponto clássico de prova da VUNESP." },

{ id: "pt2-prep6", d: "Língua Portuguesa", t: "Preposição", ref: "Preposição + sujeito de infinitivo",
  af: "A frase “Apesar do réu ter confessado, o processo continuou” segue a norma-padrão.",
  c: false, lei: "Antes de sujeito de infinitivo, não se faz a contração: “Apesar de o réu ter confessado”.",
  exp: "O correto é “apesar DE O réu ter confessado”." },

{ id: "pt2-prep7", d: "Língua Portuguesa", t: "Preposição", ref: "“Sob” x “sobre”",
  af: "Em “O processo está sob análise”, a preposição “sob” poderia ser trocada por “sobre” sem alteração de sentido.",
  c: false, lei: "SOB = debaixo de, em situação de (sob análise, sob pressão). SOBRE = em cima de, a respeito de (sobre a mesa, falar sobre).",
  exp: "Mudaria o sentido: “sobre análise” significaria “a respeito da análise”." },

{ id: "pt2-prep8", d: "Língua Portuguesa", t: "Preposição", ref: "Preposições acidentais",
  af: "“Conforme”, “segundo”, “durante” e “mediante” são preposições acidentais.",
  c: true, lei: "Essenciais: a, ante, após, até, com, contra, de, desde, em, entre, para, perante, por, sem, sob, sobre, trás. Acidentais: palavras de outras classes usadas como preposição (conforme, segundo, durante, exceto, mediante).",
  exp: "Correto." },

{ id: "pt2-prep9", d: "Língua Portuguesa", t: "Preposição", ref: "Combinação x contração",
  af: "“Ao” (a + o) é combinação, pois a preposição se une ao artigo sem perda de fonema; já “do” (de + o) é contração.",
  c: true, lei: "Combinação: sem perda de som (ao, aos, aonde). Contração: com perda de som (do, no, pelo, à).",
  exp: "Correto." },

{ id: "pt2-prep10", d: "Língua Portuguesa", t: "Preposição", ref: "Valor semântico – oposição",
  af: "Em “O deputado votou contra o projeto”, a preposição “contra” indica oposição.",
  c: true, lei: "“Contra” expressa oposição ou direção contrária.",
  exp: "Correto." },

{ id: "pt2-prep11", d: "Língua Portuguesa", t: "Preposição", ref: "Valor semântico – tempo",
  af: "Em “Trabalha no tribunal desde 2010”, a preposição “desde” indica o ponto de partida no tempo.",
  c: true, lei: "“Desde”: marco inicial (tempo ou espaço). “Até”: limite final.",
  exp: "Correto." },

{ id: "pt2-prep12", d: "Língua Portuguesa", t: "Preposição", ref: "Valor semântico – finalidade",
  af: "Em “Estudou para passar no concurso”, a preposição “para” indica causa.",
  c: false, lei: "“Para” + infinitivo geralmente indica finalidade.",
  exp: "Indica FINALIDADE." },

// ===================== CONJUNÇÃO =====================
{ id: "pt2-conj1", d: "Língua Portuguesa", t: "Conjunção", ref: "Conjunções adversativas",
  af: "“Contudo”, “todavia”, “entretanto” e “no entanto” são conjunções adversativas.",
  c: true, lei: "Adversativas (oposição): mas, porém, contudo, todavia, entretanto, no entanto.",
  exp: "Correto. Elas podem substituir umas às outras sem mudar o sentido." },

{ id: "pt2-conj2", d: "Língua Portuguesa", t: "Conjunção", ref: "Conjunções conclusivas",
  af: "Em “Estudou muito, portanto foi aprovado”, a conjunção “portanto” expressa explicação.",
  c: false, lei: "Conclusivas: logo, portanto, por isso, então, pois (posposto ao verbo). Explicativas: porque, que, pois (anteposto).",
  exp: "“Portanto” expressa CONCLUSÃO." },

{ id: "pt2-conj3", d: "Língua Portuguesa", t: "Conjunção", ref: "Conjunções concessivas",
  af: "A conjunção “embora” introduz oração concessiva e exige o verbo no modo subjuntivo.",
  c: true, lei: "Concessivas: embora, conquanto, ainda que, mesmo que, posto que, se bem que. Pedem subjuntivo: “Embora estivesse cansado…”.",
  exp: "Correto." },

{ id: "pt2-conj4", d: "Língua Portuguesa", t: "Conjunção", ref: "Conjunções concessivas",
  af: "Em “Conquanto fosse tarde, a sessão continuou”, “conquanto” pode ser substituído por “embora” sem alteração de sentido.",
  c: true, lei: "“Conquanto” = embora (concessão).",
  exp: "Correto. Vocábulo pouco usual, mas frequente em provas." },

{ id: "pt2-conj5", d: "Língua Portuguesa", t: "Conjunção", ref: "“Pois” anteposto x posposto",
  af: "A conjunção “pois”, quando posposta ao verbo e isolada por vírgulas, tem valor explicativo.",
  c: false, lei: "“Pois” antes do verbo: explicativo/causal (Saiu cedo, pois tinha audiência). “Pois” depois do verbo, entre vírgulas: conclusivo (O prazo venceu; deve, pois, ser arquivado).",
  exp: "Posposto ao verbo, o “pois” é CONCLUSIVO (= portanto)." },

{ id: "pt2-conj6", d: "Língua Portuguesa", t: "Conjunção", ref: "Conjunções causais",
  af: "As locuções “visto que” e “uma vez que” expressam consequência.",
  c: false, lei: "Causais: porque, visto que, já que, uma vez que, porquanto, como (anteposto). Consecutivas: tão… que, tanto… que, de modo que.",
  exp: "Expressam CAUSA." },

{ id: "pt2-conj7", d: "Língua Portuguesa", t: "Conjunção", ref: "Conjunção causal “porquanto”",
  af: "A conjunção “porquanto” tem valor causal, equivalendo a “porque”.",
  c: true, lei: "“Porquanto” = porque, visto que (causa).",
  exp: "Correto." },

{ id: "pt2-conj8", d: "Língua Portuguesa", t: "Conjunção", ref: "Conjunções condicionais",
  af: "Em “Caso chova, a audiência será remota”, a conjunção “caso” indica condição.",
  c: true, lei: "Condicionais: se, caso, desde que (com subjuntivo), contanto que, a menos que, salvo se.",
  exp: "Correto." },

{ id: "pt2-conj9", d: "Língua Portuguesa", t: "Conjunção", ref: "Conjunções conformativas",
  af: "Em “Conforme o juiz determinou, a sessão foi suspensa”, “conforme” expressa conformidade.",
  c: true, lei: "Conformativas: conforme, como, segundo, consoante.",
  exp: "Correto." },

{ id: "pt2-conj10", d: "Língua Portuguesa", t: "Conjunção", ref: "Conjunções consecutivas",
  af: "Em “Falou tão baixo que ninguém o ouviu”, a oração iniciada por “que” expressa consequência.",
  c: true, lei: "Consecutivas: tão… que, tanto… que, tal… que, de modo que, de sorte que.",
  exp: "Correto." },

{ id: "pt2-conj11", d: "Língua Portuguesa", t: "Conjunção", ref: "Conjunções finais",
  af: "A locução “a fim de que” expressa finalidade.",
  c: true, lei: "Finais: para que, a fim de que, porque (= para que, em uso literário).",
  exp: "Correto." },

{ id: "pt2-conj12", d: "Língua Portuguesa", t: "Conjunção", ref: "Conjunção “se”",
  af: "Em “Não sei se ele virá”, a palavra “se” é conjunção condicional.",
  c: false, lei: "“Se” condicional: “Se você estudar, passará”. “Se” integrante: introduz oração substantiva (Não sei se ele virá = não sei ISSO).",
  exp: "É conjunção INTEGRANTE, pois a oração funciona como objeto direto de “sei”." },

{ id: "pt2-conj13", d: "Língua Portuguesa", t: "Conjunção", ref: "Troca de conectivos",
  af: "Em “O réu tinha álibi, mas foi condenado”, a conjunção “mas” pode ser substituída por “portanto” sem alteração de sentido.",
  c: false, lei: "“Mas” é adversativa (oposição); “portanto” é conclusiva. Trocar conectivos de valores diferentes altera o sentido.",
  exp: "Mudaria o sentido: oposição viraria conclusão." },

// ===================== CLASSES DE PALAVRAS =====================
{ id: "pt2-cl1", d: "Língua Portuguesa", t: "Classes de palavras", ref: "Substantivação",
  af: "Em “O andar do processo foi lento”, a palavra “andar” é substantivo.",
  c: true, lei: "Qualquer palavra precedida de artigo pode ser substantivada: o andar, o não, o porquê.",
  exp: "Correto. O artigo “o” transforma o verbo em substantivo." },

{ id: "pt2-cl2", d: "Língua Portuguesa", t: "Classes de palavras", ref: "Adjetivo",
  af: "Em “O jovem advogado foi aprovado”, a palavra “jovem” é substantivo.",
  c: false, lei: "Adjetivo caracteriza o substantivo. Em “o jovem advogado”, o núcleo é “advogado”; “jovem” o caracteriza.",
  exp: "Aqui “jovem” é ADJETIVO. Em “O jovem chegou”, seria substantivo." },

{ id: "pt2-cl3", d: "Língua Portuguesa", t: "Classes de palavras", ref: "“Muito” – advérbio x pronome",
  af: "Em “Ele trabalha muito”, a palavra “muito” é pronome indefinido.",
  c: false, lei: "“Muito” ligado a verbo/adjetivo/advérbio → advérbio (invariável). Ligado a substantivo → pronome indefinido (variável: muitos processos).",
  exp: "Aqui é ADVÉRBIO de intensidade, pois modifica o verbo." },

{ id: "pt2-cl4", d: "Língua Portuguesa", t: "Classes de palavras", ref: "“Muito” – pronome",
  af: "Em “Ele tem muitos processos”, a palavra “muitos” é pronome indefinido.",
  c: true, lei: "Acompanha e concorda com o substantivo “processos”: pronome indefinido adjetivo.",
  exp: "Correto." },

{ id: "pt2-cl5", d: "Língua Portuguesa", t: "Classes de palavras", ref: "“Que” – pronome relativo",
  af: "Em “É uma decisão que todos aguardavam”, o “que” é pronome relativo.",
  c: true, lei: "Teste: se o “que” puder ser trocado por “o qual/a qual”, é pronome relativo (decisão a qual todos aguardavam).",
  exp: "Correto." },

{ id: "pt2-cl6", d: "Língua Portuguesa", t: "Classes de palavras", ref: "“Que” – conjunção integrante",
  af: "Em “O juiz disse que viria”, o “que” é pronome relativo.",
  c: false, lei: "Conjunção integrante: introduz oração substantiva e pode ser trocada por “isso” (O juiz disse ISSO).",
  exp: "É CONJUNÇÃO INTEGRANTE: não retoma nenhum termo anterior." },

{ id: "pt2-cl7", d: "Língua Portuguesa", t: "Classes de palavras", ref: "Interjeição",
  af: "Em “Ai! Que susto!”, a palavra “ai” é interjeição.",
  c: true, lei: "Interjeição exprime emoção ou sentimento: ai, oh, ufa, psiu, nossa.",
  exp: "Correto." },

{ id: "pt2-cl8", d: "Língua Portuguesa", t: "Classes de palavras", ref: "Numeral",
  af: "Em “O primeiro colocado tomou posse”, a palavra “primeiro” é numeral ordinal.",
  c: true, lei: "Numerais: cardinais (um, dois), ordinais (primeiro, segundo), multiplicativos (dobro), fracionários (metade).",
  exp: "Correto." },

{ id: "pt2-cl9", d: "Língua Portuguesa", t: "Classes de palavras", ref: "Artigo x pronome",
  af: "Em “Eu o vi na sessão”, a palavra “o” é artigo definido.",
  c: false, lei: "“O” antes de substantivo = artigo (o juiz). “O” junto do verbo, substituindo um nome = pronome oblíquo (Eu o vi).",
  exp: "É PRONOME OBLÍQUO átono (objeto direto)." },

{ id: "pt2-cl10", d: "Língua Portuguesa", t: "Classes de palavras", ref: "Substantivo concreto x abstrato",
  af: "Os substantivos “mesa” e “caneta” são abstratos.",
  c: false, lei: "Concretos: seres de existência própria (mesa, juiz, Deus). Abstratos: dependem de outro ser (ações, estados, qualidades): justiça, beleza, saída.",
  exp: "São CONCRETOS." },

{ id: "pt2-cl11", d: "Língua Portuguesa", t: "Classes de palavras", ref: "Verbo de ligação",
  af: "Em “A testemunha anda nervosa”, o verbo “anda” é de ligação.",
  c: true, lei: "Verbos de ligação ligam o sujeito a uma característica (predicativo): ser, estar, parecer, permanecer, ficar, continuar, andar (= estar).",
  exp: "Correto. “Anda” aqui equivale a “está”." },

{ id: "pt2-cl12", d: "Língua Portuguesa", t: "Classes de palavras", ref: "“Bom” – adjetivo",
  af: "Em “Ele é um bom juiz”, a palavra “bom” é advérbio.",
  c: false, lei: "“Bom” caracteriza substantivo → adjetivo. “Bem” modifica verbo → advérbio (Ele julga bem).",
  exp: "“Bom” é ADJETIVO." },

{ id: "pt2-cl13", d: "Língua Portuguesa", t: "Classes de palavras", ref: "Classe depende do contexto",
  af: "A classe gramatical de uma palavra depende do contexto em que ela é empregada.",
  c: true, lei: "Exemplos: “jovem” (adjetivo ou substantivo), “muito” (advérbio ou pronome), “que” (pronome, conjunção, advérbio…).",
  exp: "Correto. Por isso a VUNESP sempre pergunta a classe “no contexto”." },

{ id: "pt2-cl14", d: "Língua Portuguesa", t: "Classes de palavras", ref: "Infinitivo substantivado",
  af: "Em “Saber é poder”, os verbos no infinitivo funcionam como substantivos.",
  c: true, lei: "O infinitivo pode exercer funções de substantivo (sujeito, predicativo): “Saber é poder” = O saber é o poder.",
  exp: "Correto." },

// ===================== COLOCAÇÃO PRONOMINAL =====================
{ id: "pt2-cp1", d: "Língua Portuguesa", t: "Colocação pronominal", ref: "Início de frase",
  af: "Em texto formal, a frase “Me empresta o processo, por favor” segue a norma-padrão.",
  c: false, lei: "Pela norma-padrão, não se inicia frase com pronome oblíquo átono: “Empresta-me o processo”.",
  exp: "O pronome átono não pode iniciar a frase." },

{ id: "pt2-cp2", d: "Língua Portuguesa", t: "Colocação pronominal", ref: "Pronome indefinido atrai",
  af: "Em “Tudo se resolveu na audiência”, a próclise é obrigatória por causa do pronome indefinido.",
  c: true, lei: "Atraem o pronome (próclise): palavras negativas, pronomes indefinidos, relativos e interrogativos, advérbios sem vírgula e conjunções subordinativas.",
  exp: "Correto." },

{ id: "pt2-cp3", d: "Língua Portuguesa", t: "Colocação pronominal", ref: "Mesóclise",
  af: "A frase “Farei-te uma proposta” está de acordo com a norma-padrão.",
  c: false, lei: "Verbo no futuro do presente ou do pretérito, sem palavra atrativa: mesóclise (Far-te-ei, Dir-se-ia). Nunca ênclise com esses tempos.",
  exp: "O correto é “FAR-TE-EI uma proposta” (ou “Eu te farei”)." },

{ id: "pt2-cp4", d: "Língua Portuguesa", t: "Colocação pronominal", ref: "Orações optativas",
  af: "Em “Que Deus o abençoe”, a oração optativa (de desejo) exige a próclise.",
  c: true, lei: "Orações optativas (que exprimem desejo) atraem o pronome: Deus te ajude, Bons ventos o levem.",
  exp: "Correto." },

{ id: "pt2-cp5", d: "Língua Portuguesa", t: "Colocação pronominal", ref: "Conjunção subordinativa",
  af: "Em “Quando o vi, entendi tudo”, a conjunção “quando” atrai o pronome para antes do verbo.",
  c: true, lei: "Conjunções subordinativas (quando, se, que, embora, porque) atraem o pronome átono.",
  exp: "Correto." },

{ id: "pt2-cp6", d: "Língua Portuguesa", t: "Colocação pronominal", ref: "Locução verbal com infinitivo",
  af: "Na locução verbal com infinitivo, sem palavra atrativa, são aceitas “Quero falar-lhe” e “Quero lhe falar”.",
  c: true, lei: "Com infinitivo ou gerúndio na locução, o pronome pode ficar depois do principal (falar-lhe) ou entre os verbos (quero lhe falar / quero-lhe falar).",
  exp: "Correto." },

{ id: "pt2-cp7", d: "Língua Portuguesa", t: "Colocação pronominal", ref: "Advérbio atrai o pronome",
  af: "A frase “Aqui trabalha-se muito” está de acordo com a norma-padrão.",
  c: false, lei: "Advérbio anteposto ao verbo, sem vírgula, atrai o pronome: “Aqui se trabalha muito”. Com vírgula, prefere-se a ênclise: “Aqui, trabalha-se muito”.",
  exp: "Sem vírgula, o advérbio exige próclise: “Aqui SE trabalha muito”." },

{ id: "pt2-cp8", d: "Língua Portuguesa", t: "Colocação pronominal", ref: "Pronome interrogativo",
  af: "Em “Quem te contou sobre a decisão?”, a próclise se justifica pelo pronome interrogativo.",
  c: true, lei: "Pronomes e advérbios interrogativos (quem, que, onde, como) atraem o pronome átono.",
  exp: "Correto." },

{ id: "pt2-cp9", d: "Língua Portuguesa", t: "Colocação pronominal", ref: "“Em” + gerúndio",
  af: "Na construção “Em se tratando de prazos, o cartório é rigoroso”, a próclise é a forma recomendada.",
  c: true, lei: "Gerúndio precedido da preposição “em” exige próclise: em se tratando, em se falando.",
  exp: "Correto." },

// ===================== SINÔNIMOS E ANTÔNIMOS =====================
{ id: "pt2-sin1", d: "Língua Portuguesa", t: "Sinônimos e antônimos", ref: "Sinônimo – “efêmero”",
  af: "No contexto “O sucesso foi efêmero”, “efêmero” pode ser substituído por “passageiro” sem alteração de sentido.",
  c: true, lei: "Efêmero = passageiro, transitório, breve. Antônimo: duradouro, perene.",
  exp: "Correto." },

{ id: "pt2-sin2", d: "Língua Portuguesa", t: "Sinônimos e antônimos", ref: "Sinônimo – “exíguo”",
  af: "Em “O prazo era exíguo”, a palavra “exíguo” significa “abundante”.",
  c: false, lei: "Exíguo = escasso, reduzido, pequeno. Antônimo: amplo, abundante.",
  exp: "“Exíguo” significa ESCASSO, curto." },

{ id: "pt2-sin3", d: "Língua Portuguesa", t: "Sinônimos e antônimos", ref: "Sinônimo – “inócuo”",
  af: "Em “A medida foi inócua”, “inócua” equivale a “ineficaz, sem efeito”.",
  c: true, lei: "Inócuo = inofensivo; que não produz efeito.",
  exp: "Correto." },

{ id: "pt2-sin4", d: "Língua Portuguesa", t: "Sinônimos e antônimos", ref: "Sinônimo – “profícuo”",
  af: "“Profícuo” é antônimo de “proveitoso”.",
  c: false, lei: "Profícuo = proveitoso, útil, vantajoso. Antônimo: improfícuo, inútil.",
  exp: "São SINÔNIMOS." },

{ id: "pt2-sin5", d: "Língua Portuguesa", t: "Sinônimos e antônimos", ref: "Antônimo – “prolixo”",
  af: "“Prolixo” é antônimo de “conciso”.",
  c: true, lei: "Prolixo = longo demais, cansativo, com palavras desnecessárias. Conciso = breve, objetivo.",
  exp: "Correto." },

{ id: "pt2-sin6", d: "Língua Portuguesa", t: "Sinônimos e antônimos", ref: "Sinônimo – “corroborar”",
  af: "Em “Os documentos corroboram a tese da defesa”, “corroboram” pode ser substituído por “confirmam”.",
  c: true, lei: "Corroborar = confirmar, reforçar, comprovar.",
  exp: "Correto." },

{ id: "pt2-sin7", d: "Língua Portuguesa", t: "Sinônimos e antônimos", ref: "Sinônimo – “elucidar”",
  af: "“Elucidar” significa “obscurecer”.",
  c: false, lei: "Elucidar = esclarecer, explicar. Antônimo: obscurecer, confundir.",
  exp: "“Elucidar” significa ESCLARECER (é o antônimo de obscurecer)." },

{ id: "pt2-sin8", d: "Língua Portuguesa", t: "Sinônimos e antônimos", ref: "Sinônimo – “mitigar”",
  af: "Em “A medida busca mitigar os danos”, “mitigar” equivale a “atenuar”.",
  c: true, lei: "Mitigar = atenuar, suavizar, amenizar. Antônimo: agravar, exacerbar.",
  exp: "Correto." },

{ id: "pt2-sin9", d: "Língua Portuguesa", t: "Sinônimos e antônimos", ref: "Sinônimo – “óbice”",
  af: "Em “Não há óbice ao pedido”, “óbice” significa “obstáculo, impedimento”.",
  c: true, lei: "Óbice = obstáculo, empecilho. Palavra muito usada em textos jurídicos.",
  exp: "Correto." },

{ id: "pt2-sin10", d: "Língua Portuguesa", t: "Sinônimos e antônimos", ref: "Antônimo – “tácito”",
  af: "“Tácito” é antônimo de “expresso”.",
  c: true, lei: "Tácito = implícito, subentendido, silencioso. Expresso = explícito, declarado.",
  exp: "Correto. Ex.: “acordo tácito” x “acordo expresso”." },

{ id: "pt2-sin11", d: "Língua Portuguesa", t: "Sinônimos e antônimos", ref: "Sinônimo – “incólume”",
  af: "Em “O motorista saiu incólume do acidente”, “incólume” significa “gravemente ferido”.",
  c: false, lei: "Incólume = ileso, intacto, são e salvo.",
  exp: "Significa ILESO." },

{ id: "pt2-sin12", d: "Língua Portuguesa", t: "Sinônimos e antônimos", ref: "Sinônimo – “precípuo”",
  af: "Em “A função precípua do Judiciário é julgar”, “precípua” pode ser substituída por “principal”.",
  c: true, lei: "Precípuo = principal, essencial.",
  exp: "Correto." },

{ id: "pt2-sin13", d: "Língua Portuguesa", t: "Sinônimos e antônimos", ref: "Antônimo – “exacerbar”",
  af: "“Exacerbar” é antônimo de “agravar”.",
  c: false, lei: "Exacerbar = agravar, intensificar, irritar. Antônimo: atenuar, mitigar, abrandar.",
  exp: "São SINÔNIMOS. O antônimo de exacerbar é atenuar." },

{ id: "pt2-sin14", d: "Língua Portuguesa", t: "Sinônimos e antônimos", ref: "Sinônimo – “lacônico”",
  af: "Uma resposta lacônica é uma resposta breve, de poucas palavras.",
  c: true, lei: "Lacônico = breve, conciso, sucinto. Antônimo: prolixo.",
  exp: "Correto." },

{ id: "pt2-sin15", d: "Língua Portuguesa", t: "Sinônimos e antônimos", ref: "Antônimo – “perene”",
  af: "“Perene” é antônimo de “duradouro”.",
  c: false, lei: "Perene = duradouro, permanente, contínuo. Antônimo: efêmero, passageiro.",
  exp: "São SINÔNIMOS." },

{ id: "pt2-sin16", d: "Língua Portuguesa", t: "Sinônimos e antônimos", ref: "Sinônimo – “ubíquo”",
  af: "“Ubíquo” significa “que está em toda parte; onipresente”.",
  c: true, lei: "Ubíquo = onipresente. Ex.: “Os celulares tornaram-se ubíquos”.",
  exp: "Correto." },

// ===================== SENTIDO PRÓPRIO E FIGURADO =====================
{ id: "pt2-fig1", d: "Língua Portuguesa", t: "Sentido próprio e figurado", ref: "Sentido figurado (conotativo)",
  af: "Em “Aquele juiz tem um coração de pedra”, a palavra “pedra” está em sentido figurado.",
  c: true, lei: "Sentido próprio (denotativo): literal, de dicionário. Sentido figurado (conotativo): ampliado, simbólico, depende do contexto.",
  exp: "Correto. “Coração de pedra” = insensível." },

{ id: "pt2-fig2", d: "Língua Portuguesa", t: "Sentido próprio e figurado", ref: "Sentido próprio (denotativo)",
  af: "Em “A pedra rolou da encosta”, a palavra “pedra” está em sentido conotativo.",
  c: false, lei: "Aqui “pedra” designa o próprio objeto: sentido literal (denotativo).",
  exp: "Está em sentido DENOTATIVO (próprio)." },

{ id: "pt2-fig3", d: "Língua Portuguesa", t: "Sentido próprio e figurado", ref: "Metáfora",
  af: "Em “Ele é uma raposa nos negócios”, há metáfora.",
  c: true, lei: "Metáfora: comparação implícita, sem conectivo (ele é uma raposa = é astuto).",
  exp: "Correto." },

{ id: "pt2-fig4", d: "Língua Portuguesa", t: "Sentido próprio e figurado", ref: "Comparação x metáfora",
  af: "Em “Era como um leão na tribuna”, há metáfora, pois a comparação é implícita.",
  c: false, lei: "Comparação (símile): usa conectivo (como, tal qual, feito). Metáfora: sem conectivo.",
  exp: "Há COMPARAÇÃO (explícita, com “como”)." },

{ id: "pt2-fig5", d: "Língua Portuguesa", t: "Sentido próprio e figurado", ref: "Hipérbole",
  af: "Em “Já expliquei isso um milhão de vezes”, há hipérbole.",
  c: true, lei: "Hipérbole: exagero intencional para dar ênfase.",
  exp: "Correto." },

{ id: "pt2-fig6", d: "Língua Portuguesa", t: "Sentido próprio e figurado", ref: "Metonímia",
  af: "Em “Bebeu um copo de água” e “Li Machado de Assis”, há metonímia.",
  c: true, lei: "Metonímia: troca de uma palavra por outra com a qual mantém relação real (continente pelo conteúdo — copo; autor pela obra — Machado).",
  exp: "Correto." },

{ id: "pt2-fig7", d: "Língua Portuguesa", t: "Sentido próprio e figurado", ref: "Eufemismo",
  af: "Em “Ele partiu desta para melhor”, há eufemismo, que suaviza a ideia de morte.",
  c: true, lei: "Eufemismo: suaviza expressão desagradável ou chocante.",
  exp: "Correto." },

{ id: "pt2-fig8", d: "Língua Portuguesa", t: "Sentido próprio e figurado", ref: "Prosopopeia",
  af: "Em “O vento sussurrava segredos à cidade”, há personificação (prosopopeia).",
  c: true, lei: "Prosopopeia: atribuição de características humanas a seres inanimados ou irracionais.",
  exp: "Correto." },

{ id: "pt2-fig9", d: "Língua Portuguesa", t: "Sentido próprio e figurado", ref: "Paradoxo",
  af: "Em “O silêncio era ensurdecedor”, a figura de linguagem é a antítese.",
  c: false, lei: "Antítese: ideias opostas lado a lado (amor e ódio). Paradoxo (oxímoro): ideias opostas que parecem se contradizer na mesma ideia (silêncio ensurdecedor).",
  exp: "É PARADOXO: o silêncio não poderia ser ensurdecedor." },

{ id: "pt2-fig10", d: "Língua Portuguesa", t: "Sentido próprio e figurado", ref: "Linguagem técnica",
  af: "Em textos técnicos e jurídicos, predomina a linguagem denotativa.",
  c: true, lei: "Textos técnicos, científicos e jurídicos buscam objetividade e precisão: linguagem denotativa.",
  exp: "Correto." },

{ id: "pt2-fig11", d: "Língua Portuguesa", t: "Sentido próprio e figurado", ref: "Expressão figurada",
  af: "Em “O processo andou a passos de tartaruga”, a expressão destacada está em sentido literal.",
  c: false, lei: "“A passos de tartaruga” = muito devagar, em sentido figurado.",
  exp: "Está em sentido FIGURADO (lentidão)." },

{ id: "pt2-fig12", d: "Língua Portuguesa", t: "Sentido próprio e figurado", ref: "Antítese",
  af: "Em “Há riqueza e miséria lado a lado na cidade”, há antítese.",
  c: true, lei: "Antítese: aproximação de palavras ou ideias de sentidos opostos (riqueza x miséria).",
  exp: "Correto." },

// ===================== SIGNIFICAÇÃO DE PALAVRAS E EXPRESSÕES =====================
{ id: "pt2-sig1", d: "Língua Portuguesa", t: "Significação de palavras e expressões", ref: "Expressão idiomática",
  af: "Em “A testemunha deu com a língua nos dentes”, a expressão significa “revelou um segredo”.",
  c: true, lei: "Expressões idiomáticas têm sentido próprio, que não é a soma das palavras.",
  exp: "Correto." },

{ id: "pt2-sig2", d: "Língua Portuguesa", t: "Significação de palavras e expressões", ref: "Expressão idiomática",
  af: "Em “A proposta caiu por terra”, a expressão indica que a proposta foi aceita.",
  c: false, lei: "Cair por terra = fracassar, perder a validade.",
  exp: "Significa que a proposta FRACASSOU." },

{ id: "pt2-sig3", d: "Língua Portuguesa", t: "Significação de palavras e expressões", ref: "Expressão idiomática",
  af: "“Pôr panos quentes” em uma situação significa agravá-la.",
  c: false, lei: "Pôr panos quentes = amenizar, contemporizar, abafar um problema.",
  exp: "Significa AMENIZAR." },

{ id: "pt2-sig4", d: "Língua Portuguesa", t: "Significação de palavras e expressões", ref: "Expressão idiomática",
  af: "Em “A decisão foi tomada a toque de caixa”, a expressão significa “com muita cautela”.",
  c: false, lei: "A toque de caixa = às pressas, rapidamente.",
  exp: "Significa ÀS PRESSAS." },

{ id: "pt2-sig5", d: "Língua Portuguesa", t: "Significação de palavras e expressões", ref: "Expressão idiomática",
  af: "Em “O chefe fez vista grossa para o atraso”, a expressão significa que ele fingiu não perceber.",
  c: true, lei: "Fazer vista grossa = fingir não ver, tolerar.",
  exp: "Correto." },

{ id: "pt2-sig6", d: "Língua Portuguesa", t: "Significação de palavras e expressões", ref: "Polissemia",
  af: "A palavra “banco”, que pode significar assento ou instituição financeira, é exemplo de polissemia.",
  c: true, lei: "Polissemia: uma mesma palavra com vários sentidos, definidos pelo contexto.",
  exp: "Correto." },

{ id: "pt2-sig7", d: "Língua Portuguesa", t: "Significação de palavras e expressões", ref: "Parônimos – emergir / imergir",
  af: "“Emergir” significa “afundar”, e “imergir” significa “vir à tona”.",
  c: false, lei: "Emergir = vir à tona, sair. Imergir = mergulhar, afundar.",
  exp: "Os sentidos estão invertidos." },

{ id: "pt2-sig8", d: "Língua Portuguesa", t: "Significação de palavras e expressões", ref: "Parônimos – vultoso / vultuoso",
  af: "“Vultoso” significa “de grande valor ou volume”, como em “quantia vultosa”.",
  c: true, lei: "Vultoso = volumoso, de grande valor. Vultuoso = inchado (rosto vermelho e inchado).",
  exp: "Correto." },

{ id: "pt2-sig9", d: "Língua Portuguesa", t: "Significação de palavras e expressões", ref: "“A princípio” x “em princípio”",
  af: "“A princípio” significa “no início”, e “em princípio” significa “em tese, de modo geral”.",
  c: true, lei: "A princípio = no começo, inicialmente. Em princípio = em tese, teoricamente.",
  exp: "Correto." },

{ id: "pt2-sig10", d: "Língua Portuguesa", t: "Significação de palavras e expressões", ref: "“Ao encontro de” x “de encontro a”",
  af: "“Ao encontro de” indica oposição, e “de encontro a” indica concordância.",
  c: false, lei: "Ao encontro de = a favor de, em concordância. De encontro a = contra, em choque.",
  exp: "Está invertido: “ao encontro” = concordância; “de encontro” = oposição." },

{ id: "pt2-sig11", d: "Língua Portuguesa", t: "Significação de palavras e expressões", ref: "Parônimos – tráfico / tráfego",
  af: "“Tráfico” (comércio ilegal) e “tráfego” (trânsito) são parônimos.",
  c: true, lei: "Parônimos: palavras parecidas na grafia e na pronúncia, mas com sentidos diferentes.",
  exp: "Correto." },

{ id: "pt2-sig12", d: "Língua Portuguesa", t: "Significação de palavras e expressões", ref: "Homônimos – acender / ascender",
  af: "“Acender” (pôr fogo) e “ascender” (subir) são homônimos homófonos.",
  c: true, lei: "Homófonos: mesma pronúncia, grafia e sentido diferentes (acender/ascender, concerto/conserto, cela/sela).",
  exp: "Correto." },

{ id: "pt2-sig13", d: "Língua Portuguesa", t: "Significação de palavras e expressões", ref: "Vocabulário jurídico – “peremptório”",
  af: "Em “O prazo é peremptório”, a palavra significa que o prazo pode ser prorrogado livremente.",
  c: false, lei: "Peremptório = decisivo, terminante, que não admite prorrogação.",
  exp: "Significa que o prazo NÃO admite prorrogação." },

{ id: "pt2-sig14", d: "Língua Portuguesa", t: "Significação de palavras e expressões", ref: "Expressão idiomática",
  af: "“Pagar o pato” significa “ser responsabilizado por algo que não fez”.",
  c: true, lei: "Pagar o pato = arcar com a culpa ou as consequências sem ter culpa.",
  exp: "Correto." },

{ id: "pt2-sig15", d: "Língua Portuguesa", t: "Significação de palavras e expressões", ref: "Sentido no contexto",
  af: "Em “O servidor assumiu o cargo de forma interina”, “interina” significa “provisória, temporária”.",
  c: true, lei: "Interino = que exerce provisoriamente uma função, substituto temporário.",
  exp: "Correto." },

// ===================== PONTUAÇÃO =====================
{ id: "pt2-pon1", d: "Língua Portuguesa", t: "Pontuação", ref: "Orações coordenadas assindéticas",
  af: "Em “Cheguei, vi, venci”, as vírgulas separam orações coordenadas assindéticas.",
  c: true, lei: "Orações coordenadas sem conjunção (assindéticas) são separadas por vírgula.",
  exp: "Correto." },

{ id: "pt2-pon2", d: "Língua Portuguesa", t: "Pontuação", ref: "Vírgula na enumeração",
  af: "Em “Comprei frutas, legumes e verduras”, é obrigatória a vírgula antes do “e”.",
  c: false, lei: "Na enumeração, o último elemento ligado por “e” normalmente dispensa a vírgula.",
  exp: "A vírgula antes do “e” NÃO é usada nesse caso." },

{ id: "pt2-pon3", d: "Língua Portuguesa", t: "Pontuação", ref: "Dois-pontos",
  af: "Os dois-pontos podem anunciar uma enumeração, uma citação ou uma explicação.",
  c: true, lei: "Dois-pontos: introduzem enumeração, citação direta, esclarecimento, explicação ou síntese.",
  exp: "Correto." },

{ id: "pt2-pon4", d: "Língua Portuguesa", t: "Pontuação", ref: "Ponto e vírgula",
  af: "O ponto e vírgula pode separar orações coordenadas extensas ou que já contenham vírgulas.",
  c: true, lei: "Ponto e vírgula: pausa maior que a vírgula; separa itens de enumeração, orações longas ou já com vírgulas internas.",
  exp: "Correto." },

{ id: "pt2-pon5", d: "Língua Portuguesa", t: "Pontuação", ref: "Oração adverbial anteposta",
  af: "Em “Quando o prazo terminou, o juiz sentenciou”, a vírgula separa a oração adverbial anteposta à principal.",
  c: true, lei: "Oração subordinada adverbial antes da principal: recomenda-se a vírgula.",
  exp: "Correto." },

{ id: "pt2-pon6", d: "Língua Portuguesa", t: "Pontuação", ref: "Expressões explicativas",
  af: "Expressões explicativas como “isto é”, “ou seja” e “por exemplo” devem ficar isoladas por vírgulas.",
  c: true, lei: "Isolam-se por vírgulas as expressões explicativas e retificativas: isto é, ou melhor, ou seja, por exemplo.",
  exp: "Correto." },

{ id: "pt2-pon7", d: "Língua Portuguesa", t: "Pontuação", ref: "Vírgula indicando omissão do verbo",
  af: "Em “Maria estuda Direito; João, Medicina”, a vírgula indica a omissão do verbo.",
  c: true, lei: "A vírgula marca a elipse (zeugma) de um termo já expresso: João [estuda] Medicina.",
  exp: "Correto." },

{ id: "pt2-pon8", d: "Língua Portuguesa", t: "Pontuação", ref: "Travessões",
  af: "Em “O relator — que é rigoroso — votou pela condenação”, os travessões poderiam ser substituídos por vírgulas.",
  c: true, lei: "Travessões duplos podem isolar intercalações, no lugar de vírgulas ou parênteses, dando-lhes mais destaque.",
  exp: "Correto." },

{ id: "pt2-pon9", d: "Língua Portuguesa", t: "Pontuação", ref: "Vocativo",
  af: "Em “Senhores, a sessão está aberta”, a vírgula é facultativa, pois “Senhores” é sujeito.",
  c: false, lei: "Vocativo (chamamento) é sempre isolado por vírgula. O sujeito de “está” é “a sessão”.",
  exp: "“Senhores” é VOCATIVO, e a vírgula é obrigatória." },

{ id: "pt2-pon10", d: "Língua Portuguesa", t: "Pontuação", ref: "Restritiva x explicativa",
  af: "Em “Os candidatos que estudaram foram aprovados”, colocar vírgulas antes e depois de “que estudaram” mantém o mesmo sentido.",
  c: false, lei: "Sem vírgulas: oração restritiva (só os que estudaram). Com vírgulas: explicativa (todos estudaram e foram aprovados).",
  exp: "MUDA o sentido. Clássico da VUNESP." },

{ id: "pt2-pon11", d: "Língua Portuguesa", t: "Pontuação", ref: "Vírgula na data",
  af: "Em “São Paulo, 26 de novembro de 2026”, a vírgula separa o nome do lugar da data.",
  c: true, lei: "Em datas, separa-se por vírgula o nome do lugar.",
  exp: "Correto." },

{ id: "pt2-pon12", d: "Língua Portuguesa", t: "Pontuação", ref: "Reticências",
  af: "As reticências podem indicar interrupção do pensamento, hesitação ou suspense.",
  c: true, lei: "Reticências: interrupção, hesitação, suspensão de ideia, ironia.",
  exp: "Correto." },

{ id: "pt2-pon13", d: "Língua Portuguesa", t: "Pontuação", ref: "Sujeito e verbo",
  af: "A frase “Os autos do processo de execução fiscal, foram remetidos ao tribunal” está corretamente pontuada.",
  c: false, lei: "Não se separa por vírgula o sujeito do verbo, mesmo que o sujeito seja longo.",
  exp: "A vírgula entre o sujeito longo e o verbo é ERRO." },

// ===================== REGÊNCIA VERBAL E NOMINAL =====================
{ id: "pt2-reg1", d: "Língua Portuguesa", t: "Regência verbal e nominal", ref: "Regência nominal – “apto”",
  af: "As construções “apto para o cargo” e “apto ao cargo” estão de acordo com a norma-padrão.",
  c: true, lei: "Apto a / apto para.",
  exp: "Correto." },

{ id: "pt2-reg2", d: "Língua Portuguesa", t: "Regência verbal e nominal", ref: "Regência nominal – “compatível”",
  af: "O adjetivo “compatível” rege a preposição “com”.",
  c: true, lei: "Compatível com; incompatível com.",
  exp: "Correto." },

{ id: "pt2-reg3", d: "Língua Portuguesa", t: "Regência verbal e nominal", ref: "Regência nominal – “medo”",
  af: "Na norma-padrão, prefere-se “Tenho medo de que ele não venha” a “Tenho medo que ele não venha”.",
  c: true, lei: "Medo de. A preposição se mantém antes da oração: “medo de que”.",
  exp: "Correto." },

{ id: "pt2-reg4", d: "Língua Portuguesa", t: "Regência verbal e nominal", ref: "Residente / situado",
  af: "“Residente na Rua X” e “situado na Avenida Y” seguem a norma-padrão.",
  c: true, lei: "Residir, morar, situar-se: preposição EM (residente na, situado na). “Residente à Rua” é considerado inadequado.",
  exp: "Correto." },

{ id: "pt2-reg5", d: "Língua Portuguesa", t: "Regência verbal e nominal", ref: "Verbo “namorar”",
  af: "A construção “namorar com alguém” está de acordo com a norma-padrão.",
  c: false, lei: "Namorar é transitivo direto: namorar alguém.",
  exp: "Pela norma, “namorar ALGUÉM” (sem preposição)." },

{ id: "pt2-reg6", d: "Língua Portuguesa", t: "Regência verbal e nominal", ref: "Verbo “custar”",
  af: "Na norma-padrão, “custar” (ser difícil) tem como sujeito a coisa difícil: “Custou-me entender o processo”.",
  c: true, lei: "Custar (= ser difícil): “Custa-me crer” (algo custa a alguém). “Eu custei a entender” é coloquial.",
  exp: "Correto." },

{ id: "pt2-reg7", d: "Língua Portuguesa", t: "Regência verbal e nominal", ref: "Verbo “agradar”",
  af: "No sentido de “satisfazer”, o verbo “agradar” é transitivo indireto: “A decisão agradou às partes”.",
  c: true, lei: "Agradar (satisfazer) → a alguém. Agradar (acariciar) → alguém (transitivo direto).",
  exp: "Correto." },

{ id: "pt2-reg8", d: "Língua Portuguesa", t: "Regência verbal e nominal", ref: "Verbo “responder”",
  af: "A construção “O servidor respondeu o ofício” está de acordo com a norma-padrão.",
  c: false, lei: "Responder a algo: “respondeu ao ofício”. O objeto direto é o conteúdo: “respondeu que viria”.",
  exp: "Pela norma, “respondeu AO ofício”." },

{ id: "pt2-reg9", d: "Língua Portuguesa", t: "Regência verbal e nominal", ref: "Regência nominal – “obediência”",
  af: "O substantivo “obediência” rege a preposição “a”: “obediência às leis”.",
  c: true, lei: "Obediência a; obediente a.",
  exp: "Correto." },

{ id: "pt2-reg10", d: "Língua Portuguesa", t: "Regência verbal e nominal", ref: "Verbo “antipatizar”",
  af: "O verbo “antipatizar” não é pronominal e rege a preposição “com”: “Antipatizo com ele”.",
  c: true, lei: "Simpatizar e antipatizar: transitivos indiretos com “com”, sem pronome (“me simpatizo” é erro).",
  exp: "Correto." },

{ id: "pt2-reg11", d: "Língua Portuguesa", t: "Regência verbal e nominal", ref: "Regência nominal – “ansioso”",
  af: "Apenas a construção “ansioso de” é aceita; “ansioso por” e “ansioso para” estão erradas.",
  c: false, lei: "Ansioso admite as preposições de, para e por (ansioso por notícias, ansioso para chegar).",
  exp: "As três preposições são aceitas." },

{ id: "pt2-reg12", d: "Língua Portuguesa", t: "Regência verbal e nominal", ref: "Verbo “chamar”",
  af: "No sentido de “qualificar”, são aceitas “chamaram-no de mentiroso” e “chamaram-lhe mentiroso”.",
  c: true, lei: "Chamar (qualificar) admite objeto direto ou indireto, com ou sem “de” antes do predicativo.",
  exp: "Correto." },

// ===================== CRASE =====================
{ id: "pt2-cr1", d: "Língua Portuguesa", t: "Crase", ref: "Crase com horários",
  af: "Na expressão “das 8h às 18h”, o uso do acento grave está correto.",
  c: true, lei: "Indicação de horas determinadas leva crase. “Das… às…” (com artigo) / “de… a…” (sem artigo).",
  exp: "Correto." },

{ id: "pt2-cr2", d: "Língua Portuguesa", t: "Crase", ref: "Paralelismo “de… a”",
  af: "Em “O expediente vai de segunda a sexta”, deveria haver crase em “a sexta”.",
  c: false, lei: "Com “de” (sem artigo), usa-se “a” (sem crase). Com “da” (com artigo), usa-se “à”: “da segunda à sexta”.",
  exp: "“De segunda A sexta” está correto, sem crase." },

{ id: "pt2-cr3", d: "Língua Portuguesa", t: "Crase", ref: "Crase com “assistir” (ver)",
  af: "Em “Assisti à audiência de ontem”, a crase é obrigatória.",
  c: true, lei: "Assistir (ver) exige “a” + artigo “a” de “audiência” = à.",
  exp: "Correto." },

{ id: "pt2-cr4", d: "Língua Portuguesa", t: "Crase", ref: "Locução de instrumento",
  af: "Em “O formulário foi preenchido à mão”, o acento indicativo de crase está correto.",
  c: true, lei: "Locuções adverbiais femininas de instrumento ou modo levam acento: à mão, à máquina, à vista, à força.",
  exp: "Correto." },

{ id: "pt2-cr5", d: "Língua Portuguesa", t: "Crase", ref: "Crase com “dirigir-se”",
  af: "Em “Dirigiu-se à Secretaria do fórum”, a crase ocorre porque o verbo exige “a” e o substantivo admite artigo.",
  c: true, lei: "Teste: troque por masculino → “dirigiu-se ao cartório”. Se aparecer “ao”, há crase.",
  exp: "Correto." },

{ id: "pt2-cr6", d: "Língua Portuguesa", t: "Crase", ref: "Crase com “distância”",
  af: "Antes de “distância”, só há crase quando a distância é determinada: “à distância de cem metros”.",
  c: true, lei: "“Ensino a distância” (indeterminada): sem crase. “À distância de 100 m” (determinada): com crase.",
  exp: "Correto." },

{ id: "pt2-cr7", d: "Língua Portuguesa", t: "Crase", ref: "Crase com pronome pessoal",
  af: "Em “Disse a ela toda a verdade”, deveria haver crase antes de “ela”.",
  c: false, lei: "Não há crase antes de pronomes pessoais (ela, você, mim), pois não admitem artigo.",
  exp: "Não há crase antes de pronome pessoal." },

{ id: "pt2-cr8", d: "Língua Portuguesa", t: "Crase", ref: "Crase com “obedecer”",
  af: "Em “Obedeça às normas do tribunal”, a crase está correta.",
  c: true, lei: "Obedecer a + as normas = às normas.",
  exp: "Correto." },

{ id: "pt2-cr9", d: "Língua Portuguesa", t: "Crase", ref: "Crase com “a qual”",
  af: "Em “A audiência à qual me referi foi adiada”, há crase porque “referir-se” exige “a” e o relativo é “a qual”.",
  c: true, lei: "Referir-se a + a qual = à qual. Teste: “O processo ao qual me referi”.",
  exp: "Correto." },

{ id: "pt2-cr10", d: "Língua Portuguesa", t: "Crase", ref: "Crase com verbo transitivo direto",
  af: "Em “O juiz analisou à petição inicial”, o acento grave está correto.",
  c: false, lei: "“Analisar” é transitivo direto: não exige preposição “a”. Sem preposição, não há crase.",
  exp: "O correto é “analisou A petição”." },

// ===================== CONCORDÂNCIA VERBAL E NOMINAL =====================
{ id: "pt2-cc1", d: "Língua Portuguesa", t: "Concordância verbal e nominal", ref: "“Haja vista”",
  af: "A expressão “haja vista” é invariável, e “haja visto” é inadequada nesse uso.",
  c: true, lei: "Haja vista = tendo em vista, considerando: “haja vista os problemas”.",
  exp: "Correto." },

{ id: "pt2-cc2", d: "Língua Portuguesa", t: "Concordância verbal e nominal", ref: "“Mais de dois”",
  af: "A frase “Mais de dois servidores faltou ao expediente” está de acordo com a norma-padrão.",
  c: false, lei: "O verbo concorda com o numeral que segue “mais de”: mais de um faltou; mais de dois faltaram.",
  exp: "O correto é “Mais de dois servidores FALTARAM”." },

{ id: "pt2-cc3", d: "Língua Portuguesa", t: "Concordância verbal e nominal", ref: "Nome próprio no plural",
  af: "Em “Os Estados Unidos são uma potência”, o verbo concorda no plural por causa do artigo.",
  c: true, lei: "Nome próprio no plural com artigo → verbo no plural. Sem artigo → singular (Minas Gerais é…).",
  exp: "Correto." },

{ id: "pt2-cc4", d: "Língua Portuguesa", t: "Concordância verbal e nominal", ref: "“Um ou outro”",
  af: "Em “Um ou outro candidato faltou à prova”, o verbo deve ficar no singular.",
  c: true, lei: "Com “um ou outro” e “nem um nem outro”, o verbo fica, em regra, no singular.",
  exp: "Correto." },

{ id: "pt2-cc5", d: "Língua Portuguesa", t: "Concordância verbal e nominal", ref: "“Trata-se de”",
  af: "A frase “Tratam-se de questões complexas” está de acordo com a norma-padrão.",
  c: false, lei: "“Tratar-se de” tem sujeito indeterminado (“se” = índice de indeterminação): verbo sempre no singular.",
  exp: "O correto é “TRATA-SE de questões complexas”." },

{ id: "pt2-cc6", d: "Língua Portuguesa", t: "Concordância verbal e nominal", ref: "“Meio-dia e meia”",
  af: "A expressão “Era meio-dia e meia” segue a norma-padrão.",
  c: true, lei: "“Meia” concorda com “hora” subentendida: meio-dia e meia (hora).",
  exp: "Correto." },

{ id: "pt2-cc7", d: "Língua Portuguesa", t: "Concordância verbal e nominal", ref: "Adjetivo posposto a vários substantivos",
  af: "Em “Encontrei livro e revista antigos”, o adjetivo no masculino plural está correto.",
  c: true, lei: "Adjetivo posposto a substantivos de gêneros diferentes: masculino plural (ou concordância com o mais próximo).",
  exp: "Correto." },

{ id: "pt2-cc8", d: "Língua Portuguesa", t: "Concordância verbal e nominal", ref: "“Fui eu que” / “quem”",
  af: "As frases “Fui eu que fiz o relatório” e “Fui eu quem fez o relatório” estão corretas.",
  c: true, lei: "Com “que”, o verbo concorda com o antecedente (eu fiz). Com “quem”, o verbo pode ir para a 3ª pessoa (quem fez).",
  exp: "Correto." },

{ id: "pt2-cc9", d: "Língua Portuguesa", t: "Concordância verbal e nominal", ref: "Sujeitos de pessoas diferentes",
  af: "Em “Eu e você iremos à audiência”, o verbo na 1ª pessoa do plural está correto.",
  c: true, lei: "Sujeito composto com pessoas diferentes: a 1ª prevalece sobre a 2ª e a 3ª; a 2ª sobre a 3ª.",
  exp: "Correto." },

{ id: "pt2-cc10", d: "Língua Portuguesa", t: "Concordância verbal e nominal", ref: "Verbo “existir”",
  af: "A frase “Existe muitos processos pendentes na vara” está de acordo com a norma-padrão.",
  c: false, lei: "Diferente de “haver”, o verbo “existir” é pessoal e concorda com o sujeito: existem muitos processos.",
  exp: "O correto é “EXISTEM muitos processos”." },

// ===================== INTERPRETAÇÃO DE TEXTO =====================
{ id: "pt2-int1", d: "Língua Portuguesa", t: "Interpretação de texto", ref: "Extrapolação",
  af: "Texto: “A tecnologia aproximou o cidadão do Judiciário: hoje, é possível acompanhar processos pela internet. Ainda assim, parte da população não tem acesso à rede.” — O texto afirma que a tecnologia garantiu acesso ao Judiciário a toda a população.",
  c: false, lei: "Extrapolação: afirmar algo que vai além do que o texto diz. Na VUNESP, a alternativa que generaliza (“toda”, “sempre”, “nunca”) costuma estar errada.",
  exp: "O texto ressalva que parte da população NÃO tem acesso à rede." },

{ id: "pt2-int2", d: "Língua Portuguesa", t: "Interpretação de texto", ref: "Conectivos e sentido",
  af: "Texto: “A tecnologia aproximou o cidadão do Judiciário (...). Ainda assim, parte da população não tem acesso à rede.” — A expressão “Ainda assim” introduz uma ressalva ao que foi dito antes.",
  c: true, lei: "“Ainda assim”, “mesmo assim”, “apesar disso” têm valor concessivo/adversativo: introduzem ressalva.",
  exp: "Correto." },

{ id: "pt2-int3", d: "Língua Portuguesa", t: "Interpretação de texto", ref: "Inferência",
  af: "Texto: “O servidor, ao atender o público, representa a instituição. Por isso, cortesia não é favor: é dever.” — Infere-se que a cortesia no atendimento é uma obrigação funcional.",
  c: true, lei: "Inferência: conclusão que o texto permite tirar, mesmo sem dizer com as mesmas palavras.",
  exp: "Correto." },

{ id: "pt2-int4", d: "Língua Portuguesa", t: "Interpretação de texto", ref: "Pontuação e sentido",
  af: "Texto: “Por isso, cortesia não é favor: é dever.” — Os dois-pontos introduzem um esclarecimento do que foi dito antes.",
  c: true, lei: "Os dois-pontos podem introduzir explicação, esclarecimento ou conclusão.",
  exp: "Correto." },

{ id: "pt2-int5", d: "Língua Portuguesa", t: "Interpretação de texto", ref: "Compreensão",
  af: "Texto: “Ler muito não basta; é preciso ler bem. Quem lê sem refletir acumula informações, mas não constrói conhecimento.” — O autor condena o hábito de ler muito.",
  c: false, lei: "Atenção ao que o texto realmente diz: “não basta” é diferente de “é ruim”.",
  exp: "O autor não condena ler muito; diz apenas que isso NÃO BASTA." },

{ id: "pt2-int6", d: "Língua Portuguesa", t: "Interpretação de texto", ref: "Compreensão",
  af: "Texto: “Quem lê sem refletir acumula informações, mas não constrói conhecimento.” — Segundo o texto, informação e conhecimento não são equivalentes.",
  c: true, lei: "A conjunção “mas” opõe “acumular informações” a “construir conhecimento”.",
  exp: "Correto." },

{ id: "pt2-int7", d: "Língua Portuguesa", t: "Interpretação de texto", ref: "Ponto de vista do autor",
  af: "Texto: “Muitos acreditam que a pressa resolve os prazos apertados. Engano: decisões apressadas costumam gerar retrabalho.” — O autor concorda com a ideia de que a pressa resolve prazos apertados.",
  c: false, lei: "Identifique a voz do autor e a dos outros (“muitos acreditam”). Palavras como “engano” marcam discordância.",
  exp: "O autor DISCORDA: chama essa crença de “engano”." },

{ id: "pt2-int8", d: "Língua Portuguesa", t: "Interpretação de texto", ref: "Ponto de vista do autor",
  af: "No mesmo texto, a palavra “Engano” marca a oposição do autor à opinião apresentada na primeira frase.",
  c: true, lei: "Termos avaliativos revelam o posicionamento do autor.",
  exp: "Correto." },

{ id: "pt2-int9", d: "Língua Portuguesa", t: "Interpretação de texto", ref: "Ideia central",
  af: "Texto: “Embora a lei garanta prioridade aos idosos, filas preferenciais ainda são desrespeitadas em muitos lugares.” — O texto aponta uma contradição entre o que a lei garante e o que ocorre na prática.",
  c: true, lei: "A oração concessiva (“Embora…”) apresenta um fato que não impede o outro, evidenciando o contraste.",
  exp: "Correto." },

{ id: "pt2-int10", d: "Língua Portuguesa", t: "Interpretação de texto", ref: "Troca de conectivo",
  af: "No mesmo texto, substituir “Embora” por “Porque” manteria o sentido do período.",
  c: false, lei: "“Embora” é concessivo; “porque” é causal. A troca alteraria completamente a relação entre as ideias.",
  exp: "Mudaria o sentido (concessão → causa)." },

{ id: "pt2-int11", d: "Língua Portuguesa", t: "Interpretação de texto", ref: "Compreensão",
  af: "Texto: “O trabalho remoto trouxe flexibilidade, mas também tornou mais difícil separar a vida profissional da pessoal.” — O texto apresenta apenas aspectos positivos do trabalho remoto.",
  c: false, lei: "O “mas também” introduz um aspecto negativo.",
  exp: "O texto apresenta um aspecto positivo (flexibilidade) e um negativo (dificuldade de separar as vidas)." },

{ id: "pt2-int12", d: "Língua Portuguesa", t: "Interpretação de texto", ref: "Estratégia de prova",
  af: "Em questões de interpretação, deve-se descartar a alternativa que extrapola o texto, ainda que a afirmação seja verdadeira no mundo real.",
  c: true, lei: "A resposta deve estar apoiada no TEXTO, e não no conhecimento prévio do candidato.",
  exp: "Correto. Erro comum: marcar algo verdadeiro que o texto não diz." },

{ id: "pt2-int13", d: "Língua Portuguesa", t: "Interpretação de texto", ref: "Compreensão",
  af: "Texto: “Não se trata de punir mais, mas de punir melhor”, afirmou o pesquisador. — O pesquisador defende o aumento das penas.",
  c: false, lei: "“Não se trata de X, mas de Y”: o autor rejeita X e defende Y.",
  exp: "Ele defende punir MELHOR, não MAIS." },

{ id: "pt2-int14", d: "Língua Portuguesa", t: "Interpretação de texto", ref: "Sentido de expressão",
  af: "Texto: “O silêncio da testemunha, longe de ajudar a defesa, levantou ainda mais suspeitas.” — A expressão “longe de” indica que o silêncio teve efeito contrário ao esperado pela defesa.",
  c: true, lei: "“Longe de” = em vez de, ao contrário de.",
  exp: "Correto." },

{ id: "pt2-int15", d: "Língua Portuguesa", t: "Interpretação de texto", ref: "Conclusão do autor",
  af: "Texto: “A leitura de jornais diminuiu entre os jovens. Isso não significa, porém, que eles estejam menos informados: as fontes mudaram.” — O autor conclui que os jovens estão menos informados.",
  c: false, lei: "O “porém” introduz a ideia contrária: menos jornais não significa menos informação.",
  exp: "O autor conclui o OPOSTO: as fontes apenas mudaram." },

{ id: "pt2-int16", d: "Língua Portuguesa", t: "Interpretação de texto", ref: "Coesão referencial",
  af: "No mesmo texto, o pronome “Isso” retoma a informação de que a leitura de jornais diminuiu entre os jovens.",
  c: true, lei: "Coesão referencial: pronomes retomam termos ou ideias já expressos (anáfora).",
  exp: "Correto." }

);
