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
import { interval } from "rxjs";
import { DataSaverService } from "app/views/data-saver.service";

@Component({
  selector: "app-analytics",
  templateUrl: "./analytics.component.html",
  styleUrls: ["./analytics.component.scss"],
  animations: matxAnimations
})
export class AnalyticsComponent implements OnInit, AfterViewInit {
  trafficVsSaleOptions: any;
  trafficVsSale: any;
  trafficData: any;
  saleData: any;

  sessionOptions: any;
  sessions: any;
  sessionsData: any;

  trafficGrowthChart: any;
  bounceRateGrowthChart: any;

  speedChartBar: any;
  trafficSourcesChart: any;
  countryTrafficStats: any[];
  doughNutPieOptions: any;

  //used for creating and customizing the gauge chart
  gaugeType = "arch";
  message = 0;
  gaugeMax = 50;
  gaugeLabel = "Velocita";
  gaugeAppendText = "km/h";
  gaugeThickness = 20;
  gaugeForegroundColor = "deepSkyBlue";
  gaugeBackgroundColor = "rgb(55, 55, 153)";
  gaugeMarkers = { "50": { color: "#555", type: "triangle", size: 8, label: "Goal", font: "12px arial" }};
  gaugeSize = 300;

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
          await this.sleep(9000); //wait 9seconds before slowing down
          this.message = 0;
          await this.sleep(12000); //wait 12seconds at station
        }
        await this.sleep(90);  //increment speed every 0.09s because 50/4.5s = 0.09km/s (formula is maximumSpeed/maximumSpeedReachedInterval = incrementInterval)
        this.message = this.message + 1;
      }
    }
  }

  ngAfterViewInit() {}
  ngOnInit() {
    this.themeService.onThemeChange.subscribe(activeTheme => {
      this.initSpeedChartBar(activeTheme);
    });
    this.initSpeedChartBar(this.themeService.activatedTheme);

    setTimeout(() => {
      this.transition();
    }, 12000); //wait 12 seconds first time. Delete timeout and keep only function if train model starts right away

    //add km to km percorsi card
    setInterval(() => {
      for(let i = 0; i <= 0; i++)
      {
        this.statCardList[2].amount = +this.statCardList[2].amount + 1;
      }
    }, 120000);  //add 1km every 2minutes to total KM percorsi

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
