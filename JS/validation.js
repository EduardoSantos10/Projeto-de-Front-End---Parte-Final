document.addEventListener('submit', function(e){
    if(e.target.id === 'cadastroForm'){
        e.preventDefault(); // Impede o envio padrao
        const email = document.getElementById('email').value;

        if (!email.includes('@')){
            // Ação obrigatório: Aviso ao usuário no DOM
            alert('E-mail inválido!');
            
        } else{
            e.target.submit(0); // Envia o formulário se estiver OK
        }
    }
});

const displayError = (input, message) => {
    const errorElement = document.getElementById(`${input.id}-error`);
    if(errorElement){
        errorElement.textContent = message;
        input.classList.add('error-input');
    }
};

const clearError = (input) => {
    const errorElement = document.getElementById(`${input.id}-error`);
    if (errorElement){
        errorElement.textContent = '';
        input.classList.remove('error-input');
    }
};

const validateForm = (e) => {
    e.preventDefault();

    const form = e.target;
    let isValid = true;

    const nomeInput = document.getElementById('nome');
    if(nomeInput && nomeInput.value.lenght < 3){
        displayError(nomeInput, 'O nome deve ter pelo menos 3 caracteres,');
        isValid = false;
    }else if (nomeInput){
        clearError(emailInput)
    }

    const emailInput = document.getElementById('email');
    if(email && !emailInput.value.includes('@') || !emailInput.value.includes('.')){
        displayError(emailInput, 'Por favor, insira um e-mail válido.');
        isValid = false;
    }else if (emailInput){
        clearError(emailInput);
    }

    const cidadeInput = document.getElementById('cidade');
    if (cidadeInput && cidadeInput.value.trim() === ''){
        displayError(cidadeInput, 'O campo Cidade é obrigatório.');
        isValid = false;
    }else if (cidadeInput){
        clearError(cidadeInput);
    }

    if (isValid){
        alert('Cadastro efetuado com sucesso!');
    }
};

export const setupValidation = () => {
    const form = document.getElementById('cadastroForm');
    if (form){
        form.addEventListener('submit', validateForm);
    }
};