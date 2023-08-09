function sendMessage() {
    const userInput = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    const userMessage = userInput.value.trim();
    if (userMessage === "") return;

    const userMessageElement = document.createElement("div");
    userMessageElement.className = "chat-message user";
    userMessageElement.innerHTML = `<p>You: ${userMessage}</p>`;
    chatBox.appendChild(userMessageElement);

    userInput.value = "";

    // Send user message to the server and get the bot's response
    const botMessage = "This is a sample bot response."; // Replace with actual API call
    const botMessageElement = document.createElement("div");
    botMessageElement.className = "chat-message bot";
    botMessageElement.innerHTML = `<p>Chatbot: ${botMessage}</p>`;
    chatBox.appendChild(botMessageElement);

    // Scroll chat box to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}
