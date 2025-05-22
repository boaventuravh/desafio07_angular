import { Component } from '@angular/core';
import { HomeWelcomeComponent } from "../home-welcome/home-welcome.component";
import { HomeSidebarComponent } from "../home-sidebar/home-sidebar.component";
import { HeadingTitleComponent } from "../heading-title/heading-title.component";

@Component({
  selector: 'app-home-page',
  imports: [HomeWelcomeComponent, HomeSidebarComponent, HeadingTitleComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
