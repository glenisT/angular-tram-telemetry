import {
  Component,
  OnInit,
  AfterViewInit
} from "@angular/core";
import { matxAnimations } from "app/shared/animations/matx-animations";
import { ThemeService } from "app/shared/services/theme.service";
import tinyColor from "tinycolor2";
import PerfectScrollbar from "perfect-scrollbar";
import { WHITE_ON_BLACK_CSS_CLASS } from "@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector";
import { interval } from "rxjs";
import { DataSaverService } from "app/views/data-saver.service";

@Component({
  selector: "app-analytics",
  templateUrl: "./analytics.component.html",
  styleUrls: ["./analytics.component.scss"],
  animations: matxAnimations
})
export class AnalyticsComponent implements OnInit, AfterViewInit {

  speedChartBar: any;

  //used for creating and customizing the gauge chart
  gaugeType = "arch";
  message = this.data.message;
  gaugeMax = 50;
  gaugeLabel = "Velocita";
  gaugeAppendText = "km/h";
  gaugeThickness = 20;
  gaugeForegroundColor = "deepSkyBlue";
  gaugeBackgroundColor = "rgb(55, 55, 153)";
  gaugeMarkers = { "50": { color: "#555", type: "triangle", size: 8, label: "Goal", font: "12px arial" }};
  gaugeSize = 300;

  statCardList = this.data.statCardList;

  displayedColumns: string[] = ["name", "price", "available", "action"];

  constructor(private themeService: ThemeService, private data: DataSaverService) {}

  //waiting function
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async transition() {
    while (true) {
      for(let i = 0; i <= 0; i++)
      {
        if(this.message == 50)
        {
          this.message = 50;  //reach top speed at 50km/h (to stop incrementation)
          await this.sleep(13000); //wait 9seconds before slowing down
          this.message = 0;
          await this.sleep(12000); //wait 12seconds at station
        }
        await this.sleep(100);  //increment speed every 0.1s because 5s/50km = 0.1s/km (formula is maximumSpeed/maximumSpeedReachedInterval = incrementInterval)
        this.message = this.message + 1;
      }
    }
  }

  ngAfterViewInit() {}
  ngOnInit() {
    this.themeService.onThemeChange.subscribe(activeTheme => {
    });

    this.data.ngOnInit();

    //setTimeout(() => {
      this.transition();
    //}, 12000) //wait 12seconds in station


  }
}
