document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    // Obter os valores dos campos
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const age = document.getElementById('age').value.trim();
    const gender = document.getElementById('gender').value;

    // Validar os campos
    let isValid = true;
    let message = '';

    if (name === '') {
        message += 'Nome é obrigatório. ';
        isValid = false;
    }

    if (!validateEmail(email)) {
        message += 'E-mail inválido. ';
        isValid = false;
    }

    if (!validatePhone(phone)) {
        message += 'Telefone inválido. ';
        isValid = false;
    }

    if (address === '') {
        message += 'Endereço é obrigatório. ';
        isValid = false;
    }

    if (age === '' || age < 0) {
        message += 'Idade deve ser um número positivo. ';
        isValid = false;
    }

    if (gender === '') {
        message += 'Gênero é obrigatório. ';
        isValid = false;
    }

    if (isValid) {
        showMessage('Formulário enviado com sucesso!', 'success');
        // Aqui você pode adicionar a lógica para enviar os dados do formulário para o servidor
    } else {
        showMessage(message, 'error');
    }
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
    return phoneRegex.test(phone);
}

function showMessage(message, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.style.color = type === 'error' ? 'red' : 'green';
}