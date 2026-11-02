---
capitulo: 17
titulo: Sistemas de Arquivamento, Proteção Lógica e Backup
edital: Qui 15/10 · Item 5 — Sistemas de arquivamento: arquivo, registro, métodos de acesso, diretórios, proteção; proteção lógica e backup
lead: Como o sistema operacional guarda os dados em disco: arquivos, registros, métodos de acesso, formas de alocação, estrutura de diretórios e permissões. Depois, proteção lógica e os tipos de backup (completo, incremental e diferencial), que é o ponto que mais cai.
---

> [!DICA]
> A proteção **física** (estabilizador, no-break) está no **Cap. 9**. Aqui é a parte **lógica**: arquivos, permissões e backup.

## Arquivo e registro

**Arquivo** é um conjunto de informações relacionadas, **com nome**, gravado em memória secundária (disco, SSD, pendrive). É a unidade lógica de armazenamento que o sistema operacional oferece ao usuário.[^1][^2]

**Atributos** de um arquivo: **nome**, **tipo/extensão**, **tamanho**, **localização**, **dono**, **proteção (permissões)**, **datas** de criação, modificação e acesso.[^1][^3]

**Operações**: **criar**, **abrir**, **ler**, **escrever**, **posicionar** (*seek*), **fechar**, **excluir**, **renomear**, truncar.[^1]

> [!SIMPLES]
> Um arquivo é como uma **pasta de papel com etiqueta**: a etiqueta (atributos) diz o nome, o dono, a data e quem pode mexer; dentro estão os dados.

**Registro** é a **unidade de informação** dentro do arquivo, formado por **campos**.[^2][^4]

| Conceito | O que é | Exemplo |
|---|---|---|
| **Campo** | Um dado | Nome, CPF, salário |
| **Registro lógico** | Conjunto de campos sobre **um** item, como o programa o enxerga | Os dados de **um** servidor |
| **Registro físico (bloco)** | Unidade que o **disco** lê ou grava de uma vez | Um bloco de 4 KB |
| **Fator de blocagem** | Quantos registros lógicos cabem em um bloco | Bloco de 4.096 bytes ÷ registro de 512 bytes = **8** |

> [!SIMPLES]
> Numa **ficha cadastral**, cada linha (nome, CPF) é um **campo**; a ficha inteira de uma pessoa é um **registro**; o **arquivo** é o fichário com todas as fichas. O **bloco** é quantas fichas a mão consegue pegar de uma vez.

- Registros podem ter **tamanho fixo** (mais fácil de localizar) ou **variável** (economiza espaço).[^4]
- Para o SO, o arquivo pode ser apenas uma **sequência de bytes** (Windows e Linux), e o programa interpreta os registros.[^1]

## Organização e métodos de acesso {.cai}

| Método | Como acessa | Exemplo |
|---|---|---|
| **Sequencial** | Lê os registros **em ordem**, do primeiro ao último; para chegar ao 100º, passa pelos 99 anteriores | **Fita magnética**, arquivo de log, áudio |
| **Direto (aleatório ou relativo)** | Vai **direto** a qualquer registro pelo seu **número/posição** | Disco; banco de dados que busca o registro nº 500 |
| **Indexado (sequencial indexado)** | Consulta um **índice** (chave → posição) e depois vai ao registro | Busca por CPF numa tabela com índice |

*Fonte da tabela.*[^1][^2][^4]

> [!SIMPLES]
> - **Sequencial** = **fita cassete**: para ouvir a música 5, tem que passar pelas 4 primeiras.
> - **Direto** = **CD/Spotify**: pula direto para a música 5.
> - **Indexado** = **índice remissivo de um livro**: procura a palavra no índice, que diz a página, e vai lá.

> [!PEGADINHA]
> - Fita magnética permite **somente acesso sequencial**. Disco permite **sequencial e direto**.[^1]
> - O acesso indexado usa uma **estrutura extra (índice)**, que ocupa espaço e precisa ser **atualizada** a cada inclusão.

## Alocação do espaço em disco

