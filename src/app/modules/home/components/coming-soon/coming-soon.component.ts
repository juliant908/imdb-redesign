import { Component, Input } from '@angular/core';
import { TagsComponent } from '@components/tags/tags.component';
import { BookmarkComponent } from '@icons/bookmark.component';

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [TagsComponent, BookmarkComponent],
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.css'
})
export class ComingSoonComponent {
  @Input() movie: any = {};
}
