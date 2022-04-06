    const btnFlags = document.getElementById('btnFlags');
    const btnMovies = document.getElementById('btnMovies');
    const bandeiras = document.getElementById('bandeiras');
    const filmes = document.getElementById('filmes');
    const flagImg = document.getElementsByClassName('flagImg');
    const movieImg = document.getElementsByClassName('movieImg');
    const grid1 = document.getElementById('grid1');
   const btn1 = document.getElementsByClassName('btn1');
   const text1 = document.getElementsByClassName('text1');
 


    const game = new jogo (flags, movies);

    btnFlags.addEventListener('click', () => {
        
        bandeiras.classList.replace("bandeirasOff" , "bandeirasOn");
        for (let i = 0; i < 9; i++){

        const divBloco1 = document.createElement('div')
        divBloco1.setAttribute("class", "bloco1")
    
        const img = document.createElement('img')
        img.setAttribute("src", "insira a imagem aqui")
        img.setAttribute("alt", "imagem aleatória de bandeira")
        img.setAttribute("class", "flagImg")
        img.setAttribute("alt", "tag")
        
        const form1 = document.createElement('form')

        const inputText = document.createElement("input")
        inputText.setAttribute("type", "text")
        inputText.setAttribute("name", "name")
        inputText.setAttribute("class", "text1")

        const inputSubmit = document.createElement("input")
        inputSubmit.setAttribute("type" , "submit")
        inputSubmit.setAttribute("value" , "Enviar")
        inputSubmit.setAttribute("class" , "btn1")

        divBloco1.appendChild(img)
        divBloco1.appendChild(form1)
        grid1.appendChild(divBloco1)
        form1.appendChild(inputText)
        form1.appendChild(inputSubmit)
        
        console.log(img)
        let counter1 = 0
        inputSubmit.addEventListener('click', (e) => {
            e.preventDefault()
            
            if(counter1 >=2){
                alert("Sabe de nada!! Suas chances terminaram.")
            }
            else if(counter1 === 1){
                alert("Béééé, errado! Você só tem mais uma chance")
                const value1 = inputText.value;
                console.log(value1);
                game.corretorBandeiras(value1,img)
                counter1++
            }
            else{
             const value1 = inputText.value;
             console.log(value1);
             game.corretorBandeiras(value1,img)
             counter1++
            }
     })

    }
        game.embaralhadorBandeiras(flagImg)

    })

    btnMovies.addEventListener('click', () => {
        
        filmes.classList.replace("filmesOff" , "filmesOn");

        game.embaralhadorFilmes(movieImg)

    })

  

   
    