import { Component, OnInit } from '@angular/core';
import { UsuarioEnt } from "../../entidades/usuarioEnt";
import { HttpService } from '../../servicios/http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioEnt;
  objetable;

  constructor(private clientHttp: HttpService, private route : Router) {
    this.usuario = new UsuarioEnt();
    this.usuario.email = "";
    this.usuario.password = "";
  }

  /**
   * Función que al pulsar iniciar sesión comprueba que el email y password introducidos
   * son unos datos correctos y que están en la base de datos.
   */
  clickIniciarSesion() {
    this.objetable = this.clientHttp.iniciarUsuarioBD(this.usuario);
    this.objetable.subscribe(datos => {
      
      if(datos.valido === true){
        this.usuario = datos.usuario;
        //guardo el usuario obtenido cuando inicio sesión en la sessionStorage
        this.clientHttp.guardarUsuario(datos.usuario);
        //redirijo a /home
        this.route.navigate(["/home"]);

      }else{
        alert(datos.mensaje);
      }
    })

  }

  ngOnInit() {
  }


}
