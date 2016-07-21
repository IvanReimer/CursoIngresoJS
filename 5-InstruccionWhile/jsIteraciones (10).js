function Mostrar()
{

	var contadorNegativos=0;
	var contadorPositivos=0;
	var contadorCeros=0;
	var contadorPares=0
	//declarar contadores y variables 
	var a;
	var numeroNegativo=0;
	var numeroPositivo=0;
	var promedioPositivos;
	var promedioNegativos;
	var respuesta="si";
while(respuesta!="no")
{	
	a=prompt("Ingrese numero","0");
	
	if(a%2==0)
	{
		contadorPares++
	}
	else
	{
		if(a<0)
		{
			contadorNegativos++
			numeroNegativo=numeroNegativo+parseInt(a);		
			promedioNegativos=(numeroNegativo/contadorNegativos)*(-1);
		}
		else
		{
			if(a>0)
			{
				contadorPositivos++
				numeroPositivo=numeroPositivo+parseInt(a);
				promedioPositivos=numeroPositivo/contadorPositivos;
			}
			else
			{
				if(a==0)
				{
					contadorCeros++
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
alert(contadorNegativos);
alert(contadorPositivos);
alert(contadorCeros);
alert(promedioPositivos);
alert(promedioNegativos);
alert(diferencia);
alert(contadorPares);

}//FIN DE LA FUNCIÓN