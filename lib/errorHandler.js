'use strict';

function errorHandler(err){
  console.error(err)
  throw new Error('Fallo en la operacion del servidor')
}


module.exports = errorHandler;