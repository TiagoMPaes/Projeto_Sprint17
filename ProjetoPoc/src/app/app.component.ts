import { Component } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjetoPoc';
  listaSelecionado: string[] = [];

  onClick(i)
  {
    if (!this.items[i].toggle)
    {
      this.listaSelecionado.push(this.items[i].a);
    } else {
      const position =  this.listaSelecionado.findIndex(x => x === this.items[i].a);
      if(this.listaSelecionado.length > 0  && this.listaSelecionado.length <= 1)
      {
        this.listaSelecionado.splice(0, this.listaSelecionado[0].length);
      } else {
      this.listaSelecionado.splice(position, position);
      }
    }
    this.items[i].toggle = !this.items[i].toggle;
    console.log(this.listaSelecionado);
  }

  items: any = [
    {
      a: 'a',
      toggle: false
    },
    {
      a: 'B',
      toggle: false
    },
    {
      a: 'C',
      toggle: false
    },
    {
      a: 'D',
      toggle: false
    },
    {
      a: 'e',
      toggle: false
    },
    {
      a: 'f',
      toggle: false
    },
    {
      a: 'e',
      toggle: false
    },
    {
      a: 'f',
      toggle: false
    },
    {
      a: 'e',
      toggle: false
    },
    {
      a: 'f',
      toggle: false
    },
    {
      a: 'e',
      toggle: false
    },
    {
      a: 'f',
      toggle: false
    },
    {
      a: 'e',
      toggle: false
    },
    {
      a: 'f',
      toggle: false
    },
    {
      a: 'e',
      toggle: false
    },
    {
      a: 'f',
      toggle: false
    },
    {
      a: 'e',
      toggle: false
    },
    {
      a: 'f',
      toggle: false
    },
    {
      a: 'e',
      toggle: false
    },
    {
      a: 'f',
      toggle: false
    },
    {
      a: 'e',
      toggle: false
    },
    {
      a: 'f',
      toggle: false
    },
    {
      a: 'e',
      toggle: false
    },
    {
      a: 'f',
      toggle: false
    },
    {
      a: 'e',
      toggle: false
    },
    {
      a: 'f',
      toggle: false
    },
    {
      a: 'e',
      toggle: false
    },
    {
      a: 'f',
      toggle: false
    },
    {
      a: 'e',
      toggle: false
    },
    {
      a: 'f',
      toggle: false
    },
    {
      a: 'e',
      toggle: false
    },
    {
      a: 'f',
      toggle: false
    },
    {
      a: 'e',
      toggle: false
    },
    {
      a: 'f',
      toggle: false
    },
    {
      a: 'e',
      toggle: false
    },
    {
      a: 'f',
      toggle: false
    },
    {
      a: 'e',
      toggle: false
    },
    {
      a: 'f',
      toggle: false
    },
    {
      a: 'e',
      toggle: false
    },
    {
      a: 'f',
      toggle: false
    },
    {
      a: 'e',
      toggle: false
    },
    {
      a: 'f',
      toggle: false
    },
    {
      a: 'e',
      toggle: false
    },
    {
      a: 'f',
      toggle: false
    },
    {
      a: 'e',
      toggle: false
    },
    {
      a: 'f',
      toggle: false
    },
    {
      a: 'e',
      toggle: false
    },
    {
      a: 'f',
      toggle: false
    }
  ];
}
