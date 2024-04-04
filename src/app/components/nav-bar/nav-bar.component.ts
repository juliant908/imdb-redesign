import { Component } from '@angular/core';
import { navDetail } from '@lib/details';
import { SettingsComponent } from './settings/settings.component';
import { AwardComponent } from '@icons/award.component';
import { HelpComponent } from '@icons/help.component';
import { PeopleComponent } from '@icons/people.component';
import { PlayComponent } from '@icons/play.component';
import { PopcornComponent } from '@icons/popcorn.component';
import { TVComponent } from '@icons/tv.component';
import { LogoComponent } from '@icons/logo.component';
import { SearchComponent } from '@icons/search.component';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [PopcornComponent, TVComponent, PlayComponent, PeopleComponent, HelpComponent, AwardComponent, SettingsComponent, LogoComponent, SearchComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  navMenus = navDetail;
}
