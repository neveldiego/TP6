const data = require('./dataBase');
 const agregar = (id, nombre, desc, cat, precio)=>{
    let nuevoObj = {
        id: id ,
    nombre: nombre,
    descripcion: desc,
    categoria: cat,
    precio: precio,
    };
    data.push(nuevoObj);

    console.log(data)

 }
  agregar(7, "yogurt", "fermentado con probioticos", "Lacteos", 300)