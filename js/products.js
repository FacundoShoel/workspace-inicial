const CARSURL =  `https://japceibal.github.io/emercado-api/cats_products/${localStorage.getItem("catID")}.json`;

 // Utilizando el JSON situado en init.js imprimo la informacion de los vehiculos en products.html
 // @param Auto - The name of the variable that will hold the array of products.
let arrayProductos = [];
let precioMinimo = undefined;
let precioMaximo = undefined;



//--------------------------------------------------------//

function productList(Auto){
    let htmlContentToAppend = ""; //Variable que guarda los datos que van a ser empujados a la etiqueta con id=container-autos
    for(let i = 0; i<Auto.products.length; i++){
        let arrayProductos = Auto.products[i]; //Variable creada para contar en que posicion de objeto estoy, cada posicion en este caso es un vehicu
            //La primera condicion es que no imprima los valores menores que precioMinimo
        if (((precioMinimo == undefined) || (precioMinimo != undefined && parseInt(arrayProductos.cost) >= precioMinimo)) 
                &&
            //La segunda condicion es que no imprima los valores MAYORES a precioMaximo
            ((precioMaximo == undefined) || (precioMaximo != undefined && parseInt(arrayProductos.cost) <= precioMaximo))){ 
        
        htmlContentToAppend += `
            <div class="row">
                <div class="col-3">
                    <img src=${arrayProductos.image}  class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                    <h4 class="mb-1">${arrayProductos.name} - ${arrayProductos.currency} ${arrayProductos.cost}</h4>
                    <small class="text-muted">${arrayProductos.soldCount} artículos</small>
                 </div>
                    <p class="mb-1 th">${arrayProductos.description}</p>
                </div>
            </div>
            </div>
     `
        }
    }
    document.getElementById("container-autos").innerHTML=htmlContentToAppend; //tomo con getElement "container-autos" y le empujo el htmlContentToAppend
}



document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CARSURL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            arrayProductos = resultObj.data;
            productList(arrayProductos);
            console.log(arrayProductos)
               
        }
    });
        let price = document.getElementById('price')
        let arrayProduct = data.products;
        divList = document.getElementById("container-autos")

        //ordeno por precio
        price.addEventListener('click', function(){

            arrayProduct = arrayProduct.sort(function(a, b){

                if(a.cost < b.cost){
                    return -1;
                }
                if(a.cost > b.cost){
                    return 1;
                }
                    return 0;
            })

            divList.innerHTML = " "

            for(i=0; i<arrayProduct.length; i++){

            divList.innerHTML += `
            <div class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="`+arrayProduct[i].image+`" class="img-thumbnail">
                    </div>
                    <div class="col-8">
                    <h4>${arrayProduct[i].name} - ${arrayProduct[i].currency}
                        ${arrayProduct[i].cost}</h4> 
                    <p> ${arrayProduct[i].description}</p>
                    </div>
                    <div class="col d-flex w-100 justify-content-between">
                        <small class="text-muted">${arrayProduct[i].soldCount} Vendidos</small>
                    </div>
            ` 
            }
        })
    });

    
    //seccion de Filtro de precios
    document.getElementById("clearRangeFilter").addEventListener("click", function(){
        //Obtengo los inputs del DOM y vuelvo al valor de esos input a un string vacio.
        document.getElementById("rangeFilterCountMin").value = "";
        document.getElementById("rangeFilterCountMax").value = "";
        //
        precioMinimo = undefined;
        precioMaximo = undefined;

        productList(arrayProductos);
    });
    
    

    document.getElementById("rangeFilterCount").addEventListener("click", function(){
        //Extraigo mínimo y máximo de los input.value para filtrar por precio.
        precioMinimo = document.getElementById("rangeFilterCountMin").value;
        precioMaximo = document.getElementById("rangeFilterCountMax").value;

        //condiciones para que se retornen los valores de los input, estos tienen que ser enteros y mayores o iguales que 0.
        if ((precioMinimo != undefined) && (precioMinimo != "") && (parseInt(precioMinimo)) >= 0){
            precioMinimo = parseInt(precioMinimo);
        }
        else{
            precioMinimo = undefined;
        }

        if ((precioMaximo != undefined) && (precioMaximo != "") && (parseInt(precioMaximo)) >= 0){
            precioMaximo = parseInt(precioMaximo);
        }
        else{
            precioMaximo = undefined;
        }
        //ejecuto product list con las condiciones de precioMaximo y precioMinimo.
        productList(arrayProductos);
    });

