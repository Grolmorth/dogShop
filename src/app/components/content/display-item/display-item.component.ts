import { MessengerService } from './../../../services/messenger.service';
import { Product } from './../../../services/product';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-display-item',
  templateUrl: './display-item.component.html',
  styleUrls: ['./display-item.component.scss']
})
export class DisplayItemComponent implements OnInit {

  constructor(private msg: MessengerService) { }
  @Input() product: Product;
  category: string;
  subCategory: string;
  name: string;
  id: number;
  ngOnInit(): void {
    this.category = this.product.categoryLink;
    this.subCategory = this.product.subCategoryLink;
    this.name = this.product.nameLink;
    this.id = this.product.id;

  }
  handlerAddToCart() {
    console.log(this.product);
    this.msg.sendMessage(this.product);
  }




}
