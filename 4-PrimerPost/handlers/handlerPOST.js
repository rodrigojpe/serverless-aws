'use strict';

module.exports.servicioPOST = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  let timestamp = new Date().getTime();
  const body = JSON.parse(event.body);
  let fecha = timestamp;
  let nombre = body.nombre;
  let apellido = body.apellido;
  let numero = body.numero || null;

  if(numero === null || numero === undefined || numero === 0 || isNaN(numero)){
    callback(null, {
      statusCode: 200,
      Headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        success: false,
        message: `El numero= ${numero} no es valido`
      })
    })
  }else{
    numero = numero * 20
    callback(null, {
      statusCode: 200,
      Headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: `Post exitoso`,
        data:{
          fecha,
          nombre,
          apellido,
          numero
        }
      },
      )
    })
  }

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
