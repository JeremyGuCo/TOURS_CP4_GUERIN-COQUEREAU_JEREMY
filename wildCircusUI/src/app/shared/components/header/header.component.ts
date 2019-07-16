import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isShow: boolean = true;
  public openNav = false;
  public closeNav = true;

  constructor() { }

  ngOnInit() {
  }

  admin() {
    this.isShow = !this.isShow;
  }

  showNavbar(isAdmin){
    this.isShow = isAdmin;
  }


}
