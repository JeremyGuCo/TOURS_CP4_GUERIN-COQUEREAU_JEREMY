import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public isShow: boolean = true;

  @Output() 
  adminCon = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  admin() {
    this.isShow = !this.isShow;
    this.adminCon.emit(this.isShow)
  }
}
