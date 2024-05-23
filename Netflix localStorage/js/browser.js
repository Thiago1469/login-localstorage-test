const email = document.getElementById("email");
const senha = document.getElementById("senha");
const btn = document.getElementById("submit_button");
const info = document.getElementById("info");

btn.addEventListener("click", (e)=>{
    e.preventDefault();

    if(email.value === localStorage.getItem('emails', email) && senha.value === localStorage.getItem('senhas', senha)){
            window.location = "./final.html"  
    } else{
        info.innerHTML = "<style>#info{color: red}</style> Email ou senha incorreta, tente novamente."
    }
})