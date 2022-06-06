import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/servicios/http.service';
import { Animal } from 'src/app/entidades/animal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.sass']
})
export class FiltrosComponent implements OnInit {

  especie : String;
  genero : String;
  width : String;
  ciudad : String;
  tipo : String;
  tipoAnimal: String;
  edad : String;
  selectTipo: Boolean;
  botonFiltros: Boolean;
  opciones;
  objetable;
  objetable2;
  animales: Animal[];
  arrayAnimales: Animal[];
  textoSelect: String;

  constructor(private httpService: HttpService, private route: Router) {
    this.botonFiltros = false;
    this.selectTipo = false;
    this.opciones = new Array();
    this.textoSelect = "";
    this.especie = "";
    this.genero = "";
    this.width= "";
  }

  ngOnInit() {

  }


/*
TODO: Mejorar el codigo, html con event y removeChild. Eliminar filtros
*/
  muestraAlgo(){
    const animal = event.currentTarget.dataset.tipo;
    this.especie = animal.charAt(0).toUpperCase() + animal.slice(1);
    this.botonFiltros = true;
    this.selectTipo = true;

    this.eliminaHijos();

    switch(animal){
      case "perro":
        this.traerTipos(this.especie);

        document.getElementById(animal).setAttribute("src", "../../../assets/iconos/perrop_2.png");
        document.getElementById("gato").setAttribute("src", "../../../assets/iconos/cat.png");
        document.getElementById("mamifero").setAttribute("src", "../../../assets/iconos/035CoatiCopy.png");
        document.getElementById("ave").setAttribute("src", "../../../assets/iconos/ave.png");

        break;
      case "gato":

        this.traerTipos(this.especie);


        document.getElementById("perro").setAttribute("src", "../../../assets/iconos/perrop.png");
        document.getElementById("mamifero").setAttribute("src", "../../../assets/iconos/035CoatiCopy.png");
        document.getElementById("ave").setAttribute("src", "../../../assets/iconos/ave.png");
        document.getElementById(animal).setAttribute("src", "../../../assets/iconos/cat_2.png");

        break;
      case "conejo":

        break;
      case "cobaya":

        break;
      case "mamifero":
        document.getElementById("perro").setAttribute("src", "../../../assets/iconos/perrop.png");
        document.getElementById("gato").setAttribute("src", "../../../assets/iconos/cat.png");
        document.getElementById(animal).setAttribute("src", "../../../assets/iconos/035CoatiCopy_2.png");
        document.getElementById("ave").setAttribute("src", "../../../assets/iconos/ave.png");

        break;
      case "huron":

        break;
      case "pez":

        break;
      case "reptil":

        break;
      case "anfibio":

        break;
      case "aracnido":

        break;
      case "ave":
        this.traerTipos(this.especie);

        document.getElementById("perro").setAttribute("src", "../../../assets/iconos/perrop.png");
        document.getElementById("gato").setAttribute("src", "../../../assets/iconos/cat.png");
        document.getElementById("mamifero").setAttribute("src", "../../../assets/iconos/035CoatiCopy.png");
        document.getElementById(animal).setAttribute("src", "../../../assets/iconos/aveRoja.png");


        break;
    }

    this.textoSelect = "Tipo de "+this.especie;

  }

  traerTipos(especie: String){
    this.objetable = this.httpService.obtenerTipoAnimal(especie);

    this.objetable.subscribe(datos => {
      if(datos.valido === true){
        this.arrayAnimales = datos.animales;
        this.obtenTipos(this.arrayAnimales);
      }
    })
  }

  eliminaHijos(){

    var tipo = document.getElementById("tipos");

    var algo = document.getElementsByName("animal");

    if(algo.length == 0){

    }else{
    console.log(algo.length);

    for(let i = 0; i< algo.length; i++){
      tipo.removeChild(algo[i]);
      this.opciones = new Array();
      }
    }
  }

  obtenTipos(arrayAnimales){
    for(let i= 0; i < arrayAnimales.length; i++){
      if(this.opciones.includes(arrayAnimales[i].datos.tipo)){
        console.log("Existe");
      }else{
        this.opciones.push(arrayAnimales[i].datos.tipo);
        this.addToSelect(arrayAnimales[i].datos.tipo);
      }
    }
  }

  /*
  */
  addToSelect(especie : String){

    document.getElementById("tipos").appendChild(this.generateComponent(especie));

  }

