import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home-sidebar',
  imports: [CommonModule],
  templateUrl: './home-sidebar.component.html',
  styleUrl: './home-sidebar.component.css'
})

export class HomeSidebarComponent {
    open: boolean;
    sidebarPosition: string;

    constructor(){
      this.open = false;
      this.sidebarPosition = '-translate-x-full';
    }

    toggleSidebar(state: boolean) {
    this.open = state;
    this.sidebarPosition = (state ? 'translate-x-0' : '-translate-x-full')
    }
}
