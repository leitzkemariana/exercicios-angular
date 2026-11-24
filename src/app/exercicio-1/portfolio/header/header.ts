import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  nome = 'Mari';
  idade = 18;
  email = 'mari@email.com'
}
