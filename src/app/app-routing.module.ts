import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaPeliculaComponent } from './components/tabla-pelicula/tabla-pelicula.component';
import { AltaActoresComponent } from './page/alta-actores/alta-actores.component';
import { BienvenidosComponent } from './page/bienvenidos/bienvenidos.component';
import { BusquedapeliculasComponent } from './page/busquedapeliculas/busquedapeliculas.component';

const routes: Routes = [
  { path: '', redirectTo: '/Busqueda', pathMatch: 'full' },
  { path: 'Busqueda', component:  BusquedapeliculasComponent},
  { path: 'Bienvenido', component: BienvenidosComponent },
  { path: 'Tabla', component: TablaPeliculaComponent },
  { path: 'AltaActores', component:  AltaActoresComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
