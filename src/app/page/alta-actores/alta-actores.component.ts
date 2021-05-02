import { Component, Input, OnInit } from '@angular/core';
import { PaisService } from 'src/app/services/pais/pais.service';
import { Pais } from '../../clases/pais/pais';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-alta-actores',
  templateUrl: './alta-actores.component.html',
  styleUrls: ['./alta-actores.component.css']
})
export class AltaActoresComponent implements OnInit {

  listadoPaises!:any[];
  paisSeleccionado!:Pais;
  public formGroup!: FormGroup;

  constructor(private _Pservice: PaisService, private fb:FormBuilder,) {
    this.listadoPaises = [];
   }

   // async ngOnInit() {
  //   OPCION 2
  //   await this.Pservice.todos().then((res: any) => {
  //     console.log(res);
  //   });
  // }
  
  ngOnInit(): void {
    this._Pservice.todos().subscribe((paises)=>{
     
      this.listadoPaises = JSON.parse(JSON.stringify(paises));
      console.log(paises);
    });

    this.formGroup = this.fb.group({
      'nombre': ['',[Validators.required]],
      'apellido': ['',Validators.required],
      'telefono': ['',[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]],
      'email': ['',[Validators.required,Validators.email]],
      'nacionalidad':[{value: '', disabled: true},this.validarNombrePais],
    });
    console.log(this.formGroup);
  }

  validarNombrePais(control: AbstractControl):null | object{

    
    const nombre = <string>control.value;
    console.log(nombre);
    if(nombre != null){
      return {
        valido: true
      }
    }
    else{
      return null;
    }
  }
  

  cargarPaisSeleccionado(pais:Pais){
    console.info(pais);
    this.paisSeleccionado = pais;
    
    // console.info(this.peliculaSeleccionada);
  }

  altaActor(){
    console.log("hola");
  }

  prueba(){

  }
}
