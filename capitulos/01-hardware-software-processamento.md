---
capitulo: 1
titulo: Hardware, Software e Modalidades de Processamento
edital: Seg 05/10 · Item 1 — Hardware e Software: conceitos e características; batch, time sharing e real time
lead: Só o que o tema pede: conceito e características de hardware e software, e as três modalidades de processamento. Quadros azuis marcam o que mais cai; vermelhos, as pegadinhas.
---

## Hardware

**Hardware é a parte física do computador**: tudo o que é tangível — processador, memória, placa-mãe, disco, teclado, monitor, cabos.[^4]

**Características:**

- É **tangível** (pode ser tocado).
- Sozinho **não faz nada**: precisa de software para funcionar.
- Sofre **desgaste físico** e pode quebrar; conserto é por troca ou reparo de peça.
- Organizado em grandes blocos: **processador (CPU)**, **memória**, **armazenamento** e **dispositivos de entrada e saída**, ligados por **barramentos**.[^4]

> [!DICA]
> O funcionamento interno de cada bloco (registradores, barramento, interfaces) é o item 2 do edital e tem dia próprio no cronograma.

## Software

**Software é a parte lógica**: os programas, ou seja, conjuntos de instruções que dizem ao hardware o que fazer.[^4]

**Características:**

- É **intangível**: não se toca no software, apenas na mídia onde ele está gravado.
- **Depende do hardware** para ser executado.
- Não sofre desgaste físico; falha por **erro de projeto ou de programação** (bug) e é corrigido por **atualização**.

### Classificação por finalidade

| Tipo | O que é | Exemplos |
|---|---|---|
| Software básico (de sistema) | Gerencia o hardware e dá base para os outros programas | Sistema operacional (Windows, Linux), drivers |
| Utilitário | Manutenção, proteção e otimização do sistema | Antivírus, compactador, desfragmentador, backup |
| Aplicativo | Resolve tarefas do usuário final | Word, Excel, navegador, sistema de folha de pagamento |

### Firmware

**Firmware é software gravado diretamente em um chip do hardware** (memória ROM/flash). Fica "entre" hardware e software e controla o equipamento em baixo nível.[^4]

> [!CAI]
> **BIOS / UEFI** é o exemplo clássico de firmware: é o primeiro programa executado ao ligar o computador — faz o **POST** (teste dos componentes) e carrega o sistema operacional (boot).[^5] Nos PCs atuais, o UEFI substituiu a BIOS tradicional, mas as provas ainda usam os dois nomes.

> [!PEGADINHA]
> **Driver** não é firmware: driver é software instalado no sistema operacional para que ele saiba conversar com um dispositivo.

## Hardware x Software

| | Hardware | Software |
|---|---|---|
| Natureza | Física, tangível | Lógica, intangível |
| Falha por | Desgaste, defeito físico | Erro de projeto (bug) |
| Correção | Troca ou reparo da peça | Atualização, nova versão |
| Exemplos | CPU, memória, SSD, teclado | Windows, Word, antivírus |
| Meio-termo | Firmware (software gravado no hardware) | |

## Modalidades de processamento

Esta classificação vem da literatura de sistemas operacionais — a referência mais usada pelas bancas brasileiras é Machado & Maia.[^1] Os sistemas **multiprogramáveis** (que mantêm vários programas na memória ao mesmo tempo) são classificados pela forma como as aplicações são processadas:

- **Batch** (em lote)
- **Time sharing** (tempo compartilhado)
- **Real time** (tempo real)

Um mesmo sistema pode suportar mais de um tipo — o Windows, por exemplo, é de tempo compartilhado e também agenda tarefas em lote.[^1]

> [!CAI]
> Quase toda questão se resume a: **"dada uma característica ou um exemplo, qual é a modalidade?"** Decore a palavra-chave de cada uma:
> - Batch → **sem interação**
> - Time sharing → **fatia de tempo**, interação
> - Real time → **limite rígido de tempo** (prazo)

## Processamento batch (em lote)

Os trabalhos (*jobs*) são **agrupados e executados em sequência, sem interação do usuário** durante a execução. Tudo que o programa precisa é preparado antes; o resultado é entregue no final.[^1][^2]

- Foram os primeiros sistemas multiprogramáveis (era dos cartões perfurados e fitas).[^2]
- Entrada e saída de dados feitas por **memória secundária** (arquivos em disco/fita), não pelo usuário.[^1]
- Ponto forte: **bom aproveitamento do processador** e alta vazão (*throughput*).
- Ponto fraco: **tempo de resposta longo** — você só vê o resultado no fim do lote.[^1]

