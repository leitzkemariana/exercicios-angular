import { Routes } from '@angular/router';
import { Exercicio1 } from './exercicio-1/exercicio-1';
import { Exercicio2 } from './exercicio-2/exercicio-2';
import { Exercicio4 } from './exercicio-4/exercicio-4';
import { Exercicio5 } from './exercicio-5/exercicio-5';
import { Exercicio6 } from './exercicio-6/exercicio-6';
import { Exercicio7 } from './exercicio-7/exercicio-7';
import { Exercicio8 } from './exercicio-8/exercicio-8';
import { Exercicio9 } from './exercicio-9/exercicio-9';

export const routes: Routes = [
    {path: 'exercicio-1', component: Exercicio1},
    {path: 'exercicio-2', component: Exercicio2},
    {path: 'exercicio-4', component: Exercicio4},
    {path: 'exercicio-5', component: Exercicio5},
    {path: 'exercicio-6', component: Exercicio6},
    {path: 'exercicio-7', component: Exercicio7},
    {path: 'exercicio-8', component: Exercicio8},
    {path: 'exercicio-9', component: Exercicio9}
];
