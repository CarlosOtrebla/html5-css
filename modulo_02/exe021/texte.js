// Cria uma matriz para armazenar os números gerados
let numbers = [];

// Usa um loop para gerar 6 números aleatórios
for (let i = 0; i < 6; i++) {
  // Gera um número aleatório entre 1 e 60
  let randomNumber = Math.floor(Math.random() * 60) + 1;

  // Verifica se o número já foi gerado anteriormente
  if (numbers.includes(randomNumber)) {
    // Se sim, volta ao início do loop e gera um novo número
    i--;
    continue;
  }

  // Se não, adiciona o número à matriz de números gerados
  numbers.push(randomNumber);
}

// Exibe a matriz de números gerados
console.log(numbers);
