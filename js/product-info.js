const INFORMACIONCART =
  "https://japceibal.github.io/emercado-api/user_cart/25801.json";
const PRODUCTS_API =
  PRODUCT_INFO_URL + localStorage.getItem("ProductID") + EXT_TYPE;
const COMMENTS_PRODUCT =
  PRODUCT_INFO_COMMENTS_URL + localStorage.getItem("ProductID") + EXT_TYPE;

  //FUNCIONES 
  
function AgregarCompraLS(imagen,name,currency,cost){
  let myTransactionArray =JSON.parse(localStorage.getItem('transactionData')) || [];
  let objetoPropiedades = {
    "foto": imagen,
    "nombre": name,
    "moneda": currency,
    "precio": cost
  };
  myTransactionArray.push(objetoPropiedades);
  let transactionObjJSON = JSON.stringify(myTransactionArray)
  localStorage.setItem('transactionData',transactionObjJSON)
  window.location.href = "cart.html"
  }

  function guardarLS(id){
    localStorage.setItem("ProductID", id);
    window.location.href = "product-info.html"
  }

fetch(PRODUCTS_API)
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    console.log(datos)

    let namsito = "'" + datos.name + "'"

    let monedita = "'" + datos.currency + "'"
    
    let imagensita = "'" + datos.images[0] + "'"

    let htmlContentToAppend = "";

    htmlContentToAppend = `
    <h2>${datos.name}</h2>
    <button class="col" onclick="AgregarCompraLS(${imagensita},${namsito},${monedita},${datos.cost})">
        Comprar
    </button>
    <hr>
    <h4>Precio</h4>
    <p> URU ${datos.cost} </p>
    <br>
    <h4>Descripcion</h4>
    <p> ${datos.description} </p>
    <br>
    <h4>Categoria</h4>
    <p> ${datos.category} </p>
    <br>
    <h4>Cantidad de vendidos</h4>
    <p> ${datos.soldCount} </p>
    <br> 
    <h4>Imagenes</h4>

    <div class="row">
        
    
     `;
    for (let imagen of datos.images) {
      htmlContentToAppend += `
        <div class="col">
            <img src=${imagen} class="img-fluid"> </img>
        </div>
        
        `;
    }

    htmlContentToAppend += `</div>`;

    document.getElementById("InnerProduct").innerHTML += htmlContentToAppend; //tomo con getElement "container-autos" y le empujo el htmlContentToAppend
  });

  


//Este fetch toma la api de comentarios segun el articulo elegido y lo traduce a JSON para poder usar el array
fetch(COMMENTS_PRODUCT)
  .then((respuesta) => respuesta.json())
  .then((datos) => {

    //Inicializo un htmlcontentToAppend en el que voy a pegar todas las partes de los comentarios, descripcion, score, user, dateTime. Y estrellitas <3
    let htmlContentToAppend = "";
    htmlContentToAppend += `
    <div>
        <h2>Comentarios</h2>       
            <table class="table">
                <tbody>
    `;
    //Este for itera el array de datos y guarda un sus elementos bajo la variable comment que uso cada vez que necesito una propiedades de comment

    for (let comment of datos) {
      htmlContentToAppend +=
        `
        
        <tr>
            <td><b> ${comment.user}</b> - ${comment.dateTime} -` +
        Stars(comment.score) +
        `
            <br>
            ${comment.description}
            </td>
            
        </tr>
        `;
    }

    htmlContentToAppend += `
            </tbody>
        </table>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Tu opinion</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div class="mb-3">
            <label>Tu puntuacion</label>
            <select class="form-select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <br>
            <button type="button" class="btn btn-primary form-control">Enviar</button>
        </div>
    `;

    document.getElementById("infoComment").innerHTML += htmlContentToAppend; //Esta es la etiqueda HTML a la que se le esta appendeando todos los comentarios.

  });

//Funcion que evulua e imprime Estrellas segun comment.score
function Stars(valoracion) {
  let htmlContentToAppend = "";
  //For que agrega estrellas checked
  for (let i = 0; i < valoracion; i++) {
    htmlContentToAppend += `
            <span class="fa fa-star checked"></span>
        `;
  }
  //Este if evalua y agrega cuantas estrellas de las 5 no estan checked
  if (valoracion < 5) {
    for (let i = 0; i < 5 - valoracion; i++) {
      htmlContentToAppend += `
            <span class="fa fa-star"></span>
        `;
    }
  }
  return htmlContentToAppend;
}



fetch(PRODUCTS_API)
.then((respuesta) => respuesta.json())
.then((datos) => {
  console.log(datos)
  let htmlContentToAppend = "";

    htmlContentToAppend = `

    <div class="row">
        
     `;
    for (let productRelacionate of datos.relatedProducts) {
      htmlContentToAppend += `
      <button type="button" class="col" onclick="guardarLS(${productRelacionate.id})">
          <h1>${productRelacionate.name}</h1>
          <img src=${productRelacionate.image} class="img-fluid"> </img>
        </button>
        `;
    }
    htmlContentToAppend += `</div>`;
    

    document.getElementById("productRelated").innerHTML += htmlContentToAppend;
});
