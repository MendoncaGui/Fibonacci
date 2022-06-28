var primeiroNum;
var segundoNum;
var resultado; 
var cont;
var compara;
var eValido = 0;

var pegaValor = parseInt(window.prompt("Digite um valor: "))

primeiroNum = 0;
segundoNum = 1;
resultado = 1;

for (cont = 1; cont <= 50; cont++){
  if(pegaValor == compara){
    eValido = 1;
  } 
  document.write(resultado + " - ");
  compara = resultado;
  resultado = primeiroNum + segundoNum;
  primeiroNum = segundoNum;
  segundoNum = resultado;
}

if(eValido == 1){
  document.write("</br> O número : " + pegaValor +" pertence à sequência de Fibonacci");
} else {
  document.write("</br> O número : " + pegaValor +" não pertence à sequência de Fibonacci");
}
