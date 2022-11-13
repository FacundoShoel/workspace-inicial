//variable que guarda elemento boton submit 
const boton = document.getElementById("botonPrincipal");
//guardo el elemento input
const INPUT_TEXT = document.getElementById("email");
const INPUT_PASSWD  = document.getElementById("contraseña")


boton.addEventListener('click',function(e){
    e.preventDefault();
    if(document.getElementById("email").value.length < 3){
        alert("No colocaste los datos correctamente");
        
    }if(document.getElementById("contraseña").value.length < 3){
        alert("No colocaste los datos correctamente");
    }
    else{
        window.location.href="home.html";
    }
    let inputsemails = {
        correo: document.getElementById("email").value
    }
    localStorage.setItem('correuser', JSON.stringify(inputsemails))
})

