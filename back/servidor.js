const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Usuario = require('./modelos/usuarios');
const cors = require('cors');
const app = express();
const PORT = 4000;
const Protectoras = require('./modelos/protectoras');
const Animal = require('./modelos/animales');
const Adopcions = require('./modelos/adopcions');

app.use(bodyParser.json());
app.use(cors());

//Conexión a la base de datos luckyDB. Si la base de datos no existe será creada.
mongoose.connect('mongodb://127.0.0.1:27017/luckyDB'); // es la direccion ip local (es lo mismo que localhost).

//Variable con la que conectaremos a la base de datos de mongoo
const conexion = mongoose.connection;

//Realizamos la conexion a la base de datos y si se conecta exitosamente se muestra un mensaje.
conexion.once("open", function () {
  console.log(" 0) - Conectado a la base de datos lucky");
})

//Función que nos muestra el puerto al que estamos conectados. Actualmente no lo necesitamos así que
//hemos comentado el mensaje
app.listen(PORT, function () {

  //console.log("servidor ejecutandose en " + PORT);

});


const rutasAPI = express.Router();

//Va a ser nuestro intermediario en la URL.
app.use("/api/lucky", rutasAPI);

/*
------------- Consultas base de datos de Usuario ------------------
*/

/**
 * Función que comprueba si el email está en la base de datos.
 */
rutasAPI.route("/compraremail73hg4h4").post((req, res) => {

    Usuario.findOne({email: req.body.email},(error, usuario) => {

        if (error){
            res.json({
                status: res.status(400),
                mensaje: "error",
                valido: false,
                error: error
            })
        }else{
            if(usuario===null){
                res.json({
                    mensaje: "Usuario no existe",
                    valido: false
                })
            }else{
                res.json({
                    mensaje: "Usuario existe",
                    valido: true
                })
            }
        }
    })
})

/**
 * Función que se encarga de comprobar si hay un usuario con el email y password en la base de datos.
 * Si existe devuelve un objeto Mensaje con un la collección devuelta
 */
rutasAPI.route("/login").post((req, res) => {

    Usuario.findOne({email: req.body.email, password: req.body.password},(error, usuario) => {

     if (error){
         res.json({
             status: res.status(400),
             mensaje: "error",
             valido: false,
             error: error
         })
     }
     else{
        if(usuario === null){
            res.json({
                mensaje: "incorrecto",
                valido: false,
                usuario: usuario
            })
        }else{
            res.json({
                mensaje: "Usuario correcto",
                valido: true,
                usuario: usuario
            })
            console.log(usuario);
        }
     }

    })

})

/**
 * Función que se encarga de insertar un usuario en la base de datos, siempre y cuando no exista
 * un usuario con el email introducido.
 */
rutasAPI.route("/registro").post((req, res)=>{

    Usuario.findOne({email: req.body.email},(error, usuario)=>{

        if (error){
            res.json({
                status: res.status(400),
                mensaje: "error",
                valido: false,
                error: error
            })
        }
        else{
            if(req.body.email === ""){
                res.json({
                    mensaje: "No puedes introducir un mail vacío",
                    valido: false,
                    usuario: usuario
                })
            }else{
                if(usuario === null){
                    let nuevoUsuario = new Usuario(req.body);
                    let promesaDeGuardado = nuevoUsuario.save();
                    promesaDeGuardado.then(datos =>{
                        res.json({
                            mensaje: "Usuario insertado correctamente",
                            valido: true,
                            usuario: usuario
                         })
                    })

                }else{
                    res.json({
                        mensaje: "Usuario Ya existente, no te puedes registrar con este mail",
                        valido: false,
                        usuario: usuario
                    })
                }
            }

        }

    })

});

/**
 * Función que se encarga de modificar los datos de un usuario en la base de datos.
 */
