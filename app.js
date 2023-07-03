// Obtener los elementos de la página HTML
const chatbot = document.getElementById('chatbot');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Función para agregar un mensaje al chatbot
function addMessage(message, sender) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.classList.add(sender);
  messageElement.innerText = message;
  chatbot.appendChild(messageElement);
}

// Función para procesar la entrada del usuario
function processUserInput() {
    const input = userInput.value.trim();
    if (input !== '') {
      addMessage(input, 'user');
      const botResponse = getBotResponse(input);
      addMessage(botResponse, 'bot');
      userInput.value = '';
    }
  }
  

// Agregar un evento al botón de enviar
sendButton.addEventListener('click', processUserInput);

// Agregar un evento al presionar la tecla Enter en el área de entrada de texto
userInput.addEventListener('keyup', function(event) {
    if (event.key === "Enter") {
      processUserInput();
    }
  });
  

function getBotResponse(input) {
    switch (input.toLowerCase()) {
      case 'hola':
        return 'Hola, ¿cómo estás?';
      case 'bien':
        return 'Me alegra escuchar eso';
      case 'adios':
        return '¡Adiós! ¡Que tengas un buen día!';
      default:
        return 'Lo siento, no te he entendido. ¿Podrías repetirlo?';
    }
  }
  