> [!EXEMPLO]
> Folha de pagamento, compensação bancária noturna, geração de boletos em massa, rotinas de backup agendadas, relatórios de fim de mês, cálculos científicos longos.

## Time sharing (tempo compartilhado)

O tempo do processador é dividido em pequenos intervalos chamados **fatias de tempo** (*time slice* ou *quantum*). Cada programa usa a CPU durante sua fatia; se não terminar, é **interrompido pelo sistema operacional** e volta para a fila, aguardando a próxima fatia.[^1]

- A troca é tão rápida que cada usuário tem a **impressão de que o sistema é dedicado exclusivamente a ele**.[^1]
- É **interativo**: o usuário conversa com o sistema por terminal (teclado, vídeo, mouse). Por isso também é chamado de **sistema on-line**.[^1]
- Objetivo: **tempo de resposta curto** para vários usuários ou programas.[^3]

> [!EXEMPLO]
> Vários terminais ligados a um mainframe; os sistemas operacionais de desktop atuais (Windows, Linux, macOS) rodando navegador, Word e música "ao mesmo tempo".

> [!PEGADINHA]
> Time sharing **funciona com uma única CPU**. Os programas parecem simultâneos, mas não estão em paralelo de verdade. Não confunda com **multiprocessamento** (vários processadores).[^2]

## Real time (tempo real)

São implementados de forma parecida com os de tempo compartilhado; a diferença está nos **tempos de resposta exigidos**. Em tempo real, a aplicação tem **limites rígidos de tempo** (*deadlines*): **o resultado só é correto se vier dentro do prazo**.[^1][^6]

- **Não existe a ideia de fatia de tempo**: um programa usa o processador o tempo que precisar, ou até aparecer outro **de maior prioridade**.[^1]
- A prioridade é definida pela própria aplicação, não pelo sistema operacional.[^1]
- O que importa é ser **previsível (determinístico)**.[^6]

### Tipos

| Tipo | Se perder o prazo… | Exemplos |
|---|---|---|
| Crítico (hard / rígido) | Falha grave, risco à vida ou ao patrimônio | Airbag, freio ABS, marca-passo, controle de tráfego aéreo, usinas nucleares e termoelétricas, refinarias |
| Não crítico (soft / brando) | Só perde qualidade | Streaming de vídeo, VoIP, jogos on-line |

> [!PEGADINHA]
> - Tempo real **não significa "muito rápido"**; significa **cumprir o prazo sempre**.[^6] Um sistema lento mas sempre dentro do prazo é tempo real.
> - Tempo real ≠ on-line. On-line é interação (time sharing); tempo real é garantia de prazo.

## Comparativo final

| | Batch | Time sharing | Real time |
|---|---|---|---|
| Interação do usuário | Não | Sim (on-line) | Com o ambiente (sensores) |
| Uso da CPU | Job até terminar ou fazer E/S | Fatia de tempo (quantum) | Até terminar ou chegar prioridade maior |
| Prioriza | Vazão (throughput) | Tempo de resposta curto | Cumprir prazo (deadline) |
| Ponto fraco | Resposta demorada | Troca entre programas tem custo | Projeto complexo |
| Exemplo | Folha de pagamento | Windows/Linux no desktop | Controle de tráfego aéreo |

## Revisão rápida {- .colunas}

- Hardware = físico, tangível; software = lógico, intangível.
- Hardware sozinho não funciona; software depende do hardware.
- Hardware falha por desgaste; software, por bug.
- Firmware = software gravado no hardware (BIOS/UEFI).
- SO e drivers = software básico; antivírus = utilitário.
- Batch = sem interação, alta vazão, resposta lenta.
- Time sharing = fatia de tempo, interativo, on-line.
- Time sharing funciona com 1 CPU.
- Real time = prazo rígido; previsível, não "rápido".
- Real time não tem fatia de tempo; vale a prioridade.
- Hard = falha grave; soft = perde qualidade.

## Questões de fixação {-}

Clique na alternativa que você acha correta.

::: questao
Sobre hardware e software, é correto afirmar:
A) Software é a parte física do computador.
B) Hardware executa tarefas sem necessidade de software.
C) Hardware é a parte física e tangível; software é a parte lógica, formada por programas.
D) Software sofre desgaste físico com o uso.
E) O sistema operacional é um exemplo de hardware.
= C | Definição direta. Hardware não funciona sem software (B), e software não sofre desgaste físico (D).
:::

::: questao
Programa gravado em memória não volátil da placa-mãe, executado ao ligar o computador para testar componentes e iniciar o carregamento do sistema operacional. Trata-se de:
A) driver
B) firmware
C) utilitário
D) aplicativo
E) kernel
= B | BIOS/UEFI é firmware: software gravado no hardware, que faz o POST e o boot.
:::

