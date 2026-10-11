---
capitulo: 5
titulo: Arquitetura — Processador, Registradores, Memória e Barramento
edital: Qua 07/10 · Item 2 — Arquitetura: processador, registradores, memória e barramento
lead: Como o computador funciona por dentro, peça por peça, e o que a banca cobra de cada uma.
---

## Os blocos do computador {.cai}

O modelo de **von Neumann** organiza o computador em: **processador (CPU)**, **memória principal**, **dispositivos de entrada e saída** e **barramentos** que ligam tudo. Instruções e dados ficam guardados na **mesma memória**.[^1][^2]

> [!SIMPLES]
> Pense numa cozinha: a **CPU** é o cozinheiro, a **memória** é a bancada onde ficam a receita e os ingredientes, e os **barramentos** são os caminhos por onde o cozinheiro pega e devolve as coisas. A receita (programa) e os ingredientes (dados) ficam **na mesma bancada**.

> [!PEGADINHA]
> Na arquitetura **Harvard**, instruções e dados ficam em **memórias separadas**, cada uma com seu barramento. Em von Neumann é **uma memória só**.[^2]

## Processador (CPU) {.cai}

| Parte | O que faz |
|---|---|
| **Unidade de Controle (UC)** | **Busca** as instruções na memória, **decodifica** e **coordena** a execução, enviando sinais de controle |
| **Unidade Lógica e Aritmética (ULA)** | Faz as **contas** (soma, subtração…) e as **operações lógicas** (E, OU, NÃO, comparações) |
| **Registradores** | Memórias minúsculas e **muito rápidas** dentro da CPU |

Fonte: Stallings, cap. 14.[^1]

> [!SIMPLES]
> A **UC** é o **gerente**: lê a ordem e diz quem faz o quê. A **ULA** é a **calculadora**. Os **registradores** são o **rascunho** do processador, onde ele anota o que está usando naquele instante.

> [!PEGADINHA]
> A **memória principal não faz parte da CPU**. A CPU é formada por **UC, ULA e registradores**. A memória principal fica **fora** dela e se liga à CPU pelo barramento. A CETAP já considerou **errada** a frase "a CPU possui 4 componentes: registradores, ULA, UC e memória principal".[^1]

### Ciclo de instrução {.pouco}

Toda instrução passa por: **busca** (*fetch*) → **decodificação** (*decode*) → **execução** (*execute*). Depois o processador busca a próxima.[^1]

> [!SIMPLES]
> É como seguir uma receita: **ler** o próximo passo, **entender** o que ele pede e **fazer**. Depois, ler o passo seguinte, e assim por diante.

### Desempenho {.cai}

- **Clock**: frequência do processador, medida em **hertz** (GHz = bilhões de ciclos por segundo).[^1]
- **Multicore**: vários **núcleos** num mesmo chip, que executam tarefas **em paralelo**.[^1]
- **Pipeline**: sobrepõe as etapas de várias instruções, como uma **linha de montagem**.[^1]
- **Bits do processador** (16, 32, 64): quantos bits ele processa **de uma vez** (o tamanho da **palavra**). Um sistema operacional de 32 bits **não aproveita** os recursos de um processador de 64 bits. E 64 bits não é exclusividade da Intel: AMD e ARM também têm. Na prática, a **principal diferença** entre 32 e 64 bits é a **quantidade de memória suportada** (32 bits endereçam cerca de 4 GB).[^1]
- **Núcleo** (*core*): cada unidade de processamento dentro do chip. **Dual-core** = 2 núcleos.[^1]
- **Famílias**: Intel = Celeron, Pentium, Core (i3 a i9) e **Xeon** (servidores e estações de trabalho). **Duron, Athlon e Ryzen são da AMD**.

> [!SIMPLES]
> O **clock** é o "ritmo" do processador. Ter **mais núcleos** é como ter **mais cozinheiros** trabalhando ao mesmo tempo. O **pipeline** é começar a ler a próxima receita enquanto a anterior ainda está no forno.

### RISC x CISC {.cai}

| RISC | CISC |
|---|---|
| **Poucas** instruções, **simples** | **Muitas** instruções, algumas **complexas** |
| Instruções de **tamanho fixo**, quase todas em 1 ciclo | Instruções de **tamanho variável**, vários ciclos |
| **Muitos registradores** | Menos registradores |
| Acesso à memória só por **load/store** | Muitas instruções acessam a memória direto |
| Ex.: **ARM** (celulares) | Ex.: **x86** (Intel, AMD) |

