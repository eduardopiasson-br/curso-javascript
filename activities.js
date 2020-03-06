var inputAge = document.getElementById('age');

function isMajor() {
    const isMajor = age => {
        return new Promise((solve, reject) => {
            setTimeout(() => {
                age >= 18 ? solve() : reject();
            }, );
        });
    };

    isMajor(inputAge.value) 
    .then(function() {
        console.log("Maior que 18");
    })
    .catch(function() {
        console.log("Menor que 18");
    });
}


