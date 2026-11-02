---
capitulo: 13
titulo: Escalonamento de Processos, Multiprogramação e Multiprocessamento
edital: Ter 13/10 · Item 3 — Escalonamento de processos; multiprogramação e multiprocessamento
lead: Como o sistema operacional decide qual programa usa o processador e por quanto tempo, os algoritmos que caem (FCFS, SJF, prioridade, Round-Robin) com a conta do tempo de espera, e a diferença entre multiprogramação e multiprocessamento.
---

> [!DICA]
> Na CETAP (concursos do Pará, 2021 a 2023) apareceram: **multiprogramação × multiprocessamento**, **algoritmos de escalonamento** (Round-Robin, FCFS, SJF) e **fatia de tempo** (quantum). Essas seções têm ★.

## Processo e seus estados

**Processo** é um **programa em execução**: o código mais tudo o que ele precisa para rodar (dados, pilha, registradores, arquivos abertos).[^1][^2]

> [!SIMPLES]
> O **programa** é a receita de bolo guardada no caderno. O **processo** é o bolo **sendo feito**: tem forno ligado, ingredientes na mesa e uma etapa atual. A mesma receita pode virar vários bolos ao mesmo tempo (vários processos do mesmo programa).

Um processo passa por estes **estados**:[^1][^2][^3]

| Estado | O que significa |
|---|---|
| **Novo** (criação) | Está sendo criado |
| **Pronto** | Tem tudo para rodar e **espera a vez** no processador |
| **Execução** | Está **usando o processador** agora |
| **Espera** (bloqueado) | Aguarda um **evento** (fim de leitura do disco, tecla, dado da rede) |
| **Terminado** | Acabou |

Transições que caem:

- **Pronto → Execução**: o escalonador escolheu o processo.
- **Execução → Pronto**: o tempo dele acabou (**preempção**) ou chegou alguém mais prioritário.
- **Execução → Espera**: pediu algo lento (E/S) e precisa aguardar.
- **Espera → Pronto**: o evento aconteceu. Ele **não volta direto** para execução.[^1][^2]

> [!PEGADINHA]
> **Não existe** a transição **Espera → Execução** direta. Quando o evento acontece, o processo vai para **Pronto** e espera a vez de novo.[^1][^2]

- O sistema guarda as informações de cada processo no **PCB** (*Process Control Block*, bloco de controle do processo): estado, registradores, prioridade, memória, arquivos abertos.[^2][^3]
- **Troca de contexto**: salvar o PCB de um processo e carregar o de outro, para trocar quem usa a CPU. É **tempo perdido** (não faz trabalho útil).[^1][^2]

> [!SIMPLES]
> Troca de contexto é como trocar de tarefa no trabalho: você anota onde parou na tarefa A (PCB), guarda, e pega a tarefa B de onde ela tinha parado. Anotar e reabrir leva um tempinho.

## Monoprogramação, multiprogramação e multiprocessamento {.cai}

| Conceito | O que é |
|---|---|
| **Monoprogramação** (monotarefa) | **Um programa** na memória por vez. Enquanto ele espera E/S, a CPU fica **ociosa** |
| **Multiprogramação** (multitarefa) | **Vários programas na memória** ao mesmo tempo, revezando **um mesmo processador**. Quando um espera E/S, outro usa a CPU |
| **Multiprocessamento** | **Dois ou mais processadores** (ou núcleos) executando **ao mesmo tempo**, de verdade |

- Na multiprogramação com uma CPU, a execução é **concorrente** (revezamento rápido: parece simultâneo). No multiprocessamento, é **paralela** (simultânea de fato).[^1][^2]
- O objetivo da multiprogramação é **aproveitar melhor a CPU**, que não fica parada esperando E/S.[^2]

> [!SIMPLES]
> - **Multiprogramação**: **um cozinheiro** com várias panelas no fogão. Enquanto uma ferve, ele mexe a outra. Parece que faz tudo junto, mas faz uma coisa de cada vez, bem rápido.
> - **Multiprocessamento**: **vários cozinheiros** na mesma cozinha, cada um mexendo uma panela ao mesmo tempo.

### Tipos de multiprocessamento

| Classificação | Tipo | Características |
|---|---|---|
| Quanto à memória | **Fortemente acoplado** | Processadores **compartilham a mesma memória** e um só SO (ex.: PC com vários núcleos) |
| | **Fracamente acoplado** | Cada processador (ou computador) tem **sua própria memória**, ligados por rede (ex.: clusters, sistemas distribuídos) |
| Quanto às funções | **Simétrico (SMP)** | Todos os processadores são **iguais** e qualquer um executa o SO e os programas |
| | **Assimétrico** | Um processador **mestre** comanda; os outros (**escravos**) só executam o que ele manda |

