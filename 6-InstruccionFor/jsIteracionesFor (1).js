function Mostrar()
{
/*var i;
for(i=1;i<=10;i++)
{
	alert(i);
}*/
var contador;
var numAzar;
var contador1=0;
var contador2=0;
var contador3=0;
var contador4=0;
var contador5=0;
var contador6=0;
var contador7=0;
var contador8=0;
var contador9=0;
var contador10=0;
var limite=100000;
for (contador=0;contador<limite;contador++) 
{
	
	//console.log(contador);
	numAzar=Math.floor((Math.random()*10)+1);
	while(numAzar==5&&contador5>(0.05*limite))
	{
		numAzar=Math.floor((Math.random()*10)+1);
	}
	switch(numAzar)
	{
		case 1:
		contador1++;
		break;
		case 2:
		contador2++;
		break;
		case 3:
		contador3++;
		break;
		case 4:
		contador4++;
		break;
		case 5:
		contador5++;
		break;
		case 6:
		contador6++;
		break;
		case 7:
		contador7++;
		break;
		case 8:
		contador8++;
		break;
		case 9:
		contador9++;
		break;
		case 10:
		contador10++;
		break;
	}//FIN BREAK
}//fin for.
console.log("numero1: "+Math.floor(contador1/limite*100)+" %");
console.log("numero2: "+Math.floor(contador2/limite*100)+" %");
console.log("numero3: "+Math.floor(contador3/limite*100)+" %");
console.log("numero4: "+Math.floor(contador4/limite*100)+" %");
console.log("numero5: "+Math.floor(contador5/limite*100)+" %");
console.log("numero6: "+Math.floor(contador6/limite*100)+" %");
console.log("numero7: "+Math.floor(contador7/limite*100)+" %");
console.log("numero8: "+Math.floor(contador8/limite*100)+" %");
console.log("numero10: "+Math.floor(contador10/limite*100)+" %");
}//fin function mostrar()