//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostar()
{
	var sexo;
	var nota;
	var nombre;
	var edad;
	var sumaNotas=0;
	var promedioNotas;
	var edadMinima;
	var notaMaxima;
	var contadorEdad=0;
	var contadorNota=0;
	var respuesta="no";
	var sumaEdad=0;
	var contadorHombresMayores=0;
	var contadorMujeresMayoresConNotaMayorA5=0;
	var edadHombres=0;
	var edadMujeres=0;
	var contadorEntrada=0;
	var hola;
	while(respuesta!="no"&&contadorEntrada<15)
	{
		contadorEntrada=contadorEntrada+1;
		sexo=prompt("Ingrese genero.","m");
		while(sexo!="f"&&sexo!="m")
		{
			sexo=prompt("ERROR, se le pidio que ingrese genero","f");
		}
		nota=prompt("Ingrese un numero que sea su nota (entre 0 y 10).","5");
		nota=parseInt(nota);
		while(isNaN(nota)&&nota>10||nota<0)
		{
			nota=prompt("ERROR, se le pidio un numero del 0 al 10 que sea su nota","10");
			nota=parseInt(nota);
		}
		sumaNotas=sumaNotas+nota;
		edad=prompt("Ingrese el numero de su edad","25");
		edad=parseInt(edad);
		while(isNaN(edad)&&edad<9||edad>90)
		{
			edad=prompt("ERROR, se le pidio el numero de su edad","90");
			edad=parseInt(edad);
		}
		sumaEdad=sumaEdad+edad;
		nombre=prompt("Ingrese su nombre y apellido","Ruben Garcia");
		if(sexo=="m"&&edad>=18)
		{
			contadorHombresMayores=contadorHombresMayores+nota;
		}
		if(sexo=="f"&&edad>=18&&nota>5)
		{
			contadorMujeresMayoresConNotaMayorA5=contadorMujeresMayoresConNotaMayorA5+nota;
		}
		if(sexo=="m")
		{
			edadHombres=edadHombres+edad;
		}
		else
		{
			edadMujeres=edadMujeres+edad;
		}
	respuesta=prompt("desea seguir?","no");
	}//FIN WHILE 1
	promedioNotas=sumaNotas/contadorEntrada;
	alert(" a "+contadorEntrada+" b "+contadorHombresMayores+" c "+contadorMujeresMayoresConNotaMayorA5+" d "+promedioNotas+" e "+edadHombres+" ea "+edadMujeres+" ");
}//FIN FUNCION

