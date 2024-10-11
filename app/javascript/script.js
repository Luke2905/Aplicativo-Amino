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
/* -------------------- Pop up form --------------------------- */
   // Obter elementos
   var modal = document.getElementById("meuModal");
   var btn = document.getElementById("abrirModal");
   var span = document.getElementsByClassName("close")[0];

   // Quando o botão for clicado, abrir o modal
   btn.onclick = function() {
       modal.style.display = "block";
   }

   // Quando o botão de fechar (x) for clicado, fechar o modal
   span.onclick = function() {
       modal.style.display = "none";
   }

   // Fechar o modal ao clicar fora do conteúdo do modal
   window.onclick = function(event) {
       if (event.target == modal) {
           modal.style.display = "none";
       }
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
