function Mostrar()
{
var a=parseInt(prompt("Ingresa un numero","2"))
;
var contador;
var divisores=0;
var numeros="";
var primo="";
for(contador=0;a>=contador;contador++)
{
	if(a%contador==0)
	{
		divisores++;
		numeros=numeros+" "+contador;
	}
	if(contador!=1&&contador!=a&&a%contador==0)
	{
		primo=primo+" "+contador;
	}
}
alert("La cantidad de numeros divisores del que ingresaste es: "+divisores+" y son: "+numeros+".");
alert(primo);
}//FIN DE LA FUNCIÓN