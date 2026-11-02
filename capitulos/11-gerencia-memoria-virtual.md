---
capitulo: 11
titulo: Gerência de Memória e Memória Virtual
edital: Seg 12/10 · Item 3 — Gerência de memória e memória virtual: segmentação e paginação
lead: Como o sistema operacional reparte a memória RAM entre os programas, o que é memória virtual e como funcionam a paginação, a segmentação e o swapping. Inclui a conta de páginas que a CETAP cobra.
---

> [!DICA]
> A CETAP cobra este tema em concursos do Pará de 2021 a 2023 de três jeitos: **conta de páginas** pelos bits do endereço, **page fault** e **nomes trocados** (chamar memória virtual de "time sharing" ou "batch"). As seções com ★ são essas.

## Para que serve a gerência de memória

A memória principal (RAM) é pequena e é disputada por vários programas ao mesmo tempo. A **gerência de memória** é a parte do sistema operacional que:[^1][^2]

- sabe **quais partes da memória estão livres** e quais estão ocupadas;
- **aloca** memória para um processo quando ele começa e **libera** quando termina;
- **protege** cada processo, para um não ler nem estragar a área do outro;
- move dados entre a **RAM e o disco** quando a RAM não basta.

> [!SIMPLES]
> Pense na RAM como as **mesas de um restaurante**. O gerente (sistema operacional) decide quem senta onde, impede que um cliente mexa no prato do outro e, quando lota, manda alguém esperar lá fora (disco) até vagar lugar.

### Endereço lógico e endereço físico

- **Endereço lógico (ou virtual)**: o endereço que o **programa** enxerga.
- **Endereço físico (ou real)**: a posição **verdadeira** na RAM.
- Quem traduz um no outro, durante a execução, é um circuito do processador chamado **MMU** (*Memory Management Unit*, unidade de gerência de memória).[^1][^3]

> [!SIMPLES]
> O programa pensa que está na "mesa 5". A MMU sabe que a "mesa 5" dele é, na verdade, a mesa 37 do salão. O programa nunca precisa saber o número real.

## Alocação contígua e fragmentação

Nos sistemas mais simples, cada programa ocupa **um bloco único e seguido** (contíguo) da memória.[^2]

| Tipo | Como funciona | Problema |
|---|---|---|
| **Alocação contígua simples** | Um programa por vez na memória (monoprogramação) | Desperdiça memória e processador |
| **Partições fixas** | Memória dividida em pedaços de tamanho fixo, definidos antes | **Fragmentação interna** |
| **Partições variáveis (dinâmicas)** | Cada programa recebe exatamente o tamanho de que precisa | **Fragmentação externa** |

- **Fragmentação interna**: sobra espaço **dentro** da área entregue ao processo (ele recebeu mais do que usa).
- **Fragmentação externa**: sobram **buracos pequenos entre** as áreas ocupadas. Somados, dariam espaço, mas nenhum sozinho cabe o programa.[^1][^2]

> [!SIMPLES]
> - **Interna**: você pediu uma mesa de 4 lugares e sentou sozinho. Sobram 3 cadeiras **na sua mesa**.
> - **Externa**: há 3 cadeiras vagas espalhadas pelo salão, mas nenhuma mesa inteira livre para um grupo de 3.

Para escolher onde colocar um programa nas partições variáveis, há três estratégias:[^2]

| Estratégia | Escolhe a área livre… |
|---|---|
| **First-fit** (primeira escolha) | **primeira** que couber |
| **Best-fit** (melhor escolha) | **menor** que couber (sobra o mínimo) |
| **Worst-fit** (pior escolha) | **maior** de todas |

> [!PEGADINHA]
> "Best-fit" **não** é o mais rápido: precisa olhar a lista toda para achar o menor espaço. O mais rápido costuma ser o **first-fit**.[^2]

## Swapping

**Swapping** é tirar um processo **inteiro** da RAM, gravá-lo no disco (área de *swap*) e depois trazê-lo de volta para continuar. Serve para caber mais processos do que a RAM aguenta.[^1][^2]

- Saída para o disco: *swap out*. Volta para a RAM: *swap in*.
- O processo pode voltar para **outro lugar** da RAM; por isso precisa de tradução de endereços (MMU).[^2]
- Custa caro: o disco é muito mais lento que a RAM.

> [!SIMPLES]
> É mandar uma mesa inteira de clientes esperar lá fora para dar lugar a outra, e depois chamá-los de volta. Funciona, mas a ida e volta é demorada.

