import { Component, Input } from '@angular/core';
import { FeatureCardComponent } from '../feature-card/feature-card.component';
import { Cards } from '@lib/cards';
import { ChevronRightComponent } from '@icons/chevron-right.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-feature-cards',
  standalone: true,
  imports: [FeatureCardComponent, ChevronRightComponent, RouterLink],
  templateUrl: './feature-cards.component.html',
  styleUrl: './feature-cards.component.css'
})
export class FeatureCardsComponent {
  @Input() featureCards: any[] = Cards;
}
