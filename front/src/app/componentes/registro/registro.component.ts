import { Component, OnInit } from '@angular/core';
import { UsuarioEnt } from "../../entidades/usuarioEnt";
import { HttpService } from "../../servicios/http.service";
import { isEmptyExpression } from '@angular/compiler';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.sass']
})
export class RegistroComponent /*implements OnInit*/ {
  usuarioNuevo: UsuarioEnt;
  camposInvalid = false;
  objetable;

  constructor(private infUsu: HttpService ) {
    this.usuarioNuevo = new UsuarioEnt();
    this.usuarioNuevo.nombre = "";
    this.usuarioNuevo.apellidos = "";
    this.usuarioNuevo.edad;
    this.usuarioNuevo.email = "";
    this.usuarioNuevo.telefono = "";
    this.usuarioNuevo.dni = "";
    this.usuarioNuevo.ciudad = "";
    this.usuarioNuevo.cp;
    this.usuarioNuevo.password = "";

   }

   /**
    * Función que comprueba que ciertos campos no estén vacíos. Si están vacíos no permite
    * registrar el usuario. Si está rellenos los campos inserta en la base de datos.
    */
  registroComponentClick(){

    if(this.usuarioNuevo.nombre === "" || this.usuarioNuevo.apellidos === "" ||
      this.usuarioNuevo.edad === 0 || this.usuarioNuevo.email === "" ||
      this.usuarioNuevo.telefono === "" || this.usuarioNuevo.dni === "" || this.usuarioNuevo.password === ""){
      alert("Hay campos obligatorios");
    }else{
      this.infUsu.insertarUsuariosBD(this.usuarioNuevo);
      this.usuarioNuevo = new UsuarioEnt();
    }


  }

  /**
   * Cuando el usuario escribe el email en el input se le muestra si ya existe o no existe.
   */
  alPerderFocoEmail() {

    this.objetable = this.infUsu.existeEmail(this.usuarioNuevo);

    this.objetable.subscribe(datos=>{
      if(datos.valido === true){
       alert("Este email ya existe");
      }else{
        alert("No existe");
      }
    })
 }

  ngOnInit() {
  }

}
