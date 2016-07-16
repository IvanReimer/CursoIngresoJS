function Mostrar()
{
	alert('iteración while');
var contador=0;
/*while(contador<=5)*/
while(true)
{
	contador=contador+1;
	if(contador==3)
	{
		continue;
	}
	alert("while"+contador)
	if(contador==6)
	{
		break;
	}
	alert("fin"+contador);
}

}//FIN DE LA FUNCIÓN