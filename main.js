//DOM API
//Obtener el por ID
//Se utiliza para seleccionar un elemento HTML específico en una página web a partir de su atributo id. Cuando llamas a document.getElementById("nombreDelId"), el método devuelve una referencia al elemento HTML que tiene ese ID único.
//Es necesario guardarlo en una variable, se puede utuilizar let, var o const ya que no se va a modificar (de preferencia const)

const div1 = document.getElementById("div-1");
console.log(div1); 

//document.getElementsByTagName() se utiliza para seleccionar elementos HTML en una página web, lo hace seleccionando elementos por su nombre de etiqueta por ejemplo <p> se coloca entre parentesis como "p".
const divCollection = document.getElementsByTagName("div");
console.log(divCollection); //Se obtiene una colección de elementos (en este caso de div-1 y div-2), en consola me muestra todos los atributos de esos elementos

const p = document.getElementById("p1");
const usernameinputs = document.getElementsByName("username"); //me da una colección de elementos por su nombre y nos deja visualizar sus atributos

const usernameinput = usernameinputs[0];

console.log(p, usernameinput); //verificamos que aparezcan bien en consola, usaernameinpunt[0] fue para obtener el elemento en el índice 0, ya no se trata de una colección.
    //Para conocer la longitud del array se utiliza .lenght

    //Los eventos en JS no indican las interaciones que tiene el usuario con el elemento, en JS hay dos de este tipo de eventos 
    //EVENTOS
    //Usuario ingresa algo y se logea en la consola 

//usernameinput.addEventListener("input", (event) => console.log(event)); //Muestra en cada elemento ingresado por el usuario los atributos de estos

//usernameinput.addEventListener("input", (event) => console.log(event.data)); //Muestra los datos ingresados por el usuario 

//usernameinput.addEventListener("input", (event) => console.log(event.target.value)); //Muestra como los elementos ingresados se van agrupando por cada evento que hace el usuario, por ejemplo al ingresar hola: h, ho, hol, hola
    //target --> se refiere al objeto, nodo en este caso al input donde sucede el evento, target es nuestro objetivo del evento
    //targent.value -> es el string o datos que tiene adentro nuestro targent

//Para mandalo al elemento p y que lo muestre el usuario es necesario darle una función que coloque en texto
usernameinput.addEventListener("input", (event) => {
    console.log(event.target.value);
    p.innerText = event.target.value;
});
