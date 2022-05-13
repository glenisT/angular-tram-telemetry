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
  gaugeTempValue = 23.8;
  gaugeTempMin = 23.5;
  gaugeTempMax = 24.5;
  gaugeTempLabel = "";
  gaugeTempAppendText = "°C";
  gaugeTempThickness = 20;
  gaugeTempForegroundColor = "deepSkyBlue";
  gaugeTempBackgroundColor = "rgb(55, 55, 153)";
  gaugeTempMarkers = { "50": { color: "#555", type: "triangle", size: 8, label: "Goal", font: "12px arial" }};
  gaugeTempSize = 200;

  gaugeTemp2Type = "arch";
  gaugeTemp2Value = 23.6;
  gaugeTemp2Min = 23.5;
  gaugeTemp2Max = 24.5;
  gaugeTemp2Label = "";
  gaugeTemp2AppendText = "°C";
  gaugeTemp2Thickness = 20;
  gaugeTemp2ForegroundColor = "deepSkyBlue";
  gaugeTemp2BackgroundColor = "rgb(55, 55, 153)";
  gaugeTemp2Markers = { "50": { color: "#555", type: "triangle", size: 8, label: "Goal", font: "12px arial" }};
  gaugeTemp2Size = 200;

  gaugeTemp3Type = "arch";
  gaugeTemp3Value = 24.2;
  gaugeTemp3Min = 23.5;
  gaugeTemp3Max = 24.5;
  gaugeTemp3Label = "";
  gaugeTemp3AppendText = "°C";
  gaugeTemp3Thickness = 20;
  gaugeTemp3ForegroundColor = "deepSkyBlue";
  gaugeTemp3BackgroundColor = "rgb(55, 55, 153)";
  gaugeTemp3Markers = { "50": { color: "#555", type: "triangle", size: 8, label: "Goal", font: "12px arial" }};
  gaugeTemp3Size = 200;

  gaugeTemp4Type = "arch";
  gaugeTemp4Value = 23.9;
  gaugeTemp4Min = 23.5;
  gaugeTemp4Max = 24.5;
  gaugeTemp4Label = "";
  gaugeTemp4AppendText = "°C";
  gaugeTemp4Thickness = 20;
  gaugeTemp4ForegroundColor = "deepSkyBlue";
  gaugeTemp4BackgroundColor = "rgb(55, 55, 153)";
  gaugeTemp4Markers = { "50": { color: "#555", type: "triangle", size: 8, label: "Goal", font: "12px arial" }};
  gaugeTemp4Size = 200;

  gaugeTemp5Type = "arch";
  gaugeTemp5Value = 24;
  gaugeTemp5Min = 23.5;
  gaugeTemp5Max = 24.5;
  gaugeTemp5Label = "";
  gaugeTemp5AppendText = "°C";
  gaugeTemp5Thickness = 20;
  gaugeTemp5ForegroundColor = "deepSkyBlue";
  gaugeTemp5BackgroundColor = "rgb(55, 55, 153)";
  gaugeTemp5Markers = { "50": { color: "#555", type: "triangle", size: 8, label: "Goal", font: "12px arial" }};
  gaugeTemp5Size = 200;

  gaugeTemp6Type = "arch";
  gaugeTemp6Value = 24.2;
  gaugeTemp6Min = 23.5;
  gaugeTemp6Max = 24.5;
  gaugeTemp6Label = "";
  gaugeTemp6AppendText = "°C";
  gaugeTemp6Thickness = 20;
  gaugeTemp6ForegroundColor = "deepSkyBlue";
  gaugeTemp6BackgroundColor = "rgb(55, 55, 153)";
  gaugeTemp6Markers = { "50": { color: "#555", type: "triangle", size: 8, label: "Goal", font: "12px arial" }};
  gaugeTemp6Size = 200;

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

    if(this.gaugeTempValue > 24)
    {
      this.gaugeTempForegroundColor = "red";
    }

  }
}
