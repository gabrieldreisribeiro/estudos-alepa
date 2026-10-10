# Junta capitulos/*.md e leis/*.md em livro/conteudo.js (lido pelo livro.html).
# Arquivos que comecam com "_" (ex.: _MODELO.md) sao ignorados.
$ErrorActionPreference = 'Stop'
$raiz = Split-Path -Parent $PSScriptRoot
$utf8 = New-Object System.Text.UTF8Encoding $false

$itens = @(foreach ($sub in 'capitulos', 'resumos', 'leis', 'edital') {
  $pasta = Join-Path $raiz $sub
  if (Test-Path $pasta) {
    Get-ChildItem -Path $pasta -Filter '*.md' |
      Where-Object { $_.Name -notlike '_*' } |
      Sort-Object Name |
      ForEach-Object { [pscustomobject]@{ arquivo = "$sub/$($_.Name)"; md = [IO.File]::ReadAllText($_.FullName, $utf8) } }
  }
})

$json = ConvertTo-Json -InputObject $itens -Depth 3 -Compress
$js   = "// Gerado por livro/montar.ps1 a partir de capitulos/, resumos/ e leis/. Nao edite a mao.`nwindow.LIVRO = $json;`n"
[IO.File]::WriteAllText((Join-Path $PSScriptRoot 'conteudo.js'), $js, $utf8)
Write-Host "Livro atualizado: $($itens.Count) arquivo(s)."
