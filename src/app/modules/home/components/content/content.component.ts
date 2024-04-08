import { Component, Input } from '@angular/core';
import { TitleCardVerticalComponent } from '@components/title-card-vertical/title-card-vertical.component';
import { TitleCardHorizontalComponent } from '@components/title-card-horizontal/title-card-horizontal.component';
import { FeaturedComponent } from '../featured/featured.component';
import { VideoComponent } from '../video/video.component';
import { CelebComponent } from '../celeb/celeb.component';
import { ComingSoonComponent } from '../coming-soon/coming-soon.component';
import { BoxOfficeComponent } from '../box-office/box-office.component';
import { NewsComponent } from '../news/news.component';
import { HeaderComponent } from './header/header.component';
import { contents } from '@lib/contents';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [TitleCardVerticalComponent, HeaderComponent, FeaturedComponent, VideoComponent, CelebComponent, ComingSoonComponent, TitleCardHorizontalComponent, BoxOfficeComponent, NewsComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  @Input() title: string = '';
  @Input() subtitle?: string = '';
  @Input() showButtons?: boolean = true;
  @Input() showIcon?: boolean = true;
  @Input() contents: any = contents;
  @Input() contentType: string = '';

}
