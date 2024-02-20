const meuNome = document.querySelector('.meu-nome');
const fName = meuNome.innerHTML;
var button = document.getElementById('ver-mais')
var habilidade = document.getElementById('habilidades')
var gradiente = document.getElementById('gradiente')
meuNome.innerHTML='';

function typeWriter (nome) {
    setTimeout( () => {
    const meuNomeF = nome.split('');
    meuNome.innerHTML='';
    meuNomeF.forEach( (letra, index) => {
        setTimeout(function (){
            meuNome.innerHTML += letra;
        }, 150 * index)
    })}, 1500)
    
}

button.addEventListener('click', function (){
    if(button.innerHTML === 'Ver Mais'){
        habilidade.style.maxHeight = 'max-content';
    gradiente.style.background = 'none';
    button.innerHTML = 'Ver Menos'
} else{
    habilidade.style.maxHeight = '50rem';
    gradiente.style.background = 'linear-gradient(to bottom, rgba(61, 50, 44, 0), #3d322c)';
    button.innerHTML = 'Ver Mais'
}
    
})

/* typeWriter(fName); */