| Alocação | Como funciona | Vantagem | Desvantagem |
|---|---|---|---|
| **Contígua** | Arquivo em **blocos seguidos** | Leitura **rápida**, acesso direto fácil | **Fragmentação externa**; difícil crescer o arquivo |
| **Encadeada (lista ligada)** | Cada bloco **aponta para o próximo** | Sem fragmentação externa | Acesso direto **lento** (tem que seguir a corrente); ponteiro quebrado perde o resto |
| **Encadeada com tabela (FAT)** | Os ponteiros ficam numa **tabela** na memória | Acesso direto mais rápido que a lista | A tabela ocupa memória |
| **Indexada (i-node)** | Um **bloco de índice** guarda a lista de **todos** os blocos do arquivo | Acesso direto **rápido**, sem fragmentação externa | Gasta espaço com o índice |

*Fonte da tabela.*[^1][^2]

> [!SIMPLES]
> - **Contígua**: guardar um livro **inteiro numa prateleira só**, em sequência.
> - **Encadeada**: cada folha tem um bilhete dizendo "**a próxima está na prateleira X**" (caça ao tesouro).
> - **Indexada**: uma **ficha** lista onde está cada folha.

> [!DICA]
> **FAT** (*File Allocation Table*) é o sistema de arquivos antigo do Windows e dos pendrives. O **i-node** é a estrutura usada no **Linux/Unix** (ext4).[^1]

### Sistemas de arquivos que caem

| Sistema | Onde | Destaques |
|---|---|---|
| **FAT32** | Pendrives, cartões antigos | Compatível com tudo; **arquivo de no máximo 4 GB**; **sem permissões** |
| **exFAT** | Pendrives e cartões grandes | Sem o limite de 4 GB, sem permissões |
| **NTFS** | **Windows** | **Permissões** (ACL), **journaling**, **criptografia (EFS)**, **compressão**, cotas |
| **ext4** | **Linux** | **Journaling**, permissões Unix |
| **Btrfs** | Linux | ***Copy-on-write***, **snapshots**, **checksums** dos dados, compressão, vários discos |

*Fonte da tabela.*[^5][^6]

- **Journaling**: o sistema anota num **diário (journal)** o que vai alterar **antes** de alterar. Se faltar energia no meio, ele se recupera rapidamente, sem corromper a estrutura.[^1]
- **Snapshot**: "foto" do estado do sistema de arquivos num momento, para voltar depois.[^6]

> [!PEGADINHA]
> Copiar um arquivo de **5 GB** para um pendrive em **FAT32** dá erro, **mesmo com espaço livre**: o limite é **4 GB por arquivo**.[^5]

## Diretórios {.cai}

**Diretório** (pasta) é uma estrutura que **organiza os arquivos** e guarda informações sobre eles (nome, localização, atributos).[^1][^2]

| Estrutura | Como é | Problema |
|---|---|---|
| **Nível único** | **Um só diretório** para todos os arquivos de todos os usuários | Nomes não podem se repetir; bagunça |
| **Dois níveis** | Um diretório **por usuário** (MFD → UFD) | Usuário não organiza em subpastas |
| **Árvore** (hierárquica) | Diretórios dentro de diretórios, a partir de uma **raiz** | É o modelo atual (Windows e Linux) |
| **Grafo acíclico** | Árvore + **links**: o mesmo arquivo aparece em **mais de um** diretório | Cuidado ao excluir (o arquivo pode ter vários nomes) |

*Fonte da tabela.*[^1][^2][^3]

- **Caminho absoluto**: a partir da **raiz** (/home/ana/notas.txt; C:\\Dados\\notas.txt).
- **Caminho relativo**: a partir do **diretório atual** (../fotos).
- **Link físico (*hard link*)**: outro **nome** para o **mesmo** arquivo (mesmo i-node). Apagar um nome não apaga os dados enquanto houver outro.
- **Link simbólico (*soft link*, atalho)**: um arquivo que **aponta para o caminho** de outro. Se o original for apagado, o link "quebra".[^1]

> [!SIMPLES]
> - **Hard link** = a mesma pessoa com **dois nomes** no cadastro. Enquanto existir um, ela existe.
> - **Link simbólico** = um **endereço anotado num papel**. Se a pessoa se mudar, o papel aponta para o nada.
> O "atalho" do Windows funciona como link simbólico.

