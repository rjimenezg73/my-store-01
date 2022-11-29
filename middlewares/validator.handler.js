const boom = require('@hapi/boom');


// Nuestro middleware será dinámico, por eso no recibirá directamente el req, res y next
// si no que recibiremos el esquema y la propiedad
// Se retornará una función que tenga el formato de un middleware
function validatorHandler(schema, property){
  return (req, res,next) => {
    const data = req[property];
    const { error } = schema.validate(data);
    if (error){
      next(boom.badRequest(error));
    }
    next();
  }
}



module.exports = validatorHandler;
