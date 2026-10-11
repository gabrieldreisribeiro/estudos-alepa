// Acrescenta links no fim de itens do checklist sem mudar o texto antes de "→".
const fs = require("fs");
const F = "C:/Users/Elielton/Documents/Concursos/ALEPA/edital/edital.md";
const ADD = JSON.parse(process.argv[2]);
const linhas = fs.readFileSync(F, "utf8").split("\n");
for (const [item, link] of ADD) {
  const i = linhas.findIndex(l => l.startsWith("- [ ] ") && l.slice(6).split(" → ")[0] === item);
  if (i < 0) throw new Error("item não encontrado: " + item);
  if (linhas[i].includes(link)) continue;
  linhas[i] += linhas[i].includes(" → ") ? " · " + link : " → " + link;
  console.log(linhas[i]);
}
fs.writeFileSync(F, linhas.join("\n"));
