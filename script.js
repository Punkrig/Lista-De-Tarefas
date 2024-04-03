const inputBox = document.getElementById("input-box"); // Obtém a referência para o input de texto
const listContainer = document.getElementById("list-container"); // Obtém a referência para a lista de tarefas

function addTask(){
    if(inputBox.value === ''){
        alert("Você deve escrever algo"); // Mostra um alerta se o campo estiver vazio
    }else{
        let li = document.createElement("li"); // Cria um novo elemento li
        li.innerHTML= inputBox.value; // Define o conteúdo do li como o valor do input
        listContainer.appendChild(li); // Adiciona o li à lista de tarefas
        let span = document.createElement("span"); // Cria um novo elemento span
        span.innerHTML="\u00d7"; // Define o conteúdo do span como um caractere 'X'
        li.appendChild(span); // Adiciona o span ao li
    }
    inputBox.value= ""; // Limpa o valor do input após adicionar a tarefa
    saveData(); // Salva os dados no localStorage
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked"); // Adiciona ou remove a classe "checked" ao clicar em um item da lista
        saveData(); // Salva os dados no localStorage
    }else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove(); // Remove o item da lista ao clicar no span
        saveData(); // Salva os dados no localStorage
    }
}, false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML); // Salva o conteúdo da lista no localStorage com a chave "data"
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data"); // Mostra o conteúdo da lista armazenado no localStorage ao carregar a página
}
showTask(); // Chama a função showTask ao carregar a página para exibir as tarefas salvas
