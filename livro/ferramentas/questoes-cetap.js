// Acrescenta "Questões da banca (CETAP)" nos capítulos: questões reais de provas anteriores,
// com o gabarito OFICIAL DEFINITIVO e link para a prova e o gabarito.
// Uso: node livro/ferramentas/questoes-cetap.js   (não duplica: só acrescenta as questões que ainda não estão no capítulo)
// As novas questões entram DEPOIS das questões de fixação, para não mudar a numeração já gravada.
const fs = require("fs"), path = require("path");
const RAIZ = path.join(__dirname, "..", "..");
const EG = "https://www.estudegratis.com.br";

const PROVAS = {
  "detran-analista": {
    nome: "CETAP · 2010 · DETRAN-RR · Analista Técnico I – Analista de Sistemas",
    ref: "FUNDAÇÃO CETAP. *Concurso Público nº 001/2009 do DETRAN-RR*: prova objetiva do cargo Analista Técnico I – Analista de Sistemas, aplicada em 11 abr. 2010, e gabarito oficial definitivo",
    pagina: EG + "/provas/cetap-2010-detran-rr-analista-de-sistemas",
    prova: EG + "/images/provas/15539-cetap-2010-detran-rr-analista-de-sistemas-prova.pdf",
    gabarito: EG + "/images/provas/15539-cetap-2010-detran-rr-analista-de-sistemas-gabarito.pdf"
  },
  "detran-tecnico": {
    nome: "CETAP · 2010 · DETRAN-RR · Técnico em Rede de Computador",
    ref: "FUNDAÇÃO CETAP. *Concurso Público nº 001/2009 do DETRAN-RR*: prova objetiva do cargo Técnico em Atividade Administrativa – Técnico em Rede de Computador, aplicada em 11 abr. 2010, e gabarito oficial definitivo",
    pagina: EG + "/provas/cetap-2010-detran-rr-tecnico-em-informatica",
    prova: EG + "/images/provas/15587-cetap-2010-detran-rr-tecnico-em-informatica-prova.pdf",
    gabarito: EG + "/images/provas/15587-cetap-2010-detran-rr-tecnico-em-informatica-gabarito.pdf"
  },
  "alrr-tecnico": {
    nome: "CETAP · 2010 · Assembleia Legislativa de Roraima · Técnico em Informática",
    ref: "FUNDAÇÃO CETAP. *Concurso Público nº 001/2009 da Assembleia Legislativa do Estado de Roraima*: prova objetiva do cargo Técnico em Informática, aplicada em 4 abr. 2010, e gabarito oficial definitivo",
    pagina: EG + "/provas/cetap-2010-al-rr-tecnico-em-informatica",
    prova: EG + "/images/provas/15602-cetap-2010-al-rr-tecnico-em-informatica-prova.pdf",
    gabarito: EG + "/images/provas/15602-cetap-2010-al-rr-tecnico-em-informatica-gabarito.pdf"
  },
  "alrr-assistente": {
    nome: "CETAP · 2010 · Assembleia Legislativa de Roraima · Assistente Legislativo",
    ref: "FUNDAÇÃO CETAP. *Concurso Público nº 001/2009 da Assembleia Legislativa do Estado de Roraima*: prova objetiva do cargo Assistente Legislativo, aplicada em 4 abr. 2010, e gabarito oficial definitivo",
    pagina: EG + "/provas/cetap-2010-al-rr-assistente-legislativo",
    prova: EG + "/images/provas/15595-cetap-2010-al-rr-assistente-legislativo-prova.pdf",
    gabarito: EG + "/images/provas/15595-cetap-2010-al-rr-assistente-legislativo-gabarito.pdf"
  },
  "alrr-revisor": {
    nome: "CETAP · 2010 · Assembleia Legislativa de Roraima · Revisor de Texto",
    ref: "FUNDAÇÃO CETAP. *Concurso Público nº 001/2009 da Assembleia Legislativa do Estado de Roraima*: prova objetiva do cargo Revisor de Texto, aplicada em 4 abr. 2010, e gabarito oficial definitivo",
    pagina: EG + "/provas/cetap-2010-al-rr-revisor-de-texto",
    prova: EG + "/images/provas/15546-cetap-2010-al-rr-revisor-de-texto-prova.pdf",
    gabarito: EG + "/images/provas/15546-cetap-2010-al-rr-revisor-de-texto-gabarito.pdf"
  },
  "alrr-publicitario": {
    nome: "CETAP · 2010 · Assembleia Legislativa de Roraima · Publicitário",
    ref: "FUNDAÇÃO CETAP. *Concurso Público nº 001/2009 da Assembleia Legislativa do Estado de Roraima*: prova objetiva do cargo Publicitário, aplicada em 4 abr. 2010, e gabarito oficial definitivo",
    pagina: EG + "/provas/cetap-2010-al-rr-publicitario",
    prova: EG + "/images/provas/15564-cetap-2010-al-rr-publicitario-prova.pdf",
    gabarito: EG + "/images/provas/15564-cetap-2010-al-rr-publicitario-gabarito.pdf"
  },
  "detran-programador": {
    nome: "CETAP · 2010 · DETRAN-RR · Programador de Computador",
    ref: "FUNDAÇÃO CETAP. *Concurso Público nº 001/2009 do DETRAN-RR*: prova objetiva do cargo Técnico em Atividade Administrativa – Programador de Computador, aplicada em 11 abr. 2010, e gabarito oficial definitivo",
    pagina: EG + "/provas/cetap-2010-detran-rr-programador-de-computador",
    prova: EG + "/images/provas/15588-cetap-2010-detran-rr-programador-de-computador-prova.pdf",
    gabarito: EG + "/images/provas/15588-cetap-2010-detran-rr-programador-de-computador-gabarito.pdf"
  }
};

