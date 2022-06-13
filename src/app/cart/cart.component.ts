import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

 nations: any[] = [];

  @Input()
  cartItems: any[] = [];
  goBack: boolean = false;

  @Output()
  timer = new EventEmitter<boolean>();

  constructor(private cartService: CartService) { 
    this.cartService.getData().subscribe(data =>{console.log(data)
    this.nations=data.data})
  }
  
  ngOnInit(): void {

    setTimeout(() =>{
      this.timer.emit();
    }, 5000);


    const self = this;
    setTimeout(function(){
      self.timer.emit();
    }, 5000);

    
  }

}
