//Quiz_W

//Made by Emmanuel.D.Breyaue (Pampa_Rider)
//Github: http://github.com/pampa-rider
//Twitter: http://twitter.com/pampa_rider

//generar palabras
var palabras = new Array(
"algorithm",
"analog",
"app",
"application",
"array",
"backup",
"bandwidth",
"binary",
"bit",
"bite",
"bitmap",
"blog",
"blogger",
"bookmark",
"boot",
"broadband",
"browser",
"buffer",
"bug",
"bus",
"byte",
"cache",
"caps lock",
"captcha",
"CD",
"CD-ROM",
"client",
"clip art",
"clip board",
"cloud computing",
"command",
"compile",
"compress",
"computer",
"computer program",
"configure",
"cookie",
"copy",
"CPU",
"cybercrime",
"cyberspace",
"dashboard",
"data",
"data mining",
"database",
"debug",
"decompress",
"delete",
"desktop",
"development",
"digital",
"disk",
"DNS",
"document",
"domain",
"domain name",
"dot",
"dot matrix",
"download",
"drag",
"DVD",
"dynamic",
"email",
"emoticon",
"encrypt",
"encryption",
"enter",
"exabyte",
"FAQ",
"file",
"finder",
"firewall",
"firmware",
"flaming",
"flash",
"flash drive",
"floppy disk",
"flowchart",
"folder",
"font",
"format",
"frame",
"freeware",
"gigabyte",
"graphics",
"hack",
"hacker",
"hardware",
"home page",
"host",
"html",
"hyperlink",
"hypertext",
"icon",
"inbox",
"integer",
"interface",
"Internet",
"IP address",
"iteration",
"Java",
"joystick",
"junk mail",
"kernel",
"key",
"keyboard",
"keyword",
"laptop",
"laser printer",
"link",
"Linux",
"log out",
"logic",
"login",
"lurking",
"Macintosh",
"macro",
"mainframe",
"malware",
"media",
"memory",
"mirror",
"modem",
"monitor",
"motherboard",
"mouse",
"multimedia",
"net",
"network",
"node",
"notebook computer",
"offline",
"online",
"open source",
"operating system",
"option",
"output",
"page",
"password",
"paste",
"path",
"phishing",
"piracy",
"pirate",
"platform",
"plug-in",
"podcast",
"pop-up",
"portal",
"print",
"printer",
"privacy",
"process",
"program",
"programmer",
"protocol",
"queue",
"QWERTY",
"RAM",
"real-time",
"reboot",
"resolution",
"restore",
"ROM",
"root",
"router",
"runtime",
"save",
"scan",
"scanner",
"screen",
"screenshot",
"script",
"scroll",
"scroll bar",
"search engine",
"security",
"server",
"shareware",
"shell",
"shift",
"shift key",
"snapshot",
"social networking",
"software",
"spam",
"spammer",
"spreadsheet",
"spyware",
"status bar",
"storage",
"supercomputer",
"surf",
"syntax",
"table",
"tag",
"teminal",
"template",
"terabyte",
"text editor",
"thread",
"toolbar",
"trash",
"Trojan horse",
"typeface",
"undo",
"Unix",
"upload",
"URL",
"user",
"user interface",
"username",
"utility",
"version",
"virtual",
"virtual memory",
"virus",
"web",
"web host",
"webmaster",
"website",
"widget",
"wiki",
"window",
"Windows",
"wireless",
"word processor",
"workstation",
"World Wide Web",
"worm",
"WWW",
"XML",
"zip",);

var alphabt = new Array("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
//global vars
var score=0;
var i;
var letra_rn

//functionload

var gl_palabra;
var gl_palabras_tam;
var gl_letra;
var gl_letra_val;


function load()
{
gl_palabra=Ran_dom(palabras.length);
gl_palabras_tam=palabras[gl_palabra].length;
gl_letra_val=Ran_dom(gl_palabras_tam);
gl_letra = obtener_letra(gl_palabra,gl_palabras_tam,gl_letra_val);
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
rand = Ran_dom(3)
rand+=1;
document.getElementById('opcion-'+rand+'').value=gl_letra;
document.getElementById('play_again').style.display="none";


    for(i=2;i<5;i++)
    {
    letra_rn=Ran_dom(25);
    letra_rn+=1;

        if(i!=rand)
        {
        document.getElementById('opcion-'+i+'').value=alphabt[letra_rn];
        }       
    }
}

function deshabilitar_botones()
{
boton_1 = document.getElementById('opcion-1');      
boton_2 = document.getElementById('opcion-2');      
boton_3 = document.getElementById('opcion-3');      
boton_4 = document.getElementById('opcion-4');      

boton_1.disabled=true;
boton_2.disabled=true;
boton_3.disabled=true;
boton_4.disabled=true;
document.getElementById('play_again').style.display="inline";

}


function validar_respuesta(opcion)
{
letra = document.getElementById('opcion-'+opcion+'').value;

    if(gl_letra == letra)
    {
    document.getElementById('incognita').innerHTML=palabras[gl_palabra];
    score+=50;
    document.getElementById('score').innerHTML='Score: ' + score;
    load();
    }

    else
    {
       //repuesta incorecta 
    document.getElementById('opcion-'+opcion+'').style.backgroundColor=("#cb3234");            
    deshabilitar_botones();
    document.getElementById('respuesta').style.color=("#cb3234");
    document.getElementById('respuesta').innerHTML="Respuesta Incorrecta";
    return;
    }   


}



