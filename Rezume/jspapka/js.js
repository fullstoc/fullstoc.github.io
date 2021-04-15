
var block = document.querySelector('.container');
var activ = document.querySelector('.Dblock');
var iconicmoon = activ.querySelector('.fa-moon-o');
var iconicsun = activ.querySelector('.fa-sun-o');

function threeD() {

    iconicmoon.classList.toggle("actives");
    iconicsun.classList.toggle("active");
    block.classList.toggle("night");
    activ.classList.toggle("active");
};


// typed

var i = 0;
var s = 0;
var a = 0;

var speed = 100;

var txt = "Jizzax viloyati Zarbdor tumani 29-o'rta umum ta'lim maktabi";
var txtt = "Jizzax Teamit Academy";
var type = "O'zim haqimda qisqacha ma'lumot"


function typewrite() {
    if (i < txt.length) {
        document.getElementById('typinge').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typewrite, speed)
    }
    if (s < txt.length) {
        document.getElementById('typ').innerHTML += txtt.charAt(s);
        s++;

    }
    if (a < txt.length) {
        document.getElementById('typer').innerHTML += type.charAt(a);
        a++;

    }

}

setTimeout(typewrite, 4600)





// delete loader paje

var loaders = document.querySelector('.loader');

function deletes() {
    loaders.style.display = 'none'

}

setTimeout(deletes, 3500)

//comment block function
var menus =document.querySelector('.comment')
var commity= menus.querySelector('.btncommit');
var comblock =menus.querySelector('#nuke');
var textar =comblock.querySelector('#salom').value;
var ptext= comblock.querySelector('.txtts')
function onclices(){
   comblock.classList.toggle("yondi");
   commity.classList.toggle("active")
}

function sending(){
ptext.innerHTML= textlar
   
}
//container start

var conta = document.querySelector('.container')

function startter() {
    conta.classList.toggle("start")
}

setTimeout(startter, 3300)



//typing cdn js


var typed = new Typed(".typings", {
    strings: [" WEB Devoloper", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 80,
    loop: true,
});


