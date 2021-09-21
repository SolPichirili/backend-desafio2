const Contenedor = require('./Contenedor');

const contenedor = new Contenedor('products.json');

const miProducto = {
    title: "Canapés x24",
    price: "$1000",
    thumbnail: "https://i.ytimg.com/vi/BmaYGHxQc9c/maxresdefault.jpg"
}

const save = async() => {
    const id = await contenedor.save(miProducto);
    console.log(id);
}
save();

const getById = async() =>{
    const listId = await contenedor.getById(2);
    console.log(listId);
}
getById();

const getAll = async() =>{
    const list = await contenedor.getAll();
    console.log(list);
}
getAll();

const deleteById = async () => {
    await contenedor.deleteById(1);
}
deleteById();

const deleteAll = async() =>{
    await contenedor.deleteAll();
}
deleteAll();