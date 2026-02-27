async function pegarBotoes() {
    const url = "https://lion-school-backend.onrender.com/cursos"
    const response = await (await fetch(url)).json()
    return response
}
module.exports={
    pegarBotoes
}