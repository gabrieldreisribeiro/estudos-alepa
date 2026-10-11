---
capitulo: 3
titulo: Sistemas de Numeração
edital: Ter 06/10 · Item 1 — Sistemas de numeração: binário, decimal, octal, hexadecimal e conversão de bases
lead: As quatro bases e todas as conversões entre elas, com o passo a passo que a prova cobra. Treine com lápis e papel.
---

## A ideia de base

Todos esses sistemas são **posicionais**: o valor de um dígito depende da **posição** que ele ocupa. Cada posição vale uma **potência da base**, começando em base⁰ na direita.[^1][^2]

| Sistema | Base | Dígitos | Como indicar |
|---|---|---|---|
| Binário | 2 | 0 e 1 | (1010)₂ ou 1010b |
| Octal | 8 | 0 a 7 | (17)₈ |
| Decimal | 10 | 0 a 9 | (25)₁₀ |
| Hexadecimal | 16 | 0 a 9 e **A a F** | (1F)₁₆, 0x1F ou 1Fh |

> [!CAI]
> No hexadecimal: **A = 10, B = 11, C = 12, D = 13, E = 14, F = 15**.[^2]

> [!PEGADINHA]
> O maior dígito de uma base é sempre **base − 1**. Por isso, "8" e "9" **não existem** em octal, e "2" não existe em binário. Um número como (1289)₈ é inválido.

### Tabela de 0 a 15 (decore)

| Dec | Bin | Oct | Hex | | Dec | Bin | Oct | Hex |
|---|---|---|---|---|---|---|---|---|
| 0 | 0000 | 0 | 0 | | 8 | 1000 | 10 | 8 |
| 1 | 0001 | 1 | 1 | | 9 | 1001 | 11 | 9 |
| 2 | 0010 | 2 | 2 | | 10 | 1010 | 12 | A |
| 3 | 0011 | 3 | 3 | | 11 | 1011 | 13 | B |
| 4 | 0100 | 4 | 4 | | 12 | 1100 | 14 | C |
| 5 | 0101 | 5 | 5 | | 13 | 1101 | 15 | D |
| 6 | 0110 | 6 | 6 | | 14 | 1110 | 16 | E |
| 7 | 0111 | 7 | 7 | | 15 | 1111 | 17 | F |

### Potências de 2 (decore)

`2⁰=1 · 2¹=2 · 2²=4 · 2³=8 · 2⁴=16 · 2⁵=32 · 2⁶=64 · 2⁷=128 · 2⁸=256 · 2⁹=512 · 2¹⁰=1024`

> [!CAI]
> Com **n bits** dá para representar **2ⁿ valores**, de 0 até **2ⁿ − 1**.[^2] Exemplo: 8 bits = 256 valores (0 a 255).

## Unidades de medida

A CETAP cobra conversão de unidades com frequência (TB em GB, GB em bytes, capacidade de pendrive). A regra é a das **potências de 2**:[^2]

| Unidade | Vale |
|---|---|
| **bit** (b) | 0 ou 1, a menor unidade |
| **byte** (B) | **8 bits** |
| **KB** (quilobyte) | **1024** bytes = 2¹⁰ |
| **MB** (megabyte) | 1024 KB = 2²⁰ bytes |
| **GB** (gigabyte) | 1024 MB = 2³⁰ bytes |
| **TB** (terabyte) | 1024 GB = 2⁴⁰ bytes |

> [!EXEMPLO]
> - 3 TB = 3 × 1024 = **3072 GB**.
> - 1 GB = 1024 × 1024 **KB** = 1024 × 1024 × 1024 **bytes**.
> - 32 GB em TB = 32 ÷ 1024 = **0,03125 TB**.

> [!PEGADINHA]
> - **b minúsculo = bit**, **B maiúsculo = byte**. 100 Mb/s (megabits) é 8 vezes menos que 100 MB/s.
> - Os fabricantes de HD usam múltiplos de **1000** (por isso um HD de 1 TB aparece com cerca de 931 GB). A norma IEC 80000-13 criou KiB, MiB e GiB para os múltiplos de 1024. Na prova, salvo aviso, use **1024**.[^5]

> [!SIMPLES]
> Cada degrau (KB → MB → GB → TB) multiplica por **1024**. Para subir de degrau, divida por 1024. Para descer, multiplique.

