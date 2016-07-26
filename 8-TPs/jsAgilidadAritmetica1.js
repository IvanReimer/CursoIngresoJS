/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
function comenzar()
{
var primerNum=Math.floor((Math.random()*10)+1);
var segundoNum=Math.floor((Math.random()*10)+1);
var operacion=Math.floor((Math.random()*4)+1);
if(operacion==1)
{
	operacion=primerNum+segundoNum;
	respuesta="Suma";
}//FIN SENTENCIA IF
else if(operacion==2)
{
	operacion=primerNum-segundoNum;
	respuesta="Resta";
}
else if(operacion==3)
{
	operacion=primerNum/segundoNum;
	respuesta="División";
}
else
{
	operacion=primerNum*segundoNum;
	respuesta="Multiplicación";
}
document.getElementById('PrimerNumero').value=primerNum;
document.getElementById('SegundoNumero').value=segundoNum;
document.getElementById('Operador').value=operacion;
}//FIN DE LA FUNCIÓN
function Responder()
{
var Respuesta=document.getElementById('Respuesta').value;
if(respuesta!=Respuesta)
{
	alert("ERROR, INTENTE DE NUEVO");
}
else
{
	alert("¡GANO!");

}
return comenzar();


}//FIN DE LA FUNCIÓN
