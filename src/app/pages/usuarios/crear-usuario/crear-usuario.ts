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
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm: ['', [Validators.required, Validators.minLength(8)]],
      accept: [true, Validators.requiredTrue]
    }, {
      validators: () => this.matchPasswords()
      // Para poder acceder a los atributos de la clase desde el validador, debemos hacer un bind del contexto de this
      //validators: [this.matchPasswords.bind(this)]
      // Las funciones de flecha no cambian el contexto por lo que el scope de this se mantiene y podemos acceder a los atributos de la clase
      //validators: [() => this.matchPasswords()]
      // La diferencia entre .apply y .call es que .apply recibe un arreglo de argumentos y .call recibe los argumentos separados por comas
      //validators: [this.matchPasswords.apply(this)]
      //validators: [this.matchPasswords.call(this)]
    });

  }

  crearUsuario(){
    if(this.form.valid){
      const { confirm, accept, ...datos} = this.form.getRawValue();
      console.log('Se creará la cuenta de ', datos);
    } else {
      alert('Te faltan datos');
      // el patchValue es para actualizar los valores del formulario, en este caso estamos actualizando el valor del campo password para dejarlo vacío si existe un error de validación en el campo confirm, esto es para que el usuario tenga que volver a escribir la contraseña y no se quede con la contraseña anterior que no coincide con la confirmación
      this.form.patchValue({ password: '' });
    }
  }

  matchPasswords() {
    if(!this.form)
      return null;
    const { password, confirm } = this.form.getRawValue();
    if (password === confirm) {
      return null;
    } else {
      return { mismatch: true };
    }
  }

}
