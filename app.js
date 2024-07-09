

  
let form = document.getElementById('loginForm');
 
if (form) {}
form.addEventListener('submit', function(event) {
  event.preventDefault()
  
  if (form)
  console.log('Formulário Encontrado');

  
function validateEmail(email) {}
const emailRegex    = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
let valid = true;
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$/


const email    = document.getElementById('email').value;
const password = document.getElementById('password').value;
const button   = document.getElementById('button');


console.log('Email:', email);
console.log('Password:', password);

if (email === '') {
  alert('O campo de e-mail é obrigatório.');  
  return; 
}

if (password === '') {
  alert('O campo de senha é obrigatório.');  
  return;   
}

if (password.length < 6) {
  alert('A senha deve ter pelo menos 6 caracteres.');
  return;
}
if (password.length > 14) {
  alert('A senha deve ter no máximo 14 caracteres.');
  return;
  
}

else if (email !== '' && password !== '' && password.length >= 6 && password.length <= 14) {
  alert('Sucesso!');
  window.location.href = 'https://lrick-dev.github.io/Gerador-de-Senhas-JS/';

}

});

function loginButton() {
  
}



 