Fonte: Stallings, cap. 15.[^1]

> [!SIMPLES]
> **RISC** usa poucas ordens simples e rápidas, e combina várias para fazer algo complexo. **CISC** tem ordens "prontas" para tarefas complexas, mas cada uma demora mais.

> [!PEGADINHA]
> Os processadores **x86 atuais são híbridos**: por fora aceitam instruções **CISC**, mas por dentro as quebram em **micro-operações simples**, no estilo RISC. Por isso é **falso** dizer que "não é possível juntar as duas tecnologias no mesmo processador". O CISC usa **microcódigo** para decodificar as instruções.[^1]

## Registradores {.pouco}

São as memórias **mais rápidas e menores** do computador, ficam **dentro da CPU**.[^1][^2]

| Registrador | Função |
|---|---|
| **PC** (Program Counter, contador de programa) | Guarda o **endereço da próxima instrução** |
| **IR** (Instruction Register, registrador de instrução) | Guarda a **instrução que está sendo executada** |
| **MAR / REM** (registrador de endereço de memória) | Guarda o **endereço** que vai ser lido ou escrito na memória |
| **MBR / RDM** (registrador de dados da memória) | Guarda o **dado** lido ou a ser escrito na memória |
| **Acumulador (ACC)** | Guarda **resultados** da ULA |
| **Flags / PSW** | Indicam o **estado** do resultado (zero, negativo, estouro…) |

Fonte: Stallings, cap. 14.[^1]

> [!SIMPLES]
> - **PC** é o **marcador de página**: diz onde está o próximo passo.
> - **IR** é o **passo que está sendo lido agora**.
> - **MAR** diz **onde** buscar na memória; **MBR** guarda **o que** foi buscado.

> [!PEGADINHA]
> O **PC** guarda um **endereço**, não a instrução. Quem guarda a instrução é o **IR**.[^1]

## Memória {.cai}

### Hierarquia de memória

Do **mais rápido, caro e pequeno** ao **mais lento, barato e grande**:[^1]

**Registradores → Cache (L1, L2, L3) → Memória principal (RAM) → Memória secundária (SSD, HD)**

> [!SIMPLES]
> Quanto mais **perto do processador**, mais **rápida** e mais **cara** a memória, e por isso **menor**. É como guardar as coisas: o que você usa toda hora fica **no bolso** (registrador), depois **na mesa** (cache), **no armário** (RAM) e **no depósito** (HD).

### Tipos de memória {.cai}

| Memória | Característica | Uso |
|---|---|---|
| **RAM** | **Volátil**: perde tudo sem energia. Leitura e escrita | Programas e dados **em uso** |
| **SRAM** (RAM estática) | Mais **rápida** e cara, não precisa de *refresh* | **Cache** |
| **DRAM** (RAM dinâmica) | Mais **barata** e densa, precisa de *refresh* | **Memória principal** |
| **ROM** | **Não volátil**, gravada de fábrica | Firmware |
| **PROM** | Gravada **uma vez** pelo usuário | |
| **EPROM** | Apagável por **luz ultravioleta** | |
| **EEPROM / Flash** | Apagável **eletricamente** | BIOS/UEFI, pendrive, SSD |

Fonte: Stallings, cap. 5.[^1]

> [!SIMPLES]
> **Volátil** = esquece tudo quando desliga, como a RAM. **Não volátil** = guarda mesmo desligado, como a ROM e o pendrive. A **cache** usa a memória mais rápida (SRAM) e a **RAM** usa a mais barata (DRAM).

### Memória cache {.cai}

A cache guarda **cópias dos dados mais usados** da RAM, perto do processador. Funciona por causa do **princípio da localidade**:[^1]

- **Temporal**: o que foi usado agora tende a ser usado **de novo em breve**.
- **Espacial**: o que está **perto** do que foi usado tende a ser usado em seguida.

**Acerto (hit)**: o dado estava na cache. **Falha (miss)**: precisa buscar na RAM.[^1]

