import { NavServiceService } from './../../services/nav-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private navServ: NavServiceService) { }
  navLinks: any;
  ngOnInit(): void {

    this.navLinks = this.navServ.navlink;
  }
  collapse() {
    console.log(window.innerWidth)
    if (window.innerWidth < 767) {
      window.document.getElementById('mainmenu').setAttribute('data-toggle', 'collapse')
      window.document.getElementById('mainmenu').setAttribute('data-target', '#mainmenu')
    }
    setTimeout(() => {
      window.document.getElementById('mainmenu').removeAttribute('data-toggle')
      window.document.getElementById('mainmenu').removeAttribute('data-target')
    }, 20
    );
  }
}
