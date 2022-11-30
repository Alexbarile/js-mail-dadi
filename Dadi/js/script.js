// generare un numero casuale per il giocatore tra 1 e 6;

let giocatore = Math.floor(Math.random() * 6) + 1;
console.log(`il numero del giocatore è ${giocatore}`);

// generare un numero casuale per il computer tra 1 e 6;

let computer = Math.floor(Math.random() * 6) + 1;
console.log(`il numero del computer è ${computer}`);

// Controllo del valore più alto

// SE il giocatore e il computer hanno lo stesso punteggio  allora è PAREGGIO

if(giocatore == computer){
    console.log('È pareggio')
}

// SE il giocatore ha un punteggio più alto del computer allora ha vinto il GIOCATORE
       

else if(giocatore > computer){
    console.log('Ha vinto il giocatore')
}

// ALTRIMENTI il computer ha un punteggio più alto del giocatore allora ha vinto il COMPUTER 
       

else{
    console.log('Ha vinto il computer')
}

