import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {
  streamingServices = [
    'Prime Video',
    'Disney+',
    'Hulu',
    'Netflix',
    'HBO Max',
  ]

  selectService(serviceIndex: any) {
    const buttons = document.querySelectorAll('.service-button');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('active');
    }
    buttons[serviceIndex].classList.add('active');
  }
}
