import { Component } from '@angular/core';

@Component({
  selector: 'exos-code-generator',
  standalone: false,
  template: `
    <div>
      <button (click)="generateCode()">Generate code</button>
      <p *ngIf="code">{{ code }}</p>
    </div>
  `,
  styles: ``
})
export class CodeGeneratorComponent {

  code: number|null = null;
  
  generateCode() {
    // code compris entre 0 et 10000
    let code = Math.round(Math.random() * 10000);
    this.code = code;
  }

}
