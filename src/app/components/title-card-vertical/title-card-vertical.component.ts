import { Component } from '@angular/core';
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

}
