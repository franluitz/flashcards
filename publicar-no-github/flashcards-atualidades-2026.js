// =============================================================
// ATUALIDADES 2026 – fatos que dominaram o noticiário por semanas
// (pesquisa em fontes jornalísticas, atualizada até 26/11/2026)
// =============================================================
(function () {
const A = "Atualidades 2026";
const q = (id, ref, af, c, lei, exp) => ({ id, d: A, ref, af, c, lei, exp });

CARTOES.push(

// ---------------- VENEZUELA ----------------
q("at26-ven1", "Internacional – Venezuela (jan/2026)",
  "Em 3 de janeiro de 2026, uma operação militar dos Estados Unidos em Caracas capturou Nicolás Maduro, que foi levado para Nova York para responder a acusações de narcoterrorismo e tráfico de drogas.",
  true,
  "Fato: a ação, chamada pelos EUA de “Operação Absolute Resolve”, capturou Maduro e sua esposa, Cilia Flores. A legalidade da operação foi contestada por juristas e condenada por Rússia e China.",
  "Correto. Foi um dos fatos mais comentados do início do ano."),

q("at26-ven2", "Internacional – Venezuela (jan/2026)",
  "Após a captura de Maduro, a líder oposicionista María Corina Machado assumiu a presidência da Venezuela.",
  false,
  "Fato: quem assumiu foi a vice-presidente Delcy Rodríguez, empossada como presidente interina em 5 de janeiro de 2026. María Corina Machado recebeu o Nobel da Paz de 2025.",
  "Quem assumiu foi DELCY RODRÍGUEZ, como presidente interina."),

// ---------------- IRÃ / ORIENTE MÉDIO ----------------
q("at26-ira1", "Internacional – Guerra no Irã (fev/2026)",
  "Em 28 de fevereiro de 2026, Estados Unidos e Israel lançaram ataques contra o Irã, e o líder supremo iraniano, Ali Khamenei, foi morto.",
  true,
  "Fato: os ataques ocorreram depois de uma onda de protestos e de forte repressão no Irã. O conflito se espalhou pela região.",
  "Correto."),

q("at26-ira2", "Internacional – Estreito de Ormuz",
  "Em resposta aos ataques, o Irã fechou o Estreito de Ormuz à navegação estrangeira, o que fez subir o preço do petróleo no mundo.",
  true,
  "Fato: pelo Estreito de Ormuz passa grande parte do petróleo exportado pelo Golfo Pérsico. O bloqueio provocou alta do petróleo e dos combustíveis.",
  "Correto."),

q("at26-ira3", "Geografia – Estreito de Ormuz",
  "O Estreito de Ormuz liga o Mar Negro ao Mar Mediterrâneo.",
  false,
  "Fato: o Estreito de Ormuz liga o Golfo Pérsico ao Golfo de Omã (e ao Mar Arábico), entre o Irã e a Península Arábica. Quem liga o Mar Negro ao Mediterrâneo são os estreitos de Bósforo e Dardanelos.",
  "Ormuz liga o GOLFO PÉRSICO ao GOLFO DE OMÃ."),

q("at26-ira4", "Internacional – Guerra no Irã",
  "O conflito com o Irã terminou definitivamente com o cessar-fogo de abril de 2026, sem novos confrontos até o fim do ano.",
  false,
  "Fato: houve cessar-fogo em abril e um acordo anunciado em junho para reabrir Ormuz, mas o acordo provisório entrou em colapso em julho, com novos ataques. A situação seguiu instável.",
  "O cessar-fogo NÃO pôs fim definitivo ao conflito."),

// ---------------- GAZA ----------------
q("at26-gaza1", "Internacional – Gaza",
  "Ao longo de 2026, o cessar-fogo em Gaza permaneceu frágil, e o Conselho da Paz alertou o Conselho de Segurança da ONU, em novembro, para o risco de colapso da trégua.",
  true,
  "Fato: a Resolução 2803 do Conselho de Segurança (nov/2025) apoiou o plano de paz, criou o Conselho da Paz (Board of Peace) e autorizou uma Força Internacional de Estabilização, que ainda não estava atuando plenamente em Gaza.",
  "Correto."),

// ---------------- UCRÂNIA ----------------
q("at26-ucr1", "Internacional – Rússia x Ucrânia",
  "Rússia e Ucrânia assinaram um acordo de paz definitivo em 2026, encerrando a guerra.",
  false,
  "Fato: até o fim de novembro de 2026 não havia acordo de paz assinado. Houve negociações com participação dos EUA nos Emirados Árabes Unidos em novembro, com troca de prisioneiros, mas sem acordo; o principal impasse é territorial (Donbas).",
  "NÃO houve acordo de paz assinado até novembro de 2026."),

q("at26-ucr2", "Internacional – Rússia x Ucrânia",
  "Um dos principais impasses nas negociações de paz é a exigência russa de que a Ucrânia abra mão de todo o território do Donbas.",
  true,
  "Fato: a Rússia exige concessões territoriais, a não entrada da Ucrânia na OTAN e a ausência de tropas estrangeiras no país; a Ucrânia rejeitou ceder todo o Donbas.",
  "Correto."),

// ---------------- MAIS GEOPOLÍTICA E ECONOMIA ----------------
q("at26-ven3", "Internacional – Venezuela (jan/2026)",
  "A operação dos EUA que capturou Maduro foi amplamente apoiada pela comunidade internacional, inclusive por Rússia e China.",
  false,
  "Fato: Rússia e China condenaram a operação, e muitos especialistas em direito internacional a consideraram ilegal, por violar a soberania venezuelana.",
  "Rússia e China CONDENARAM a operação."),

q("at26-ira5", "Internacional – Guerra no Irã",
  "Em junho de 2026, EUA e Irã anunciaram um acordo para encerrar a guerra e reabrir o Estreito de Ormuz, mas o acordo provisório entrou em colapso em julho.",
  true,
  "Fato: em julho, após ataques a navios comerciais em Ormuz atribuídos ao Irã, os EUA responderam com bombardeios, e a trégua ruiu.",
  "Correto."),

q("at26-ira6", "Economia – Petróleo",
  "O bloqueio do Estreito de Ormuz em 2026 teve impacto apenas regional, sem efeito sobre o preço internacional do petróleo.",
  false,
  "Fato: Ormuz é uma das rotas mais importantes do petróleo mundial; o bloqueio elevou o preço do barril e dos combustíveis em vários países.",
  "O impacto foi MUNDIAL, com alta do petróleo."),

q("at26-gaza2", "Internacional – ONU e Gaza",
  "A Resolução 2803 do Conselho de Segurança da ONU, de novembro de 2025, apoiou o plano de paz para Gaza e autorizou uma Força Internacional de Estabilização.",
  true,
  "Fato: a resolução também acolheu a criação do Conselho da Paz (Board of Peace) para apoiar a reconstrução de Gaza. Em 2026, o Marrocos foi o primeiro país a assinar acordo para participar da força.",
  "Correto."),

q("at26-ucr3", "Internacional – Rússia x Ucrânia",
  "Em novembro de 2026, negociações entre EUA, Rússia e Ucrânia nos Emirados Árabes Unidos resultaram em uma grande troca de prisioneiros, mas sem acordo de paz.",
  true,
  "Fato: foram as primeiras conversas diretas entre russos e ucranianos em nove meses; os países europeus também se articularam para participar das negociações.",
  "Correto."),

q("at26-cop3", "Meio ambiente – COP31",
  "Na COP31, a proposta chamada “Pacto de Antália”, apresentada pela presidência da conferência, foi aprovada por consenso.",
  false,
  "Fato: o Pacto de Antália, que tratava de eletrificação, financiamento e captura de carbono sem citar diretamente os combustíveis fósseis, NÃO foi aprovado; a União Europeia e países menos desenvolvidos rejeitaram o texto.",
  "O Pacto NÃO foi aprovado."),

q("at26-ir3", "Brasil – Reforma do Imposto de Renda",
  "Para compensar a isenção do IR até R$ 5 mil, a reforma criou uma tributação mínima para altas rendas e passou a tributar dividendos elevados.",
  true,
  "Fato: a Lei 15.270/2025 também prevê retenção de 10% sobre dividendos remetidos a acionistas no exterior.",
  "Correto."),

// ---------------- ELEIÇÕES NO BRASIL ----------------
q("at26-ele1", "Brasil – Eleições 2026",
  "Luiz Inácio Lula da Silva foi reeleito presidente no segundo turno, em 25 de outubro de 2026, contra Flávio Bolsonaro, com cerca de 51,8% dos votos válidos.",
  true,
  "Fato: segundo o TSE, Lula teve 51,79% dos votos válidos, e Flávio Bolsonaro (PL), 48,21%. Será o quarto mandato de Lula (2027–2030), com Geraldo Alckmin como vice.",
  "Correto."),

q("at26-ele2", "Brasil – Eleições 2026",
  "Na eleição presidencial de 2026, Lula venceu o primeiro turno e apenas ampliou a vantagem no segundo.",
  false,
  "Fato: no primeiro turno (4 de outubro), Lula ficou em segundo lugar e virou a disputa no segundo turno, algo inédito em eleições presidenciais no Brasil.",
  "Lula ficou em 2º no primeiro turno e VIROU no segundo."),

q("at26-ele3", "Brasil – Eleições 2026",
  "Em 2026, o primeiro turno das eleições gerais foi em 4 de outubro e o segundo turno, em 25 de outubro.",
  true,
  "Fato: as eleições gerais elegeram presidente, governadores, senadores e deputados.",
  "Correto."),

// ---------------- ECONOMIA BRASIL ----------------
q("at26-ir1", "Brasil – Imposto de Renda",
  "Desde 2026, quem ganha até R$ 5 mil por mês está isento do Imposto de Renda, com redução parcial para rendas até cerca de R$ 7,35 mil.",
  true,
  "Fato: a mudança veio com a Lei 15.270/2025, que também criou uma tributação mínima para altas rendas e a tributação de dividendos elevados.",
  "Correto."),

q("at26-ir2", "Brasil – Imposto de Renda",
  "A reforma do Imposto de Renda em vigor em 2026 isentou rendas mensais de até R$ 10 mil.",
  false,
  "Fato: a isenção total vale para rendas de até R$ 5 mil mensais (Lei 15.270/2025).",
  "O limite da isenção é de R$ 5 MIL."),

// ---------------- EUA ----------------
q("at26-eua1", "Internacional – Eleições nos EUA",
  "Nas eleições de meio de mandato dos EUA, em 3 de novembro de 2026, o Partido Democrata conquistou a maioria na Câmara e no Senado.",
  true,
  "Fato: o resultado foi visto como uma derrota para o presidente Donald Trump, que passará a governar com o Congresso controlado pela oposição.",
  "Correto."),

q("at26-eua2", "Internacional – Eleições nos EUA",
  "Nas eleições de meio de mandato de 2026, os republicanos ampliaram a maioria nas duas Casas do Congresso americano.",
  false,
  "Fato: os democratas venceram e passaram a controlar a Câmara e o Senado.",
  "Quem venceu foram os DEMOCRATAS."),

// ---------------- CLIMA ----------------
q("at26-cop1", "Meio ambiente – COP31",
  "A COP31, conferência do clima da ONU realizada em Antália (Turquia) em novembro de 2026, terminou sem consenso sobre um documento final, principalmente por divergências sobre combustíveis fósseis.",
  true,
  "Fato: a conferência se estendeu além do prazo e terminou em 22 de novembro sem acordo amplo. O secretário-geral da ONU, António Guterres, classificou o resultado como profundamente decepcionante.",
  "Correto."),

q("at26-cop2", "Meio ambiente – COP31",
  "A COP31 foi realizada em Belém do Pará, no Brasil.",
  false,
  "Fato: Belém sediou a COP30, em novembro de 2025. A COP31 (2026) foi em Antália, na Turquia.",
  "Belém foi a COP30 (2025). A COP31 foi na TURQUIA."),

// ---------------- RELIGIÃO / TECNOLOGIA ----------------
q("at26-papa1", "Internacional – Vaticano",
  "A primeira encíclica do Papa Leão XIV, “Magnifica Humanitas”, divulgada em maio de 2026, trata da proteção da pessoa humana na era da inteligência artificial.",
  true,
  "Fato: o Papa defendeu que a IA seja “desarmada” de lógicas de dominação, pediu regulação pública e criticou a concentração do setor em grandes empresas.",
  "Correto."),

q("at26-papa2", "Internacional – Vaticano",
  "Na encíclica “Magnifica Humanitas”, o Papa Leão XIV defendeu o uso de armas autônomas letais controladas por inteligência artificial.",
  false,
  "Fato: o Papa CONDENOU as armas autônomas letais e afirmou que decisões sobre a vida e a morte não devem ser entregues a algoritmos.",
  "Ele CONDENOU essas armas."),

q("at26-tec1", "Economia – Tecnologia",
  "Em junho de 2026, a SpaceX, de Elon Musk, fez a maior oferta inicial de ações (IPO) da história, levantando cerca de US$ 75 bilhões.",
  true,
  "Fato: a operação superou o recorde anterior da Saudi Aramco (2019) e avaliou a empresa em cerca de US$ 1,7 trilhão.",
  "Correto."),

// ---------------- PRÊMIOS ----------------
q("at26-nobel1", "Internacional – Nobel da Paz",
  "O Prêmio Nobel da Paz de 2026 foi concedido à jurista sul-africana Navi Pillay, ex-alta comissária da ONU para os Direitos Humanos.",
  true,
  "Fato: o anúncio foi feito em 9 de outubro de 2026, em Oslo, por seus esforços na promoção da paz e do direito internacional.",
  "Correto."),

q("at26-nobel2", "Internacional – Nobel da Paz",
  "O Prêmio Nobel da Paz de 2026 foi concedido à venezuelana María Corina Machado.",
  false,
  "Fato: María Corina Machado recebeu o Nobel da Paz de 2025. Em 2026, a premiada foi Navi Pillay, da África do Sul.",
  "Em 2026, foi NAVI PILLAY (María Corina foi em 2025).")
);
})();
