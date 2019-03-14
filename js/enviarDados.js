//Função criada para efetuar o login do cliente.
function enviarDados() {
    var login = 'adryan';
    var senha = "123";
    var tentativas = 1;
    var logindigitado = document.getElementById("login").value;
    var senhadigitado = document.getElementById("senha").value;
    
    while (tentativas == 1) {
        if (login == logindigitado && senha == senhadigitado) {
            alert("Olá Seja bem vindo " + logindigitado);
            break;
        }
        else {
            alert('Login inválido. Tente Novamente');
            tentativas++;
        }
    }
}
