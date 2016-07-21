/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto;
var contadorIntentos=0;
var numeroIngresado;
var numIngresado;
function comenzar()
{//Genero el número RANDOM entre 1 y 100	 
	numeroSecreto=Math.floor((Math.random()*100)+1);
	//alert(numeroSecreto);
	contadorIntentos=0;
	document.getElementById('intentos').value=contadorIntentos;
}//FIN function comenzar()
function verificar()
{	
	numeroIngresado=document.getElementById('numero').value;
	numIngresado=parseInt(numeroIngresado);
	//alert(numIngresado);
	contadorIntentos++
	if(numIngresado==numeroSecreto)
	{
		alert("usted es el ganador y en "+contadorIntentos+" intentos.");
	}
	else
	{
		if(numeroSecreto>numIngresado)
		{
			alert("El numero que ingreso es menor que el numero secreto.");
		}
		else
		{
			alert("El numero ingresado es mayor que el numero secreto.");
		}
	}
	document.getElementById('intentos').value=contadorIntentos;
}// FIN function verificar()