// obtener un elemento por su id 
const titulo = document.getElementById('titulo')
titulo.style.background ='orange';

//obtner elemento por selector
// por documento
const selector = document.querySelector('h1')
console.log(selector)

const variosE = document.querySelectorAll('div p')
console.log(variosE[0] )

// por elemento
const xElemento = document.querySelector('.primer')
console.log(xElemento)

// const list = document.querySelector('#list')
// // devuelve una lista
// console.log(list)
// console.log(list.querySelector('#seleccionado'))
// devuelve un unico elemento

const nuevaLista = document.querySelectorAll('li')
console.log(nuevaLista)
// convertir en un array
const newArray = Array.from(nuevaLista)
newArray.forEach(element =>console.log(element))
// console.log(newArray)

/**getAtribute y setAtribute 
 * primero obtiene un atributo del elemento
*/
const atributo = document.querySelector('h1')
// atre el atributo
console.log(atributo.getAttribute('id'))
// setea el atributo
atributo.setAttribute('id','tit')
console.log(atributo.getAttribute('id'))

// contenido
// devuelve contenido
console.log(atributo.textContent)
atributo.textContent = 'aqui probando'
// devuelve contenido incluyen sus hijos
console.log(atributo.innerHTML)
atributo.innerHTML = 'AQUI <em>ESTOY</em>'
// devuelve el elmento transformado en un string
console.log(atributo.outerHTML)
atributo.outerHTML = '<h1>HOLA </h1>'


/**CREAR ELEMENTOS EN EL DOM */
const profesor = document.createElement('h2')
profesor.innerHTML = '<em>Deysi Flores</em>'
// crea la clase del elemento
profesor.classList.add('teacher')
// crea el id del elemento
profesor.id = 'teacher'
// elemento es añadido en el documento
document.body.appendChild(profesor)

/**otro ejemplo */
// console.log(profesorConteiner)
const x = document.createElement('span')
x.innerHTML='DEY'

const par = document.getElementById('parrafo')
if (par) {
    par.querySelector('em').appendChild(x)
} else {
    
}

