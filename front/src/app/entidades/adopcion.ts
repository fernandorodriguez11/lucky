export class Adopcion{
  public _id: String;
  public usuarioId: String
  public animalId: String
  public masAnimal: {
      cual: String,
      comportamiento: String
  }
  public eleccionAdop: String
  public necesidadesAnim: String;
  public gastosAnim: String;
  public alimentacionAnim: String;
  public dondeVives: String;
  public alquiler: Boolean;
  public caseroPermite: Boolean;
  public mudarse: Boolean;
  public jardin: Boolean;
  public vivesSolo: Boolean;
  public acuerdoAdop: Boolean;
  public visitarCasa: Boolean;
  public proceso: String;
}
