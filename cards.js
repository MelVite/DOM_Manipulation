/**
 * Crear una tarjeta (div) donde el usuario pueda ingresar:
 * Img
 * Crear secciones para tarjeta:
    *   Título -> nombre de usuario
    *   Descripción
    *   Edad 
    *   Lista de cosas que le interesen (películas, canciones, etc)
 * Insertar en la tarjeta 
 * Mostrar dentro del div con class container
 */

//Constantes GLOBALES --> se declaran con llaves y un valor, como un bloque de código, osea un atributo y su valor
const CARDS_CONTAINER = document.getElementById("card-container");
//otra opción sino se puede usar getElementById es con querySelector(".ClassElemento o #IDelemento")
const USER = {
 id: 1, //valor de ID para este usuario
 username: 'User Name', 
 desc: 'Sobre mi',
 age: 26,
 fav_books: { // Es un objeto anidado que contiene un array
    books: [
        'El señor de los Anillos', 
        'Mo Dao Zu Shi', 
        'El llamado de lo Salvaje', 
        'La Bendición del Oficial del Cielo'
    ],
 },
};


//Crear secciones
const card = document.createElement("div"); //creamos un div para hacer la tarjeta, no existe aún dentro de mi HTML
const name_section = document.createElement("h3");
const desc_section = document.createElement("p");
const age_section = document.createElement("p");
const book_section = document.createElement("div");
//LA LISTA SE QUEDA PENDIENTE
const bookList = USER.fav_books.books.map((e) => {
    const item = document.createElement("ul");
    item.textContent = e;
    return item;
}) // map es una iteración por cada elemento y siempre regresa algo
console.log(bookList);

//Crear tarjeta
name_section.textContent = USER.username;
desc_section.textContent = USER.desc;
age_section.textContent = USER.age;
book_section.append(...bookList); //me marca un error ya que bookList no es un nodo es un array, podemos utilizar un forEach o un operador llamado Spread 
// spread ... --> permite a un elemento iterable tal como un arreglo o cadena ser expandido en lugares donde sero a más argumentos o elementos son esperados, o a un objeto ser expandido en lugares donde cero o más pares de valores clave son esperados.

//Insertamos los datos ateriores al div y despues al div-container con la función append que inserta nodos
card.append(name_section, desc_section, age_section, book_section);

//insertar o inyectar tarjeta en container 
CARDS_CONTAINER.appendChild(card);
//appendChild() solo inserta un nodo, append() permite mandar diferentes

//EJERCICIO: Hay una implementación de 17 líneas que puede hacer lo anterior con multiples usuarios, buscar.
//Convertir lo anterior de manera funcional, pasando las variable globales a funciones y debe funcionar a multiples usuarios (spreach, map, etc.)

