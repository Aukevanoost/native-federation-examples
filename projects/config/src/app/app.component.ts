import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ENV } from './env.config';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-mfe1',
  imports: [JsonPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  env = inject(ENV);
  title = signal('mfe1');
}
