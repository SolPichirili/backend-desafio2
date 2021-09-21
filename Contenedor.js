const fs = require('fs');

class Contenedor {
    constructor(file) {
        this.file = file;
    }

    async save(product) {
        try {
            const content = await fs.promises.readFile(`./${this.file}`, 'utf-8')

            let products = [];

            if (content === "") {
                product.id = 1;
                products.push(product);
            } else {
                const listaDeProductos = JSON.parse(content);

                product.id = listaDeProductos.length + 1;
                listaDeProductos.push(product);
                products = listaDeProductos;
            }
            const productoString = JSON.stringify(products, null, 2);
            await fs.promises.writeFile(`./${this.file}`, productoString);
            return `ID del producto agregado: ${product.id}`;
        } catch (error) {
            console.error('Error: ', error);
        }

    }

    async getById(id) {
        try {
            const content = await fs.promises.readFile(`./${this.file}`, 'utf-8')
            const listaDeProductos = JSON.parse(content);
            const product = listaDeProductos.find(e => e.id === id);

            if (!product) {
                return null;
            }

            return product;

        } catch (error) {
            console.error('Error: ', error);
        }
    }

    async getAll() {
        try {
            const content = await fs.promises.readFile(`./${this.file}`, 'utf-8');
            const listaDeProductos = JSON.parse(content);
            return listaDeProductos;
        } catch (error) {
            console.error('Error: ', error);
        }
    }

    async deleteById(id) {
        try {
            const content = await fs.promises.readFile(`./${this.file}`, 'utf-8');
            const listaDeProductos = JSON.parse(content);
            const product = listaDeProductos.filter(e => e.id !== id);
            const productString = JSON.stringify(product, null, 2);
        
            await fs.promises.writeFile(`./${this.file}`, productString);
        } catch (error) {
            console.error('Error: ', error);
        }
    }

    async deleteAll() {
        try {
            const content = await fs.promises.writeFile(`./${this.file}`, '');
        } catch (error) {
            console.error('Error: ', error);
        }
    }
}

module.exports = Contenedor;

