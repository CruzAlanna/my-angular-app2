import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  template: `
    <footer>
      <p>Copyright {{ today | date:'yyyy' }}</p>
    </footer>
  `,
  styles: ``
})
export class Footer {
  today = new Date();
}