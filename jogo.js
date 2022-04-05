//let data = require("./data");

class jogo {
    constructor(flags, movies){
        this.bandeiras = flags;
        this.filmes = movies;
        this.deck = [];
        

    }

    embaralhadorBandeiras(card){

     for(let i = 0; i < 9; i++) {

        const idx = Math.floor(Math.random()*this.bandeiras.length);
        card[i].setAttribute('src',this.bandeiras[idx].imagem)
        
        this.deck.push(this.bandeiras[idx]);
     }
        
     console.log(deck) 
    }

    embaralhadorFilmes(card){

            for(let i = 0; i < 9; i++) {
       
               const idx = Math.floor(Math.random()*this.filmes.length);
               card[i].setAttribute('src',this.filmes[idx].frame)
               this.deck.push(this.filmes[idx]);
            }
               
            console.log(deck) 
           }

    

    corretorBandeiras(resposta) {
        
        if (resposta === this.deck.tag){}

    }

    corretorBandeiras() {
    // checa se o input está correto
    
    }

    telaFinal() {
    // mostra a tela final com o resultado

    }
}