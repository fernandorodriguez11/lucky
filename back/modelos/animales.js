const mongoose = require('mongoose'); //importamos mongoose
const Schema = mongoose.Schema;

//El objeto que nos insertará los animales en la base de datos.
// TODO validaciones.
let Animal = new Schema({
    id: { type: Number },
    foto: { type: String },
    nombre:{ type: String },
    ciudad: { type: String },
    datos:{
        type: {
            especie:{ type: String },
            tipo: {type: String},
            nacimiento:{ type: String },
            edad:{ type: String },
            sexo:{ type: String },
            tamaño:{type: String },
            peso:{type: String},
            personalidad:{ type: Array},
            historia:{type: String }
        }
    },
    salud: {
        type: {
            vacunado:{type: String},
            desparasitado:{type: String},
            sano:{type: String},
            esterilizado:{type: String},
            identificado:{type: String},
            microchip:{type: String}
         }
    },
    requisitos:{
        type: {
            requisitos: { type: String},
            tasa: { type: String},
            envio: { ype: String},
        }
    },
    adopcion : { type: Boolean }

});

//como el export default pero para Node
module.exports = mongoose.model('Animal', Animal);
// le indicamos a mongoose que para tipo Usuario utilizamos el esquema usuario
