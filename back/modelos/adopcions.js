const mongoose = require('mongoose'); //Importamos Mongoose
const Usuario = require('./usuarios');
const Schema = mongoose.Schema;

/* Creamos el esquema(Objeto) que nos insertara en el formulario de
adopcion en la BBDD. */

let Adopcions = new Schema({
    usuarioId: { type: mongoose.ObjectId },  //Con (type: mongoose.ObjectId) obtenemos la referencia al Id del usuario.
    animalId: { type: mongoose.ObjectId },
    masAnimal: {
                type:
                    {
                    cual: { type:String },
                    comportamiento: { type:String }
                    }
                },
    eleccionAdop: { type:String },
    necesidadesAnim: { type:String },
    gastosAnim: { type:String },
    alimentacionAnim: { type:String },
    dondeVives: { type:String },
    alquiler: { type:Boolean },
    caseroPermite: { type:Boolean },
    mudarse: { type:Boolean },
    jardin: { type:Boolean },
    vivesSolo: { type:Boolean },
    acuerdoAdop: { type:Boolean },
    visitarCasa: { type:Boolean },
    proceso: { type: String}

});

//como el export default pero para Node
module.exports = mongoose.model('Adopcions', Adopcions);
// le indicamos a mongoose que para tipo adopcion utilizamos el esquema adopcion
