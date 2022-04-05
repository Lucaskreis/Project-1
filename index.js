    const btnFlags = document.getElementById('btnFlags');
    const btnMovies = document.getElementById('btnMovies');
    const bandeiras = document.getElementById('bandeiras');
    const filmes = document.getElementsByTagName('filmes');
    const flagImg = document.getElementsByClassName('flagImg');
    const input = document.getElementsByClassName('input');


    //let data = require("./data");

    const game = new jogo (flags, movies);

    btnFlags.addEventListener('click', () => {
        
        bandeiras.classList.replace("bandeirasOff" , "bandeirasOn");
        
        game.embaralhadorBandeiras(flagImg)

    })

    btnMovies.addEventListener('click', () => {
        
        filmes.classList.replace("filmesOff" , "filmesOn");

        game.embaralhadorFilmes(movieImg);
    })

    //input.addEventListener('keypress', (enviar) => {
    //    if(enviar.key === 'Enter'){
    //        
    //        console.log(apertou)
            
    //    }
    //})


