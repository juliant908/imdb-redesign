import { Component } from '@angular/core';
import { WatchlistComponent } from '@icons/watchlist.component';
import { UserComponent } from '@icons/user.component';
import { LightComponent } from '@icons/light.component';
@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [WatchlistComponent, UserComponent, LightComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

}
