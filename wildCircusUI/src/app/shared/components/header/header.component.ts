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

  showNavbar(isAdmin){
    this.isShow = isAdmin;
  }

  onOpenNav() {
    this.openNav = !this.openNav;
    this.closeNav = !this.closeNav;
  }

}
