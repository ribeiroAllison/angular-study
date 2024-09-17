import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items : WishItem[] = [
    // new WishItem('To Learn Angular'),
    // new WishItem('Get Coffe', true),
    // new WishItem('Be Rich', false),
  ];

  title = 'my wishlist';

  newWishText = ""

  addNewWish() {
    this.items.push(new WishItem(this.newWishText))
    this.newWishText= ""
  }

  toogleItem(item : WishItem){
    item.isComplete = !item.isComplete
    console.log(item)
  };
}
