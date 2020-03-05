var listELement = document.querySelector('#app ul');
var imputElement = document.querySelector('#app input');
var buttonELement = document.querySelector('#app button');

var todos = [
    'Fazer café',
    'Estudar JavaScript',
    'Acessar comunidade da Rocktseat'
];

function renderTodos() {
    for(todo of todos) {
        var todoElements = document.createElement('li');
        var todoText = document.createTextNode(todo);

        todoElements.appendChild(todoText);
        listELement.appendChild(todoELement);
    }
}

renderTodos();