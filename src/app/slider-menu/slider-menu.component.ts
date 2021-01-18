// src/slider-menu/slider-menu.component.ts

import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { SliderMenuService } from './slider-menu.service';

@Component({
  selector: 'msp-slider-menu',
  templateUrl: './slider-menu.component.html',
  styleUrls: ['./slider-menu.component.scss']
})
export class SliderMenuComponent implements OnInit {
  faTimes = faTimes;

  constructor(public sliderMenuService: SliderMenuService) {}

  ngOnInit(): void {}
}
