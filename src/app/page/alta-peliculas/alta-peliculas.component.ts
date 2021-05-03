import { Component, Input, OnInit } from '@angular/core';
import { ActorService } from 'src/app/services/actor/actor.service';
import { Actor } from '../../clases/actor/actor';
import { Pais } from '../../clases/pais/pais';
import { Pelicula } from '../../clases/pelicula/pelicula';

@Component({
  selector: 'app-alta-peliculas',
  templateUrl: './alta-peliculas.component.html',
  styleUrls: ['./alta-peliculas.component.css']
})
export class AltaPeliculasComponent implements OnInit {

  listadoActores!: Actor[];
  actorSeleccionado!:Actor;
  constructor(private _Aservice: ActorService) { }

  ngOnInit(): void {
    this._Aservice.traerTodos().subscribe((actores: Actor[])=>{
      console.log(actores);
      this.listadoActores = actores;
    });

  }

  cargarActorSeleccionado(actor:Actor){
    console.info(actor);
    this.actorSeleccionado = actor;
  }

}
