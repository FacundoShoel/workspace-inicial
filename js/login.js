//variable que guarda elemento boton submit 
let boton = document.getElementById('botonPrincipal');

boton.addEventListener('click',e=>{
    let inputs = document.getElementsByClassName('form-control');
    for (let i = 0; i < inputs.length; i++){ //input.length apunta a la cantidad de etiquetas que tengan la class="form-control"
        if(inputs[i].value.length>0){//.value da como resultado un string y length cuenta la cantidad de caracteres de este.
            window.location.href = "home.html";
        }else{
            alert("No estan completados los campos")
    }
    }
})

