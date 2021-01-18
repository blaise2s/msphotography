// src/app/header.component.ts

import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { SliderMenuService } from '../slider-menu/slider-menu.service';

@Component({
  selector: 'msp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faBars = faBars;

  constructor(public sliderMenuService: SliderMenuService) {}

  ngOnInit(): void {}
}
