---
capitulo: 15
titulo: Windows e Linux — Windows 10 e 11, Arquivos e Pastas
edital: Qua 14/10 · Item 3 — Ambientes Windows e Linux ➕ Windows 10 e 11, arquivos e pastas
lead: O que a prova cobra dos dois sistemas: a interface e os atalhos do Windows 10 e 11, o que mudou no 11, a Lixeira, arrastar e soltar, e no Linux os diretórios, os comandos básicos e as permissões. Vale para Conhecimentos Específicos e para Noções de Informática.
---

> [!DICA]
> As provas abertas da CETAP têm várias questões deste tema (DETRAN-RR e Assembleia de Roraima, 2010): **comandos do Linux** (ls, mkdir), **atalhos do Windows**, **login no Linux** e **arquivos e pastas**. O estilo é "analise as afirmativas" com coisas óbvias misturadas a erros grosseiros. As questões reais estão no fim do capítulo.

## O que os dois têm em comum

Windows e Linux são **sistemas operacionais**: gerenciam o hardware e oferecem a interface para o usuário usar os programas.[^1]

| | **Windows** | **Linux** |
|---|---|---|
| Licença | **Proprietário** (Microsoft), pago | **Software livre** (licença **GPL**), em geral gratuito |
| Criador | Microsoft | Núcleo (**kernel**) criado por **Linus Torvalds** em **1991** |
| Formas de distribuição | Edições (Home, Pro, Enterprise) | **Distribuições** (Ubuntu, Debian, Fedora, Red Hat, Mint…) |
| Maiúsculas e minúsculas nos nomes | **Não diferencia** (Arquivo.txt = arquivo.txt) | **Diferencia** (*case sensitive*) |
| Separador de caminho | **\\** (barra invertida): C:\\Users\\Ana | **/** (barra): /home/ana |
| Raiz | Uma por unidade: **C:\\**, **D:\\** | Uma só: **/** |
| Sistema de arquivos típico | **NTFS** (também FAT32 e exFAT) | **ext4** (também Btrfs, XFS) |
| Administrador | Conta de **Administrador** | Usuário **root** (superusuário) |

*Fonte da tabela.*[^1][^2][^3]

> [!SIMPLES]
> O **kernel** é o "motor" do Linux. Uma **distribuição** é o "carro pronto": o motor mais os programas, a interface e o instalador. Por isso existem vários "Linux" diferentes, todos com o mesmo motor.

> [!PEGADINHA]
> - "O Linux foi criado pela Microsoft." **Errado**.
> - "O Linux é software proprietário." **Errado**: é **livre** (pode usar, estudar, modificar e redistribuir).
> - "O Linux só funciona em computadores pessoais." **Errado**: roda em servidores, celulares (Android usa o kernel Linux), roteadores e supercomputadores.[^2][^9]

## Windows: a interface

| Elemento | Para que serve |
|---|---|
| **Área de trabalho** | Tela principal, com ícones e atalhos |
| **Barra de tarefas** | Faixa na parte de baixo com o botão Iniciar, os programas abertos e fixados e a área de notificação (relógio, rede, volume) |
| **Menu Iniciar** | Acesso aos programas, às Configurações e ao desligamento |
| **Explorador de Arquivos** | Navegar e organizar pastas e arquivos (antigo "Windows Explorer") |
| **Lixeira** | Guarda arquivos excluídos para poderem ser **restaurados** |
| **Configurações** e **Painel de Controle** | Ajustes do sistema. A Microsoft vem migrando tudo para **Configurações** |
| **Gerenciador de Tarefas** | Ver e encerrar programas e processos, desempenho e programas de inicialização |

*Fonte da tabela.*[^4]

### O que mudou no Windows 11

- **Menu Iniciar e ícones da barra de tarefas centralizados** (pode alinhar à esquerda).
- **Layouts de Ajuste** (*Snap Layouts*): organizar janelas lado a lado, com **Win + Z** ou passando o mouse no botão maximizar.
- **Widgets** (Win + W) e novo menu de contexto (o antigo fica em "Mostrar mais opções", **Shift + F10**).
- **Requisitos** mais rígidos: processador de **64 bits**, **4 GB de RAM**, **64 GB** de armazenamento, **UEFI com capacidade de Inicialização Segura** (*Secure Boot*) e **TPM 2.0**. **Não existe Windows 11 de 32 bits.**[^5]
- O **Windows 10** teve o **fim do suporte** em **14 de outubro de 2025** (sem atualizações de segurança gratuitas depois disso).[^6]

