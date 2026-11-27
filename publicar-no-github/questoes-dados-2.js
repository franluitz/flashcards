// =============================================================
// QUESTÕES INÉDITAS – LOTE 2 (ênfase no que já caiu no TJ-SP Escrevente)
// "tj: true" = artigo marcado nos PDFs como já cobrado em prova do TJ-SP.
// =============================================================
(function () {
const inicio = QUESTOES.length;
const Q = (d, id, ref, enun, alt, resp, exp, lei, tj = true) => QUESTOES.push({ id, d, ref, enun, alt, resp, exp, lei, tj });
const PEN = "Direito Penal", PPE = "Direito Processual Penal", PCI = "Direito Processual Civil",
      CON = "Direito Constitucional", EST = "Estatuto dos Servidores SP", R850 = "Res. 850/2021 – Teletrabalho",
      R963 = "Res. 963/2025 – eproc", LC = "LC 1.111/2010 – Carreiras TJSP", RI = "Regimento Interno TJSP",
      LBI = "Estatuto da Pessoa com Deficiência", NSC = "Normas da Corregedoria", POR = "Língua Portuguesa",
      INF = "Informática";

// ===================== DIREITO PENAL =====================
Q(PEN, "q2-pen1", "CP, art. 293, § 4º",
  "Quem usa ou restitui à circulação papel público falsificado, recebido de boa-fé, depois de conhecer a falsidade, incorre em",
  ["reclusão de 2 a 8 anos e multa.", "detenção de 6 meses a 2 anos, ou multa.", "reclusão de 1 a 4 anos.", "fato atípico, pois agiu de boa-fé.", "detenção de 15 dias a 1 mês."],
  1, "O § 4º prevê pena menor para quem recebeu de boa-fé e, depois de saber da falsidade, usa ou restitui o papel.",
  "§ 4º - Quem usa ou restitui à circulação, embora recibo de boa-fé, qualquer dos papéis falsificados ou alterados (...), depois de conhecer a falsidade ou alteração, incorre na pena de detenção, de 6 meses a 2 anos, ou multa."),

Q(PEN, "q2-pen2", "CP, arts. 295, 296 § 2º e 297 § 1º",
  "Nos crimes de falsificação de papéis públicos, de selo público e de documento público, quando o agente é funcionário público e se prevalece do cargo, a pena é",
  ["aumentada de um terço.", "aumentada de metade.", "aumentada de sexta parte.", "dobrada.", "diminuída de um terço."],
  2, "Nos crimes de falsidade cometidos por funcionário que se prevalece do cargo, o aumento é de SEXTA PARTE.",
  "Art. 297 (...) § 1º - Se o agente é funcionário público, e comete o crime prevalecendo-se do cargo, aumenta-se a pena de sexta parte."),

Q(PEN, "q2-pen3", "CP, art. 299",
  "Omitir, em documento público, declaração que dele devia constar, com o fim de alterar a verdade sobre fato juridicamente relevante, configura",
  ["falsificação de documento público.", "falsidade ideológica.", "supressão de documento.", "uso de documento falso.", "falso reconhecimento de firma."],
  1, "Na falsidade ideológica o documento é materialmente verdadeiro, mas o CONTEÚDO é falso (omissão ou inserção de declaração falsa).",
  "Art. 299 - Omitir, em documento público ou particular, declaração que dele devia constar, ou nele inserir ou fazer inserir declaração falsa ou diversa da que devia ser escrita, com o fim de prejudicar direito, criar obrigação ou alterar a verdade sobre fato juridicamente relevante (...)."),

Q(PEN, "q2-pen4", "CP, art. 311-A, § 3º",
  "No crime de fraude em certame de interesse público, se o fato é cometido por funcionário público, a pena",
  ["é aumentada de um terço.", "é aumentada de sexta parte.", "é dobrada.", "não se altera.", "é aumentada de metade."],
  0, "No art. 311-A o aumento para funcionário público é de 1/3 (diferente dos crimes de falsidade, em que é de 1/6).",
  "§ 3º Aumenta-se a pena de 1/3 (um terço) se o fato é cometido por funcionário público."),

Q(PEN, "q2-pen5", "CP, art. 316, § 1º",
  "O funcionário que exige tributo que sabe indevido, ou emprega na cobrança meio vexatório não autorizado por lei, comete",
  ["concussão simples.", "excesso de exação.", "corrupção passiva.", "peculato.", "prevaricação."],
  1, "Excesso de exação (art. 316, § 1º): reclusão de 3 a 8 anos e multa.",
  "§ 1º - Se o funcionário exige tributo ou contribuição social que sabe ou deveria saber indevido, ou, quando devido, emprega na cobrança meio vexatório ou gravoso, que a lei não autoriza: Pena - reclusão, de 3 (três) a 8 (oito) anos, e multa."),

Q(PEN, "q2-pen6", "CP, art. 320",
  "Deixar o funcionário, por indulgência, de responsabilizar subordinado que cometeu infração no exercício do cargo caracteriza",
  ["prevaricação.", "condescendência criminosa.", "advocacia administrativa.", "corrupção passiva privilegiada.", "favorecimento pessoal."],
  1, "A “indulgência” (tolerância) com o subordinado é a marca da condescendência criminosa.",
  "Art. 320 - Deixar o funcionário, por indulgência, de responsabilizar subordinado que cometeu infração no exercício do cargo ou, quando lhe falte competência, não levar o fato ao conhecimento da autoridade competente: Pena - detenção, de quinze dias a um mês, ou multa."),

Q(PEN, "q2-pen7", "CP, art. 321",
  "Patrocinar, direta ou indiretamente, interesse privado perante a administração pública, valendo-se da qualidade de funcionário, configura",
  ["tráfico de influência.", "advocacia administrativa.", "exploração de prestígio.", "corrupção ativa.", "usurpação de função pública."],
  1, "Advocacia administrativa; se o interesse é ilegítimo, a pena aumenta (parágrafo único).",
  "Art. 321 - Patrocinar, direta ou indiretamente, interesse privado perante a administração pública, valendo-se da qualidade de funcionário: Pena - detenção, de um a três meses, ou multa."),

Q(PEN, "q2-pen8", "CP, art. 323",
  "No crime de abandono de função, a pena é de detenção de 1 a 3 anos e multa quando",
  ["do fato resulta prejuízo público.", "o fato ocorre em lugar compreendido na faixa de fronteira.", "o funcionário ocupa cargo em comissão.", "o abandono dura mais de 30 dias.", "há reincidência."],
  1, "Simples: 15 dias a 1 mês, ou multa. Com prejuízo público: 3 meses a 1 ano e multa. Faixa de fronteira: 1 a 3 anos e multa.",
  "§ 2º - Se o fato ocorre em lugar compreendido na faixa de fronteira: Pena - detenção, de um a três anos, e multa."),

Q(PEN, "q2-pen9", "CP, art. 339",
  "Dar causa à instauração de inquérito policial contra alguém, imputando-lhe crime de que o sabe inocente, configura",
  ["comunicação falsa de crime.", "denunciação caluniosa.", "autoacusação falsa.", "falso testemunho.", "fraude processual."],
  1, "Denunciação caluniosa (art. 339). Na comunicação falsa (art. 340) não há imputação a pessoa determinada.",
  "Art. 339. Dar causa à instauração de inquérito policial, de procedimento investigatório criminal, de processo judicial, de processo administrativo disciplinar, de inquérito civil ou de ação de improbidade administrativa contra alguém, imputando-lhe crime, infração ético-disciplinar ou ato ímprobo de que o sabe inocente: Pena - reclusão, de dois a oito anos, e multa."),

Q(PEN, "q2-pen10", "CP, art. 339, §§ 1º e 2º",
  "Na denunciação caluniosa, a pena é diminuída de metade quando",
  ["o agente se serve de anonimato.", "a imputação é de prática de contravenção.", "o agente se retrata.", "a vítima é funcionário público.", "não houve condenação da vítima."],
  1, "§ 1º: anonimato ou nome suposto → aumenta de 1/6. § 2º: imputação de contravenção → diminui de metade.",
  "§ 1º - A pena é aumentada de sexta parte, se o agente se serve de anonimato ou de nome suposto. § 2º - A pena é diminuída de metade, se a imputação é de prática de contravenção."),

Q(PEN, "q2-pen11", "CP, art. 347, parágrafo único",
  "Na fraude processual, se a inovação artificiosa se destina a produzir efeito em processo penal, ainda que não iniciado, as penas",
  ["são aumentadas de um terço.", "aplicam-se em dobro.", "não se alteram.", "são aumentadas de sexta parte.", "são reduzidas de metade."],
  1, "Processo penal (mesmo não iniciado): penas em dobro.",
  "Parágrafo único - Se a inovação se destina a produzir efeito em processo penal, ainda que não iniciado, as penas aplicam-se em dobro."),

Q(PEN, "q2-pen12", "CP, art. 307",
  "Atribuir-se falsa identidade para obter vantagem é crime punido com detenção de 3 meses a 1 ano, ou multa,",
  ["em qualquer hipótese.", "se o fato não constitui elemento de crime mais grave.", "apenas se houver prejuízo a terceiro.", "somente se praticado por funcionário público.", "desde que haja uso de documento falso."],
  1, "A falsa identidade é crime subsidiário: só se aplica se o fato não for elemento de crime mais grave.",
  "Art. 307 - Atribuir-se ou atribuir a terceiro falsa identidade para obter vantagem, em proveito próprio ou alheio, ou para causar dano a outrem: Pena - detenção, de três meses a um ano, ou multa, se o fato não constitui elemento de crime mais grave."),

// ===================== PROCESSO PENAL + LEI 9.099 =====================
Q(PPE, "q2-ppe1", "CPP, art. 252, I",
  "O juiz NÃO poderá exercer jurisdição no processo em que tiver funcionado, como defensor, seu",
  ["amigo íntimo.", "parente colateral até o terceiro grau, inclusive.", "parente colateral de quarto grau.", "vizinho.", "ex-colega de faculdade."],
  1, "Cônjuge ou parente até o 3º grau que tenha atuado como defensor, MP, autoridade policial, auxiliar ou perito gera IMPEDIMENTO. Amizade íntima é suspeição (art. 254).",
  "Art. 252. O juiz não poderá exercer jurisdição no processo em que: I - tiver funcionado seu cônjuge ou parente, consanguíneo ou afim, em linha reta ou colateral até o terceiro grau, inclusive, como defensor ou advogado, órgão do Ministério Público, autoridade policial, auxiliar da justiça ou perito;"),

Q(PPE, "q2-ppe2", "CPP, art. 254, I",
  "O juiz dar-se-á por suspeito, e, se não o fizer, poderá ser recusado pelas partes, se for",
  ["parente colateral de quarto grau de uma das partes.", "amigo íntimo ou inimigo capital de qualquer delas.", "morador da mesma comarca.", "professor universitário.", "credor de imposto municipal."],
  1, "Amizade íntima ou inimizade capital: SUSPEIÇÃO.",
  "Art. 254. O juiz dar-se-á por suspeito, e, se não o fizer, poderá ser recusado por qualquer das partes: I - se for amigo íntimo ou inimigo capital de qualquer deles;"),

Q(PPE, "q2-ppe3", "CPP, art. 263",
  "Se o acusado não tiver defensor, o juiz nomeará um defensor dativo. Sobre o tema, é correto afirmar que",
  ["o acusado não poderá substituí-lo.", "o acusado que não for pobre pagará os honorários do defensor dativo, arbitrados pelo juiz.", "os honorários serão sempre pagos pelo Estado.", "o acusado não pode se defender, mesmo tendo habilitação.", "o defensor dativo é sempre o Ministério Público."],
  1, "O acusado pode, a qualquer tempo, nomear outro defensor ou defender-se, se habilitado; se não for pobre, paga os honorários.",
  "Art. 263. Se o acusado não o tiver, ser-lhe-á nomeado defensor pelo juiz, ressalvado o seu direito de, a todo tempo, nomear outro de sua confiança, ou a si mesmo defender-se, caso tenha habilitação. Parágrafo único. O acusado, que não for pobre, será obrigado a pagar os honorários do defensor dativo, arbitrados pelo juiz."),

Q(PPE, "q2-ppe4", "CPP, art. 366",
  "Se o acusado, citado por edital, não comparecer nem constituir advogado,",
  ["o processo seguirá à revelia.", "ficarão suspensos o processo e o curso do prazo prescricional.", "será automaticamente decretada sua prisão preventiva.", "o processo será extinto.", "o juiz nomeará defensor e julgará imediatamente."],
  1, "Suspendem-se processo e prescrição; o juiz PODE produzir provas urgentes e, se for o caso, decretar a preventiva.",
  "Art. 366. Se o acusado, citado por edital, não comparecer, nem constituir advogado, ficarão suspensos o processo e o curso do prazo prescricional, podendo o juiz determinar a produção antecipada das provas consideradas urgentes e, se for o caso, decretar prisão preventiva (...)."),

Q(PPE, "q2-ppe5", "CPP, art. 367",
  "O processo seguirá sem a presença do acusado que,",
  ["citado por edital, não comparecer.", "citado ou intimado pessoalmente, deixar de comparecer sem motivo justificado.", "estiver preso em outra comarca.", "for menor de 21 anos.", "não tiver advogado constituído."],
  1, "Citado/intimado pessoalmente e ausente sem motivo (ou mudou sem avisar o endereço): o processo segue. Citado por edital e ausente: art. 366 (suspensão).",
  "Art. 367. O processo seguirá sem a presença do acusado que, citado ou intimado pessoalmente para qualquer ato, deixar de comparecer sem motivo justificado, ou, no caso de mudança de residência, não comunicar o novo endereço ao juízo."),

Q(PPE, "q2-ppe6", "CPP, art. 401 e 532",
  "O número máximo de testemunhas que cada parte pode arrolar no procedimento ordinário e no sumário é, respectivamente,",
  ["5 e 3.", "8 e 5.", "8 e 8.", "10 e 5.", "5 e 5."],
  1, "Ordinário: 8 (art. 401). Sumário: 5 (art. 532). Júri: 8 na 1ª fase e 5 em plenário.",
  "Art. 401. Na instrução poderão ser inquiridas até 8 (oito) testemunhas arroladas pela acusação e 8 (oito) pela defesa. | Art. 532. Na instrução, poderão ser inquiridas até 5 (cinco) testemunhas arroladas pela acusação e 5 (cinco) pela defesa."),

Q(PPE, "q2-ppe7", "CPP, art. 397",
  "Após a resposta à acusação, o juiz deverá absolver sumariamente o acusado quando verificar",
  ["indícios de autoria.", "a existência manifesta de causa excludente da ilicitude do fato.", "a necessidade de oitiva de testemunhas.", "que o réu é reincidente.", "a inimputabilidade do agente."],
  1, "Absolvição sumária: excludente manifesta de ilicitude; excludente de culpabilidade (salvo inimputabilidade); fato que evidentemente não é crime; extinção da punibilidade.",
  "Art. 397. (...) o juiz deverá absolver sumariamente o acusado quando verificar: I - a existência manifesta de causa excludente da ilicitude do fato; II - a existência manifesta de causa excludente da culpabilidade do agente, salvo inimputabilidade; III - que o fato narrado evidentemente não constitui crime; ou IV - extinta a punibilidade do agente."),

Q(PPE, "q2-ppe8", "CPP, arts. 447 e 463",
  "O Tribunal do Júri é composto por um juiz togado e por 25 jurados sorteados, dos quais",
  ["12 formam o Conselho de Sentença, instalando-se a sessão com 20 presentes.", "7 formam o Conselho de Sentença, instalando-se a sessão com pelo menos 15 presentes.", "5 formam o Conselho de Sentença, instalando-se a sessão com 10 presentes.", "7 formam o Conselho de Sentença, instalando-se a sessão com 25 presentes.", "9 formam o Conselho de Sentença, instalando-se a sessão com 15 presentes."],
  1, "25 sorteados; 7 no Conselho de Sentença; instalação com no mínimo 15.",
  "Art. 447. O Tribunal do Júri é composto por 1 (um) juiz togado, seu presidente e por 25 (vinte e cinco) jurados (...), 7 (sete) dos quais constituirão o Conselho de Sentença (...). | Art. 463. Comparecendo, pelo menos, 15 (quinze) jurados, o juiz presidente declarará instalados os trabalhos (...)."),

Q(PPE, "q2-ppe9", "CPP, art. 609, parágrafo único",
  "Quando não for unânime a decisão de segunda instância desfavorável ao réu, admitem-se",
  ["embargos de declaração, em 2 dias.", "embargos infringentes e de nulidade, em 10 dias.", "recurso em sentido estrito, em 5 dias.", "apelação, em 15 dias.", "revisão criminal imediata."],
  1, "Embargos infringentes e de nulidade: decisão não unânime desfavorável ao réu, em 10 dias da publicação do acórdão.",
  "Parágrafo único. Quando não for unânime a decisão de segunda instância, desfavorável ao réu, admitem-se embargos infringentes e de nulidade, que poderão ser opostos dentro de 10 (dez) dias, a contar da publicação de acórdão (...)."),

Q(PPE, "q2-ppe10", "CPP, art. 600",
  "Assinado o termo de apelação, o prazo para o apelante oferecer razões, em regra, é de",
  ["3 dias.", "5 dias.", "8 dias.", "10 dias.", "15 dias."],
  2, "Razões: 8 dias (3 dias nos processos de contravenção). A interposição é em 5 dias (art. 593).",
  "Art. 600. Assinado o termo de apelação, o apelante e, depois dele, o apelado terão o prazo de oito dias cada um para oferecer razões, salvo nos processos de contravenção, em que o prazo será de três dias."),

Q(PPE, "q2-ppe11", "Lei 9.099/95, art. 76",
  "Na transação penal, sendo a multa a única pena aplicável, o juiz poderá",
  ["dobrá-la.", "reduzi-la até a metade.", "substituí-la por prisão.", "dispensá-la integralmente.", "convertê-la em prestação de serviços obrigatória."],
  1, "Art. 76, § 1º: multa como única pena → o juiz pode reduzi-la até a metade.",
  "Art. 76. (...) o Ministério Público poderá propor a aplicação imediata de pena restritiva de direitos ou multas (...). § 1º Nas hipóteses de ser a pena de multa a única aplicável, o Juiz poderá reduzi-la até a metade."),

Q(PPE, "q2-ppe12", "Lei 9.099/95, art. 69, parágrafo único",
  "Ao autor do fato que, após a lavratura do termo circunstanciado, for imediatamente encaminhado ao Juizado ou assumir o compromisso de a ele comparecer,",
  ["será imposta prisão em flagrante.", "não se imporá prisão em flagrante, nem se exigirá fiança.", "será exigida fiança obrigatória.", "será aplicada pena de multa imediata.", "será decretada a preventiva."],
  1, "Compromisso de comparecer ao Juizado: sem flagrante e sem fiança.",
  "Parágrafo único. Ao autor do fato que, após a lavratura do termo, for imediatamente encaminhado ao juizado ou assumir o compromisso de a ele comparecer, não se imporá prisão em flagrante, nem se exigirá fiança (...)."),

// ===================== PROCESSO CIVIL + LEIS 9.099 E 12.153 =====================
Q(PCI, "q2-pci1", "CPC, art. 145",
  "Há SUSPEIÇÃO do juiz quando ele",
  ["for parte no processo.", "receber presentes de pessoas interessadas na causa.", "tiver atuado como perito no processo.", "for cônjuge do advogado da parte.", "tiver proferido decisão no mesmo processo em outro grau."],
  1, "Receber presentes, aconselhar a parte, ser amigo íntimo ou inimigo, ser credor/devedor: SUSPEIÇÃO. As demais alternativas são IMPEDIMENTO (art. 144).",
  "Art. 145. Há suspeição do juiz: I - amigo íntimo ou inimigo de qualquer das partes ou de seus advogados; II - que receber presentes de pessoas que tiverem interesse na causa antes ou depois de iniciado o processo, que aconselhar alguma das partes acerca do objeto da causa (...)."),

Q(PCI, "q2-pci2", "CPC, art. 155",
  "O escrivão e o oficial de justiça são responsáveis, civil e regressivamente, quando",
  ["o juiz errar na sentença.", "sem justo motivo, se recusarem a cumprir no prazo os atos impostos pela lei ou pelo juiz.", "a parte perder o prazo.", "o processo for anulado por erro do advogado.", "houver greve dos servidores."],
  1, "Responsabilidade civil e regressiva: recusa injustificada a cumprir atos no prazo ou prática de ato nulo com dolo ou culpa.",
  "Art. 155. O escrivão, o chefe de secretaria e o oficial de justiça são responsáveis, civil e regressivamente, quando: I - sem justo motivo, se recusarem a cumprir no prazo os atos impostos pela lei ou pelo juiz a que estão subordinados; II - praticarem ato nulo com dolo ou culpa."),

Q(PCI, "q2-pci3", "CPC, art. 189",
  "Tramitam em segredo de justiça os processos",
  ["de cobrança de dívidas.", "que versem sobre casamento, divórcio, união estável, filiação, alimentos e guarda.", "de execução fiscal.", "contra a Fazenda Pública.", "de despejo."],
  1, "Os atos são públicos, mas há segredo em casos de interesse público, direito de família, intimidade e arbitragem confidencial.",
  "Art. 189. Os atos processuais são públicos, todavia tramitam em segredo de justiça os processos: (...) II - que versem sobre casamento, separação de corpos, divórcio, separação, união estável, filiação, alimentos e guarda de crianças e adolescentes;"),

Q(PCI, "q2-pci4", "CPC, art. 212",
  "Os atos processuais serão realizados em dias úteis,",
  ["das 8 às 18 horas.", "das 6 às 20 horas.", "das 7 às 19 horas.", "a qualquer hora.", "das 9 às 17 horas."],
  1, "Das 6 às 20 horas. Citações, intimações e penhoras podem ocorrer em férias, feriados e fora desse horário, independentemente de autorização judicial (§ 2º).",
  "Art. 212. Os atos processuais serão realizados em dias úteis, das 6 (seis) às 20 (vinte) horas."),

Q(PCI, "q2-pci5", "CPC, art. 220",
  "Suspende-se o curso do prazo processual nos dias compreendidos entre",
  ["1º e 31 de janeiro.", "20 de dezembro e 20 de janeiro, inclusive.", "15 de dezembro e 15 de janeiro.", "24 de dezembro e 6 de janeiro.", "1º de julho e 31 de julho."],
  1, "Recesso forense: 20/12 a 20/1, inclusive. Juízes, MP e servidores continuam trabalhando, mas não há audiências nem sessões.",
  "Art. 220. Suspende-se o curso do prazo processual nos dias compreendidos entre 20 de dezembro e 20 de janeiro, inclusive."),

Q(PCI, "q2-pci6", "CPC, art. 229",
  "Os litisconsortes que tiverem diferentes procuradores, de escritórios de advocacia distintos,",
  ["terão prazo comum simples.", "terão prazos contados em dobro, independentemente de requerimento, salvo em processo eletrônico.", "terão prazo em dobro somente se requererem.", "terão prazo em triplo.", "terão prazo em dobro apenas para recorrer."],
  1, "Prazo em dobro automático; não se aplica aos processos em autos eletrônicos (§ 2º).",
  "Art. 229. Os litisconsortes que tiverem diferentes procuradores, de escritórios de advocacia distintos, terão prazos contados em dobro para todas as suas manifestações, em qualquer juízo ou tribunal, independentemente de requerimento. (...) § 2º Não se aplica o disposto no caput aos processos em autos eletrônicos."),

Q(PCI, "q2-pci7", "CPC, art. 246",
  "Segundo o CPC, a citação será feita preferencialmente",
  ["por oficial de justiça.", "por meio eletrônico, em até 2 dias úteis da decisão que a determinar.", "por edital.", "pelo correio, com AR.", "pelo escrivão, no balcão do cartório."],
  1, "Desde a Lei 14.195/2021, a citação é preferencialmente eletrônica (endereços do banco de dados do Judiciário).",
  "Art. 246. A citação será feita preferencialmente por meio eletrônico, no prazo de até 02 (dois) dias úteis, contado da decisão que a determinar, por meio dos endereços eletrônicos indicados pelo citando no banco de dados do Poder Judiciário (...)."),

Q(PCI, "q2-pci8", "CPC, art. 485, III",
  "O juiz não resolverá o mérito quando o autor, por não promover os atos e diligências que lhe incumbir, abandonar a causa por mais de",
  ["10 dias.", "15 dias.", "30 dias.", "60 dias.", "1 ano."],
  2, "Abandono pelo autor: mais de 30 dias (inciso III). Processo parado por negligência das partes: mais de 1 ano (inciso II).",
  "Art. 485. O juiz não resolverá o mérito quando: (...) II - o processo ficar parado durante mais de 1 (um) ano por negligência das partes; III - por não promover os atos e as diligências que lhe incumbir, o autor abandonar a causa por mais de 30 (trinta) dias;"),

Q(PCI, "q2-pci9", "CPC, art. 1.007, § 1º",
  "São dispensados de preparo, inclusive porte de remessa e de retorno, os recursos interpostos",
  ["por qualquer pessoa física.", "pelo Ministério Público, pela União, pelos Estados e pelos Municípios, entre outros.", "apenas por empresas públicas.", "por advogados particulares.", "somente nos juizados especiais."],
  1, "MP, União, DF, Estados, Municípios, autarquias e beneficiários de isenção legal são dispensados de preparo.",
  "§ 1º São dispensados de preparo, inclusive porte de remessa e de retorno, os recursos interpostos pelo Ministério Público, pela União, pelo Distrito Federal, pelos Estados, pelos Municípios, e respectivas autarquias, e pelos que gozam de isenção legal."),

Q(PCI, "q2-pci10", "CPC, art. 1.015",
  "Cabe agravo de instrumento contra decisão interlocutória que versar sobre",
  ["qualquer matéria, sem exceção.", "tutelas provisórias.", "o indeferimento de prova testemunhal.", "a designação de audiência.", "o despacho que manda citar o réu."],
  1, "O rol do art. 1.015 inclui tutelas provisórias, mérito, gratuidade, desconsideração da personalidade jurídica, entre outros.",
  "Art. 1.015. Cabe agravo de instrumento contra as decisões interlocutórias que versarem sobre: I - tutelas provisórias; II - mérito do processo; III - rejeição da alegação de convenção de arbitragem; IV - incidente de desconsideração da personalidade jurídica; V - rejeição do pedido de gratuidade da justiça (...)."),

Q(PCI, "q2-pci11", "Lei 9.099/95, art. 8º",
  "NÃO pode ser parte no Juizado Especial Cível:",
  ["a pessoa física capaz.", "a microempresa.", "o preso.", "o condomínio, como autor em ações de cobrança.", "o maior de 18 anos."],
  2, "Não podem ser partes: o incapaz, o preso, as pessoas jurídicas de direito público, as empresas públicas da União, a massa falida e o insolvente civil.",
  "Art. 8º Não poderão ser partes, no processo instituído por esta Lei, o incapaz, o preso, as pessoas jurídicas de direito público, as empresas públicas da União, a massa falida e o insolvente civil."),

Q(PCI, "q2-pci12", "Lei 9.099/95, arts. 10 e 12-A",
  "No Juizado Especial Cível,",
  ["admite-se qualquer forma de intervenção de terceiros.", "não se admite intervenção de terceiro nem assistência, mas admite-se o litisconsórcio, e os prazos contam-se em dias úteis.", "não se admite litisconsórcio.", "os prazos são contados em dias corridos.", "a assistência é obrigatória em todas as causas."],
  1, "Sem intervenção de terceiros e sem assistência; litisconsórcio permitido; prazos em dias úteis (art. 12-A).",
  "Art. 10. Não se admitirá, no processo, qualquer forma de intervenção de terceiro nem de assistência. Admitir-se-á o litisconsórcio. | Art. 12-A. Na contagem de prazo em dias (...) computar-se-ão somente os dias úteis."),

// ===================== DIREITO CONSTITUCIONAL =====================
Q(CON, "q2-con1", "CF/88, art. 5º, XLIII",
  "São crimes inafiançáveis e insuscetíveis de graça ou anistia",
  ["o racismo e a ação de grupos armados.", "a tortura, o tráfico ilícito de entorpecentes, o terrorismo e os crimes hediondos.", "todos os crimes contra a administração pública.", "os crimes de menor potencial ofensivo.", "os crimes culposos."],
  1, "Mnemônico 3TH (tortura, tráfico, terrorismo e hediondos): inafiançáveis e insuscetíveis de graça ou anistia. Racismo e ação de grupos armados: inafiançáveis e IMPRESCRITÍVEIS.",
  "XLIII - a lei considerará crimes inafiançáveis e insuscetíveis de graça ou anistia a prática da tortura, o tráfico ilícito de entorpecentes e drogas afins, o terrorismo e os definidos como crimes hediondos (...)."),

Q(CON, "q2-con2", "CF/88, art. 5º, XLII e XLIV",
  "Constituem crimes inafiançáveis e imprescritíveis",
  ["a tortura e o terrorismo.", "o racismo e a ação de grupos armados contra a ordem constitucional e o Estado Democrático.", "os crimes hediondos.", "o tráfico de drogas.", "todos os crimes dolosos contra a vida."],
  1, "Imprescritíveis: racismo e ação de grupos armados (RAÇÃO).",
  "XLII - a prática do racismo constitui crime inafiançável e imprescritível, sujeito à pena de reclusão (...); XLIV - constitui crime inafiançável e imprescritível a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático;"),

Q(CON, "q2-con3", "CF/88, art. 5º, LVIII e LXIII",
  "Segundo a Constituição, o civilmente identificado",
  ["sempre será submetido a identificação criminal.", "não será submetido a identificação criminal, salvo nas hipóteses previstas em lei.", "nunca poderá ser identificado criminalmente.", "deverá ser identificado por ordem do delegado, sem exceção.", "só será identificado se for reincidente."],
  1, "Regra: não há identificação criminal de quem já é civilmente identificado; exceções previstas em lei.",
  "LVIII - o civilmente identificado não será submetido a identificação criminal, salvo nas hipóteses previstas em lei;"),

Q(CON, "q2-con4", "CF/88, art. 5º, LXVII",
  "Segundo a Constituição e a Súmula Vinculante 25, é cabível a prisão civil por dívida",
  ["do depositário infiel.", "do inadimplente voluntário e inescusável de obrigação alimentícia.", "de qualquer devedor de tributos.", "do fiador em contrato de locação.", "do devedor de cheque sem fundos."],
  1, "Somente a do devedor de alimentos. A do depositário infiel é ilícita (Súmula Vinculante 25).",
  "LXVII - não haverá prisão civil por dívida, salvo a do responsável pelo inadimplemento voluntário e inescusável de obrigação alimentícia e a do depositário infiel; | Súmula Vinculante 25: É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito."),

Q(CON, "q2-con5", "CF/88, art. 5º, LXXVII",
  "São gratuitas, na forma da lei, as ações de",
  ["mandado de segurança e ação popular.", "habeas corpus e habeas data.", "mandado de injunção e ação civil pública.", "ação popular, sempre.", "todas as ações cíveis."],
  1, "HC e HD são gratuitos. Na ação popular, o autor fica isento de custas, salvo comprovada má-fé (LXXIII).",
  "LXXVII - são gratuitas as ações de habeas corpus e habeas data, e, na forma da lei, os atos necessários ao exercício da cidadania."),

Q(CON, "q2-con6", "CF/88, art. 12, I",
  "É brasileiro nato o nascido no estrangeiro, de pai ou mãe brasileiro,",
  ["em qualquer caso.", "desde que registrado em repartição brasileira competente ou que venha a residir no Brasil e opte, a qualquer tempo, depois da maioridade, pela nacionalidade brasileira.", "somente se ambos os pais forem brasileiros.", "se residir no Brasil por 15 anos.", "desde que naturalizado."],
  1, "Art. 12, I, c: registro em repartição brasileira OU residência no Brasil + opção após a maioridade.",
  "c) os nascidos no estrangeiro de pai brasileiro ou de mãe brasileira, desde que sejam registrados em repartição brasileira competente ou venham a residir na República Federativa do Brasil e optem, em qualquer tempo, depois de atingida a maioridade, pela nacionalidade brasileira;"),

Q(CON, "q2-con7", "CF/88, art. 13",
  "A língua portuguesa é o idioma oficial da República Federativa do Brasil, e são símbolos da República",
  ["a bandeira, o hino, as armas e o selo nacionais.", "apenas a bandeira e o hino.", "a bandeira, o hino e a Constituição.", "o hino e o brasão dos Estados.", "a bandeira e o selo."],
  0, "Quatro símbolos: bandeira, hino, armas e selo nacionais. Estados, DF e Municípios podem ter símbolos próprios.",
  "Art. 13. A língua portuguesa é o idioma oficial da República Federativa do Brasil. § 1º São símbolos da República Federativa do Brasil a bandeira, o hino, as armas e o selo nacionais."),

Q(CON, "q2-con8", "CF/88, art. 37, § 6º",
  "As pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos respondem pelos danos que seus agentes causarem a terceiros",
  ["somente se houver dolo do agente.", "objetivamente, assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa.", "subjetivamente, dependendo de prova da culpa do Estado.", "apenas quando o agente for servidor efetivo.", "de forma subsidiária ao agente."],
  1, "Responsabilidade objetiva do Estado; regresso contra o agente apenas se houver dolo ou culpa.",
  "§ 6º As pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos responderão pelos danos que seus agentes, nessa qualidade, causarem a terceiros, assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa."),

Q(CON, "q2-con9", "CF/88, art. 37, V",
  "As funções de confiança são exercidas",
  ["por qualquer pessoa, sem vínculo com a Administração.", "exclusivamente por servidores ocupantes de cargo efetivo.", "apenas por pessoas aprovadas em concurso específico.", "somente por cargos em comissão.", "por ocupantes de mandato eletivo."],
  1, "Funções de confiança: exclusivamente servidores efetivos. Cargos em comissão: preenchidos por servidores de carreira nos percentuais mínimos legais; destinam-se a direção, chefia e assessoramento.",
  "V - as funções de confiança, exercidas exclusivamente por servidores ocupantes de cargo efetivo, e os cargos em comissão, a serem preenchidos por servidores de carreira nos casos, condições e percentuais mínimos previstos em lei, destinam-se apenas às atribuições de direção, chefia e assessoramento;"),

Q(CON, "q2-con10", "CF/88, art. 41, § 3º",
  "Extinto o cargo ou declarada a sua desnecessidade, o servidor estável",
  ["será exonerado.", "ficará em disponibilidade, com remuneração proporcional ao tempo de serviço, até seu adequado aproveitamento em outro cargo.", "será aposentado compulsoriamente.", "ficará em disponibilidade sem remuneração.", "será demitido."],
  1, "Disponibilidade remunerada proporcional ao tempo de serviço até o aproveitamento.",
  "§ 3º Extinto o cargo ou declarada a sua desnecessidade, o servidor estável ficará em disponibilidade, com remuneração proporcional ao tempo de serviço, até seu adequado aproveitamento em outro cargo."),

// ===================== ESTATUTO DOS SERVIDORES SP =====================
Q(EST, "q2-est1", "Lei SP 10.261/68, art. 47",
  "São requisitos para a posse em cargo público, entre outros,",
  ["ser brasileiro e ter completado 21 anos.", "ser brasileiro, ter completado 18 anos e estar no gozo dos direitos políticos.", "ter nível superior.", "ser eleitor há pelo menos 5 anos.", "residir no município de lotação."],
  1, "Requisitos: brasileiro, 18 anos, quite com obrigações militares, gozo dos direitos políticos, boa conduta, boa saúde, entre outros.",
  "Artigo 47 - São requisitos para a posse em cargo público: I - ser brasileiro; II - ter completado 18 (dezoito) anos de idade; III - estar em dia com as obrigações militares; IV - estar no gozo dos direitos políticos; V - ter boa conduta; VI - gozar de boa saúde (...)."),

Q(EST, "q2-est2", "Lei SP 10.261/68, art. 241",
  "É dever do funcionário público estadual",
  ["constituir-se procurador de partes perante repartições públicas.", "guardar sigilo sobre os assuntos da repartição e, especialmente, sobre despachos, decisões ou providências.", "aceitar representação de Estado estrangeiro sem autorização.", "referir-se depreciativamente às autoridades.", "retirar documentos da repartição sem permissão."],
  1, "Guardar sigilo é DEVER (art. 241). As demais são PROIBIÇÕES (arts. 242 e 243).",
  "Artigo 241 - São deveres do funcionário: (...) IV - guardar sigilo sobre os assuntos da repartição e, especialmente, sobre despachos, decisões ou providências;"),

Q(EST, "q2-est3", "Lei SP 10.261/68, art. 244",
  "É vedado ao funcionário trabalhar sob as ordens imediatas de parentes até o segundo grau, salvo quando se tratar de função de confiança e livre escolha, não podendo exceder a",
  ["1 o número de auxiliares nessas condições.", "2 o número de auxiliares nessas condições.", "3 o número de auxiliares nessas condições.", "5 o número de auxiliares nessas condições.", "10% do quadro da unidade."],
  1, "No máximo 2 auxiliares nessas condições.",
  "Artigo 244 - É vedado ao funcionário trabalhar sob as ordens imediatas de parentes, até segundo grau, salvo quando se tratar de função de confiança e livre escolha, não podendo exceder a 2 (dois) o número de auxiliares nessas condições."),

Q(EST, "q2-est4", "Lei SP 10.261/68, art. 254",
  "A autoridade que aplicar a pena de suspensão poderá convertê-la em multa, na base de",
  ["25% por dia de vencimento, ficando o funcionário dispensado do serviço.", "50% por dia de vencimento ou remuneração, sendo o funcionário obrigado a permanecer em serviço.", "100% do vencimento.", "10% por dia, com afastamento do servidor.", "30% do vencimento mensal."],
  1, "Conversão em multa de 50% por dia, com permanência obrigatória em serviço.",
  "Artigo 254 (...) § 2º - A autoridade que aplicar a pena de suspensão poderá converter essa penalidade em multa, na base de 50% (cinquenta por cento) por dia de vencimento ou remuneração, sendo o funcionário, nesse caso, obrigado a permanecer em serviço."),

Q(EST, "q2-est5", "Lei SP 10.261/68, art. 257",
  "Será aplicada a pena de demissão a bem do serviço público ao funcionário que",
  ["faltar ao serviço por 10 dias.", "praticar ato definido em lei como de improbidade.", "chegar atrasado reiteradamente.", "for ineficiente no serviço.", "desobedecer a ordem verbal do chefe."],
  1, "Improbidade, receber propina, advocacia administrativa, insubordinação grave, entre outros: demissão A BEM DO SERVIÇO PÚBLICO. Ineficiência e inassiduidade: demissão simples (art. 256).",
  "Artigo 257 - Será aplicada a pena de demissão a bem do serviço público ao funcionário que: (...) XIII - praticar ato definido em lei como de improbidade."),

Q(EST, "q2-est6", "Lei SP 10.261/68, art. 266, I",
  "O afastamento preventivo do servidor, durante sindicância ou processo administrativo, ocorre",
  ["com perda dos vencimentos, por até 60 dias.", "sem prejuízo de vencimentos, por até 180 dias, prorrogáveis uma única vez por igual período.", "sem prejuízo de vencimentos, por tempo indeterminado.", "com redução de metade do vencimento, por 90 dias.", "somente após a condenação."],
  1, "Até 180 dias, prorrogáveis uma vez, sem prejuízo dos vencimentos; o período conta como efetivo exercício.",
  "I - afastamento preventivo do servidor, quando o recomendar a moralidade administrativa ou a apuração do fato, sem prejuízo de vencimentos ou vantagens, até 180 (cento e oitenta) dias, prorrogáveis uma única vez por igual período;"),

Q(EST, "q2-est7", "Lei SP 10.261/68, art. 279",
  "No processo administrativo, havendo denunciante, este prestará declarações",
  ["na presença do acusado, obrigatoriamente.", "entre a data da citação e a do interrogatório, acompanhado o ato pelo advogado do acusado, que não assistirá à inquirição.", "somente após o interrogatório.", "por escrito, sem participação da defesa.", "apenas se o acusado concordar."],
  1, "O acusado não assiste à inquirição do denunciante; o advogado dele acompanha. Antes do interrogatório, o acusado pode ter ciência das declarações.",
  "Artigo 279 - Havendo denunciante, este deverá prestar declarações, no interregno entre a data da citação e a fixada para o interrogatório do acusado (...). § 1º - A oitiva do denunciante deverá ser acompanhada pelo advogado do acusado, próprio ou dativo. § 2º - O acusado não assistirá à inquirição do denunciante (...)."),

Q(EST, "q2-est8", "Lei SP 10.261/68, art. 283",
  "Comparecendo ou não o acusado ao interrogatório, inicia-se o prazo para requerer a produção de provas, ou apresentá-las, de",
  ["3 dias.", "5 dias.", "8 dias.", "10 dias.", "15 dias."],
  0, "3 dias; presidente e acusado arrolam até 5 testemunhas; antecedentes provados só por documentos.",
  "Artigo 283 - Comparecendo ou não o acusado ao interrogatório, inicia-se o prazo de 3 (três) dias para requerer a produção de provas, ou apresentá-las."),

Q(EST, "q2-est9", "Lei SP 10.261/68, arts. 315 e 316",
  "Sobre a revisão de punição disciplinar, é correto afirmar que",
  ["só pode ser pedida em 30 dias.", "pode ser pedida a qualquer tempo, mas a pena imposta não pode ser agravada.", "a simples alegação de injustiça basta para fundamentá-la.", "o ônus da prova é da Administração.", "pode resultar em pena mais grave."],
  1, "A qualquer tempo, com fatos novos ou vícios insanáveis; alegação de injustiça não basta; ônus da prova é do requerente; vedado agravar a pena.",
  "Artigo 315 - Admitir-se-á, a qualquer tempo, a revisão de punição disciplinar de que não caiba mais recurso (...). § 1° - A simples alegação da injustiça da decisão não constitui fundamento do pedido. (...) Artigo 316 - A pena imposta não poderá ser agravada pela revisão."),

Q(EST, "q2-est10", "Lei SP 10.261/68, art. 313",
  "Da decisão tomada pelo Governador do Estado em única instância caberá",
  ["recurso ao Tribunal de Justiça, em 15 dias.", "pedido de reconsideração, que não poderá ser renovado, no prazo de 30 dias.", "recurso hierárquico ao Secretário, em 10 dias.", "pedido de reconsideração renovável, em 60 dias.", "revisão imediata."],
  1, "Reconsideração não renovável, em 30 dias.",
  "Artigo 313 - Caberá pedido de reconsideração, que não poderá ser renovado, de decisão tomada pelo Governador do Estado em única instância, no prazo de 30 (trinta) dias."),

// ===================== NORMAS DA CORREGEDORIA =====================
Q(NSC, "q2-nsc1", "NSCGJ, art. 8º",
  "O Juiz Corregedor Permanente efetuará correição ordinária",
  ["a cada seis meses, sem necessidade de edital.", "uma vez por ano, de preferência em dezembro, anunciada por edital com pelo menos 15 dias de antecedência e comunicada à OAB.", "a cada dois anos, em janeiro.", "mensalmente, sem aviso prévio.", "somente quando houver reclamação."],
  1, "Anual, preferencialmente em dezembro, com edital de 15 dias e comunicação à OAB.",
  "Art. 8º O Juiz Corregedor Permanente efetuará, uma vez por ano, de preferência no mês de dezembro, correição ordinária (...). § 1º A correição ordinária será anunciada por edital, afixado no átrio do fórum e publicado no Diário da Justiça Eletrônico, com pelo menos quinze dias de antecedência, bem como comunicada à Ordem dos Advogados do Brasil (...)."),

Q(NSC, "q2-nsc2", "NSCGJ, art. 6º, § 2º",
  "A correição realizada a qualquer momento, sem prévio anúncio, podendo ser geral ou parcial, é a",
  ["correição ordinária.", "correição extraordinária.", "visita correcional.", "inspeção mensal.", "correição virtual."],
  1, "Extraordinária: excepcional e sem aviso.",
  "§ 2º A correição extraordinária consiste em fiscalização excepcional, realizada a qualquer momento e sem prévio anúncio e poderá ser geral ou parcial, conforme as necessidades e conveniência do serviço correcional."),

Q(NSC, "q2-nsc3", "NSCGJ, art. 15",
  "Nas apurações disciplinares do pessoal das serventias judiciais, a falta que possa determinar as penas de repreensão, suspensão ou multa será apurada por meio de",
  ["processo administrativo.", "sindicância.", "apuração preliminar.", "inquérito civil.", "correição extraordinária."],
  1, "Sindicância: repreensão, suspensão ou multa. Processo administrativo: demissão e cassação. Apuração preliminar: autoria ou infração indefinidas.",
  "II – Sindicância: quando a falta disciplinar, por sua natureza, possa determinar as penas de repreensão, suspensão ou multa;"),

Q(NSC, "q2-nsc4", "NSCGJ, art. 49, § 1º",
  "Sobre a senha de acesso ao sistema informatizado, as Normas de Serviço estabelecem que",
  ["pode ser emprestada a colegas da mesma unidade.", "é vedado ao funcionário cedê-la ou permitir que outrem a use para acessar o sistema.", "pode ser compartilhada com estagiários.", "deve ser anotada no Livro de Visitas.", "é única para todo o cartório."],
  1, "Vedado ceder a senha a qualquer pessoa, funcionário ou não.",
  "§ 1º É vedado ao funcionário credenciado ceder a respectiva senha ou permitir que outrem, funcionário ou não, use-a para acessar indevidamente o sistema informatizado."),

Q(NSC, "q2-nsc5", "NSCGJ, art. 57",
  "Nos ofícios de justiça, o registro e o controle da movimentação dos feitos realizam-se",
  ["em fichários por nome de autor.", "exclusivamente pelo sistema informatizado oficial.", "em fichas individuais de papel.", "em planilhas pessoais dos escreventes.", "no Livro Protocolo."],
  1, "Exclusivamente no sistema oficial; vedados fichário por autor e fichas em papel ou outros sistemas.",
  "Art. 57. Nos ofícios de justiça, o registro e controle da movimentação dos feitos realizar-se-ão exclusivamente pelo sistema informatizado oficial, vedadas a elaboração de fichário por nome de autor e a utilização de fichas individuais materializadas em papel ou constantes de outros sistemas informatizados."),

Q(NSC, "q2-nsc6", "NSCGJ, art. 91",
  "Em caso de erro na numeração das folhas dos autos,",
  ["renumeram-se todas as folhas.", "certifica-se a ocorrência, sendo vedada a renumeração; havendo numeração repetida, acrescenta-se uma letra (188-a, 188-b).", "inutiliza-se o volume.", "comunica-se a Corregedoria Geral.", "aguarda-se determinação do juiz."],
  1, "Vedada a renumeração; certifica-se; repetição: letra do alfabeto.",
  "§ 1º Em caso de erro na numeração, certificar-se-á a ocorrência, sendo vedada a renumeração. § 2º Na hipótese de numeração repetida, acrescentar-se-á apenas uma letra do alfabeto, em sequência (188-a, 188-b, 188-c etc.), certificando-se."),

Q(NSC, "q2-nsc7", "NSCGJ, art. 92",
  "É vedado aos ofícios de justiça receber e juntar petições que não tenham sido encaminhadas pelo setor de protocolo, SALVO",
  ["petições iniciais.", "petições de juntada de procuração ou de substabelecimento apresentadas diretamente pelo interessado.", "recursos de apelação.", "contestações.", "qualquer petição de advogado."],
  1, "Exceções: juntada de procuração/substabelecimento apresentada pelo interessado e decisão fundamentada do juiz dispensando o protocolo.",
  "Art. 92. É vedado aos ofícios de justiça receber e juntar petições que não tenham sido encaminhadas pelo setor de protocolo, salvo: I – quanto às petições de requerimento de juntada de procuração ou de substabelecimento apresentadas pelo interessado diretamente ao ofício de justiça (...); II – quando houver (...) expressa decisão fundamentada do juiz do feito dispensando o protocolo."),

Q(NSC, "q2-nsc8", "NSCGJ, art. 99",
  "Nenhum processo ficará sem andamento no aguardo de diligências por mais de",
  ["10 dias, devendo o juiz ser comunicado imediatamente.", "30 dias; decorrido o prazo, o ofício reiterará a diligência uma única vez e, sem atendimento, abrirá conclusão ao juiz.", "60 dias, quando será arquivado.", "90 dias, sendo reiterada a diligência quantas vezes for preciso.", "1 ano."],
  1, "30 dias; reitera-se UMA vez; depois, conclusão ao juiz.",
  "Art. 99. Nenhum processo permanecerá paralisado em cartório (...) ou ficará sem andamento por mais de 30 (trinta) dias, no aguardo de diligências (...). Parágrafo único. Decorrido o prazo de 30 (trinta) dias, o ofício de justiça reiterará a diligência uma única vez e, em caso de não atendimento, será aberta conclusão ao juiz (...)."),

Q(NSC, "q2-nsc9", "NSCGJ, arts. 160 e 161",
  "Sobre a consulta e a carga de autos, é correto afirmar:",
  ["Estagiários não inscritos na OAB podem consultar autos em segredo de justiça.", "Em processos findos sem segredo de justiça, o advogado pode fazer carga mesmo sem procuração, pelo prazo de 10 dias.", "A carga de autos em andamento é permitida a qualquer pessoa.", "O advogado sem procuração pode retirar autos em segredo de justiça por 1 hora.", "A carga de processos findos é vedada."],
  1, "Findos e sem segredo: carga por advogado sem procuração por 10 dias. Em andamento: só procuradores constituídos (salvo carga rápida para cópia).",
  "Art. 161. A carga de autos judiciais e administrativos em andamento no cartório é reservada unicamente a advogados ou estagiários de Direito regularmente inscritos na OAB, constituídos procuradores de alguma das partes, ressalvado, nos processos findos e que não estejam sujeitos a segredo de justiça, a carga por advogado mesmo sem procuração, pelo prazo de 10 (dez) dias."),

Q(NSC, "q2-nsc10", "NSCGJ, art. 167",
  "Se, intimado pessoalmente, o advogado não devolver os autos no prazo de 3 dias,",
  ["será preso em flagrante.", "perderá o direito à vista fora de cartório e incorrerá em multa correspondente à metade do salário mínimo.", "terá a inscrição na OAB cassada automaticamente.", "pagará multa de dez salários mínimos.", "nada acontece."],
  1, "Perda do direito de vista fora do cartório + multa de meio salário mínimo; comunicação à OAB.",
  "Art. 167. (...) Se intimado pessoalmente o advogado não devolver os autos no prazo de 3 (três) dias, perderá o direito à vista fora de cartório e incorrerá em multa correspondente à metade do salário mínimo."),

// ===================== RES. 850 / RES. 963 / LC 1.111 / RI / LBI =====================
Q(R850, "q2-r850a", "Res. TJSP 850/2021, art. 10, § 5º",
  "Decorridos quantos dias do início do teletrabalho a estação de trabalho do servidor nas dependências do Tribunal poderá ser desativada?",
  ["10 dias.", "15 dias.", "30 dias.", "60 dias.", "90 dias."],
  2, "30 dias (redação dada pela Res. 864/2022).",
  "§5º. Decorridos 30 (trinta) dias, contados do início do teletrabalho, a estação de trabalho do(a) servidor(a) disponível nas dependências do Tribunal de Justiça poderá ser desativada (...).", false),

Q(R850, "q2-r850b", "Res. TJSP 850/2021, art. 12, VII",
  "É dever do servidor em teletrabalho",
  ["contratar auxiliares para cumprir as metas.", "cumprir diretamente as atividades atribuídas, sendo vedada a utilização de terceiros, servidores ou não.", "manter contato livre com as partes, sem ciência do gestor.", "comparecer ao fórum diariamente.", "usar equipamentos fornecidos pelo Tribunal."],
  1, "Vedado usar terceiros; contato com partes e advogados exige ciência do gestor.",
  "VII – cumprir diretamente as atividades atribuídas em regime de teletrabalho, sendo vedada a utilização de terceiros, servidores(as) ou não, para o cumprimento das metas estabelecidas;", false),

Q(R963, "q2-r963a", "Res. TJSP 963/2025, art. 26",
  "No eproc, considera-se tempestivo o ato processual praticado para atender prazo quando",
  ["iniciado até as 24 horas do último dia, ainda que concluído depois.", "transmitido integralmente até as 24 horas do último dia, pelo horário oficial de Brasília.", "protocolado até as 18 horas do último dia.", "o usuário acessou o sistema antes da meia-noite.", "o horário do computador do usuário indicar o último dia."],
  1, "Vale a transmissão integral até as 24h, horário de Brasília; não contam a hora de conexão nem o relógio do equipamento do usuário.",
  "§1º - Quando o ato for praticado para atender prazo processual, será considerado tempestivo aquele transmitido integralmente até as 24 (vinte e quatro) horas do seu último dia. §2º - O eproc considerará o horário oficial de Brasília - DF.", false),

Q(R963, "q2-r963b", "Res. TJSP 963/2025, art. 31",
  "Havendo necessidade de documento comprobatório de evento do processo eletrônico no eproc, a parte deve usar a funcionalidade",
  ["“certidão de objeto e pé” emitida pelo cartório.", "“certidão narratória”, que tem a mesma validade da certidão de objeto e pé.", "“extrato processual”, sem valor de certidão.", "“consulta pública”.", "“relatório de movimentação”, que depende de assinatura do juiz."],
  1, "A certidão narratória do eproc tem a mesma validade da certidão de objeto e pé.",
  "Parágrafo único - Havendo necessidade das partes de documento comprobatório de qualquer evento do processo eletrônico, deverá fazer uso da funcionalidade “certidão narratória”, que terá a mesma validade de certidão de objeto e pé para todos os fins de direito.", false),

Q(LC, "q2-lc1", "LC SP 1.111/2010, art. 22",
  "Poderá participar da Promoção o servidor que tenha cumprido, no último grau do nível em que se encontrar, o interstício mínimo de",
  ["6 meses de efetivo exercício.", "1 ano de efetivo exercício.", "2 anos de efetivo exercício.", "3 anos de efetivo exercício.", "5 anos de efetivo exercício."],
  1, "Interstício de 1 ano (redação da LC 1.217/2013). Questão cobrada no TJ-SP 2019.",
  "Artigo 22 - Poderá participar da Promoção o servidor que tenha cumprido, no último grau do nível em que se encontrar, o interstício mínimo de 1 (um) ano de efetivo exercício."),

Q(LC, "q2-lc2", "LC SP 1.111/2010, art. 37-A",
  "Sobre o Adicional de Qualificação, é correto afirmar que",
  ["incorpora-se aos vencimentos para todos os efeitos.", "não é concedido quando o curso constituir requisito para ingresso no cargo, e não se incorpora para nenhum efeito.", "pode ser acumulado em todos os percentuais.", "é concedido por qualquer curso livre.", "exige pós-graduação de no mínimo 180 horas."],
  1, "Não vale para curso que é requisito do cargo; não se incorpora; lato sensu com no mínimo 360 h; percentuais não se acumulam.",
  "§ 1° - O adicional de que trata este artigo não será concedido quando o curso constituir requisito ou estiver no mesmo nível de escolaridade para ingresso no cargo efetivo ou em comissão. (...) § 4° - O adicional de que trata este artigo não se incorporará para nenhum efeito e sobre ele não incidirá vantagem de qualquer natureza.", false),

Q(RI, "q2-ri1", "RITJSP, art. 15",
  "O Conselho Superior da Magistratura é composto pelo Presidente do Tribunal, que o preside,",
  ["e por doze desembargadores eleitos.", "pelo Vice-Presidente, pelo Corregedor Geral da Justiça, pelo Decano e pelos Presidentes das Seções.", "e pelos 25 membros do Órgão Especial.", "e pelos juízes assessores da Presidência.", "e por todos os desembargadores."],
  1, "Em caso de empate, prevalece o voto do presidente do Conselho.",
  "Art. 15. O Conselho Superior da Magistratura é composto pelo Presidente do Tribunal, que o preside, pelo Vice-Presidente, pelo Corregedor Geral da Justiça, pelo Decano e pelos Presidentes das Seções.", false),

Q(RI, "q2-ri2", "RITJSP, art. 153",
  "O Presidente do Tribunal NÃO tem voto nas sessões a que presidir, salvo",
  ["em matéria administrativa.", "em matéria constitucional, para desempate e quando for relator nato.", "em matéria criminal.", "quando solicitado pelo relator.", "em nenhuma hipótese."],
  1, "Exceções: matéria constitucional, desempate e relatoria nata.",
  "Art. 153. O Presidente do Tribunal não terá voto nas sessões a que presidir, salvo: I - em matéria constitucional; II - para os casos de desempate, em qualquer matéria; III - quando for relator nato de feito de qualquer natureza.", false),

Q(LBI, "q2-lbi1", "Lei 13.146/2015, art. 4º, § 1º",
  "Segundo a Lei Brasileira de Inclusão, considera-se discriminação em razão da deficiência",
  ["apenas a ação intencional de exclusão.", "toda forma de distinção, restrição ou exclusão, por ação ou omissão, incluindo a recusa de adaptações razoáveis e de tecnologias assistivas.", "somente a ofensa verbal.", "a concessão de atendimento prioritário.", "a ação afirmativa."],
  1, "Ação OU omissão; inclui recusa de adaptações razoáveis e tecnologia assistiva.",
  "§ 1º Considera-se discriminação em razão da deficiência toda forma de distinção, restrição ou exclusão, por ação ou omissão, que tenha o propósito ou o efeito de prejudicar, impedir ou anular o reconhecimento ou o exercício dos direitos e das liberdades fundamentais de pessoa com deficiência, incluindo a recusa de adaptações razoáveis e de fornecimento de tecnologias assistivas."),

Q(LBI, "q2-lbi2", "Lei 13.146/2015, art. 13",
  "A pessoa com deficiência somente será atendida sem seu consentimento prévio, livre e esclarecido",
  ["quando o médico entender conveniente.", "em casos de risco de morte e de emergência em saúde.", "quando a família autorizar.", "sempre que estiver sob curatela.", "em qualquer internação hospitalar."],
  1, "Somente risco de morte e emergência em saúde, resguardado o superior interesse.",
  "Art. 13. A pessoa com deficiência somente será atendida sem seu consentimento prévio, livre e esclarecido em casos de risco de morte e de emergência em saúde, resguardado seu superior interesse e adotadas as salvaguardas legais cabíveis."),

// ===================== LÍNGUA PORTUGUESA (temas campeões da VUNESP) =====================
Q(POR, "q2-por1", "Crase",
  "Assinale a alternativa em que o sinal indicativo de crase está correto.",
  ["Daqui à duas semanas sai o resultado.", "O voo partiu à uma hora da madrugada.", "Entregou o documento à cada servidor.", "Refiro-me à esta norma.", "Ficou frente à frente com o réu."],
  1, "“À uma hora” indica hora: há crase. Não há crase antes de numeral em “daqui a”, de “cada”, de “esta” e em palavras repetidas.",
  "Horas determinadas levam crase: à uma hora, às duas horas.", false),

Q(POR, "q2-por2", "Concordância nominal",
  "Assinale a alternativa correta quanto à concordância nominal.",
  ["Seguem anexo as cópias.", "É proibido a entrada de estranhos.", "Ela mesmo assinou o termo.", "Era meio-dia e meia.", "Os candidatos estavam meios nervosos."],
  3, "“Meio-dia e meia (hora)”. Corretos seriam: seguem anexas; é proibida a entrada; ela mesma; meio nervosos.",
  "Meia (= metade da hora) concorda com “hora” subentendida.", false),

Q(POR, "q2-por3", "Pontuação",
  "Em “Os servidores que faltaram serão notificados”, a inserção de vírgulas antes e depois de “que faltaram”",
  ["manteria o sentido original.", "transformaria a oração em explicativa, passando a indicar que todos os servidores faltaram.", "seria obrigatória.", "tornaria a frase agramatical.", "transformaria a oração em adverbial."],
  1, "Sem vírgulas: restritiva (só os que faltaram). Com vírgulas: explicativa (todos faltaram).",
  "Orações adjetivas: restritivas sem vírgula; explicativas entre vírgulas.", false),

Q(POR, "q2-por4", "Regência nominal",
  "Assinale a alternativa que segue a norma-padrão.",
  ["É preferível estudar do que desistir.", "O cargo exige que o servidor seja apto ao trabalho em equipe.", "Ele é capaz em resolver o caso.", "O plano consiste de três etapas.", "Este é o livro que gostei."],
  1, "Apto a/para. Os demais: preferível a; capaz de; consistir em; de que gostei.",
  "Regência nominal: apto a/para; capaz de; preferível a.", false),

Q(POR, "q2-por5", "Colocação pronominal",
  "Assinale a alternativa em que a colocação pronominal está correta.",
  ["Nunca disse-lhe a verdade.", "Encaminharei-lhe o processo amanhã.", "Quem te avisou da audiência?", "Me empresta a caneta, por favor.", "O documento que entregaram-me sumiu."],
  2, "Pronome interrogativo atrai o pronome (próclise). Nos demais: nunca lhe disse; encaminhar-lhe-ei; empresta-me; que me entregaram.",
  "Atraem o pronome: palavras negativas, interrogativas, relativas, indefinidas e conjunções subordinativas.", false),

Q(POR, "q2-por6", "Conjunções",
  "Em “Conquanto fosse tarde, a sessão prosseguiu”, a conjunção destacada estabelece relação de",
  ["causa.", "concessão.", "conclusão.", "proporção.", "finalidade."],
  1, "Conquanto = embora (concessiva).",
  "Concessivas: embora, conquanto, ainda que, mesmo que, posto que, se bem que.", false),

Q(POR, "q2-por7", "Significação de palavras",
  "Em “A testemunha corroborou a versão da defesa”, o verbo destacado pode ser substituído, sem alteração de sentido, por",
  ["contestou.", "confirmou.", "ignorou.", "alterou.", "desmentiu."],
  1, "Corroborar = confirmar, reforçar.",
  "Vocabulário de prova: corroborar, dirimir, elidir, ratificar, retificar.", false),

Q(POR, "q2-por8", "Concordância verbal",
  "Assinale a alternativa correta quanto à concordância verbal.",
  ["Deve haver muitas provas no processo.", "Devem haver muitas provas no processo.", "Haviam muitas provas no processo.", "Fazem cinco anos que ele saiu.", "Existe muitas provas no processo."],
  0, "Haver (existir) é impessoal e transmite a impessoalidade ao auxiliar: deve haver. Existir é pessoal: existem.",
  "Haver e fazer (tempo) impessoais: verbo e auxiliar no singular.", false),

// ===================== INFORMÁTICA =====================
Q(INF, "q2-inf1", "Excel – Referências",
  "No Excel, a célula C1 contém =$A1+B$1. Se essa fórmula for copiada para D2, ela passará a ser",
  ["=$A1+B$1", "=$A2+C$1", "=B2+C$1", "=$A2+B$2", "=$A$2+C$1"],
  1, "$A1: coluna fixa, linha muda (1→2). B$1: linha fixa, coluna muda (B→C). Resultado: =$A2+C$1.",
  "O cifrão fixa o que vem logo depois dele (coluna ou linha).", false),

Q(INF, "q2-inf2", "Excel – Funções",
  "Considerando A1 = 10, A2 = 20 e A3 = 30, o resultado de =SOMA(A1;A3) é",
  ["60", "40", "30", "20", "10"],
  1, "Ponto e vírgula separa células: soma A1 e A3 (10 + 30 = 40). =SOMA(A1:A3) daria 60.",
  "“:” = intervalo; “;” = células separadas.", false),

Q(INF, "q2-inf3", "Word – Atalhos (português)",
  "No Microsoft Word em português, os atalhos para salvar, negrito e selecionar tudo são, respectivamente,",
  ["Ctrl + S, Ctrl + B e Ctrl + A.", "Ctrl + B, Ctrl + N e Ctrl + T.", "Ctrl + B, Ctrl + B e Ctrl + T.", "Ctrl + S, Ctrl + N e Ctrl + T.", "Ctrl + G, Ctrl + N e Ctrl + A."],
  1, "Word em português: Ctrl + B salvar, Ctrl + N negrito, Ctrl + T selecionar tudo.",
  "Ctrl + S é sublinhado; Ctrl + A é abrir.", false),

Q(INF, "q2-inf4", "Correio eletrônico",
  "Um servidor envia um e-mail com o colega A no campo Para, B em Cc e C em Cco. É correto afirmar que",
  ["A vê que C recebeu a mensagem.", "B vê que A e C receberam a mensagem.", "C vê A e B, mas A e B não sabem que C recebeu.", "ninguém vê os demais destinatários.", "se A usar “Responder a todos”, C receberá a resposta."],
  2, "Cco é oculto para os demais; o destinatário em Cco vê os de Para e Cc.",
  "Para e Cc: visíveis. Cco: oculto.", false),

Q(INF, "q2-inf5", "Windows 10",
  "No Windows 10, ao arrastar um arquivo para uma pasta localizada em OUTRA unidade de disco, sem pressionar teclas, o arquivo será",
  ["movido.", "copiado.", "excluído.", "renomeado.", "transformado em atalho."],
  1, "Unidade diferente: copia. Mesma unidade: move. Ctrl copia, Shift move, Alt cria atalho.",
  "Comportamento padrão do arrastar no Explorador de Arquivos.", false),

Q(INF, "q2-inf6", "Segurança da informação",
  "O código malicioso que se propaga automaticamente pelas redes, explorando vulnerabilidades, sem precisar de um arquivo hospedeiro, é o",
  ["vírus.", "worm.", "cavalo de troia.", "keylogger.", "cookie."],
  1, "Worm: autopropagação. Vírus: precisa de hospedeiro e de execução.",
  "Tipos de malware: vírus, worm, trojan, spyware, ransomware.", false),

Q(INF, "q2-inf7", "Backup",
  "O tipo de backup que copia todos os arquivos alterados desde o último backup COMPLETO é o",
  ["incremental.", "diferencial.", "normal.", "espelhado.", "manual."],
  1, "Diferencial: desde o último completo. Incremental: desde o último backup de qualquer tipo.",
  "Completo, incremental e diferencial.", false),

Q(INF, "q2-inf8", "Navegadores",
  "A navegação anônima (InPrivate) dos navegadores",
  ["impede que o provedor de internet veja os sites acessados.", "não salva, no computador, histórico, cookies e dados de formulários da sessão.", "protege contra vírus.", "torna a conexão criptografada.", "apaga os downloads ao fechar a janela."],
  1, "Ela só evita que dados fiquem salvos NO DISPOSITIVO; provedor e rede continuam vendo o acesso; downloads permanecem.",
  "Chrome/Edge: Ctrl + Shift + N; Firefox: Ctrl + Shift + P.", false);

// Mesma distribuição equilibrada do gabarito usada no lote 1
for (let i = inicio; i < QUESTOES.length; i++) {
    const q = QUESTOES[i];
    const alvo = (i * 3 + q.id.length) % 5;
    const certa = q.alt[q.resp];
    const outras = q.alt.filter((_, k) => k !== q.resp);
    outras.splice(alvo, 0, certa);
    q.alt = outras;
    q.resp = alvo;
}
})();
