var button = document.getElementById('botao-habilidades')
var habilidade = document.getElementById('habilidades')
var gradiente = document.getElementById('gradiente')

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