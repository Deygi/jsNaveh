/**EVENTOS */
// const elemento = document.getElementById('titulo')
// const holaMundo = texto=>
//  console.log(texto)

// un click
// elemento.addEventListener('click',(e)=>{
//     holaMundo(e.target.textContent)
// })
// un doble click
// elemento.addEventListener('dblclick',(e)=>{
//     holaMundo(e.target.textContent)
// })
// cuando el cursor dentra al area del elemento
// elem


// cuando el cursor sale del area del elemento
// elemento.addEventListener('mouseleave',(e)=>{
//    holaMundo(e.target.textContent)
// }) 
/**EVENTO FORMULARIO
 
 const form = document.getElementById('form') 
 
form.addEventListener('submit', () =>{
    console.log('envio')
})

const recordar = document.getElementById('idRecordar')
recordar.addEventListener('change' ,e =>{
    if (e.target.checked) {
        console.log('quiere recordar contraseña')
    } else {
        console.log('no quiere')
    }
})

*/

// blur -para filtar contenido

/**EVENTOS EN DOM Y NAVEGADOR 
 * 
 usado cuando carga primero el script
 addEventListener('DOMContentLoaded' ,() =>{
     
})
*/

/**EVENTO MULTIMEDIA */

const video = document.getElementById('videoM')
video.addEventListener('click',e =>{
    e.play()
})






























































 