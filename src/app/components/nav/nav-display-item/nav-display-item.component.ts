import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav-display-item',
  templateUrl: './nav-display-item.component.html',
  styleUrls: ['./nav-display-item.component.scss']
})
export class NavDisplayItemComponent implements OnInit {

  constructor() { }
  @Input() link: any;




ngOnInit(): void {
}


}
