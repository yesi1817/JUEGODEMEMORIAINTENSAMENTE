//Variables Globales
const d = document;
//Imagenes del Juego
let imgN1 =[
    {nombre:"alegria", url:"imagenes/alegria.webp"},
    {nombre:"tristeza", url:"imagenes/tristeza.webp"},
    {nombre:"furia", url:"imagenes/furia.webp"},
    {nombre:"envidia", url:"imagenes/envidia.webp"},
    {nombre:"desagrado", url:"imagenes/desagrado.webp"},
    {nombre:"ansiedad", url:"imagenes/ansiedad.webp"},
    {nombre:"timidez", url:"imagenes/timidez.jpg"},
    {nombre:"aburrimiento", url:"imagenes/aburrimiento.jpg"},
    {nombre:"panico", url:"imagenes/panico.webp"},
    {nombre:"alegria", url:"imagenes/alegria.webp"},
    {nombre:"tristeza", url:"imagenes/tristeza.webp"},
    {nombre:"furia", url:"imagenes/furia.webp"},
    {nombre:"envidia", url:"imagenes/envidia.webp"},
    {nombre:"desagrado", url:"imagenes/desagrado.webp"},
    {nombre:"ansiedad", url:"imagenes/ansiedad.webp"},
    {nombre:"timidez", url:"imagenes/timidez.jpg"},
    {nombre:"aburrimiento", url:"imagenes/aburrimiento.jpg"},
    {nombre:"panico", url:"imagenes/panico.webp"}
];
//Seleccionar al tablero del html
let tablero = d.querySelector(".tablero");
let nombreImg = [];//
let idImg = [];

//Funcion para agregar las imagenes al tablero 
function agregarImagenes() {
    //Recorrer con un foreach las imagenes del array
    imgN1.forEach((img, i)=>{
        let div = d.createElement("div");//Crear div
        div.className = "col-3 my-2";//Agregar clase al div
        let imagen = d.createElement("img");//Crear imagen
        imagen.src = "imagenes/grupo.webp";//Agregar la ubicacion de la imagen
        imagen.className = "img-fluid ";//Agregar las clases a las imagenes
        imagen.id = i; //Agregar identificador a cada imagen 
        imagen.addEventListener("click", mostrarImagenes)
        div.appendChild(imagen);//Agregar la imagen al div
        tablero.appendChild(div);//Agregar el div al tablero 
    });
}

//Funcion para mostrar las imagenes ocultas
function mostrarImagenes(){
  let imgID = this.getAttribute("id");
    //alert("imagen #"+imgID);
    this.src = imgN1[imgID].url;
    //Guardar los nombres de imagen
    nombreImg.push(imgN1[imgID].nombre);
    //Guardar los id de las imagenes
    idImg.push(imgID);

    //Activar la funcion de comparar imagenes
    if (nombreImg.length == 2) {
        //Simular o esperar un tiempo 
        setTimeout(compararImagenes, 100);
        
    }
}

//Funcion para comparar imagenes
function compararImagenes(){
    let allImg = d.querySelectorAll("tablero .col-3 img");
    //Verificar si las imagenes son iguales
    if (nombreImg[0] == nombreImg[1]) {
        alert("Muy bien descubriste la imagen 🤩")
        allImg[idImg[0]].src = "imagenes/bien.jpg";
        allImg[idImg[1]].src = "imagenes/bien.jpg";
    }else{
        alert("Sigue intentando 😟");
        allImg[idImg[0]].src = "imagenes/ocultar.jpg";
        allImg[idImg[1]].src = "imagenes/ocultar.jpg";


    }
    //Reiniciar las variables
    nombreImg = [];
    idImg = [];
}


agregarImagenes();