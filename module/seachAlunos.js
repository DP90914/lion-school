async function procurarAlunosCurso(curso) {
    const url = `https://lion-school-backend.onrender.com/alunos?curso_id=${curso}`
    const response = await (await fetch(url)).json()
    return response
}
module.exports={
    procurarAlunosCurso,
}