import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo:'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./components/login-page/login-page.component')
            .then(c => c.LoginPageComponent);
        },
    },
    {
        path: 'home',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./components/home-page/home-page.component')
            .then(c => c.HomePageComponent);
        },
    },
];
