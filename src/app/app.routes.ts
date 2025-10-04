import { Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { SobreComponent } from './features/sobre/sobre.component';
import { ContatoComponent } from './features/contato/contato.component';
import { VoluntarioComponent } from './features/voluntario/voluntario.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'home',
        pathMatch:'full'
    },
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'sobre',
        component: SobreComponent
    },
    {
        path:'contato',
        component: ContatoComponent
    },
    {
        path:'voluntario',
        component: VoluntarioComponent
    },
];
