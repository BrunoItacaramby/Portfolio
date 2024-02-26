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