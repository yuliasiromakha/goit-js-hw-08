import throttle from "lodash.throttle";

const localStorageKey = "feedback-form-state";


const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');


form.addEventListener('submit', function(event) {
  event.preventDefault();
  const email = form.elements.email.value;
  const message = form.elements.message.value;
 
  // console.log(`email: ${email}, message: ${message}`)
});


const handleInput = throttle(() => {
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  const information = {
    email,
    message,
  };

  localStorage.setItem(localStorageKey, JSON.stringify(information));
}, 500);


emailInput.addEventListener('input', handleInput);
messageInput.addEventListener('input', handleInput);

const storedFormState = localStorage.getItem(localStorageKey);

if (storedFormState) {

    const { email, message } = JSON.parse(storedFormState);

    emailInput.value = email;
    messageInput.value = message;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const email = form.elements.email.value;
    const message = form.elements.message.value;
  
    console.log({ email, message });
  
    localStorage.removeItem(localStorageKey);
  
    emailInput.value = '';
    messageInput.value = '';
  });
  
