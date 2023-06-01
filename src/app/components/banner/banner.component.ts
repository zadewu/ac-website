import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements AfterViewInit, OnDestroy{
  @ViewChild('next') public next: ElementRef | undefined;
  public bannerItems = ['banner1.jpg', 'banner2.jpg', 'banner3.jpg'];
  private subscription = new Subscription();

  public constructor(){}
  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  public ngAfterViewInit(): void {
    this.subscription.add(
      interval(3000).subscribe(()=> {
        this.next?.nativeElement.click();
      })
    );
  }
  
}