## Proteção de arquivos

Para evitar acesso indevido, o SO controla **quem** pode fazer **o quê** em cada arquivo.[^1][^2]

| Mecanismo | Como funciona |
|---|---|
| **Senha por arquivo** | Cada arquivo tem uma senha. Pouco prático |
| **Grupos de usuários** (dono, grupo, outros) | Permissões **r, w, x** para cada um (Linux; Cap. 15) |
| **Lista de controle de acesso (ACL)** | Cada arquivo tem uma **lista** de usuários e grupos com o que cada um pode fazer (NTFS: leitura, gravação, modificar, controle total) |
| **Capacidades** | Cada **usuário** tem a lista do que pode acessar (o inverso da ACL) |

> [!SIMPLES]
> A **ACL** é a **lista de convidados na porta da sala**: o arquivo sabe quem pode entrar. A **capacidade** é o **crachá** que o usuário carrega dizendo onde ele pode entrar.

## Proteção lógica

**Proteção lógica** protege os **dados e programas** (e não o equipamento) contra acesso indevido, alteração, perda e código malicioso.[^7]

- **Controle de acesso**: identificação e **autenticação** (algo que você **sabe**: senha; **tem**: token, cartão; **é**: biometria). Usar dois fatores = **autenticação multifator**.
- **Privilégio mínimo**: cada usuário recebe **só as permissões necessárias** ao seu trabalho.
- **Permissões** em arquivos e pastas (ACL, rwx).
- **Criptografia** de arquivos e discos (EFS, BitLocker, LUKS).
- **Antimalware**, **firewall** e **atualizações**.
- **Registros (logs)** de acesso e auditoria.
- **Backup**.

*Fonte da tabela.*[^7]

> [!SIMPLES]
> Proteção **física** = tranca, no-break, ar-condicionado (protege a **máquina**). Proteção **lógica** = senha, permissão, antivírus, backup (protege os **dados**).

> [!DICA]
> Antimalware, firewall pessoal e hardening têm dia próprio (semana 8, segurança da informação).

## Backup {.cai}

**Backup** é a **cópia de segurança** dos dados, guardada separadamente, para **restaurar** em caso de perda (falha de disco, exclusão acidental, ransomware, incêndio). A norma **ISO/IEC 27002** recomenda manter cópias e **testar a restauração** periodicamente.[^7]

### Tipos de backup

O Windows marca cada arquivo alterado com o **atributo de arquivamento** (*archive bit*). Os tipos de backup diferem em **o que copiam** e se **desmarcam** esse atributo.[^8]

| Tipo | O que copia | Desmarca o atributo? | Para restaurar |
|---|---|---|---|
| **Completo (normal, full)** | **Tudo** o que foi selecionado | **Sim** | Só o último completo |
| **Incremental** | O que mudou desde o **último backup (completo ou incremental)** | **Sim** | Último completo + **todos** os incrementais seguintes, em ordem |
| **Diferencial** | O que mudou desde o **último completo** | **Não** | Último completo + **só o último** diferencial |
| **Cópia** | Tudo o que foi selecionado | **Não** (não interfere na rotina) | — |
| **Diário** | O que foi alterado **no dia** | **Não** | — |

*Fonte da tabela.*[^8][^9]

> [!SIMPLES]
> Imagine um backup completo no **domingo**:
> - **Incremental**: segunda copia o que mudou na segunda; terça copia **só** o que mudou na terça; e assim por diante. Cada um é **pequeno e rápido**, mas para restaurar na sexta você precisa do domingo **+ seg + ter + qua + qui**.
> - **Diferencial**: segunda copia o que mudou desde domingo; terça copia **tudo** desde domingo de novo (seg + ter); vai **crescendo**. Para restaurar na sexta: domingo **+ só o de quinta**.

| | Incremental | Diferencial |
|---|---|---|
| Tamanho e tempo para **fazer** | **Menor** | Cresce a cada dia |
| Tempo para **restaurar** | **Maior** (muitas peças) | **Menor** (duas peças) |
| Referência | Último backup **de qualquer tipo** (completo ou incremental) | Último **completo** |

