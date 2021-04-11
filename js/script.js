//alterar a imagem de acordo com o tamanho da tela
var img = document.querySelector("#background")
window.onresize = function(){
    loadImg()
}
window.onload = function(){
    loadImg()
}
function loadImg(){
    if(screen.availWidth < 760){
        img.src = "./images/bg-hero-mobile.svg"
    }else{
        img.src = "./images/bg-hero-desktop.svg"
    }
}