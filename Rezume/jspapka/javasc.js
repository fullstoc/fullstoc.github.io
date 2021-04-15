var body =document.querySelector('#body')
var red=document.querySelector('.red')
var bluevio=document.querySelector('.blueviolet')
var green=document.querySelector('.green')
var black=document.querySelector('.black')

red.onclick=function(){
    body.style.background='url(./5.jpg) red center center no-repeat'

    body.style.transition= '0.9s ease'
    // body.style.background-blend-mode='multiply'
}
black.onclick=function(){
    body.style.background='url(./5.jpg) rgba(0, 0, 0, 0.89) center center no-repeat'
    body.style.background(size)='cover'
    body.style.transition= '0.9s ease'
    // body.style.background-blend-mode='multiply'
}
green.onclick=function(){
    body.style.background='url(./5.jpg) green center center no-repeat'
    body.style.background(size)='cover'
    body.style.transition= '0.9s ease'
    // body.style.background-blend-mode='multiply'
}

bluevio.onclick=function(){
    body.style.background='url(./5.jpg) gray center center no-repeat'
    body.style.background(size)='cover'
    body.style.transition= '0.9s ease'
    // body.style.background-blend-mode='multiply'
}
red.ondblclick=function(){
    body.style.background='url(./5.jpg) blue center center no-repeat'
    body.style.background(size)='cover'
    body.style.transition= '0.9s ease'
    // body.style.background-blend-mode='multiply'
}
