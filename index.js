    const btnFlags = document.getElementById('btnFlags');
    const btnMovies = document.getElementById('btnMovies');
    const bandeiras = document.getElementById('bandeiras');
    const filmes = document.getElementById('filmes');
    const flagImg = document.getElementsByClassName('flagImg');
    const movieImg = document.getElementsByClassName('movieImg');
    const input = document.getElementsByClassName('send');
    const inputAnswers = document.getElementsByClassName("name");

    //let data = require("./data");

    const game = new jogo (flags, movies);

    btnFlags.addEventListener('click', () => {
        
        bandeiras.classList.replace("bandeirasOff" , "bandeirasOn");
        
        game.embaralhadorBandeiras(flagImg)

    })

    btnMovies.addEventListener('click', () => {
        
        filmes.classList.replace("filmesOff" , "filmesOn");

        game.embaralhadorFilmes(movieImg)

    })

    //input.addEventListener('click', (e) => {
   //     e.preventDefault()
    
    //    const name = document.getElementsByClassName('name');
      //  const value = name.value;
        //console.log(value);
    //})
        for (let i = 0; i < input.length; i++){

        input[i].addEventListener("click", (e) => {
            e.preventDefault()

            let value = inputAnswers[i].value

            game.corretorBandeiras(value)
                      
            // Comparando a resposta dada naquele input com a array de respostas certas pelo index
            //if (inputAnswers[i].value === game.deck[i].tag) {
                console.log(value)
            //} else {
                // Se tiver errado cai aqui
           // }
        })
    
    
    }
