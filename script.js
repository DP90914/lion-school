'use strict'

const botoes = document.getElementById("botoes")
const main = document.querySelector("main")

criarBotoes()






async function pegarBotoes() {
    const url = "https://lion-school-phbo.onrender.com/cursos"
    const response = await (await fetch(url)).json()
    return response
}

async function criarBotoes() {
    const btn = await pegarBotoes()
    btn.forEach(item => {
        const btnCurso = document.createElement("button")
        btnCurso.textContent = item.sigla
        btnCurso.addEventListener("click", async () => {
            procurarAlunosCurso(item.id, item.nome)
        })
        botoes.appendChild(btnCurso)
        botoes.classList.add("btnCurso")

    });
}

async function procurarAlunosCurso(curso, nome) {
    const url = `https://lion-school-phbo.onrender.com/alunos?curso_id=${curso}`
    const response = await (await fetch(url)).json()
    criarAlunosCurso(response, nome)
    return response
}
function criarAlunosCurso(alunos, turma) {

    main.textContent = ""

    main.classList.remove("main")
    main.classList.add("alunoMain")

    const turmaNome = document.createElement("h1")
    turmaNome.textContent = turma
    main.appendChild(turmaNome)

    const alunosDiv = document.createElement("div")

    alunos.forEach(item => {
        const alunoCard = document.createElement("div")
        const alunoImg = document.createElement("img")
        const alunoNome = document.createElement("h3")

        alunoImg.src = item.foto
        alunoNome.textContent = item.nome

        alunoCard.appendChild(alunoImg)
        alunoCard.appendChild(alunoNome)
        alunoCard.classList.add("alunoCard")
        alunoCard.addEventListener("click", async () => {
            const aluno = await procurarAlunosDesc(item.id)
            criarAlunosDesc(aluno)
        })
        alunosDiv.appendChild(alunoCard)
    })
    main.appendChild(alunosDiv)
}

async function procurarAlunosDesc(id) {
    const url = `https://lion-school-phbo.onrender.com/alunos/${id}`
    const response = await (await fetch(url)).json()
    return response
}

function criarAlunosDesc(aluno) {
    main.textContent = ""

    main.classList.add("descAlunoMain")
    main.classList.remove("alunoMain")

    const divAluno = document.createElement("div")
    const divNotas = document.createElement("div")



    const alunoImg = document.createElement("img")
    const alunoNome = document.createElement("h3")

    alunoImg.src = aluno.foto
    alunoNome.textContent = aluno.nome

    aluno.desempenho.forEach(item => {
        const valorNota = document.createElement("h3")
        const valorBarra = document.createElement("div")
        const valorBarra1 = document.createElement("div")
        const valorMateria = document.createElement("h3")
        const divNota = document.createElement("div")

        valorNota.textContent = item.valor
        valorMateria.textContent = item.categoria

        divNota.appendChild(valorNota)
        valorBarra.appendChild(valorBarra1)
        divNota.appendChild(valorBarra)
        divNota.appendChild(valorMateria)

        valorBarra.classList.add("valorBarra")
        valorBarra.style.height = `${item.valor}%`

        divNotas.appendChild(divNota)
    });

    divNotas.classList.add("divNotas")

    divAluno.appendChild(alunoImg)
    divAluno.appendChild(alunoNome)

    divAluno.classList.add("alunoDiv")

    main.appendChild(divAluno)
    main.appendChild(divNotas)
}