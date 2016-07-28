/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
var edad=prompt("Ingrese edad","De 18 a 90");
while(isNaN(edad)||edad<18||edad>90)
{
	edad=prompt("Error, ingrese edad de 18 a 90 años","90");
}// FIN WHILE PARA EDAD
document.getElementById('Edad').value=edad;
var sexo=prompt("Ingrese sexo","f o m");
while(sexo!="f"&&sexo!="m")
{
	sexo=prompt("Error. Ingrese sexo","f o m");
}// FIN WHILE PARA SEXO
document.getElementById('Sexo').value=sexo;
var estadoCivil=prompt("Ingrese estado civil","1-solero, 2-casado, 3-soltero, 4-viudos");
while(isNaN(estadoCivil)||estadoCivil<1||estadoCivil>4)
{
	estadoCivil=prompt("Error. Ingrese estado civil","1-solero, 2-casado, 3-soltero, 4-viudos");
}
estadoCivil=parseInt(estadoCivil);
switch(estadoCivil)
{
	case 1:
	estadoCivil="Soltero";
	break;
	case 2:
	estadoCivil="Casado";
	break;
	case 3:
	estadoCivil="Divorciado";
	break;
	case 4:
	estadoCivil="Viudo";
	break;
	default:
	estadoCivil="ERROR";
	break;
}//FIN SWITCH ESTADO CIVIL
document.getElementById('EstadoCivil').value=estadoCivil;
var sueldoBruto=prompt("Ingrese su sueldo bruto","8000 en adelante");
while(isNaN(sueldoBruto)||sueldoBruto<8000)
{
	sueldoBruto=prompt("Error. Ingrese su sueldo bruto","8000 en adelante");
}
document.getElementById('Sueldo').value=sueldoBruto;
var legajo=prompt("Ingrese su legajo","1234");
while(isNaN(legajo)||legajo>9999||legajo<1000)
{
	legajo=prompt("Ingrese su legajo","1234");
}
document.getElementById('Legajo').value=legajo;
var nacionalidad=prompt("Ingrese su nacionalidad","A si es Argentino. E si es extranjero. N si es nacionalizado.");
switch(nacionalidad)
{
	case "A":
	"Argentino";
	break;
	case "E":
	"Extranjero";
	break;
	case "N":
	"Nacionalizado";
	break;
}//FIN SWITCH PARA NACIONALIDAD.
while(nacionalidad!="E"&&nacionalidad!="N"&&nacionalidad!="A")
{
	nacionalidad=prompt("Ingrese su nacionalidad","A si es Argentino. E si es extranjero. N si es nacionalizado.");
}
document.getElementById('Nacionalidad').value=nacionalidad;
}//FIN function ComenzarIngreso () 

