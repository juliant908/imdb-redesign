import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TitleCardHorizontalComponent } from '@components/title-card-horizontal/title-card-horizontal.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: TitleCardHorizontalComponent
  }
];
