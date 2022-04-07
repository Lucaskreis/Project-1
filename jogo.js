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