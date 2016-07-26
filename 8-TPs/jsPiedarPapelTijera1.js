/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var numeroRandom;
var eleccionMaquina;
var eleccionPersona;
function comenzar()
{
	numeroRandom=Math.floor((Math.random()*3)+1);
	//alert(numeroRandom);
	switch(numeroRandom)
	{
		case 1:
			eleccionMaquina="piedra";
			break;
		case 2:
			eleccionMaquina="papel";
			break;
		case 3:
			eleccionMaquina="tijera";
			break;
	}
	//alert(eleccionMaquina);
}//FIN DE LA FUNCIÓN
function piedra()
{
	eleccionPersona="piedra";
	if(eleccionMaquina=="piedra")
	{
		alert("Empate");
	}
	else
	{
		if(eleccionMaquina=="papel")
		{
			alert("Perdiste");
		}
		else
		{
			alert("Ganaste");
		}
	}
	return comenzar();
}//FIN DE LA FUNCIÓN
function papel()
{
	eleccionPersona="papel";
if(eleccionMaquina=="papel")
	{
		alert("Empate");
	}
	else
	{
		if(eleccionMaquina=="tijera")
		{
			alert("Perdiste");
		}
		else
		{
			alert("Ganaste");
		}
	}

	return comenzar();
}//FIN DE LA FUNCIÓN
function tijera()
{
	eleccionPersona="tijera";
	if(eleccionMaquina=="piedra")
	{
		alert("Perdiste");
	}
	else
	{
		if(eleccionMaquina=="papel")
		{
			alert("Ganaste");
		}
		else
		{
			alert("Empate");
		}
	}
	return comenzar();
}//FIN DE LA FUNCIÓN