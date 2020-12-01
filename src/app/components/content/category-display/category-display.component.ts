import { NavServiceService } from './../../../services/nav-service.service';
import { Component, DoCheck, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-category-display',
  templateUrl: './category-display.component.html',
  styleUrls: ['./category-display.component.scss']
})
export class CategoryDisplayComponent implements OnInit, DoCheck {

  constructor(private navServ: NavServiceService, private route: ActivatedRoute, private location: Location) { }
  navigation: any;
  ngOnInit(): void {
  }
  ngDoCheck() {
    const categoryName = this.route.snapshot.paramMap.get('categoryName')
    this.navServ.navlink.map(v => {
      if (v[1] === categoryName) {
        this.navigation = v[2];
      };
    })
  }
}
