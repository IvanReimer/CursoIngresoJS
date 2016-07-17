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
		numero=prompt("Ingrese numero");
			if(contador==0)
			{
				numeroMaximo=numero;
				numeroMinimo=numero;
				contador++;
			}
			else
			{
				if(numero>=numeroMaximo)
				{
					numeroMaximo=numero;
				}//fin primer if
				else
				{
					if(numero<=numeroMinimo)
					{
						numeroMinimo=numero;
					}
					else
					{
					}
				}//fin 1er else
			}
		respuesta=prompt("Desea continuar?","no");
	}
document.getElementById('maximo').value=numeroMaximo;
document.getElementById('minimo').value=numeroMinimo;
}//FIN DE LA FUNCIÓN