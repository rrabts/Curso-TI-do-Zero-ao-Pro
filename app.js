// Seleciona o formulário e o parágrafo de resposta
const form = document.getElementById('form-contato');
const resposta = document.getElementById('resposta');

// Adiciona o evento de envio
form.addEventListener('submit', async (e) => {
  e.preventDefault(); // Evita o recarregamento da página

  // Coleta os dados do formulário
  const dados = {
    nome: form.nome.value,
    email: form.email.value,
    mensagem: form.mensagem.value
  };

  try {
    // Envia os dados usando Fetch API com método POST
    const response = await fetch('https://exemplo.com/api/contato', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dados)
    });

    // Resposta 
    if (response.ok || response.status === 0) {
      resposta.textContent = 'Mensagem enviada com sucesso!';
      resposta.style.color = 'green';
      form.reset();
    } else {
      throw new Error('Erro ao enviar os dados');
    }

  } catch (erro) {
    resposta.textContent = 'Ocorreu um erro ao enviar sua mensagem.';
    resposta.style.color = 'red';
    console.error('Erro:', erro);
  }
});