## Qualquer base → decimal

Multiplique cada dígito pela **potência da base** da sua posição e **some**.[^1]

> [!EXEMPLO]
> - (1011)₂ = 1·2³ + 0·2² + 1·2¹ + 1·2⁰ = 8 + 0 + 2 + 1 = **11**
> - (157)₈ = 1·8² + 5·8¹ + 7·8⁰ = 64 + 40 + 7 = **111**
> - (2F)₁₆ = 2·16¹ + 15·16⁰ = 32 + 15 = **47**

> [!DICA]
> Para binário → decimal, escreva as potências em cima dos bits (…16 8 4 2 1) e **some só onde tem 1**. É o método mais rápido na prova.

## Decimal → qualquer base

**Divisões sucessivas** pela base de destino, até o quociente dar 0. A resposta são os **restos lidos de baixo para cima** (do último para o primeiro).[^1][^2]

> [!EXEMPLO]
> 25 para binário:
> - 25 ÷ 2 = 12, resto **1**
> - 12 ÷ 2 = 6, resto **0**
> - 6 ÷ 2 = 3, resto **0**
> - 3 ÷ 2 = 1, resto **1**
> - 1 ÷ 2 = 0, resto **1**
>
> Lendo de baixo para cima: **(11001)₂**.

> [!EXEMPLO]
> 300 para hexadecimal: 300 ÷ 16 = 18, resto **12 (C)** · 18 ÷ 16 = 1, resto **2** · 1 ÷ 16 = 0, resto **1** → **(12C)₁₆**.

> [!PEGADINHA]
> Ler os restos **de cima para baixo** dá o número invertido. A banca costuma colocar essa resposta errada entre as alternativas.

> [!DICA]
> Atalho para decimal → binário: subtraia a **maior potência de 2** que cabe e marque 1 nessa posição. 156 = 128 + 16 + 8 + 4 → **10011100**.

> [!DICA]
> Hexadecimal de 4 dígitos (questão comum na CETAP de 2021 a 2023): use as posições **4096 · 256 · 16 · 1**. 4EFF = 4·4096 + 14·256 + 15·16 + 15 = **20223**. Atalho com F no fim: 4FFF = 5000₁₆ − 1 = 5·4096 − 1 = **20479**.

## Binário ↔ octal e binário ↔ hexadecimal

Como 8 = 2³ e 16 = 2⁴, a conversão é direta, **sem passar pelo decimal**:[^1][^2]

| Conversão | Regra |
|---|---|
| Binário → octal | Grupos de **3 bits**, da direita para a esquerda |
| Binário → hexadecimal | Grupos de **4 bits**, da direita para a esquerda |
| Octal → binário | Cada dígito vira **3 bits** |
| Hexadecimal → binário | Cada dígito vira **4 bits** |

> [!EXEMPLO]
> (1101011)₂:
> - Octal: 1 | 101 | 011 → **001** 101 011 → **(153)₈**
> - Hexa: 110 | 1011 → **0110** 1011 → **(6B)₁₆**
>
> (A7)₁₆ → 1010 0111 → **(10100111)₂**

> [!PEGADINHA]
> Os grupos são formados **a partir da direita**. Se sobrarem bits à esquerda, complete com **zeros à esquerda**. Nunca complete à direita.

### Octal ↔ hexadecimal

Passe pelo **binário**: octal → binário (3 bits por dígito) → reagrupe em 4 bits → hexadecimal. O caminho inverso funciona igual.[^2]

> [!EXEMPLO]
> (75)₈ → 111 101 → 111101 → 0011 1101 → **(3D)₁₆**. Conferindo: 7·8 + 5 = 61 = 3·16 + 13.

## Parte fracionária

Para converter a parte depois da vírgula de decimal para binário, **multiplique por 2** várias vezes. A cada multiplicação, a parte inteira (0 ou 1) é o próximo bit, lido **de cima para baixo**.[^1]

> [!EXEMPLO]
> 0,625 → 0,625·2 = **1**,25 → 0,25·2 = **0**,5 → 0,5·2 = **1**,0 → **(0,101)₂**.
> No sentido contrário: 0,101 = 1·2⁻¹ + 0·2⁻² + 1·2⁻³ = 0,5 + 0,125 = 0,625.

