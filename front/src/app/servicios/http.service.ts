import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { UsuarioEnt } from "../entidades/usuarioEnt"
import { Mensaje } from '../entidades/mensaje';
import { Animal } from '../entidades/animal';
import { Adopcion } from '../entidades/adopcion';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  private usuario: UsuarioEnt;
  private animal: Animal;
  private animales: Animal[];
  private adopciones: Adopcion[];


  constructor(private clientHttp: HttpClient) {

  }

  /**
   * Función encargada en insertar un usuario en la base de datos.
   * @param usuario
   */
  insertarUsuariosBD(usuario: UsuarioEnt){

    let registro = this.clientHttp.post<Mensaje>("http://127.0.0.1:4000/api/lucky/registro", usuario);
    registro.subscribe(datos =>{
      if(datos.valido){
        alert(datos.mensaje);
      }else{
        alert(datos.mensaje);
      }

    })

  }

  /**
   * Función que comprueba cuando se escribe un mail si ya existe en la base de datos. Ya que no
   * puede haber dos usuarios con el mismo mail.
   * @param usuario
   */
  existeEmail(usuario : UsuarioEnt){

    let comprobacion = this.clientHttp.post<Mensaje>(`http://127.0.0.1:4000/api/lucky/compraremail73hg4h4`,usuario);
    return comprobacion;

}

  /**
   * Función que pasando un objeto usuario, comprueba que el email y la password son correctos en la
   * base de datos para poder iniciar sesión
   * @param usuario
   */
  iniciarUsuarioBD(usuario: UsuarioEnt){

    let login = this.clientHttp.post<Mensaje>("http://127.0.0.1:4000/api/lucky/login", usuario);

    return login;

  }

  /**
   * conexión entre front y back para modificar un usuario
   * @param usuario objeto usuario
   */
  modificarUsuario(usuario: UsuarioEnt){
    let modificado = this.clientHttp.put<Mensaje>("http://127.0.0.1:4000/api/lucky/modificar/",usuario);

    return modificado;
  }

  /**
   * Función que devuelve un conjunto de animales de la base de datos.
   */
  obtenerTodosAnimales(){

    let todosAnimales = this.clientHttp.get<Mensaje>("http://127.0.0.1:4000/api/lucky/animales");

    return todosAnimales;

  }


  /**
   * Función que pasando por get el id del animal seleccionado nos devuelve todos sus datos guardados
   * en la base de datos.
   * @param idAnimal id del animal seleccionado
   */
  obtenerAnimal(idAnimal: String){

    let id = this.clientHttp.get<Mensaje>("http://127.0.0.1:4000/api/lucky/perfil-animal/"+idAnimal)
    return id;

  }

  /*
  Función que pasando la especie de animal me devuelve todos los animales que sean de esa especie
  para posteriormente obtener todos los tipos de animal que tiene esa especie.
  */
  obtenerTipoAnimal(especie : String){

    let tipos = this.clientHttp.get<Mensaje>("http://127.0.0.1:4000/api/lucky/tiposAnimales/"+especie);
    return tipos;

  }

  /*
  Función que pasando un objeto con los filtros para buscar un animal, nos devuelve una collection
  de animales con coincidan con los filtros.
  */
  obtenerFiltrosAnimal(filtros){
    let id= this.clientHttp.post<Mensaje>("http://127.0.0.1:4000/api/lucky/filtros/",filtros)
    return id;
  }

  /**
   * Función encargada de insertar en la base de datos la solicitud de adopcion pasando por parametro
   * un objeto con todos los datos.
   * @param adopcion un objeto de solicitud de adopcion de mascota
   */
  insertarAdopcion(adopcion: Adopcion){
    let formularioAdoptado = this.clientHttp.post<Mensaje>("http://127.0.0.1:4000/api/lucky/adopcion/",adopcion);
    return formularioAdoptado;
  }

  obtenermisAdopciones(idUsuario: String){

    let adopciones = this.clientHttp.get<Mensaje>("http://127.0.0.1:4000/api/lucky/listado-adopciones/"+idUsuario);
    return adopciones;

  }


  /**
   * Función encargada de guardar un usuario en la sessionStorage
   * @param usuario
   */
  guardarUsuario(usuario){
    this.usuario = usuario;
    sessionStorage.setItem("usuario", JSON.stringify(usuario));
  }

  /**
   * Función que obtiene el objeto usuario de la sessionStorage
   */
  obtenerUsuario(){
    if (typeof this.usuario === "undefined"  || this.usuario == null) {
      this.usuario = JSON.parse(sessionStorage.getItem("usuario"));
    }
    console.log("Hola" + JSON.stringify(this.usuario));
    return this.usuario;
  }

  /**
   * Función que se encarga de guardar un objeto animal en la sessionStorage
   * @param animal
   */
  guardarAnimal(animal: Animal){
    this.animal = animal;
    sessionStorage.setItem("animal", JSON.stringify(this.animal))
  }

  /**
   * Función que obtiene el objeto animal de la sessionStorage
   */
  consigoAnimal(){
    this.animal = JSON.parse(sessionStorage.getItem("animal"))

    return this.animal;
  }

  /**
   * Función que guarda un conjunto de animales en la sessionStorage
   * @param animal
   */
  guardarAnimales(animal : Animal[]){

    this.animales = animal;
    sessionStorage.setItem("animales", JSON.stringify(this.animales))
  }

  /**
   * Función que obtiene un conjunto de animales de la sessionStorage
   */
  consigoAnimales(){
    if(typeof this.animales === "undefined" || this.animales === null){
      this.animales = JSON.parse(sessionStorage.getItem("animales"))
    }
    return this.animales;
  }
/*
  guardaMisAdopciones(adopciones : Adopcion[]){
   //let adopcions = this.clientHttp.post<Mensaje>("http://127.0.0.1:4000/api/lucky/adopcions/",adopcions)
    this.adopciones = adopciones;
    sessionStorage.setItem("adopciones", JSON.stringify(this.adopciones))
  }


  consigoSolicitudes(){
    if(typeof this.adopciones === "undefined" || this.adopciones === null){
      this.adopciones = JSON.parse(sessionStorage.getItem("adopciones"))
    }
    return this.adopciones;
  }
*/

 }
