//ESERCIZIO
// Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Utilizzate la libreria axios.
// Numero minimo di push: 5;


const randomEmail = document.getElementById('random-email')
let emails;

for(let i=0; i < 10; i++){
axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) => {
    let email
    emails = resp.data.response;
    console.log(emails)
    randomEmail.innerHTML = emails
})
}


