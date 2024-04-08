import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-celeb',
  standalone: true,
  imports: [],
  templateUrl: './celeb.component.html',
  styleUrl: './celeb.component.css'
})
export class CelebComponent {
  @Input() celeb: any = {};
}
