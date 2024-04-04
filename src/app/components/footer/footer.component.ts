import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { ArrowUpRightComponent } from '@icons/arrow-up-right.component';
import { IgComponent } from '@icons/ig.component';
import { XComponent } from '@icons/x.component';
import { YoutubeComponent } from '@icons/youtube.component';
import { FacebookComponent } from '@icons/facebook.component';
import { TiktokComponent } from '@icons/tiktok.component';
import { footerDetail } from '@lib/details';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ArrowUpRightComponent, NgClass, IgComponent, XComponent, YoutubeComponent, FacebookComponent, TiktokComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  footerMenus = footerDetail;

}
