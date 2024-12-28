import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
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
