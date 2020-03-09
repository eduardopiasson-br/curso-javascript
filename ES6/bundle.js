"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var usuarios = [{
  nome: 'Eduardo',
  idade: 21,
  empresa: 'Trend Mobile'
}, {
  nome: 'André',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Andreo',
  idade: 26,
  empresa: 'Google'
}];
var idades = usuarios.map(function (usuario) {
  return usuario.idade;
});
console.log(idades);
var rocketseat18 = usuarios.filter(function (usuario) {
  return usuario.empresa === "Rocketseat" && usuario.idade >= 18;
});
console.log(rocketseat18);
var google = usuarios.find(function (usuario) {
  return usuario.empresa === "Google";
});
console.log(google);
var calculo = usuarios.map(function (usuario) {
  return _objectSpread({}, usuario, {
    idade: usuario.idade * 2
  });
}).filter(function (usuario) {
  return usuario.idade <= 50;
});
console.log(calculo);