> [!SIMPLES]
> O Windows 11 é o 10 "repaginado": o menu foi para o meio, organizar janelas ficou mais fácil e ele exige um chip de segurança (**TPM 2.0**) que computadores antigos não têm. É por isso que muito PC não "sobe" para o 11.

### Atalhos de teclado que caem {.cai}

| Atalho | Faz o quê |
|---|---|
| **Win** | Abre o menu Iniciar |
| **Win + E** | Abre o **Explorador de Arquivos** |
| **Win + D** | Mostra a **área de trabalho** (minimiza/restaura tudo) |
| **Win + L** | **Bloqueia** o computador |
| **Win + I** | Abre as **Configurações** |
| **Win + R** | Abre o **Executar** |
| **Win + V** | **Histórico** da área de transferência |
| **Win + Shift + S** | **Captura** de parte da tela (Ferramenta de Captura) |
| **Win + Tab** | **Visão de tarefas** (janelas e áreas de trabalho virtuais) |
| **Win + . (ponto)** | Painel de **emojis** |
| **Alt + Tab** | **Alternar** entre janelas abertas |
| **Alt + Esc** | Alterna as janelas **na ordem em que foram abertas** |
| **Alt + F4** | **Fecha** a janela ativa (na área de trabalho, abre "Desligar") |
| **Ctrl + Shift + Esc** | Abre o **Gerenciador de Tarefas** direto |
| **Ctrl + Alt + Del** | Tela de segurança (bloquear, trocar usuário, Gerenciador de Tarefas) |
| **F2** | **Renomear** o item selecionado |
| **F5** | Atualizar a janela |
| **Ctrl + C / X / V** | Copiar / recortar / colar |
| **Ctrl + Z / Y** | Desfazer / refazer |
| **Ctrl + A** | Selecionar tudo |
| **Delete** | Envia para a **Lixeira** |
| **Shift + Delete** | Exclui **sem passar pela Lixeira** (permanente) |
| **PrtScn** (Print Screen) | Copia a **imagem da tela** para a área de transferência (não imprime) |

*Fonte da tabela.*[^4]

> [!SIMPLES]
> Quase todo atalho com **Win** abre "algo do Windows" (**E**xplorador, **D**esktop, **L**ock = bloquear, **I** = configurações). Atalhos com **Ctrl** mexem no **conteúdo** (copiar, colar, desfazer).

> [!PEGADINHA]
> - A tecla **Print Screen não imprime** nada: ela **copia a tela** como imagem. A CETAP já usou isso como afirmativa falsa.[^10]
> - **Shift + Delete** não vai para a Lixeira.
> - **Alt + Esc** também alterna janelas (sem mostrar o painel do Alt + Tab).

### Lixeira

- Arquivos apagados do **disco interno** vão para a Lixeira e podem ser **restaurados** para o local original.
- **Não vão para a Lixeira** (são excluídos direto): itens apagados com **Shift + Delete**, de **pendrives e cartões** (unidades removíveis), de **pastas de rede**, e arquivos **maiores que o espaço** reservado à Lixeira.[^4]
- **Esvaziar a Lixeira** apaga de vez.

> [!PEGADINHA]
> "Todo arquivo excluído no Windows pode ser recuperado pela Lixeira." **Errado**: pendrive, rede e Shift + Delete não passam por ela.

## Arquivos e pastas {.cai}

- **Arquivo**: conjunto de dados com **nome** e, em geral, uma **extensão** que indica o tipo (**.docx**, **.xlsx**, **.pdf**, **.jpg**, **.exe**, **.txt**, **.zip**).
- **Pasta** (ou **diretório**): "caixa" que organiza arquivos e outras pastas (**subpastas**), formando uma **árvore**.[^1][^7]
- **Caminho absoluto**: começa na **raiz** (C:\\Documentos\\prova.docx ou /home/ana/prova.txt).
- **Caminho relativo**: parte da **pasta atual** (..\\fotos, ./notas.txt). **"."** = pasta atual; **".."** = pasta de cima (pai).[^2][^7]

> [!SIMPLES]
> Pense no computador como um **armário**: as **pastas** são gavetas (que podem ter gavetas dentro) e os **arquivos** são as folhas guardadas. A **extensão** é a etiqueta que diz o tipo da folha (texto, foto, planilha).

