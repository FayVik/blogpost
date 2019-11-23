import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { SingleViewComponent } from './single-view/single-view.component';

const routes: Routes = [
  { path: '', component: ViewComponent },
  { path: 'single-view/:slug', component: SingleViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
