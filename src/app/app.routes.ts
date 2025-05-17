import { Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';

export const routes: Routes = [
    
    {
        path: '',
        pathMatch: 'full',        
        component: LoginPageComponent
    },
    {
        path: 'home',
        pathMatch: 'full',
        component: HomePageComponent        
    },
    {
        path: 'dashboard',
        pathMatch: 'full',
        component: DashboardPageComponent
    }
];