### Regras de nomes no Windows

- **Não pode** usar: **\\ / : * ? " < > |**
- Não pode ter dois itens com o **mesmo nome na mesma pasta** (e o Windows não diferencia maiúsculas).
- Nomes reservados: CON, PRN, AUX, NUL, COM1, LPT1…[^7]

> [!SIMPLES]
> Macete dos proibidos: **"barra, barra, dois-pontos, asterisco, interrogação, aspas, menor, maior, barra vertical"**. São símbolos que o sistema usa para outras coisas (caminhos, curingas, comandos).

### Arrastar e soltar (Explorador de Arquivos)

| Situação | Resultado padrão |
|---|---|
| Arrastar para pasta **na mesma unidade** (C: → C:) | **Move** |
| Arrastar para **outra unidade** (C: → pendrive) | **Copia** |
| Arrastar com **Ctrl** | **Copia** |
| Arrastar com **Shift** | **Move** |
| Arrastar com **Alt** (ou Ctrl + Shift) | Cria **atalho** |
| Arrastar um **programa (.exe)** | Cria **atalho** |

*Fonte da tabela.*[^8]

> [!SIMPLES]
> Mesma "gaveta grande" (unidade) → **muda de lugar**. Gaveta diferente (pendrive) → **faz cópia**, para você não perder o original sem querer.

> [!PEGADINHA]
> - **Copiar, recortar e colar** funcionam em **arquivos e em pastas** (a CETAP já perguntou isso).[^11]
> - Uma pasta **pode estar vazia**.
> - Um arquivo **.doc** do Word **pode** ser aberto no **LibreOffice Writer** (e vice-versa, com ressalvas de formatação).
> - **Arquivo sem extensão não é inútil**: no Linux, a extensão nem é obrigatória.

## Linux: diretórios {.cai}

O Linux organiza tudo numa **única árvore** que começa na **raiz /**. Os diretórios seguem o padrão **FHS**:[^3]

| Diretório | O que guarda |
|---|---|
| **/** | Raiz de tudo |
| **/bin** e **/sbin** | Programas (comandos) essenciais; /sbin, os de administração |
| **/boot** | Arquivos de **inicialização** (o kernel) |
| **/dev** | **Dispositivos** (discos, terminais) vistos como arquivos |
| **/etc** | **Arquivos de configuração** do sistema |
| **/home** | **Pastas pessoais** dos usuários (/home/ana) |
| **/root** | Pasta pessoal do **root** (não confundir com a raiz /) |
| **/tmp** | Arquivos **temporários** |
| **/usr** | Programas e bibliotecas dos usuários |
| **/var** | Dados **variáveis**: **logs** (/var/log), filas, cache |
| **/mnt** e **/media** | Pontos de **montagem** (pendrives, CDs, outros discos) |
| **/proc** | Informações do **kernel e dos processos** (sistema de arquivos virtual) |

> [!SIMPLES]
> No Linux, **tudo é arquivo**, até o pendrive (/dev/sdb). Não existe "C:" ou "D:": o pendrive aparece como uma **pasta** dentro de /media. O "**~**" é atalho para a sua pasta pessoal (/home/seu-nome).

> [!PEGADINHA]
> - **/root** é a pasta do **administrador**. **/** é a **raiz** do sistema.
> - Configurações ficam em **/etc** (e não em /conf).
> - Arquivos e pastas **ocultos** começam com **ponto**: *.bashrc*.[^2]

## Linux: comandos básicos {.cai}

