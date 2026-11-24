import { Component } from '@angular/core';
import { Pessoa } from './pessoa';

@Component({
  imports: [],
  selector: 'app-pessoa-component',
  styleUrl: './pessoa-component.css',
  templateUrl: './pessoa-component.html',
})
export class PessoaComponent {

  pessoa1:Pessoa={
    nome:'Carla',
    sexo:'feminino',
    dtNasc: '25/10/2002',
    estadoCivil: 'casada'
  }

  pessoa2:Pessoa={
    nome:'Marcos',
    sexo:'masculino',
    dtNasc: '05/08/1980',
    estadoCivil: 'solteiro'
  }
}
