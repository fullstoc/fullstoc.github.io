

var headernav = document.querySelector('.header_nav')

window.onscroll = () =>{
    if(scrollY > 20){
        headernav.style.background='#0a0a0a'
        
    }else{
        headernav.style.background='transparent'

    }
}

var typed =new Typed(".typing",{
  strings:["Devoloper", "Designer", "Freelancer"],
  typeSpeed:170,
  backSpeed:80,
  loop:true,
});
