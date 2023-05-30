import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigurationService } from 'src/app/services/configuration/configuration.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  public activeItem = '';
  public visitorCounter = 0;
  public constructor(private router: Router, private configService: ConfigurationService) {}

  public ngOnInit(): void {
    this.activeItem = '';
    this.visitorCounter = this.configService.getVisitors();
  }

  public selectNavItem(item: string): void {
    if (!item) {
      return;
    }
    this.activeItem = item;
  }

  public onLogin(): void {
    
  }
}
