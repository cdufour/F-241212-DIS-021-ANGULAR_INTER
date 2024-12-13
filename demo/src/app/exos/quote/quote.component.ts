import { Component, Input, OnInit } from '@angular/core';
import { Quote } from './quote.interface';

@Component({
  selector: 'exos-quote',
  standalone: false,
  templateUrl: './quote.component.html',
  styles: ``
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    { text: "La femme est l'avenir de l'homme", author: "Aragon"},
    { text: "The world is yours", author: "Montana"},
    { text: "Ad astra per aspera", author: "Inconnu"},
  ];
  private quoteIndex: number = 0;
  selectedQuote: Quote = this.quotes[this.quoteIndex];
  @Input() speed: number = 8000;

  constructor() {
    console.log('*** constructor time ***');
    console.log(this.speed);
  }

  ngOnInit(): void {
    console.log('*** ngOnInit time ***');
    console.log(this.speed);
    
    setInterval(() => {
      this.quoteIndex++;
      if (this.quoteIndex >= this.quotes.length ) {
        this.quoteIndex = 0;
      }
      this.selectedQuote = this.quotes[this.quoteIndex];
    }, this.speed)
  
  }

}
