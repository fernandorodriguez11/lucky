import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/servicios/http.service';
import { UsuarioEnt } from 'src/app/entidades/usuarioEnt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.sass']
})
export class EditarPerfilComponent implements OnInit {
  
  usuarioEditado: UsuarioEnt
  objetable;
  usuario: UsuarioEnt
  constructor(private infUsu: HttpService, private route: Router){ }

  /**
   * Cada vez que se viene a esta página se obtiene el usuario llamando a la función que está en la
   * sessionStorage
   */
  ngOnInit() {
    
    this.usuarioEditado= this.infUsu.obtenerUsuario();

  }

  /**
   * Función que es llamada cuando el usuario pulsa el botón de editar.
   * Está función se encarga de editar el usuario en la base de datos haciendo una llamada
   * al servicio. Si la edición no se realiza correctamente se muestra un mensaje sino se redirije al 
   * /home
   */
  editComponent(){
    
    this.objetable = this.infUsu.modificarUsuario(this.usuarioEditado);
    this.objetable.subscribe(datos => {
      
      console.log(datos)
      if(datos.valido){
        this.infUsu.guardarUsuario(datos.usuario);
        this.route.navigate(["/home"]);
      }else{
        alert(datos.mensaje);
      }
    })
    
  }

}
