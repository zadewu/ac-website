import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  public activeItem = '';
  public constructor(private router: Router) {}

  public ngOnInit(): void {
    this.activeItem = 'top-sellings';
  }

  public selectNavItem(item: string): void {
    if (!item) {
      return;
    }
    this.activeItem = item;
  }
}
