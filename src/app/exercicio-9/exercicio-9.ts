import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-exercicio-9',
  styleUrl: './exercicio-9.css',
  templateUrl: './exercicio-9.html',
})
export class Exercicio9 {
  nomes: string[] = []
  nome: string = ''
  adicionar(){
    this.nomes.push(this.nome)
  }
}
