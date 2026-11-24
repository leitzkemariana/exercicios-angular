import { Component } from '@angular/core';
import { Mercado } from './mercado';

@Component({
  imports: [],
  selector: 'app-mercado-component',
  styleUrl: './mercado-component.css',
  templateUrl: './mercado-component.html',
})
export class MercadoComponent {
  unidadeDeBlumenau:Mercado={
    nome:'Mercado Blumenau',
    numMaca: 1450,
    precoMaca: 1.50,
    numLaranja: 1600,
    precoLaranja: 2
  };

  totalMacasBnu:number = this.unidadeDeBlumenau.numMaca*this.unidadeDeBlumenau.precoMaca;
  totalLaranjasBnu:number = this.unidadeDeBlumenau.numLaranja*this.unidadeDeBlumenau.precoLaranja;

  unidadeDeJoinville:Mercado={
    nome:'Mercado Joinville',
    numMaca: 1600,
    precoMaca: 1,
    numLaranja: 1800,
    precoLaranja: 1.50
  };

  totalMacasJvl:number = this.unidadeDeJoinville.numMaca*this.unidadeDeJoinville.precoMaca;
  totalLaranjasJvl:number = this.unidadeDeJoinville.numLaranja*this.unidadeDeJoinville.precoLaranja;

  unidadeDeFlorianopolis:Mercado={
    nome:'Mercado Florianopolis',
    numMaca: 1350,
    precoMaca: 2,
    numLaranja: 1400,
    precoLaranja: 3.99
  };

  totalMacasFlp:number = this.unidadeDeFlorianopolis.numMaca*this.unidadeDeFlorianopolis.precoMaca;
  totalLaranjasFlp:number = this.unidadeDeFlorianopolis.numLaranja*this.unidadeDeFlorianopolis.precoLaranja;
}
