// src/footer/footer.component.ts

import { Component, OnInit } from '@angular/core';

import {
  faInstagram,
  faFacebookF,
  faPinterest
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'msp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faInstagram = faInstagram;
  faFacebookF = faFacebookF;
  faPinterest = faPinterest;

  constructor() {}

  ngOnInit(): void {}
}
