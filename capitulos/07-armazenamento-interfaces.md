---
capitulo: 7
titulo: Armazenamento e Interfaces (USB, SATA, NVMe e E/S)
edital: Qui 08/10 · Item 2 — Armazenamento: dispositivos e mídias; interfaces USB, SATA, NVMe e de entrada/saída
lead: Onde os dados ficam guardados (HD, SSD, mídias ópticas e flash) e como os dispositivos se ligam ao computador.
---

## Memória secundária

A **memória secundária** (de massa) guarda os dados de forma **permanente**: **não é volátil**, tem **muito mais capacidade** e é **mais lenta** que a RAM.[^1]

> [!SIMPLES]
> A RAM é a mesa de trabalho: rápida, mas esvazia quando você desliga. A memória secundária é o **armário**: mais lenta para pegar as coisas, mas guarda tudo mesmo com o computador desligado.

### Acesso sequencial x acesso direto {.pouco}

| Acesso | Como funciona | Exemplo |
|---|---|---|
| **Sequencial** | Precisa passar por tudo o que vem antes | **Fita magnética** |
| **Direto (aleatório)** | Vai direto ao ponto desejado | HD, SSD, pendrive, mídias ópticas |

Fonte: Stallings, cap. 6.[^1]

> [!SIMPLES]
> Fita é como **fita cassete**: para ouvir a música 5, você passa pelas 4 primeiras. Disco é como **escolher a faixa** direto no aplicativo.

## Dispositivos de armazenamento

### HD (disco rígido magnético)

- Grava os dados de forma **magnética** em **pratos** que giram, lidos por uma **cabeça de leitura e gravação**.[^1]
- O disco é dividido em **trilhas** (círculos), **setores** (pedaços da trilha) e **cilindros** (a mesma trilha em todos os pratos).[^1]
- A velocidade de rotação é medida em **RPM** (5.400 e 7.200 são comuns).[^1]
- Tem **partes móveis**: é mais lento, faz barulho e sofre com **impactos**.

> [!SIMPLES]
> O HD funciona como uma **vitrola**: um disco girando e uma "agulha" que se move até o ponto certo. Por isso demora mais e não gosta de pancada.

### SSD (unidade de estado sólido) {.cai}

- Usa **memória flash (NAND)**, **sem partes móveis**.[^1]
- É **muito mais rápido**, silencioso, gasta menos energia e resiste melhor a impactos.
- As células suportam um **número limitado de gravações** (desgaste).[^1]

> [!PEGADINHA]
> **M.2 é o formato** (o "jeito" da peça, uma plaquinha), **não a velocidade**. Um SSD M.2 pode usar a interface **SATA** (mais lenta) ou **NVMe** (muito mais rápida).[^4]

### Mídias ópticas {.pouco}

Gravadas e lidas por **laser**.[^1]

| Mídia | Capacidade típica (1 camada) | Laser |
|---|---|---|
| **CD** | cerca de **700 MB** | infravermelho |
| **DVD** | **4,7 GB** (8,5 GB em camada dupla) | vermelho |
| **Blu-ray** | **25 GB** (50 GB em camada dupla) | azul-violeta |

- **-ROM**: só leitura. **-R**: grava **uma vez**. **-RW**: **regravável**.[^1]

> [!SIMPLES]
> Quanto mais "fino" o laser, mais dados cabem no disco. Por isso o Blu-ray, com laser azul, guarda muito mais que o CD.

### Flash removível e fita {.pouco}

- **Pendrive** e **cartões de memória** (SD, microSD): memória **flash**, pequenos e portáteis.[^1]
- **Fita magnética**: acesso **sequencial**, barata e de grande capacidade. Ainda é usada para **backup** de grandes volumes.[^1]

## Interfaces de armazenamento: SATA e NVMe {.cai}

### SATA (Serial ATA)

