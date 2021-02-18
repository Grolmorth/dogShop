import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-go-top',
  templateUrl: './go-top.component.html',
  styleUrls: ['./go-top.component.scss']
})
export class GoTopComponent implements OnInit {

  constructor() { }
  showButton = false;
  goToTop() {
    document.documentElement.scrollTop = 0;
  }
  @HostListener('window:scroll', ['$event'])
  onScroll() {

    if (window.pageYOffset > 10) {
      this.showButton = true;
    } else {
      this.showButton = false;
    }
  }
  ngOnInit(): void {

  }

}
