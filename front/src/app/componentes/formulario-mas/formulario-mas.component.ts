import { Component, OnInit} from '@angular/core';
import { UsuarioEnt } from 'src/app/entidades/usuarioEnt';
import { HttpService } from 'src/app/servicios/http.service';
import { temporaryDeclaration } from '@angular/compiler/src/compiler_util/expression_converter';
import { Animal } from 'src/app/entidades/animal';
import { Adopcion } from 'src/app/entidades/adopcion';

@Component({
  selector: 'app-formulario-mas',
  templateUrl: './formulario-mas.component.html',
  styleUrls: ['./formulario-mas.component.sass']
})
export class FormularioMasComponent implements OnInit {

  usuarioRegistrado: UsuarioEnt;
  animal: Animal;
  adopcion: Adopcion;
  observable;

  primero : Boolean;
  segundo : Boolean;
  tercero : Boolean;


  constructor(private httpService: HttpService) {

    this.primero = true;
    this.segundo = false;
    this.tercero = false;

    this.adopcion = new Adopcion();
    this.adopcion.masAnimal = {
      cual :"",
      comportamiento : ""
    }

      this.adopcion.eleccionAdop = "";
      this.adopcion.necesidadesAnim = "";
      this.adopcion.gastosAnim = "";
      this.adopcion.alimentacionAnim = "";
      this.adopcion.dondeVives = "";
      this.adopcion.alquiler = false;
      this.adopcion.caseroPermite = false;
      this.adopcion.mudarse = false;
      this.adopcion.jardin = false;
      this.adopcion.vivesSolo = false;
      this.adopcion.acuerdoAdop = false;
      this.adopcion.visitarCasa = false;

   }

  ngOnInit() {

    this.usuarioRegistrado = this.httpService.obtenerUsuario();

  }
  primeraVista(){
    this.primero = true;
    this.segundo = false;
    this.tercero = false;
  }

  segundaVista(){
    this.primero = false;
    this.segundo = true;
    this.tercero = false;
  }
  terceraVista(){
    this.primero = false;
    this.segundo = false;
    this.tercero = true;
  }
  acepta(){
    //this.usuarioRegistrado = this.httpService.obtenerUsuario();
    this.animal = this.httpService.consigoAnimal();
    this.adopcion.usuarioId = this.usuarioRegistrado._id
    this.adopcion.animalId = this.animal._id;
    console.log(this.adopcion);

    this.observable = this.httpService.insertarAdopcion(this.adopcion);
    this.observable.subscribe(datos =>{
      if(datos.valido === true){
        this.adopcion = new Adopcion();
        this.httpService.guardarUsuario(this.usuarioRegistrado);
        const acepta = document.getElementById("formulariomassolicitudaceptada")
        acepta.setAttribute("style", "display: block")
        const azul = document.getElementById("formulariomasacepta")
        azul.setAttribute("style", "background-color: rgb(189, 210, 214)")
      }else{
        alert(datos.mensaje);
      }
    })


  }

}
