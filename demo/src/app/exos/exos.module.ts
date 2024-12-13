import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exo1Component } from './exo1/exo1.component';
import { CodeGeneratorComponent } from './code-generator/code-generator.component';
import { QuoteComponent } from './quote/quote.component';

@NgModule({
  declarations: [
    Exo1Component,
    CodeGeneratorComponent,
    QuoteComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Exo1Component,
    CodeGeneratorComponent,
    QuoteComponent
  ]
})
export class ExosModule { }
