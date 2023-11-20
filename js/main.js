let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let sun = document.getElementById('sun');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let nouvil = document.querySelector('.nouvil');
let content = document.querySelector('.content');
let main = document.querySelector('.main');
let contentTitle = document.getElementById('contentTitle');
let clouds = document.getElementById('clouds');

 
window.onscroll = function() {
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 3 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';
    nouvil.style.fontSize = value + 'px';
    if(scrollY >= 150){
        nouvil.style.fontSize = 150 + 'px';
        nouvil.style.position = 'fixed';
        nouvil.style.textTransform = 'uppercase';
        if(scrollY >= 640){
            nouvil.style.display = 'none'
        }else{
            nouvil.style.display = 'block'
        }
        if(scrollY >= 250){
            main.style.background = 'linear-gradient(#376281,#10001f)';
            content.style.transform = 'translateY(0px)'
            // content.style.transition = '2s';
        }else{
            main.style.background = 'linear-gradient(#200015,#10001f)';
            content.style.transform = 'translateY(500px)'
        }
    }
    
}

function modSite(){
    let lightMod = document.querySelector('.lightMod');
    let botn = document.getElementById('botn');

    if(main.classList.toggle('dark-mod') == true){
        main.style.background = 'linear-gradient(#376281,#10001f)';
        lightMod.style.background = 'linear-gradient(#200015,#10001f)';
        botn.style.background = 'white';
        botn.style.transform = 'translateX(28px)';
        boat.style.transform = 'translateX(1500px)';
        stars.style.transform = 'translateY(-1100px)';
        stars.style.transition = '0.5s';
        boat.style.transition = '0.5s';
        moon.style.transform = 'translateY(-500px)';
        moon.style.transition = '0.5s';
        mountains3.style.transform = 'translateY(2000px)';
        mountains4.style.transform = 'translateY(2000px)';
        river.style.transform = 'translateY(2000px)';
        mountains4.style.transition = '0.5s';
        mountains3.style.transition = '0.5s';
        river.style.transition = '0.5s';
        sun.style.transform = 'translateY(0px)';
        clouds.style.transform = 'translateY(0px)';

    }else{
        main.style.background = 'linear-gradient(#200015,#10001f)';
        lightMod.style.background = 'linear-gradient(#376281,#10001f)';
        botn.style.background = 'white';
        botn.style.transform = 'translateX(0px)';
        boat.style.transform = 'translateX(0px)';
        stars.style.transform = 'translateY(0px)';
        mountains3.style.transform = 'translateY(0px)';
        mountains4.style.transform = 'translateY(0px)';
        river.style.transform = 'translateY(0px)';
        moon.style.transform = 'translateY(80px)';
        moon.style.display = 'block';
        sun.style.transform = 'translateY(800px)';
        clouds.style.transform = 'translateY(800px)';
    }

}
