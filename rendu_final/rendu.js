
document.addEventListener('DOMContentLoaded', function()  {
    const burgerIcon = document.getElementById('burger-icon');
    const menu = document.getElementById('menu');

    burgerIcon.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});

let formulaire = document.getElementById('formulaire');



formulaire.addEventListener('submit', function(e) {
    let prenom = document.getElementById('prenom');
    let nom = document.getElementById('nom');
    let email = document.getElementById('mail');
    let message = document.getElementById('message');
    let regex = /^[a-zA-Z\s]+$/;
    let succes = document.getElementById('succes');

    if (message.value == "") {
        let error = document.getElementById('error');
        error.innerHTML = " vous avez oublier votre message ?";
        error.style.color = 'red';
        e.preventDefault();
    }
    
    if (email.value == "") {
        let error = document.getElementById('error');
        error.innerHTML = " quel est votre email ?";
        error.style.color = 'red';
        e.preventDefault();
    }

    if (prenom.value == "") {
        let error = document.getElementById('error');
        error.innerHTML = " quel est votre prenom ?";
        error.style.color = 'red';
        e.preventDefault();
    } else if (regex.test(prenom.value)== false) {
        let error = document.getElementById('error');
        error.innerHTML = "seul les majuscules et minuscules sont acceptés";
        error.style.color = 'red';
        e.preventDefault();
    }


    if (nom.value == "") {
        let error = document.getElementById('error');
        error.innerHTML = " quel est votre nom ?";
        error.style.color = 'red';
        e.preventDefault();
    } else if (regex.test(nom.value)== false) {
        let error = document.getElementById('error');
        error.innerHTML = "seul les majuscules et minuscules sont acceptés";
        error.style.color = 'red';
        e.preventDefault();
    } 





    if(nom.value != "" & prenom.value != "" & email.value != "" & message.value != ""){
        let succes = document.getElementById('succes');
        succes.innerHTML = "Votre message a bien été envoyé !";
        succes.style.color = 'green';
        e.preventDefault();
    } else {
        let succes = document.getElementById('succes');
        succes.innerHTML = "";
        succes.style.color = 'green';
        e.preventDefault();
    }

});