- Liga HDs, SSDs e drives ópticos à placa-mãe por uma conexão **serial**. Substituiu o antigo **IDE/PATA**, que era **paralelo**.[^3]
- Versões: **SATA I = 1,5 Gb/s**, **SATA II = 3 Gb/s**, **SATA III = 6 Gb/s** (cerca de 600 MB/s na prática).[^3]
- Permite **hot-plug** (conectar com o computador ligado) quando o controlador trabalha em modo AHCI.[^3]
- **eSATA** é a versão para discos **externos**.
- O cabo SATA é **estreito**; o do IDE era uma fita **larga** (flat). Em PCs antigos sem SATA, dá para instalar uma **controladora SATA num slot PCI**. A mesma controladora liga HDs e drives de CD/DVD.
- **IDE (PATA)**: cabo **paralelo** de **40 pinos**, até 2 dispositivos por cabo (mestre e escravo). **SATA**: **serial**, conector de dados de **7 pinos**, mais rápido.
- **SCSI**: padrão **ANSI** dos anos 1980, várias unidades no mesmo barramento (pelo menos 8), comum em **servidores**; as últimas versões chegaram a **640 MB/s**. O sucessor é o **SAS** (SCSI serial).
- Do mais lento para o mais rápido: **IDE < SATA < SAS < NVMe**.

> [!PEGADINHA]
> **HD externo** se liga por **USB** (ou eSATA), e não por IDE. A CETAP já usou "discos externos são conectados através de controladoras IDE" como alternativa **errada**.

### NVMe (NVM Express)

- **Protocolo** criado para SSDs, ligado diretamente ao barramento **PCI Express (PCIe)**.[^4]
- Trabalha com **muitas filas de comandos em paralelo** (até cerca de 64 mil filas com 64 mil comandos cada), enquanto o AHCI/SATA tem **uma fila** de 32 comandos.[^4]
- Resultado: SSDs NVMe são **várias vezes mais rápidos** que os SSDs SATA.

> [!SIMPLES]
> O **SATA** foi feito na época dos HDs, como uma estrada de uma pista. O **NVMe** foi feito para o SSD: é uma **rodovia com muitas pistas**, ligada direto na via mais rápida da placa-mãe (PCIe).

> [!CAI]
> - **SATA** = serial, máx. **6 Gb/s**, substituiu o IDE (paralelo).
> - **NVMe** = protocolo para SSD sobre **PCIe**, muitas filas, bem mais rápido.
> - **M.2** = formato físico (pode ser SATA ou NVMe).

## USB (Universal Serial Bus) {.cai}

- Barramento **serial universal** para ligar periféricos: teclado, mouse, impressora, pendrive, celular…[^2]
- **Plug and play** e **hot swap**: o dispositivo é reconhecido ao ser conectado, com o computador ligado.[^2]
- **Fornece energia** aos dispositivos.[^2]
- Um controlador host suporta até **127 dispositivos** (com hubs).[^2]

| Versão | Velocidade máxima | Nome |
|---|---|---|
| USB 1.1 | **12 Mb/s** | Full Speed |
| USB 2.0 | **480 Mb/s** | High Speed |
| USB 3.0 / 3.1 Gen 1 / 3.2 Gen 1 | **5 Gb/s** | SuperSpeed |
| USB 3.1 Gen 2 / 3.2 Gen 2 | **10 Gb/s** | SuperSpeed+ |
| USB 3.2 Gen 2x2 | **20 Gb/s** | |
| USB4 | **40 Gb/s** (USB4 v2: 80 Gb/s) | |

Fonte: USB Implementers Forum.[^2]

> [!SIMPLES]
> USB é a "tomada universal" do computador: serve para quase tudo, funciona sem desligar a máquina e ainda carrega o aparelho. Cada nova versão é mais rápida.

> [!PEGADINHA]
> **USB-C é o tipo de conector** (o plugue reversível), **não uma versão**. Um cabo USB-C pode ser só USB 2.0 ou chegar ao USB4. Os conectores mais comuns são **Tipo A**, **Tipo B**, **Micro-USB** e **Tipo C**.[^2]

> [!PEGADINHA]
> Velocidade em **Mb/s** é em **bits**. USB 2.0 = 480 Mb/s ≈ **60 MB/s** (divida por 8).

## Entrada e saída (E/S)

