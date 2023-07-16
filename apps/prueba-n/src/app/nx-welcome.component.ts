import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'liberira-prueba-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  template: `
   
    <p>Aquí supongo pondré algo</p>
    <pruebas-prueba></pruebas-prueba>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
