let productos = [];
let lista = "";
let precioTo = 0;
function carrito(prod, prec) {
  let confi = confirm("¿Desea añdir este articulo al carrito?");

  if (confi) {
    anadir(prod, prec);
    alert(`Producto: ${prod}\nPrecio: ${prec}`);
    listar();
    alert("Producto añadido con exito");
  } else {
    lista = "";

    alert("Puede seguir añadiendo otros articulos si lo desea...");
  }
}
function ventana() {
  let formu = window.open(
    "formulario.html",
    "ventana formulario",
    "width=500 height=600"
  );
  formu.moveTo(500, 100);
  formu.document.body.style.backgroundColor = "red";
}
function reset() {
  document.getElementById("nombre").value = "";
  document.getElementById("email").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("mensaje").value = "";
}
//***********************************************************reloj */
function actual() {
  meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  semana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  momentoAct = new Date();
  horas = String(momentoAct.getHours());
  minutos = String(momentoAct.getMinutes());
  segundos = String(momentoAct.getSeconds());
  hoy = semana[momentoAct.getDay()];
  hoynumero = momentoAct.getDate();
  mes = meses[momentoAct.getMonth()];
  anio = momentoAct.getFullYear();
  if (segundos.length == 1) segundos = "0" + segundos;

  if (minutos.length == 1) minutos = "0" + minutos;

  if (horas.length == 1) horas = "0" + horas;

  let div = document.getElementById("reloj");
  div.textContent =
    horas +
    ":" +
    minutos +
    ":" +
    segundos +
    ":  " +
    hoy +
    " " +
    hoynumero +
    " de " +
    mes +
    " de " +
    anio;

  setTimeout("actual()", 1000);
}
function listar() {
  for (let c of productos) {
    for (let prop in c) {
      lista += prop + ": " + c[prop] + "\n";
    }
  }

  alert(
    `Total de articulos agregados al carrito:\n${lista}\n***********\n Total compra: ${precioTo}`
  );
}
function anadir(prod, prec) {
  let produ = { producto: "", precio: 0 };
  //***************************

  produ.producto = prod;
  produ.precio = prec;

  productos.push(produ);

  precioTo += prec;

  //let compraTotalH = document.getElementById("compra");
  /*compraTotalH.textContent = `El Precio total de compra es: ${precioTo} `;
  let compraTotalM = document.getElementById("compraM");
  compraTotalM.textContent = `El Precio total de compra es: ${precioTo} `;*/
}
function carritoTotal() {
  //alert("La compra total es de: "+precioTo);
  document.getElementById("carritoTotal").textContent =
    "El precio total de compra es:\n" + precioTo + "\u20AC";
}