> [!PEGADINHA]
> Na parte inteira os restos são lidos **de baixo para cima**. Na parte fracionária, os bits são lidos **de cima para baixo**.

## Números negativos em binário

A CETAP cobrou este assunto nas três questões de numeração das provas de 2010 (veja as questões da banca no fim do capítulo). Nas três formas, o **bit mais à esquerda** (o mais significativo) indica o **sinal**: **0 = positivo**, **1 = negativo**.[^2]

| Representação | Como obter o negativo | −6 com 5 bits (+6 = 00110) |
|---|---|---|
| **Sinal e magnitude** | Troca só o bit do sinal | **1**0110 |
| **Complemento de 1** | **Inverte todos** os bits | 11001 |
| **Complemento de 2** | Inverte todos os bits e **soma 1** | 11001 + 1 = **11010** |

Fonte: Tanenbaum e Austin, apêndice A.[^2]

> [!SIMPLES]
> - **Sinal e magnitude** é o jeito "humano": um bit diz se é + ou −, o resto é o número.
> - **Complemento de 1**: troque cada 0 por 1 e cada 1 por 0.
> - **Complemento de 2**: faça o complemento de 1 e **some 1**. É o que os computadores usam de verdade, porque assim a soma de positivos e negativos funciona sem regra especial.

> [!EXEMPLO]
> Em complemento de 2 com 5 bits: A = 11010 (−6) e B = 01010 (+10).
> A + B = 11010 + 01010 = **1**00100 → descarta o "vai um" que passou dos 5 bits → **00100 = 4**. Conferindo: −6 + 10 = 4.

> [!PEGADINHA]
> Para saber quanto vale um número negativo em complemento de 2, faça o caminho de volta: **inverta e some 1**. 11010 → 00101 + 1 = 00110 = 6, então 11010 = **−6**. Lido "sem sinal", o mesmo 11010 valeria 26: a banca coloca esse valor como alternativa errada.

## Revisão rápida {- .colunas}

- Posicional: cada posição vale uma potência da base.
- Maior dígito = base − 1.
- Hexa: A=10 … F=15.
- n bits: 2ⁿ valores, de 0 a 2ⁿ − 1.
- Base → decimal: soma dos dígitos × potências.
- Decimal → base: divisões sucessivas.
- Restos lidos de baixo para cima.
- Binário → octal: grupos de 3 bits.
- Binário → hexa: grupos de 4 bits.
- Grupos a partir da direita; zeros à esquerda.
- Octal ↔ hexa: passe pelo binário.
- Fração: multiplicações por 2, lidas de cima para baixo.
- Bit mais à esquerda = sinal (1 = negativo).
- Complemento de 1: inverte; complemento de 2: inverte e soma 1.
- Unidades: cada degrau × 1024; byte = 8 bits.

## Flashcards {- .flashcards}

- Valores de A a F no hexadecimal :: A=10, B=11, C=12, D=13, E=14, **F=15**.
- Maior dígito de uma base :: **Base − 1** (ex.: 7 no octal).
- Decimal → base n :: **Divisões sucessivas** pela base; restos lidos **de baixo para cima**.
- Base n → decimal :: Soma de cada dígito × **potência da base** da sua posição.
- Binário → octal :: Grupos de **3 bits**, a partir da direita.
- Binário → hexadecimal :: Grupos de **4 bits**, a partir da direita.
- Quantos valores cabem em n bits? :: **2ⁿ** valores, de 0 até 2ⁿ − 1.
- (1011)₂ em decimal :: **11**
- (FF)₁₆ em decimal :: **255**
- 0,625 em binário :: **0,101**
- Como converter octal ↔ hexadecimal? :: Passando pelo **binário**.
- Símbolos do hexadecimal :: **0 a 9 e A a F** (16 símbolos). "10, 11… 15" não são dígitos.
- Bit que indica o sinal :: O **mais significativo** (mais à esquerda): **0 = +**, **1 = −**.
- Complemento de 1 de 00110 :: **11001** (inverte todos os bits).
- Complemento de 2 de 00110 :: **11010** (inverte e **soma 1**) = −6.
- Qual representação de negativos o computador usa? :: **Complemento de 2**.
- 3 TB em GB :: **3072 GB** (3 × 1024).
- 1 GB em bytes :: **1024 × 1024 × 1024** bytes (2³⁰).
- b x B :: **b** = bit; **B** = byte (8 bits).

