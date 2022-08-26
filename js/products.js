/**
 * Utilizando el JSON situado en init.js imprimo la informacion de los vehiculos en products.html
 * @param Auto - The name of the variable that will hold the array of products.
 */
let arrayautos = [];

function productList(Auto){
    let htmlContentToAppend = ""; //Variable que guarda los datos que van a ser empujados a la etiqueta con id=container-autos
    for(let i = 0; i<Auto.products.length; i++){
        let contadorAuto = Auto.products[i]; //Variable creada para contar en que posicion de objeto estoy, cada posicion en este caso es un vehicu

        htmlContentToAppend += `
        <div class="row">
        <div class="col-3">
            <img src=${contadorAuto.image}  class="img-thumbnail">
        </div>
        <div class="col">
            <div class="d-flex w-100 justify-content-between">
                <h4 class="mb-1">${contadorAuto.name} - ${contadorAuto.currency} ${contadorAuto.cost}   </h4>
                <small class="text-muted">${contadorAuto.soldCount} artículos</small>
            </div>
            <p class="mb-1 th">${contadorAuto.description}</p>
        </div>
    </div>
</div>
     `
    }
    document.getElementById("container-autos").innerHTML+=htmlContentToAppend; //tomo con getElement "container-autos" y le empujo el htmlContentToAppend
}
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CARSURL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            arrayautos = resultObj.data;
            productList(arrayautos);
        }
    });
});