/**
 * Crear una tarjeta (div) donde el usuario pueda ingresar:
 * Img
 * Crear secciones para tarjeta:
    *   Título -> nombre de usuario
    *   Descripción
    *   Edad 
    *   Lista de cosas que le interesen (películas, canciones, etc)
 * Insertar en la tarjeta 
 * Crear funciones reutilizables
 * Funciones para crear items 
 * Funciones para inyectar texto
 * funciones para renderizar 
 * multiples usuarios 
 * Mostrar dentro del div con class container
 */

//Constantes GLOBALES --> se declaran con llaves y un valor, como un bloque de código, osea un atributo y su valor
const CARDS_CONTAINER = document.querySelector("#card-container");
//otra opción sino se puede usar getElementById es con querySelector(".ClassElemento o #IDelemento")
const USERS = [
    {
        id: 1,
        username: "booklover123",
        description: "Avid reader and coffee enthusiast.",
        age: 29,
        fav_books: {
            books: ["To Kill a Mockingbird", "1984", "Pride and Prejudice"],
        },
    },
  {
    id: 2,
    username: "literature_junkie",
    description: "Poetry lover and amateur writer.",
    age: 35,
    fav_books: {
      books: ["The Great Gatsby", "Invisible Man", "Beloved"],
    },
  },
];


//Crear secciones
function createElements() {
    const cardObj = {
      name_section: document.createElement("h3"),
      desc_section: document.createElement("p"),
      age_section: document.createElement("p"),
      book_section: document.createElement("div"),
    };
    return cardObj;
}

//Crear tarjeta
//inyectamos info
function injectData(obj, user) {
    const bookList = user.fav_books.books.map((e) => {
      const item = document.createElement("ul");
      item.textContent = e;
      return item;
    });
  
    obj.name_section.textContent = user.username;
    obj.desc_section.textContent = user.desc;
    obj.age_section.textContent = user.age;
    obj.book_section.append(...bookList);
    renderCard(obj);
}  

function renderCard(cardObj) {
    const card = document.createElement("div");
    card.append(
      cardObj.name_section,
      cardObj.desc_section,
      cardObj.age_section,
      cardObj.book_section,
    );
    card.className = "div-creado";
    CARDS_CONTAINER.appendChild(card);
}

USERS.forEach((user) => {
    const cardData = createElements();
    injectData(cardData, user);
});

//EJERCICIO: Hay una implementación de 17 líneas que puede hacer lo anterior con multiples usuarios, buscar.
//Convertir lo anterior de manera funcional, pasando las variable globales a funciones y debe funcionar a multiples usuarios (spreach, map, etc.)

