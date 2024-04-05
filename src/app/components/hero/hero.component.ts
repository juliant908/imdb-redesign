import { Component } from '@angular/core';
import { FeatureCardsComponent } from './feature-cards/feature-cards.component';
import { FeatureCardComponent } from './feature-card/feature-card.component';
import { SliderComponent } from './slider/slider.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [FeatureCardsComponent, SliderComponent, FeatureCardComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
