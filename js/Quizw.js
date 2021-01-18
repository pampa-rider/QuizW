//Quiz_W

//Made by Emmanuel.D.Breyaue (Pampa_Rider)
//Github: http://github.com/pampa-rider
//Twitter: http://twitter.com/pampa_rider


//global vars
var alphabt = new Array("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
var score=0;
var i;
var letra_rn

var gl_palabra;
var gl_palabras_tam;
var gl_letra;
var gl_letra_val;

var seconds=60;
var countdownTimer = setInterval('clock_down()',1000);



function clock_down()
{
var minutes = Math.round((seconds - 30) / 60);
var remaingSeconds= seconds % 60;

    if(remaingSeconds<10)
    {
    remaingSeconds = "0" + remaingSeconds;  
    }

    document.getElementById('timer').innerHTML = minutes + ":" + remaingSeconds;
    if (seconds==0)
    {
    clearInterval(countdownTimer);
    game_over();
    }
    else
        {
        seconds--;  
        }
}

function game_over()
{
deshabilitar_botones();
document.getElementById('reload').style.display="inline";
document.getElementById('word').innerHTML="GAME OVER";
}



function load()
{
document.getElementById('timer').innerHTML="0:00";
quiz_word_computer(); //from quiz_words.js
gl_palabra=Ran_dom(palabras.length);
gl_palabras_tam=palabras[gl_palabra].length;
gl_letra_val=Ran_dom(gl_palabras_tam);
gl_letra = obtener_letra(gl_palabra,gl_palabras_tam,gl_letra_val);
document.getElementById('reload').style.display="none";
imprimir_pantalla();
restablecer_botones();
}

function restart()
{
location.reload();    
}

function Ran_dom(rn)
{
var valor = Math.floor(Math.random() * rn);
//if(valor==0){return valor + 1;}
return valor;
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
var word="";

    for(i=0;i<tam;i++)
    {
    if(falt!=i)
    {
    word+=palabras[pos].substr(i,1);
    }    

        else
        {
        word+='_';
        }
}
document.getElementById('word').innerHTML=word;
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

rand = Ran_dom(3)
rand+=1;

document.getElementById('btn-'+rand+'').value=gl_letra;


    for(i=1;i<=4;i++)
    {
    letra_rn=Ran_dom(10);

        if(i!=rand)
        {   
        document.getElementById('btn-'+i+'').value=alphabt[letra_rn];
        }       
    }

}




function deshabilitar_botones()
{
var i;
for(i=1;i<=4;i++)
    {
    document.getElementById('btn-'+i+'').style.display="none";   
    }    
}


function validar_respuesta(opcion)
{
letra = document.getElementById('btn-'+opcion+'').value;

    if(gl_letra == letra)
    {
    document.getElementById('word').innerHTML=palabras[gl_palabra];
    score+=50;
    document.getElementById('score').innerHTML='Score: ' + score;
    load();
    }

    else
    {
    game_over();
    return;
    }   


}