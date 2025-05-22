import { Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { loginGuard } from './guards/login.guard';
import { ComplaintsPageComponent } from './components/complaints-page/complaints-page.component';

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
    },
    {
        path: 'chamados',
        pathMatch: 'full',
        canActivate: [loginGuard],
        component: ComplaintsPageComponent
    }
];