> [!PEGADINHA]
> Swapping mexe com o **processo inteiro**. Paginação mexe com **pedaços** (páginas). Os sistemas modernos fazem o "swap" em nível de **página**, mas, na prova, "swapping" é a troca do processo inteiro entre RAM e disco.[^1]

## Memória virtual {.cai}

**Memória virtual** é a técnica que permite executar programas **maiores que a RAM** disponível. O sistema usa a RAM **e o disco** juntos, como se fossem uma memória só, e mantém na RAM **apenas as partes do programa que estão sendo usadas**.[^1][^2][^3]

Características que caem:

- cada processo tem seu **espaço de endereçamento virtual**, que pode ser **maior que a memória física**;
- a tradução de endereço virtual para físico é feita pela **MMU**, durante a execução;
- é implementada por **paginação**, **segmentação** ou **segmentação com paginação**;[^2]
- só uma **parte** do programa precisa estar na RAM (o resto fica no disco).

> [!SIMPLES]
> Imagine estudar com um livro de 1.000 páginas numa mesa onde só cabem 10. Você deixa na mesa só as 10 que está lendo e guarda o resto na estante. Quando precisa de outra, troca. Para você, parece que o livro inteiro está à mão. A **mesa é a RAM**, a **estante é o disco**.

> [!CAI]
> A CETAP (SEPLAD-PA 2021) pediu o nome da técnica que **divide a memória em segmentos ou páginas** para rodar programas maiores que a RAM, e colocou como alternativas erradas **time sharing**, **batch** e **barramento**. A resposta é **memória virtual**. Time sharing e batch são **modos de processamento** (Cap. 1); barramento é **hardware** (Cap. 5).[^4]

## Paginação {.cai}

Na **paginação**, a memória virtual é dividida em blocos de **mesmo tamanho**, chamados **páginas**. A memória física é dividida em blocos **do mesmo tamanho**, chamados **molduras** (*frames* ou quadros).[^1][^2]

- Cada página do processo pode ir para **qualquer moldura livre**, sem precisar ficar em sequência.
- A **tabela de páginas** guarda, para cada página, **em qual moldura ela está** e se ela está ou não na RAM (bit de validade/presença).[^1]
- Como as páginas têm tamanho fixo, **não há fragmentação externa**. Pode haver **fragmentação interna** na última página do processo.[^1][^2]

> [!SIMPLES]
> O programa é picotado em **folhas do mesmo tamanho** (páginas). A RAM tem **gavetas desse mesmo tamanho** (molduras). Qualquer folha cabe em qualquer gaveta. Uma **ficha** (tabela de páginas) anota qual folha está em qual gaveta.

### Como o endereço é dividido

O endereço virtual é dividido em duas partes:[^1]

| Parte | Para que serve |
|---|---|
| **Número da página** (bits mais à esquerda) | Diz **qual página** é. É usado para consultar a tabela de páginas |
| **Deslocamento** (*offset*, bits mais à direita) | Diz **qual byte dentro da página**. Não muda na tradução |

### A conta que a CETAP cobra

Se o endereço tem **n bits** e a página tem **2^d bytes**:[^1]

- o **deslocamento** usa **d bits**;
- o **número da página** usa **n − d bits**;
- **quantidade de páginas = 2^(n − d)**;
- **tamanho do espaço virtual = 2^n bytes**.

> [!EXEMPLO]
> **Endereço de 32 bits, página de 4 KB.**
> - 4 KB = 4 × 1024 = 4096 = **2^12** → deslocamento de **12 bits**.
> - Número da página: 32 − 12 = **20 bits**.
> - Quantidade de páginas: 2^20 = **1.048.576** (cerca de 1 milhão).

> [!EXEMPLO]
> **Endereço de 16 bits, 64 páginas. Qual o tamanho da página?**
> - 64 = **2^6** → o número da página usa **6 bits**.
> - Deslocamento: 16 − 6 = **10 bits**.
> - Tamanho da página: 2^10 = **1024 bytes = 1 KB**.

> [!SIMPLES]
> Os bits do endereço são divididos entre "**qual página**" e "**qual posição dentro da página**". Quanto **maior a página**, **mais bits** vão para a posição e **menos páginas** existem. Decore as potências de 2: 2^10 = 1 K, 2^12 = 4 K, 2^16 = 64 K, 2^20 = 1 M.

> [!PEGADINHA]
> A **moldura** tem **o mesmo tamanho** da página. Se a questão diz "página de 2 KB", a moldura também tem 2 KB. Se o número de molduras for pedido, a conta usa o **tamanho da RAM**: molduras = RAM ÷ tamanho da página.[^1]

### Page fault (falha de página) {.cai}

