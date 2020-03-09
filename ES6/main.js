const usuarios = [
    { nome: 'Eduardo', idade: 21, empresa: 'Trend Mobile' },
    { nome: 'André', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Andreo', idade: 26, empresa: 'Google' }
];

const idades = usuarios.map(usuario => usuario.idade);
console.log(idades);

const rocketseat18 = usuarios.filter(
    usuario => usuario.empresa === "Rocketseat" && usuario.idade >= 18
);
console.log(rocketseat18);

const google = usuarios.find(usuario => usuario.empresa === "Google");
console.log(google);

const calculo = usuarios 
    .map(usuario => ({ ...usuario, idade: usuario.idade * 2}))
    .filter(usuario => usuario.idade <= 50);

console.log(calculo);