> [!CAI]
> **Buffer**: área de **armazenamento temporário** dos dados que entram ou saem de um dispositivo, para compensar a diferença de velocidade entre ele e o processador. Das portas de E/S comuns (serial, paralela, PS/2, USB), a **USB é a mais rápida**.

### Interface serial x paralela

| Serial | Paralela |
|---|---|
| Envia **um bit de cada vez**, por um único caminho | Envia **vários bits ao mesmo tempo**, por vários fios |
| Hoje é a **mais rápida** e usa cabos finos | Sofre interferência entre fios em alta velocidade |
| Ex.: USB, SATA, PCIe | Ex.: IDE/PATA, porta de impressora antiga (LPT) |

Fonte: Stallings, cap. 7.[^1]

> [!PEGADINHA]
> Parece que paralelo seria mais rápido, mas as interfaces modernas são **seriais** (USB, SATA, PCIe) porque conseguem frequências muito mais altas.

### Como o processador conversa com os dispositivos {.cai}

| Técnica | Como funciona | Desvantagem/vantagem |
|---|---|---|
| **E/S programada** (polling) | A CPU **pergunta o tempo todo** se o dispositivo está pronto | Desperdiça CPU esperando |
| **E/S por interrupção** | O dispositivo **avisa a CPU** (interrupção) quando está pronto | A CPU faz outras coisas enquanto espera |
| **DMA** (acesso direto à memória) | Um controlador DMA **transfere os dados direto para a memória**, sem a CPU; ela só é avisada no fim | Ideal para **grandes volumes** (disco, rede) |

Fonte: Stallings, cap. 7.[^1]

> [!SIMPLES]
> - **Programada**: você fica olhando o micro-ondas até apitar.
> - **Interrupção**: você vai fazer outra coisa e o apito te chama.
> - **DMA**: alguém tira a comida, serve no prato e só te avisa que está pronto.

## Revisão rápida {- .colunas}

- Memória secundária: não volátil, grande e mais lenta.
- Fita: acesso sequencial; disco: acesso direto.
- HD: magnético, pratos, partes móveis, RPM.
- SSD: flash NAND, sem partes móveis, mais rápido.
- CD 700 MB; DVD 4,7 GB; Blu-ray 25 GB.
- -R grava uma vez; -RW regrava.
- SATA: serial, até 6 Gb/s, substituiu o IDE.
- NVMe: protocolo para SSD sobre PCIe, muitas filas.
- M.2 é formato, não velocidade.
- USB: serial, plug and play, hot swap, até 127 dispositivos.
- USB 2.0 = 480 Mb/s; USB 3.0 = 5 Gb/s.
- USB-C é conector, não versão.
- E/S: programada, interrupção e DMA.

## Flashcards {- .flashcards}

- HD x SSD :: **HD**: magnético, partes móveis, mais lento. **SSD**: memória flash, sem partes móveis, mais rápido.
- Dispositivo de acesso sequencial :: **Fita magnética**.
- Capacidade do CD, DVD e Blu-ray :: CD **700 MB**; DVD **4,7 GB**; Blu-ray **25 GB** (1 camada).
- CD-R x CD-RW :: **-R** grava uma vez; **-RW** é regravável.
- Velocidade do SATA III :: **6 Gb/s** (cerca de 600 MB/s).
- SATA substituiu qual interface? :: **IDE/PATA** (paralela).
- HD externo se conecta por… :: **USB** (ou eSATA). IDE é interno e antigo.
- IDE x SATA (pinos e tipo) :: **IDE**: 40 pinos, **paralelo**. **SATA**: 7 pinos, **serial**, mais rápido.
- SCSI :: Padrão **ANSI** antigo, vários discos no mesmo barramento, comum em **servidores**.
- Interface de disco mais rápida :: **NVMe**.
- Função do buffer na E/S :: **Armazenamento temporário** dos dados de um dispositivo de entrada ou saída.
- Porta mais rápida: serial, paralela, PS/2 ou USB? :: **USB**.
- USB é serial ou paralelo? :: **Serial** (o S de USB) e não depende do sistema operacional.
- O que é NVMe? :: **Protocolo** para SSD que usa o barramento **PCIe**, com muitas filas de comandos.
- M.2 é velocidade ou formato? :: **Formato** físico; pode ser SATA ou NVMe.
- Velocidade do USB 2.0 e do USB 3.0 :: USB 2.0 **480 Mb/s**; USB 3.0 **5 Gb/s**.
- USB-C é uma versão do USB? :: **Não**, é o **tipo de conector** (reversível).
- Quantos dispositivos por controlador USB? :: Até **127**.
- E/S programada x interrupção :: **Programada**: CPU pergunta sem parar. **Interrupção**: o dispositivo avisa a CPU.
- O que é DMA? :: Transferência **direto para a memória**, sem ocupar a CPU.

