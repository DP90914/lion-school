const test = require("node:test");
const fetchCusos = require("../module/seachCursos.js")
const fetchAlunos = require("../module/seachAlunos.js")

test("Teste de resposta do fetch de cusros:", async () => {
    expect(Array.isArray(await fetchCusos.pegarBotoes())).toBe(true)
})
test("Teste de resposta do fetch de alunos:", async () => {
    expect(Array.isArray(await fetchAlunos.procurarAlunosCurso(1))).toBe(true)
})