export class Animal {
    public id: String
    public _id: String
    public foto: String
    public nombre:String
    public ciudad: String
    public datos:{
            especie: String
            tipo: String
            nacimiento: String
            edad: Number
            sexo: String
            tamano: String
            peso: String
            personalidad: String
            historia:String
        }
    public salud: {
            vacunado:String
            desparasitado: String
            sano: String
            esterilizado: String
            identificado: String
            microchip: String
         }
    public requisitos:{
            requisitos: String
            tasa: String
            envio: String
        }
    public adopcion: Boolean
}
