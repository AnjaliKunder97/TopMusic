import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistcomparisonComponent } from './components/artistcomparison/artistcomparison.component';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'search/:artist-search',
    component: HomeComponent,
  },
  {
    path: 'details/:mbid',
    component: DetailsComponent
  },
  {
    path: 'compare',
    component: ArtistcomparisonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