*Fonte da tabela.*[^2][^3]

> [!PEGADINHA]
> - "Multiprogramação exige mais de um processador." **Errado**: basta **um**.
> - "Multiprocessamento é o mesmo que multiprogramação." **Errado**: multiprocessamento é **hardware** com vários processadores.
> - Um sistema pode ser **as duas coisas**: vários núcleos (multiprocessamento) e vários programas em cada um (multiprogramação).[^1][^2]

## Escalonamento: o que é e como se avalia

**Escalonamento** é a escolha, feita pelo **escalonador** (*scheduler*) do SO, de **qual processo pronto vai usar a CPU** e por quanto tempo. Quem efetivamente entrega a CPU ao processo escolhido é o **despachante** (*dispatcher*).[^1][^3]

Critérios para avaliar um algoritmo:[^2][^3]

| Critério | Significado | Queremos |
|---|---|---|
| **Utilização da CPU** | % do tempo em que a CPU trabalha | **Maior** |
| **Throughput** (vazão) | Processos concluídos por unidade de tempo | **Maior** |
| **Turnaround** | Tempo total do processo: da chegada ao fim | **Menor** |
| **Tempo de espera** | Tempo que passou na **fila de prontos** | **Menor** |
| **Tempo de resposta** | Tempo até a **primeira resposta** ao usuário | **Menor** |

> [!SIMPLES]
> Na fila do banco: **throughput** é quantas pessoas o caixa atende por hora; **tempo de espera** é quanto você ficou na fila; **turnaround** é quanto tempo você passou no banco, do começo ao fim.

### Preemptivo × não preemptivo {.cai}

- **Não preemptivo** (cooperativo): o processo **usa a CPU até terminar ou se bloquear**. O SO não o interrompe.
- **Preemptivo**: o SO **pode tirar a CPU** do processo (por fim da fatia de tempo ou por chegar alguém mais prioritário).[^1][^2]

> [!SIMPLES]
> **Não preemptivo**: quem pega o microfone só larga quando termina de falar. **Preemptivo**: tem um mediador que **corta o microfone** quando acaba o tempo.

## Algoritmos de escalonamento {.cai}

| Algoritmo | Como escolhe | Preemptivo? | Ponto de atenção |
|---|---|---|---|
| **FCFS / FIFO** (*First-Come, First-Served*) | Por **ordem de chegada** | **Não** | Processo longo na frente faz todos esperarem (**efeito comboio**) |
| **SJF** (*Shortest Job First*) | O de **menor tempo de execução** primeiro | Não (na forma básica) | Dá o **menor tempo médio de espera**; pode causar **starvation** dos longos; exige estimar o tempo |
| **SRTF** (*Shortest Remaining Time First*) | O de **menor tempo restante** | **Sim** | É o SJF preemptivo |
| **Prioridade** | O de **maior prioridade** | Pode ser os dois | **Starvation** dos de baixa prioridade; solução: **aging** (envelhecimento) |
| **Round-Robin (circular)** | **Fila circular**; cada um recebe uma **fatia de tempo (quantum)** | **Sim** | Próprio de **tempo compartilhado** (time sharing) |
| **Múltiplas filas** | Filas separadas por tipo (sistema, interativo, lote), cada uma com seu algoritmo | Sim | Usado em sistemas reais |

*Fonte da tabela.*[^1][^2][^3]

- **Starvation** (inanição): o processo **nunca** consegue a CPU, porque sempre aparece outro na frente.
- **Aging** (envelhecimento): **aumentar a prioridade** de quem espera muito, para evitar starvation.[^2][^3]

> [!SIMPLES]
> - **FCFS**: fila de padaria, por ordem de chegada.
> - **SJF**: "quem vai rapidinho passa na frente" (como o caixa rápido do mercado).
> - **Prioridade**: fila preferencial.
> - **Round-Robin**: rodízio no videogame: cada um joga **5 minutos** e passa o controle; se não terminou, volta para o fim da fila.

### O quantum no Round-Robin

- **Quantum muito grande**: o Round-Robin vira **FCFS** (ninguém é interrompido).
- **Quantum muito pequeno**: o sistema gasta muito tempo em **trocas de contexto**.[^1][^3]

