import { Routes } from '@angular/router';

import { Home } from './features/home/home';
import { Sobre } from './features/sobre/sobre';
import { Contato } from './features/contato/contato';
import { Voluntario } from './features/voluntario/voluntario';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'home',
        pathMatch:'full'
    },
    {
        path:'home',
        component: Home
    },
    {
        path:'sobre',
        component: Sobre
    },
    {
        path:'contato',
        component: Contato
    },
    {
        path:'voluntario',
        component: Voluntario
    },
];
