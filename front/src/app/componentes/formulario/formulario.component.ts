import { Component, OnInit, Input, Output } from '@angular/core';
import { UsuarioEnt } from 'src/app/entidades/usuarioEnt';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.sass']
})
export class FormularioComponent{

  @Input() usuarioNuevo : UsuarioEnt;
  @Output() propagarBlur = new EventEmitter<string>();

alPerderFocoEmail() {
  
  this.propagarBlur.emit("Mensaje");
}

}
