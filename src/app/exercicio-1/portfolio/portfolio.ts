import { Component } from '@angular/core';
import { Header } from './header/header';
import { Main } from './main/main';
import { Footer } from '../portfolio/footer/footer';

@Component({
  imports: [Header, Main, Footer],
  selector: 'app-portfolio',
  styleUrl: './portfolio.css',
  templateUrl: './portfolio.html',
})
export class Portfolio {}
