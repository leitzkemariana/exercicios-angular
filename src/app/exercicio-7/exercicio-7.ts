import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-exercicio-7',
  styleUrl: './exercicio-7.css',
  templateUrl: './exercicio-7.html',
})
export class Exercicio7 {
  status: string='logado';

  mudarStatus(){
    if (this.status === 'logado'){
      this.status = 'deslogado';
    }else{
      this.status = 'logado';
    }
  }
}
