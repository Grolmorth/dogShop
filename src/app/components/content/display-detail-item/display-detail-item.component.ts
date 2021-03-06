import { MessengerService } from './../../../services/messenger.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../../services/product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-display-detail-item',
  templateUrl: './display-detail-item.component.html',
  styleUrls: ['./display-detail-item.component.scss']
})
export class DisplayDetailItemComponent implements OnInit, OnDestroy {

  quantity = 1;
  buttonDisabled = false;
  constructor(private productServ: ProductService, private route: ActivatedRoute, private msg: MessengerService) { }
  paramSub: Subscription;
  productSub: Subscription;
  categoryLink: string;
  subCategoryLink: string;
  nameLink: string;
  id: number;
  product: Product;


  ngOnInit(): void {
    //subscribe route params to get right items
    this.paramSub = this.route.params.subscribe(params => {
      this.categoryLink = params.categoryLink;
      this.subCategoryLink = params.subCategoryLink;
      this.nameLink = params.nameLink;
      this.id = params.id;
      this.productServ.getProduct(this.categoryLink, this.subCategoryLink)
      this.productSub = this.productServ.file.valueChanges().subscribe(v => {
        v.map(n => {
          // == becouse params convert number to string
          if (n.id == this.id && n.nameLink === this.nameLink) {
            this.product = n;
          }
        });
      });
    })

  }

  ngOnDestroy(): void {

    this.paramSub.unsubscribe();
    this.productSub.unsubscribe();
  }
  handlerAddToCart() {

    this.product.quantity = this.quantity;
    this.msg.sendMessage(this.product);
    this.buttonDisabled = true;
    this.quantity = 1;
    setTimeout(() => {
      this.buttonDisabled = false;
    }, 2000)


  }
}