> [!PEGADINHA]
> - **Diferencial ≠ incremental**. Não são sinônimos.
> - O **diferencial** se baseia no **último completo**. O **incremental**, no **último backup** (completo ou incremental).
> - A CETAP (DETRAN-RR 2010) deu como correta a frase "o diferencial copia arquivos criados ou alterados desde o último backup **normal ou incremental**". Pela definição usual, essa descrição combina com o **incremental**. Na prova, se o enunciado repetir esse texto, lembre do gabarito da banca; nas outras alternativas daquela questão havia erros evidentes.[^10]

### Outros conceitos

- **Backup quente (online)**: feito com o sistema **funcionando**. **Backup frio (offline)**: feito com o sistema **parado** (mais consistente).[^9]
- **Regra 3-2-1**: **3** cópias dos dados, em **2** mídias diferentes, **1** delas **fora do local** (em outro prédio ou na nuvem).[^11]
- **RAID não é backup**: o espelhamento copia também a exclusão acidental e o vírus, na hora.[^9]
- **Mídias**: HD externo, fita (LTO, acesso sequencial, barata para grandes volumes), NAS, nuvem. **Memória RAM não serve para backup** (é volátil).
- **Testar a restauração**: backup que nunca foi testado pode não funcionar.[^7]

> [!SIMPLES]
> A regra 3-2-1 é "não guardar todos os ovos na mesma cesta": se o prédio pegar fogo, a cópia de outro lugar se salva.

## Revisão rápida {- .colunas}

- Arquivo = conjunto de dados com nome; registro = conjunto de campos.
- Fator de blocagem = registros lógicos por bloco físico.
- **Sequencial** (fita), **direto** (pela posição), **indexado** (pelo índice).
- Alocação contígua = rápida, fragmentação externa.
- Encadeada = cada bloco aponta o próximo; FAT = ponteiros numa tabela.
- Indexada = bloco de índice (i-node no Linux).
- **FAT32**: arquivo máximo de **4 GB**; sem permissões.
- **NTFS**: permissões, journaling, criptografia, compressão.
- **Journaling**: anota antes de alterar; recupera após queda.
- Diretório em **árvore**; grafo acíclico permite **links**.
- Hard link = outro nome; link simbólico = aponta para o caminho.
- **ACL** = lista de quem pode o quê em cada arquivo.
- **Incremental**: desde o último backup; restaura com completo + **todos**.
- **Diferencial**: desde o último **completo**; restaura com completo + **último**.
- Regra **3-2-1**; RAID não é backup; teste a restauração.

## Flashcards {- .flashcards}

- O que é registro? :: Conjunto de **campos** sobre um item
- Fita magnética permite qual acesso? :: **Somente sequencial**
- Acesso que usa uma tabela chave → posição :: **Indexado**
- Alocação com melhor leitura sequencial, mas fragmentação externa :: **Contígua**
- Estrutura de índice do Linux :: **i-node**
- Tamanho máximo de arquivo no FAT32 :: **4 GB**
- O que é journaling? :: Registrar as alterações **antes** de fazê-las, para recuperar após falhas
- Diferença entre hard link e link simbólico :: Hard = **outro nome** do mesmo arquivo; simbólico = **aponta para o caminho**
- O que é ACL? :: **Lista de controle de acesso** do arquivo
- Backup incremental copia… :: O que mudou desde o **último backup** (completo ou incremental)
- Backup diferencial copia… :: O que mudou desde o **último completo**
- Restaurar com diferenciais :: Último **completo** + **último diferencial**
- Restaurar com incrementais :: Último **completo** + **todos** os incrementais
- Backup frio :: Feito com o sistema **parado**
- Regra 3-2-1 :: **3** cópias, **2** mídias, **1** fora do local

## Questões de fixação {-}

::: questao
O método de acesso em que, para ler o registro de número 100, é necessário ler antes os 99 registros anteriores é o:
A) direto
B) indexado
C) sequencial
D) relativo
E) aleatório
= C | É o acesso sequencial, típico de fitas magnéticas.
:::

