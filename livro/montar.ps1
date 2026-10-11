# Junta os .md do livro ALEPA (capitulos/, resumos/, leis/, edital/) e dos outros
# livros (livros/<nome>/) em livro/conteudo.js (lido pelo livro.html).
# Arquivos que comecam com "_" (ex.: _MODELO.md) sao ignorados.
$ErrorActionPreference = 'Stop'
$raiz = Split-Path -Parent $PSScriptRoot
$utf8 = New-Object System.Text.UTF8Encoding $false

$pastas = @('capitulos', 'resumos', 'leis', 'edital')
$outros = Join-Path $raiz 'livros'
if (Test-Path $outros) { $pastas += Get-ChildItem -Path $outros -Directory | Sort-Object Name | ForEach-Object { "livros/$($_.Name)" } }

$itens = @(foreach ($sub in $pastas) {
  $pasta = Join-Path $raiz $sub
  if (Test-Path $pasta) {
    Get-ChildItem -Path $pasta -Filter '*.md' |
      Where-Object { $_.Name -notlike '_*' } |
      Sort-Object Name |
      ForEach-Object { [pscustomobject]@{ arquivo = "$sub/$($_.Name)"; md = [IO.File]::ReadAllText($_.FullName, $utf8) } }
  }
})

$json = ConvertTo-Json -InputObject $itens -Depth 3 -Compress
$js   = "// Gerado por livro/montar.ps1. Nao edite a mao.`nwindow.LIVRO = $json;`n"
[IO.File]::WriteAllText((Join-Path $PSScriptRoot 'conteudo.js'), $js, $utf8)
Write-Host "Livro atualizado: $($itens.Count) arquivo(s)."
