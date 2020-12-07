import { ProductService } from './../../../services/product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavServiceService } from 'src/app/services/nav-service.service';



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

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute, private navServ: NavServiceService,) {

  }

  productList: any;
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.categoryLink = params.categoryName;
      this.subCategoryLink = params.subCategoryName;
      this.navServ.navlink.map(v => {
        if (v[1] === this.categoryLink) {
          this.categoryName = v[0];
          v.map(n => {
            for (let m = 0; m < n.length; m++) {
              if (n[m][1] === this.subCategoryLink) {
                this.subCategoryName  = n[m][0]
              }
            }
          })
        };
      })
      this.productService.getProductDetailsList('product/' + this.categoryLink + '/' + this.subCategoryLink);
      this.getProductList();
    }), (err) => console.error(err);
    if (this.subCategoryName === undefined) {
      this.router.navigateByUrl('page-not-found');

    }

  }
  getProductList() {
    this.productService.productDetailList.snapshotChanges().subscribe(list => {
      this.productList = list.map(item => {
        return ({ key: item.payload.key, ...item.payload.val() })
      });
    });

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }





}
