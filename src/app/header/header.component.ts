import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'header-container',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  time: any;

  constructor() {
    setInterval(() => {
      this.time = Date.now();
    }, 1);
  }

  // isSticky: boolean = false;

  // @HostListener('window:scroll', ['$event'])
  // checkScroll() {
  //   this.isSticky = window.pageYOffset >= 100;
  // }

}
