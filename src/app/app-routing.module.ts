import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookNowComponent } from './book-now/book-now.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'bookTickets', component: BookNowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
