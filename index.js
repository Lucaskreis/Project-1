    const btnFlags = document.getElementById('btnFlags');
    const btnMovies = document.getElementById('btnMovies');
    const bandeiras = document.getElementById('bandeiras');
    //const bandeirasOn = document.getElementByClass('bandeirasOn');
    //const bandeirasOff = document.getElementByClass('bandeirasOff');
    const filmes = document.getElementsByTagName('filmes');
    const flagImg = document.getElementsByClassName('flagImg')

    //let data = require("./data");

    const game = new jogo (flags, movies);

    btnFlags.addEventListener('click', () => {
        
        bandeiras.classList.replace("bandeirasOff" , "bandeirasOn")  
        
        game.embaralhadorBandeiras(flagImg)
        
    })