| Comando | Faz o quê |
|---|---|
| **ls** | **Lista** o conteúdo do diretório (**ls -l** detalhado; **ls -a** mostra ocultos) |
| **cd** | **Muda** de diretório (**cd ..** sobe; **cd ~** vai para a pasta pessoal) |
| **pwd** | Mostra o diretório **atual** |
| **mkdir** | **Cria** diretório |
| **rmdir** | Remove diretório **vazio** |
| **rm** | **Remove** arquivos (**rm -r** apaga pasta com conteúdo) |
| **cp** | **Copia** |
| **mv** | **Move** ou **renomeia** |
| **touch** | Cria arquivo vazio (ou atualiza a data) |
| **cat** | Mostra o conteúdo de um arquivo |
| **more** / **less** | Mostra o conteúdo **página por página** |
| **grep** | **Procura texto** dentro de arquivos |
| **find** | **Procura arquivos** pelo nome e outros critérios |
| **chmod** | Muda as **permissões** |
| **chown** | Muda o **dono** do arquivo |
| **ps** / **top** | Lista os **processos** (top, em tempo real) |
| **kill** | Encerra um processo pelo número (PID) |
| **df** / **du** | Espaço livre nos **discos** / espaço usado por pastas |
| **man** | **Manual** de um comando (man ls) |
| **sudo** | Executa um comando **como administrador** |
| **su** | **Troca de usuário** (sem nome, vira root) |
| **passwd** | Troca a **senha** |
| **shutdown** / **reboot** | Desliga / **reinicia** |
| **tar** | Agrupa (e compacta) arquivos |

*Fonte da tabela.*[^2][^9]

> [!SIMPLES]
> Muitos comandos são abreviações em inglês: **ls** = *list*, **cd** = *change directory*, **pwd** = *print working directory*, **mkdir** = *make directory*, **rm** = *remove*, **cp** = *copy*, **mv** = *move*. Saber a palavra em inglês resolve metade das questões.

> [!PEGADINHA]
> - **mkdir cria** diretório; **não exclui** nada (a CETAP usou essa troca).[^10]
> - **mv** também serve para **renomear**.
> - **Reiniciar** = **desligar e ligar de novo, nessa ordem**, o sistema inteiro.[^12]
> - Para entrar no Linux (login), o padrão é **nome de usuário e senha**.[^12]

### Permissões

Cada arquivo tem permissões para três grupos: **dono (u)**, **grupo (g)** e **outros (o)**. Cada um pode ter:[^2][^9]

| Letra | Permissão | Valor |
|---|---|---|
| **r** | Ler (*read*) | **4** |
| **w** | Escrever (*write*) | **2** |
| **x** | Executar (*execute*) | **1** |

Some os valores: **7** = rwx, **6** = rw-, **5** = r-x, **4** = r--.

> [!EXEMPLO]
> **chmod 754 relatorio.sh**
> - dono: 7 = **rwx** (lê, escreve, executa)
> - grupo: 5 = **r-x** (lê e executa)
> - outros: 4 = **r--** (só lê)
>
> No **ls -l** aparece: **-rwxr-xr--**. O primeiro caractere diz o tipo: **-** arquivo, **d** diretório, **l** link.

> [!SIMPLES]
> Leia o número de três dígitos como **"dono, grupo, resto do mundo"**. Cada dígito é a soma de **ler (4) + escrever (2) + executar (1)**.

### Interfaces gráficas

O Linux pode ser usado pelo **terminal** (linha de comando, com o *shell*, geralmente o **bash**) ou por **ambientes gráficos**: **GNOME**, **KDE Plasma**, **XFCE**, **Cinnamon**. Eles têm área de trabalho, botão direito do mouse, pastas, copiar e colar, e acesso a CDs e pendrives, como no Windows.[^2]

## Revisão rápida {- .colunas}

- Windows: proprietário; Linux: **livre (GPL)**, kernel de **Linus Torvalds** (1991).
- Linux **diferencia** maiúsculas; Windows **não**.
- Windows usa **\\** e unidades C:, D:; Linux usa **/** e uma raiz só.
- Windows 11: menu centralizado, **TPM 2.0**, Secure Boot, **só 64 bits**.
- Win + E Explorador; Win + D área de trabalho; Win + L bloqueia; Win + I Configurações.
- Ctrl + Shift + Esc = Gerenciador de Tarefas; Alt + F4 fecha.
- Print Screen **copia** a tela; não imprime.
- Shift + Delete, pendrive e rede: **não vão para a Lixeira**.
- Nomes no Windows: proibidos **\\ / : * ? " < > |**.
- Arrastar na mesma unidade **move**; entre unidades **copia**.
- /etc configurações; /home usuários; /root administrador; /var logs; /tmp temporários.
- ls lista; mkdir cria; rm remove; mv move/renomeia; pwd mostra onde estou.
- chmod: r = 4, w = 2, x = 1; 755 = rwxr-xr-x.
- Arquivo oculto no Linux começa com **ponto**.

## Flashcards {- .flashcards}

- Linux diferencia maiúsculas de minúsculas? :: **Sim** (case sensitive)
- Licença do Linux :: **GPL** (software livre)
- Atalho para abrir o Explorador de Arquivos :: **Win + E**
- Atalho para bloquear o Windows :: **Win + L**
- Atalho para o Gerenciador de Tarefas direto :: **Ctrl + Shift + Esc**
- Excluir sem passar pela Lixeira :: **Shift + Delete**
- Requisito de segurança exigido pelo Windows 11 :: **TPM 2.0** (e Secure Boot)
- Arrastar arquivo para outra unidade faz o quê? :: **Copia**
- Caracteres proibidos em nomes no Windows :: **\\ / : * ? " < > |**
- Diretório de configurações no Linux :: **/etc**
- Diretório das pastas pessoais :: **/home**
- Comando que lista arquivos :: **ls**
- Comando que cria diretório :: **mkdir**
- Comando que move ou renomeia :: **mv**
- chmod 644 significa… :: Dono **rw-**, grupo **r--**, outros **r--**

