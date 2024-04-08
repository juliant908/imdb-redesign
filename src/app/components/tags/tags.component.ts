import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { GalleryComponent } from '@icons/gallery.component';
import { ListComponent } from '@icons/list.component';
import { TrailerPlayComponent } from '@icons/play.component';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [NgClass, GalleryComponent, ListComponent, TrailerPlayComponent],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {
  @Input() tagTitle: string = '';
  @Input() bgColor: string = '';
  @Input() icon?: string = '';
}
