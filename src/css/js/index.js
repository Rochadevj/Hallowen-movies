const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, i) => {
    botao.addEventListener("click", () =>{
        desselectBotao();
        desselectPersonagem();

        botao.classList.add("selecionado");
        personagens[i].classList.add("selecionado");
    });
}); 

function desselectPersonagem() {
    const personagemSelected = document.querySelector(".personagem.selecionado");
    personagemSelected.classList.remove("selecionado");
}

function desselectBotao() {
    const botaoSelected = document.querySelector(".botao.selecionado");
    botaoSelected.classList.remove("selecionado");
}