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

  

  ngAfterViewInit() {}
  ngOnInit() {
    this.themeService.onThemeChange.subscribe(activeTheme => {
      this.initSpeedChartBar(activeTheme);
    });
    this.initSpeedChartBar(this.themeService.activatedTheme);

    this.data.ngOnInit();
    this.data.transition();

  }

  initSpeedChartBar(theme) {
    this.speedChartBar = {
      grid: {
        top: 16,
        left: 36,
        right: 25,
        bottom: 32
      },
      legend: {},
      tooltip: {
        show: true,
        trigger: "axis",

        axisPointer: {
          type: "cross",
          lineStyle: {
            opacity: 0
          }
        },
        crossStyle: {
          color: "#000"
        }
      },
      series: [
        {
          data: [0, 6, 10, 15, 24, 30, 35, 42, 50],
          type: "line",
          areaStyle: {},
          smooth: false,
          lineStyle: {
            width: 2,
            color: "#fff"
          }
        }
      ],
      xAxis: {
        show: true,
        type: "category",
        showGrid: false,
        boundaryGap: false,
        data: [
          "14:22:10",
          "14:22:20",
          "14:22:30",
          "14:22:40",
          "14:22:50",
          "14:23:00",
          "14:23:10",
          "14:23:20",
          "14:23:30"
        ],
        axisLabel: {
          color: "#ccc",
          margin: 20
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      },
      yAxis: {
        type: "value",
        min: 0,
        max: 50,
        axisLabel: {
          color: "#ccc",
          margin: 20,
          fontSize: 13,
          fontFamily: "roboto"
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(255, 255, 255, .1)"
          }
        },

        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      },
      color: [
        {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "rgba(255,255,255,0.3)" // color at 0% position
            },
            {
              offset: 1,
              color: "rgba(255,255,255,0)" // color at 100% position
            }
          ],
          global: false // false by default
        }
      ],
      dataZoom: [
        {
            id: 'dataZoomX',
            type: 'inside',
            xAxisIndex: [0],
            filterMode: 'filter'
        },
        {
            id: 'dataZoomY',
            type: 'inside',
            yAxisIndex: [0],
            filterMode: 'empty'
        }
      ],
    };
  }
}
