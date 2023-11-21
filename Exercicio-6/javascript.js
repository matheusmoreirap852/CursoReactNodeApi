function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}
  
  // Função para determinar a faixa com base no IMC
  function determinarFaixa(imc) {
    if (imc < 18.5) {
      return "Abaixo do peso";
    } else if (imc < 25) {
      return "Peso normal";
    } else if (imc < 30) {
      return "Sobrepeso";
    } else if (imc < 35) {
      return "Obesidade grau 1";
    } else if (imc < 40) {
      return "Obesidade grau 2";
    } else {
      return "Obesidade grau 3";
    }
  }
  
  function calcularEExibirIMC() {
    const peso = parseFloat(prompt("Digite o peso em kg:"));
    const altura = parseFloat(prompt("Digite a altura em metros:"));
  
    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
      console.log("Por favor, insira valores válidos para peso e altura.");
    } else {
      const imc = calcularIMC(peso, altura);
      const faixa = determinarFaixa(imc);
      console.log(`Seu IMC é ${imc.toFixed(2)} e você está na faixa: ${faixa}`);
    }
  }
  

  calcularEExibirIMC();