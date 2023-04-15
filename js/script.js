const formulario=document.getElementById("form")
const boton=document.getElementById("enviar")
const nombre=document.getElementById("name")
const apellido=document.getElementById("apellido")
const email=document.getElementById("email")
const tel=document.getElementById("phone")


function enviar (){
    
    let regexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let a=false
    let aa=false
    let aaa=false
    let aaaa=false
    
    if(nombre.value.length < 3){
        alert("completa el Nombre")
        }
        else {
            a=true
        }

    if(apellido.value.length < 3){
        alert("completa el Apellido")
    }
    else {
        aa=true
    }
    if(!regexEmail.test(email.value)) {
    alert("el E.Mail no es válido")
    }
    else {
        aaa=true
    }
    if(tel.value.length <10){
    alert("el número de teléfono no es válido")
    }
    else {
        aaaa=true
    }
    console.log(a,aa,aaa,aaaa)
    if(a=aa=aaa=aaaa == true){
        formulario.style.backgroundColor="green"
        alert("¡Hemos recibido tus datos, nos comunicaremos contigo a la brevedad!")
    }
}
boton.addEventListener("click", enviar)