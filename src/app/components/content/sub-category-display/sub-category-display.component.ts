import { ProductService } from './../../../services/product.service';
import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-sub-category-display',
  templateUrl: './sub-category-display.component.html',
  styleUrls: ['./sub-category-display.component.scss']
})
export class SubCategoryDisplayComponent implements OnInit, OnDestroy {


  sub: any;
  category: string;
  subCategory: string;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) {

  }

  productList: any;
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.category = params.categoryName;
      this.subCategory = params.subCategoryName;
      this.productService.getProductDetailsList('product/' + this.category + '/' + this.subCategory);
      this.getProductList();
    }), (err) => console.error(err);

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
