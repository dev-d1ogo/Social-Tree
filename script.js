function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('lightmode')

    //Selecionando um atributo com o querrySelector
    let img = document.querySelector('.profilePhoto')
    
    //Substituindo a imagem
    if(html.classList.contains('lightmode')){
        img.setAttribute("src","./assets/palmeiras.jpg");
    }
    else{
        img.setAttribute("src","./assets/nftdarkmode.png");
    }
    
}



