/*
Objetivo 1 - quando o usuário clicar no botão de ver trailer, devemos abrir a modal com o video do trailer.
    passo 1 -> pegar o elemento que representa o botão na tela
    passo 2 -> identificar o click do usuário no botão.
    passo 3 -> pegar o elemento modal dentro do js
    passo 4 -> abrir a modal na tela

Objetivo 2 - quando o usuário clicar no x, devemos fechar a modal
    passo 1 -> pegar o elemento de fechar modal usando o js
    passo 2 -> identificar quando o usuário clicar no x
    passo 3 -> fechar a modal
*/

const botaoTrailer = document.querySelector(".trailer");
const modal = document.querySelector(".modal");
const close = document.querySelector(".fechar-modal")
const video = document.getElementById("video")
const linkDoVideo = video.src

function alternarModal(){
  modal.classList.toggle("aberto")
}

botaoTrailer.addEventListener("click", () => {
  alternarModal()
  video.setAttribute("src", linkDoVideo)
});

close.addEventListener("click", () => {
  alternarModal()
  video.setAttribute("src", "")
})



