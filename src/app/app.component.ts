import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

import { RoutePartsService } from "./shared/services/route-parts.service";
// import { ThemeService } from './shared/services/theme.service';

import { filter } from 'rxjs/operators';
import { LayoutService } from './shared/services/layout.service';
import { DataSaverService } from './views/data-saver.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  appTitle = 'Portale Telemetry';
  pageTitle = '';

  constructor(
    public title: Title, 
    private router: Router, 
    private activeRoute: ActivatedRoute,
    private routePartsService: RoutePartsService,
    // private themeService: ThemeService,
    private layout: LayoutService,
    private dataService: DataSaverService
  ) { }

  paths = ['/tram/general', '/hvac/telemetryHVAC', '/passeggeri/telemetryPasseggeri', '/cuscinetti/telemetryCuscinetti', '/porte/telemetryPorte']

   //waiting function
   sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  i: number;
  async switchPages()
  {
    for(this.i = 1; this.i <= 4; this.i++)
    {
      await this.sleep(60000); //60s per page. Make this a multiple of entire tram cycles (cycle = durationOfGiro + durationOfWaitingInStation)
      this.router.navigate([this.paths[this.i]], {relativeTo: this.activeRoute});
      if(this.i == 4)
      {
        this.i = -1;
      }
    }
  }

  ngOnInit() {
    this.changePageTitle();
    // this.layout.setAppLayout()

    //setTimeout(() => {
      this.switchPages();
    //}, 12000)


    setInterval(() => {
      this.dataService.statCardList[2].amount = +this.dataService.statCardList[2].amount + 1;  //add KM according to how many are run in 1 tram cycle
    }, 5000) 
  }
  
  ngAfterViewInit() {
  }
  changePageTitle() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((routeChange) => {
      var routeParts = this.routePartsService.generateRouteParts(this.activeRoute.snapshot);
      if (!routeParts.length)
        return this.title.setTitle(this.appTitle);
      // Extract title from parts;
      this.pageTitle = routeParts
                      .reverse()
                      .map((part) => part.title )
                      .reduce((partA, partI) => {return `${partA} > ${partI}`});
      this.pageTitle += ` | ${this.appTitle}`;
      this.title.setTitle(this.pageTitle);
    });
  }
  
}
