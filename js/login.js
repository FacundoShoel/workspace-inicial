//variable que guarda elemento boton submit 
const boton = document.getElementById("botonPrincipal");
//guardo el elemento input
const INPUT_TEXT = document.getElementById("email"); 

//guardo en localStorage una vez que el usuario clickee el boton 
boton.addEventListener("click", function(){
    //guarda el valor escrito en el input en typo string.
    localStorage.setItem('emailUser' , INPUT_TEXT.value);
})

boton.addEventListener('click',e => {
    let inputs = document.getElementsByClassName('form-control');
        //input.length apunta a la cantidad de etiquetas que tengan la class="form-control"
    for (let i = 0; i < inputs.length; i++){ 
        //.value da como resultado un string y length cuenta la cantidad de caracteres de este.
        if(inputs[i].value.length>0){
            window.location.href = "home.html";
        }else{
            alert("No estan completados los campos")
    }
    }
    
})

