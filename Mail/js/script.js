// creare l'ARRAY

const lista = ['fabrizio@gmail.it', 'marco@gmail.it', 'alessio@gmail.it', 'alessandro@gmail.it'];

// chiedere all'utente l'email

let mail = prompt("Inserisci l'email"); 

// fare controllo se risulta la sua email

let flag = false;

for(let i = 0; i<lista.length; i++){

    if(lista[i] == mail){
        flag = true;
    }
}

// SE: risulta allora uscirà un messaggio con scritto 'Hai effettuato l'accesso'

if(flag){
    console.log("Hai effettuato l'accesso");
}

// ALTRIMENTI: non risulta allora uscirà un messaggio con scritto 'Accesso negato'

else{
    console.log("Accesso negato");
}