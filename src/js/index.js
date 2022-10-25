let redes = document.querySelector('#informacao-minhas-redes');
let sobre = document.querySelector('.descricao');
let projetos = document.querySelector('.projetos')

function exibirPerfil() {
    sobre.classList.remove('hidden');
    redes.classList.remove('show');
    redes.classList.add('hidden');
    projetos.classList.remove('show')
    projetos.classList.add('hidden')
}

function exibirRedes() {
    sobre.classList.add('hidden')
    redes.classList.remove('hidden');
    redes.classList.add('show');
    projetos.classList.remove('show')
    projetos.classList.add('hidden')
}

function exibirProjetos() {
    sobre.classList.remove('show');
    sobre.classList.add('hidden');
    redes.classList.remove('show')
    redes.classList.add('hidden');
    projetos.classList.remove('hidden');
}