import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-data-table',
  imports: [FormsModule],
  templateUrl: './data-table.html',
  styleUrl: './data-table.scss',
})

export class DataTable {
  @Input() users: User[] | null = null;

  buscar: string = '';

  buscarUsuarios() {
    console.log('Voy a buscar a: ' + this.buscar);
    /* this.users = this.users?.filter(user => user.name == this.buscar ) || this.users?.filter(user => user.email == this.buscar ) ; */

  };
  
  /* buscarUsuarios(Input: HTMLInputElement) {
    console.log('Voy a buscar a: ' + Input.value);
    
  }; */
  
  /* buscarUsuarios() {
    console.log('Voy a buscar a: ' + this.buscar);
    
  }; */

  guardarBuscar(e: KeyboardEvent) {
    const valor = (e.target as HTMLInputElement).value;
    this.buscar = valor;

  }

}