## Questões de fixação {-}

::: questao
Sobre os SSDs, é correto afirmar:
A) armazenam dados em pratos magnéticos que giram em alta rotação.
B) utilizam memória flash e não possuem partes móveis.
C) são mais lentos que os discos rígidos tradicionais.
D) têm acesso exclusivamente sequencial.
E) são uma memória volátil.
= B | SSD usa flash NAND, sem partes móveis. A alternativa A descreve o HD.
:::

::: questao
Dispositivo de armazenamento que utiliza acesso sequencial e ainda é usado para backups de grande volume:
A) SSD
B) pendrive
C) fita magnética
D) Blu-ray
E) disco rígido
= C | Na fita, é preciso passar pelos dados anteriores até chegar ao desejado.
:::

::: questao
A interface SATA, em sua versão III, tem taxa máxima de transferência de:
A) 480 Mb/s
B) 1,5 Gb/s
C) 3 Gb/s
D) 6 Gb/s
E) 40 Gb/s
= D | SATA I 1,5; II 3; III 6 Gb/s. 480 Mb/s é o USB 2.0.
:::

::: questao
O NVMe é:
A) um tipo de conector USB reversível.
B) um protocolo de comunicação para SSDs que utiliza o barramento PCI Express.
C) a versão paralela da interface SATA.
D) um tipo de mídia óptica.
E) um formato físico de disco de 3,5 polegadas.
= B | NVMe trabalha sobre PCIe, com muitas filas de comandos em paralelo.
:::

::: questao
Um SSD no formato M.2:
A) é sempre NVMe.
B) é sempre SATA.
C) pode utilizar interface SATA ou NVMe.
D) só funciona em portas USB.
E) é uma mídia óptica.
= C | M.2 é o formato físico, não define a interface.
:::

::: questao
A versão do USB que atinge a taxa de 480 Mb/s é a:
A) USB 1.1
B) USB 2.0
C) USB 3.0
D) USB 3.2 Gen 2
E) USB4
= B | USB 1.1 = 12 Mb/s; USB 3.0 = 5 Gb/s.
:::

::: questao
Sobre o padrão USB, é INCORRETO afirmar:
A) permite conectar dispositivos com o computador ligado.
B) pode fornecer energia aos dispositivos conectados.
C) USB-C é o nome de uma versão do padrão, mais rápida que o USB 3.0.
D) é uma interface serial.
E) suporta até 127 dispositivos por controlador host.
= C | USB-C é o tipo de conector, não uma versão.
:::

::: questao
A técnica de entrada e saída em que um controlador transfere dados diretamente entre o dispositivo e a memória principal, liberando o processador, é chamada de:
A) E/S programada
B) polling
C) DMA
D) pipeline
E) cache
= C | Direct Memory Access: a CPU só é avisada ao final da transferência.
:::

::: questao
Em relação às interfaces seriais e paralelas, é correto afirmar:
A) As interfaces modernas, como USB e SATA, são paralelas.
B) Na interface serial, os bits são transmitidos um de cada vez.
C) A interface IDE/PATA é serial.
D) A interface paralela não sofre interferência entre os fios.
E) PCI Express é uma interface paralela.
= B | USB, SATA e PCIe são seriais; IDE/PATA é paralela.
:::

::: questao
Um DVD de camada simples tem capacidade aproximada de:
A) 700 MB
B) 4,7 GB
C) 8,5 GB
D) 25 GB
E) 50 GB
= B | 8,5 GB é a camada dupla; 25 GB é o Blu-ray.
:::