> [!SIMPLES]
> A cache é a **gaveta de cima**: você deixa ali o que usa mais, para não ir ao armário toda hora. Se o que você precisa está na gaveta, é um **acerto**; se não está, é uma **falha** e você vai ao armário.

> [!CAI]
> - **Voláteis**: RAM e cache. **Não voláteis**: ROM, HD, SSD, pendrive.
> - **Memória principal (primária)** = RAM. HD e SSD são memória **secundária**.
> - A **cache** é **pequena, volátil e a mais rápida** depois dos registradores; serve para **aumentar a velocidade** de processamento.
> - Gerações **DDR, DDR2… DDR5**: cada uma aumenta a **largura de banda** (taxa de transferência). DDR é mais rápida que a antiga SDR.
> - A ROM é **só de leitura** (gravada de fábrica).[^1]

> [!DICA]
> Memória virtual, paginação e segmentação são de **Sistemas Operacionais** e têm dia próprio (Seg 12/10).

## Barramento {.cai}

Barramento é o **conjunto de fios** que liga CPU, memória e E/S. O **barramento do sistema** tem três partes:[^1][^2]

| Barramento | Leva | Direção |
|---|---|---|
| **Dados** | Os **dados** e instruções | **Bidirecional** |
| **Endereços** | O **endereço** de memória ou de E/S | **Unidirecional** (sai da CPU) |
| **Controle** | **Sinais de comando** (ler, escrever, clock, interrupção) | Bidirecional |

Fonte: Stallings, cap. 3.[^1]

> [!SIMPLES]
> Pense nos Correios: o barramento de **endereços** diz **para onde** vai, o de **dados** leva **a encomenda** (nos dois sentidos) e o de **controle** diz **o que fazer** (entregar ou buscar).

> [!CAI]
> A **largura do barramento de endereços** define quanta memória dá para acessar: **n linhas = 2ⁿ endereços**.[^1]
> Exemplo: **32 bits** de endereço → 2³² = **4 GB** (endereçando byte a byte).
> A **largura do barramento de dados** define quantos bits são transferidos **de uma vez**.

> [!CAI]
> - **Barramento síncrono**: tudo acontece no ritmo de um **clock** comum, que serve de referência de tempo.
> - **Barramento assíncrono**: **sem clock** comum; os dispositivos se coordenam por sinais de confirmação (*handshake*).
> - **Arbitragem**: decide **quem usa o barramento** quando dois dispositivos querem usá-lo ao mesmo tempo.
> - O barramento de **controle** leva **sinais de comando**, não energia. A energia vem pelas linhas de **alimentação**.[^1]
> - Barramentos de expansão: **ISA** (antigo, **lento**, 16 bits) → **PCI** → **PCI Express** (atual). **AGP** era só para vídeo.[^2]

> [!SIMPLES]
> Síncrono é uma banda tocando no ritmo do **mesmo baterista** (o clock). Assíncrono é uma conversa em que cada um espera o outro dizer **"recebi"**. A arbitragem é o **semáforo** do barramento.

## Revisão rápida {- .colunas}

- Von Neumann: dados e instruções na mesma memória.
- Harvard: memórias separadas.
- UC: busca, decodifica e controla.
- ULA: contas e operações lógicas.
- Ciclo: busca → decodificação → execução.
- PC: endereço da próxima instrução.
- IR: instrução atual.
- MAR: endereço; MBR: dado.
- Hierarquia: registrador > cache > RAM > disco.
- RAM é volátil; ROM não.
- Cache usa SRAM; RAM principal usa DRAM.
- Cache funciona pela localidade temporal e espacial.
- Barramento de endereço é unidirecional.
- n bits de endereço = 2ⁿ endereços.
- RISC: poucas instruções simples; CISC: muitas e complexas.
- CPU = UC + ULA + registradores (memória principal fica fora).
- x86 atual: híbrido (CISC por fora, RISC por dentro).
- Barramento síncrono usa clock; assíncrono, handshake; arbitragem resolve conflitos.

## Flashcards {- .flashcards}

