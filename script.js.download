document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário para fins de validação
    if (validateForm()) {
        alert('Pagamento confirmado com sucesso!');
        // Aqui você pode adicionar a lógica para processar o pagamento
    }
});

function validateForm() {
    let isValid = true;

    // Validação do número do cartão (deve ter exatamente 16 dígitos)
    const cardNumber = document.getElementById('card-number');
    const cardNumberRegex = /^\d{16}$/;
    if (!cardNumberRegex.test(cardNumber.value.replace(/\s+/g, ''))) {
        cardNumber.classList.add('invalid');
        cardNumber.classList.remove('valid');
        isValid = false;
    } else {
        cardNumber.classList.remove('invalid');
        cardNumber.classList.add('valid');
    }

    // Validação da data de expiração (formato MM/AA)
    const expiryDate = document.getElementById('expiry-date');
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiryDateRegex.test(expiryDate.value)) {
        expiryDate.classList.add('invalid');
        expiryDate.classList.remove('valid');
        isValid = false;
    } else {
        expiryDate.classList.remove('invalid');
        expiryDate.classList.add('valid');
    }

    // Validação do CVV (3 dígitos)
    const cvv = document.getElementById('cvv');
    const cvvRegex = /^\d{3}$/;
    if (!cvvRegex.test(cvv.value)) {
        cvv.classList.add('invalid');
        cvv.classList.remove('valid');
        isValid = false;
    } else {
        cvv.classList.remove('invalid');
        cvv.classList.add('valid');
    }

    return isValid;
}
