import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { LoginPageComponent } from "./components/login-page/login-page.component";

@Component({
  selector: 'app-root',
  imports: [LoginFormComponent, RouterOutlet, LoginPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `
    <router-outlet />
  `
})
export class AppComponent {
  title = 'desafio07_angular';
}
