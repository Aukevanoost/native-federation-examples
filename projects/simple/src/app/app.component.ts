import { Component, signal } from '@angular/core';

@Component({
  selector: 'simple',
  imports: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = signal('Simple micro frontend');
}
