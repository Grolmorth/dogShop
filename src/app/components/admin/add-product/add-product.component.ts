import { NavServiceService } from './../../../services/nav-service.service';
import { ProductService } from './../../../services/product.service';
import { Component, DoCheck, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit, DoCheck {

  categoryList: any;
  subCategoryList: any;
  imgSrc: string = 'assets/default-image.jpg';
  selectedImage: any;

  constructor(private productService: ProductService, private categories: NavServiceService, private storage: AngularFireStorage) { }

  formTemplate = new FormGroup({
    nameDisplay: new FormControl('', Validators.required),
    categoryDisplay: new FormControl('', Validators.required),
    subCategoryDisplay: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required),
    info: new FormControl('', Validators.required),
    id: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    price: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    company: new FormControl('', Validators.required),


  });
  ngOnInit(): void {
    // get category list
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
  //send data to service, and then reset
  sendAndReset(formValue) {
    let filePath = `${this.replaceChar(formValue.categoryDisplay)}/${this.replaceChar(this.selectedImage.name)}-${new Date().getTime()}`
    let fileRef = this.storage.ref(filePath);
    this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          formValue.imageUrl = url;
          formValue.fileRef = filePath;
          this.productService.insertProductDetails(formValue);
          this.reset();
        })
      })).subscribe()



  }
  //show images after picking them
  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }
  }
  //reset form
  reset() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      nameDisplay: '',
      categoryDisplay: '',
      subCategoryDisplay: '',
      imageUrl: '',
      info: '',
      company: '',
      id: '',
      price: '',
    })
    this.selectedImage = null;
    this.imgSrc = 'assets/default-image.jpg';
  }
  //replace polish letters, replace space
  replaceChar(val) {
    let value = val.toLowerCase();
    const chars = [[' ', '-'], ['ą', 'a'], ['ę', 'e'], ['ć', 'c'], ['ł', 'l'], ['ń', 'n'], ['ó', 'o'], ['ś', 's'], ['ż', 'z'], ['ź', 'z']];
    for (let n = 0; n < chars.length; n++) {
      value = value.replaceAll(chars[n][0], chars[n][1])
    }
    return value
  }
}
