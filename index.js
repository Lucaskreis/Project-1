    const btnFlags = document.getElementById('btnFlags');
    const btnMovies = document.getElementById('btnMovies');
    const bandeiras = document.getElementById('bandeiras');
    const filmes = document.getElementById('filmes');
    const flagImg = document.getElementsByClassName('flagImg');
    const movieImg = document.getElementsByClassName('movieImg');
    const grid1 = document.getElementById('grid1');
    const grid2 = document.getElementById('grid2');
    const btn1 = document.getElementsByClassName('btn1');
    const text1 = document.getElementsByClassName('text1');
    const resetBtn = document.querySelector('#resetBtn')
    const resetBtn2 = document.querySelector('#resetBtn2')
 


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
        inputText.setAttribute("class", "text1green")
        inputText.setAttribute("class", "text1red")
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
        
       
        resetBtn.addEventListener("click", function() {
             location.reload();})
            
        
        let counter1 = 0
        inputSubmit.addEventListener('click', (e) => {
            e.preventDefault()
            const value1 = inputText.value.toLowerCase();
            game.corretorBandeiras(value1,img,inputText)

            
        if(value1 !== img.alt){
            
            if (counter1 === 1){
                inputText.setAttribute("class", "text1red")
                
            }
            else if (counter1 >= 2){
                inputText.remove()
                img.setAttribute("src", "./assets/images/looser.jpg" )
            }
            counter1++  
            console.log(counter1)
        }else {
            inputText.setAttribute("class", "text1green")
            img.setAttribute("src", "./assets/images/sabedenada.jpg" )
            }
             

     })

    }
        game.embaralhadorBandeiras(flagImg)

    })

    btnMovies.addEventListener('click', () => {
        
        filmes.classList.replace("filmesOff" , "filmesOn");
        for (let i = 0; i < 9; i++){

        const divBloco2 = document.createElement('div')
        divBloco2.setAttribute("class", "bloco2")
    
        const img = document.createElement('img')
        img.setAttribute("src", "insira a imagem aqui")
        img.setAttribute("alt", "imagem aleatória de bandeira")
        img.setAttribute("class", "movieImg")
        img.setAttribute("alt", "tag")
        
        const form1 = document.createElement('form')

        const inputText = document.createElement("input")
        inputText.setAttribute("type", "text")
        inputText.setAttribute("name", "name")
        
        inputText.setAttribute("class", "text1green")
        inputText.setAttribute("class", "text1red")
        inputText.setAttribute("class", "text1")

        const inputSubmit = document.createElement("input")
        inputSubmit.setAttribute("type" , "submit")
        inputSubmit.setAttribute("value" , "Enviar")
        inputSubmit.setAttribute("class" , "btn1")

        divBloco2.appendChild(img)
        divBloco2.appendChild(form1)
        grid2.appendChild(divBloco2)
        form1.appendChild(inputText)
        form1.appendChild(inputSubmit)
        
        console.log(img)

        resetBtn2.addEventListener("click", function() {
            location.reload();})
           
       
       let counter1 = 0
       inputSubmit.addEventListener('click', (e) => {
           e.preventDefault()
           const value1 = inputText.value.toLowerCase();
           game.corretorFilmes(value1,img,inputText)

           
       if(value1 !== img.alt){
           
           if (counter1 === 1){
               inputText.setAttribute("class", "text1red")
               
           }
           else if (counter1 >= 3){
               inputText.remove()
               img.setAttribute("src", "./assets/images/looser.jpg" )
           }
           counter1++  
           console.log(counter1)
       }else {
           inputText.setAttribute("class", "text1green")
           img.setAttribute("src", "./assets/images/sabedenada.jpg" )
           }
            

    })
    }
        game.embaralhadorFilmes(movieImg)

    })
  

   
    