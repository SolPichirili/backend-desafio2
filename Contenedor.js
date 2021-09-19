const fs = require('fs');

class Contenedor {
    constructor(file) {
        this.file = file;
    }

    save(product) {
        console.log('save: ', product);

        fs.promises.readFile(`./${this.file}`, 'utf-8')
            .then((content) => {
                console.log(content);
                if(content === ""){
                    product.id = 1;
                    return product;

                }
                const listaDeProductos = JSON.parse(content)
                product.id = listaDeProductos.length;
                return product;
            })
            .then((product) =>{
                const productoString = JSON.stringify(product, null, 2);
                console.log('Lista para guardar: ', productoString);
            })
            .catch((error) =>{
                console.error('Error: ', error)
            })
        //fs.promises.writeFile(`./${this.file}`)
    }
}

module.exports = Contenedor;

