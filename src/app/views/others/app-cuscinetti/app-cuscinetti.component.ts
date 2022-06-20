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
import { DataSaverService } from "app/views/data-saver.service";

@Component({
  selector: "app-blank",
  templateUrl: "./app-cuscinetti.component.html",
  styleUrls: ["./app-cuscinetti.component.scss"],
  animations: matxAnimations
})
export class AppCuscinettiComponent implements OnInit, AfterViewInit {

  //used for creating and customizing the gauge chart
  gaugeTempType = "arch"
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

  //---------------------------------------------------------------------

  gaugeStimaType = "full";
  gaugeStimaValue = 5;
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

  gaugeStima4Value = 56;
  gaugeStima4ForegroundColor = "";

  gaugeStima5Value = 125;
  gaugeStima5ForegroundColor = "";

  gaugeStima6Value = 170;
  gaugeStima6ForegroundColor = "";

  //---------------------------------------------------------------------

  statCardList = this.data.statCardList;

  displayedColumns: string[] = ["name", "price", "available", "action"];

  message: number;

  constructor(private themeService: ThemeService, private data: DataSaverService) {}

  ngAfterViewInit() {}
  ngOnInit() {
    
    this.data.ngOnInit();

    //----------Demo for dynamic colors of Stima----------
    // let timer = setInterval(() => {
    //   for(let i = 0; i <= 0; i++)
    //   {
    //     if(this.gaugeStimaValue == 0)
    //     {
    //       this.gaugeStimaValue = 1;
    //       clearInterval(timer);
    //     }
    //     this.gaugeStimaValue = this.gaugeStimaValue - 1;


    //     if(this.gaugeStimaValue <= 200)
    //     {
    //       this.gaugeStimaForegroundColor = "#ffc001";
    //       document.getElementById("circle").style.backgroundColor = "#ffc001d3";
    //     }

    //     if(this.gaugeStimaValue <= 100)
    //     {
    //       this.gaugeStimaForegroundColor = "#ff0000";
    //       document.getElementById("circle").style.backgroundColor = "#ff0000d3";
    //     }

    //     if(this.gaugeStimaValue <= 90)
    //     {
    //       document.getElementById("circle").style.animation = "danger 0.5s alternate infinite forwards";
    //       document.getElementById("cambio").style.display = "flex";
    //     }
    //   }
    // }, 50);

    //assign dynamic colors to Stima gauges------------------------------
    if(this.gaugeStimaValue <= 365)
    {
      this.gaugeStimaForegroundColor = "#92d050";
      document.getElementById("circle").style.backgroundColor = "#92d050d3";
    }

    if(this.gaugeStimaValue <= 200)
    {
      this.gaugeStimaForegroundColor = "#ffc001";
      document.getElementById("circle").style.backgroundColor = "#ffc001d3";
    }


    if(this.gaugeStimaValue <= 100)
    {
      this.gaugeStimaForegroundColor = "#ff0000";
      document.getElementById("circle").style.backgroundColor = "#ff0000d3";
    }

    if(this.gaugeStimaValue <= 90)
    {
      document.getElementById("circle").style.animation = "danger 0.5s alternate infinite forwards";
      document.getElementById("cambio").style.display = "flex";
    }

    //-----2-----

    if(this.gaugeStima2Value <= 365)
    {
      this.gaugeStima2ForegroundColor = "#92d050";
      document.getElementById("circle2").style.backgroundColor = "#92d050d3";
    }


    if(this.gaugeStima2Value <= 200)
    {
      this.gaugeStima2ForegroundColor = "#ffc001";
      document.getElementById("circle2").style.backgroundColor = "#ffc001d3";
    }


    if(this.gaugeStima2Value <= 100)
    {
      this.gaugeStima2ForegroundColor = "#ff0000";
      document.getElementById("circle2").style.backgroundColor = "#ff0000d3";
    }

    //-----3-----

    if(this.gaugeStima3Value <= 365)
    {
      this.gaugeStima3ForegroundColor = "#92d050";
      document.getElementById("circle3").style.backgroundColor = "#92d050d3";
    }


    if(this.gaugeStima3Value <= 200)
    {
      this.gaugeStima3ForegroundColor = "#ffc001";
      document.getElementById("circle3").style.backgroundColor = "#ffc001d3";
    }


    if(this.gaugeStima3Value <= 100)
    {
      this.gaugeStima3ForegroundColor = "#ff0000";
      document.getElementById("circle3").style.backgroundColor = "#ff0000d3";
    }

    //-----4-----

    if(this.gaugeStima4Value <= 365)
    {
      this.gaugeStima4ForegroundColor = "#92d050";
      document.getElementById("circle4").style.backgroundColor = "#92d050d3";
    }


    if(this.gaugeStima4Value <= 200)
    {
      this.gaugeStima4ForegroundColor = "#ffc001";
      document.getElementById("circle4").style.backgroundColor = "#ffc001d3";
    }


    if(this.gaugeStima4Value <= 100)
    {
      this.gaugeStima4ForegroundColor = "#ff0000";
      document.getElementById("circle4").style.backgroundColor = "#ff0000d3";
    }

    //-----5-----

    if(this.gaugeStima5Value <= 365)
    {
      this.gaugeStima5ForegroundColor = "#92d050";
      document.getElementById("circle5").style.backgroundColor = "#92d050d3";
    }


    if(this.gaugeStima5Value <= 200)
    {
      this.gaugeStima5ForegroundColor = "#ffc001";
      document.getElementById("circle5").style.backgroundColor = "#ffc001d3";
    }


    if(this.gaugeStima5Value <= 100)
    {
      this.gaugeStima5ForegroundColor = "#ff0000";
      document.getElementById("circle5").style.backgroundColor = "#ff0000d3";
    }

    //-----6-----

    if(this.gaugeStima6Value <= 365)
    {
      this.gaugeStima6ForegroundColor = "#92d050";
      document.getElementById("circle6").style.backgroundColor = "#92d050d3";
    }


    if(this.gaugeStima6Value <= 200)
    {
      this.gaugeStima6ForegroundColor = "#ffc001";
      document.getElementById("circle6").style.backgroundColor = "#ffc001d3";
    }


    if(this.gaugeStima6Value <= 100)
    {
      this.gaugeStima6ForegroundColor = "#ff0000";
      document.getElementById("circle6").style.backgroundColor = "#ff0000d3";
    }

    //------------------------------------------------------------

  }
}