## Questões de fixação {-}

::: questao
No Windows 10 e 11, a combinação de teclas que bloqueia o computador, exigindo nova autenticação, é:
A) Win + D
B) Win + L
C) Win + E
D) Alt + F4
E) Ctrl + Esc
= B | Win + L (lock). Win + D mostra a área de trabalho; Win + E abre o Explorador.
:::

::: questao
Sobre a Lixeira do Windows, é CORRETO afirmar:
A) Arquivos excluídos de um pendrive vão para a Lixeira.
B) Shift + Delete envia o arquivo para a Lixeira.
C) Arquivos excluídos do disco interno com Delete podem ser restaurados enquanto estiverem na Lixeira.
D) Esvaziar a Lixeira apenas oculta os arquivos.
E) Arquivos de pastas de rede sempre vão para a Lixeira local.
= C | Delete no disco interno manda para a Lixeira. Pendrive, rede e Shift + Delete excluem direto.
:::

::: questao
No Explorador de Arquivos, ao arrastar um arquivo de uma pasta do disco C: para um pendrive, sem pressionar nenhuma tecla, o arquivo é:
A) movido
B) copiado
C) excluído
D) compactado
E) transformado em atalho
= B | Entre unidades diferentes, o padrão é copiar. Na mesma unidade, mover.
:::

::: questao
NÃO é um requisito mínimo do Windows 11:
A) TPM 2.0
B) processador de 64 bits
C) UEFI com Inicialização Segura
D) 4 GB de memória RAM
E) processador de 32 bits
= E | Não existe Windows 11 de 32 bits.
:::

::: questao
No Linux, o diretório que normalmente guarda os arquivos de configuração do sistema é:
A) /home
B) /etc
C) /tmp
D) /dev
E) /boot
= B | /etc. /home guarda as pastas dos usuários; /tmp, temporários; /dev, dispositivos; /boot, inicialização.
:::

::: questao
No terminal do Linux, o comando que mostra o diretório em que o usuário está é:
A) ls
B) cd
C) pwd
D) mkdir
E) whoami
= C | pwd = print working directory. whoami mostra o nome do usuário.
:::

::: questao
Após o comando "chmod 750 script.sh", as permissões do arquivo serão:
A) rwxr-x---
B) rwxrwx---
C) rw-r-x---
D) rwxr-xr-x
E) r-xr-x---
= A | 7 = rwx (dono), 5 = r-x (grupo), 0 = --- (outros).
:::

::: questao
Assinale a alternativa que apresenta apenas caracteres que NÃO podem ser usados em nomes de arquivos no Windows.
A) - _ .
B) ? * |
C) # @ !
D) ( ) &
E) $ % +
= B | Os proibidos são \ / : * ? " < > |.
:::

::: questao
Sobre o Linux, é CORRETO afirmar:
A) É um software proprietário da Microsoft.
B) Não diferencia letras maiúsculas e minúsculas nos nomes de arquivos.
C) Seu núcleo foi criado por Linus Torvalds e é distribuído sob a licença GPL.
D) Só pode ser usado por linha de comando.
E) Usa unidades com letras, como C: e D:.
= C | Kernel de Linus Torvalds, GPL. Ele diferencia maiúsculas, tem interfaces gráficas e usa uma raiz única (/).
:::

## Questões da banca (CETAP) {-}

