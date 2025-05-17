import { Component } from '@angular/core';
import { HomeWelcomeComponent } from "../home-welcome/home-welcome.component";

@Component({
  selector: 'app-home-page',
  imports: [HomeWelcomeComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
