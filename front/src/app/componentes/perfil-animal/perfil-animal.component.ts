import { Component, OnInit, Input } from '@angular/core';
import { Animal } from '../../entidades/animal';
import { HttpService } from '../../servicios/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-animal',
  templateUrl: './perfil-animal.component.html',
  styleUrls: ['./perfil-animal.component.sass']
})
export class PerfilAnimalComponent implements OnInit {

  perfilAnimal: Animal;
  objetable
  urlTree ;
  arrayRuta;
  obtenRuta;
  id : String;

  constructor(private infAnimal: HttpService, private router: Router) {

    this.urlTree = this.router.parseUrl(this.router.url);
    this.arrayRuta = new Array();
    this.obtenRuta = "";
   }



  ngOnInit() {

    this.datosAnimal();

  }

  datosAnimal(){
    this.obtenRuta = ""+this.urlTree
    this.arrayRuta = new Array();
    this.arrayRuta = this.obtenRuta.split("/")
    this.id = this.arrayRuta[2];
    this.objetable = this.infAnimal.obtenerAnimal(this.id);
    this.objetable.subscribe(datos => {
      console.log(datos.animal)
      this.perfilAnimal = datos.animal;
      this.infAnimal.guardarAnimal(datos.animal);
    })
  }

  oculta1(){
    const pagina1 = document.getElementById("animal-datos")
    pagina1.setAttribute("style", "display: block");

    const pagina2 = document.getElementById("animal-salud")
    pagina2.setAttribute("style", "display: none");

    const pagina3 = document.getElementById("animal-adopcion")
    pagina3.setAttribute("style", "display: none");

    const pestana = document.getElementById("pestana-datos")
    pestana.setAttribute("style", "font-weight: bold; color: rgb(1,116,142); border-bottom: 2px solid rgb(250,156,147)")

    const pestana2 = document.getElementById("pestana-salud")
    pestana2.setAttribute("style", "font-weight: medium; color: black")

    const pestana3 = document.getElementById("pestana-adopcion")
    pestana3.setAttribute("style", "font-weight: medium; color: black")
  }

  oculta2(){
    const pagina1 = document.getElementById("animal-datos")
    pagina1.setAttribute("style", "display: none");

    const pagina2 = document.getElementById("animal-salud")
    pagina2.setAttribute("style", "display: block");

    const pagina3 = document.getElementById("animal-adopcion")
    pagina3.setAttribute("style", "display: none");

    const pestana = document.getElementById("pestana-salud")
    pestana.setAttribute("style", "font-weight: bold; color: rgb(1,116,142); border-bottom: 2px solid rgb(250,156,147)")

    const pestana2 = document.getElementById("pestana-datos")
    pestana2.setAttribute("style", "font-weight: 400; color: black; border: none")

    const pestana3 = document.getElementById("pestana-adopcion")
    pestana3.setAttribute("style", "font-weight: medium; color: black")

  }
  oculta3(){
    const pagina1 = document.getElementById("animal-datos")
    pagina1.setAttribute("style", "display: none");

    const pagina2 = document.getElementById("animal-salud")
    pagina2.setAttribute("style", "display: none");

    const pagina3 = document.getElementById("animal-adopcion")
    pagina3.setAttribute("style", "display: block");

    const pestana = document.getElementById("pestana-adopcion")
    pestana.setAttribute("style", "font-weight: bold; color: rgb(1,116,142); border-bottom: 2px solid rgb(250,156,147)")

    const pestana2 = document.getElementById("pestana-salud")
    pestana2.setAttribute("style", "font-weight: medium; color: black")

    const pestana3 = document.getElementById("pestana-datos")
    pestana3.setAttribute("style", "font-weight: 400; color: black; border: none")
  }

  adopta(){
    const adopta = document.getElementById("perfil-animal-adopcion")
    adopta.setAttribute("style", "display: block")
    const azul = document.getElementById("perfil-animal")
    azul.setAttribute("style", "background-color: rgb(189, 210, 214)")
    const cosa = document.getElementById("perfil-animal-nombre")
    cosa.setAttribute("style", "display: none")
  }
  cancelar(){
    const adopta = document.getElementById("perfil-animal-adopcion")
    adopta.setAttribute("style", "display: none")
    const cosa = document.getElementById("perfil-animal-nombre")
    cosa.setAttribute("style", "display: block; display: flex; flex-direction: row;justify-content: space-around; background-color: white; border-radius: 3px; height: 4em; margin-top: -2em; margin-left: 21%; position: relative; padding-top: 1em")
    const color = document.getElementById("perfil-animal")
    color.setAttribute("style", "background-color: white")
  }

}
