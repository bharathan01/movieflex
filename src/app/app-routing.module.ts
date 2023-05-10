import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home_page/home/home.component';

const routes: Routes = [{ path: 'moviereview', loadChildren: () => import('./moviereview/moviereview.module').then(m => m.MoviereviewModule) },
{ path:'' ,component :HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
