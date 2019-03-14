import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'wp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('rest') rest: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  scrollDown() {
    this.rest.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

}