> [!PEGADINHA]
> "Round-Robin não é preemptivo." **Errado**: ele **é** preemptivo (tira a CPU no fim do quantum). E "SJF garante que não haverá starvation" também é **errado**: os processos longos podem esperar para sempre.[^2][^3]

### Calculando o tempo médio de espera

> [!EXEMPLO]
> Três processos chegam no tempo 0, nesta ordem: **P1 = 24**, **P2 = 3**, **P3 = 3** (unidades de tempo).[^3]
>
> **FCFS** (ordem de chegada: P1, P2, P3)
> - P1 começa em 0 → espera **0**
> - P2 começa em 24 → espera **24**
> - P3 começa em 27 → espera **27**
> - Média: (0 + 24 + 27) ÷ 3 = **17**
>
> **SJF** (menores primeiro: P2, P3, P1)
> - P2 espera **0**, P3 espera **3**, P1 espera **6**
> - Média: (0 + 3 + 6) ÷ 3 = **3**
>
> **Round-Robin, quantum = 4**
> - P1 roda 0–4, P2 roda 4–7, P3 roda 7–10, P1 roda 10–30.
> - Espera: P1 = 10 − 4 = **6**; P2 = **4**; P3 = **7**
> - Média: 17 ÷ 3 ≈ **5,67**

> [!SIMPLES]
> Método para qualquer questão: **desenhe a linha do tempo** (diagrama de Gantt) e anote **quando cada processo começa**. Tempo de espera = **tempo na fila** = (quando terminou) − (quando chegou) − (quanto tempo rodou).

## Escalonamento e modos de processamento

| Modo (Cap. 1) | Algoritmo típico |
|---|---|
| **Batch** (lote) | FCFS, SJF (não precisa responder rápido ao usuário) |
| **Time sharing** | **Round-Robin** (fatia de tempo para cada usuário) |
| **Tempo real** | **Prioridade preemptiva** (tarefa crítica nunca espera) |

*Fonte da tabela.*[^2]

## Revisão rápida {- .colunas}

- Processo = **programa em execução**.
- Estados: novo, **pronto**, **execução**, **espera**, terminado.
- Espera → **Pronto** (nunca direto para execução).
- PCB guarda o contexto; troca de contexto = tempo sem trabalho útil.
- **Multiprogramação**: vários programas, **uma CPU** se revezando.
- **Multiprocessamento**: **vários processadores** ao mesmo tempo.
- Fortemente acoplado = memória compartilhada; fracamente = memórias separadas.
- SMP = processadores iguais; assimétrico = mestre/escravo.
- **Preemptivo**: o SO pode tirar a CPU.
- FCFS = ordem de chegada, não preemptivo, efeito comboio.
- **SJF** = menor job primeiro, **menor espera média**, risco de starvation.
- **Round-Robin** = fila circular com **quantum**, preemptivo, time sharing.
- Quantum grande → vira FCFS; pequeno → muita troca de contexto.
- Starvation se resolve com **aging**.

## Flashcards {- .flashcards}

- O que é processo? :: **Programa em execução**
- Processo em espera, quando o evento ocorre, vai para… :: **Pronto**
- Onde ficam os dados de controle do processo? :: No **PCB**
- Multiprogramação precisa de quantos processadores? :: **Um** basta
- Multiprocessamento é… :: **Dois ou mais processadores** executando ao mesmo tempo
- Fortemente acoplado :: Processadores **compartilham a memória**
- Algoritmo com menor tempo médio de espera :: **SJF**
- FCFS é preemptivo? :: **Não**
- Round-Robin é preemptivo? :: **Sim** (fim do quantum)
- Round-Robin com quantum enorme vira… :: **FCFS**
- Starvation :: Processo **nunca** recebe a CPU
- Solução para starvation :: **Aging** (aumentar a prioridade com o tempo de espera)
- Throughput :: Processos **concluídos por unidade de tempo**
- Turnaround :: Tempo **total**, da chegada ao término
- SJF preemptivo :: **SRTF**

## Questões de fixação {-}

::: questao
Sobre multiprogramação e multiprocessamento, assinale a alternativa CORRETA.
A) Multiprogramação exige obrigatoriamente dois ou mais processadores.
B) No multiprocessamento, dois ou mais processadores executam instruções simultaneamente.
C) Multiprogramação e multiprocessamento são sinônimos.
D) Na monoprogramação, vários programas ficam na memória ao mesmo tempo.
E) Multiprogramação impede que a CPU seja compartilhada.
= B | Multiprocessamento = vários processadores em paralelo. Multiprogramação funciona com uma única CPU revezando programas.
:::

