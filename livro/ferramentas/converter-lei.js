// Converte páginas do planalto.gov.br em Markdown limpo (sem texto revogado/riscado).
const fs = require("fs");
const path = require("path");
const OUT = "C:/Users/Elielton/Documents/Concursos/ALEPA/leis";
fs.mkdirSync(OUT, { recursive: true });

const LEIS = [
  { arq: "lgpd", id: "lgpd", ordem: 1, titulo: "LGPD — Lei nº 13.709/2018", ementa: "Lei Geral de Proteção de Dados Pessoais", url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm" },
  { arq: "l8429", id: "l8429", ordem: 2, titulo: "Lei nº 8.429/1992 — Improbidade Administrativa", ementa: "Com as alterações da Lei nº 14.230/2021", url: "https://www.planalto.gov.br/ccivil_03/leis/l8429.htm" },
  { arq: "l12846", id: "l12846", ordem: 3, titulo: "Lei nº 12.846/2013 — Lei Anticorrupção", ementa: "Responsabilização de pessoas jurídicas por atos contra a administração pública", url: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2013/lei/l12846.htm" },
  { arq: "d11129", id: "d11129", ordem: 4, titulo: "Decreto nº 11.129/2022", ementa: "Regulamenta a Lei Anticorrupção (Lei nº 12.846/2013)", url: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/decreto/d11129.htm" },
  { arq: "lcp95", id: "lcp95", ordem: 5, titulo: "Lei Complementar nº 95/1998 — Técnica Legislativa", ementa: "Elaboração, redação, alteração e consolidação das leis", url: "https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp95.htm" },
];

const ENT = { nbsp: " ", amp: "&", lt: "<", gt: ">", quot: '"', ordm: "º", ordf: "ª", sect: "§", deg: "°", ndash: "–", mdash: "—", ldquo: "“", rdquo: "”", lsquo: "‘", rsquo: "’", hellip: "…" };
function decodeEnt(s) {
  return s
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16)))
    .replace(/&([a-z]+);/gi, (m, n) => (n in ENT ? ENT[n] : (n.toLowerCase() in ENT ? ENT[n.toLowerCase()] : m)));
}
const NOTA = /\((?:Redação dada|Incluíd[oa]|Vide|Vigência|Revogad[oa]|Promulgação|Produção de efeitos?|Renumerad[oa]|Regulamento|Regulamentação|Acrescid[oa]|Mensagem de veto|Vetad[oa])[^()]*(?:\([^()]*\)[^()]*)*\)/g;

for (const L of LEIS) {
  let h = new TextDecoder("windows-1252").decode(fs.readFileSync(path.join(process.argv[2] || __dirname, L.arq + ".htm")));
  h = h.replace(/<head[\s\S]*?<\/head>/i, "").replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<style[\s\S]*?<\/style>/gi, "");
  // remove texto revogado (riscado)
  let prev;
  do { prev = h; h = h.replace(/<strike\b[^>]*>(?:(?!<strike\b)[\s\S])*?<\/strike>/gi, ""); } while (h !== prev);
  h = h.replace(/<(s|del)\b[^>]*>[\s\S]*?<\/\1>/gi, "");
  h = h.replace(/<br\s*\/?>/gi, " — ");
  const blocos = h.split(/<p\b[^>]*>|<\/p>|<blockquote\b[^>]*>|<\/blockquote>|<div\b[^>]*>|<\/div>|<td\b[^>]*>|<\/td>/i)
    .map(b => decodeEnt(b.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").replace(/\s+([,.;:])/g, "$1").replace(/\(\s+/g, "(").replace(/\s+\)/g, ")").trim())
    .filter(Boolean);

  let ini = blocos.findIndex(b => /^(O|A) (PRESIDENTE|VICE-PRESIDENTE|PRESIDENTA)/.test(b));
  if (ini < 0) ini = blocos.findIndex(b => /^Art\. 1/.test(b)) - 1;
  let fim = blocos.findIndex((b, i) => i > ini && /^Brasília\s*,/.test(b));
  if (fim < 0) fim = blocos.length;
  const bruto = blocos.slice(ini, fim);
  // junta "CAPÍTULO I" + "DISPOSIÇÕES PRELIMINARES" quando vêm em blocos separados
  const ehCab = b => /^(T[ÍI]TULO|CAP[ÍI]TULO|Seção|Subseção)\b/i.test(b);
  const corpo = [];
  for (let i = 0; i < bruto.length; i++) {
    let b = bruto[i];
    const prox = bruto[i + 1];
    if (ehCab(b) && b.split(" ").length <= 3 && prox && !ehCab(prox) && !/^(Art\.|§|Parágrafo)/.test(prox) && prox.length < 140) { b += " — " + prox; i++; }
    corpo.push(b);
  }

  const temTitulo = corpo.some(b => /^T[ÍI]TULO\b/.test(b));
  const linhas = [];
  for (let b of corpo) {
    b = b.replace(/^—\s*|\s*—$/g, "").replace(/\s+—\s+—\s+/g, " — ");
    if (!b || /^—+$/.test(b)) continue;
    b = b.replace(/^(Art\. ?\d+|§ ?\d+) o\b/, "$1º");
    if (/Vigência encerrada/i.test(b)) continue; // texto de MP que perdeu a vigência
    b = b.replace(/s+Vigências*$/, "").replace(/^Art. (d+) (d+)./, "Art. $1$2.");
    b = b.replace(/([*_`\[\]])/g, "\\$1");
    b = b.replace(NOTA, m => `<small class="nota">${m}</small>`);
    if (/^T[ÍI]TULO\b/.test(b)) { linhas.push(`## ${b} {-}`); continue; }
    if (/^CAP[ÍI]TULO\b/.test(b)) { linhas.push(`${temTitulo ? "###" : "##"} ${b}${temTitulo ? "" : " {-}"}`); continue; }
    if (/^Subseção\b/i.test(b)) { linhas.push(`#### ${b}`); continue; }
    if (/^Seção\b/i.test(b)) { linhas.push(`${temTitulo ? "####" : "###"} ${b}`); continue; }
    b = b.replace(/^(Art\. ?\d+[ºo°]?(?:-[A-Z])?\.?|§ ?\d+[ºo°]?(?:-[A-Z])?\.?|Parágrafo único\.?)/, "**$1**");
    if (/^\d+\.\s/.test(b)) b = b.replace(/^(\d+)\./, "$1\\.");
    linhas.push(b);
  }

  const md = `---
tipo: lei
capitulo: ${L.id}
ordem: ${L.ordem}
titulo: ${L.titulo}
edital: Texto oficial compilado · Fonte: planalto.gov.br · obtido em 05/10/2026
lead: ${L.ementa}. Texto revogado foi retirado; as notas de alteração aparecem em cinza.
fonte: ${L.url}
---

${linhas.join("\n\n")}
`;
  fs.writeFileSync(path.join(OUT, L.id + ".md"), md, "utf8");
  console.log(L.id, "linhas:", linhas.length, "artigos:", linhas.filter(l => /^\*\*Art\./.test(l)).length);
}
