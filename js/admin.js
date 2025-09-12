async function publishEmbed() {
  const channelId = document.getElementById('channelId').value;
  const embedTitle = document.getElementById('embedTitle').value;
  const embedDescription = document.getElementById('embedDescription').value;
  const embedColor = document.getElementById('embedColor').value;
  const statusMessage = document.getElementById('status-message');

  const embedData = {
    title: embedTitle,
    description: embedDescription,
    color: parseInt(embedColor.replace('#', ''), 16),
  };

  try {
    // Altere esta URL para o seu domínio público na Square Cloud
    const response = await fetch('https://painel-pubgrank.squareweb.app/api/publish', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ channelId, embedData }),
    });

    const data = await response.json();

    if (response.ok) {
      statusMessage.textContent = data.message;
      statusMessage.style.color = '#22c55e';
    } else {
      statusMessage.textContent = data.message;
      statusMessage.style.color = '#ef4444';
    }
  } catch (error) {
    statusMessage.textContent = 'Erro ao enviar dados para a API.';
    statusMessage.style.color = '#ef4444';
  }
}
