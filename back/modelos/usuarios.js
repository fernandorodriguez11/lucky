const mongoose = require('mongoose'); //importamos mongoose
const Schema = mongoose.Schema;

//El objeto que nos insertara los usuarios en la base de datos.
// TODO validaciones.
let Usuario = new Schema({
    nombre: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    apellidos:{
        type: String
    },
    dni: {
        type: String
    },
    direccion: {
        type: String
    },
    cp:{
        type: String
    },
    ciudad:{
        type: String
    },
    telefono:{
        type: String
    },
    edad: {
        type: Number
    }
});

//como el export default pero para Node
module.exports = mongoose.model('Usuario', Usuario);
// le indicamos a mongoose que para tipo Usuario utilizamos el esquema usuario
