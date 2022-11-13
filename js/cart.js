const PRODUCTS_API = PRODUCT_INFO_URL + localStorage.getItem("ProductID") + EXT_TYPE;

let subtotalArticles;

let cantProduct = 0;
  
  function realizarTabla(){
    let ElementosProductInfo = JSON.parse(localStorage.getItem('transactionData'))
    let i = 1;
    for(x in ElementosProductInfo){
      htmlContentToAppend = `
        <tbody>
        <tr>
          <td><img width="120" src="${ElementosProductInfo[x].foto}"></img></td>
          <td>${ElementosProductInfo[x].nombre}</td>
          <td>${ElementosProductInfo[x].moneda}${ElementosProductInfo[x].precio}</td>
          <td><input type="number" id="inputTable${i}">$</td>
          <td><button>Eliminar<button></td>
        </tr>
         `;
      i++    
      console.log(i)
    }
    document.getElementById("transactionTable").innerHTML += htmlContentToAppend;
  }
  realizarTabla()













/*ELEGIR UN METODO DE PAGO*/
let credito = document.getElementById("credito");
let banco = document.getElementById("banco");

let inputNumCard = document.getElementById("num-card");
let inputCod = document.getElementById("cod-seg");
let inputVto = document.getElementById("vto");

let inputNumCuenta = document.getElementById("num-cuenta");

credito.addEventListener("click", function () {
  inputNumCuenta.disabled = true;
  inputNumCard.disabled = false;
  inputCod.disabled = false;
  inputVto.disabled = false;
});

banco.addEventListener("click", function () {
  inputNumCuenta.disabled = false;
  inputNumCard.disabled = true;
  inputCod.disabled = true;
  inputVto.disabled = true;
});
