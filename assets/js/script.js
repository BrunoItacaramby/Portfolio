
var button = document.getElementById('botao-habilidades')
var habilidade = document.getElementById('habilidades')
var gradiente = document.getElementById('gradiente')

   
window.sr = ScrollReveal({ reset: true})

sr.reveal('.sobre-mim-content', {
    // rotate: {x: 0, y: 80, z: 0},
    distance: '200px',
    origin: 'left',
    duration: 500,
    delay: 150
});

sr.reveal('.skill-content', {
    // rotate: {x: 0, y: 80, z: 0},
    distance: '200px',
    origin: 'left',
    duration: 500,
    delay: 150
});




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