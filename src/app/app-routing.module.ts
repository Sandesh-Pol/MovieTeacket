import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookNowComponent } from './book-now/book-now.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FinalBookComponent } from './final-book/final-book.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'bookTickets', component: BookNowComponent},
  { path: 'finalBookComponent', component:FinalBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
