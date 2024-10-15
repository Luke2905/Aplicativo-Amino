/* ------------------ Scripts Slide ------------------ */
var slideIndex = 1;
        showDivs(slideIndex);
        
        function plusDivs(n) {
          showDivs(slideIndex += n);
        }
        
        function showDivs(n) {
          var i;
          var x = document.getElementsByClassName("mySlides");
          if (n > x.length) {slideIndex = 1}
          if (n < 1) {slideIndex = x.length}
          for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
          }
          x[slideIndex-1].style.display = "block";  
        }
/* ------------------ Scripts Menu Lateral ------------------ */
        function openNav() {

            var main = document.getElementById("main");

            if ( main.clientWidth <= 750){  /*clientWidth pega o tamanho do width do documento "main" */
                document.getElementById("mySidenav").style.width = "250px";
                document.getElementById("main").style.marginLeft = "0px";
                document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
            }else{
                document.getElementById("mySidenav").style.width = "250px";
                document.getElementById("main").style.marginLeft = "250px";
                document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
            }

        }

        function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
            document.body.style.backgroundColor = "white";
        }
/* HTML:
 - O botão Abrir Formulário dispara o pop-up.
 - O modal (div com id meuModal) contém o formulário.
CSS:
 - A classe .modal define o estilo do pop-up (inicialmente oculto).
 - .modal-content estiliza a janela do formulário.
JavaScript:
 - Mostra o modal ao clicar no botão e esconde quando o botão de fechar (x) ou fora do modal é clicado. */

/*------------------- ... -------------------------------*/ 
// function selectSegmento(){

//     var prop_case = document.getElementById("prop-case");
//     var select = document.getElementById("segmento-atuacao");
//     var valor = select.value;

//         if(valor == "Case"){

            
//             prop_case.style.display = "block";
//         }
// }
/* ------------------ Funções Chat ------------------ */
function enviarMensagem(){

  var  texto = document.getElementById("messageInput");
  const mensagem = texto.value;

  if(mensagem === '') return; //-> Não envia mensagens vazias

  exibeMensagem(mensagem, 'enviada');

  // -> Simula a mensagen automatica

  if(mensagem === 'oi'){

    setTimeout(() => {
      exibeMensagem('Esta é uma resposta automática!', 'resposta'); 
    }, 1000);

  }


  //  alert(mensagem);

  // -> limpa o input do chat
  messageInput.value = '';

}

function exibeMensagem(text, type) {
  const messageElement = document.createElement('div'); // -> Cria um elemento (Div) para a mensagem
  messageElement.classList.add('mensagem', type); // -> lista as mensagens
  messageElement.innerHTML = `<p>${text}</p>`; // -> exibe a mensagem
  chatMessages.appendChild(messageElement);

  // Rola para o final da lista de mensagens
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
