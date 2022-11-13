const faker = require('faker');



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

  create(){

  }

  find(){
    return this.products;
  }

  findOne(id){
    return this.products.find(item => item.id === id);
  }

  update(){

  }

  delete(){

  }

}


module.exports = ProductsService;
