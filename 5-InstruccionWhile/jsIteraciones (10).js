function Mostrar()
{

	var contadorNegativos=0;
	var contadorPositivos=0;
	var contadorCeros=0;
	var contadorPares=0;
	//declarar contadores y variables 
	var a;
	var sumaNegativos=0;
	var sumaPositivos=0;
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
	if(a<0)
	{
		contadorNegativos++
		sumaNegativos=sumaNegativos+parseInt(a);
	}
		else
		{
			if(a>0)
			{
				contadorPositivos++
				sumaPositivos=sumaPositivos+parseInt(a);

			}
			else
			{
				if(a==0)
				{
					contadorCeros++
				}
			}
		}
	respuesta=prompt("Desea seguir ingresando numeros?","si o no");
}
var diferencia=sumaPositivos+parseInt(sumaNegativos);
promedioNegativos=(sumaNegativos/contadorNegativos)*(-1);
promedioPositivos=sumaPositivos/contadorPositivos;
document.write("1)- Suma de negativos: "+sumaNegativos+" 2)- Suma de positivos: "+sumaPositivos+" 3)- Cantidad de positivos: "+contadorPositivos+" 4)- Cantidad de negativos: "+contadorNegativos+" 5)- Cantidad de ceros: "+contadorCeros+" 6)- Cantidad de numeros pares: "+contadorPares+" 7)- Promedio de los positivos: "+promedioPositivos+" 8)- Promedio de los negativos: "+promedioNegativos+" 9)- Diferencia entre positivos y negativos: "+diferencia);
}//FIN DE LA FUNCIÓN