::: questao
Um bloco de disco tem 8.192 bytes e cada registro lógico tem 256 bytes. O fator de blocagem é:
A) 8
B) 16
C) 32
D) 64
E) 256
= C | 8.192 ÷ 256 = 32 registros por bloco.
:::

::: questao
A forma de alocação de arquivos em disco que mantém um bloco com a lista de todos os blocos do arquivo, permitindo acesso direto rápido sem fragmentação externa, é a alocação:
A) contígua
B) encadeada
C) indexada
D) sequencial
E) particionada fixa
= C | Alocação indexada (i-node). Encadeada exige percorrer a corrente; contígua causa fragmentação externa.
:::

::: questao
Um usuário tenta copiar um arquivo de vídeo de 6 GB para um pendrive formatado em FAT32 com 30 GB livres, e a cópia falha. A causa mais provável é:
A) falta de espaço no pendrive.
B) o FAT32 não aceita arquivos maiores que 4 GB.
C) o FAT32 não aceita arquivos de vídeo.
D) o pendrive precisa de permissões NTFS.
E) o arquivo está com o atributo de arquivamento marcado.
= B | Limite de 4 GB por arquivo no FAT32. A solução é usar exFAT ou NTFS.
:::

::: questao
Uma empresa faz backup completo no domingo e backups diferenciais de segunda a sexta. Para restaurar os dados após uma falha no sábado, são necessários:
A) apenas o backup de sexta-feira.
B) o completo de domingo e todos os diferenciais da semana.
C) o completo de domingo e o diferencial de sexta-feira.
D) apenas o completo de domingo.
E) os diferenciais de segunda e de sexta-feira.
= C | O diferencial acumula tudo desde o último completo: basta o completo + o último diferencial.
:::

::: questao
Sobre o backup incremental, é CORRETO afirmar:
A) Copia todos os arquivos, independentemente de alteração.
B) Copia os arquivos alterados desde o último backup completo ou incremental e desmarca o atributo de arquivamento.
C) É sinônimo de backup diferencial.
D) Torna a restauração mais rápida que a do diferencial.
E) Não depende de nenhum backup completo.
= B | É a definição. A restauração é mais lenta (precisa de todos os incrementais).
:::

::: questao
No sistema de arquivos, o recurso que registra as operações antes de executá-las, permitindo recuperar a consistência após uma queda de energia, é o:
A) journaling
B) desfragmentação
C) fator de blocagem
D) link simbólico
E) swapping
= A | Journaling. Presente no NTFS, ext4 e outros.
:::

::: questao
Sobre a estrutura de diretórios, é CORRETO afirmar:
A) No diretório de nível único, cada usuário tem seu próprio diretório.
B) A estrutura em árvore não permite subdiretórios.
C) No grafo acíclico, um mesmo arquivo pode aparecer em mais de um diretório por meio de links.
D) Caminho relativo sempre começa na raiz.
E) Link simbólico continua funcionando mesmo que o arquivo original seja apagado.
= C | Grafo acíclico = árvore com links. Caminho absoluto começa na raiz; link simbólico quebra se o original for apagado.
:::

::: questao
NÃO é uma medida de proteção lógica:
A) controle de acesso por senha e biometria.
B) permissões de leitura e escrita em pastas.
C) criptografia de disco.
D) uso de no-break para evitar desligamentos.
E) backup periódico com teste de restauração.
= D | No-break é proteção física (Cap. 9).
:::

## Questões da banca (CETAP) {-}

Questões **reais** de provas anteriores da Fundação CETAP sobre este tema, com o **gabarito oficial definitivo**. O texto está como na prova (inclusive a grafia da época).