// [prova, número da questão na prova, enunciado, alternativas A–E, gabarito oficial, explicação]
const Q = {
  "01-hardware-software-processamento.md": [
    ["detran-analista", 32, "Software embarcado é um tipo de software:",
      ["destinado a funcionar dentro de uma máquina que não é um computador de uso geral e normalmente com um destino muito específico.",
       "destinado a funcionar somente dentro de vídeo games modernos, como o Xbox e PS3.",
       "que é sinônimo de software ERP.",
       "bastante usado em sites de comércio eletrônico.",
       "que é desenvolvido somente em linguagens de programação interpretadas como Java e PHP."],
      "A", "Sistema embarcado = computador **dentro de outro equipamento** (micro-ondas, carro, roteador), feito para **uma tarefa específica**. O \"somente\" da B e da E já denuncia o erro."]
  ],
  "02-compreensao-interpretacao-textos.md": [
    ["alrr-revisor", 32, "> **TEXTO** (trecho de uma circular de 1794 aos funcionários públicos da França)\n>\n> O funcionário público, acima de tudo, deve desfazer-se da roupagem antiga e abandonar a polidez forçada, tão inconsistente com a postura dos homens livres, e que é uma relíquia do tempo em que alguns homens eram ministros e outros, seus escravos. Sabemos que as velhas formas de governo já desapareceram: devemos até esquecer como eram. As maneiras simples e naturais devem substituir a dignidade artificial que frequentemente constituía a única virtude de um chefe de departamento ou outro funcionário graduado. Decência e genuína seriedade são os requisitos exigidos de homens dedicados à coisa pública. A qualidade essencial do Homem na Natureza consiste em ficar de pé. O jargão ininteligível dos velhos ministérios deve dar lugar ao estilo claro, conciso, isento de expressões de servilismo, de formas obsequiosas, indiretas e pedantes, ou de qualquer insinuação no sentido de que existe autoridade superior à razão e à ordem estabelecida pelas leis - um estilo que adote atitude natural em relação às autoridades subalternas. Não deve haver frases convencionais, nem desperdício de palavras.\n>\n> *Apud* LASSWELL, Harold e KAPLAN, Abraham. *A linguagem da política*. Brasília: EUB, 1979. p. 43.\n\nAo dizer que \"A qualidade essencial do Homem na Natureza consiste em ficar de pé\", estabeleceu-se uma argumentação oposta à (a):",
      ["decência.", "obsequiosa.", "coisa pública.", "servilismo.", "conciso."],
      "D", "**Ficar de pé** é a imagem de quem não se curva. O oposto disso, no texto, é o **servilismo** (agir como servo). A questão pede para ligar a imagem à ideia que ela combate: é interpretação, não gramática."],
    ["alrr-revisor", 37, "(Mesmo texto da questão anterior.)\n\n\"As maneira simples e naturais devem substituir a dignidade artificial que frequentemente constituía a única virtude de um chefe de departamento ou outro funcionário graduado\". A análise do fragmento leva-se a afirmar:",
      ["que a forma verbal \"devem substituir\" subentende que houve outra forma de governo.", "que o vocábulo \"única\" pressupõe exclusão de outras qualidades.", "que a oração adjetiva presente não serve de pressuposto negativo.", "que o advérbio \"frequentemente\" atenua a visão negativa dos funcionários graduados.", "que se subentende haver vários tipos de funcionários graduados."],
      "B", "É uma questão de **pressuposto**: dizer que a dignidade artificial era a **única** virtude pressupõe que eles **não tinham outras**. A palavra \"única\" é o marcador."],
    ["alrr-revisor", 44, "Leia o fragmento e assinale a alternativa que NÃO está coerente com o conteúdo textual\n\n> \"Embora existam políticos competentes e honestos, preocupados com as legítimas causas populares, os jornais, na semana passada, noticiaram casos de corrupção comprovada, praticados por um político eleito pelo povo. Isso demonstra que o povo não sabe escolher seus governantes.\" (Para Entender o Texto, 269)",
      ["A conclusão do texto é incoerente com os pressupostos nele colocados.", "Casos de corrupção comprovados se referem a um político que foi eleito pelo povo.", "Entre os governantes se incluem também políticos honestos.", "Conclui-se que o povo sabe escolher seus governantes.", "O povo escolhe seus governantes e todos são corruptos."],
      "E", "O próprio texto diz que **existem políticos honestos**; \"todos são corruptos\" contradiz isso. É a **extrapolação**: generalizar além do que foi dito."]
  ],
  "03-sistemas-de-numeracao.md": [
    ["detran-tecnico", 45, "Dadas as afirmativas sobre sistemas de numeração e codificação, analise-as e assinale a alternativa CORRETA:\n\nI- O conjunto de símbolos do sistema hexadecimal é formado pela seqüência de números S = {0, 1, 2, 3, ..., 12, 13, 14, 15};\n\nII- Um bit é um dígito que pode ser representado pelos símbolos do sistema decimal S = {0, 1, 2, ..., 7, 8, 9};\n\nIII- Para converter um número hexadecimal para binário, deve-se simplesmente converter cada dígito hexadecimal ao seu correspondente binário. Exemplo: o número hexadecimal 92 é igual ao número binário 10010010;\n\nIV- O \"Complemento de Um\" do número binário de 5 dígitos 00110 (6 na base decimal) é 11001 (25 na base decimal);\n\nV- O \"Complemento de Dois\" do número binário de 5 dígitos 00110 (6 na base decimal) é 11010 (-6 na base decimal).",
      ["Todas as afirmativas estão corretas.", "Apenas as afirmativas I, II estão corretas.", "Apenas as afirmativas I e III estão corretas.", "Apenas as afirmativas III, IV e V estão corretas.", "Nenhuma das afirmativas está correta."],
      "D", "I está errada: os símbolos do hexadecimal são **0–9 e A–F** (não \"12, 13…\"). II está errada: bit é **0 ou 1**. III está certa: 9 = 1001 e 2 = 0010. IV e V tratam de **complemento**: complemento de um = **inverter todos os bits** (00110 → 11001); complemento de dois = complemento de um **+ 1** (11001 + 1 = 11010), que representa o negativo (−6)."],
    ["detran-programador", 31, "O sistema de numeração dominante nos sistemas computacionais usa a representação numérica em base 2 (dois). Na nossa sociedade utilizamos com muita freqüência a representação decimal. Com relação aos sistemas de numeração em sistemas digitais, analise as afirmativas a seguir a assinale a alternativa CORRETA.\n\nI - O número decimal 49 pode ser representado, usando 8 dígitos e base 2, pelo número 00110001;\n\nII - No sistema binário não é possível a representação e a aritmética de ponto flutuante;\n\nIII - Nos computadores que operam no sistema binário, as operações aritméticas de inteiros são realizadas usando a representação decimal;\n\nIV - Um dos métodos para representar inteiros negativos em sistemas digitais usa o bit mais significativo do número para representar o sinal (positivo ou negativo);\n\nV - Um número representado em uma base não pode ser convertido para uma representação em base diferente.",
      ["Somente a afirmativa I está correta.", "Somente as afirmativas I e IV estão corretas.", "Somente as afirmativas I, II e IV estão corretas.", "Somente as afirmativas II, III e IV estão corretas.", "Todas as afirmativas estão corretas."],
      "B", "I: 49 = 32 + 16 + 1 = **00110001**. IV: é a representação **sinal e magnitude** (bit da esquerda = sinal). II, III e V são falsas: o binário representa ponto flutuante, o computador faz as contas **em binário** e qualquer base pode ser convertida em outra."]
  ],
  "05-arquitetura-processador-memoria-barramento.md": [
    ["detran-tecnico", 43, "Dadas as afirmativas sobre a Arquitetura de Computadores proposta por Von Neumann, analise-as e assinale a alternativa CORRETA.\n\nI- Uma CPU (Central Process Unit) possui 4 componentes principais: Um conjunto de registradores, a Unidade Lógica e Aritmética (ALU - Arithmetic Logic Unit), a Unidade de Controle (CU - Control Unit) e a Memória Principal;\n\nII- A CPU de um computador é responsável pelo processamento e execução dos programas armazenados na Memória Principal;\n\nIII- A Unidade Lógica e Aritmética é um circuito digital que realiza operações lógicas e aritméticas em base binária;\n\nIV- O Contador de Programa (PC - Program Counter) é um registrador que armazena o endereço de memória da próxima instrução a ser executada pela CPU;\n\nV- Os dados e as instruções são armazenados como um número binário em uma única memória de leitura e escrita.",
      ["Todas as afirmativas estão corretas.", "Apenas as afirmativas II e III estão corretas.", "Apenas as afirmativas I, III e IV estão corretas.", "Apenas as afirmativas I e IV estão corretas.", "Apenas as afirmativas II, III, IV e V estão corretas."],
      "E", "Só a I está errada: a **memória principal não faz parte da CPU**. A CPU tem registradores, ULA e unidade de controle. A V é a ideia central de Von Neumann: dados e instruções **na mesma memória**."],
    ["detran-tecnico", 31, "Sobre arquiteturas CISC e RISC, analise as afirmativas seguintes e assinale a alternativa CORRETA.\n\nI- A arquitetura CISC (Complex Instruction Set Computers) é utilizada em processadores que suportam a execução de diversas instruções complexas;\n\nII- A arquitetura CISC (Complex Instruction Set Computers) implementa micro-código para decodificar e executar cada instrução nos processadores que a utilizam;\n\nIII- A arquitetura RISC (Reduced Instruction Set Computers) é utilizada em processadores que suportam um conjunto de instruções simples e reduzidas;\n\nIV- Dado que as arquiteturas CISC e RISC possuem diferentes formas de processamento de instruções, não é possível agregar as duas tecnologias em um mesmo processador.",
      ["Apenas a afirmativa I está correta.", "Apenas as afirmativas I e III estão corretas.", "Apenas as afirmativas I, III e IV estão corretas.", "Apenas as afirmativas I, II e III estão corretas.", "Todas as afirmativas estão corretas."],
      "D", "A IV está errada: os processadores x86 atuais são **híbridos**, CISC por fora e com núcleo do tipo RISC por dentro (traduzem instruções complexas em micro-operações simples)."],
    ["detran-tecnico", 44, "Sobre processadores, analise as afirmativas seguintes e assinale a alternativa CORRETA.\n\nI- Processadores dual-core são processadores que contam com dois núcleos distintos no mesmo circuito integrado, como se houvesse dois processadores dentro de um. Dessa forma um processador pode trabalhar com dois processos distintos de uma vez;\n\nII- A quantidade de bits de um processador é uma característica importante que promove grande influência no desempenho desse circuito;\n\nIII- Um Sistema Operacional de 32 bits possui desempenho melhor rodando em um computador com processador de 64 bits do que em um computador com processador de 32 bits;\n\nIV- O valor máximo de memória que um processador consegue acessar é igual a 2 elevado ao número de bits do barramento de endereços.",
      ["Apenas as afirmativas I e II estão corretas.", "Apenas as afirmativas I, II e IV estão corretas.", "Apenas as afirmativas II, III e IV estão corretas.", "Apenas as afirmativas I e IV estão corretas.", "Todas as afirmativas estão corretas."],
      "B", "A III está errada: um sistema de 32 bits **não aproveita** os recursos de 64 bits, então não fica \"melhor\" por isso. A IV é a regra **2ⁿ** do barramento de endereços."],
    ["alrr-tecnico", 49, "Assinale a alternativa ERRADA sobre as arquiteturas e processadores de 16, 32 e 64 bits.",
      ["Uma arquitetura de 64 bits pode ser utilizada somente em processadores Intel.", "Um processador de 32 bits pode processar 32 bits de dados por vez.", "A família de micro processadores x86 da Intel pode ter arquiteturas de 16 e 32 bits.", "Um processador x86 da Intel pode utilizar o conjunto de instruções de computador CISC.", "Existem diferentes sistemas operacionais desenvolvidos para 32 e 64 bits."],
      "A", "O \"somente\" denuncia: AMD, ARM e outros fabricantes também têm processadores de 64 bits. A D confirma o que você estudou: **x86 é CISC**."],
    ["alrr-tecnico", 50, "Com relação aos barramentos, assinale a alternativa ERRADA:",
      ["Existem barramentos síncronos e assíncronos.", "A arbitragem do barramento é necessária para resolver conflitos na utilização do barramento.", "O \"clock\" atua como uma referência de tempo para todas os sinais de um barramento síncrono.", "O barramento de controle transporta voltagem às unidades do sistema.", "USB, PCI e AGP são exemplos de barramentos."],
      "D", "O barramento de **controle** leva **sinais de comando** (leitura, escrita, interrupção, clock), e não energia. Quem leva a energia são as **linhas de alimentação**."]
  ],
  "07-armazenamento-interfaces.md": [
    ["detran-analista", 31, "Universal Serial Bus (USB) permite a conexão de periféricos sem a necessidade de desligar o computador. Sobre o USB 2.0, podemos afirmar que:",
      ["permite a conexão máxima de até 32 dispositivos.", "permite conexão com velocidade de 480 Mbps.", "não usa o modo de transmissão serial.", "somente pode ser usado em computadores com sistema operacional Windows.", "USB é sinônimo de Pen Drive."],
      "B", "USB 2.0 = **480 Mb/s** (Hi-Speed). O USB aceita até **127** dispositivos, é **serial** (o S de USB) e não depende de sistema operacional."],
    ["detran-tecnico", 33, "Dadas as seguintes afirmativas sobre Barramentos de E/S (Entrada e Saída) e Sistemas de Entrada e Saída, analise-as e assinale a alternativa CORRETA.\n\nI- O Barramento E/S é um conjunto de linhas de transmissão de sinais que conecta dispositivos periféricos a CPU (Central Process Unit) do computador;\n\nII- O Barramento USB (Universal Serial Bus) é um tipo de barramento E/S que utiliza o padrão PnP(Plug and Play), de modo que o Sistema Operacional reconheça e disponibilize imediatamente o dispositivo a ser instalado;\n\nIII- Mouse, Teclado e WebCam são alguns dispositivos de entrada que utilizam o barramento E/S;\n\nIV- Impressora e Auto-falantes são alguns dispositivos de saída que utilizam o barramento E/S.",
      ["Apenas as afirmativas I, III e IV estão corretas.", "Apenas as afirmativas III e IV estão corretas.", "Apenas as afirmativas II, III e IV estão corretas.", "Apenas as afirmativas I, II e IV estão corretas.", "Todas as afirmativas estão corretas."],
      "E", "Todas certas. Atenção à II: **plug and play** é o sistema reconhecer e configurar o dispositivo sozinho, sem reiniciar."],
    ["alrr-tecnico", 33, "Sobre as controladoras de disco rígido disponíveis no mercado, marque a alternativa ERRADA.",
      ["SCSI, SATA e IDE são as mais utilizadas no mercado.", "O conector Serial ATA é mais estreito do que o paralelo IDE.", "Para computadores mais antigos sem conectores SATA na placa mãe, é possível instalar uma controladora SATA através dos slots PCI.", "As controladoras de disco também são utilizadas para conectar os drives de CD e DVD.", "Os discos rígidos externos são conectados através de controladoras IDE."],
      "E", "Discos externos usam **USB** (ou eSATA/Thunderbolt), não IDE. A B confirma: SATA é **serial**, com cabo fino; o IDE era **paralelo**, com cabo largo (flat)."]
  ],
  "08-ortografia-acentuacao.md": [
    ["detran-analista", 6, "Assinale o excerto em que a acentuação é justificada pela concordância verbal:",
      ["\"...os bichos têm sentimentos.\"", "\"...nem deixa ninguém pegá-lo.\"", "\"É um adepto do alto astral!\"", "\"Tenho três cachorros...\"", "\"Há muito tempo estive no México...\""],
      "A", "**têm** leva o acento circunflexo porque é **plural** (concorda com \"os bichos\"). No singular: o bicho **tem**. As outras são regras de oxítona (pegá, três), monossílabo tônico (é, há) e proparoxítona (México)."],
    ["alrr-revisor", 34, "Considere a palavra \"relíquia\". A mesma razão gramatical da palavra \"relíquia\" justifica o acento gráfico em:",
      ["funcionário.", "público.", "até.", "constituía.", "única."],
      "A", "**Relíquia** e **funcionário** são **paroxítonas terminadas em ditongo** (re-lí-**quia**, fun-cio-ná-**rio**). Público e única são proparoxítonas; até é oxítona; constituía é hiato."]
  ],
  "09-protecao-fisica-perifericos.md": [
    ["alrr-tecnico", 35, "A instalação dos periféricos mais simples e mais presentes em computadores de mesa, como o teclado e o mouse, precisa de algumas configurações básicas. Sobre o assunto, selecione a alternativa ERRADA.",
      ["Quando as teclas pressionadas no teclado geram no computador caracteres diferentes aos esperados, é preciso configurar o teclado na BIOS.", "A configuração do idioma do teclado é feita na opção Teclado do Painel de Controle.", "A maioria dos mouses modernos pode ser instalada na porta USB.", "O teclado pode ser instalado nas portas serial, PS2 ou USB.", "O teclado e o mouse podem ser de diferentes marcas."],
      "A", "Tecla que sai trocada (ex.: o Ç não aparece) é **layout/idioma** errado (ABNT2 x US), que se ajusta **no sistema operacional**, não na BIOS."],
    ["alrr-tecnico", 40, "Sobre a instalação de impressoras, selecione a alternativa INCORRETA.",
      ["Algumas impressoras podem ser conectadas diretamente à rede através de um cabo de rede.", "A configuração de uma impressora é feita na opção Impressoras do Painel de Controle.", "A fila de impressões é uma lista dos documentos enviados a serem impressos que ainda não concluíram ou encontram-se com erro.", "A página de teste é utilizada para testar se a impressora encontra-se corretamente configurada.", "Somente se pode configurar uma impressora por computador."],
      "E", "Um computador pode ter **várias impressoras** instaladas, uma delas marcada como padrão. Mais um \"somente\" errado."]
  ],
  "10-etica-moral-setor-publico.md": [
    ["alrr-assistente", 40, "Qualquer dos Poderes dos Estados obedecerá aos seguintes princípios, EXCETO:",
      ["de legalidade.", "de impessoalidade.", "de moralidade.", "de obscuridade.", "de eficiência."],
      "D", "**LIMPE** (CF, art. 37): legalidade, impessoalidade, moralidade, **publicidade** e eficiência. \"Obscuridade\" é o contrário de publicidade."],
    ["alrr-publicitario", 41, "Ética é:",
      ["algo utópico que apenas sedimenta o que se deseja.", "uma filosofia moderna que surgiu após a Segunda Guerra Mundial.", "um sistema de conhecimentos racionais e objetivos a respeito do comportamento humano.", "um conjunto assistemático de bom comportamento.", "jamais mentir, apenas."],
      "C", "Ética é **reflexão sistemática** (teórica, racional) sobre a conduta humana. \"Conjunto de bom comportamento\" descreve a **moral**, e \"assistemático\" está errado."]
  ]
};

