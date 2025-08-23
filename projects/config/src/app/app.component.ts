import { Component, inject, signal } from '@angular/core';
import { ENV } from './env.config';
import { JsonPipe } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-mfe1',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  protected env = inject(ENV);
  protected title = signal('mfe1');

  protected tagInput = new FormControl('latest');

  constructor() {
    if (this.env?.tag) this.tagInput.setValue(this.env.tag);
  }

  setTag(event: Event) {
    event.preventDefault();
    const tag = this.tagInput.value;
    const storedSettings = localStorage.getItem(
      '__NATIVE_FEDERATION__.settings'
    );

    const settings = JSON.parse(storedSettings ?? '{}');
    localStorage.setItem(
      '__NATIVE_FEDERATION__.settings',
      JSON.stringify({ ...settings, tag })
    );
    location.reload();
  }
}
