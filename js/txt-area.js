let dataAtual = new Date();
document.getElementById("data").innerHTML = dataAtual.getFullYear();
let textArea = document.querySelector("#texto-principal");
textArea.addEventListener('input', autoResize, false);

function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}