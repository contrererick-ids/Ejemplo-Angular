import { Component } from '@angular/core';
import { RegistroUsuario } from '../../../shared/interfaces/registro-usuario';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-usuario',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './crear-usuario.html',
  styleUrl: './crear-usuario.scss',
})

export class CrearUsuario {

  form: FormGroup;

  usuario: RegistroUsuario = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    accept: false
  }

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: '',
      password: '',
      confirm: '',
      accept: [true, Validators.requiredTrue]
    });

  }

  crearUsuario(){
    if(this.form.valid){
      console.log('Se creará la cuenta de ' + this.usuario.email)
    } else {
      alert('Te faltan datos');
    }
  }



}
