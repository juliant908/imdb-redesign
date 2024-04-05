import { Component } from '@angular/core';
import { HeroComponent } from '@components/hero/hero.component';
import { ContentComponent } from '../../modules/home/components/content/content.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  contents = [
    {
      title: 'Featured today',
    },
    {
      title: 'Top picks',
      subtitle: 'TV shows and movies just for you',
      showIcon: true,
    },
    {
      title: 'Top on IMDb this week',
      subtitle: 'TV shows and movies just for you',
    },
    {
      title: 'IMDb Originals',
      subtitle: 'Celebrity interviews, trending entertainment stories, and expert analysis'
    },
    {
      title: ''
    },
    {
      title: 'Top box office (US)',
      subtitle: 'Weekend of March 8-10',
      showIcon: true,
    },
    {
      title: 'Coming soon to theaters',
      subtitle: 'Trailers for Upcoming Releases',
      showIcon: true,
    },
    {
      title: 'Born Today',
      subtitle: 'People born on October 12',
      showIcon: true,
    },
    {
      title: 'Top News',
      showIcon: true,
    }
  ]
}
