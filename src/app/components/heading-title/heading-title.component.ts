import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading-title',
  imports: [],
  templateUrl: './heading-title.component.html',
  styleUrl: './heading-title.component.css'
})
export class HeadingTitleComponent {
  @Input() titulo: string = '';
}