## Questões da banca (CETAP) {-}

Questões **reais** de provas anteriores da Fundação CETAP sobre este tema, com o **gabarito oficial definitivo**. O texto está como na prova (inclusive a grafia da época).

::: questao
**CETAP · 2010 · DETRAN-RR · Analista Técnico I – Analista de Sistemas · Questão 31**[^5] · [ver prova](https://www.estudegratis.com.br/images/provas/15539-cetap-2010-detran-rr-analista-de-sistemas-prova.pdf) · [gabarito](https://www.estudegratis.com.br/images/provas/15539-cetap-2010-detran-rr-analista-de-sistemas-gabarito.pdf)

Universal Serial Bus (USB) permite a conexão de periféricos sem a necessidade de desligar o computador. Sobre o USB 2.0, podemos afirmar que:
A) permite a conexão máxima de até 32 dispositivos.
B) permite conexão com velocidade de 480 Mbps.
C) não usa o modo de transmissão serial.
D) somente pode ser usado em computadores com sistema operacional Windows.
E) USB é sinônimo de Pen Drive.
= B | Gabarito **oficial definitivo** da CETAP. USB 2.0 = **480 Mb/s** (Hi-Speed). O USB aceita até **127** dispositivos, é **serial** (o S de USB) e não depende de sistema operacional.
:::

::: questao
**CETAP · 2010 · DETRAN-RR · Técnico em Rede de Computador · Questão 33**[^6] · [ver prova](https://www.estudegratis.com.br/images/provas/15587-cetap-2010-detran-rr-tecnico-em-informatica-prova.pdf) · [gabarito](https://www.estudegratis.com.br/images/provas/15587-cetap-2010-detran-rr-tecnico-em-informatica-gabarito.pdf)

Dadas as seguintes afirmativas sobre Barramentos de E/S (Entrada e Saída) e Sistemas de Entrada e Saída, analise-as e assinale a alternativa CORRETA.

I- O Barramento E/S é um conjunto de linhas de transmissão de sinais que conecta dispositivos periféricos a CPU (Central Process Unit) do computador;

II- O Barramento USB (Universal Serial Bus) é um tipo de barramento E/S que utiliza o padrão PnP(Plug and Play), de modo que o Sistema Operacional reconheça e disponibilize imediatamente o dispositivo a ser instalado;

III- Mouse, Teclado e WebCam são alguns dispositivos de entrada que utilizam o barramento E/S;

IV- Impressora e Auto-falantes são alguns dispositivos de saída que utilizam o barramento E/S.
A) Apenas as afirmativas I, III e IV estão corretas.
B) Apenas as afirmativas III e IV estão corretas.
C) Apenas as afirmativas II, III e IV estão corretas.
D) Apenas as afirmativas I, II e IV estão corretas.
E) Todas as afirmativas estão corretas.
= E | Gabarito **oficial definitivo** da CETAP. Todas certas. Atenção à II: **plug and play** é o sistema reconhecer e configurar o dispositivo sozinho, sem reiniciar.
:::

::: questao
**CETAP · 2010 · Assembleia Legislativa de Roraima · Técnico em Informática · Questão 33**[^7] · [ver prova](https://www.estudegratis.com.br/images/provas/15602-cetap-2010-al-rr-tecnico-em-informatica-prova.pdf) · [gabarito](https://www.estudegratis.com.br/images/provas/15602-cetap-2010-al-rr-tecnico-em-informatica-gabarito.pdf)

Sobre as controladoras de disco rígido disponíveis no mercado, marque a alternativa ERRADA.
A) SCSI, SATA e IDE são as mais utilizadas no mercado.
B) O conector Serial ATA é mais estreito do que o paralelo IDE.
C) Para computadores mais antigos sem conectores SATA na placa mãe, é possível instalar uma controladora SATA através dos slots PCI.
D) As controladoras de disco também são utilizadas para conectar os drives de CD e DVD.
E) Os discos rígidos externos são conectados através de controladoras IDE.
= E | Gabarito **oficial definitivo** da CETAP. Discos externos usam **USB** (ou eSATA/Thunderbolt), não IDE. A B confirma: SATA é **serial**, com cabo fino; o IDE era **paralelo**, com cabo largo (flat).
:::

