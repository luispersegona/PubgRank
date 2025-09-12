async function publishEmbed() {
  const channelId = document.getElementById('channelId').value;
  const embedTitle = document.getElementById('embedTitle').value;
  const embedDescription = document.getElementById('embedDescription').value;
  const embedColor = document.getElementById('embedColor').value;
  const statusMessage = document.getElementById('status-message');

  const embedData = {
    title: embedTitle,
    description: embedDescription,
    color: parseInt(embedColor.replace('#', ''), 16), // Converte a cor para decimal
  };

  if (!channelId || !embedTitle || !embedDescription) {
    statusMessage.textContent = 'Por favor, preencha todos os campos.';
    statusMessage.style.color = '#ef4444'; // Cor vermelha para erro
    return;
  }

  try {
    // Substitua esta URL pelo endpoint real da sua API no bot
    const response = await fetch('http://localhost:5000/api/publish', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ channelId, embedData }),
    });

    const data = await response.json();

    if (response.ok) {
      statusMessage.textContent = data.message;
      statusMessage.style.color = '#22c55e'; // Cor verde para sucesso
    } else {
      statusMessage.textContent = data.message;
      statusMessage.style.color = '#ef4444'; // Cor vermelha para erro
    }
  } catch (error) {
    statusMessage.textContent = 'Erro ao enviar dados para a API.';
    statusMessage.style.color = '#ef4444';
  }
}
