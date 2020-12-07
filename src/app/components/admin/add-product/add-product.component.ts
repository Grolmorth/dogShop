import { NavServiceService } from './../../../services/nav-service.service';
import { ProductService } from './../../../services/product.service';
import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit, DoCheck {

  categoryList: any;
  subCategoryList: any

  constructor(private productService: ProductService, private categories: NavServiceService) { }

  formTemplate = new FormGroup({
    nameDisplay: new FormControl('', Validators.required),
    categoryDisplay: new FormControl('', Validators.required),
    subCategoryDisplay: new FormControl('', Validators.required),
    info: new FormControl('', Validators.required),
    id: new FormControl('', Validators.required),

  });
  ngOnInit(): void {
    this.categoryList = this.categories.navlink.map(category => {
      return category;
    })
  }
  ngDoCheck(): void {
    // get subcategory list when picking category
    const categoryName = this.formTemplate.value['categoryDisplay'];
    this.categories.navlink.map(category => {
      if (category[0] === categoryName) {
        this.subCategoryList = [];
        for (let n = 0; n < category[2].length; n++) {
          this.subCategoryList[n] = category[2][n];
        }
      };
    })

  }
  onSubmit(formValue) {
    this.sendAndReset(formValue)
  }
  sendAndReset(formValue) {
    this.productService.insertProductDetails(formValue);

  }
}
