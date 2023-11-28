'use strict';


const pool = require('../connection');

module.exports.RDSselect =  (event, context, callback ) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const sql = 'SELECT *  FROM usuarios ;';

  pool.getConnection(function(err, connection) {

    if(err){ throw err; }
    connection.query(sql, function(error, results){
      if(error){
        callback ({
          statusCode: 400,
          headers: { 'Content-Type': 'application/json' },
          body: context.fail(JSON.stringify({
            success: false,
            message: error
          }))
        })
      }else{
        callback (null,{
          statusCode: 200,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            success: true,
            message: 'Exito al Seleccionar',
            data: results
          })
        })
        connection.release()
      }
    })

   })
};
