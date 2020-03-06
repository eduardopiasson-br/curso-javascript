//REST 

function soma(a, b, ...params) {
    return params;
}

console.log(soma(1, 3, 4, 4 ,5, 6, 7));


//SPREAD

const usuario1 = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat',
};

const usuario2 = { ...usuario1, nome: 'Gabriel'};

console.log(usuario2);