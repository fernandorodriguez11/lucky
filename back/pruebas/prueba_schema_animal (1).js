
const mongoose = require('mongoose');
const Animal = require('../modelos/animales');
mongoose.connect('mongodb://127.0.0.1:27017/luckyDB'); 

let animalPrueba1 = {
    id: 1,
    foto: "https://imagenes.milenio.com/1RuLbFTB8EWWEBPTsRqekarHGew=/958x596/https://www.milenio.com/uploads/media/2019/03/15/esta-ave-habia-sido-declarada.jpg",
    nombre: 'Blue',
    ciudad: 'Madrid',
    datos: { 
        especie: 'Ave', 
        tipo: 'Guacamayo',
        nacimiento: '03-07-2018',
        edad: 'Joven',
        sexo: 'Macho',
        tamano: 'Pequeño',
        peso: '0.3Kg',
        personalidad: 
            ['Bueno con niños', 'Cauteloso', 'Tímido', 'A veces maullo o ladro', 'Juguetón'],
        historia: 'Me llamo Blue, era un pajarito muy bueno, pero vi cosas que no debería haber visto, que no debían haber pasado. Por eso llamaron a LARA y vino a salvarnos la vida.'
    },
    salud: { 
        vacunado: 'Si', 
        desparasitado: 'Si',
        sano: 'Si',
        esterilizado: 'No',
        identificado: 'Si',
        microchip: 'No',
        saber: 'No le gusta la lechuga.'
    },
        requisitos: { 
        requisitos: 'No hay requisitos especiales para adoptar a Blue.',
        tasa: '125€',
        envio: 'No se envía a otra ciudad'
    }
}
let animalPrueba2= {
    id: 2,
    foto: 'https://misanimales.com/wp-content/uploads/2016/11/perro-de-raza-grande.jpg',
    nombre: 'Princesa',
    ciudad: 'Valencia',
    datos: { 
        especie: 'Perro',
        tipo: 'Golden',
        nacimiento: '29-01-2016',
        edad: 'Mediana edad',
        sexo: 'Hembra',
        tamano: 'Grande',
        peso: '15Kg',
        personalidad: 
            ['Bueno con niños', 'Fiel', 'Tranquila', 'Juguetona'],
        historia: 'Me llamo Princesa, soy muy especial con las familias, sobre todo con los niños. Mis dueños se van a otro país y no me puede cuidar.'},
    salud: { 
        vacunado: 'Si', 
        desparasitado: 'Si',
        sano: 'Si',
        esterilizado: 'Si',
        identificado: 'Si',
        microchip: 'Si',
        saber: 'Me encantan los treats.'
    },
    requisitos: { 
        requisitos: 'Vivienda con espacio para jugar.',
        tasa: '250€',
        envio: 'No se envía a otra ciudad'
}
}

let animalPrueba3={
    id: 3,
    foto: 'https://cdn.shopify.com/s/files/1/1335/7959/articles/cat-3040345_960_720_600x600.jpg?v=1518514176',
    nombre: 'Catmandú',
    ciudad: 'Cáceres',
    datos: {
        especie: 'Gato',
        tipo: 'Común Europeo',
        nacimiento: '01-12-2018',
        edad: 'Joven',
        sexo: 'Macho',
        tamano: 'Pequeño',
        peso: '4Kg',
        personalidad: 
            ['Cariñoso', 'Independiente', 'Limpio', 'Saltarín', 'Dormilón' ],
        historia: 'Me llamo Catmandú. Cuando la protectora de animales iba a esterilizar a mi mamá, se dieron cuenta de que mis hermanos y yo estábamos dentro. Así que aquí estoy esperando que me adoptes, porque mis abuelos humanos no me pueden cuidar.'},
    salud: { 
        vacunado: 'Si', 
        desparasitado: 'Si',
        sano: 'Si',
        esterilizado: 'Si',
        identificado: 'Si',
        microchip: 'Si',
        saber: 'Me encanta el atún.'
    },
    requisitos: { 
        requisitos: 'No tiene requisitos especiales.',
        tasa: '150€',
        envio: 'No se envía a otra ciudad'
    }
}

let animalPrueba4={
    id: 4,
    foto: 'https://cdn.shopify.com/s/files/1/1335/7959/articles/cat-3040345_960_720_600x600.jpg?v=1518514176',
    nombre: 'Catmandú 2',
    ciudad: 'Valencia',
    datos: {
        especie: 'Gato',
        tipo: 'Gato Persa',
        nacimiento: '01-12-2018',
        edad: 'Viejo',
        sexo: 'Hembra',
        tamano: 'Pequeño',
        peso: '4Kg',
        personalidad: 
            ['Cariñoso', 'Independiente', 'Limpio', 'Saltarín', 'Dormilón' ],
        historia: 'Me llamo Catmandú. Cuando la protectora de animales iba a esterilizar a mi mamá, se dieron cuenta de que mis hermanos y yo estábamos dentro. Así que aquí estoy esperando que me adoptes, porque mis abuelos humanos no me pueden cuidar.'},
    salud: { 
        vacunado: 'Si', 
        desparasitado: 'Si',
        sano: 'Si',
        esterilizado: 'Si',
        identificado: 'Si',
        microchip: 'Si',
        saber: 'Me encanta el atún.'
    },
    requisitos: { 
        requisitos: 'No tiene requisitos especiales.',
        tasa: '150€',
        envio: 'No se envía a otra ciudad'
    }
}


const conexion = mongoose.connection;

//Realizamos la conexion a la base de datos y si se conecta exitosamente se muestra un mensaje.
conexion.once("open", function () {
    console.log(" 0) - Conectado a la base de datos lucky");

    let nuevoAnimal = new Animal(animalPrueba3);
    let promesaDeGuardado = nuevoAnimal.save(); //metodo save, devuelve una promesa de guardar
    
    promesaDeGuardado.then(animal=>{
        //mostramos el status 200 si se ha insertado correctamente
        console.log(JSON.stringify(animal));
    })
    //Muestro el status 400 si ha ocurrio un error
    promesaDeGuardado.catch(err=>{
        res.status(400).send("Se fue a la verga")
    })
    
})
