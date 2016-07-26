/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function ComenzarIngreso () 
{
var numero=document.getElementById('numero').value;
while(numero<0)
{
	alert("Se le pidio que sea positivo ( mayor o igual a 0 ).");
}//FIN PRIMER WHILE
numero=parseInt(numero);
var numPares=0;
var numImpares=0;
var contador=0;
while(numPares<numero)
{
	if(numPares%2==0)
	{		
		numPares++;
	}
	else
	{
		numImpares++;
	}
	
	contador++;
}//FIN SEGUNDO WHILE.
alert("La cantidad de números pares es: "+numPares+" La cantidad de números impares es: "+numImpares+" La cantidad de ")
}//FIN FUNCION INGRESO.