::: questao
Um processo que está no estado de espera (bloqueado) e tem o evento que aguardava concluído passa para o estado:
A) execução
B) terminado
C) pronto
D) novo
E) suspenso em execução
= C | Ele volta para a fila de prontos e aguarda o escalonador. Não vai direto para execução.
:::

::: questao
O algoritmo de escalonamento que atribui a cada processo uma fatia de tempo (quantum) e, ao final dela, devolve o processo ao fim da fila é o:
A) FCFS
B) SJF
C) Round-Robin
D) Prioridade não preemptiva
E) FIFO
= C | Round-Robin (circular), típico de time sharing.
:::

::: questao
Três processos chegam juntos com tempos de execução P1 = 8, P2 = 4 e P3 = 2. Usando SJF, o tempo médio de espera é:
A) 2
B) 2,67
C) 4
D) 6,67
E) 8
= B | Ordem: P3 (espera 0), P2 (espera 2), P1 (espera 6). Média = 8 ÷ 3 ≈ 2,67.
:::

::: questao
Com os mesmos processos (P1 = 8, P2 = 4, P3 = 2) atendidos por FCFS na ordem P1, P2, P3, o tempo médio de espera é:
A) 2,67
B) 4
C) 6,67
D) 8
E) 14
= C | Esperas: P1 = 0, P2 = 8, P3 = 12. Média = 20 ÷ 3 ≈ 6,67.
:::

::: questao
A situação em que um processo de baixa prioridade nunca consegue usar o processador, e a técnica usada para evitá-la, são, respectivamente:
A) deadlock e preempção
B) starvation e aging
C) thrashing e swapping
D) starvation e troca de contexto
E) aging e starvation
= B | Starvation = inanição; aging = aumentar a prioridade de quem espera muito.
:::

::: questao
No escalonamento Round-Robin, se o quantum for muito grande, o comportamento do algoritmo se aproxima do:
A) SJF
B) SRTF
C) FCFS
D) escalonamento por prioridade
E) escalonamento de tempo real
= C | Sem interrupção pelo quantum, cada processo roda até o fim, por ordem de chegada.
:::

::: questao
Sistema com vários processadores que compartilham uma única memória principal e são controlados por um único sistema operacional é classificado como:
A) fracamente acoplado
B) fortemente acoplado
C) monoprogramado
D) distribuído
E) em lote
= B | Memória compartilhada = fortemente acoplado. Fracamente acoplado: cada um com sua memória, ligados por rede.
:::

::: questao
Sobre escalonamento preemptivo, é CORRETO afirmar:
A) O processo só libera a CPU quando termina.
B) O sistema operacional pode interromper o processo em execução e entregar a CPU a outro.
C) É incompatível com sistemas de tempo compartilhado.
D) Elimina a necessidade de troca de contexto.
E) O FCFS é o exemplo clássico.
= B | Preempção = o SO tira a CPU (fim do quantum ou prioridade maior). Gera mais trocas de contexto.
:::

## Questões da CETAP no TEC Concursos {-}

Estas não estão transcritas aqui (os termos do TEC não permitem), mas você pode resolvê-las no TEC, com gabarito e comentários:

| Tema | Questões |
|---|---|
| Multiprogramação × multiprocessamento | [#2518732](https://www.tecconcursos.com.br/questoes/2518732) SEMAS-PA 2023 |
| Algoritmos de escalonamento (Round-Robin, FCFS, SJF) | [#2062107](https://www.tecconcursos.com.br/questoes/2062107) CRF-PA 2021 |
| Fatia de tempo (quantum) | [#2062130](https://www.tecconcursos.com.br/questoes/2062130) CRF-PA 2021 |

## Referências {- .referencias}

1. TANENBAUM, Andrew S.; BOS, Herbert. *Sistemas Operacionais Modernos*. 4. ed. São Paulo: Pearson, 2016. Cap. 2 — Processos e threads (seções 2.1 e 2.4, escalonamento).
2. MACHADO, Francis B.; MAIA, Luiz Paulo. *Arquitetura de Sistemas Operacionais*. 5. ed. Rio de Janeiro: LTC, 2013. Caps. 2 (tipos de sistemas operacionais), 5 (processo) e 8 (gerência do processador).
3. SILBERSCHATZ, Abraham; GALVIN, Peter B.; GAGNE, Greg. *Operating System Concepts*. 10. ed. Hoboken: Wiley, 2018. Caps. 3 (Processes) e 5 (CPU Scheduling).
