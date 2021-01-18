// src/slider-menu/slider-menu.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SliderMenuService {
  menuOpen = false;

  constructor() {}

  closeMenu(): void {
    this.menuOpen = false;
  }

  openMenu(): void {
    this.menuOpen = true;
  }
}
