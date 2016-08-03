function Mostrar()
{

var b=prompt('Ingresa numero');
p=parseInt(b);
var cantPares=0;
var numPar="";
var contador;
for(contador=0;contador<=b;contador++)
{
	if(contador%2==0)
	{
		cantPares++;
		numPar=numPar+contador+" , ";
	}
}
alert(cantPares+"Y los numeros son: "+numPar);




}//FIN DE LA FUNCIÓN