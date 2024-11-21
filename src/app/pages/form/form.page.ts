import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms'
import { AddService } from 'src/app/services/firestore.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  constructor(private formbuilder:FormBuilder,private addService: AddService) { }


  formulario= this.formbuilder.group({
    nombre: this.formbuilder.control("",[Validators.required]),
    apellido: this.formbuilder.control("",[Validators.required]),
  })
  
  
// Método para agregar un producto
async add(){
  if(this.formulario.invalid) return; //si el formulario es invalido no hace nada 
  const { nombre,apellido }= this.formulario.value; // se obtiene los valores del formulario
  if(!nombre || !apellido) return; //si el nombre o apellido estan vacios no hace nada 

  console.log(this.formulario.value); // muestra por consola los ingresado

  await this.addService.addUsuario({nombre:nombre,apellido:apellido}); //se hace el llamado del servicio para agreagar al usuario 
}


  ngOnInit() {
  }

}