### Mais questões da CETAP sobre este tema (TEC Concursos)

Estas não estão transcritas aqui (os termos do TEC não permitem), mas você pode resolvê-las no TEC, com gabarito e comentários:

| Tema | Questões |
|---|---|
| Armazenamento (SSD, M.2, NVMe, IDE x SATA, SCSI) | [#3332105](https://www.tecconcursos.com.br/questoes/3332105) BANPARÁ 2025 · [#2062099](https://www.tecconcursos.com.br/questoes/2062099) CRF-PA 2021 · [#2409165](https://www.tecconcursos.com.br/questoes/2409165) SEMAS-PA 2023 · [#777551](https://www.tecconcursos.com.br/questoes/777551) S. J. Pirabas 2016 · [#3102957](https://www.tecconcursos.com.br/questoes/3102957) Castanhal 2024 · [#2409162](https://www.tecconcursos.com.br/questoes/2409162) SEMAS-PA 2023 |
| Entrada e saída (DMA, buffer, USB, plug and play) | [#1863827](https://www.tecconcursos.com.br/questoes/1863827) PGE-PA 2021 · [#775043](https://www.tecconcursos.com.br/questoes/775043) MPCM-PA 2015 · [#2409161](https://www.tecconcursos.com.br/questoes/2409161) SEMAS-PA 2023 · [#750992](https://www.tecconcursos.com.br/questoes/750992) DETRAN-RR 2010 · [#602202](https://www.tecconcursos.com.br/questoes/602202) ALERR 2010 |

## Referências {- .referencias}

1. STALLINGS, William. *Arquitetura e Organização de Computadores*. 10. ed. São Paulo: Pearson, 2017. Caps. 6 (memória externa) e 7 (entrada/saída).
2. USB IMPLEMENTERS FORUM. *USB Specifications and Documents*. Disponível em: <https://www.usb.org/documents>.
3. SERIAL ATA INTERNATIONAL ORGANIZATION. *SATA Specification*. Disponível em: <https://sata-io.org>.
4. NVM EXPRESS. *NVM Express Base Specification*. Disponível em: <https://nvmexpress.org/specifications>.
5. FUNDAÇÃO CETAP. *Concurso Público nº 001/2009 do DETRAN-RR*: prova objetiva do cargo Analista Técnico I – Analista de Sistemas, aplicada em 11 abr. 2010, e gabarito oficial definitivo. Prova: <https://www.estudegratis.com.br/images/provas/15539-cetap-2010-detran-rr-analista-de-sistemas-prova.pdf>. Gabarito: <https://www.estudegratis.com.br/images/provas/15539-cetap-2010-detran-rr-analista-de-sistemas-gabarito.pdf>. Acesso em: 11 out. 2026.
6. FUNDAÇÃO CETAP. *Concurso Público nº 001/2009 do DETRAN-RR*: prova objetiva do cargo Técnico em Atividade Administrativa – Técnico em Rede de Computador, aplicada em 11 abr. 2010, e gabarito oficial definitivo. Prova: <https://www.estudegratis.com.br/images/provas/15587-cetap-2010-detran-rr-tecnico-em-informatica-prova.pdf>. Gabarito: <https://www.estudegratis.com.br/images/provas/15587-cetap-2010-detran-rr-tecnico-em-informatica-gabarito.pdf>. Acesso em: 11 out. 2026.
7. FUNDAÇÃO CETAP. *Concurso Público nº 001/2009 da Assembleia Legislativa do Estado de Roraima*: prova objetiva do cargo Técnico em Informática, aplicada em 4 abr. 2010, e gabarito oficial definitivo. Prova: <https://www.estudegratis.com.br/images/provas/15602-cetap-2010-al-rr-tecnico-em-informatica-prova.pdf>. Gabarito: <https://www.estudegratis.com.br/images/provas/15602-cetap-2010-al-rr-tecnico-em-informatica-gabarito.pdf>. Acesso em: 11 out. 2026.
