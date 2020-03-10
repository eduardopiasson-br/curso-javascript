var inputAge = document.getElementById('age');

function isMajor() {
    const isMajor = age => {
        return new Promise((solve, reject) => {
            setTimeout(() => {
                age >= 18 ? solve() : reject();
            }, 2000);
        });
    };
    var ageAnswer = document.querySelector('div');
    isMajor(inputAge.value) 
    .then(function() {
        major(age);
    })
    .catch(function() {
        min(age);
    });

    var dataDiv = document.querySelector('i');
    function major() {
        dataDiv.innerHTML = "";
        var message = "Maior de 18 anos!";
    
        var textElement = document.createTextNode(message);
        var element = document.createElement('p');
        element.appendChild(textElement);
        dataList.appendChild(element);
    }
    function min() {
        dataDiv.innerHTML = "";
        var message = "Menor de 18 anos!";
    
        var textElement = document.createTextNode(message);
        var element = document.createElement('p');
        element.appendChild(textElement);
        dataList.appendChild(element);
    }
}

var inputName = document.getElementById('user');
var dataList = document.querySelector('ul', '.git');
const userGit = name => {
    var user = inputName.value;
    if (!user) {
        alert("Preencha o campo");
    }
    renderLoading();
    axios
        .get(`https://api.github.com/users/${user}/repos`)
        .then(response => {
            fillList(response.data);
        })
        .catch(error => {
            renderError(error);
        });
};

function renderLoading(loading) {
    dataList.innerHTML = "";
    var textElement = document.createTextNode('Carregando...');
    var loadingElement = document.createElement('li');
    loadingElement.appendChild(textElement);
    dataList.appendChild(loadingElement);
}

function renderError(loading) {
    dataList.innerHTML = "";
    var user =inputName.value;
    var message = !user ? "Preencha o nome do Usuário" : "Erro ao efetuar busca";

    var textElement = document.createTextNode(message);
    var errorElement = document.createElement('li');
    errorElement.style.color = '#F00';
    errorElement.appendChild(textElement);
    dataList.appendChild(errorElement);
}

const fillList = repositorios => {
    console.log("TCL: repositorios", repositorios);
    dataList.innerHTML = "";
    
    for (repo of repositorios) {
        const reponame = document.createTextNode(repo.name);
        const repoItem = document.createElement('li');

        repoItem.appendChild(reponame);
        dataList.appendChild(repoItem);
    }
};


