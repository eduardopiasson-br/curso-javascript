axios.get('https://api.github.com/users/eduardopiasson-br') 
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });

