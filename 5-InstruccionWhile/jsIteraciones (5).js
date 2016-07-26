function Mostrar()
{
var sexo;
while(sexo!='f'&&sexo!='m')
{
	sexo=prompt("ingrese f ó m .")	
}//FIN WHILE
document.getElementById('Sexo').value=sexo;
/*
// ESTE ES UN EJERCICIO DEL PARCIAL!!!
var personas=0,nota,sexo,sumaNota=0,promedioNota,notaMin=10,cantVarones=0;
while(personas<10)
{
  personas++;
  nota=prompt("Ingrese su nota","10");
      while(nota<0||nota>10)
           {
              nota=prompt("Ingrese su nota nuevamente","0-10");
           }
  sexo=prompt("Ingrese su sexo","f");
       while(sexo!="f"&&sexo!="m")
           {
              sexo=prompt("Ingrese su sexo nuevamente","f o m");
           }
           nota=parseInt(nota)
  sumaNota=sumaNota+nota;

         if(nota<=notaMin)
            {
              notaMin=nota;
            }
      
   if(sexo=="m")
      {
         if(nota>=6)
            {
               cantVarones++;
            }
      }
}
promedioNota=sumaNota/personas;
alert("El promedio de las notas es: "+promedioNota+" La nota mas baja es: "+notaMin+" La cantidad de varones con nota mayor igual a 6 es: "+cantVarones);
*/
}//FIN DE LA FUNCIÓN