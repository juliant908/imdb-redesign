import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '@components/nav-bar/nav-bar.component';
import { FooterComponent } from '@components/footer/footer.component';
import { TitleCardVerticalComponent } from '@components/title-card-vertical/title-card-vertical.component';
import { TitleCardHorizontalComponent } from '@components/title-card-horizontal/title-card-horizontal.component';
import { HeroComponent } from '@components/hero/hero.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, FooterComponent, TitleCardVerticalComponent, TitleCardHorizontalComponent, HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'imdb-redesign';
}
