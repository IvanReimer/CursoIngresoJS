function Mostrar()
//pide q ingreses numeros y que muestres cual es el mas alto y mas bajo.
{
	var contador=0;
	// declarar variables
	var numeroMaximo;
	var numeroMinimo;
	var respuesta='si';
	var numero;
	while(respuesta!='no')
	{		
		numero=prompt("Ingrese numero");
			if(contador==0)
			{
				numeroMaximo=numero;
				numeroMinimo=numero;
				contador++;
			}//fin primer if
			else
			{
				if(numero>=numeroMaximo)
				{
					numeroMaximo=numero;
				}//fin segundo if
				else
				{
					if(numero<=numeroMinimo)
					{
						numeroMinimo=numero;
					}//fin tercer if					
				}//fin segundo else
			}//fin 1er else
		respuesta=prompt("Desea continuar?","no");
	}
document.getElementById('maximo').value=numeroMaximo;
document.getElementById('minimo').value=numeroMinimo;
// EJERCICIO DEL PARCIAL NUMERO 6!!!!!!!
/*var a=0, b, c=0, numMax, numMin;
while(a<5)
{
     a++;
     b=prompt("Ingrese importe de venta");
   while(b<=0)
   {
     alert("Numero no valido, ingrese de nuevo el importe");
     b=prompt("Ingrese importe de venta");
   }
   if(c==0)
     {
        numMax=b;
        numMin=b;
        c++;
     }
   else
     {
        if(b>=numMax)
         {
           numMax=b;
         }
        else
         {
           if(b<=numMin)
            {
              b=numMin;
            }
         }
     }
}

document.write("El importe maximo es: "+numMax+" y el importe minimo es: "+numMin);
*/
}//FIN DE LA FUNCIÓN