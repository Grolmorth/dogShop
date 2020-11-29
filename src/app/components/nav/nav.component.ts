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
    console.log(this.navServ.navlink)
    this.navLinks = this.navServ.navlink;
  }

}