- Função da Unidade de Controle :: **Busca, decodifica e coordena** a execução das instruções.
- Função da ULA :: Operações **aritméticas e lógicas**.
- Ciclo de instrução :: **Busca → decodificação → execução**.
- Registrador **PC** :: Guarda o **endereço da próxima instrução**.
- Registrador **IR** :: Guarda a **instrução em execução**.
- MAR x MBR :: **MAR**: endereço a acessar na memória. **MBR**: dado lido ou a escrever.
- Hierarquia de memória, da mais rápida para a mais lenta :: **Registradores → cache → RAM → memória secundária**.
- SRAM x DRAM :: **SRAM**: rápida e cara, usada na **cache**. **DRAM**: barata, precisa de refresh, usada na **RAM**.
- Princípio que justifica a memória cache :: **Localidade** (temporal e espacial).
- Os três barramentos do sistema :: **Dados** (bidirecional), **endereços** (unidirecional) e **controle**.
- Quanta memória endereçam 32 bits de endereço? :: 2³² bytes = **4 GB**.
- RISC x CISC :: **RISC**: poucas instruções simples, tamanho fixo, muitos registradores. **CISC**: muitas instruções complexas, tamanho variável.
- Von Neumann x Harvard :: **Von Neumann**: dados e instruções na mesma memória. **Harvard**: memórias separadas.
- EEPROM / Flash :: **Não volátil**, apagável **eletricamente** (BIOS, pendrive, SSD).
- A memória principal faz parte da CPU? :: **Não.** CPU = **UC + ULA + registradores**.
- x86 atual é RISC ou CISC? :: **CISC por fora, RISC por dentro** (híbrido, com micro-operações).
- Dual-core :: **Dois núcleos** no mesmo chip: dois processos executando ao mesmo tempo.
- Barramento síncrono x assíncrono :: **Síncrono**: segue um **clock**. **Assíncrono**: sem clock, usa **handshake**.
- Arbitragem do barramento :: Resolve **conflitos** quando dois dispositivos querem usar o barramento ao mesmo tempo.
- O que o barramento de controle transporta? :: **Sinais de comando** (ler, escrever, interrupção, clock), **não** energia.
- Principal diferença entre 32 e 64 bits :: A **quantidade de memória** suportada.
- Memórias voláteis :: **RAM e cache**.
- Função da cache :: **Aumentar a velocidade**: memória pequena, volátil e muito rápida com os dados mais usados.
- DDR2, DDR3, DDR4, DDR5 diferem em… :: **Largura de banda** (taxa de transferência).
- Xeon é de qual fabricante e para quê? :: **Intel**, para **servidores** e estações de trabalho. (Duron é AMD.)

## Questões de fixação {-}

::: questao
O componente do processador responsável pelas operações aritméticas e lógicas é:
A) a Unidade de Controle
B) a Unidade Lógica e Aritmética
C) o registrador PC
D) a memória cache
E) o barramento de controle
= B | A ULA faz contas e operações lógicas; a UC coordena.
:::

::: questao
O registrador que armazena o endereço da próxima instrução a ser executada é o:
A) IR
B) MBR
C) PC
D) acumulador
E) MAR
= C | PC = contador de programa. O IR guarda a instrução atual.
:::

::: questao
A ordem correta das memórias, da mais rápida para a mais lenta, é:
A) cache, registradores, RAM, disco
B) registradores, cache, RAM, disco
C) RAM, cache, registradores, disco
D) registradores, RAM, cache, disco
E) disco, RAM, cache, registradores
= B | Quanto mais perto da CPU, mais rápida.
:::

::: questao
Sobre os tipos de memória, é correto afirmar:
A) A RAM é não volátil.
B) A memória cache é normalmente construída com DRAM.
C) A SRAM é mais lenta que a DRAM.
D) A memória principal é normalmente construída com DRAM, e a cache com SRAM.
E) A EPROM é apagada eletricamente.
= D | SRAM é mais rápida e cara (cache); DRAM é mais barata (principal). EPROM se apaga com ultravioleta.
:::

::: questao
O princípio que justifica o uso de memória cache é o da:
A) localidade de referência
B) volatilidade
C) paginação
D) multiprogramação
E) redundância
= A | Localidade temporal e espacial: o que foi usado, ou está perto, tende a ser usado de novo.
:::

::: questao
O barramento responsável por indicar a posição de memória a ser acessada, e que é unidirecional, é o barramento de:
A) dados
B) controle
C) endereços
D) energia
E) expansão
= C | O endereço sai da CPU para a memória.
:::

