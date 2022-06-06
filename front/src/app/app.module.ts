import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

//Importamos las clases de los componentes creados por nosotros
import { AplicacionComponent } from './componentes/raiz/aplicacion.component';
import { ErrorComponent } from './componentes/error/error.component';
import { LoginComponent } from './componentes/login/login.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { PerfilAnimalComponent } from './componentes/perfil-animal/perfil-animal.component';
import { FiltrosComponent } from './componentes/filtros/filtros.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { HomeAdoptionComponent } from './componentes/home-adoption/home-adoption.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { EditarPerfilComponent } from './componentes/editar-perfil/editar-perfil.component';
import { AdopcionComponent } from './componentes/adopcion/adopcion.component';
import { PerfilMasComponent } from './componentes/perfil-mas/perfil-mas.component';
import { MapaComponent } from '../app/componentes/mapa/mapa.component';
import { EstadoAdopcionComponent } from './componentes/estado-adopcion/estado-adopcion.component';
import { AdopcionFiltroComponent } from './componentes/adopcion-filtro/adopcion-filtro.component';
import { FormularioMasComponent } from './componentes/formulario-mas/formulario-mas.component';



const rutasApp: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "registro",
    component: RegistroComponent
  },
  {
    path: "inicio",
    component: InicioComponent
  },
  {
    path: "perfil",
    component: PerfilComponent
  },
  {
    path: "editar-perfil",
    component: EditarPerfilComponent
  },
  {
    path: "perfil-mas",
    component: PerfilMasComponent
  },
  {
    path: "filtros",
    component: FiltrosComponent
  },
  {
    path: "home",
    component: HomeAdoptionComponent
  },
  {
    path: "adopcion",
    component : AdopcionComponent
  },
  {
    path: "adopcion/:especie",
    component: AdopcionFiltroComponent
  },
  {
    path:"estado-adopcion",
    component: EstadoAdopcionComponent
  },
  {
    path: "mapa",
    component: MapaComponent
  },
  {
    path: "perfil-animal/:id",
    component: PerfilAnimalComponent
  },
  {
    path: "formulario-mas",
    component: FormularioMasComponent
  },
  {
    path:"",
    redirectTo:"inicio",
    pathMatch:"full"
  },
  {
    path: "**",
    component: ErrorComponent
  }


]

@NgModule({
  //Declaramos los componentes creados
  declarations: [
    AplicacionComponent,
    ErrorComponent,
    LoginComponent,
    InicioComponent,
    RegistroComponent,
    PerfilAnimalComponent,
    FiltrosComponent,
    PerfilComponent,
    HomeAdoptionComponent,
    FooterComponent,
    FormularioComponent,
    EditarPerfilComponent,
    AdopcionComponent,
    PerfilMasComponent,
    MapaComponent,
    EstadoAdopcionComponent,
    AdopcionFiltroComponent,
    FormularioMasComponent
  ],
  //Importamos modulos internos
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(rutasApp, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AplicacionComponent]
})
export class AppModule {
  //Puede ser una clase vacia.
}
