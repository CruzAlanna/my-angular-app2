import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  template: `
    <header>
      <nav>
        <a href="#" onclick="return false;">Photos</a> | <a href="#" onclick="return false;">New Photo</a>
      </nav>
    </header>
  `,
  styles: ``
})
export class Header { }