import { Product } from 'src/app/models/product';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  constructor() { }
  editProduct: Product;
  formTemplate = new FormGroup({
    info: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{0,7}[.][0-9]{1,2}')]),
  });
  ngOnInit(): void {
    this.editProduct = JSON.parse(localStorage.getItem('editProduct'))
    this.formTemplate.patchValue({
      info: this.editProduct.info,
      price: this.editProduct.price
    })
  }
  onSubmit(formValue) {
    this.editProduct.info = formValue.info;
    this.editProduct.price = formValue.price;
    this.sendAndReset();
  }
  sendAndReset() {
    console.log(this.editProduct)
    this.reset();
  }
  reset() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      info: '',
      price: '',
    })
    localStorage.removeItem('editProduct');

  }

}
