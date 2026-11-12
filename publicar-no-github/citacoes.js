// =============================================================
// CITAÇÕES "CORINGA" PARA REDAÇÃO DE CONCURSO
// Cada citação: temas em que cabe, autor, frase, fonte e um
// parágrafo-modelo mostrando como encaixá-la no texto.
// Frases com autoria discutida vêm marcadas como "atribuída".
// =============================================================

const TEMAS_CITACOES = {
    "Educação": "🎓",
    "Desigualdade e direitos": "⚖️",
    "Democracia e cidadania": "🗳️",
    "Justiça e Judiciário": "🏛️",
    "Ética e corrupção": "🧭",
    "Tecnologia e redes": "📱",
    "Meio ambiente": "🌱",
    "Saúde e saúde mental": "🩺",
    "Violência e segurança": "🚨",
    "Trabalho e sociedade": "💼",
    "Grupos vulneráveis": "🤝"
};

const CITACOES = [

// ---------------- EDUCAÇÃO ----------------
{ temas: ["Educação", "Desigualdade e direitos"],
  autor: "Paulo Freire", fonte: "Pedagogia da Indignação (2000)",
  frase: "Se a educação sozinha não transforma a sociedade, sem ela tampouco a sociedade muda.",
  uso: "Para o educador Paulo Freire, “se a educação sozinha não transforma a sociedade, sem ela tampouco a sociedade muda”. Essa reflexão permanece atual no Brasil, onde a evasão escolar e a baixa qualidade do ensino público ainda limitam a ascensão social de milhões de jovens. Desse modo, enfrentar [o problema do tema] exige, antes de tudo, investimento consistente em educação." },

{ temas: ["Educação"],
  autor: "Immanuel Kant", fonte: "Sobre a Pedagogia (1803)",
  frase: "O homem não é nada além daquilo que a educação faz dele.",
  uso: "Segundo o filósofo Immanuel Kant, “o homem não é nada além daquilo que a educação faz dele”. Sob essa ótica, comportamentos como [o problema do tema] não surgem do acaso, mas refletem lacunas na formação dos indivíduos, o que torna a escola e a família peças centrais na solução." },

{ temas: ["Educação", "Desigualdade e direitos"],
  autor: "Darcy Ribeiro", fonte: "Conferência na SBPC (1977)",
  frase: "A crise da educação no Brasil não é uma crise; é um projeto.",
  uso: "O antropólogo Darcy Ribeiro afirmou que “a crise da educação no Brasil não é uma crise; é um projeto”. A frase denuncia que a precariedade do ensino não é acidental, mas fruto de escolhas históricas que mantêm desigualdades. Assim, superar [o problema do tema] passa por tratar a educação como prioridade de Estado, e não de governo." },

{ temas: ["Educação", "Trabalho e sociedade"],
  autor: "Monteiro Lobato", fonte: "frase do autor sobre a leitura",
  frase: "Um país se faz com homens e livros.",
  uso: "Monteiro Lobato defendia que “um país se faz com homens e livros”. No entanto, pesquisas sobre hábitos de leitura mostram que grande parte dos brasileiros lê pouco, o que empobrece o senso crítico e a participação cidadã. Por isso, incentivar a leitura é caminho essencial para enfrentar [o problema do tema]." },

{ temas: ["Educação", "Desigualdade e direitos"],
  autor: "Constituição Federal", fonte: "CF/88, art. 205",
  frase: "A educação, direito de todos e dever do Estado e da família, será promovida e incentivada com a colaboração da sociedade, visando ao pleno desenvolvimento da pessoa, seu preparo para o exercício da cidadania e sua qualificação para o trabalho.",
  uso: "A Constituição Federal de 1988, em seu artigo 205, estabelece a educação como “direito de todos e dever do Estado e da família”. Na prática, porém, esse direito ainda não se concretiza de forma igual para todos, como evidencia [o problema do tema]. Cabe, portanto, ao poder público tirar a norma do papel." },

{ temas: ["Educação", "Trabalho e sociedade"],
  autor: "Nelson Mandela", fonte: "discurso de 2003 (atribuída)",
  frase: "A educação é a arma mais poderosa que você pode usar para mudar o mundo.",
  uso: "Nelson Mandela, ex-presidente da África do Sul, afirmou que “a educação é a arma mais poderosa que você pode usar para mudar o mundo”. Nesse sentido, programas educativos e campanhas de conscientização são instrumentos indispensáveis para combater [o problema do tema]." },

// ---------------- DESIGUALDADE E DIREITOS ----------------
{ temas: ["Desigualdade e direitos", "Justiça e Judiciário"],
  autor: "Rui Barbosa", fonte: "Oração aos Moços (1921)",
  frase: "A regra da igualdade não consiste senão em quinhoar desigualmente aos desiguais, na medida em que se desigualam.",
  uso: "Rui Barbosa, em Oração aos Moços, ensina que a igualdade consiste em “quinhoar desigualmente aos desiguais, na medida em que se desigualam”. Essa ideia fundamenta as políticas afirmativas e mostra que tratar todos de forma idêntica pode aprofundar [o problema do tema]. É preciso, então, dar mais a quem mais precisa." },

{ temas: ["Desigualdade e direitos", "Democracia e cidadania"],
  autor: "Constituição Federal", fonte: "CF/88, art. 3º, III",
  frase: "Constituem objetivos fundamentais da República Federativa do Brasil (...) erradicar a pobreza e a marginalização e reduzir as desigualdades sociais e regionais.",
  uso: "O artigo 3º da Constituição Federal fixa como objetivo fundamental da República “erradicar a pobreza e a marginalização e reduzir as desigualdades sociais e regionais”. Contudo, [o problema do tema] revela que o país ainda está distante desse compromisso, o que exige ação coordenada entre Estado e sociedade." },

{ temas: ["Desigualdade e direitos", "Grupos vulneráveis"],
  autor: "Constituição Federal", fonte: "CF/88, art. 1º, III, e art. 5º, caput",
  frase: "A República Federativa do Brasil (...) tem como fundamentos: (...) a dignidade da pessoa humana. | Todos são iguais perante a lei, sem distinção de qualquer natureza.",
  uso: "A dignidade da pessoa humana é fundamento da República, nos termos do artigo 1º da Constituição Federal, e o artigo 5º garante que “todos são iguais perante a lei”. Apesar disso, [o problema do tema] mostra que parte da população ainda tem sua dignidade violada no cotidiano. (Dica: é a citação mais coringa de todas, pois cabe em praticamente qualquer tema social.)" },

{ temas: ["Desigualdade e direitos", "Democracia e cidadania"],
  autor: "Norberto Bobbio", fonte: "A Era dos Direitos (1990)",
  frase: "O problema fundamental em relação aos direitos do homem, hoje, não é tanto o de justificá-los, mas o de protegê-los.",
  uso: "Para o filósofo italiano Norberto Bobbio, o problema dos direitos humanos hoje “não é tanto o de justificá-los, mas o de protegê-los”. No Brasil, a legislação sobre [o tema] é avançada, mas falta efetividade: a lei existe, porém não chega a quem dela precisa." },

{ temas: ["Desigualdade e direitos", "Grupos vulneráveis"],
  autor: "Hannah Arendt", fonte: "Origens do Totalitarismo (1951) – conceito",
  frase: "O primeiro direito humano é o direito a ter direitos.",
  uso: "A filósofa Hannah Arendt cunhou a ideia do “direito a ter direitos”, isto é, o direito de pertencer a uma comunidade que reconheça o indivíduo como sujeito. Pessoas afetadas por [o problema do tema] muitas vezes ficam à margem dessa proteção, invisíveis às políticas públicas." },

{ temas: ["Desigualdade e direitos", "Trabalho e sociedade"],
  autor: "Jean-Jacques Rousseau", fonte: "Do Contrato Social (1762)",
  frase: "O homem nasce livre, e por toda parte encontra-se a ferros.",
  uso: "Rousseau abre O Contrato Social afirmando que “o homem nasce livre, e por toda parte encontra-se a ferros”. Na atualidade, essas “correntes” podem ser lidas como as desigualdades e limitações sociais que impedem o pleno desenvolvimento das pessoas, como ocorre em [o problema do tema]." },

// ---------------- DEMOCRACIA E CIDADANIA ----------------
{ temas: ["Democracia e cidadania"],
  autor: "Aristóteles", fonte: "Política (séc. IV a.C.)",
  frase: "O homem é, por natureza, um animal político.",
  uso: "Aristóteles afirmava que “o homem é, por natureza, um animal político”, ou seja, realiza-se na vida em sociedade e na participação dos assuntos coletivos. Diante de [o problema do tema], a omissão do cidadão enfraquece a democracia, o que torna essencial estimular a participação social." },

{ temas: ["Democracia e cidadania", "Ética e corrupção"],
  autor: "Montesquieu", fonte: "O Espírito das Leis (1748)",
  frase: "Para que não se possa abusar do poder, é preciso que, pela disposição das coisas, o poder freie o poder.",
  uso: "Montesquieu, em O Espírito das Leis, defendia que “o poder freie o poder” para evitar abusos. Essa lógica de freios e contrapesos é base do Estado democrático e se mostra indispensável para enfrentar [o problema do tema], pois órgãos de controle independentes impedem desvios." },

{ temas: ["Democracia e cidadania", "Tecnologia e redes"],
  autor: "Constituição Federal", fonte: "CF/88, art. 1º, parágrafo único",
  frase: "Todo o poder emana do povo, que o exerce por meio de representantes eleitos ou diretamente, nos termos desta Constituição.",
  uso: "A Constituição estabelece que “todo o poder emana do povo”. Nesse contexto, [o problema do tema – ex.: desinformação nas eleições] ameaça diretamente a soberania popular, pois um eleitor mal informado não exerce plenamente esse poder." },

{ temas: ["Democracia e cidadania", "Desigualdade e direitos"],
  autor: "Sérgio Buarque de Holanda", fonte: "Raízes do Brasil (1936) – conceito",
  frase: "O “homem cordial”: a tendência brasileira de misturar o público e o privado, guiando-se pelas relações pessoais.",
  uso: "Sérgio Buarque de Holanda descreveu, em Raízes do Brasil, o “homem cordial”, que tende a confundir o público com o privado e a agir pelas relações pessoais. Esse traço ajuda a explicar [o problema do tema – ex.: nepotismo, “jeitinho”], que fragiliza a impessoalidade das instituições." },

// ---------------- JUSTIÇA E JUDICIÁRIO ----------------
{ temas: ["Justiça e Judiciário"],
  autor: "Rui Barbosa", fonte: "Oração aos Moços (1921)",
  frase: "Justiça atrasada não é justiça, senão injustiça qualificada e manifesta.",
  uso: "Rui Barbosa já advertia que “justiça atrasada não é justiça, senão injustiça qualificada e manifesta”. A morosidade processual, ainda presente no Brasil, prejudica sobretudo quem mais depende do Judiciário. Por isso, a informatização dos processos e a gestão eficiente das varas são caminhos para concretizar o direito à razoável duração do processo." },

{ temas: ["Justiça e Judiciário", "Democracia e cidadania"],
  autor: "Constituição Federal", fonte: "CF/88, art. 5º, XXXV e LXXVIII",
  frase: "A lei não excluirá da apreciação do Poder Judiciário lesão ou ameaça a direito. | A todos (...) são assegurados a razoável duração do processo e os meios que garantam a celeridade de sua tramitação.",
  uso: "A Constituição garante o acesso à Justiça (art. 5º, XXXV) e a razoável duração do processo (art. 5º, LXXVIII). Contudo, [o problema do tema] mostra que nem todos conseguem acessar ou obter resposta rápida do Judiciário, o que exige ampliar a Defensoria Pública e investir em tecnologia." },

{ temas: ["Justiça e Judiciário", "Desigualdade e direitos"],
  autor: "Martin Luther King Jr.", fonte: "Carta da Prisão de Birmingham (1963)",
  frase: "A injustiça em qualquer lugar é uma ameaça à justiça em todo lugar.",
  uso: "Martin Luther King Jr. escreveu que “a injustiça em qualquer lugar é uma ameaça à justiça em todo lugar”. Assim, [o problema do tema] não afeta apenas suas vítimas diretas: ao ser tolerado, enfraquece a confiança de toda a sociedade nas instituições." },

{ temas: ["Justiça e Judiciário", "Violência e segurança"],
  autor: "Max Weber", fonte: "A Política como Vocação (1919) – conceito",
  frase: "O Estado é a comunidade humana que reivindica, com êxito, o monopólio do uso legítimo da força física.",
  uso: "Para o sociólogo Max Weber, o Estado detém o “monopólio do uso legítimo da força”. Quando grupos armados ou a prática da justiça pelas próprias mãos ganham espaço, como em [o problema do tema], esse monopólio é rompido e a segurança coletiva fica ameaçada." },

// ---------------- ÉTICA E CORRUPÇÃO ----------------
{ temas: ["Ética e corrupção"],
  autor: "Rui Barbosa", fonte: "discurso no Senado (1914)",
  frase: "De tanto ver triunfar as nulidades, de tanto ver prosperar a desonra, (...) o homem chega a desanimar da virtude, a rir-se da honra, a ter vergonha de ser honesto.",
  uso: "Em discurso no Senado, Rui Barbosa lamentou que, de tanto ver a desonra prosperar, o homem chega “a ter vergonha de ser honesto”. Mais de um século depois, [o problema do tema] mostra que a impunidade ainda desestimula condutas éticas, o que reforça a importância de órgãos de controle atuantes." },

{ temas: ["Ética e corrupção", "Democracia e cidadania"],
  autor: "Constituição Federal", fonte: "CF/88, art. 37, caput",
  frase: "A administração pública (...) obedecerá aos princípios de legalidade, impessoalidade, moralidade, publicidade e eficiência.",
  uso: "O artigo 37 da Constituição impõe à administração pública os princípios da legalidade, impessoalidade, moralidade, publicidade e eficiência. [O problema do tema] fere diretamente esses princípios, sobretudo a moralidade e a eficiência, e por isso deve ser combatido com transparência e fiscalização." },

{ temas: ["Ética e corrupção", "Violência e segurança"],
  autor: "Hannah Arendt", fonte: "Eichmann em Jerusalém (1963) – conceito",
  frase: "A “banalidade do mal”: o mal praticado por pessoas comuns que deixam de refletir sobre os próprios atos.",
  uso: "Hannah Arendt cunhou a expressão “banalidade do mal” para descrever o mal praticado por pessoas comuns que simplesmente deixam de pensar sobre seus atos. Esse conceito ajuda a compreender [o problema do tema], no qual condutas graves se tornam rotineiras e deixam de causar indignação." },

{ temas: ["Ética e corrupção", "Grupos vulneráveis"],
  autor: "Immanuel Kant", fonte: "Fundamentação da Metafísica dos Costumes (1785)",
  frase: "Age de tal maneira que uses a humanidade, tanto na tua pessoa como na de qualquer outro, sempre e simultaneamente como fim e nunca simplesmente como meio.",
  uso: "Kant formulou o imperativo de tratar a humanidade “sempre como fim e nunca simplesmente como meio”. Situações como [o problema do tema – ex.: trabalho análogo à escravidão, tráfico de pessoas] violam esse princípio ao reduzir pessoas a instrumentos de lucro." },

{ temas: ["Ética e corrupção", "Saúde e saúde mental"],
  autor: "Sócrates (por Platão)", fonte: "Apologia de Sócrates",
  frase: "Uma vida sem exame não vale a pena ser vivida.",
  uso: "Sócrates, segundo Platão, afirmou que “uma vida sem exame não vale a pena ser vivida”. Em uma rotina acelerada, marcada por [o problema do tema], falta justamente espaço para essa reflexão, o que compromete escolhas conscientes." },

// ---------------- TECNOLOGIA E REDES ----------------
{ temas: ["Tecnologia e redes", "Trabalho e sociedade"],
  autor: "Zygmunt Bauman", fonte: "Modernidade Líquida (2000) – conceito",
  frase: "Na “modernidade líquida”, as relações e as instituições tornam-se frágeis, fluidas e passageiras.",
  uso: "O sociólogo Zygmunt Bauman caracterizou o mundo atual como uma “modernidade líquida”, em que relações e vínculos se tornam frágeis e passageiros. As redes sociais intensificam esse cenário e contribuem para [o problema do tema], ao trocar laços profundos por conexões superficiais." },

{ temas: ["Tecnologia e redes", "Democracia e cidadania"],
  autor: "Umberto Eco", fonte: "entrevista em Turim (2015)",
  frase: "As redes sociais deram o direito à palavra a legiões de imbecis que antes falavam apenas em um bar.",
  uso: "O escritor Umberto Eco criticou o fato de as redes sociais darem voz a qualquer opinião sem filtro, equiparando especialistas e desinformados. Esse cenário favorece [o problema do tema – ex.: fake news], o que exige educação midiática para que o cidadão saiba checar fontes." },

{ temas: ["Tecnologia e redes", "Violência e segurança"],
  autor: "Michel Foucault", fonte: "Vigiar e Punir (1975) – conceito",
  frase: "O panóptico: uma estrutura em que o indivíduo é constantemente vigiado, sem saber quando, e por isso se autodisciplina.",
  uso: "Michel Foucault analisou o panóptico, modelo em que a vigilância constante leva o indivíduo a controlar o próprio comportamento. Na era digital, a coleta massiva de dados pessoais atualiza essa ideia e levanta preocupações sobre [o problema do tema – ex.: privacidade, LGPD]." },

{ temas: ["Tecnologia e redes", "Trabalho e sociedade"],
  autor: "Guy Debord", fonte: "A Sociedade do Espetáculo (1967) – conceito",
  frase: "O espetáculo não é um conjunto de imagens, mas uma relação social entre pessoas, mediada por imagens.",
  uso: "Guy Debord descreveu a “sociedade do espetáculo”, em que as relações sociais passam a ser mediadas por imagens. A busca por curtidas e aparência perfeita nas redes reforça [o problema do tema], pois o parecer passa a importar mais que o ser." },

// ---------------- MEIO AMBIENTE ----------------
{ temas: ["Meio ambiente"],
  autor: "Constituição Federal", fonte: "CF/88, art. 225",
  frase: "Todos têm direito ao meio ambiente ecologicamente equilibrado, bem de uso comum do povo e essencial à sadia qualidade de vida, impondo-se ao Poder Público e à coletividade o dever de defendê-lo e preservá-lo para as presentes e futuras gerações.",
  uso: "O artigo 225 da Constituição assegura a todos o direito ao meio ambiente ecologicamente equilibrado e impõe ao Poder Público e à coletividade o dever de preservá-lo “para as presentes e futuras gerações”. [O problema do tema – ex.: desmatamento, queimadas] contraria esse dever e compromete o futuro coletivo." },

{ temas: ["Meio ambiente", "Ética e corrupção"],
  autor: "Hans Jonas", fonte: "O Princípio Responsabilidade (1979)",
  frase: "Age de tal modo que os efeitos da tua ação sejam compatíveis com a permanência de uma autêntica vida humana sobre a Terra.",
  uso: "O filósofo Hans Jonas propôs um novo imperativo ético: agir de modo que os efeitos de nossas ações sejam “compatíveis com a permanência de uma autêntica vida humana sobre a Terra”. [O problema do tema] demonstra que o consumo e a produção atuais ignoram essa responsabilidade com as próximas gerações." },

{ temas: ["Meio ambiente"],
  autor: "Ailton Krenak", fonte: "Ideias para Adiar o Fim do Mundo (2019) – ideia central",
  frase: "A humanidade se descolou da Terra, como se fosse algo separado da natureza.",
  uso: "O pensador indígena Ailton Krenak critica a ideia de uma humanidade separada da natureza, como se a Terra fosse apenas recurso a ser explorado. Essa visão está na raiz de [o problema do tema], e os saberes dos povos originários oferecem alternativas de convivência sustentável." },

{ temas: ["Meio ambiente", "Desigualdade e direitos"],
  autor: "Mahatma Gandhi", fonte: "frase atribuída",
  frase: "A Terra fornece o suficiente para satisfazer as necessidades de todos, mas não a ganância de todos.",
  uso: "Atribui-se a Mahatma Gandhi a ideia de que “a Terra fornece o suficiente para satisfazer as necessidades de todos, mas não a ganância de todos”. O desperdício e o consumo excessivo, ligados a [o problema do tema], mostram que a crise ambiental é também uma crise de valores." },

// ---------------- SAÚDE E SAÚDE MENTAL ----------------
{ temas: ["Saúde e saúde mental"],
  autor: "Constituição Federal", fonte: "CF/88, art. 196",
  frase: "A saúde é direito de todos e dever do Estado, garantido mediante políticas sociais e econômicas que visem à redução do risco de doença e de outros agravos e ao acesso universal e igualitário às ações e serviços.",
  uso: "Segundo o artigo 196 da Constituição, “a saúde é direito de todos e dever do Estado”. Apesar da existência do SUS, [o problema do tema] evidencia que o acesso universal e igualitário ainda enfrenta filas, falta de profissionais e desigualdade regional." },

{ temas: ["Saúde e saúde mental"],
  autor: "Organização Mundial da Saúde", fonte: "Constituição da OMS (1946)",
  frase: "Saúde é um estado de completo bem-estar físico, mental e social, e não apenas a ausência de doença ou enfermidade.",
  uso: "A Organização Mundial da Saúde define saúde como “um estado de completo bem-estar físico, mental e social, e não apenas a ausência de doença”. Sob esse conceito, [o problema do tema – ex.: ansiedade, depressão] é questão de saúde pública e precisa de atenção tanto quanto as doenças físicas." },

{ temas: ["Saúde e saúde mental", "Trabalho e sociedade"],
  autor: "Byung-Chul Han", fonte: "Sociedade do Cansaço (2010) – conceito",
  frase: "A sociedade do desempenho produz indivíduos que se exploram a si mesmos até o esgotamento.",
  uso: "O filósofo Byung-Chul Han descreve a atual “sociedade do cansaço”, em que o indivíduo se cobra desempenho permanente e acaba esgotado. O aumento de casos de burnout e ansiedade, relacionado a [o problema do tema], confirma esse diagnóstico." },

{ temas: ["Saúde e saúde mental", "Educação"],
  autor: "Sêneca", fonte: "Cartas a Lucílio (séc. I)",
  frase: "Enquanto adiamos, a vida passa.",
  uso: "O filósofo Sêneca alertava que “enquanto adiamos, a vida passa”. A frase se aplica à postergação de cuidados com a saúde e de medidas preventivas, como ocorre em [o problema do tema], cujos efeitos se agravam quanto mais se espera para agir." },

// ---------------- VIOLÊNCIA E SEGURANÇA ----------------
{ temas: ["Violência e segurança"],
  autor: "Thomas Hobbes", fonte: "Do Cidadão (1642), retomando Plauto",
  frase: "O homem é o lobo do homem.",
  uso: "Thomas Hobbes retomou a expressão latina “o homem é o lobo do homem” para justificar a necessidade de um Estado que garanta a paz. O crescimento de [o problema do tema] mostra o que acontece quando o Estado falha em proteger: a convivência social se degrada." },

{ temas: ["Violência e segurança", "Democracia e cidadania"],
  autor: "Hannah Arendt", fonte: "Sobre a Violência (1970)",
  frase: "O poder e a violência são opostos; onde um domina absolutamente, o outro está ausente.",
  uso: "Para Hannah Arendt, poder e violência são opostos: a violência aparece justamente quando o poder legítimo está em crise. Nesse sentido, [o problema do tema] revela a fragilidade das instituições em mediar conflitos de forma pacífica." },

{ temas: ["Violência e segurança", "Grupos vulneráveis"],
  autor: "Nelson Mandela", fonte: "Longa Caminhada até a Liberdade (1994)",
  frase: "Ninguém nasce odiando outra pessoa pela cor de sua pele, por sua origem ou ainda por sua religião. Para odiar, as pessoas precisam aprender.",
  uso: "Nelson Mandela lembrava que ninguém nasce odiando: “para odiar, as pessoas precisam aprender”. Se o preconceito é aprendido, também pode ser desaprendido — o que coloca a educação no centro do combate a [o problema do tema – ex.: racismo, intolerância religiosa]." },

// ---------------- TRABALHO E SOCIEDADE ----------------
{ temas: ["Trabalho e sociedade", "Desigualdade e direitos"],
  autor: "Constituição Federal", fonte: "CF/88, art. 1º, IV, e art. 6º",
  frase: "Fundamentos da República: (...) os valores sociais do trabalho e da livre iniciativa. | São direitos sociais a educação, a saúde, a alimentação, o trabalho, a moradia, o transporte, o lazer, a segurança...",
  uso: "A Constituição elege os valores sociais do trabalho como fundamento da República (art. 1º, IV) e inclui o trabalho entre os direitos sociais (art. 6º). [O problema do tema – ex.: informalidade, desemprego] mostra que esse direito ainda não alcança todos, especialmente os jovens e os menos escolarizados." },

{ temas: ["Trabalho e sociedade", "Tecnologia e redes"],
  autor: "Milton Santos", fonte: "Por uma Outra Globalização (2000) – ideia central",
  frase: "A globalização, como é feita hoje, aparece para a maioria como perversidade: aprofunda o desemprego e a desigualdade.",
  uso: "O geógrafo Milton Santos via a globalização, do modo como ocorre, como uma “perversidade” para a maioria, por ampliar desigualdades e o desemprego. A automação e as plataformas digitais, ligadas a [o problema do tema], reforçam a necessidade de políticas de requalificação profissional." },

// ---------------- GRUPOS VULNERÁVEIS ----------------
{ temas: ["Grupos vulneráveis"],
  autor: "Simone de Beauvoir", fonte: "O Segundo Sexo (1949)",
  frase: "Ninguém nasce mulher: torna-se mulher.",
  uso: "Simone de Beauvoir afirmou que “ninguém nasce mulher: torna-se mulher”, mostrando que os papéis de gênero são construções sociais. Essa construção ajuda a explicar [o problema do tema – ex.: violência contra a mulher, desigualdade salarial], que não decorre da natureza, mas de padrões culturais que podem ser transformados." },

{ temas: ["Grupos vulneráveis", "Educação"],
  autor: "Constituição Federal", fonte: "CF/88, art. 227",
  frase: "É dever da família, da sociedade e do Estado assegurar à criança, ao adolescente e ao jovem, com absoluta prioridade, o direito à vida, à saúde, à alimentação, à educação...",
  uso: "O artigo 227 da Constituição determina que crianças, adolescentes e jovens sejam tratados com “absoluta prioridade” pela família, pela sociedade e pelo Estado. [O problema do tema – ex.: trabalho infantil, exposição às telas] demonstra que essa prioridade ainda não se reflete nas políticas públicas." },

{ temas: ["Grupos vulneráveis"],
  autor: "Constituição Federal", fonte: "CF/88, art. 230",
  frase: "A família, a sociedade e o Estado têm o dever de amparar as pessoas idosas, assegurando sua participação na comunidade, defendendo sua dignidade e bem-estar e garantindo-lhes o direito à vida.",
  uso: "O artigo 230 da Constituição impõe à família, à sociedade e ao Estado o dever de amparar as pessoas idosas. Com o envelhecimento acelerado da população brasileira, [o problema do tema – ex.: abandono de idosos, etarismo] torna-se um desafio cada vez mais urgente." },

{ temas: ["Grupos vulneráveis", "Desigualdade e direitos"],
  autor: "Angela Davis", fonte: "frase atribuída",
  frase: "Numa sociedade racista, não basta não ser racista. É necessário ser antirracista.",
  uso: "Atribui-se à ativista Angela Davis a ideia de que, numa sociedade racista, “não basta não ser racista, é necessário ser antirracista”. Ou seja, diante de [o problema do tema], a neutralidade não é suficiente: é preciso agir ativamente contra a discriminação." },

{ temas: ["Grupos vulneráveis", "Desigualdade e direitos"],
  autor: "Lei Brasileira de Inclusão", fonte: "Lei 13.146/2015, art. 4º",
  frase: "Toda pessoa com deficiência tem direito à igualdade de oportunidades com as demais pessoas e não sofrerá nenhuma espécie de discriminação.",
  uso: "A Lei Brasileira de Inclusão (Lei 13.146/2015) garante à pessoa com deficiência “igualdade de oportunidades com as demais pessoas”. Ainda assim, [o problema do tema – ex.: falta de acessibilidade, exclusão do mercado de trabalho] mostra que as barreiras, sobretudo as atitudinais, persistem." }

];
