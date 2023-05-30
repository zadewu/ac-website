import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss']
})
export class AuthModalComponent {
  public isRegisterMode = false;

  public toggleMode(value: boolean): void {
    this.isRegisterMode = value;
  }
  
  public register(): void {
    alert('Register successfully!');
  }
}
