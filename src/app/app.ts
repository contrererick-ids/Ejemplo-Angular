import { Component, signal } from '@angular/core';
import { Header } from './layout/header/header';
import { Button } from './shared/components/button/button'
import { DataTable } from './shared/components/data-table/data-table'
import { User } from './shared/interfaces/user'
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Button, DataTable],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  //protected readonly title = signal('ejemplo-angular');
  nombre = 'Mr. PeanutButter';

  usuarios: User[] | null = null;

  contador = signal(0);

  constructor() {
    setTimeout(() => {
      this.contador.set(10);
      this.usuarios = [
        {
          name: 'Madoka',
          email: 'madoka@chingona.com',
          age: 25
        },
        {
          name: 'Bojack',
          email: 'bjhorseman@horsinaorund.com',
          age: 60
        },
        {
          name: 'Robert',
          email: 'spongebob@krustykrab.com',
          age: 30
        }
      ]
    }, 1000)
  }

  handleClick(){
    this.contador.set(this.contador() + 1);
  }

  customHandleClick(c: number) {
    console.log('Le dieron click a mi hijo!', c);
  }

}
