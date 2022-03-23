function validar () 
{
    var campoNombre=document.getElementById('titulo').value;
    if(campoNombre.length<4)
    {
        alert("no tiene 4 caracters");
    }
}
var lista_generos=["Historico","fantastico","documental"];
function cargarGenero()
{
    var objeto_select=document.getElementById("genero");
    for (i=0; i<lista_generos.length; i++)
    {
        var obj_option=document.createElement("option");
        obj_option.value=i;
        obj_option.innerHTML=lista_generos[i];
        objeto_select.appendChild(obj_option);
    }
}
function validarBoton()
{
    var campoNombre=document.getElementById("titulo").value;
    var campoGenero=document.getElementById("genero").value;
    
    alert("se va a ver la pelicula "+campoNombre+" de genero "+campoGenero);
}