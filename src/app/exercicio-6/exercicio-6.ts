import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-exercicio-6',
  styleUrl: './exercicio-6.css',
  templateUrl: './exercicio-6.html',
})
export class Exercicio6 {
  num: number = 0;
  somar(){
    if (this.num != 10){
      this.num = this.num + 1;
    } else{
      this.num = 0;
    }
  }

  zerar(){
    this.num = 0;
  }
}