function Mostrar()
{
	var b=parseInt(prompt("Ingresa un numero","2"));
	var contador;
	var divisores;
	var numeros;
	var primo="";
	for(contador=0;b>=contador;contador++)
	{
		if(contador!=1&&contador!=b&&b%contador==0)
		{
			primo=primo+"  "+contador;
		}
	}
		if(primo=="")
		{
			alert(b+" es numero primo.");
		}
		else
		{
			alert(b+" no es numero primo y se divide por: "+primo+". Ademas del 1 y del "+b+".");
		}
}//FIN DE LA FUNCIÓN