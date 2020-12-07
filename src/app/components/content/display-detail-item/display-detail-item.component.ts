import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/services/product';

@Component({
  selector: 'app-display-detail-item',
  templateUrl: './display-detail-item.component.html',
  styleUrls: ['./display-detail-item.component.scss']
})
export class DisplayDetailItemComponent implements OnInit {

  constructor(private productServ: ProductService, private route: ActivatedRoute) { }
  sub: any;
  name: string;
  id: number;

  ngOnInit(): void {
    //subscribe route params
    // this.sub = this.route.params.subscribe(params => {
    //   this.name = params.name;
    //   this.id = params.id;
    //   this.navServ.navlink.map(v => {
    //     if (v[1] === this.categoryLink) {
    //       this.categoryName = v[0];
    //       this.navigation = v[2];
    //     };
    //   })
    //   this.productService.getProductDetailsList('product/' + this.categoryLink);
    //   this.getProductList();
    // }), (err) => console.error(err);
    // if (this.categoryName === undefined) {
    //   this.router.navigateByUrl('page-not-found');

    // }
    this.productServ.getProduct();
  }

}
