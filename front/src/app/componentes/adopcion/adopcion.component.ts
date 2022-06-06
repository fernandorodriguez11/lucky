import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/servicios/http.service';
import { Animal } from 'src/app/entidades/animal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adopcion',
  templateUrl: './adopcion.component.html',
  styleUrls: ['./adopcion.component.sass']
})
export class AdopcionComponent implements OnInit {

  animal : Animal[]
  obtenerObservable;
  mensajeError: String;
  existeError: Boolean;

  constructor(private httpService: HttpService, private router: Router) {
    this.mensajeError = "";
    this.existeError = false;
  }

  ngOnInit() {

    this.obtenerObservable = this.httpService.obtenerTodosAnimales();

    this.obtenerObservable.subscribe(datos =>{

      if(datos.valido === true){

        this.animal = datos.animales;
        this.httpService.guardarAnimales(datos.animales);

      }else{

        this.existeError = true;
        this.mensajeError = datos.mensaje;

      }
    })

  }

  redirige(id){
    this.router.navigate(["/perfil-animal/"+id]);
  }

}
