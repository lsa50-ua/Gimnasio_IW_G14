import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { HomeComponent } from './components/home/home.component';
import { TarifasComponent } from './components/tarifas/tarifas.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { LoginComponent } from './components/login/login.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ActividadesComponent } from './components/actividades/actividades.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login'
    },
    {
        path: 'tarifas',
        component: TarifasComponent,
        title: 'Tarifas'
    },
    {
        path: 'actividades',
        component: ActividadesComponent,
        title: 'Actividades'
    },
    {
        path: 'quienes-somos',
        component: QuienesSomosComponent,
        title: 'Quienes Somos'
    },
    {
        path: 'contacto',
        component: ContactoComponent,
        title: 'Contacto'
    },
    {
        path: 'users',
        component: UsersComponent,
        title: 'Users Page'
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