Questões **reais** de provas anteriores da Fundação CETAP sobre este tema, com o **gabarito oficial definitivo**. O texto está como na prova (inclusive a grafia da época).

::: questao
**CETAP · 2010 · DETRAN-RR · Analista Técnico I – Analista de Sistemas · Questão 16**[^10] · [ver prova](https://www.estudegratis.com.br/images/provas/15539-cetap-2010-detran-rr-analista-de-sistemas-prova.pdf) · [gabarito](https://www.estudegratis.com.br/images/provas/15539-cetap-2010-detran-rr-analista-de-sistemas-gabarito.pdf)

Com relação ao sistema operacional Linux, analise as afirmativas a seguir e marque a alternativa CORRETA.

I- O comando mkdir é usado para excluir os arquivos em um diretório;
II- O comando ls é usado para listar os arquivos em um diretório;
III- O sistema operacional Linux foi criado pela Microsoft;
IV- O GIMP é um programa para edição de textos;
V- O sistema operacional Linux só pode ser usado em computadores pessoais.
A) Somente a afirmativa II está correta.
B) Somente as afirmativas I e II estão corretas.
C) Somente as afirmativas I, II e V estão corretas.
D) Somente as afirmativas II e V estão corretas.
E) Todas as afirmativas estão corretas.
= A | Gabarito **oficial definitivo** da CETAP. **mkdir cria** diretório; **ls lista**; o Linux não é da Microsoft; o **GIMP edita imagens**; o Linux roda em servidores, celulares e outros equipamentos.
:::

::: questao
**CETAP · 2010 · DETRAN-RR · Analista Técnico I – Analista de Sistemas · Questão 17**[^10] · [ver prova](https://www.estudegratis.com.br/images/provas/15539-cetap-2010-detran-rr-analista-de-sistemas-prova.pdf) · [gabarito](https://www.estudegratis.com.br/images/provas/15539-cetap-2010-detran-rr-analista-de-sistemas-gabarito.pdf)

Com relação ao sistema operacional Windows analise as afirmativas a seguir e marque a alternativa CORRETA.

I- A tecla print screen tem a função de imprimir o documento na impressora padrão disponível no momento;
II- O usuário pode alternar a visualização das janelas abertas no computador utilizando as teclas ALT+ESC;
III- Windows 7 e Windows Now ! são nomes de duas versões desse sistema operacional;
IV- O Paint é um programa para edição de planilhas;
V- O Outlook Express é um programa usado para o gerenciamento de contatos e mensagens de e-mail.
A) Somente as afirmativas II e IV estão corretas.
B) Somente as afirmativas II e V estão corretas.
C) Somente as afirmativas I, II e V estão corretas.
D) Somente as afirmativas II, III e V estão corretas.
E) Todas as afirmativas estão corretas.
= B | Gabarito **oficial definitivo** da CETAP. **Print Screen copia** a tela (não imprime); "Windows Now!" não existe; **Paint** edita imagens. Alt + Esc alterna janelas e o Outlook Express era o programa de e-mail do Windows XP.
:::

::: questao
**CETAP · 2010 · DETRAN-RR · Analista Técnico I – Analista de Sistemas · Questão 20**[^10] · [ver prova](https://www.estudegratis.com.br/images/provas/15539-cetap-2010-detran-rr-analista-de-sistemas-prova.pdf) · [gabarito](https://www.estudegratis.com.br/images/provas/15539-cetap-2010-detran-rr-analista-de-sistemas-gabarito.pdf)

Quanto aos conceitos de organização e de gerenciamento de informações, arquivos, pastas e programas, podemos afirmar que:
A) Pasta, arquivo e diretório são sinônimos.
B) O Windows Explorer, por questões de segurança, não permite a visualização de arquivos sob o diretório "Windows/System32".
C) Um arquivo não pode ter mais de 100 giga bytes de tamanho.
D) Todos os programas instalados no Windows estão obrigatoriamente sob o diretório "Arquivos de Programas".
E) Não é possível usar a partição do tipo NTFS no Windows 98.
= E | Gabarito **oficial definitivo** da CETAP. O **Windows 98** usava **FAT/FAT32** e não reconhece **NTFS**. Pasta e diretório são sinônimos, mas **arquivo** não; não há limite de 100 GB no NTFS; programas podem ser instalados em outras pastas.
:::

