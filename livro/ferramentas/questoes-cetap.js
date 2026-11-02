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
  ],
  "12-classes-de-palavras-1.md": [
    ["detran-programador", 3, "(Texto: crônica \"Aluguel de Temporada\", de Walcyr Carrasco. Trecho: \"Quando cheguei, descobri que era um semiflat. Sim, isso existe! É o flat que já não tem todos os serviços.\")\n\nA relação anafórica de pronome demonstrativo em: \"Sim, isso existe!\" faz-se com:",
      ["\"cheguei\".", "\"descobri\".", "\"Sim\".", "\"existe\".", "\"semiflat\"."],
      "E", "**Isso** retoma (anáfora) o que acabou de ser dito: o **semiflat**. Teste: \"Sim, o semiflat existe!\"."],
    ["alrr-tecnico", 4, "(Trecho do comando da questão anterior: \"Apreciem, prezados leitores, a clareza do bom Morais, cujo dicionário é de 1813\".)\n\nO pronome relativo \"cujo\", no trecho do comando da questão anterior, dá idéia de:",
      ["concessão.", "companhia.", "tempo.", "lugar.", "posse."],
      "E", "**Cujo** sempre indica **posse**: o dicionário **de Morais**."]
  ],
  "15-windows-linux-arquivos-pastas.md": [
    ["detran-analista", 16, "Com relação ao sistema operacional Linux, analise as afirmativas a seguir e marque a alternativa CORRETA.\n\nI- O comando mkdir é usado para excluir os arquivos em um diretório;\nII- O comando ls é usado para listar os arquivos em um diretório;\nIII- O sistema operacional Linux foi criado pela Microsoft;\nIV- O GIMP é um programa para edição de textos;\nV- O sistema operacional Linux só pode ser usado em computadores pessoais.",
      ["Somente a afirmativa II está correta.", "Somente as afirmativas I e II estão corretas.", "Somente as afirmativas I, II e V estão corretas.", "Somente as afirmativas II e V estão corretas.", "Todas as afirmativas estão corretas."],
      "A", "**mkdir cria** diretório; **ls lista**; o Linux não é da Microsoft; o **GIMP edita imagens**; o Linux roda em servidores, celulares e outros equipamentos."],
    ["detran-analista", 17, "Com relação ao sistema operacional Windows analise as afirmativas a seguir e marque a alternativa CORRETA.\n\nI- A tecla print screen tem a função de imprimir o documento na impressora padrão disponível no momento;\nII- O usuário pode alternar a visualização das janelas abertas no computador utilizando as teclas ALT+ESC;\nIII- Windows 7 e Windows Now ! são nomes de duas versões desse sistema operacional;\nIV- O Paint é um programa para edição de planilhas;\nV- O Outlook Express é um programa usado para o gerenciamento de contatos e mensagens de e-mail.",
      ["Somente as afirmativas II e IV estão corretas.", "Somente as afirmativas II e V estão corretas.", "Somente as afirmativas I, II e V estão corretas.", "Somente as afirmativas II, III e V estão corretas.", "Todas as afirmativas estão corretas."],
      "B", "**Print Screen copia** a tela (não imprime); \"Windows Now!\" não existe; **Paint** edita imagens. Alt + Esc alterna janelas e o Outlook Express era o programa de e-mail do Windows XP."],
    ["detran-analista", 20, "Quanto aos conceitos de organização e de gerenciamento de informações, arquivos, pastas e programas, podemos afirmar que:",
      ["Pasta, arquivo e diretório são sinônimos.", "O Windows Explorer, por questões de segurança, não permite a visualização de arquivos sob o diretório \"Windows/System32\".", "Um arquivo não pode ter mais de 100 giga bytes de tamanho.", "Todos os programas instalados no Windows estão obrigatoriamente sob o diretório \"Arquivos de Programas\".", "Não é possível usar a partição do tipo NTFS no Windows 98."],
      "E", "O **Windows 98** usava **FAT/FAT32** e não reconhece **NTFS**. Pasta e diretório são sinônimos, mas **arquivo** não; não há limite de 100 GB no NTFS; programas podem ser instalados em outras pastas."],
    ["detran-programador", 21, "Quais as informações que você deve fornecer como procedimento padrão para autenticar-se no sistema operacional Linux:",
      ["Nome de usuário e senha.", "Somente o nome de usuário.", "Somente a senha.", "Certificado digital.", "Assinatura digital."],
      "A", "O login padrão do Linux pede **usuário e senha**."],
    ["detran-programador", 22, "No sistema Linux, a opção de reiniciar o sistema operacional é usada para:",
      ["Desligar e ligar, nessa ordem, somente os serviços de rede e o monitor.", "Desligar e ligar, nessa ordem, o sistema operacional.", "Somente desligar o sistema operacional.", "Ligar e desligar, nessa ordem, o sistema operacional.", "Desligar e ligar, nessa ordem, somente os serviços de rede, o monitor e os periféricos."],
      "B", "Reiniciar (**reboot**) = **desligar e ligar de novo** o sistema inteiro, nessa ordem."],
    ["alrr-tecnico", 21, "Gnome é uma interface gráfica que facilita o uso do ambiente Linux e apresenta uma aparência semelhante à oferecida pelos sistemas Windows. Comparando Gnome com a interface gráfica do Windows, analise as afirmativas a seguir e marque a alternativa CORRETA.\n\nI- O Gnome tem uma área de trabalho;\nII- O Gnome permite utilizar o botão direito do mouse;\nIII- O Gnome permite criar pastas;\nIV- O Gnome permite as operações de copiar e colar;\nV- Quando houver uma leitora de CD disponível, o Gnome permitirá ver arquivos que se encontram em um CD.",
      ["Somente a afirmativa III está correta.", "Somente a afirmativa IV está correta.", "Somente as afirmativas I, III, IV e V estão corretas.", "Somente as afirmativas I, II, III e V estão corretas.", "Todas as afirmativas estão corretas."],
      "E", "O **GNOME** é um ambiente gráfico completo: área de trabalho, botão direito, pastas, copiar e colar e acesso a CDs e pendrives, como no Windows."],
    ["alrr-tecnico", 25, "A informação no computador é organizada em pastas e arquivos. Pastas e arquivos têm nomes, e os arquivos usualmente contam com uma extensão que define o tipo de arquivo, o que dá uma idéia da sua funcionalidade. Das seguintes alternativas referentes a arquivos e pastas, selecione a CORRETA.",
      ["Os arquivos que não tem extensão não têm utilidade.", "Toda pasta precisa ter pelo menos um arquivo.", "As operações de copiar e colar podem ser efetuadas em pastas e em arquivos.", "As operações de recortar e colar só podem ser efetuadas em arquivos.", "Um arquivo .doc criado no Microsoft Word não poderá ser aberto no Writer do Open Office."],
      "C", "Copiar, recortar e colar funcionam em **arquivos e pastas**. Pasta pode estar vazia; arquivo sem extensão pode ser útil; o Writer abre .doc."]
  ],
  "17-sistemas-arquivos-backup.md": [
    ["detran-analista", 22, "O backup é bastante útil para a recuperação de dados perdidos ou apagados acidentalmente. Sobre o backup, é possível afirmar:",
      ["O backup completo copia apenas os arquivos criados nas últimas 24 horas.", "O backup diferencial é sinônimo de backup incremental.", "O backup diferencial copia arquivos criados ou alterados desde o último backup normal ou incremental.", "O backup frio é realizado sem tirar o sistema do ar.", "Pode-se gravar o backup na própria memória RAM do computador."],
      "C", "Atenção: pela definição usual, \"desde o último backup normal **ou incremental**\" descreve o **incremental**; o diferencial copia o que mudou desde o último **completo** (veja a seção de backup). A banca manteve a C porque as outras têm erros evidentes: o completo copia **tudo**; diferencial e incremental **não** são sinônimos; backup **frio** é feito com o sistema **parado**; a RAM é **volátil**."]
  ],
  "18-classes-de-palavras-2-porques.md": [
    ["detran-programador", 5, "(Texto: crônica \"Aluguel de Temporada\", de Walcyr Carrasco.)\n\nNÃO ocorreu o emprego de verbo impessoal em:",
      ["\"Há um ano, seis amigos, sem muita grana, alugaram...\"", "\"...já havia três pessoas instaladas...\"", "\"Faz dois anos que os inquilinos estão lá.\"", "\"Todos haviam pago antecipadamente\".", "\"Havia dois ventiladores, um no quarto, outro na sala\"."],
      "D", "Em \"haviam pago\", **haver é auxiliar** (= tinham pago), concorda com \"todos\" e não é impessoal. Nas outras: haver = tempo decorrido ou existir, e fazer = tempo decorrido (impessoais)."],
    ["detran-programador", 7, "O verbo com o pronome \"se\" apassivado foi empregado corretamente em:",
      ["Analisaram-se os contratos de locação.", "Alugou-se uns flats em Ipanema.", "Contestou-se os carnavalescos.", "Precisava-se de pessoas honestas para assinar contratos.", "Ferraram-se o locatário com aluguel de temporada."],
      "A", "Passiva sintética: o verbo **concorda** com o sujeito (os contratos **foram analisados**). B e C deveriam estar no plural; em D o \"se\" é **índice de indeterminação** (precisar **de**), não apassivador."],
    ["alrr-revisor", 2, "\"Portanto, a persistência é essencial\". O conectivo \"Portanto\" denota:",
      ["Tempo.", "Conclusão.", "Concessão.", "Proporção.", "Fim."],
      "B", "**Portanto** é conjunção coordenativa **conclusiva** (= logo, por isso)."]
  ],
  "19-office-libreoffice.md": [
    ["detran-analista", 18, "Se tratando do Microsoft Excel, assinale a alternativa que contém, respectivamente, o resultado correspondente as fórmulas \"=mult(4;1;5;4)\" e \"=soma(2,2;4)\" :",
      ["45 e 224.", "21 e 6,2.", "17 e 6,22.", "80 e 6,2.", "90 e 1,8."],
      "D", "**MULT**: 4 × 1 × 5 × 4 = **80**. **SOMA(2,2;4)**: o ponto e vírgula separa os argumentos e a vírgula é decimal: 2,2 + 4 = **6,2**."],
    ["detran-programador", 23, "No processador de textos Microsoft Word você dispõe do recurso \"proteger documento\". Sobre o assunto, selecione a alternativa ERRADA:",
      ["A proteção pode ser utilizada para limitar a formatação de estilos.", "A proteção pode ser utilizada para limitar as alterações no documento.", "A proteção pode ser utilizada para encriptar o documento.", "A proteção pode ser utilizada para limitar a permissão de edição dos usuários.", "A proteção pode ser utilizada para controlar o preenchimento de formulários."],
      "C", "Proteger documento (restringir edição) limita **formatação**, **alterações**, **edição por usuário** e **formulários**. Criptografar é outro recurso (Criptografar com Senha)."],
    ["detran-programador", 24, "Na planilha eletrônica Microsoft Excel, quando a célula mostra #REF! significa que:",
      ["A fórmula representa uma divisão por zero.", "A fórmula está acessando uma célula que não existe.", "A fórmula tem caracteres inválidos.", "A fórmula usa \";\" para especificar um intervalo.", "A fórmula está acessando uma célula com caracteres inválidos."],
      "B", "**#REF!** = referência a célula que **não existe** (ex.: linha excluída). Divisão por zero é **#DIV/0!**."],
    ["alrr-tecnico", 22, "O OpenOffice, também chamado de BROffice na sua versão em português, traz uma série de aplicativos para trabalho de escritório. Sobre o assunto, marque a única alternativa ERRADA.",
      ["O Calc permite criar planilhas de cálculo e o Writer permite criar apresentações.", "O Writer é um editor de texto.", "O Writer gera arquivos com extensão .odt.", "O Impress permite a criação de apresentações e cria arquivos com extensão .odp.", "O Writer é um aplicativo de edição de textos e o Impress permite a criação de apresentações."],
      "A", "Apresentações são do **Impress**; o **Writer** é editor de **texto** (.odt). O mesmo vale para o LibreOffice atual."],
    ["alrr-tecnico", 23, "A média ponderada de três números a1, a2 e a3, com pesos b1, b2 e b3 é calculada como: ((a1*b1) + (a2*b2) + (a3*b3))/(b1+b2+b3). Considere que você precise calcular a média ponderada de três notas, cada uma com o seu peso e que, para fazer isso vai utilizar uma planilha de cálculo no Excel. Supondo que as notas se encontram nas células A1, A2 e A3 e os pesos nas células B1, B2 e B3, analise as soluções propostas e marque a alternativa CORRETA.\n\nI- Colocar na célula C1 a fórmula =(A1*B1+A2*B2+A3*B3)/(B1+B2+B3).\nII- Colocar na célula D1 a fórmula =A1*B1, na célula D2 a fórmula =A2*B2, na célula D3 a fórmula =A3*B3 e na célula C1 a fórmula =(D1+D2+D3)/(B1+B2+B3).\nIII- Colocar na célula C1 a fórmula =(A1*B1;A2*B2;A3*B3)/(B1;B2;B3).\nIV- Colocar na célula C1 a fórmula =(A*B)/(B).\nV- Colocar na célula C1 a fórmula =soma(A1*B1;A2*B2;A3*B3)/Soma(B1:B3).",
      ["Somente a solução IV está correta.", "Somente as soluções III e V estão corretas.", "Todas as soluções estão corretas.", "Somente as soluções I, II e V estão corretas.", "Somente a solução V está correta."],
      "D", "I, II e V calculam a média ponderada. III usa \";\" fora de uma função (erro) e IV usa referências incompletas (\"A\", \"B\")."]
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
