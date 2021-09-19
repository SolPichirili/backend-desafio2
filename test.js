const Contenedor = require('./Contenedor');

const contenedor = new Contenedor ('products.json');

const miProducto = {
    title: "Canapés x24",
    price: "$1000",
    thumbnail: "https://i.ytimg.com/vi/BmaYGHxQc9c/maxresdefault.jpg"
}

contenedor.save(miProducto);