::: questao
Um processador com barramento de endereços de 32 bits, com memória endereçada byte a byte, pode endereçar no máximo:
A) 32 MB
B) 512 MB
C) 1 GB
D) 4 GB
E) 64 GB
= D | 2³² bytes = 4 GB.
:::

::: questao
A sequência correta do ciclo de instrução é:
A) execução, busca, decodificação
B) decodificação, busca, execução
C) busca, decodificação, execução
D) busca, execução, decodificação
E) execução, decodificação, busca
= C | Ler, entender, fazer.
:::

::: questao
É característica da arquitetura RISC:
A) grande quantidade de instruções complexas
B) instruções de tamanho variável
C) poucos registradores
D) conjunto reduzido de instruções simples, geralmente de tamanho fixo
E) acesso à memória em quase todas as instruções
= D | As demais alternativas descrevem CISC.
:::

::: questao
A memória não volátil, regravável eletricamente, usada para armazenar o firmware da placa-mãe é a:
A) DRAM
B) SRAM
C) EEPROM (flash)
D) cache L1
E) PROM
= C | A PROM só pode ser gravada uma vez; DRAM e SRAM são voláteis.
:::

## Questões da banca (CETAP) {-}

Questões **reais** de provas anteriores da Fundação CETAP sobre este tema, com o **gabarito oficial definitivo**. O texto está como na prova (inclusive a grafia da época).

::: questao
**CETAP · 2010 · DETRAN-RR · Técnico em Rede de Computador · Questão 43**[^3] · [ver prova](https://www.estudegratis.com.br/images/provas/15587-cetap-2010-detran-rr-tecnico-em-informatica-prova.pdf) · [gabarito](https://www.estudegratis.com.br/images/provas/15587-cetap-2010-detran-rr-tecnico-em-informatica-gabarito.pdf)

Dadas as afirmativas sobre a Arquitetura de Computadores proposta por Von Neumann, analise-as e assinale a alternativa CORRETA.

I- Uma CPU (Central Process Unit) possui 4 componentes principais: Um conjunto de registradores, a Unidade Lógica e Aritmética (ALU - Arithmetic Logic Unit), a Unidade de Controle (CU - Control Unit) e a Memória Principal;

II- A CPU de um computador é responsável pelo processamento e execução dos programas armazenados na Memória Principal;

III- A Unidade Lógica e Aritmética é um circuito digital que realiza operações lógicas e aritméticas em base binária;

IV- O Contador de Programa (PC - Program Counter) é um registrador que armazena o endereço de memória da próxima instrução a ser executada pela CPU;

V- Os dados e as instruções são armazenados como um número binário em uma única memória de leitura e escrita.
A) Todas as afirmativas estão corretas.
B) Apenas as afirmativas II e III estão corretas.
C) Apenas as afirmativas I, III e IV estão corretas.
D) Apenas as afirmativas I e IV estão corretas.
E) Apenas as afirmativas II, III, IV e V estão corretas.
= E | Gabarito **oficial definitivo** da CETAP. Só a I está errada: a **memória principal não faz parte da CPU**. A CPU tem registradores, ULA e unidade de controle. A V é a ideia central de Von Neumann: dados e instruções **na mesma memória**.
:::

::: questao
**CETAP · 2010 · DETRAN-RR · Técnico em Rede de Computador · Questão 31**[^3] · [ver prova](https://www.estudegratis.com.br/images/provas/15587-cetap-2010-detran-rr-tecnico-em-informatica-prova.pdf) · [gabarito](https://www.estudegratis.com.br/images/provas/15587-cetap-2010-detran-rr-tecnico-em-informatica-gabarito.pdf)

Sobre arquiteturas CISC e RISC, analise as afirmativas seguintes e assinale a alternativa CORRETA.

I- A arquitetura CISC (Complex Instruction Set Computers) é utilizada em processadores que suportam a execução de diversas instruções complexas;

II- A arquitetura CISC (Complex Instruction Set Computers) implementa micro-código para decodificar e executar cada instrução nos processadores que a utilizam;

III- A arquitetura RISC (Reduced Instruction Set Computers) é utilizada em processadores que suportam um conjunto de instruções simples e reduzidas;

IV- Dado que as arquiteturas CISC e RISC possuem diferentes formas de processamento de instruções, não é possível agregar as duas tecnologias em um mesmo processador.
A) Apenas a afirmativa I está correta.
B) Apenas as afirmativas I e III estão corretas.
C) Apenas as afirmativas I, III e IV estão corretas.
D) Apenas as afirmativas I, II e III estão corretas.
E) Todas as afirmativas estão corretas.
= D | Gabarito **oficial definitivo** da CETAP. A IV está errada: os processadores x86 atuais são **híbridos**, CISC por fora e com núcleo do tipo RISC por dentro (traduzem instruções complexas em micro-operações simples).
:::

