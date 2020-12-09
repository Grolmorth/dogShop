import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../../services/product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'src/app/services/product';

@Component({
  selector: 'app-display-detail-item',
  templateUrl: './display-detail-item.component.html',
  styleUrls: ['./display-detail-item.component.scss']
})
export class DisplayDetailItemComponent implements OnInit, OnDestroy {

  constructor(private productServ: ProductService, private route: ActivatedRoute) { }
  paramSub: any;
  productSub: any;
  categoryLink: string;
  subCategoryLink: string;
  nameLink: string;
  id: number;
  product: Product;


  ngOnInit(): void {
    //subscribe route params
    this.paramSub = this.route.params.subscribe(params => {
      this.categoryLink = params.categoryLink;
      this.subCategoryLink = params.subCategoryLink;
      this.nameLink = params.nameLink;
      this.id = params.id;
    })
    this.productServ.getProduct(this.categoryLink, this.subCategoryLink)
    this.productSub = this.productServ.file.valueChanges().subscribe(v => {
      v.map(n => {
        if (n.id === this.id && n.nameLink === this.nameLink) {
          this.product = n;
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.paramSub.unsubscribe();
    this.productSub.unsubscribe();
  }
}
