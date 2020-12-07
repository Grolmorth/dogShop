import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-path',
  templateUrl: './product-path.component.html',
  styleUrls: ['./product-path.component.scss']
})
export class ProductPathComponent implements OnInit {

  constructor() { }

  @Input() categoryLink: string;
  @Input() categoryName: string;
  @Input() subCategoryLink: any;
  @Input() subCategoryName: any;
  @Input() item: string;

  ngOnInit(): void {
  }

}
