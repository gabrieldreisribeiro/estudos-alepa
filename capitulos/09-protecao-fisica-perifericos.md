---
capitulo: 9
titulo: Proteção Física (Estabilizadores e No-breaks) e Periféricos
edital: Sex 09/10 · Item 5 — Proteção física: estabilizadores e no-breaks ➕ periféricos do microcomputador
lead: Como proteger os equipamentos contra problemas de energia e acesso físico, e a classificação dos periféricos.
---

> [!DICA]
> Proteção **lógica** e **backup** ficam para Qui 15/10. Hoje é só a parte **física**.

## Problemas da rede elétrica

| Problema | O que é |
|---|---|
| **Surto / pico** (spike) | Aumento de tensão **muito rápido e forte** (ex.: raio) |
| **Sobretensão** | Tensão **acima** do normal por mais tempo |
| **Subtensão** (afundamento) | Tensão **abaixo** do normal |
| **Queda total** (blackout) | Falta completa de energia |
| **Ruído** (interferência) | "Sujeira" elétrica causada por outros aparelhos e motores |

Fonte: Stallings.[^1]

> [!SIMPLES]
> A energia da tomada não é perfeita: às vezes vem **forte demais**, **fraca demais**, **some** ou vem **"suja"**. Cada equipamento de proteção resolve um tipo de problema.

## Equipamentos de proteção

| Equipamento | Protege contra | Mantém o computador ligado na falta de energia? |
|---|---|---|
| **Filtro de linha** | **Ruídos** e, se tiver varistor, **surtos** | **Não** |
| **Estabilizador** | **Variações de tensão** (sub e sobretensão): entrega tensão estável | **Não** |
| **No-break** (UPS) | Queda de energia (com **bateria**) e, conforme o tipo, variações e ruídos | **Sim**, por tempo limitado |

Fonte: ABNT NBR 15014 e IEC 62040-3.[^2][^3]

> [!SIMPLES]
> - **Filtro de linha**: uma "peneira" para a sujeira elétrica.
> - **Estabilizador**: um "regulador" que segura a voltagem no nível certo.
> - **No-break**: uma **bateria reserva**. Quando a luz cai, ele dá tempo para salvar o trabalho e desligar com segurança.

> [!PEGADINHA]
> O **estabilizador não segura o computador ligado** quando a energia cai. Quem faz isso é o **no-break**. E o no-break dá **autonomia limitada** (minutos), não energia infinita.

### Tipos de no-break

| Tipo | Como funciona | Comutação para a bateria |
|---|---|---|
| **Off-line (standby)** | Na rede normal, a tomada passa direto. Na falta, **liga a bateria** | Tem um **pequeno intervalo** de comutação |
| **Line-interactive** | Igual ao off-line, mas **corrige variações de tensão** sem gastar a bateria | Pequeno intervalo |
| **On-line (dupla conversão)** | O equipamento é alimentado **sempre** pelo inversor e pela bateria | **Zero**: não há comutação |

Fonte: IEC 62040-3.[^3]

> [!SIMPLES]
> O **on-line** é o mais seguro e o mais caro: o computador nunca "sente" a queda, porque sempre está ligado na bateria. É o usado em **servidores** e equipamentos críticos. O **off-line** é o mais simples e barato, de uso doméstico.

> [!CAI]
> - Potência do no-break em **VA** (potência aparente). Em watts: **W = VA × fator de potência**.[^2]
> - **Autonomia** = quanto tempo a bateria segura a carga.
> - **Senoidal pura** (forma de onda igual à da rede) é a melhor para equipamentos sensíveis; a **senoidal aproximada** é mais simples.

## Proteção física do ambiente

- **Controle de acesso físico**: portas com crachá, biometria, salas trancadas para servidores, câmeras (CFTV).[^4]
- **Ambiente**: temperatura e umidade controladas, **aterramento** elétrico, proteção contra incêndio e água.[^4]
- **Equipamentos**: cabos organizados, travas antifurto, descarte seguro de discos.[^4]

