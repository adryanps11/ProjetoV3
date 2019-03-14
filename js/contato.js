function enviarContato() {
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;                    
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var tipo = document.getElementById("tipo").value;
    var mensagem = document.getElementById("mensagem").value;


    if(nome.length < 6 || nome.length > 30){
            alert('Tamanho do nome invalido');
    }else{
            alert('Relatório do Usuário: ' + '\n' + "Nome: " + nome  + '\n' + "Sobrenome: " + sobrenome +'\n'+ "E-mail: " + email
            +'\n' + "Telefone: " + telefone +'\n' + "Tipo: " + tipo +'\n' + "Descrição: " + mensagem);
        }
        } 
    