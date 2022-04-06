class jogo {
    constructor(flags, movies){
        this.bandeiras = flags;
        this.filmes = movies;
        this.deckFlags = [];
        this.deckMovies = [];
        

    }

    embaralhadorBandeiras(card){
     //let acervo =[]
        for(let i = 0; i < 9; i++) {

            const idx = Math.floor(Math.random()*this.bandeiras.length);  
           
            //acervo.push(idx)
            //if(acervo.indexOf[idx] === -1){
        
            card[i].setAttribute('src',this.bandeiras[idx].imagem);
            card[i].setAttribute('alt',this.bandeiras[idx].tag);
            //this.deckFlags.push(this.bandeiras[idx]);
            }
        }
                        
            //console.log(acervo)
    
      
        
    embaralhadorFilmes(card){
        
        for(let i = 0; i < 9; i++) {
       
            const idx = Math.floor(Math.random()*this.filmes.length);
            
            card[i].setAttribute('src',this.filmes[idx].frame)
            this.deckMovies.push(this.filmes[idx]);
            }    
           }

    corretorBandeiras(value1, img) {
        let counter = 0;

        if(value1 === img.alt){
            counter++

            console.log("correto")}
        
        
     
    
    }
 }