> [!SIMPLES]
> Não adianta senha forte se qualquer pessoa pode **entrar na sala e levar o servidor**. Proteção física é cuidar do **lugar** e do **equipamento**: porta trancada, ar-condicionado, energia boa e extintor adequado.

## Periféricos do microcomputador

Periféricos são os dispositivos que se ligam ao computador para **entrada**, **saída** ou **armazenamento** de dados.[^5]

| Tipo | Exemplos |
|---|---|
| **Entrada** | Teclado, mouse, scanner, microfone, webcam, leitor de código de barras, leitor biométrico |
| **Saída** | Monitor comum, impressora, caixas de som, projetor |
| **Entrada e saída** (mistos) | Tela **touchscreen**, **multifuncional** (imprime e digitaliza), headset com microfone, modem, placa de rede |
| **Armazenamento** | HD, SSD, pendrive, cartão de memória (muitas bancas classificam como entrada e saída) |

Fonte: Tanenbaum e Austin, cap. 2.[^5]

> [!SIMPLES]
> Pergunte: **a informação entra no computador, sai dele ou as duas coisas?** O teclado só manda dados (entrada). O monitor só mostra (saída). A tela do celular faz as duas coisas (mista).

> [!PEGADINHA]
> Monitor **comum** é só **saída**. Monitor **touchscreen** é **entrada e saída**. A **multifuncional** também é mista.

### Impressoras

| Tipo | Como funciona | Destaque |
|---|---|---|
| **Matricial** | **Impacto**: agulhas batem numa fita | Imprime **formulários com várias vias** (carbono) |
| **Jato de tinta** | Gotas de tinta | Barata, boa para cores |
| **Laser** | Toner fixado com calor | Rápida e econômica por página |

Fonte: Tanenbaum e Austin, cap. 2.[^5]

### Outros conceitos que caem

- **Resolução** de impressora e scanner em **dpi** (pontos por polegada); de monitor em **pixels** (ex.: 1920 × 1080).[^5]
- Tamanho do monitor em **polegadas**, medido na **diagonal**.
- Teclado **ABNT2**: padrão brasileiro, com a tecla **Ç**.
- **Plug and play**: o sistema reconhece e configura o periférico sozinho; o **driver** é o programa que permite ao sistema usar o dispositivo.[^5]
- Conexões comuns: **USB**, **HDMI** e **DisplayPort** (vídeo), **Bluetooth** (sem fio).

## Revisão rápida {- .colunas}

- Surto = pico forte; subtensão = tensão baixa; blackout = queda total.
- Filtro de linha: ruído e surtos.
- Estabilizador: regula a tensão, não segura a falta de energia.
- No-break: bateria, mantém ligado por tempo limitado.
- Off-line: comuta na falta (intervalo).
- Line-interactive: corrige variações e comuta.
- On-line: dupla conversão, comutação zero.
- Potência em VA; W = VA × fator de potência.
- Proteção física: acesso, ambiente, energia, incêndio.
- Touchscreen e multifuncional: entrada e saída.
- Matricial: impacto, várias vias.
- dpi = resolução de impressora e scanner.
- ABNT2: teclado com Ç.

## Flashcards {- .flashcards}

- Filtro de linha protege contra… :: **Ruídos** e, com varistor, **surtos**. Não regula tensão nem segura falta de energia.
- Função do estabilizador :: **Regular a tensão** (sub e sobretensão).
- O estabilizador mantém o PC ligado se a luz cair? :: **Não**. Quem faz isso é o **no-break**.
- Função do no-break :: Fornecer energia pela **bateria** durante a falta, por **tempo limitado**.
- No-break on-line (dupla conversão) :: Alimenta **sempre** pelo inversor; **comutação zero**; o mais seguro.
- No-break off-line :: Passa a rede direto e **comuta para a bateria** na falta (pequeno intervalo).
- No-break line-interactive :: Como o off-line, mas **corrige variações** de tensão.
- VA x W :: **W = VA × fator de potência**.
- Exemplos de proteção física :: Controle de **acesso** (crachá, biometria), **ambiente** (temperatura, incêndio), **aterramento**.
- Periférico de entrada e saída :: **Touchscreen**, **multifuncional**, headset com microfone.
- Impressora de impacto que imprime várias vias :: **Matricial**.
- Unidade de resolução de impressora e scanner :: **dpi** (pontos por polegada).
- O que é plug and play? :: O sistema **reconhece e configura** o dispositivo sozinho ao conectar.

