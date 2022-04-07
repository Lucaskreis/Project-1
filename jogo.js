class jogo {
    constructor(flags, movies){
        this.bandeiras = flags;
        this.filmes = movies;
        
    }

    embaralhadorBandeiras(card){
    
        for(let i = 0; i < 9; i++) {

            const idx = Math.floor(Math.random()*this.bandeiras.length);  
                   
            card[i].setAttribute('src',this.bandeiras[idx].imagem);
            card[i].setAttribute('alt',this.bandeiras[idx].tag);
            //this.deckFlags.push(this.bandeiras[idx]);
            this.bandeiras.splice(idx , 1);
            }
        }
        
    embaralhadorFilmes(card){
        
        for(let i = 0; i < 9; i++) {
       
            const idx = Math.floor(Math.random()*this.filmes.length);
            card[i].setAttribute('src',this.filmes[idx].frame)
            card[i].setAttribute('alt',this.filmes[idx].tag);
            //this.deckMovies.push(this.filmes[idx]);
            this.filmes.splice(idx , 1);
            }    
        }

        
         
    corretorBandeiras(value1, img, text1) {
       /* let counter = 0
        if(value1 !== img.alt){
            
            if (counter === 1){
                text1.setAttribute("class", "text1red")
                
            }
            else if (counter >= 2){
                text1.remove()
                img.setAttribute("src", "./assets/images/looser.jpg" )
            }
            counter++  
            console.log(counter)
        }else {
            text1.setAttribute("class", "text1green")
            img.setAttribute("src", "./assets/images/sabedenada.jpg" )
            }*/
             
        }
        /*if(value1 === img.alt){
            text1.setAttribute("class", "text1green")
            img.setAttribute("src", "./assets/images/sabedenada.jpg" )
            console.log("correto")}
        else if(counter === 1){
            text1.setAttribute("class", "text1red")
            counter++
            }
            else (counter ===2){
                text1.remove()
                counter++
                img.setAttribute("src", "./assets/images/looser.jpg" )
            }
        }*/ 
          
    

    corretorFilmes(value1, img, text1) {
        let counter = 0;

        if(value1 === img.alt){
            text1.setAttribute("class", "text1green")

            console.log("correto")}
        else {
            counter++
            if(counter === 1){
                text1.setAttribute("class", "text1red")
            }
            else if(counter ===2){
                text1.remove()

            }
        }    
    }


 }