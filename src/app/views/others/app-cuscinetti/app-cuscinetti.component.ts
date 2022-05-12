import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectionStrategy
} from "@angular/core";
import { matxAnimations } from "app/shared/animations/matx-animations";
import { ThemeService } from "app/shared/services/theme.service";
import tinyColor from "tinycolor2";
import PerfectScrollbar from "perfect-scrollbar";
import { WHITE_ON_BLACK_CSS_CLASS } from "@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector";

@Component({
  selector: "app-blank",
  templateUrl: "./app-cuscinetti.component.html",
  styleUrls: ["./app-cuscinetti.component.scss"],
  animations: matxAnimations
})
export class AppCuscinettiComponent implements OnInit, AfterViewInit {
  trafficVsSaleOptions: any;
  trafficVsSale: any;
  trafficData: any;
  saleData: any;

  sessionOptions: any;
  sessions: any;
  sessionsData: any;

  trafficGrowthChart: any;
  bounceRateGrowthChart: any;

  dioxideChartBar: any;
  pmvChartBar: any;
  trafficSourcesChart: any;
  countryTrafficStats: any[];
  doughNutPieOptions: any;

  //used for creating and customizing the gauge chart
  gaugeTempType = "arch";
  gaugeTempValue = 23.5;
  gaugeTempMin = 23.5;
  gaugeTempMax = 24.5;
  gaugeTempLabel = "";
  gaugeTempAppendText = "°C";
  gaugeTempThickness = 20;
  gaugeTempForegroundColor = "deepSkyBlue";
  gaugeTempBackgroundColor = "rgb(55, 55, 153)";
  gaugeTempMarkers = { "50": { color: "#555", type: "triangle", size: 8, label: "Goal", font: "12px arial" }};
  gaugeTempSize = 200;

  gaugePpmType = "arch";
  gaugePpmValue = 550;
  gaugePpmMax = 1000;
  gaugePpmLabel = "";
  gaugePpmAppendText = "ppm";
  gaugePpmThickness = 20;
  gaugePpmForegroundColor = "deepSkyBlue";
  gaugePpmBackgroundColor = "rgb(55, 55, 153)";
  gaugePpmMarkers = { "50": { color: "#555", type: "triangle", size: 8, label: "Goal", font: "12px arial" }};
  gaugePpmSize = 200;

  gaugeUmiditaType = "arch";
  gaugeUmiditaValue = 44;
  gaugeUmiditaMin = 43;
  gaugeUmiditaMax = 47;
  gaugeUmiditaLabel = "";
  gaugeUmiditaAppendText = "%";
  gaugeUmiditaThickness = 20;
  gaugeUmiditaForegroundColor = "red";
  gaugeUmiditaBackgroundColor = "rgb(55, 55, 153)";
  gaugeUmiditaMarkers = { "50": { color: "#555", type: "triangle", size: 8, label: "Goal", font: "12px arial" }};
  gaugeUmiditaSize = 200;

  gaugePmvType = "arch";
  gaugePmvValue = 1.0;
  gaugePmvMin = 0.5;
  gaugePmvMax = 1.5;
  gaugePmvLabel = "";
  gaugePmvAppendText = "pmv";
  gaugePmvThickness = 20;
  gaugePmvForegroundColor = "deepSkyBlue";
  gaugePmvBackgroundColor = "rgb(55, 55, 153)";
  gaugePmvMarkers = { "50": { color: "#555", type: "triangle", size: 8, label: "Goal", font: "12px arial" }};
  gaugePmvSize = 200;

  statCardList = [
    {
      icon: "tram",
      title: "Numero Veicolo",
      amount: "2154AnZ",
      color: "primary"
    },
    {
      icon: "tag",
      title: "Linea",
      amount: "Linea 4",
      color: "primary"
    },
    {
      icon: "check",
      title: "km percorsi",
      amount: 654.21,
      color: "primary"
    }
  ];

  displayedColumns: string[] = ["name", "price", "available", "action"];

  constructor(private themeService: ThemeService) {}

  ngAfterViewInit() {}
  ngOnInit() {
    
    //add km to km percorsi card
    setInterval(() => {
      for(let i = 0; i <= 0; i++)
      {
        this.statCardList[2].amount = +this.statCardList[2].amount + 1;
      }
    }, 120000);  //add 1km every 2minutes to total KM percorsi

  }
}