## Questões de fixação {-}

::: questao
O equipamento que mantém o computador funcionando durante uma queda de energia, por meio de baterias, é o:
A) estabilizador
B) filtro de linha
C) no-break
D) varistor
E) aterramento
= C | O estabilizador só regula a tensão; não tem bateria.
:::

::: questao
A principal função do estabilizador é:
A) manter o computador ligado durante a falta de energia.
B) corrigir variações de tensão, fornecendo tensão estável.
C) fazer backup automático dos dados.
D) bloquear acessos físicos não autorizados.
E) aumentar a velocidade do processador.
= B | Ele regula sub e sobretensões, mas não segura a falta total.
:::

::: questao
No no-break do tipo on-line (dupla conversão):
A) há um intervalo de comutação para a bateria quando a energia cai.
B) o equipamento é alimentado continuamente pelo inversor, sem tempo de comutação.
C) não há bateria.
D) a rede elétrica passa direto para o equipamento em condições normais.
E) só protege contra ruídos.
= B | Por isso é o mais seguro e o usado em servidores. A e D descrevem o off-line.
:::

::: questao
Um no-break de 1.200 VA com fator de potência 0,6 fornece potência ativa de:
A) 600 W
B) 720 W
C) 1.200 W
D) 2.000 W
E) 1.800 W
= B | W = VA × FP = 1.200 × 0,6 = 720 W.
:::

::: questao
O filtro de linha protege principalmente contra:
A) quedas totais de energia.
B) ruídos elétricos e, quando possui varistor, surtos de tensão.
C) vírus de computador.
D) subtensões prolongadas, mantendo a tensão estável.
E) acessos não autorizados.
= B | O filtro de linha não regula a tensão nem tem bateria.
:::

::: questao
São exemplos de medidas de proteção física:
A) antivírus e firewall.
B) criptografia e senhas.
C) controle de acesso por crachá à sala de servidores e sistema contra incêndio.
D) atualização do sistema operacional.
E) backup em nuvem.
= C | As demais são medidas de proteção lógica.
:::

::: questao
É periférico exclusivamente de entrada:
A) monitor touchscreen
B) impressora multifuncional
C) scanner
D) caixa de som
E) headset com microfone
= C | Touchscreen, multifuncional e headset com microfone são mistos; caixa de som é saída.
:::

::: questao
A impressora indicada para imprimir formulários contínuos com várias vias (papel carbono) é a:
A) jato de tinta
B) laser
C) matricial
D) térmica de sublimação
E) 3D
= C | A matricial imprime por impacto, o que permite copiar as vias.
:::

::: questao
A resolução de scanners e impressoras é normalmente expressa em:
A) RPM
B) dpi
C) VA
D) Hz
E) Mb/s
= B | Dots per inch (pontos por polegada).
:::

## Referências {- .referencias}

1. STALLINGS, William. *Arquitetura e Organização de Computadores*. 10. ed. São Paulo: Pearson, 2017.
2. ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. *NBR 15014: Conversor a semicondutor — Sistema de alimentação de potência ininterrupta, com saída em corrente alternada (nobreak) — Terminologia*. Rio de Janeiro: ABNT, 2003.
3. INTERNATIONAL ELECTROTECHNICAL COMMISSION. *IEC 62040-3: Uninterruptible power systems (UPS) — Part 3: Method of specifying the performance and test requirements*. Genebra: IEC, 2021.
4. ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. *NBR ISO/IEC 27002: Segurança da informação, segurança cibernética e proteção à privacidade — Controles de segurança da informação*. Rio de Janeiro: ABNT, 2022. Controles físicos.
5. TANENBAUM, Andrew S.; AUSTIN, Todd. *Organização Estruturada de Computadores*. 6. ed. São Paulo: Pearson, 2013. Cap. 2 — Entrada/saída.
