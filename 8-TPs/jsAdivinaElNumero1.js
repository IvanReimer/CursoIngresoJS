/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto="NO";
var contadorIntentos=0;
var numeroIngresado;
function comenzar()
{//Genero el número RANDOM entre 1 y 100	 
	numeroSecreto=Math.floor((Math.random()*100)+1);
	//alert(numeroSecreto);
	alert("Numero secreto generado, comiense a adivinarlo");
}//FIN function comenzar()
function verificar()
{	
	numeroIngresado=document.getElementById('numero').value;
	//alert(numIngresado);
	
	if(numeroSecreto=="NO")
	{
		alert("Debe apretar el boton comenzar primero");
	}
	else if(numeroIngresado==numeroSecreto)
	{
		contadorIntentos++;
		alert("usted es el ganador y en "+contadorIntentos+" intentos.");
		document.getElementById('numero').value="";
		document.getElementById('intentos').value="";
		return comenzar();
	}
	else
	{
		if(numeroSecreto>numeroIngresado)
		{
			contadorIntentos++;
			alert("Te falta para llegar al número secreto");
		}
		else
		{
			contadorIntentos++;
			alert("Te pasaste del número secreto");
		}
	}
	document.getElementById('intentos').value=contadorIntentos;
}// FIN function verificar()