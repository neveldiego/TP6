const data = require('./dataBase');



const listado = (categoria) => data.filter(item => item.categoria == categoria);
console.log(listado("Lacteos"));