## Questões de fixação {-}

::: questao
O número binário 101101 corresponde, no sistema decimal, a:
A) 43
B) 45
C) 47
D) 53
E) 91
= B | 32 + 8 + 4 + 1 = 45.
:::

::: questao
A representação do número decimal 156 no sistema binário é:
A) 10011100
B) 00111001
C) 10011010
D) 11001100
E) 10101100
= A | 156 = 128 + 16 + 8 + 4. A alternativa B é a resposta lida ao contrário.
:::

::: questao
O número hexadecimal 7F equivale, em decimal, a:
A) 112
B) 115
C) 127
D) 255
E) 71
= C | 7·16 + 15 = 127.
:::

::: questao
O número binário 11010110 em hexadecimal é:
A) C6
B) D6
C) 6D
D) 326
E) D5
= B | 1101 = D e 0110 = 6.
:::

::: questao
O número octal 375 em binário é:
A) 11111101
B) 101111011
C) 11110111
D) 1111101
E) 11101111
= A | 3 = 011, 7 = 111, 5 = 101 → 011111101 = 11111101.
:::

::: questao
O número hexadecimal 2AF, convertido para o sistema octal, é:
A) 1257
B) 2517
C) 687
D) 1275
E) 5257
= A | 2AF = 0010 1010 1111 → regrupando em 3 bits: 001 010 101 111 = 1257. A alternativa C é o valor em decimal.
:::

::: questao
Qual dos números abaixo NÃO é uma representação válida no sistema octal?
A) 777
B) 1024
C) 1289
D) 0
E) 4567
= C | O octal usa só os dígitos de 0 a 7. Os dígitos 8 e 9 não existem.
:::

::: questao
Com 8 bits é possível representar quantos valores distintos, e qual o maior número sem sinal?
A) 8 valores; maior número 7
B) 128 valores; maior número 127
C) 256 valores; maior número 255
D) 256 valores; maior número 256
E) 255 valores; maior número 255
= C | 2⁸ = 256 valores, de 0 a 2⁸ − 1 = 255.
:::

::: questao
O número decimal 0,625 representado em binário é:
A) 0,110
B) 0,011
C) 0,101
D) 0,111
E) 0,1001
= C | 0,625·2 = 1,25 → 1; 0,25·2 = 0,5 → 0; 0,5·2 = 1,0 → 1.
:::

::: questao
Dentre os números abaixo, o MAIOR é:
A) (11111111)₂
B) (377)₈
C) (FF)₁₆
D) (256)₁₀
E) (255)₁₀
= D | As alternativas A, B, C e E valem 255. Apenas a D vale 256.
:::

## Questões da banca (CETAP) {-}

Questões **reais** de provas anteriores da Fundação CETAP sobre este tema, com o **gabarito oficial definitivo**. O texto está como na prova (inclusive a grafia da época).

::: questao
**CETAP · 2010 · DETRAN-RR · Técnico em Rede de Computador · Questão 45**[^3] · [ver prova](https://www.estudegratis.com.br/images/provas/15587-cetap-2010-detran-rr-tecnico-em-informatica-prova.pdf) · [gabarito](https://www.estudegratis.com.br/images/provas/15587-cetap-2010-detran-rr-tecnico-em-informatica-gabarito.pdf)

Dadas as afirmativas sobre sistemas de numeração e codificação, analise-as e assinale a alternativa CORRETA:

I- O conjunto de símbolos do sistema hexadecimal é formado pela seqüência de números S = {0, 1, 2, 3, ..., 12, 13, 14, 15};

II- Um bit é um dígito que pode ser representado pelos símbolos do sistema decimal S = {0, 1, 2, ..., 7, 8, 9};

III- Para converter um número hexadecimal para binário, deve-se simplesmente converter cada dígito hexadecimal ao seu correspondente binário. Exemplo: o número hexadecimal 92 é igual ao número binário 10010010;

IV- O "Complemento de Um" do número binário de 5 dígitos 00110 (6 na base decimal) é 11001 (25 na base decimal);

V- O "Complemento de Dois" do número binário de 5 dígitos 00110 (6 na base decimal) é 11010 (-6 na base decimal).
A) Todas as afirmativas estão corretas.
B) Apenas as afirmativas I, II estão corretas.
C) Apenas as afirmativas I e III estão corretas.
D) Apenas as afirmativas III, IV e V estão corretas.
E) Nenhuma das afirmativas está correta.
= D | Gabarito **oficial definitivo** da CETAP. I está errada: os símbolos do hexadecimal são **0–9 e A–F** (não "12, 13…"). II está errada: bit é **0 ou 1**. III está certa: 9 = 1001 e 2 = 0010. IV e V tratam de **complemento**: complemento de um = **inverter todos os bits** (00110 → 11001); complemento de dois = complemento de um **+ 1** (11001 + 1 = 11010), que representa o negativo (−6).
:::

