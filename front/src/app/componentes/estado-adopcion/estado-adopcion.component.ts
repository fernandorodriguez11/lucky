import { Component, OnInit } from '@angular/core';
import { Animal } from '../../entidades/animal';
import { HttpService } from 'src/app/servicios/http.service';
import { UsuarioEnt } from 'src/app/entidades/usuarioEnt';
import { Adopcion } from 'src/app/entidades/adopcion';

@Component({
  selector: 'app-estado-adopcion',
  templateUrl: './estado-adopcion.component.html',
  styleUrls: ['./estado-adopcion.component.sass']
})
export class EstadoAdopcionComponent implements OnInit {
  animal: Animal;
  animales: Animal[];
  adopcion: Adopcion[];
  usuario: UsuarioEnt;
  observable;
  proceso: String;
  constructor(private httpService: HttpService) {

  }

  ngOnInit() {
    this.usuario = this.httpService.obtenerUsuario();

    this.observable = this.httpService.obtenermisAdopciones(this.usuario._id);
    this.observable.subscribe(datos =>{
      if(datos.valido === true){
        console.log(datos.adopciones,"")
        this.adopcion = datos.adopciones;

        this.animales = this.httpService.consigoAnimales();

        for(let i = 0; i < this.adopcion.length; i++ ){
          for(let j = 0; j < this.animales.length; j++){
            if(this.animales[j]._id === this.adopcion[i].animalId){
              this.animal = this.animales[j];
              console.log(this.animal);
              this.proceso = this.adopcion[i].proceso;
              console.log(this.proceso);
            }
          }


        }
      }else{
        alert(datos.mensaje);
      }
    })

  }

  cambiaColores(){
    if(this.proceso === "En proceso"){
      return "estado__enProceso";
    }else if(this.proceso === "Rechazado"){
      return "estado__rechazado";
    }else if(this.proceso === "Aceptado"){
      return "estado__aceptado";
    }
  }

}