::: questao
**CETAP · 2010 · DETRAN-RR · Técnico em Rede de Computador · Questão 44**[^3] · [ver prova](https://www.estudegratis.com.br/images/provas/15587-cetap-2010-detran-rr-tecnico-em-informatica-prova.pdf) · [gabarito](https://www.estudegratis.com.br/images/provas/15587-cetap-2010-detran-rr-tecnico-em-informatica-gabarito.pdf)

Sobre processadores, analise as afirmativas seguintes e assinale a alternativa CORRETA.

I- Processadores dual-core são processadores que contam com dois núcleos distintos no mesmo circuito integrado, como se houvesse dois processadores dentro de um. Dessa forma um processador pode trabalhar com dois processos distintos de uma vez;

II- A quantidade de bits de um processador é uma característica importante que promove grande influência no desempenho desse circuito;

III- Um Sistema Operacional de 32 bits possui desempenho melhor rodando em um computador com processador de 64 bits do que em um computador com processador de 32 bits;

IV- O valor máximo de memória que um processador consegue acessar é igual a 2 elevado ao número de bits do barramento de endereços.
A) Apenas as afirmativas I e II estão corretas.
B) Apenas as afirmativas I, II e IV estão corretas.
C) Apenas as afirmativas II, III e IV estão corretas.
D) Apenas as afirmativas I e IV estão corretas.
E) Todas as afirmativas estão corretas.
= B | Gabarito **oficial definitivo** da CETAP. A III está errada: um sistema de 32 bits **não aproveita** os recursos de 64 bits, então não fica "melhor" por isso. A IV é a regra **2ⁿ** do barramento de endereços.
:::

::: questao
**CETAP · 2010 · Assembleia Legislativa de Roraima · Técnico em Informática · Questão 49**[^4] · [ver prova](https://www.estudegratis.com.br/images/provas/15602-cetap-2010-al-rr-tecnico-em-informatica-prova.pdf) · [gabarito](https://www.estudegratis.com.br/images/provas/15602-cetap-2010-al-rr-tecnico-em-informatica-gabarito.pdf)

Assinale a alternativa ERRADA sobre as arquiteturas e processadores de 16, 32 e 64 bits.
A) Uma arquitetura de 64 bits pode ser utilizada somente em processadores Intel.
B) Um processador de 32 bits pode processar 32 bits de dados por vez.
C) A família de micro processadores x86 da Intel pode ter arquiteturas de 16 e 32 bits.
D) Um processador x86 da Intel pode utilizar o conjunto de instruções de computador CISC.
E) Existem diferentes sistemas operacionais desenvolvidos para 32 e 64 bits.
= A | Gabarito **oficial definitivo** da CETAP. O "somente" denuncia: AMD, ARM e outros fabricantes também têm processadores de 64 bits. A D confirma o que você estudou: **x86 é CISC**.
:::

::: questao
**CETAP · 2010 · Assembleia Legislativa de Roraima · Técnico em Informática · Questão 50**[^4] · [ver prova](https://www.estudegratis.com.br/images/provas/15602-cetap-2010-al-rr-tecnico-em-informatica-prova.pdf) · [gabarito](https://www.estudegratis.com.br/images/provas/15602-cetap-2010-al-rr-tecnico-em-informatica-gabarito.pdf)

Com relação aos barramentos, assinale a alternativa ERRADA:
A) Existem barramentos síncronos e assíncronos.
B) A arbitragem do barramento é necessária para resolver conflitos na utilização do barramento.
C) O "clock" atua como uma referência de tempo para todas os sinais de um barramento síncrono.
D) O barramento de controle transporta voltagem às unidades do sistema.
E) USB, PCI e AGP são exemplos de barramentos.
= D | Gabarito **oficial definitivo** da CETAP. O barramento de **controle** leva **sinais de comando** (leitura, escrita, interrupção, clock), e não energia. Quem leva a energia são as **linhas de alimentação**.
:::

