//ESERCIZIO
// Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Utilizzate la libreria axios.
// Numero minimo di push: 5;


const randomEmail = document.getElementById('random-email')
const  button = document.getElementById('btn')


const play =()=>{
    randomEmail.innerHTML = '';
    for (let i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) => {
            let email = resp.data.response;
            
            const createEmails = document.createElement('div')
            createEmails.textContent = email;
            randomEmail.appendChild(createEmails)
    
        })
    }
}


button.addEventListener('click', play);

play();