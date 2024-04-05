import { Component } from '@angular/core';
import { BookmarkComponent } from '@icons/bookmark.component';
import { StarComponent, StarFillComponent } from '@icons/star.component';
import { InfoComponent } from '@icons/info.component';
import { TagsComponent } from '@components/tags/tags.component';

@Component({
  selector: 'app-title-card-horizontal',
  standalone: true,
  imports: [BookmarkComponent, StarComponent, StarFillComponent, InfoComponent, TagsComponent],
  templateUrl: './title-card-horizontal.component.html',
  styleUrl: './title-card-horizontal.component.css'
})
export class TitleCardHorizontalComponent {
  tags = ['Action', 'Adventure', 'Sci-Fi'];
}
