import { UsuarioEnt } from "./usuarioEnt";
import { Animal } from './animal';
import { Adopcion } from './adopcion';

export class Mensaje {
    mensaje: String;
    valido: boolean;
    usuario: UsuarioEnt;
    animal: Animal;
    animales: Animal[];
    adopcion: Adopcion;
    adopciones: Adopcion[];
}
