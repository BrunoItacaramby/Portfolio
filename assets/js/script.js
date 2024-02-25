const meuNome = document.querySelector('.meu-nome');
const fName = meuNome.innerHTML;
var button = document.getElementById('botao-habilidades')
var habilidade = document.getElementById('habilidades')
var gradiente = document.getElementById('gradiente')
meuNome.innerHTML='';


var menu1 = document.getElementById('menu-mobile')
var menu2 = document.getElementById('menu-mobile-content')

menu1.addEventListener('click', function () {
    if(document.getElementById('close-menu').checked === false){
        document.getElementById('close-menu').checked = true
        menu2.style.transition = 'all 100ms ease-in'
    menu2.style.transform = 'translateX(-45px)'
    }else{
        document.getElementById('close-menu').checked = false;
        menu2.style.transition = 'all 100ms ease-in'
    menu2.style.transform = 'translateX(0px)'
    }   
})   
   



// menu1.addEventListener('click', function () {
//     menu2.style.right = '0px'
//     menu2.style.transform = 'translateX(-45px)'


//     sr.reveal('#menu-mobile-content', {
//         // rotate: {x: 0, y: 80, z: 0},
//         distance: '50px',
//         origin: 'right',
//         duration: 500,
//         delay: 50
//     });
// });

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

// sr.reveal('.skill2', {
//     // rotate: {x: 0, y: 80, z: 0},
//     distance: '200px',
//     origin: 'right',
//     duration: 500,
//     delay: 350
// });

// sr.reveal('.skill3', {
//     // rotate: {x: 0, y: 80, z: 0},
//     distance: '200px',
//     origin: 'left',
//     duration: 500,
//     delay: 550
// });

// sr.reveal('.skill4', {
//     // rotate: {x: 0, y: 80, z: 0},
//     distance: '200px',
//     origin: 'right',
//     duration: 500,
//     delay: 750
// });



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

