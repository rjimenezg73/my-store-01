const faker = require('faker');
const { ne } = require('faker/lib/locales');


/**
 * En ésta clase se va a gestionar todo lo que son los productos
 */

class ProductsService{
  constructor(){
    this.products = [];
    this.generate(); //Cada vez que se genere una instancia del producto creará 100 productos
  }

  generate(){
    const limit = 100; // Se inicia con 100 productos
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl()
      });
    }
  }

  async create(data){
    const newProduct = {
      id: faker.datatype.uuid(),
      image: faker.image.imageUrl(),
      ...data,
    }
    this.products.push(newProduct);
    return newProduct;
  }

  async find(){
    return this.products;
  }

  async findOne(id){
    return this.products.find(item => item.id === id);
  }

  async update(id, changes){
    const index = this.products.findIndex(item => item.id === id); // en vez de retornarme el elemento, me retorna la posición donde éste elemento se encuentra
    if(index === -1){
      throw new Error('Product not found!');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index];
  }

  async delete(id){
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1){
      throw new Error('Product not found!');
    }
    this.products.splice(index,1);
    return { id };
  }

}


module.exports = ProductsService;