  generateComponent(texto){
    var option = document.createElement("option")
    option.id = texto;
    option.setAttribute("name", "animal")
    option.setAttribute("value", texto);
    option.innerHTML = texto;
    return option;
  }


  seleccionaGenero(){

    const tipo = event.currentTarget.dataset.genero;

    if(tipo === "macho"){
      document.getElementById("macho").setAttribute("src", "../../../assets/iconos/male_2.png");
      document.getElementById("hembra").setAttribute("src", "../../../assets/iconos/female.png");

    }else{
      document.getElementById("hembra").setAttribute("src", "../../../assets/iconos/female_2.png");
      document.getElementById("macho").setAttribute("src", "../../../assets/iconos/male.png");

    }
    this.botonFiltros = true;
    this.genero = tipo.charAt(0).toUpperCase() + tipo.slice(1);
    //console.log(this.genero);
  }


  seleccionaMedida(){
    const tipo = event.currentTarget.dataset.width;

    if(tipo === "pequeño"){
      document.getElementById("small").setAttribute("src","../../../assets/iconos/groupCopy_2.png")
      document.getElementById("mediano").setAttribute("src","../../../assets/iconos/group_6@2x.png")
      document.getElementById("grande").setAttribute("src","../../../assets/iconos/group_6@3x.png")

    }else if (tipo === "mediano"){
      document.getElementById("small").setAttribute("src", "../../../assets/iconos/group_6.png");
      document.getElementById("mediano").setAttribute("src", "../../../assets/iconos/groupCopy_2.png");
      document.getElementById("grande").setAttribute("src","../../../assets/iconos/group_6@3x.png");

    }else{

      document.getElementById("small").setAttribute("src", "../../../assets/iconos/group_6.png");
      document.getElementById("mediano").setAttribute("src", "../../../assets/iconos/group_6@2x.png");
      document.getElementById("grande").setAttribute("src","../../../assets/iconos/groupCopy_3.png")
    }
    this.botonFiltros = true;
    this.width = tipo.charAt(0).toUpperCase() + tipo.slice(1);
    //console.log(this.width);

  }

  aplicar(){
    if(this.especie === "" || this.genero === "" || this.width === ""){
      alert("Debes de seleccionar todos los filtros");
    }
  }

  aplicarFiltros(){

    if(this.especie === "" || this.genero === "" || this.width === ""){
      alert("Debes de seleccionar todos los filtros");
    }else{

      let ciudad = (<HTMLInputElement>document.getElementById("ciudad")).value;
      this.ciudad = ciudad;

      let edad = (<HTMLInputElement>document.getElementById("edad")).value;
      this.edad = edad;

      let tipo = (<HTMLInputElement>document.getElementById("tipos")).value;

      if(tipo === null || tipo === undefined || tipo === ""){
        alert("El tipo de animal no puede estar vacío");
      }else{
        this.tipoAnimal = tipo;

        let filtros = {
          ciudad: this.ciudad,
          edad: this.edad,
          especie: this.especie,
          tipo: this.tipoAnimal,
          size: this.width,
          genero: this.genero
        }

        this.objetable2 = this.httpService.obtenerFiltrosAnimal(filtros);
        this.objetable2.subscribe(datos=>{
          if(datos.valido === true){
            this.animales = datos.animales;
            this.httpService.guardarAnimales(datos.animales);
            this.route.navigate(["/adopcion/"+this.especie]);
          }
        })
      }


    }
  }

  borrarFiltros(){
    this.ciudad = "";
    this.edad = "";
    this.especie = "";
    this.tipoAnimal = "";
    this.width = "";
    this.genero = "";
    this.botonFiltros = false;
    this.selectTipo = false;

    document.getElementById("perro").setAttribute("src", "../../../assets/iconos/perrop.png");
    document.getElementById("gato").setAttribute("src", "../../../assets/iconos/cat.png");
    document.getElementById("mamifero").setAttribute("src", "../../../assets/iconos/035CoatiCopy.png");
    document.getElementById("ave").setAttribute("src", "../../../assets/iconos/ave.png");

    document.getElementById("macho").setAttribute("src", "../../../assets/iconos/male.png");
    document.getElementById("hembra").setAttribute("src", "../../../assets/iconos/female.png");

    document.getElementById("small").setAttribute("src","../../../assets/iconos/group_6.png")
    document.getElementById("mediano").setAttribute("src","../../../assets/iconos/group_6@2x.png")
    document.getElementById("grande").setAttribute("src","../../../assets/iconos/group_6@3x.png")

  }

}
