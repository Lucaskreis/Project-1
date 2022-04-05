//let data = require("./data");

class jogo {
    constructor(flags, movies){
        this.bandeiras = flags;
        this.filmes = movies;
        this.deckFlags = [];
        this.deckMovies = [];
        

    }

    embaralhadorBandeiras(card){

        for(let i = 0; i < 9; i++) {

            const idx = Math.floor(Math.random()*this.bandeiras.length);
            card[i].setAttribute('src',this.bandeiras[idx].imagem)
            
            this.deckFlags.push(this.bandeiras[idx]);
        }
        
         
    }

    embaralhadorFilmes(card){

        for(let i = 0; i < 9; i++) {
       
            const idx = Math.floor(Math.random()*this.filmes.length);
            console.log(idx)
            card[i].setAttribute('src',this.filmes[idx].frame)
            this.deckMovies.push(this.filmes[idx]);
            }    
           }

    corretorBandeiras(resposta) {
        let counter = 0
        for(let i = 0; i < this.deckFlags.length; i++) {
        if (resposta === this.deckFlags[i].tag){
            counter++
            console.log(counter) 
        }

    }}

    
}