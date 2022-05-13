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

  gaugeTemp2Value = 23.6;

  gaugeTemp3Value = 24.2;

  gaugeTemp4Value = 23.9;

  gaugeTemp5Value = 24;

  gaugeTemp6Value = 24.2;

  gaugeStimaType = "full";
  gaugeStimaValue = 64;
  gaugeStimaMin = 0;
  gaugeStimaMax = 365;
  gaugeStimaLabel = "gg";
  gaugeStimaAppendText = "";
  gaugeStimaThickness = 15;
  gaugeStimaForegroundColor = "";
  gaugeStimaBackgroundColor = "rgb(55, 55, 153)";
  gaugeStimaMarkers = { "50": { color: "#555", type: "triangle", size: 8, label: "Goal", font: "12px arial" }};
  gaugeStimaSize = 200;

  gaugeStima2Value = 236;
  gaugeStima2ForegroundColor = "";

  gaugeStima3Value = 289;
  gaugeStima3ForegroundColor = "";

  gaugeStima4Value = 99;
  gaugeStima4ForegroundColor = "";

  gaugeStima5Value = 125;
  gaugeStima5ForegroundColor = "";

  gaugeStima6Value = 170;
  gaugeStima6ForegroundColor = "";

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

    //assign dynamic colors to Stima gauges------------------------------
    if(this.gaugeStimaValue <= 365)
    {
      this.gaugeStimaForegroundColor = "green";
    }

    if(this.gaugeStimaValue <= 200)
    {
      this.gaugeStimaForegroundColor = "yellow";
    }


    if(this.gaugeStimaValue <= 100)
    {
      this.gaugeStimaForegroundColor = "red";
    }

    //-----2-----

    if(this.gaugeStima2Value < 365)
    {
      this.gaugeStima2ForegroundColor = "green";
    }


    if(this.gaugeStima2Value < 200)
    {
      this.gaugeStima2ForegroundColor = "yellow";
    }


    if(this.gaugeStima2Value < 100)
    {
      this.gaugeStima2ForegroundColor = "red";
    }

    //-----3-----

    if(this.gaugeStima3Value < 365)
    {
      this.gaugeStima3ForegroundColor = "green";
    }


    if(this.gaugeStima3Value < 200)
    {
      this.gaugeStima3ForegroundColor = "yellow";
    }


    if(this.gaugeStima3Value < 100)
    {
      this.gaugeStima3ForegroundColor = "red";
    }

    //-----4-----

    if(this.gaugeStima4Value < 365)
    {
      this.gaugeStima4ForegroundColor = "green";
    }


    if(this.gaugeStima4Value < 200)
    {
      this.gaugeStima4ForegroundColor = "yellow";
    }


    if(this.gaugeStima4Value < 100)
    {
      this.gaugeStima4ForegroundColor = "red";
    }

    //-----5-----

    if(this.gaugeStima5Value < 365)
    {
      this.gaugeStima5ForegroundColor = "green";
    }


    if(this.gaugeStima5Value < 200)
    {
      this.gaugeStima5ForegroundColor = "yellow";
    }


    if(this.gaugeStima5Value < 100)
    {
      this.gaugeStima5ForegroundColor = "red";
    }

    //-----6-----

    if(this.gaugeStima6Value < 365)
    {
      this.gaugeStima6ForegroundColor = "green";
    }


    if(this.gaugeStima6Value < 200)
    {
      this.gaugeStima6ForegroundColor = "yellow";
    }


    if(this.gaugeStima6Value < 100)
    {
      this.gaugeStima6ForegroundColor = "red";
    }

    //------------------------------------------------------------

  }
}