::: questao
**CETAP · 2010 · DETRAN-RR · Programador de Computador · Questão 31**[^4] · [ver prova](https://www.estudegratis.com.br/images/provas/15588-cetap-2010-detran-rr-programador-de-computador-prova.pdf) · [gabarito](https://www.estudegratis.com.br/images/provas/15588-cetap-2010-detran-rr-programador-de-computador-gabarito.pdf)

O sistema de numeração dominante nos sistemas computacionais usa a representação numérica em base 2 (dois). Na nossa sociedade utilizamos com muita freqüência a representação decimal. Com relação aos sistemas de numeração em sistemas digitais, analise as afirmativas a seguir a assinale a alternativa CORRETA.

I - O número decimal 49 pode ser representado, usando 8 dígitos e base 2, pelo número 00110001;

II - No sistema binário não é possível a representação e a aritmética de ponto flutuante;

III - Nos computadores que operam no sistema binário, as operações aritméticas de inteiros são realizadas usando a representação decimal;

IV - Um dos métodos para representar inteiros negativos em sistemas digitais usa o bit mais significativo do número para representar o sinal (positivo ou negativo);

V - Um número representado em uma base não pode ser convertido para uma representação em base diferente.
A) Somente a afirmativa I está correta.
B) Somente as afirmativas I e IV estão corretas.
C) Somente as afirmativas I, II e IV estão corretas.
D) Somente as afirmativas II, III e IV estão corretas.
E) Todas as afirmativas estão corretas.
= B | Gabarito **oficial definitivo** da CETAP. I: 49 = 32 + 16 + 1 = **00110001**. IV: é a representação **sinal e magnitude** (bit da esquerda = sinal). II, III e V são falsas: o binário representa ponto flutuante, o computador faz as contas **em binário** e qualquer base pode ser convertida em outra.
:::

## Referências {- .referencias}

1. STALLINGS, William. *Arquitetura e Organização de Computadores*. 10. ed. São Paulo: Pearson, 2017. Cap. 9 — Sistemas numéricos.
2. TANENBAUM, Andrew S.; AUSTIN, Todd. *Organização Estruturada de Computadores*. 6. ed. São Paulo: Pearson, 2013. Apêndice A — Números binários.
3. FUNDAÇÃO CETAP. *Concurso Público nº 001/2009 do DETRAN-RR*: prova objetiva do cargo Técnico em Atividade Administrativa – Técnico em Rede de Computador, aplicada em 11 abr. 2010, e gabarito oficial definitivo. Prova: <https://www.estudegratis.com.br/images/provas/15587-cetap-2010-detran-rr-tecnico-em-informatica-prova.pdf>. Gabarito: <https://www.estudegratis.com.br/images/provas/15587-cetap-2010-detran-rr-tecnico-em-informatica-gabarito.pdf>. Acesso em: 11 out. 2026.
4. FUNDAÇÃO CETAP. *Concurso Público nº 001/2009 do DETRAN-RR*: prova objetiva do cargo Técnico em Atividade Administrativa – Programador de Computador, aplicada em 11 abr. 2010, e gabarito oficial definitivo. Prova: <https://www.estudegratis.com.br/images/provas/15588-cetap-2010-detran-rr-programador-de-computador-prova.pdf>. Gabarito: <https://www.estudegratis.com.br/images/provas/15588-cetap-2010-detran-rr-programador-de-computador-gabarito.pdf>. Acesso em: 11 out. 2026.
5. INTERNATIONAL ELECTROTECHNICAL COMMISSION. *IEC 80000-13:2008: Quantities and units — Part 13: Information science and technology*. Genebra: IEC, 2008.
