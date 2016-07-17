function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;	
	var respuesta='si';
	var numero;
while(respuesta!='no')
{
	contador++
	numero=prompt("Ingrese numero","0");
	if(numero>=0)
	{
		positivo=positivo+parseInt(numero);
	}
	else
	{
		negativo=negativo*numero;
	}
	respuesta=prompt("desea continuar?","si o no");

}//fin while

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN