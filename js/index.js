const email = document.getElementById("email");
const senha = document.getElementById("senha");
const btn = document.getElementById("submit_button");
const info = document.getElementById("info");

btn.addEventListener("click", (e)=>{
    e.preventDefault();
    if(email.value.length >= 8 && senha.value.length >= 5){
        localStorage.setItem('emails', email.value);
        localStorage.setItem('senhas', senha.value);
        window.location = "./browser.html";

    } else {
        info.innerHTML =  "<style>#info{color:red} p{color: green} </style> Digite um usuario com no minimo 8 digitos, e uma senha com no minimo 5. <p>Lembrete, apenas um usuario por aparelho<p>";   
    }
})

