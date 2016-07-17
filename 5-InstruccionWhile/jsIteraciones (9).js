function Mostrar()
{

	var contador=0;
	// declarar variables
	var numeroMaximo;
	var numeroMinimo;
	var respuesta='si';
	var numero;
	while(respuesta!='no')
	{
		contador++
		numero=prompt("Ingrese numero");
			if(numero>=contador)
			{
				numeroMaximo==numero;
			}//fin primer if
			else
			{
				if(numero<contador)
				{
					numeroMinimo==numero;
				}//fin segundo if
				else
				{
				}//fin segundo else
			}//fin 1er else
		respuesta=prompt("Desea continuar?","no");
	}
document.getElementById('maximo').value=numeroMaximo;
document.getElementById('minimo').value=numeroMinimo;
}//FIN DE LA FUNCIÓN