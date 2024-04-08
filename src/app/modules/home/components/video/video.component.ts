import { Component, Input } from '@angular/core';
import { TagsComponent } from '@components/tags/tags.component';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [TagsComponent],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent {
  @Input() video: any = {};
}
