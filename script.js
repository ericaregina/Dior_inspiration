// Função para buscar produtos
const produtos = [
  { nome: 'Miss Dior Parfum', categoria: 'Fragrancia' },
  { nome: 'Dior Forever 24hr Matte', categoria: 'Maquiagem' },
  { nome: 'Dior Prestige Anti-aging', categoria: 'Tratamento' },
 
];

// Envio do formulário de pagamento
document.getElementById('payment-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Impede o envio padrão do formulário

 
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const cardNumber = document.getElementById('card-number').value;
  const expiryDate = document.getElementById('expiry-date').value;
  const cvv = document.getElementById('cvv').value;


  if (!name || !email || !phone || !cardNumber || !expiryDate || !cvv) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  alert('Pagamento confirmado com sucesso!');
  console.log({ name, email, phone, cardNumber, expiryDate, cvv });

  
  window.location.href = 'confirmacao.html';
});

// Função de busca de produtos
function buscarProduto() {
  const termoBusca = document.getElementById('search').value.toLowerCase();
  const divResultados = document.getElementById('resultados');
  divResultados.innerHTML = ''; 

  // Chama a API para buscar produtos
  fetch(`http://localhost:3001/buscar-produto?query=${termoBusca}`)
    .then(response => response.json())
    .then(resultados => {
      if (resultados.length > 0) {
        resultados.forEach(produto => {
          const produtoDiv = document.createElement('div');
          produtoDiv.textContent = produto.nome;
          divResultados.appendChild(produtoDiv);
        });
      } else {
        divResultados.textContent = 'Nenhum produto encontrado';
      }
    })
    .catch(error => {
      console.error('Erro ao buscar produtos:', error);
      divResultados.textContent = 'Erro ao buscar produtos';
    });
}

// Envio do formulário de mensagem
const form = document.getElementById('messageForm');
const confirmationMessage = document.getElementById('confirmationMessage');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Impede o envio real do formulário

  // Exibe a mensagem de confirmação
  confirmationMessage.style.display = 'block';

  // Opcional: Limpa o campo de entrada após o envio
  document.getElementById('userMessage').value = '';
});
