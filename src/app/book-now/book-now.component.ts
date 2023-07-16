import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { DataSupplyService } from '../sercice/data-supply.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.css']
})
export class BookNowComponent {
  constructor(public dp: DataSupplyService,private router: Router) { }

  bookNow() {
    this.router.navigate(['/finalBookComponent']);
  }
}
