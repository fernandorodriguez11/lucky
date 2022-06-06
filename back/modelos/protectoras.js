const mongoose = require('mongoose'); //importamos mongoose
const Schema = mongoose.Schema;


//El objeto que nos insertara los usuarios en la base de datos.
// TODO validaciones.
let Protectoras = new Schema({

    id: {
      type: String
    },

    nombre: {
        type: String
    },
    email: {
        type: String
    },
    ubicacion : {
        type : String
    },
    puntuaciones : {

      type : Number
    },
    telefono : {
      type : String
    }

  });

  module.exports = mongoose.model('Protectoras', Protectoras);


