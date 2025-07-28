  
alert("Welcom My CHATBOT")

  document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    
    function addMessage(content, isUser) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
        
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        messageContent.textContent = content;
        
        messageDiv.appendChild(messageContent);
        chatMessages.appendChild(messageDiv);
        
       
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }


    function getBotResponse(input) {
        const lowerInput = input.toLowerCase();
        
      
        if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
            return "Hello! How can I help you today? ";
        }
         if (lowerInput.includes('tell me about js') || lowerInput.includes('js')) {
            return "JavaScript is a programming language primarily used to create interactive and dynamic content on websites — things like animations, form validation, dropdown menus, and more. 👨🏻";
        }
        
     
        if (lowerInput.includes('your name') || lowerInput.includes('who are you')) {
            return "I'm a simple chatbot created to assist you! 👨🏻‍💻";
        }
        
       
        if (lowerInput.includes('help')) {
            return "I can answer basic questions. Try asking about the weather, time, or just say hello! ☺️";
        }
        
       
        if (lowerInput.includes('time')) {
            return `The current time is ${new Date().toLocaleTimeString()}`;
        }
        
        
        if (lowerInput.includes('weather')) {
            return "I don't have real-time weather data, but you can check your local weather app! ☔️";
        }

         if (lowerInput.includes('thank you')) {
            return "You're very welcome! 😊 If there's anything else you need, just let me know";
        }
        
      
        return "I'm still learning. Could you rephrase that?";
    }

    
    function handleSend() {
        const message = userInput.value.trim();
        if (message === '') return;
        
       
        addMessage(message, true);
        userInput.value = '';
        
       
        setTimeout(() => {
            const botResponse = getBotResponse(message);
            addMessage(botResponse, false);
        }, 1000);
    }

 
    sendButton.addEventListener('click', handleSend);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSend();
    });
});