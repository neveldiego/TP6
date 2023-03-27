 const data = require('./dataBase');

const busquedaId = (id)=> data.find(item => item.id === id); 
console.log(busquedaId(id));



const busquedaPrecio = (precioRef) => data.filter(item =>item.precio < precioRef);
console.log(busquedaPrecio(precioRef))



module.exports ={busquedaId, busquedaPrecio};