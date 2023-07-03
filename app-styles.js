// Crea el contenedor del chatbot
const chatbotContainer = document.createElement('div');
chatbotContainer.classList.add('p-4', 'bg-light', 'rounded', 'shadow-sm', 'max-width-600', 'mx-auto', 'my-4');

// Crea el contenedor de mensajes
const messagesContainer = document.createElement('div');
messagesContainer.classList.add('p-3', 'bg-white', 'rounded', 'shadow-sm', 'mb-3');

// Crea el formulario de entrada de usuario
const inputForm = document.createElement('form');
inputForm.classList.add('d-flex', 'align-items-center');

// Crea el campo de entrada de texto
const userInput = document.createElement('input');
userInput.type = 'text';
userInput.placeholder = 'Escribe algo...';
userInput.classList.add('form-control', 'rounded-start', 'flex-grow-1', 'border-0', 'me-1');

// Crea el botón de enviar
const sendButton = document.createElement('button');
sendButton.type = 'button';
sendButton.textContent = 'Enviar';
sendButton.classList.add('btn', 'btn-primary', 'rounded-end', 'shadow-sm', 'fw-bold', 'ms-1');

// Agrega los elementos al contenedor de chatbot
inputForm.appendChild(userInput);
inputForm.appendChild(sendButton);
chatbotContainer.appendChild(messagesContainer);
chatbotContainer.appendChild(inputForm);
document.getElementById('chatbot').appendChild(chatbotContainer);
