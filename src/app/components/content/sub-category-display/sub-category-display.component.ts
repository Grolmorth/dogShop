import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sub-category-display',
  templateUrl: './sub-category-display.component.html',
  styleUrls: ['./sub-category-display.component.scss']
})
export class SubCategoryDisplayComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) {
    router.events.pipe(filter(event => event instanceof ActivationEnd)).subscribe((event:ActivationEnd) =>  {
      console.log(event.snapshot.params.categoryName);
      console.log(event.snapshot.params.subCategoryName);

    })
  }

  productList: any;
  ngOnInit(): void {
    this.productService.getProductDetailsList('product');
    this.productService.productDetailList.snapshotChanges().subscribe(v => {
      console.log(v)
    })

  }

}
