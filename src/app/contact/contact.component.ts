import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wp-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public readonly heroImgUrl = '/assets/images/heroes/looking-glass.jpg';

  constructor() { }

  ngOnInit() {
  }

}