::: questao
**CETAP · 2010 · DETRAN-RR · Programador de Computador · Questão 21**[^12] · [ver prova](https://www.estudegratis.com.br/images/provas/15588-cetap-2010-detran-rr-programador-de-computador-prova.pdf) · [gabarito](https://www.estudegratis.com.br/images/provas/15588-cetap-2010-detran-rr-programador-de-computador-gabarito.pdf)

Quais as informações que você deve fornecer como procedimento padrão para autenticar-se no sistema operacional Linux:
A) Nome de usuário e senha.
B) Somente o nome de usuário.
C) Somente a senha.
D) Certificado digital.
E) Assinatura digital.
= A | Gabarito **oficial definitivo** da CETAP. O login padrão do Linux pede **usuário e senha**.
:::

::: questao
**CETAP · 2010 · DETRAN-RR · Programador de Computador · Questão 22**[^12] · [ver prova](https://www.estudegratis.com.br/images/provas/15588-cetap-2010-detran-rr-programador-de-computador-prova.pdf) · [gabarito](https://www.estudegratis.com.br/images/provas/15588-cetap-2010-detran-rr-programador-de-computador-gabarito.pdf)

No sistema Linux, a opção de reiniciar o sistema operacional é usada para:
A) Desligar e ligar, nessa ordem, somente os serviços de rede e o monitor.
B) Desligar e ligar, nessa ordem, o sistema operacional.
C) Somente desligar o sistema operacional.
D) Ligar e desligar, nessa ordem, o sistema operacional.
E) Desligar e ligar, nessa ordem, somente os serviços de rede, o monitor e os periféricos.
= B | Gabarito **oficial definitivo** da CETAP. Reiniciar (**reboot**) = **desligar e ligar de novo** o sistema inteiro, nessa ordem.
:::

::: questao
**CETAP · 2010 · Assembleia Legislativa de Roraima · Técnico em Informática · Questão 21**[^11] · [ver prova](https://www.estudegratis.com.br/images/provas/15602-cetap-2010-al-rr-tecnico-em-informatica-prova.pdf) · [gabarito](https://www.estudegratis.com.br/images/provas/15602-cetap-2010-al-rr-tecnico-em-informatica-gabarito.pdf)

Gnome é uma interface gráfica que facilita o uso do ambiente Linux e apresenta uma aparência semelhante à oferecida pelos sistemas Windows. Comparando Gnome com a interface gráfica do Windows, analise as afirmativas a seguir e marque a alternativa CORRETA.

I- O Gnome tem uma área de trabalho;
II- O Gnome permite utilizar o botão direito do mouse;
III- O Gnome permite criar pastas;
IV- O Gnome permite as operações de copiar e colar;
V- Quando houver uma leitora de CD disponível, o Gnome permitirá ver arquivos que se encontram em um CD.
A) Somente a afirmativa III está correta.
B) Somente a afirmativa IV está correta.
C) Somente as afirmativas I, III, IV e V estão corretas.
D) Somente as afirmativas I, II, III e V estão corretas.
E) Todas as afirmativas estão corretas.
= E | Gabarito **oficial definitivo** da CETAP. O **GNOME** é um ambiente gráfico completo: área de trabalho, botão direito, pastas, copiar e colar e acesso a CDs e pendrives, como no Windows.
:::

::: questao
**CETAP · 2010 · Assembleia Legislativa de Roraima · Técnico em Informática · Questão 25**[^11] · [ver prova](https://www.estudegratis.com.br/images/provas/15602-cetap-2010-al-rr-tecnico-em-informatica-prova.pdf) · [gabarito](https://www.estudegratis.com.br/images/provas/15602-cetap-2010-al-rr-tecnico-em-informatica-gabarito.pdf)

A informação no computador é organizada em pastas e arquivos. Pastas e arquivos têm nomes, e os arquivos usualmente contam com uma extensão que define o tipo de arquivo, o que dá uma idéia da sua funcionalidade. Das seguintes alternativas referentes a arquivos e pastas, selecione a CORRETA.
A) Os arquivos que não tem extensão não têm utilidade.
B) Toda pasta precisa ter pelo menos um arquivo.
C) As operações de copiar e colar podem ser efetuadas em pastas e em arquivos.
D) As operações de recortar e colar só podem ser efetuadas em arquivos.
E) Um arquivo .doc criado no Microsoft Word não poderá ser aberto no Writer do Open Office.
= C | Gabarito **oficial definitivo** da CETAP. Copiar, recortar e colar funcionam em **arquivos e pastas**. Pasta pode estar vazia; arquivo sem extensão pode ser útil; o Writer abre .doc.
:::

