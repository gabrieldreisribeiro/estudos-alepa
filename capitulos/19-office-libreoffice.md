---
capitulo: 19
titulo: Word, Excel, PowerPoint, Access e LibreOffice
edital: Sex 16/10 · Item 4 — Word, Excel, PowerPoint e Access ➕ LibreOffice 7
lead: O essencial de cada programa para a prova: atalhos e recursos do Word, fórmulas, referências e erros do Excel (o que mais cai), PowerPoint, conceitos do Access e os equivalentes do LibreOffice com suas extensões.
---

> [!DICA]
> Nas provas abertas da CETAP, o **Excel** aparece em quase toda prova: **resultado de fórmula** (=MULT, =SOMA com vírgula decimal), **média ponderada** e **erro #REF!**. Depois vêm **proteger documento** no Word e **extensões do LibreOffice**. As questões reais estão no fim.

## Os programas e seus equivalentes {.cai}

| Função | Microsoft Office | Extensão | LibreOffice | Extensão (ODF) |
|---|---|---|---|---|
| Texto | **Word** | **.docx** (antigo .doc) | **Writer** | **.odt** |
| Planilha | **Excel** | **.xlsx** (antigo .xls) | **Calc** | **.ods** |
| Apresentação | **PowerPoint** | **.pptx** (antigo .ppt) | **Impress** | **.odp** |
| Banco de dados | **Access** | **.accdb** (antigo .mdb) | **Base** | **.odb** |
| Desenho | — | — | **Draw** | **.odg** |
| Fórmulas matemáticas | — | — | **Math** | **.odf** |

*Fonte da tabela.*[^1][^5]

- O **LibreOffice** é **software livre** e **gratuito** (derivado do OpenOffice/BrOffice). Usa por padrão o formato aberto **ODF** (*OpenDocument*), e **abre e salva** arquivos do Office (.docx, .xlsx, .pptx).[^5]
- O Office também abre arquivos ODF.
- Ambos **exportam para PDF**.

> [!SIMPLES]
> Macete das extensões do LibreOffice: tudo começa com **"od"** (*OpenDocument*) + a inicial do tipo: **t**exto (.od**t**), **s**preadsheet = planilha (.od**s**), a**p**resentação (.od**p**), **b**anco (.od**b**), **g**ráfico/desenho (.od**g**).

> [!PEGADINHA]
> - "O **Writer** cria **apresentações**." **Errado**: apresentação é o **Impress**. (A CETAP usou essa troca.)[^11]
> - "Um .doc do Word **não pode** ser aberto no Writer." **Errado**: pode.[^11]
> - O **x** no fim (.doc**x**, .xls**x**) indica o formato **XML** do Office 2007 em diante. Arquivo com **macro**: .doc**m**, .xls**m**.[^1]

## Word e Writer

### Atalhos que caem

| Atalho (Word) | Faz o quê |
|---|---|
| **Ctrl + N** | **Negrito** |
| **Ctrl + I** | *Itálico* |
| **Ctrl + S** | Sublinhado |
| **Ctrl + B** | **Salvar** |
| **Ctrl + O** | Novo documento |
| **Ctrl + A** | **Abrir** |
| **Ctrl + P** | Imprimir |
| **Ctrl + T** | Selecionar **tudo** |
| **Ctrl + L** | **Localizar** |
| **Ctrl + U** | **Substituir** |
| **Ctrl + E / G / Q / J** | Alinhar **centralizado** / à direita / à esquerda / **justificado** |
| **Ctrl + Z / Y** | Desfazer / refazer |
| **Ctrl + Enter** | **Quebra de página** |
| **Shift + F3** | Alternar **maiúsculas/minúsculas** |
| **F7** | Ortografia e gramática |
| **F12** | **Salvar como** |

*Fonte da tabela.*[^2]

> [!PEGADINHA]
> Os atalhos acima são do **Word em português**. No **Writer** (e no Word em inglês) muitos mudam: no Writer, **Ctrl + B** é **negrito** (*bold*), **Ctrl + S** é **salvar** (*save*), **Ctrl + U** é sublinhado (*underline*), **Ctrl + O** é **abrir** (*open*), **Ctrl + N** é **novo** (*new*), **Ctrl + A** é selecionar **tudo** (*all*), **Ctrl + H** é localizar e substituir. Leia o enunciado: a banca diz qual programa e versão.[^2][^6]

