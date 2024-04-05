import { Component, Input } from '@angular/core';
import { TitleCardVerticalComponent } from '@components/title-card-vertical/title-card-vertical.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [TitleCardVerticalComponent, HeaderComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  @Input() title: string = '';
  @Input() subtitle?: string = '';
  @Input() showButtons?: boolean = true;
  @Input() showIcon?: boolean = true;

  topThisWeek = Array(6).fill(null).map((_, i) => i);
}
