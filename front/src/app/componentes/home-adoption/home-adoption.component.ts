import { Component, OnInit } from '@angular/core';
import {UsuarioEnt} from "../../entidades/usuarioEnt";
import { HttpService } from 'src/app/servicios/http.service';

@Component({
  selector: 'app-home-adoption',
  templateUrl: './home-adoption.component.html',
  styleUrls: ['./home-adoption.component.sass']
})
export class HomeAdoptionComponent implements OnInit {

  nombreUsuario: String;
  objetable;
  objUsuario: UsuarioEnt;

  constructor(private httpClient : HttpService) { }

  ngOnInit() {
    //alert("Hola");
    
    this.objUsuario = this.httpClient.obtenerUsuario()
    console.log(this.objUsuario.nombre);
    //Obtengo el array del usuario logeado
    //this.objUsuario = this.httpClient.listLocalStrg()[0];

    //guardo en una variable el nombre con la primera letra mayuscula para mostrarlo en la vista
    this.nombreUsuario = this.objUsuario.nombre.charAt(0).toUpperCase()+ this.objUsuario.nombre.slice(1);

  }

}