> [!SIMPLES]
> No Word em português, os atalhos seguem as **palavras em português**: **N**egrito, **I**tálico, **S**ublinhado, **L**ocalizar. No LibreOffice, seguem o **inglês**: **B**old, **I**talic, **U**nderline, **S**ave.

### Recursos que caem

- **Estilos** (Título 1, Título 2…) → base para o **sumário automático** (Referências > Sumário).
- **Quebras**: de **página** (nova página) e de **seção** (permite orientação, margens e cabeçalhos diferentes na mesma peça).
- **Cabeçalho e rodapé**, **numeração de páginas**, **notas de rodapé** (Ctrl + Alt + F).
- **Controlar alterações** (Revisão): registra **quem mudou o quê**, para aceitar ou rejeitar.
- **Mala direta** (Correspondências): um modelo + uma lista de dados → várias cartas personalizadas.
- **Pincel de formatação**: copia a **formatação** de um trecho para outro.
- **Restringir edição / Proteger documento**: limitar **formatação** a estilos, limitar **alterações** (só leitura, comentários, controle de alterações, **preenchimento de formulários**) e definir **exceções por usuário**.[^2][^10]
- **Criptografar com senha** é outro recurso (Arquivo > Informações > Proteger Documento > **Criptografar com Senha**).

> [!PEGADINHA]
> A CETAP perguntou o que o recurso "**proteger documento**" (restringir edição) **não** faz: ele limita formatação, alterações, edição por usuários e preenchimento de formulários, mas **não criptografa** o documento (criptografar é outra opção).[^10]

## Excel e Calc {.cai}

### Conceitos básicos

