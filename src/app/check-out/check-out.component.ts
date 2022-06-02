import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  cartItems: any[] = history.state.data; 
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  timerExpired() {
    //this.showCart = false;
    this.router.navigate(['/']);
      // for(let item of this.cartItems){
      //   item.itemQuantity = null;
      // }
    }

}
