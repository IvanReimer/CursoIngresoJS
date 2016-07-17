function Mostrar()
{
var sexo;
while(sexo!='f'&&sexo!='m')
{
	sexo=prompt("ingrese f ó m .")	
}//FIN WHILE
document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN