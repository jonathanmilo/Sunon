// window.print()
const hoja=document.getElementById("hoja")
const btn=document.getElementById("btn-imp")

$("#hoja").css("display","none")

function ocultarHoja(){
    $("#hoja").css("display","none")
    $("header").css("display","none")
}

function mostrarHoja(){
    $("#hoja").css("display","flex")
    $("header").css("display","flex")
}
function reinicio(){
    ocultarHoja()
    document.getElementById("form").reset()
}
function menu(){
    document.getElementById("menu-datos").classList.toggle("ocultar")
}
function bgFoondo(){
    valor=$("#opcion-fondos").val()
    console.log(valor)
    $("#marco-1").css("background-image","var(--bg-"+valor+")")
}
let inp_descripcion=$("#inp-descripcion")
let inp_alumno=$("#inp-alumno")
function generar_certificado(){
    bgFoondo()
    encabezado= $("#inp-encabezado").val()
    alumno=$("#inp-alumno").val()
    // funciones de escritura en pág.
    let fecha=new Date()
    mes=fecha.getMonth() +1
    año=fecha.getFullYear()
    dia=fecha.getDay()
    fecha_filtrada=dia+"/"+mes+"/"+año
    console.log(año,mes,dia)
    document.getElementById("Nombre-curso").innerText=""+encabezado+""   
    document.getElementById("Nombre-usuario").innerText=""+alumno+"" 
    document.getElementById("fecha").innerText=fecha_filtrada  
    document.getElementById("descripcion_especificacion").innerText=""+encabezado+""
    
    mostrarHoja()
}
btn.addEventListener("click",function(){
    window.print()
})