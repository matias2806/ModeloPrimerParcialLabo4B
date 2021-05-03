import { Injectable } from '@angular/core';
import {AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore'
import { Actor } from '../../clases/actor/actor';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  
  private path = '/actores';
  actoresColecction: AngularFirestoreCollection<Actor>;

  constructor(public db: AngularFirestore) { 
    this.actoresColecction = db.collection(this.path);
  }

  altaActor(actor : Actor){
    return this.actoresColecction.add(JSON.parse( JSON.stringify(actor)));
  }
}