- **Pasta de trabalho** = o arquivo (.xlsx); **planilhas** = as abas; **célula** = cruzamento de **coluna (letra)** e **linha (número)**: **B3**.
- **Intervalo**: **A1:A10** (de A1 **até** A10). **A1;A10** = A1 **e** A10 (só as duas).
- Toda fórmula começa com **=** (também aceita **+** ou **−**).
- Operadores: **+ − * /** e **^** (potência); **&** junta textos; comparação **= > < >= <= <>**.
- Ordem: **( )** → **^** → **\* e /** → **+ e −** (como na matemática).[^3]

> [!SIMPLES]
> No Excel em português, o **separador de argumentos** é o **ponto e vírgula (;)**, porque a **vírgula** é a casa decimal. Então **=SOMA(2,2;4)** é **2,2 + 4 = 6,2**.

> [!EXEMPLO]
> **=MULT(4;1;5;4)** → 4 × 1 × 5 × 4 = **80**.
> **=SOMA(2,2;4)** → 2,2 + 4 = **6,2**.
> Essa dupla caiu na CETAP (DETRAN-RR).[^9]

### Funções que mais caem

| Função | Faz o quê | Exemplo |
|---|---|---|
| **SOMA** | Soma | =SOMA(A1:A5) |
| **MÉDIA** | Média aritmética | =MÉDIA(A1:A5) |
| **MÁXIMO / MÍNIMO** | Maior / menor valor | =MÁXIMO(A1:A5) |
| **MULT** | Multiplica | =MULT(A1;B1) |
| **CONT.NÚM** | Conta células com **números** | =CONT.NÚM(A1:A10) |
| **CONT.VALORES** | Conta células **não vazias** | =CONT.VALORES(A1:A10) |
| **CONTAR.VAZIO** | Conta células **vazias** | =CONTAR.VAZIO(A1:A10) |
| **CONT.SE** | Conta com **condição** | =CONT.SE(A1:A10;">7") |
| **SOMASE** | Soma com condição | =SOMASE(A1:A10;"Pará";B1:B10) |
| **SE** | Teste lógico | =SE(A1>=7;"Aprovado";"Reprovado") |
| **E / OU** | Combina testes | =SE(E(A1>=7;B1>=75);"Ok";"Não") |
| **PROCV** | Procura na **1ª coluna** e devolve outra coluna | =PROCV(123;A2:C50;3;FALSO) |
| **ARRED** | Arredonda | =ARRED(2,567;2) → 2,57 |
| **HOJE / AGORA** | Data atual / data e hora | =HOJE() |
| **CONCATENAR** / **&** | Junta textos | =A1&" "&B1 |

*Fonte da tabela.*[^3]

> [!PEGADINHA]
> - **CONT.NÚM** conta **só números**; **CONT.VALORES** conta **tudo que não está vazio** (texto também).
> - No **PROCV**, o último argumento **FALSO** = correspondência **exata**.
> - **MÉDIA** ignora células **vazias** (não conta como zero).[^3]

### Questões da banca (CETAP) {-}

Questões **reais** de provas anteriores da Fundação CETAP sobre este tema, com o **gabarito oficial definitivo**. O texto está como na prova (inclusive a grafia da época).

::: questao
**CETAP · 2010 · DETRAN-RR · Analista Técnico I – Analista de Sistemas · Questão 18**[^9] · [ver prova](https://www.estudegratis.com.br/images/provas/15539-cetap-2010-detran-rr-analista-de-sistemas-prova.pdf) · [gabarito](https://www.estudegratis.com.br/images/provas/15539-cetap-2010-detran-rr-analista-de-sistemas-gabarito.pdf)

Se tratando do Microsoft Excel, assinale a alternativa que contém, respectivamente, o resultado correspondente as fórmulas "=mult(4;1;5;4)" e "=soma(2,2;4)" :
A) 45 e 224.
B) 21 e 6,2.
C) 17 e 6,22.
D) 80 e 6,2.
E) 90 e 1,8.
= D | Gabarito **oficial definitivo** da CETAP. **MULT**: 4 × 1 × 5 × 4 = **80**. **SOMA(2,2;4)**: o ponto e vírgula separa os argumentos e a vírgula é decimal: 2,2 + 4 = **6,2**.
:::

::: questao
**CETAP · 2010 · DETRAN-RR · Programador de Computador · Questão 23**[^10] · [ver prova](https://www.estudegratis.com.br/images/provas/15588-cetap-2010-detran-rr-programador-de-computador-prova.pdf) · [gabarito](https://www.estudegratis.com.br/images/provas/15588-cetap-2010-detran-rr-programador-de-computador-gabarito.pdf)

No processador de textos Microsoft Word você dispõe do recurso "proteger documento". Sobre o assunto, selecione a alternativa ERRADA:
A) A proteção pode ser utilizada para limitar a formatação de estilos.
B) A proteção pode ser utilizada para limitar as alterações no documento.
C) A proteção pode ser utilizada para encriptar o documento.
D) A proteção pode ser utilizada para limitar a permissão de edição dos usuários.
E) A proteção pode ser utilizada para controlar o preenchimento de formulários.
= C | Gabarito **oficial definitivo** da CETAP. Proteger documento (restringir edição) limita **formatação**, **alterações**, **edição por usuário** e **formulários**. Criptografar é outro recurso (Criptografar com Senha).
:::

::: questao
**CETAP · 2010 · DETRAN-RR · Programador de Computador · Questão 24**[^10] · [ver prova](https://www.estudegratis.com.br/images/provas/15588-cetap-2010-detran-rr-programador-de-computador-prova.pdf) · [gabarito](https://www.estudegratis.com.br/images/provas/15588-cetap-2010-detran-rr-programador-de-computador-gabarito.pdf)

Na planilha eletrônica Microsoft Excel, quando a célula mostra #REF! significa que:
A) A fórmula representa uma divisão por zero.
B) A fórmula está acessando uma célula que não existe.
C) A fórmula tem caracteres inválidos.
D) A fórmula usa ";" para especificar um intervalo.
E) A fórmula está acessando uma célula com caracteres inválidos.
= B | Gabarito **oficial definitivo** da CETAP. **#REF!** = referência a célula que **não existe** (ex.: linha excluída). Divisão por zero é **#DIV/0!**.
:::

::: questao
**CETAP · 2010 · Assembleia Legislativa de Roraima · Técnico em Informática · Questão 22**[^11] · [ver prova](https://www.estudegratis.com.br/images/provas/15602-cetap-2010-al-rr-tecnico-em-informatica-prova.pdf) · [gabarito](https://www.estudegratis.com.br/images/provas/15602-cetap-2010-al-rr-tecnico-em-informatica-gabarito.pdf)

O OpenOffice, também chamado de BROffice na sua versão em português, traz uma série de aplicativos para trabalho de escritório. Sobre o assunto, marque a única alternativa ERRADA.
A) O Calc permite criar planilhas de cálculo e o Writer permite criar apresentações.
B) O Writer é um editor de texto.
C) O Writer gera arquivos com extensão .odt.
D) O Impress permite a criação de apresentações e cria arquivos com extensão .odp.
E) O Writer é um aplicativo de edição de textos e o Impress permite a criação de apresentações.
= A | Gabarito **oficial definitivo** da CETAP. Apresentações são do **Impress**; o **Writer** é editor de **texto** (.odt). O mesmo vale para o LibreOffice atual.
:::

::: questao
**CETAP · 2010 · Assembleia Legislativa de Roraima · Técnico em Informática · Questão 23**[^11] · [ver prova](https://www.estudegratis.com.br/images/provas/15602-cetap-2010-al-rr-tecnico-em-informatica-prova.pdf) · [gabarito](https://www.estudegratis.com.br/images/provas/15602-cetap-2010-al-rr-tecnico-em-informatica-gabarito.pdf)

A média ponderada de três números a1, a2 e a3, com pesos b1, b2 e b3 é calculada como: ((a1*b1) + (a2*b2) + (a3*b3))/(b1+b2+b3). Considere que você precise calcular a média ponderada de três notas, cada uma com o seu peso e que, para fazer isso vai utilizar uma planilha de cálculo no Excel. Supondo que as notas se encontram nas células A1, A2 e A3 e os pesos nas células B1, B2 e B3, analise as soluções propostas e marque a alternativa CORRETA.

I- Colocar na célula C1 a fórmula =(A1*B1+A2*B2+A3*B3)/(B1+B2+B3).
II- Colocar na célula D1 a fórmula =A1*B1, na célula D2 a fórmula =A2*B2, na célula D3 a fórmula =A3*B3 e na célula C1 a fórmula =(D1+D2+D3)/(B1+B2+B3).
III- Colocar na célula C1 a fórmula =(A1*B1;A2*B2;A3*B3)/(B1;B2;B3).
IV- Colocar na célula C1 a fórmula =(A*B)/(B).
V- Colocar na célula C1 a fórmula =soma(A1*B1;A2*B2;A3*B3)/Soma(B1:B3).
A) Somente a solução IV está correta.
B) Somente as soluções III e V estão corretas.
C) Todas as soluções estão corretas.
D) Somente as soluções I, II e V estão corretas.
E) Somente a solução V está correta.
= D | Gabarito **oficial definitivo** da CETAP. I, II e V calculam a média ponderada. III usa ";" fora de uma função (erro) e IV usa referências incompletas ("A", "B").
:::

## Referências relativas, absolutas e mistas {.cai}

| Tipo | Escrita | Ao copiar a fórmula… |
|---|---|---|
| **Relativa** | **A1** | Coluna e linha **mudam** |
| **Absoluta** | **$A$1** | **Nada muda** (fixa) |
| **Mista** | **$A1** / **A$1** | Muda só o que **não** tem $ |

- A tecla **F4** alterna entre os tipos.
- Referência a **outra planilha**: **Planilha2!A1** (no Calc: **Planilha2.A1** ou **$Planilha2.A1**).[^3][^7]

> [!EXEMPLO]
> Em **C1** está **=A1*$B$1**. Copiando para **C2**: **=A2*$B$1** (a relativa desceu uma linha; a absoluta ficou).
> Em **C1** está **=A$1+B1**. Copiando para **D3** (1 coluna à direita, 2 linhas abaixo): **=B$1+C3**.

> [!SIMPLES]
> O **$** é um **cadeado**: o que vem logo depois dele não muda quando você copia. **$A$1** = cadeado na coluna e na linha.

### Média ponderada

> [!EXEMPLO]
> Notas em **A1:A3**, pesos em **B1:B3**. Fórmulas **corretas**:
> - **=(A1*B1+A2*B2+A3*B3)/(B1+B2+B3)**
> - **=SOMA(A1*B1;A2*B2;A3*B3)/SOMA(B1:B3)**
> - **=SOMARPRODUTO(A1:A3;B1:B3)/SOMA(B1:B3)**
>
> **Errada**: =(A*B)/(B) (não existe referência só com a letra).[^11]

### Erros do Excel

| Erro | Causa |
|---|---|
| **#DIV/0!** | Divisão por **zero** (ou célula vazia) |
| **#REF!** | Referência a célula que **não existe mais** (linha ou coluna excluída) |
| **#NOME?** | Nome de função ou intervalo **escrito errado** |
| **#VALOR!** | Tipo de dado **errado** (somar texto com número) |
| **#N/D** | Valor **não disponível** (PROCV não encontrou) |
| **#NÚM!** | Número **inválido** (raiz de negativo) |
| **####** | Coluna **estreita** demais para mostrar o valor (não é erro de fórmula) |

*Fonte da tabela.*[^3][^4]

> [!PEGADINHA]
> **#REF!** = a fórmula aponta para uma célula que **não existe** (a CETAP cobrou isso). **####** não é erro: é só alargar a coluna.[^4][^10]

### Outros recursos

- **Classificar** e **Filtro** (AutoFiltro); **Formatação condicional** (cor conforme o valor); **Validação de dados** (lista suspensa, limites); **Gráficos**; **Tabela dinâmica** (resumir e cruzar dados); **Congelar painéis** (fixar cabeçalhos).[^3]
- **Alça de preenchimento**: arrastar o canto da célula continua sequências (1, 2, 3… / jan, fev…) e copia fórmulas ajustando as referências relativas.

## PowerPoint e Impress

- Arquivo = **apresentação**, formada por **slides**.
- **Modos de exibição**: **Normal** (edição), **Classificação de Slides** (miniaturas, reordenar), **Anotações**, **Modo de Leitura**, **Apresentação de Slides**.
- **Slide mestre**: modelo que define **formatação e elementos comuns** a todos os slides (logo, fontes, cores).
- **Transição** = efeito **entre** um slide e outro. **Animação** = efeito em um **objeto** dentro do slide.
- **F5**: inicia a apresentação **do começo**. **Shift + F5**: inicia **do slide atual**. **Esc**: encerra. **B**: tela preta; **W**: tela branca.
- **Modo do Apresentador**: o orador vê as **anotações** e o próximo slide; o público vê só o slide.[^1][^8]

> [!PEGADINHA]
> **Transição ≠ animação**: transição é **entre slides**; animação é **dentro** do slide, em textos e imagens.[^8]

> [!SIMPLES]
> O **slide mestre** é como o **papel timbrado**: o que você coloca nele aparece em todos os slides.

## Access e Base

O **Access** é um **SGBD** (sistema gerenciador de banco de dados) **relacional** de mesa. Seus **objetos** principais:[^1]

| Objeto | Para que serve |
|---|---|
| **Tabela** | **Guarda os dados** em linhas (registros) e colunas (campos) |
| **Consulta** | **Pesquisa**, filtra e combina dados (usa SQL) |
| **Formulário** | Tela para **inserir e editar** dados com facilidade |
| **Relatório** | Apresenta os dados **formatados para impressão** |
| **Macro** e **Módulo** | Automatizam tarefas (módulo usa VBA) |

- **Chave primária**: campo que **identifica cada registro de forma única** (não repete, não fica vazio).
- **Relacionamentos**: ligam tabelas pela chave (um-para-um, **um-para-muitos**, muitos-para-muitos), com **integridade referencial**.[^1]

> [!SIMPLES]
> **Tabela** guarda, **consulta** pergunta, **formulário** digita, **relatório** imprime.

> [!DICA]
> Banco de dados é assunto das semanas 6 e 7 (modelo E-R, normalização, SQL). Aqui basta saber os objetos do Access.

## Revisão rápida {- .colunas}

- Word .docx / Writer .odt; Excel .xlsx / Calc .ods; PowerPoint .pptx / Impress .odp; Access .accdb / Base .odb.
- LibreOffice: livre, formato **ODF**, abre e salva .docx.
- Word PT: Ctrl + N negrito, Ctrl + B salvar, Ctrl + L localizar, Ctrl + U substituir.
- Writer: Ctrl + B negrito, Ctrl + S salvar, Ctrl + H localizar e substituir.
- Ctrl + Enter = quebra de página.
- Restringir edição não criptografa.
- Excel PT: **;** separa argumentos, **,** é decimal.
- A1:A5 = intervalo; A1;A5 = só as duas.
- **$** fixa; F4 alterna.
- CONT.NÚM só números; CONT.VALORES não vazias.
- **#REF!** referência inexistente; **#DIV/0!** divisão por zero; **#NOME?** função errada.
- Transição = entre slides; animação = objeto.
- F5 do início; Shift + F5 do slide atual.
- Access: tabela, consulta, formulário, relatório; chave primária única.

## Flashcards {- .flashcards}

- Extensão padrão do Writer :: **.odt**
- Extensão padrão do Calc :: **.ods**
- Extensão padrão do Impress :: **.odp**
- Equivalente ao PowerPoint no LibreOffice :: **Impress**
- Word em português: atalho do negrito :: **Ctrl + N**
- Word em português: atalho de salvar :: **Ctrl + B**
- Atalho de quebra de página :: **Ctrl + Enter**
- Resultado de =SOMA(2,2;4) :: **6,2**
- Resultado de =MULT(4;1;5;4) :: **80**
- O que significa #REF!? :: Referência a célula que **não existe**
- O que faz o $ em $A$1? :: **Fixa** coluna e linha ao copiar
- Diferença CONT.NÚM × CONT.VALORES :: Só **números** × tudo **não vazio**
- Transição × animação :: **Entre slides** × **objeto** dentro do slide
- Shift + F5 no PowerPoint :: Apresenta **a partir do slide atual**
- Objeto do Access que guarda os dados :: **Tabela**

## Questões de fixação {-}

::: questao
No Excel em português, a fórmula =SOMA(1,5;2;3) retorna:
A) 1,5
B) 5
C) 6,5
D) 15
E) 153
= C | O ponto e vírgula separa argumentos e a vírgula é decimal: 1,5 + 2 + 3 = 6,5.
:::

::: questao
A célula C1 contém a fórmula =A1*$B$1. Ao copiá-la para C4, a fórmula resultante será:
A) =A1*$B$1
B) =A4*$B$4
C) =A4*$B$1
D) =D4*$B$1
E) =A4*B4
= C | A1 é relativa (vira A4); $B$1 é absoluta (não muda).
:::

::: questao
No Excel, a mensagem de erro exibida quando uma fórmula faz referência a uma célula que foi excluída é:
A) #DIV/0!
B) #NOME?
C) #REF!
D) #VALOR!
E) ####
= C | #REF! = referência inválida.
:::

::: questao
Para contar quantas células do intervalo A1:A20 contêm números, usa-se:
A) =CONT.VALORES(A1:A20)
B) =CONT.NÚM(A1:A20)
C) =CONTAR.VAZIO(A1:A20)
D) =SOMA(A1:A20)
E) =CONT.SE(A1:A20)
= B | CONT.NÚM conta só números. CONT.VALORES conta qualquer célula não vazia.
:::

::: questao
Assinale a alternativa que relaciona corretamente o programa do LibreOffice à extensão padrão de seus arquivos.
A) Writer — .ods
B) Calc — .odt
C) Impress — .odp
D) Base — .odg
E) Draw — .odb
= C | Writer .odt; Calc .ods; Impress .odp; Base .odb; Draw .odg.
:::

::: questao
No Microsoft Word, em português, os atalhos para negrito, salvar e localizar são, respectivamente:
A) Ctrl + B, Ctrl + S, Ctrl + F
B) Ctrl + N, Ctrl + B, Ctrl + L
C) Ctrl + N, Ctrl + S, Ctrl + L
D) Ctrl + G, Ctrl + B, Ctrl + U
E) Ctrl + B, Ctrl + N, Ctrl + P
= B | No Word em português: N = negrito, B = salvar (Ctrl + S é sublinhado), L = localizar.
:::

::: questao
No PowerPoint, o efeito aplicado na passagem de um slide para o seguinte chama-se:
A) animação
B) transição
C) slide mestre
D) layout
E) tema
= B | Transição é entre slides; animação é em objetos.
:::

::: questao
No Access, o objeto usado para apresentar dados formatados para impressão é:
A) tabela
B) consulta
C) formulário
D) relatório
E) macro
= D | Relatório. Tabela guarda, consulta pesquisa, formulário serve para digitar.
:::

::: questao
A fórmula =SE(A1>=7;"Aprovado";"Reprovado"), com A1 = 6,9, retorna:
A) Aprovado
B) Reprovado
C) VERDADEIRO
D) FALSO
E) #VALOR!
= B | 6,9 não é maior ou igual a 7: retorna o terceiro argumento.
:::

## Referências {- .referencias}

1. MICROSOFT. *Suporte do Microsoft 365*: Word, Excel, PowerPoint e Access. Disponível em: <https://support.microsoft.com/pt-br/microsoft-365>. Acesso em: 2 nov. 2026.
2. MICROSOFT. *Atalhos de teclado no Word*. Disponível em: <https://support.microsoft.com/pt-br/office/atalhos-de-teclado-no-word-95ef89dd-7142-4b50-afb2-f762f663ceb2>. Acesso em: 2 nov. 2026.
3. MICROSOFT. *Funções do Excel (por categoria)*. Disponível em: <https://support.microsoft.com/pt-br/office/fun%C3%A7%C3%B5es-do-excel-por-categoria-5f91f4e9-7b42-46d2-9bd1-63f26a86c0eb>. Acesso em: 2 nov. 2026.
4. MICROSOFT. *Como corrigir um erro #REF!*. Suporte Microsoft (Excel). Acesso em: 2 nov. 2026.
5. THE DOCUMENT FOUNDATION. *LibreOffice*: o que é o LibreOffice e o formato OpenDocument. Disponível em: <https://www.libreoffice.org/discover/libreoffice/>. Acesso em: 2 nov. 2026.
6. THE DOCUMENT FOUNDATION. *Ajuda do LibreOffice*: teclas de atalho do LibreOffice Writer. Disponível em: <https://help.libreoffice.org/latest/pt-BR/text/swriter/04/01020000.html>. Acesso em: 2 nov. 2026.
7. THE DOCUMENT FOUNDATION. *Ajuda do LibreOffice*: endereços e referências, absolutos e relativos (Calc). Disponível em: <https://help.libreoffice.org/latest/pt-BR/text/scalc/guide/relativ_absolut_ref.html>. Acesso em: 2 nov. 2026.
8. MICROSOFT. *Atalhos de teclado para fazer apresentações no PowerPoint*. Disponível em: <https://support.microsoft.com/pt-br/office/usar-atalhos-de-teclado-para-fazer-apresenta%C3%A7%C3%B5es-do-powerpoint-1524ffce-bd2a-45f4-9a7f-f18b992b93a0>. Acesso em: 2 nov. 2026.
9. FUNDAÇÃO CETAP. *Concurso Público nº 001/2009 do DETRAN-RR*: prova objetiva do cargo Analista Técnico I – Analista de Sistemas, aplicada em 11 abr. 2010, e gabarito oficial definitivo. Prova: <https://www.estudegratis.com.br/images/provas/15539-cetap-2010-detran-rr-analista-de-sistemas-prova.pdf>. Gabarito: <https://www.estudegratis.com.br/images/provas/15539-cetap-2010-detran-rr-analista-de-sistemas-gabarito.pdf>. Acesso em: 11 out. 2026.
10. FUNDAÇÃO CETAP. *Concurso Público nº 001/2009 do DETRAN-RR*: prova objetiva do cargo Técnico em Atividade Administrativa – Programador de Computador, aplicada em 11 abr. 2010, e gabarito oficial definitivo. Prova: <https://www.estudegratis.com.br/images/provas/15588-cetap-2010-detran-rr-programador-de-computador-prova.pdf>. Gabarito: <https://www.estudegratis.com.br/images/provas/15588-cetap-2010-detran-rr-programador-de-computador-gabarito.pdf>. Acesso em: 11 out. 2026.
11. FUNDAÇÃO CETAP. *Concurso Público nº 001/2009 da Assembleia Legislativa do Estado de Roraima*: prova objetiva do cargo Técnico em Informática, aplicada em 4 abr. 2010, e gabarito oficial definitivo. Prova: <https://www.estudegratis.com.br/images/provas/15602-cetap-2010-al-rr-tecnico-em-informatica-prova.pdf>. Gabarito: <https://www.estudegratis.com.br/images/provas/15602-cetap-2010-al-rr-tecnico-em-informatica-gabarito.pdf>. Acesso em: 11 out. 2026.
