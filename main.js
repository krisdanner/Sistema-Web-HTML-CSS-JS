/*
||==============================================||
|| Script em JS para sistema WEB                ||
||                                              ||
|| Autor: Christian Danner Ramos de Carvalho    ||
||==============================================||
*/

function adcNovaTarefa() {
    var texto = document.getElementById("nome_tarefa").value; // pegar a entrada de texto do usuário

    if(texto.trim().length == 0) { // Usar .trim() para ignorar espaços
        alert("Tarefa precisa ter mais de um caracter");
        return;
    }

    var itemLista = document.createElement("li"); // criar na tela o li, colocar o texto dentro da minha lista de itens, e colocar a lista de itens dentro da lista
    itemLista.className = "lista-itens";
    
    const elementoTexto = document.createTextNode(texto);
    itemLista.appendChild(elementoTexto);
    lista.appendChild(itemLista);

    // Limpar o campo de entrada de texto
    document.getElementById("nome_tarefa").value = "";
} 
