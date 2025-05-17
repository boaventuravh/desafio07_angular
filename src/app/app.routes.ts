import { Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { loginGuard } from './guards/login.guard';

export const routes: Routes = [
    
    {
        path: '',
        pathMatch: 'full',        
        component: LoginPageComponent
    },
    {
        path: 'home',
        pathMatch: 'full',
        canActivate: [loginGuard],
        component: HomePageComponent        
    },
    {
        path: 'dashboard',
        pathMatch: 'full',
        canActivate: [loginGuard],
        component: DashboardPageComponent
    }
];
