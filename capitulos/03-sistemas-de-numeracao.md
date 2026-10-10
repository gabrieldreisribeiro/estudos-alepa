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

## Referências {- .referencias}

1. STALLINGS, William. *Arquitetura e Organização de Computadores*. 10. ed. São Paulo: Pearson, 2017. Cap. 9 — Sistemas numéricos.
2. TANENBAUM, Andrew S.; AUSTIN, Todd. *Organização Estruturada de Computadores*. 6. ed. São Paulo: Pearson, 2013. Apêndice A — Números binários.
