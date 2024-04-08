import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  template: `
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M22.5 16V4C22.5 2.9 21.6 2 20.5 2L8.5 2C7.4 2 6.5 2.9 6.5 4L6.5 16C6.5 17.1 7.4 18 8.5 18H20.5C21.6 18 22.5 17.1 22.5 16ZM11.9 12.53L13.53 14.71L16.11 11.49C16.31 11.24 16.69 11.24 16.89 11.49L19.85 15.19C20.11 15.52 19.88 16 19.46 16H9.5C9.09 16 8.85 15.53 9.1 15.2L11.1 12.53C11.3 12.27 11.7 12.27 11.9 12.53ZM2.5 7L2.5 20C2.5 21.1 3.4 22 4.5 22H17.5C18.05 22 18.5 21.55 18.5 21C18.5 20.45 18.05 20 17.5 20H5.5C4.95 20 4.5 19.55 4.5 19L4.5 7C4.5 6.45 4.05 6 3.5 6C2.95 6 2.5 6.45 2.5 7Z"
            fill="#C3C3C3" />
        </svg>
  `,
  styles: ``
})
export class GalleryComponent {

}