::: questao
**CETAP · 2010 · DETRAN-RR · Analista Técnico I – Analista de Sistemas · Questão 22**[^10] · [ver prova](https://www.estudegratis.com.br/images/provas/15539-cetap-2010-detran-rr-analista-de-sistemas-prova.pdf) · [gabarito](https://www.estudegratis.com.br/images/provas/15539-cetap-2010-detran-rr-analista-de-sistemas-gabarito.pdf)

O backup é bastante útil para a recuperação de dados perdidos ou apagados acidentalmente. Sobre o backup, é possível afirmar:
A) O backup completo copia apenas os arquivos criados nas últimas 24 horas.
B) O backup diferencial é sinônimo de backup incremental.
C) O backup diferencial copia arquivos criados ou alterados desde o último backup normal ou incremental.
D) O backup frio é realizado sem tirar o sistema do ar.
E) Pode-se gravar o backup na própria memória RAM do computador.
= C | Gabarito **oficial definitivo** da CETAP. Atenção: pela definição usual, "desde o último backup normal **ou incremental**" descreve o **incremental**; o diferencial copia o que mudou desde o último **completo** (veja a seção de backup). A banca manteve a C porque as outras têm erros evidentes: o completo copia **tudo**; diferencial e incremental **não** são sinônimos; backup **frio** é feito com o sistema **parado**; a RAM é **volátil**.
:::

### Mais questões da CETAP sobre este tema (TEC Concursos)

Estas não estão transcritas aqui (os termos do TEC não permitem), mas você pode resolvê-las no TEC, com gabarito e comentários:

| Tema | Questões |
|---|---|
| Sistema de arquivos Btrfs | [#3336080](https://www.tecconcursos.com.br/questoes/3336080) BANPARÁ 2025 |

## Referências {- .referencias}

1. TANENBAUM, Andrew S.; BOS, Herbert. *Sistemas Operacionais Modernos*. 4. ed. São Paulo: Pearson, 2016. Cap. 4 — Sistemas de arquivos.
2. MACHADO, Francis B.; MAIA, Luiz Paulo. *Arquitetura de Sistemas Operacionais*. 5. ed. Rio de Janeiro: LTC, 2013. Cap. 11 — Sistema de arquivos.
3. SILBERSCHATZ, Abraham; GALVIN, Peter B.; GAGNE, Greg. *Operating System Concepts*. 10. ed. Hoboken: Wiley, 2018. Caps. 13 (File-System Interface) e 14 (File-System Implementation).
4. ELMASRI, Ramez; NAVATHE, Shamkant B. *Sistemas de Banco de Dados*. 7. ed. São Paulo: Pearson, 2018. Cap. 16 — Armazenamento em disco, estruturas básicas de arquivo e hashing.
5. MICROSOFT. *File system functionality comparison*. Microsoft Learn. Disponível em: <https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison>. Acesso em: 2 nov. 2026.
6. BTRFS PROJECT. *BTRFS documentation*. Disponível em: <https://btrfs.readthedocs.io/>. Acesso em: 2 nov. 2026.
7. ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. *ABNT NBR ISO/IEC 27002:2022*: segurança da informação, segurança cibernética e proteção à privacidade — controles de segurança da informação. Rio de Janeiro: ABNT, 2022. Controles 5.15 (controle de acesso), 8.2 (direitos de acesso privilegiado), 8.5 (autenticação segura), 8.7 (proteção contra malware) e 8.13 (backup das informações).
8. MICROSOFT. *Backup types* (Windows Server 2003 Technical Reference: normal, copy, incremental, differential e daily). Microsoft TechNet, 2005.
9. PRESTON, W. Curtis. *Modern Data Protection*. Sebastopol: O'Reilly, 2021. Caps. sobre tipos de backup e por que RAID não é backup.
10. FUNDAÇÃO CETAP. *Concurso Público nº 001/2009 do DETRAN-RR*: prova objetiva do cargo Analista Técnico I – Analista de Sistemas, aplicada em 11 abr. 2010, e gabarito oficial definitivo. Prova: <https://www.estudegratis.com.br/images/provas/15539-cetap-2010-detran-rr-analista-de-sistemas-prova.pdf>. Gabarito: <https://www.estudegratis.com.br/images/provas/15539-cetap-2010-detran-rr-analista-de-sistemas-gabarito.pdf>. Acesso em: 11 out. 2026.
11. RUGGIERO, Paul; HECKATHORN, Matthew A. *Data Backup Options*. United States Computer Emergency Readiness Team (US-CERT), 2012. Disponível em: <https://www.cisa.gov/sites/default/files/publications/data_backup_options.pdf>.