### Mais questões da CETAP sobre este tema (TEC Concursos)

Estas não estão transcritas aqui (os termos do TEC não permitem), mas você pode resolvê-las no TEC, com gabarito e comentários:

| Tema | Questões |
|---|---|
| Memórias (volátil, RAM, ROM, cache, DDR) | [#2409170](https://www.tecconcursos.com.br/questoes/2409170) SEMAS-PA 2023 · [#1863826](https://www.tecconcursos.com.br/questoes/1863826) PGE-PA 2021 · [#2409169](https://www.tecconcursos.com.br/questoes/2409169) SEMAS-PA 2023 · [#777542](https://www.tecconcursos.com.br/questoes/777542) S. J. Pirabas 2016 · [#1298649](https://www.tecconcursos.com.br/questoes/1298649) Abaetetuba 2016 · [#791174](https://www.tecconcursos.com.br/questoes/791174) Ourém 2017 · [#1178414](https://www.tecconcursos.com.br/questoes/1178414) Ananindeua 2019 |
| Processador (32 x 64 bits, núcleos, famílias) | [#2409164](https://www.tecconcursos.com.br/questoes/2409164) SEMAS-PA 2023 · [#1905763](https://www.tecconcursos.com.br/questoes/1905763) AGE-PA 2022 · [#751236](https://www.tecconcursos.com.br/questoes/751236) DETRAN-RR 2010 · [#762126](https://www.tecconcursos.com.br/questoes/762126) Tailândia 2015 · [#3102901](https://www.tecconcursos.com.br/questoes/3102901) Castanhal 2024 |
| Von Neumann, CISC/RISC, barramentos | [#751224](https://www.tecconcursos.com.br/questoes/751224) DETRAN-RR 2010 · [#751161](https://www.tecconcursos.com.br/questoes/751161) DETRAN-RR 2010 · [#2409160](https://www.tecconcursos.com.br/questoes/2409160) SEMAS-PA 2023 · [#602471](https://www.tecconcursos.com.br/questoes/602471) ALERR 2010 |
| Placa-mãe (rede on-board, boot, fonte) | [#2409166](https://www.tecconcursos.com.br/questoes/2409166) SEMAS-PA 2023 · [#2409167](https://www.tecconcursos.com.br/questoes/2409167) SEMAS-PA 2023 · [#2409168](https://www.tecconcursos.com.br/questoes/2409168) SEMAS-PA 2023 |

## Referências {- .referencias}

1. STALLINGS, William. *Arquitetura e Organização de Computadores*. 10. ed. São Paulo: Pearson, 2017. Caps. 3 (barramentos), 4 (cache), 5 (memória interna), 14 (estrutura do processador) e 15 (RISC).
2. TANENBAUM, Andrew S.; AUSTIN, Todd. *Organização Estruturada de Computadores*. 6. ed. São Paulo: Pearson, 2013. Cap. 2 — Organização de sistemas de computadores.
3. FUNDAÇÃO CETAP. *Concurso Público nº 001/2009 do DETRAN-RR*: prova objetiva do cargo Técnico em Atividade Administrativa – Técnico em Rede de Computador, aplicada em 11 abr. 2010, e gabarito oficial definitivo. Prova: <https://www.estudegratis.com.br/images/provas/15587-cetap-2010-detran-rr-tecnico-em-informatica-prova.pdf>. Gabarito: <https://www.estudegratis.com.br/images/provas/15587-cetap-2010-detran-rr-tecnico-em-informatica-gabarito.pdf>. Acesso em: 11 out. 2026.
4. FUNDAÇÃO CETAP. *Concurso Público nº 001/2009 da Assembleia Legislativa do Estado de Roraima*: prova objetiva do cargo Técnico em Informática, aplicada em 4 abr. 2010, e gabarito oficial definitivo. Prova: <https://www.estudegratis.com.br/images/provas/15602-cetap-2010-al-rr-tecnico-em-informatica-prova.pdf>. Gabarito: <https://www.estudegratis.com.br/images/provas/15602-cetap-2010-al-rr-tecnico-em-informatica-gabarito.pdf>. Acesso em: 11 out. 2026.