for (const [arq, lista] of Object.entries(Q)) {
  const f = path.join(RAIZ, "capitulos", arq);
  let md = fs.readFileSync(f, "utf8").replace(/\r\n/g, "\n");
  // questões já presentes (pelo cabeçalho "nome · Questão NN")
  const novas = lista.filter(([p, n]) => !md.includes(`**${PROVAS[p].nome} · Questão ${String(n).padStart(2, "0")}**`));
  if (!novas.length) { console.log("nada novo:", arq); continue; }
  const iRef = md.indexOf("## Referências");
  if (iRef < 0) throw new Error("sem Referências: " + arq);
  const refs = md.slice(iRef).split("\n").filter(l => /^\d+\.\s/.test(l));
  let prox = refs.length + 1;
  const numDe = {}, novasRefs = [];
  novas.forEach(([p]) => {
    if (numDe[p]) return;
    const i = refs.findIndex(l => l.includes(PROVAS[p].prova));
    if (i >= 0) numDe[p] = i + 1;
    else { numDe[p] = prox++; const P = PROVAS[p]; novasRefs.push(`${numDe[p]}. ${P.ref}. Prova: <${P.prova}>. Gabarito: <${P.gabarito}>. Acesso em: 11 out. 2026.`); }
  });
  const blocos = novas.map(([p, n, en, alts, g, ex]) => {
    const P = PROVAS[p];
    return `::: questao\n**${P.nome} · Questão ${String(n).padStart(2, "0")}**[^${numDe[p]}] · [ver prova](${P.prova}) · [gabarito](${P.gabarito})\n\n${en}\n${alts.map((a, i) => "ABCDE"[i] + ") " + a).join("\n")}\n= ${g} | Gabarito **oficial definitivo** da CETAP. ${ex}\n:::`;
  }).join("\n\n");
  const temSecao = md.includes("## Questões da banca");
  const inserir = temSecao ? blocos + "\n\n" : `## Questões da banca (CETAP) {-}\n\nQuestões **reais** de provas anteriores da Fundação CETAP sobre este tema, com o **gabarito oficial definitivo**. O texto está como na prova (inclusive a grafia da época).\n\n${blocos}\n\n`;
  md = md.slice(0, iRef) + inserir + md.slice(iRef).replace(/\s*$/, "") + (novasRefs.length ? "\n" + novasRefs.join("\n") : "") + "\n";
  fs.writeFileSync(f, md);
  console.log("ok:", arq, novas.length, "questão(ões) nova(s)");
}
