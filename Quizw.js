//Quiz_W

//Made by Emmanuel.D.Breyaue (Pampa_Rider)
//Github: http://github.com/pampa-rider
//Twitter: http://twitter.com/pampa_rider

//generar palabras
var palabras = new Array("Computadora","Mouse","Teclado","Impresora","IBM","Intel","Microsoft","Monitor", "Cloud Computing","Blockchain","Linus Torvals","Linux","Richard Stallman","UTP","Fibra Optica","Ryzen","Megabyte","GigaByte","Megabyte","Terabyte","Jotabyte","Petabyte","Zetabyte");
var alphabt = new Array("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");

var gl_palabra=Ran_dom(palabras.length);
var gl_palabras_tam=palabras[gl_palabra].length;
var gl_letra_val=Ran_dom(gl_palabras_tam);
var gl_letra = obtener_letra(gl_palabra,gl_palabras_tam,gl_letra_val);

var i;
var letra_rn;


function Ran_dom(rn)
{
var valor = Math.floor(Math.random() * rn);
return valor;   
}

function reload()
{
location.reload();
}


function obtener_letra(pos,tam,letra)
{
var i;

    for(i=0;i<tam;i++)
    {
    
    if(letra==i)
    {
    return palabras[pos].substr(i,1);
    }   
    }
}


function generar_pregunta(pos,falt,tam)
{
var i;
var palabra="";

for(i=0;i<tam;i++)
{
if(falt!=i)
{
palabra+=palabras[pos].substr(i,1);
}    
else
{
palabra+='_';
}
}
document.getElementById('incognita').innerHTML= palabra;
}


function responder(letra,tam,pos)
{

for(i=0;i<tam;i++)
{
if(falt!=i)
{
palabra+=palabras[pos].substr(i,1);
}    
else
{
palabra+='_';
}
}
document.getElementById('incognita').innerHTML=palabra;
}



function imprimir_pantalla()
{
generar_pregunta(gl_palabra,gl_letra_val,gl_palabras_tam);
document.getElementById("opcion-1").value=gl_letra;


for(i=2;i<5;i++)
{
letra_rn=Ran_dom(26);
document.getElementById('opcion-'+i+'').value=alphabt[letra_rn];    
}



}

function validar_respuesta(opcion)
{
letra = document.getElementById('opcion-'+opcion+'').value;

    if(gl_letra == letra)
    {
    document.getElementById('opcion-'+opcion+'').style.backgroundColor=("#bdf76c"); 
    document.getElementById('opcion-'+opcion+'').style.color=("#333333");       
    document.getElementById('respuesta').style.color=("#bdf76c");
    document.getElementById('respuesta').innerHTML="Respuesta Correcta";
    document.getElementById('incognita').innerHTML=palabras[gl_palabra];
    return;
    }

    else
    {
    document.getElementById('opcion-'+opcion+'').style.backgroundColor=("#cb3234");            
    document.getElementById('respuesta').style.color=("#cb3234");
    document.getElementById('respuesta').innerHTML="Respuesta Incorrecta";
    return;
    }   


}



