import { ProductService } from './../../../services/product.service';
import { NavServiceService } from './../../../services/nav-service.service';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/services/product';

@Component({
  selector: 'app-category-display',
  templateUrl: './category-display.component.html',
  styleUrls: ['./category-display.component.scss']
})
export class CategoryDisplayComponent implements OnInit {

  categoryLink: string;
  categoryName: any;
  sub: any;
  constructor(private navServ: NavServiceService, private route: ActivatedRoute, private productService: ProductService, private router: Router) { }
  navigation: any;
  ngOnInit(): void {
    //subscribe route params
    this.sub = this.route.params.subscribe(params => {
      this.categoryLink = params.categoryName;
      this.navServ.navlink.map(v => {
        if (v[1] === this.categoryLink) {
          this.categoryName = v[0];
          this.navigation = v[2];
        }
      });



    }), (err) => console.error(err);
    if (this.categoryName === undefined) {
      this.router.navigateByUrl('page-not-found');

    }

  }



  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
