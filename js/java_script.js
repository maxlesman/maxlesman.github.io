function odnomer() {
var chislo = prompt('Введите число');
 var sumch=0
 var sumnech=0
  var a = Number(chislo);
  var massiv = [-1,5,6,4,1,-3,-5,3,-7];
document.write("Старый массив: "+massiv);
  for( var i = 0 ; i < massiv.length; i++){
  massiv[i] = massiv[i]+a;}
document.write("<br>Новый массив: "+massiv);
  for( var i =0 ; i < massiv.length; i++){
	if (massiv[i]%2==0)
	{sumch=sumch+massiv[i];}
	else
	{sumnech=sumnech+massiv[i];}
  }
document.write('<br>Сумма четных чисел: '+sumch);
document.write('<br>Сумма нечетных чисел: '+sumnech);
 }
function dvumer() {
var sumo=0;
var sump=0;
var sumsr=0;
var arr = [[0,0,0],[0,0,0],[0,0,0]];
for (var i=0;i<3;i++){
for(var j=0;j<3;j++){
arr[i][j]=prompt('Введите числа');

arr[i][j]=Number(arr[i][j]);
}
}
alert("Сейчас вы перейдете на страницу вычислений");
document.writeln('Числа, которые вы ввели: ');
for(i=0;i<3;i++) {document.write("<br>");
for(j=0;j<3;j++) {
	document.write(" "+arr[i][j]);
}
}


for(i=0;i<3;i++) {
for(j=0;j<3;j++) {
if (arr[i][j]<0){
sumo=sumo+arr[i][j];
}
else {sump=sump+arr[i][j];}
}
}
for(i=0;i<3;i++) {
for(j=0;j<3;j++) {
	sumsr=arr[i][j]+sumsr;
	
}
}
sumsr=sumsr/9;	
document.writeln("<br>Сумма положительных чисел равна: "+sump);
document.writeln("<br>Сумма отрицательных чисел равна: "+sumo);
document.writeln("<br>Среднее значение элементов матрицы: "+sumsr);
alert("Сумма положительных чисел равна: "+sump);
alert("Сумма отрицательных чисел равна: "+sumo);
alert("Среднее значение элементов матрицы: "+sumsr);
}






