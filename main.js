/*
||==============================================||
|| Script em JS para sistema WEB                ||
||                                              ||
|| Autor: Christian Danner Ramos de Carvalho    ||
||==============================================||
*/

function adcNovaTarefa() {
    var lista = document.getElementById("lista"); // pegar o conteúdo da lista gerada dentro da variável lista
    var texto = document.getElementById("nome_tarefa").value; // pegar a entrada de texto do usuário

    if(texto.length == 0) {
        alert("Tarefa precisa ter mais de um caracter");
        return;
    }

    var itemLista = document.createElement("li"); // criar na tela o li, colocar o texto dentro da minha lista de itens, e colocar a lista de itens dentro da lista
    itemLista.className = "lista-itens";
    
    const elementoTexto = document.createTextNode(texto);
    itemLista.appendChild(elementoTexto);
    lista.appendChild(itemLista);
} 