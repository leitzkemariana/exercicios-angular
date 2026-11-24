import { Component } from '@angular/core';
import { Main } from '../exercicio-2/main/main';
import { Footer } from '../exercicio-2/footer/footer';
import { Navbar } from '../exercicio-2/navbar/navbar';
import { Header } from '../exercicio-2/header/header';

@Component({
  imports: [Footer, Main, Navbar, Header],
  selector: 'app-exercicio-2',
  styleUrl: './exercicio-2.css',
  templateUrl: './exercicio-2.html',
})
export class Exercicio2 {}
