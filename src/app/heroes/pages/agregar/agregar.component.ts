import { Component } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {

  publishers = [

    { id: 'DC Comics',
      desc: 'DC - Comics'
    },

    { id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    },

  ]

  heroe : Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  }

  //insercion de servicios

  constructor(){

  }

  ngOnInit() : void {

  }

  guardar () {
    //verifico el objeto
    console.log(this.heroe);

    //Podemos hacer alguna validacion, para que el objeto no este vacio

    if (this.heroe.superhero.trim().length === 0) {
      return
    }

  }

}