rutasAPI.route("/modificar/").put((req,res)=>{
    user = new Usuario(req.body);

    Usuario.findById(user._id, (err, usuario)=>{

        if(err){
            res.json({
                valido: false,
                mensaje: "Error en la consulta a la base de datos"
            })
        }else{

            if(usuario === null){
                res.json({
                valido: false,
                mensaje: "Este usuario no existe"
                })
            }else{
                for (const prop in req.body) {
                    usuario[prop] = req.body[prop]

                }

                usuario.save()

                res.json({
                    valido: true,
                    mensaje: "Correcto",
                    usuario: usuario
                })
            }
        }
    })

});

/**
 * rutasAPI.route("/modificar/:id").put((req,res)=>{
    let user = new Usuario(req.body);
    //user._id = req.params.id;

    console.log(user);

    Usuario.findById({"_id": req.params.id}, (err, usuario)=>{

    if(err){
        res.json({
        valido: false,
        mensaje: "Error en la consulta a la base de datos"})
    }else{
        if(usuario === null){
            res.json({
            valido: false,
            mensaje: "Este usuario no existe"})
        }else{
            for (const prop in req.body) {
                usuario[prop] = req.body[prop]
                }
                usuario.save()
                console.log("Obj construido " + usuario);

            res.json({
            valido: true,
            mensaje: "Correcto",
            usuario: usuario})
        }
    }
    })

   });
 */

// POSTMAN: método:GET, ruta: http://127.0.0.1:4000/api/lucky/protectoras
rutasAPI.route("/protectoras").get(function (reqPeticionHttp, resRespuestaHttp) { //enrutamos la raiz de la ruta, metodo GET
  Protectoras.find(function (err, Protectoras) { //le decimos al esquema de mongoose, "busca todo "
      //y cuando hayas encontrado invocas a la function err, (va a pasar tanto el error como los datos)
      if (err) {
          console.log("err"); //si error contiene un error mostramos el error en consola
          // y si todo ha ido bien `pedimos devolver la coleccion en formato JSON
      } else {
          resRespuestaHttp.json(Protectoras);
          //se invoca a la query db.protectoras.find(), es un método de mongoose
      }
    })
  });

/*
------------- Consultas base de datos de Animales ------------------
*/

/**
 * Función que se encarga de obtener todos los animales de la base de datos.
 */
rutasAPI.route("/animales").get((req, res) => {
    Animal.find((err, animal)=>{
      if (err) {
         res.json({
          mensaje: "Error",
          valido: false
        })
      }else{
        if(animal === null){
          res.json({
            valido: false,
            mensaje: "No hay animales"
          })
        }else{
          res.json({
            valido: true,
            mensaje: "Correcto",
            animales: animal
          });
        }
      }
    });
});



/**
 * Función que busca animales que cumpla con los filtros establecidos.
 */
rutasAPI.route("/filtros").post(function (req, res) {

    Animal.find(
        {$and:[ { ciudad: req.body.ciudad},
               { "datos.especie": req.body.especie },
               { "datos.tipo": req.body.tipo },
               { "datos.tamano": req.body.size},
               { "datos.sexo": req.body.genero },
               { "datos.edad": req.body.edad }
             ]},

        function (err, coleccionAnimales) {
        if (err) {
            console.log("err");
            res.json({
                valido: false,
                mensaje: err
            })
        } else {
            if(coleccionAnimales === null){
                res.json({
                    valido: false,
                    mensaje: "Error"
                })
            }else{
                console.log(coleccionAnimales)
                res.json({
                    valido: true,
                    mensaje: "Correcto",
                    animales: coleccionAnimales
                });
            }

        }
    });
});

/**
 * Función que devuelve los animales que cumplan con la especie que se recibe por get.
 */
rutasAPI.route("/tiposAnimales/:especie").get(async (req,res)=>{

    let especie = req.params.especie;

    console.log(especie)
    await Animal.find({"datos.especie" : especie}, (err, animales) =>{
        if(err){
            res.json({
                valido: false,
                mensaje: "Error",
            })
        }else{
            if(animales === null){
                res.json({
                    valido: false,
                    mensaje: "No existen",
                })
            }else{
                res.json({
                    valido: true,
                    mensaje: "Existe",
                    animales: animales
                })
            }
        }
    })

})

/**
 * Función que devuelve el animal que cumple con el _id que se recibe por parametros.
 */