**Page fault** acontece quando o programa acessa uma página que **não está na RAM** (a tabela marca a página como ausente). O que ocorre:[^1][^2]

1. a MMU percebe que a página não está carregada e gera uma **interrupção** (exceção) para o sistema operacional;
2. o SO procura a página **no disco**;
3. se não houver moldura livre, escolhe uma página para **sair** (algoritmo de substituição);
4. carrega a página pedida, **atualiza a tabela de páginas**;
5. a instrução que falhou é **executada de novo**.

> [!SIMPLES]
> Você foi à mesa buscar a página 300 do livro e ela não estava lá: está na estante. Isso é a "falha de página". Não é erro do programa: é só o aviso de "vai buscar no disco". O problema é que buscar no disco é lento.

> [!PEGADINHA]
> **Page fault não é erro grave nem travamento.** É um evento **normal** da memória virtual. Também não significa "memória cheia": significa "página **não está na RAM**".[^1]

### TLB

Consultar a tabela de páginas na RAM a cada acesso deixaria tudo lento. Por isso a MMU tem uma pequena memória muito rápida, a **TLB** (*Translation Lookaside Buffer*), que guarda as **traduções mais recentes** de página para moldura.[^1][^3]

> [!SIMPLES]
> A TLB é uma "cola" com os endereços que você mais usa, para não ter que abrir a ficha completa toda hora.

### Algoritmos de substituição de páginas

Quando a RAM está cheia e ocorre page fault, alguma página precisa sair. Os algoritmos mais cobrados:[^1][^2]

| Algoritmo | Quem sai | Observação |
|---|---|---|
| **Ótimo** | A página que **vai demorar mais** para ser usada de novo | Melhor resultado, mas **impossível** na prática (exige prever o futuro). Serve de comparação |
| **FIFO** | A página **mais antiga** na memória | Simples. Pode sofrer a **anomalia de Belady** |
| **LRU** (*Least Recently Used*) | A página **usada há mais tempo** | Boa aproximação do ótimo. Custa caro em hardware |
| **NRU** (*Not Recently Used*) | Uma página **não usada recentemente** (usa os bits R e M) | Simples e razoável |
| **Segunda chance / Relógio** | FIFO, mas **poupa** a página que foi usada (bit R = 1) | Melhora o FIFO |

- **Anomalia de Belady**: no FIFO, **aumentar o número de molduras pode aumentar** o número de page faults.[^1]
- **Thrashing**: o sistema passa **mais tempo trocando páginas** do que executando os programas. Acontece quando há processos demais para pouca RAM.[^1][^2]

> [!SIMPLES]
> - **FIFO**: sai quem chegou primeiro, mesmo que esteja sendo usado.
> - **LRU**: sai quem está **parado há mais tempo**.
> - **Thrashing**: a mesa é tão pequena que você passa a noite trocando páginas com a estante e não lê nada.

## Segmentação

Na **segmentação**, o programa é dividido em **segmentos de tamanhos diferentes**, conforme a **lógica do programa**: código, dados, pilha, uma função, um vetor.[^1][^2]

- O endereço é formado por **número do segmento + deslocamento**.
- A **tabela de segmentos** guarda, para cada segmento, a **base** (onde começa na RAM) e o **limite** (tamanho).
- Se o deslocamento passar do limite, o hardware gera erro (é uma forma de **proteção**).
- Como os segmentos têm tamanhos diferentes, há **fragmentação externa**, e **não** há fragmentação interna.[^1][^2]
- Facilita **compartilhar** e **proteger** partes do programa (por exemplo, código somente leitura).

> [!SIMPLES]
> Em vez de picotar o livro em folhas iguais, você separa por **capítulos**: cada capítulo é um segmento, com o tamanho que tiver. Fica mais "natural" para o programador, mas os capítulos de tamanhos diferentes deixam buracos na estante.

### Segmentação com paginação

Combina as duas: o programa é dividido em **segmentos**, e **cada segmento é dividido em páginas**. Junta a visão lógica da segmentação com a ausência de fragmentação externa da paginação.[^1][^2]

## Paginação × segmentação {.cai}

| | **Paginação** | **Segmentação** |
|---|---|---|
| Tamanho dos blocos | **Fixo** (páginas iguais) | **Variável** (segmentos diferentes) |
| Quem define a divisão | O **sistema/hardware** | A **lógica do programa** |
| O programador enxerga? | **Não** (transparente) | **Sim** |
| Fragmentação | **Interna** | **Externa** |
| Tabela | Tabela de **páginas** (página → moldura) | Tabela de **segmentos** (base e limite) |
| Endereço | Página + deslocamento | Segmento + deslocamento |

