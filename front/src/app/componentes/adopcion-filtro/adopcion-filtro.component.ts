import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/servicios/http.service';
import { Animal } from 'src/app/entidades/animal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adopcion-filtro',
  templateUrl: './adopcion-filtro.component.html',
  styleUrls: ['./adopcion-filtro.component.sass']
})
export class AdopcionFiltroComponent implements OnInit {
  animal : Animal[]
  obtenerObservable;
  mensajeError: String;
  existeError: Boolean;

  constructor(private httpService: HttpService, private router: Router) { 
    this.mensajeError = "";
    this.existeError = false;
  }

  ngOnInit() {

    this.animal = this.httpService.consigoAnimales(); 
    console.log(this.animal);
    
  }

  redirige(id){
    this.router.navigate(["/perfil-animal/"+id]);
  }
  
}
