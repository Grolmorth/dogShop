import { ProductService } from './../../../services/product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavServiceService } from 'src/app/services/nav-service.service';
import { Product } from 'src/app/services/product';
import { AngularFireList } from '@angular/fire/database';



@Component({
  selector: 'app-sub-category-display',
  templateUrl: './sub-category-display.component.html',
  styleUrls: ['./sub-category-display.component.scss']
})
export class SubCategoryDisplayComponent implements OnInit, OnDestroy {


  sub: any;
  categoryName: any;
  subCategoryName: string;
  categoryLink: string;
  subCategoryLink: string;
  productListRaw: AngularFireList<any>;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute, private navServ: NavServiceService,) { }

  productList: Product[] = [];
  ngOnInit(): void {

    this.sub = this.route.params.subscribe(params => {
      this.categoryLink = params.categoryName;
      this.subCategoryLink = params.subCategoryName;
      this.navServ.navlink.map(v => {
        if (v[1] === this.categoryLink) {
          this.categoryName = v[0];
          v.map(n => {
            for (let m = 0; m < n.length; m++) {
              if (n[m][1] === this.subCategoryLink) {
                this.subCategoryName = n[m][0]
              }
            }
          })
        };
      })
      this.productListRaw = this.productService.getProductList('product/' + this.categoryLink + '/' + this.subCategoryLink);
      this.getProductList();
    }), (err) => console.error(err);
    if (this.subCategoryName === undefined) {
      this.router.navigateByUrl('page-not-found');

    }

  }
  getProductList(): void {
    this.productListRaw.snapshotChanges().subscribe(list => {
      this.productList = list.map(item => {
        return ({ ...item.payload.val() })
      });
    });

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }


}
