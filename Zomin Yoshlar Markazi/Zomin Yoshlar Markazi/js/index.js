var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.background = "transparent";
  } else {
    document.getElementById("navbar").style.background="";
  }
  prevScrollpos = currentScrollPos;
}