> [!SIMPLES]
> Macete: **P**aginação = **P**edaços **P**adronizados (iguais), fragmentação **interna**. **S**egmentação = **S**ignificado (cada parte tem um sentido lógico), tamanhos variados, fragmentação **externa**.

> [!PEGADINHA]
> - "Na paginação ocorre fragmentação externa." **Errado**: é **interna**.[^1]
> - "Na segmentação os blocos têm tamanho fixo." **Errado**: são **variáveis**.
> - "Memória virtual elimina a necessidade de RAM." **Errado**: a parte em uso **precisa estar na RAM**.

## Revisão rápida {- .colunas}

- Gerência de memória: aloca, libera, protege e troca entre RAM e disco.
- Endereço lógico (programa) × físico (RAM); quem traduz é a **MMU**.
- Fragmentação **interna**: sobra dentro do bloco. **Externa**: buracos entre blocos.
- First-fit = primeira que cabe; best-fit = menor que cabe; worst-fit = maior.
- **Swapping**: processo **inteiro** vai para o disco e volta.
- **Memória virtual**: roda programas **maiores que a RAM**, usando o disco.
- Paginação: **páginas** (virtual) e **molduras** (física) do **mesmo tamanho**.
- Nº de páginas = **2^(bits do endereço − bits do deslocamento)**.
- 4 KB = 2^12; endereço de 32 bits com página de 4 KB → **2^20 páginas**.
- **Page fault**: página **não está na RAM**; SO busca no disco e repete a instrução.
- **TLB**: cache das traduções recentes.
- FIFO (mais antiga), LRU (usada há mais tempo), Ótimo (impossível na prática).
- **Belady**: no FIFO, mais molduras podem dar **mais** faltas.
- **Thrashing**: mais tempo trocando páginas do que executando.
- Segmentação: tamanhos **variáveis**, base e limite, fragmentação **externa**.

## Flashcards {- .flashcards}

- Quem traduz endereço lógico em físico? :: A **MMU** (unidade de gerência de memória)
- O que é memória virtual? :: Técnica que usa **RAM + disco** para executar programas **maiores que a RAM**
- Swapping move o quê? :: O **processo inteiro** entre RAM e disco
- Páginas e molduras têm tamanhos… :: **Iguais**
- Fragmentação da paginação :: **Interna**
- Fragmentação da segmentação :: **Externa**
- Fórmula do número de páginas :: **2^(n − d)**, com n = bits do endereço e d = bits do deslocamento
- Página de 4 KB usa quantos bits de deslocamento? :: **12** (2^12 = 4096)
- O que é page fault? :: Acesso a uma página que **não está na RAM**
- Depois do page fault, a instrução… :: É **executada de novo**
- O que é a TLB? :: Cache rápido das **traduções de página** mais recentes
- Algoritmo que tira a página usada há mais tempo :: **LRU**
- Anomalia de Belady :: No **FIFO**, mais molduras podem gerar **mais** page faults
- Thrashing :: Sistema gasta mais tempo **trocando páginas** do que executando
- Tabela de segmentos guarda… :: **Base** e **limite** de cada segmento

## Questões de fixação {-}

::: questao
Em um sistema com endereço virtual de 32 bits e páginas de 4 KB, o número de páginas do espaço de endereçamento virtual é:
A) 2^12
B) 2^16
C) 2^20
D) 2^22
E) 2^32
= C | 4 KB = 2^12 → 12 bits de deslocamento. Sobram 32 − 12 = 20 bits para o número da página: 2^20 páginas.
:::

::: questao
Um sistema usa endereços de 16 bits e divide o espaço virtual em 32 páginas. O tamanho de cada página é:
A) 512 bytes
B) 1 KB
C) 2 KB
D) 4 KB
E) 32 KB
= C | 32 = 2^5 → 5 bits para a página. Deslocamento: 16 − 5 = 11 bits → 2^11 = 2048 bytes = 2 KB.
:::

::: questao
A técnica que permite executar programas maiores que a memória principal, mantendo nela apenas as partes em uso e o restante em disco, é chamada de:
A) time sharing
B) processamento batch
C) barramento
D) memória virtual
E) memória cache
= D | É a definição de memória virtual. Time sharing e batch são modos de processamento; barramento é hardware; cache acelera o acesso, mas não aumenta o espaço.
:::

