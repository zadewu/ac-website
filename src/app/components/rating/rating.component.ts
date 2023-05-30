import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  @Input() public rating = 0.0;
  @Input() public clickable = false;
  public clickRating = 0;
  
  public getIcons(): string[] {
    const icons = [];
    const fullIcons = Math.floor(this.rating);
    const halfIcon = this.rating % 1  !== 0;
    for(let i = 0; i < fullIcons; i++) {
      icons.push('bi-star-fill text-warning');
    }
    if (halfIcon) {
      icons.push('bi-star-half text-warning');
    }
    const remainingIcons = 5 - icons.length;
    for (let j = 0; j < remainingIcons; j++) {
      icons.push('bi-star text-warning');
    }
    return icons;
  }

  public setRating(value: number) {
    this.clickRating = value;
  }
}