rutasAPI.route("/perfil-animal/:id").get((req,res)=>{

    let id = req.params.id;

    Animal.findById(id,(err, animal)=>{
        if(err){
            console.log('ERROR');
            res.json({
                mensaje: "error",
                status: res.status(400),
                valido: false,
                error: error
                })
        }else{
            if(animal === null){
                res.json({
                    mensaje: "incorrecto",
                    valido: false,
                })
            }else{
                res.json({
                    mensaje: "Animal correcto",
                    valido: true,
                    animal: animal
                })
                console.log(animal);
            }
        }

    })

});

/*
------------- Consultas base de datos de Adopciones ------------------
*/


/**
 * Función que comprueba si el animal al que se va a pedir ser adoptado, está adoptado.
 * Si el animal no está adoptado se comprueba que el usuario no haya pedido una solicitud a este
 * animal ya antes. Si no se cumplen esas dos opciones se crea la solicitud de adopción.
 */
rutasAPI.route("/adopcion").post((req, res) => {

    Animal.find({$and:[{"_id": req.body.animalId},{"adopcion": true}]}, (err, animal)=>{
        if(err){
            res.json({
                mensaje: "Lo siento ha ocurrido un error",
                valido: false
            })
        }else{
            console.log(animal);
            if(animal){

                Adopcions.find({$and:[{"usuarioId": req.body.usuarioId},{"animalId": req.body.animalId}]},(err, adopciones)=>{

                    if(err){
                        res.json({
                            mensaje: "Lo siento ha ocurrido un error",
                            valido: false
                        })
                    }else{
                        console.log(adopciones);
                        if(adopciones.length !== 0){
                            console.log("ya tienes la solicitud en proceso");
                            res.json({
                                mensaje: "Ya tienes esta solicitud en proceso",
                                valido: false
                                //adopciones: adopciones
                            })
                        }else{
                            let nuevaAdopcion = new Adopcions(req.body);
                            nuevaAdopcion.proceso = "En proceso";
                            let promesaDeGuardado = nuevaAdopcion.save();
                            promesaDeGuardado.then(adopcions => {
                                console.log(JSON.stringify(adopcions));
                                console.log('Datos introducidos con exito en BBDD')
                                res.json({
                                    mensaje: "Petición de adopcion enviada con exito!!",
                                    valido: true,
                                    adopcion: adopcions
                                })
                            })
                        }
                    }

                })
            }else{
                res.json({
                    mensaje: "Lo siento este animal ya está adoptado",
                    valido: false
                })
            }
        }
    })

})


/**
 * Función que se encarga de buscar las adopciones según el filtro que se reciba por parámetros
 * del usuario que también viene por parámetros.
 */
 rutasAPI.route('/adoptar/:filtro/:idUsu').get(function(req, res){
    let filtro =req.params.filtro;
    let idUsu = req.params.idUsu;
    console.log(filtro);
    Adopcions.find({$and:[{"proceso": filtro},{usuarioId: idUsu}]},(err, adopcion)=>{
        if(err){
            console.log('err');
            res.json({
                valido: false,
                mensaje: 'err'
            })
        }else{
            if(adopcion.length === 0){
                res.json({
                    valido: false,
                    mensaje: "No hay coincidencias en tu busqueda."
                })
            }else{
                res.json({
                    valido: true,
                    mensaje:"Resultado de tu busqueda OK.",
                    adopciones: adopcion
                })
            }

        }
    })
 })

 /**
 * Función que me obtiene el listado de solicitudes de adopciones del usuario que viene
 * por parámetros
 */
rutasAPI.route("/listado-adopciones/:id").get((req,res) =>{

  let id = req.params.id;

  Adopcions.find({"usuarioId": id},(err, adopciones)=>{
      if(err){
          res.json({
              mensaje: "error",
              valido: false,
          })

      }else{
          if(adopciones.length === 0){
              res.json({
                  mensaje: "Aún no has realizado ninguna adopcion",
                  valido: false,
              })
          }else{
              res.json({
                  mensaje: "correcto",
                  valido: true,
                  adopciones: adopciones
              })
          }
      }

  })
})
