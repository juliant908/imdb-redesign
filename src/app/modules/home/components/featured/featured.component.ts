import { Component, Input } from '@angular/core';
import { TagsComponent } from '@components/tags/tags.component';
@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [TagsComponent],
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.css'
})
export class FeaturedComponent {
  @Input() featured: any = {};
}