::: questao
Sobre paginação e segmentação, assinale a alternativa CORRETA.
A) Na paginação, os blocos têm tamanhos variáveis definidos pelo programador.
B) Na segmentação ocorre fragmentação interna, e na paginação, fragmentação externa.
C) Na paginação, páginas e molduras têm o mesmo tamanho.
D) A tabela de páginas guarda a base e o limite de cada segmento.
E) A segmentação é transparente para o programador.
= C | Páginas e molduras são do mesmo tamanho. A e E descrevem o contrário; B inverte as fragmentações; base e limite são da tabela de segmentos.
:::

::: questao
Quando um processo tenta acessar uma página que não está carregada na memória principal, ocorre:
A) um deadlock.
B) um page fault, e o sistema operacional busca a página no disco.
C) o encerramento imediato do processo.
D) um thrashing, obrigatoriamente.
E) a desfragmentação do disco.
= B | Page fault é um evento normal: o SO traz a página do disco e repete a instrução. Thrashing só ocorre se as faltas forem excessivas.
:::

::: questao
O algoritmo de substituição de páginas que escolhe para sair a página que está há mais tempo sem ser utilizada é o:
A) FIFO
B) Ótimo
C) LRU
D) Round-Robin
E) Best-fit
= C | LRU = Least Recently Used. FIFO tira a mais antiga na memória (mesmo que usada); Round-Robin é escalonamento; best-fit é alocação.
:::

::: questao
A situação em que o aumento do número de molduras provoca aumento no número de falhas de página, observada no algoritmo FIFO, é chamada de:
A) thrashing
B) anomalia de Belady
C) fragmentação externa
D) swapping
E) working set
= B | É a anomalia de Belady. Thrashing é excesso de troca de páginas por falta de memória.
:::

::: questao
Sobre swapping, é CORRETO afirmar:
A) Transfere processos inteiros entre a memória principal e o disco.
B) Só pode ser usado em sistemas monoprogramados.
C) Elimina a necessidade de tradução de endereços.
D) É mais rápido que manter o processo na RAM.
E) É sinônimo de memória cache.
= A | Swapping leva o processo inteiro para o disco e o traz de volta, possivelmente em outro endereço, o que exige tradução.
:::

::: questao
Em relação à fragmentação de memória, assinale a alternativa CORRETA.
A) Fragmentação interna é o espaço livre entre partições ocupadas.
B) A alocação por partições fixas causa fragmentação interna.
C) A paginação causa fragmentação externa.
D) A segmentação não causa nenhum tipo de fragmentação.
E) Fragmentação externa é o espaço que sobra dentro da partição alocada.
= B | Partição fixa maior que o processo deixa sobra dentro dela (interna). A e E trocam os conceitos.
:::

## Questões da CETAP no TEC Concursos {-}

Estas não estão transcritas aqui (os termos do TEC não permitem), mas você pode resolvê-las no TEC, com gabarito e comentários:

| Tema | Questões |
|---|---|
| Paginação: número de páginas e tamanho da página pelos bits | [#1905765](https://www.tecconcursos.com.br/questoes/1905765) AGE-PA 2022 · [#1992124](https://www.tecconcursos.com.br/questoes/1992124) JUCEPA 2021 |
| Gerência de memória (paginação, memória virtual) | [#2518716](https://www.tecconcursos.com.br/questoes/2518716) SEMAS-PA 2023 · [#1992125](https://www.tecconcursos.com.br/questoes/1992125) JUCEPA 2021 |
| Page fault | [#2062357](https://www.tecconcursos.com.br/questoes/2062357) CRF-PA 2021 |
| Memória virtual × time sharing, batch e barramento | [#1938080](https://www.tecconcursos.com.br/questoes/1938080) SEPLAD-PA 2021 |

## Referências {- .referencias}

1. TANENBAUM, Andrew S.; BOS, Herbert. *Sistemas Operacionais Modernos*. 4. ed. São Paulo: Pearson, 2016. Cap. 3 — Gerenciamento de memória.
2. MACHADO, Francis B.; MAIA, Luiz Paulo. *Arquitetura de Sistemas Operacionais*. 5. ed. Rio de Janeiro: LTC, 2013. Caps. 9 (Gerência de memória) e 10 (Gerência de memória virtual).
3. SILBERSCHATZ, Abraham; GALVIN, Peter B.; GAGNE, Greg. *Operating System Concepts*. 10. ed. Hoboken: Wiley, 2018. Caps. 9 (Main Memory) e 10 (Virtual Memory).
4. FUNDAÇÃO CETAP. Concurso SEPLAD-PA 2021, questão de Sistemas Operacionais. TEC Concursos, questão nº 1938080. Disponível em: <https://www.tecconcursos.com.br/questoes/1938080>.
