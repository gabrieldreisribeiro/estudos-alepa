---
capitulo: 5
titulo: Arquitetura — Processador, Registradores, Memória e Barramento
edital: Qua 07/10 · Item 2 — Arquitetura: processador, registradores, memória e barramento
lead: Como o computador funciona por dentro, peça por peça, e o que a banca cobra de cada uma.
---

## Os blocos do computador

O modelo de **von Neumann** organiza o computador em: **processador (CPU)**, **memória principal**, **dispositivos de entrada e saída** e **barramentos** que ligam tudo. Instruções e dados ficam guardados na **mesma memória**.[^1][^2]

> [!SIMPLES]
> Pense numa cozinha: a **CPU** é o cozinheiro, a **memória** é a bancada onde ficam a receita e os ingredientes, e os **barramentos** são os caminhos por onde o cozinheiro pega e devolve as coisas. A receita (programa) e os ingredientes (dados) ficam **na mesma bancada**.

> [!PEGADINHA]
> Na arquitetura **Harvard**, instruções e dados ficam em **memórias separadas**, cada uma com seu barramento. Em von Neumann é **uma memória só**.[^2]

## Processador (CPU)

| Parte | O que faz |
|---|---|
| **Unidade de Controle (UC)** | **Busca** as instruções na memória, **decodifica** e **coordena** a execução, enviando sinais de controle |
| **Unidade Lógica e Aritmética (ULA)** | Faz as **contas** (soma, subtração…) e as **operações lógicas** (E, OU, NÃO, comparações) |
| **Registradores** | Memórias minúsculas e **muito rápidas** dentro da CPU |

Fonte: Stallings, cap. 14.[^1]

> [!SIMPLES]
> A **UC** é o **gerente**: lê a ordem e diz quem faz o quê. A **ULA** é a **calculadora**. Os **registradores** são o **rascunho** do processador, onde ele anota o que está usando naquele instante.

### Ciclo de instrução

Toda instrução passa por: **busca** (*fetch*) → **decodificação** (*decode*) → **execução** (*execute*). Depois o processador busca a próxima.[^1]

> [!SIMPLES]
> É como seguir uma receita: **ler** o próximo passo, **entender** o que ele pede e **fazer**. Depois, ler o passo seguinte, e assim por diante.

### Desempenho

- **Clock**: frequência do processador, medida em **hertz** (GHz = bilhões de ciclos por segundo).[^1]
- **Multicore**: vários **núcleos** num mesmo chip, que executam tarefas **em paralelo**.[^1]
- **Pipeline**: sobrepõe as etapas de várias instruções, como uma **linha de montagem**.[^1]

> [!SIMPLES]
> O **clock** é o "ritmo" do processador. Ter **mais núcleos** é como ter **mais cozinheiros** trabalhando ao mesmo tempo. O **pipeline** é começar a ler a próxima receita enquanto a anterior ainda está no forno.

### RISC x CISC

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

## Registradores

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

## Memória

### Hierarquia de memória

Do **mais rápido, caro e pequeno** ao **mais lento, barato e grande**:[^1]

**Registradores → Cache (L1, L2, L3) → Memória principal (RAM) → Memória secundária (SSD, HD)**

> [!SIMPLES]
> Quanto mais **perto do processador**, mais **rápida** e mais **cara** a memória, e por isso **menor**. É como guardar as coisas: o que você usa toda hora fica **no bolso** (registrador), depois **na mesa** (cache), **no armário** (RAM) e **no depósito** (HD).

### Tipos de memória

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

### Memória cache

A cache guarda **cópias dos dados mais usados** da RAM, perto do processador. Funciona por causa do **princípio da localidade**:[^1]

- **Temporal**: o que foi usado agora tende a ser usado **de novo em breve**.
- **Espacial**: o que está **perto** do que foi usado tende a ser usado em seguida.

**Acerto (hit)**: o dado estava na cache. **Falha (miss)**: precisa buscar na RAM.[^1]

> [!SIMPLES]
> A cache é a **gaveta de cima**: você deixa ali o que usa mais, para não ir ao armário toda hora. Se o que você precisa está na gaveta, é um **acerto**; se não está, é uma **falha** e você vai ao armário.

> [!DICA]
> Memória virtual, paginação e segmentação são de **Sistemas Operacionais** e têm dia próprio (Seg 12/10).

## Barramento

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

## Referências {- .referencias}

1. STALLINGS, William. *Arquitetura e Organização de Computadores*. 10. ed. São Paulo: Pearson, 2017. Caps. 3 (barramentos), 4 (cache), 5 (memória interna), 14 (estrutura do processador) e 15 (RISC).
2. TANENBAUM, Andrew S.; AUSTIN, Todd. *Organização Estruturada de Computadores*. 6. ed. São Paulo: Pearson, 2013. Cap. 2 — Organização de sistemas de computadores.
