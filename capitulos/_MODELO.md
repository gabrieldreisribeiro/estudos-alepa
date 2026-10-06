---
capitulo: 99
titulo: Título do capítulo
edital: Item X — assunto como está no edital
lead: Uma ou duas frases de abertura.
---

<!--
MODELO DE CAPÍTULO (arquivos que começam com "_" não entram no livro)

Depois de criar ou editar um .md, dê dois cliques em atualizar-livro.bat
e recarregue o livro.html.

- "## Título"            → seção numerada automaticamente (ex.: 1.1)
- "## Título {-}"        → seção sem número
- "## Título {- .colunas}"     → lista em duas colunas (revisão rápida)
- "## Referências {- .referencias}" → lista numerada de fontes
- "[^3]"                 → citação que leva à referência nº 3
- Quadros: "> [!CAI]", "> [!PEGADINHA]", "> [!EXEMPLO]", "> [!DICA]", "> [!TEXTO]" (texto-base)
-->

## Primeira seção

Texto normal com **negrito** e uma citação.[^1]

> [!CAI]
> O que mais cai na prova.

> [!PEGADINHA]
> A pegadinha clássica.

| Coluna | Coluna |
|---|---|
| a | b |

## Questões de fixação {-}

::: questao
Enunciado da questão.
A) alternativa
B) alternativa
C) alternativa
D) alternativa
E) alternativa
= C | Explicação do gabarito.
:::

## Referências {- .referencias}

1. AUTOR. *Obra*. ed. Cidade: Editora, ano.