::: questao
São, respectivamente, software básico, utilitário e aplicativo:
A) antivírus, Linux, Excel
B) Windows, compactador de arquivos, editor de texto
C) navegador, driver, BIOS
D) Excel, Windows, antivírus
E) driver, Word, desfragmentador
= B | SO = básico; compactador = utilitário; editor de texto = aplicativo.
:::

::: questao
Sistema em que os programas são submetidos em conjunto e executados sequencialmente, sem interação com o usuário, com entrada e saída por arquivos em disco:
A) tempo real
B) tempo compartilhado
C) batch
D) distribuído
E) monousuário interativo
= C | Ausência de interação + execução em lote = batch.
:::

::: questao
Nos sistemas de tempo compartilhado (time sharing):
A) não há interação entre usuário e sistema.
B) o processador é dividido em fatias de tempo, e um programa que não termina na sua fatia é interrompido e volta a aguardar.
C) um programa usa o processador até terminar, independentemente de outros.
D) é obrigatório haver mais de um processador.
E) o critério principal é cumprir prazos rígidos de resposta.
= B | Fatia de tempo (quantum) com interrupção pelo SO. D é falsa porque time sharing funciona com uma CPU; E descreve tempo real.
:::

::: questao
Por permitirem a interação do usuário com o sistema por meio de terminais, os sistemas de tempo compartilhado também são chamados de:
A) sistemas on-line
B) sistemas em lote
C) sistemas embarcados
D) sistemas críticos
E) sistemas off-line
= A | Interação via terminal = sistema on-line.
:::

::: questao
Em um sistema de tempo real, é correto afirmar que:
A) o principal objetivo é a máxima velocidade de processamento.
B) cada programa recebe uma fatia de tempo fixa do processador.
C) a resposta só é considerada correta se produzida dentro de um limite de tempo.
D) não há prioridade entre os processos.
E) é usado principalmente para folha de pagamento.
= C | Tempo real = cumprir o deadline. Não é "o mais rápido" (A), não usa fatia de tempo (B) e trabalha com prioridades (D).
:::

::: questao
Associe corretamente: (I) controle do airbag de um veículo; (II) processamento noturno da folha de pagamento; (III) vários usuários editando documentos em terminais de um mesmo servidor.
A) I-batch, II-tempo real, III-time sharing
B) I-tempo real, II-batch, III-time sharing
C) I-time sharing, II-batch, III-tempo real
D) I-tempo real, II-time sharing, III-batch
E) I-batch, II-time sharing, III-tempo real
= B | Airbag = tempo real crítico; folha = lote; vários usuários interativos = tempo compartilhado.
:::

::: questao
Uma transmissão de vídeo ao vivo que, ao atrasar alguns quadros, apenas perde qualidade de imagem, é exemplo de sistema de tempo real:
A) crítico (hard)
B) não crítico (soft)
C) em lote
D) determinístico rígido
E) off-line
= B | Perder o prazo só degrada a qualidade → soft real time.
:::

::: questao
Qual modalidade de processamento tem como principal desvantagem o tempo de resposta longo, já que o resultado só é obtido ao final da execução?
A) tempo real crítico
B) tempo compartilhado
C) batch
D) tempo real não crítico
E) interativo
= C | Batch tem boa vazão, mas resposta demorada.
:::

## Referências {- .referencias}

1. MACHADO, Francis B.; MAIA, Luiz Paulo. *Arquitetura de Sistemas Operacionais*. 5. ed. Rio de Janeiro: LTC, 2013. Cap. 2 — Tipos de Sistemas Operacionais.
2. TANENBAUM, Andrew S.; BOS, Herbert. *Sistemas Operacionais Modernos*. 4. ed. São Paulo: Pearson, 2016. Cap. 1 — Introdução (história dos sistemas operacionais).
3. SILBERSCHATZ, Abraham; GALVIN, Peter B.; GAGNE, Greg. *Operating System Concepts*. 10. ed. Hoboken: Wiley, 2018. Cap. 1 — Introduction.
4. STALLINGS, William. *Arquitetura e Organização de Computadores*. 10. ed. São Paulo: Pearson, 2017. Caps. 1 e 2.
5. UEFI FORUM. *UEFI Specifications*. Disponível em: <https://uefi.org/specifications>.
6. KOPETZ, Hermann; STEINER, Wilfried. *Real-Time Systems: Design Principles for Distributed Embedded Applications*. 3. ed. Cham: Springer, 2022. Cap. 1.
