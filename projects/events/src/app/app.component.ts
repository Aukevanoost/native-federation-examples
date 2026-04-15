import { Component, signal } from '@angular/core';
import { NFEventRegistry } from '@softarc/native-federation-orchestrator/registry';

declare global {
  interface Window {
    __NF_REGISTRY__: NFEventRegistry;
  }
}

@Component({
  selector: 'simple',
  imports: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = signal('Events micro frontend');
  clickCount = signal(0);

  handleClick() {
    if (!window.__NF_REGISTRY__) {
      console.warn('__NF_REGISTRY__ is missing');
      return;
    }
    const count = this.clickCount() + 1;
    this.clickCount.set(count);

    window.__NF_REGISTRY__.emit('events-mfe:clicked', {
      meta: { count },
      component: 'AppComponent',
    });
  }

  handleAction(action: string) {
    if (!window.__NF_REGISTRY__) {
      console.warn('__NF_REGISTRY__ is missing');
      return;
    }

    window.__NF_REGISTRY__.emit('events-mfe:request-action', {
      meta: { action },
      component: 'AppComponent',
    });
  }
}
