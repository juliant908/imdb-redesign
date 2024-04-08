import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { TrailerPlayComponent } from '@icons/play.component';
@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [NgStyle, TrailerPlayComponent],
  templateUrl: './feature-card.component.html',
  styleUrl: './feature-card.component.css'
})
export class FeatureCardComponent {
  @Input() bgImageUrl: string = '/assets/images/dune2.png';
  @Input() cardImageUrl: string = '/assets/images/all-about.png';
  @Input() title: string = 'Welcome to the Apocalypse!';
  @Input() subtitle: string = 'Watch the new “Fallout” Trailer';
}
