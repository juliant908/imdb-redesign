import { Component, Input } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TabsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() title: string = '';
  @Input() subtitle?: string = '';
  @Input() showButtons?: boolean = true;
  @Input() showIcon?: boolean = true;
}
