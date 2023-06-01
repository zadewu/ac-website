import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss']
})
export class AuthModalComponent {
  public isRegisterMode = false;

  public constructor(private router: Router){}

  public toggleMode(value: boolean): void {
    this.isRegisterMode = value;
  }
  
  public register(): void {
    alert('Register successfully!');
  }

  public login(): void {
    this.router.navigate(['']);
  }
}
