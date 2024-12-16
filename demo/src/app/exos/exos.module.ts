import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exo1Component } from './exo1/exo1.component';
import { CodeGeneratorComponent } from './code-generator/code-generator.component';
import { QuoteComponent } from './quote/quote.component';
import { CityChoiceComponent } from './city-choice/city-choice.component';
import { CityCardComponent } from './city-card/city-card.component';

@NgModule({
  declarations: [
    Exo1Component,
    CodeGeneratorComponent,
    QuoteComponent,
    CityChoiceComponent,
    CityCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Exo1Component,
    CodeGeneratorComponent,
    QuoteComponent,
    CityChoiceComponent
  ]
})
export class ExosModule { }
