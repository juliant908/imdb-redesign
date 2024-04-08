import { Component, OnInit } from '@angular/core';
import { HeroComponent } from '@components/hero/hero.component';
import { ContentComponent } from '../../modules/home/components/content/content.component';
import { sections } from '@lib/contents';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  sections = sections
}
