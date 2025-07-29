import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: false,
  template: `
    <div *ngIf="show" class="modal-background">
      <section class="modal-main">
        <ng-content></ng-content>
        <button class="close" type="button" (click)="close.emit()">
          &#x2715;
        </button>
      </section>
    </div>
  `,
  styles: [`
    .modal-background {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width:100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      z-index: 1000;
    }

    .modal-main {
      position: fixed;
      background: white;
      width: 80%;
      height: auto;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      padding: 1em;
    }

    .modal-main button.close {
      font-size: 2em;
      background: none;
      border: none;
      position: absolute;
      top: 0em;
      right: 0.2em;
    }
  `]
})
export class ModalComponent {
  @Input() show: boolean = false;
  @Output() close = new EventEmitter();
}