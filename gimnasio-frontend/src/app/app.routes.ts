import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { HomeComponent } from './components/home/home.component';
import { TarifasComponent } from './components/tarifas/tarifas.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { LoginComponent } from './components/login/login.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { WebMasterGuard } from './guards/webmaster.guard';
import { AddTipoActividadComponent } from './components/actividades/add-tipo-actividad/add-tipo-actividad.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login',
        canActivate: [AuthenticatedGuard]
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
        title: 'Users Page',
        canActivate: [WebMasterGuard]
    },
    {
        path: 'add-tipo-actividad',
        component: AddTipoActividadComponent,
        title: 'Add Tipo Actividad',
        canActivate: [WebMasterGuard]
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
