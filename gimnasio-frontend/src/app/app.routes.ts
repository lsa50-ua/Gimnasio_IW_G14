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
import { EditTipoActividadComponent } from './components/actividades/edit-tipo-actividad/edit-tipo-actividad.component';
import { EditWebmasterComponent } from './components/users/edit-user/edit-webmaster/edit-webmaster.component';
import { EditSocioComponent } from './components/users/edit-user/edit-socio/edit-socio.component';
import { EditMonitorComponent } from './components/users/edit-user/edit-monitor/edit-monitor.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { SaldoComponent } from './components/saldo/saldo.component';

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
        path: 'add-user',
        component: AddUserComponent,
        title: 'Add User',
        canActivate: [WebMasterGuard]
    },
    {
        path: 'edit-WebMaster/:id',
        component: EditWebmasterComponent,
        title: 'Edit Webmaster',
        canActivate: [WebMasterGuard]
    },
    {
        path: 'edit-Socio/:id',
        component: EditSocioComponent,
        title: 'Edit Socio',
        canActivate: [WebMasterGuard]
    },
    {
        path: 'edit-Monitor/:id',
        component: EditMonitorComponent,
        title: 'Edit Monitor',
        canActivate: [WebMasterGuard]
    },
    {
        path: 'add-tipo-actividad',
        component: AddTipoActividadComponent,
        title: 'Add Tipo Actividad',
        canActivate: [WebMasterGuard]
    },
    {
        path: 'edit-tipo-actividad/:id',
        component: EditTipoActividadComponent,
        title: 'Edit Tipo Actividad',
        canActivate: [WebMasterGuard]
    },
    {
        path: 'saldo',
        component: SaldoComponent,
        title: 'Ver Saldo',
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
