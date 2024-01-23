import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-xv-condiciones-laborales',
  templateUrl: './xv-condiciones-laborales.component.html',
  styleUrls: ['./xv-condiciones-laborales.component.css'],
  animations: [
    trigger('fadeInAnimation', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s ease-in'),
      ]),
    ]),
  ],
})
export class XvCondicionesLaboralesComponent {
  selectedCard: string = '';

  toggleCard(card: string) {
    this.selectedCard = this.selectedCard === card ? '' : card;
  }
}
