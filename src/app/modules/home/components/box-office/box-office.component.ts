import { Component, Input } from '@angular/core';
import { BookmarkComponent } from '@icons/bookmark.component';
import { StarComponent, StarFillComponent } from '@icons/star.component';
import { InfoComponent } from '@icons/info.component';

@Component({
  selector: 'app-box-office',
  standalone: true,
  imports: [BookmarkComponent, StarComponent, StarFillComponent, InfoComponent],
  templateUrl: './box-office.component.html',
  styleUrl: './box-office.component.css'
})
export class BoxOfficeComponent {
  @Input() movie: any = {};
}
