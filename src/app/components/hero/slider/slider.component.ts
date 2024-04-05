import { Component } from '@angular/core';
import { TrailerPlayComponent } from '@icons/play.component';
import { BookmarkComponent } from '@icons/bookmark.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [TrailerPlayComponent, NgClass, BookmarkComponent],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {

}
