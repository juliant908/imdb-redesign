import { Component, Input } from '@angular/core';
import { StarComponent, StarFillComponent } from '@icons/star.component';
import { InfoComponent } from '@icons/info.component';
import { TrailerPlayComponent } from '@icons/play.component';
import { BookmarkComponent } from '@icons/bookmark.component';

@Component({
  selector: 'app-title-card-vertical',
  standalone: true,
  imports: [StarComponent, StarFillComponent, InfoComponent, TrailerPlayComponent, BookmarkComponent],
  templateUrl: './title-card-vertical.component.html',
  styleUrl: './title-card-vertical.component.css'
})
export class TitleCardVerticalComponent {
  @Input() movie: any = {
    cover: '/assets/images/tlou.png',
    title: 'The Last Of Us',
    rating: 8.9};
}
