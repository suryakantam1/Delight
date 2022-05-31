import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  
  showCart: boolean =  false;
  showCheckout: boolean =  true;
  selectedItems: any[] = [];
  items: any[] = [{"itemName": "Veg Biryani", "itemCost":15, itemQuantity: null},
                  {"itemName": "Veg Manchuria", "itemCost":15, itemQuantity: null},
                  {"itemName": "Veg Pulav", "itemCost":10, itemQuantity: null} ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToCheckout() {
    this.router.navigate(['/checkout'], {state: {data: this.selectedItems}});
  }
  timerExpired() {
    //this.showCart = false;
    this.router.navigate(['/']);
      for(let item of this.items){
        item.itemQuantity = null;
      }
      // this.items.forEach(item => {
      //   item.itemQuantity = null;
      // })
      // this.items.every(item => {
      //   item.itemQuantity = null;
      // })

  }

  updateCartItems(){
    this.selectedItems = [];
    this.items.forEach(item => {
      if(item.itemQuantity){
        this.selectedItems.push(item);
      }
    })
  }
}
