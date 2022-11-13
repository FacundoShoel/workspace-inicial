let firstName = document.getElementById("first-name");
let secondName = document.getElementById("second-name");
let apellido = document.getElementById("first-surname");
let segundoapellido = document.getElementById("second-surname");
let fotito = document.getElementById("foto");
let numerito = document.getElementById("contactnumber");
let boton = document.getElementById("boton");
let img = document.getElementById("imgPreview");

let email = document.getElementById("email");
let ValorCorreo = document.getElementById("yaNoSeNombredevaribles").value
console.log(ValorCorreo)


email.value = ValorCorreo





boton.addEventListener("click", function (e) {
  if (
    firstName.checkValidity() &&
    apellido.checkValidity() &&
    email.checkValidity()
  ) {
    localStorage.setItem("fname", firstName.value);

    localStorage.setItem("sname", secondName.value);

    localStorage.setItem("surname", apellido.value);

    localStorage.setItem("ssurname", segundoapellido.value);

    localStorage.setItem("email", email.value);

    localStorage.setItem("contactNumber", numerito.value);
  }
});

let Namsito = localStorage.getItem("fname");
let secondNamsito = localStorage.getItem("sname");
let surname = localStorage.getItem("surname");
let secondSurname = localStorage.getItem("ssurname");
let mail = localStorage.getItem("email");
let tel = localStorage.getItem("contactNumber");

firstName.value = Namsito;
secondName.value = secondNamsito;
apellido.value = surname;
segundoapellido.value = secondSurname;
email.value = mail;
numerito.value = tel;

//SECCION DE COLOCAR FOTO DE PERFIL

document.querySelector("#foto").addEventListener('change',function(){
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        localStorage.setItem("recent-image",reader.result);
    });

    reader.readAsDataURL(this.files[0]);
})

document.addEventListener("DOMContentLoaded", () => {
    const recentImageDataUrl = localStorage.getItem("recent-image");

    if(recentImageDataUrl){
        document.querySelector("#imgPreview").setAttribute("src", recentImageDataUrl);
    }
});