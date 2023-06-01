import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from 'src/app/services/configuration/configuration.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{
  public visitors = 0;

  public constructor(private configService: ConfigurationService){}

  public ngOnInit(): void {
    this.visitors = this.configService.getVisitors();
  }
}
