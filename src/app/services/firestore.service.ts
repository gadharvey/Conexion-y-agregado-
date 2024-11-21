import { Injectable } from '@angular/core';
import {collection,addDoc,Firestore} from '@angular/fire/firestore'



export interface Usuario{
  nombre: string;
  apellido: string,
}

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(private firestore: Firestore) { }


  async addUsuario(usuario: Usuario){
    const col= collection(this.firestore,'usuarios');
    const doc= await addDoc(col,usuario)
    return doc;
  }
}
