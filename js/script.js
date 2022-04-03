const mensagem = document.querySelector("#mensagem");
const botao = document.querySelectorAll('#botao');
var aviso = false;

botao.forEach(function(botaoclick) {
    botaoclick.addEventListener('click', function () {

        if (mensagem.value != ""){
            let chatStyle = document.createElement("div");
            chatStyle.classList.add('atendimento-cliente');
            let chatBox = document.getElementById('chat-all')

            chatBox.appendChild(chatStyle).innerHTML = '<p class="cliente">Cliente diz:</p><p>'+ mensagem.value +'</p>';
            mensagem.value = "";

            if (aviso == false){
                let chatStyle2 = document.createElement("div");
                chatStyle2.classList.add('atendimento');
                let chatBox2 = document.getElementById('chat-all')
                chatBox2.appendChild(chatStyle2).innerHTML = '<p class="atendente">Atendente diz:</p><p>Olá, seja muito bem-vindo a central de atendimento, como posso ajudá-lo?</p>';
                aviso = true;
            }
        }
    });
});

