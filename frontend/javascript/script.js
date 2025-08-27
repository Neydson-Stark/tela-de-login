const formLogin = document.getElementById('form-login');
const usuarioInput = document.getElementById('usuario');
const senhaInput = document.getElementById('senha');
const mensagemDiv = document.getElementById('mensagem');

formLogin.addEventListener('submit', (e) => {
 e.preventDefault();
 const usuario = usuarioInput.value.trim();
 const senha = senhaInput.value.trim();

 if (usuario === '12345' && senha === '12345') {
 mensagemDiv.innerHTML = 'Login efetuado com sucesso!';
 mensagemDiv.style.color = 'green';
 } else {
 mensagemDiv.innerHTML = 'Usuário ou senha inválidos!';
 mensagemDiv.style.color = 'red';
 }
});