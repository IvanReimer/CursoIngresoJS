function Mostrar()
{

	var contadorNegativo=0;
	var contadorPositivo=0;
	var contadorCeros=0;
	var contadorPares=0
	var cantidadPares;
	//declarar contadores y variables 
	var a;
	var numeroNegativo=0;
	var numeroPositivo=0;
	var cantidadNegativos;
	var cantidadPositivos;
	var cantidadCeros;
	var numerosPares;
	var promedioPositivos;
	var promedioNegativos;
	var respuesta="si";
while(respuesta!="no")
{	
	

	a=prompt("Ingrese numero","0");
	
	if(a<0)
	{
		contadorNegativo--
		numeroNegativo=numeroNegativo+parseInt(a);
		cantidadNegativos=contadorNegativo*(-1);
		promedioNegativos=(numeroNegativo/cantidadNegativos)*(-1);
	}
	else
	{
		if(a>0)
		{
			contadorPositivo++
			numeroPositivo=numeroPositivo+parseInt(a);
			cantidadPositivos=contadorPositivo;
			promedioPositivos=numeroPositivo/cantidadPositivos;
		}
		else
		{
			if(a==0)
			{
				contadorCeros++
				cantidadCeros=contadorCeros;
			}
			else
			{
				if(a%2==0)
				{
					contadorPares++
					cantidadPares=contadorPares;
				}
				else
				{
				}
			}
		}
	}
	respuesta=prompt("Desea seguir ingresando numeros?","si o no");
}
var diferencia=numeroPositivo+parseInt(numeroNegativo);
alert(numeroNegativo);
alert(numeroPositivo);
alert(cantidadNegativos);
alert(cantidadPositivos);
alert(cantidadCeros);
alert(promedioPositivos);
alert(promedioNegativos);
alert(diferencia);
alert(cantidadPares);

}//FIN DE LA FUNCIÓN