## Referências {- .referencias}

1. TANENBAUM, Andrew S.; BOS, Herbert. *Sistemas Operacionais Modernos*. 4. ed. São Paulo: Pearson, 2016. Caps. 1 e 4 (arquivos e diretórios), 10 (estudo de caso: Linux) e 11 (estudo de caso: Windows).
2. NEMETH, Evi; SNYDER, Garth; HEIN, Trent R.; WHALEY, Ben; MACKIN, Dan. *UNIX and Linux System Administration Handbook*. 5. ed. Boston: Addison-Wesley, 2017. Caps. 1 a 5 (comandos, arquivos, permissões e processos).
3. LINUX FOUNDATION. *Filesystem Hierarchy Standard*, versão 3.0, 2015. Disponível em: <https://refspecs.linuxfoundation.org/FHS_3.0/fhs-3.0.html>.
4. MICROSOFT. *Atalhos de teclado no Windows*. Suporte Microsoft. Disponível em: <https://support.microsoft.com/pt-br/windows/atalhos-de-teclado-no-windows-dcc61a57-8ff0-cffe-9796-cb9706c75eec>. Acesso em: 2 nov. 2026.
5. MICROSOFT. *Especificações e requisitos do sistema do Windows 11*. Disponível em: <https://www.microsoft.com/pt-br/windows/windows-11-specifications>. Acesso em: 2 nov. 2026.
6. MICROSOFT. *O suporte ao Windows 10 terminou em 14 de outubro de 2025*. Disponível em: <https://www.microsoft.com/pt-br/windows/end-of-support>. Acesso em: 2 nov. 2026.
7. MICROSOFT. *Nomear arquivos, caminhos e namespaces*. Microsoft Learn. Disponível em: <https://learn.microsoft.com/pt-br/windows/win32/fileio/naming-a-file>. Acesso em: 2 nov. 2026.
8. KARP, David A. *Windows XP Pocket Reference*. Sebastopol: O'Reilly, 2002. Cap. 2 — Shortcuts (arrastar com Ctrl, Shift e Alt; mesma unidade × outra unidade). O comportamento se mantém no Explorador de Arquivos do Windows 10 e 11.
9. KERRISK, Michael. *The Linux man-pages project* (ls, chmod, mv, ps). Disponível em: <https://man7.org/linux/man-pages/>. Acesso em: 2 nov. 2026.
10. FUNDAÇÃO CETAP. *Concurso Público nº 001/2009 do DETRAN-RR*: prova objetiva do cargo Analista Técnico I – Analista de Sistemas, aplicada em 11 abr. 2010, e gabarito oficial definitivo. Prova: <https://www.estudegratis.com.br/images/provas/15539-cetap-2010-detran-rr-analista-de-sistemas-prova.pdf>. Gabarito: <https://www.estudegratis.com.br/images/provas/15539-cetap-2010-detran-rr-analista-de-sistemas-gabarito.pdf>. Acesso em: 11 out. 2026.
11. FUNDAÇÃO CETAP. *Concurso Público nº 001/2009 da Assembleia Legislativa do Estado de Roraima*: prova objetiva do cargo Técnico em Informática, aplicada em 4 abr. 2010, e gabarito oficial definitivo. Prova: <https://www.estudegratis.com.br/images/provas/15602-cetap-2010-al-rr-tecnico-em-informatica-prova.pdf>. Gabarito: <https://www.estudegratis.com.br/images/provas/15602-cetap-2010-al-rr-tecnico-em-informatica-gabarito.pdf>. Acesso em: 11 out. 2026.
12. FUNDAÇÃO CETAP. *Concurso Público nº 001/2009 do DETRAN-RR*: prova objetiva do cargo Técnico em Atividade Administrativa – Programador de Computador, aplicada em 11 abr. 2010, e gabarito oficial definitivo. Prova: <https://www.estudegratis.com.br/images/provas/15588-cetap-2010-detran-rr-programador-de-computador-prova.pdf>. Gabarito: <https://www.estudegratis.com.br/images/provas/15588-cetap-2010-detran-rr-programador-de-computador-gabarito.pdf>. Acesso em: 11 out. 2026.
