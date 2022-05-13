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
  templateUrl: "./app-porte.component.html",
  styleUrls: ["./app-porte.component.scss"],
  animations: matxAnimations
})
export class AppPorteComponent implements OnInit, AfterViewInit {
  trafficVsSaleOptions: any;
  trafficVsSale: any;
  trafficData: any;
  saleData: any;

  sessionOptions: any;
  sessions: any;
  sessionsData: any;

  trafficGrowthChart: any;
  bounceRateGrowthChart: any;

  dailyTrafficChartBar: any;
  updateDailyTrafficChartBar: any;
  trafficSourcesChart: any;
  countryTrafficStats: any[];
  doughNutPieOptions: any;

  dbChartBar: any;

  private oneDay = 24 * 3600 * 1000;
  private now: Date;
  private value: number ;
  private data: any[];
  private timer: any;

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

  //used for creating and customizing the gauge chart
  gaugePasseggeriType = "full";
  gaugePasseggeriValue = 54;
  gaugePasseggeriMax = 70;
  gaugePasseggeriLabel = "pax";
  gaugePasseggeriAppendText = "";
  gaugePasseggeriThickness = 20;
  gaugePasseggeriForegroundColor = "deepSkyBlue";
  gaugePasseggeriBackgroundColor = "rgb(55, 55, 153)";
  gaugePasseggeriMarkers = { "50": { color: "#555", type: "triangle", size: 8, label: "Goal", font: "12px arial" }};
  gaugePasseggeriSize = 300;

  gaugeDbType = "arch";
  gaugeDbValue = 52;
  gaugeDbMin = 0;
  gaugeDbMax = 70;
  gaugeDbLabel = "";
  gaugeDbAppendText = "db";
  gaugeDbThickness = 20;
  gaugeDbForegroundColor = "#ff0000";
  gaugeDbBackgroundColor = "rgb(55, 55, 153)";
  gaugeDbMarkers = { "50": { color: "#555", type: "triangle", size: 8, label: "Goal", font: "12px arial" }};
  gaugeDbSize = 300;

  displayedColumns: string[] = ["name", "price", "available", "action"];

  constructor(private themeService: ThemeService) {}

  ngAfterViewInit() {}
  ngOnInit() {
    this.themeService.onThemeChange.subscribe(activeTheme => {
      this.initDailyTrafficChartBar(activeTheme);
      this.initDbChartBar(activeTheme);
    });
    this.initDailyTrafficChartBar(this.themeService.activatedTheme);
    this.initDbChartBar(this.themeService.activatedTheme);

    //add km to km percorsi card
    setInterval(() => {
      for(let i = 0; i <= 0; i++)
      {
        this.statCardList[2].amount = +this.statCardList[2].amount + 1;
      }
    }, 120000);  //add 1km every 2minutes to total KM percorsi

     // generate some random testing data:
     this.data = [];
     this.now = new Date(2022, 20, 5);
     this.value = Math.random() * 1000;
 
     for (let i = 0; i < 1000; i++) {
       this.data.push(this.randomData());
     }

     // Mock dynamic data:
    this.timer = setInterval(() => {
      for (let i = 0; i < 5; i++) {
        this.data.shift();
        this.data.push(this.randomData());
      }

      // update series data:
      this.updateDailyTrafficChartBar = {
        series: [{
          data: this.data
        }]
      };
    }, 1000);
  }

  initDbChartBar(theme) {
    this.dbChartBar = {
      title: {
        show:true,
        text:"Indice decibel",
        textStyle: {
          color: "white"
        }
      },
      grid: {
        top: 56,
        left: 56,
        right: 25,
        bottom: 150
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
          data: [40, 45, 50, 52, 54, 56, 61, 59, 50, 45, 47, 52],
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
          "14:18:00",
          "14:18:30",
          "14:19:00",
          "14:19:30",
          "14:20:00",
          "14:20:30",
          "14:21:00",
          "14:21:30",
          "14:22:00",
          "14:22:30",
          "14:23:00",
          "14:23:30",
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
        max: 70,
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
      ]
    };
  }

  initDailyTrafficChartBar(theme) {
    this.dailyTrafficChartBar = {
      title: {
        text: 'Porta 1',
        textStyle: {
          color: "white"
        }
      },
      grid: {
        top: 56,
        left: 56,
        right: 25,
        bottom: 150
      },
      tooltip: {
        trigger: 'axis',
        formatter: (params) => {
          params = params[0];
          const date = new Date(params.name);
          return params.value[1] + ' kW';
        },
        axisPointer: {
          animation: false
        }
      },
      xAxis: {
        name: 'Tempo',
        show: true,
        type: 'time',
        splitLine: {
          show: false
        },
        axisLabel: {
          color: "#ccc",
          margin: 20,
          fontSize: 13,
          fontFamily: "roboto"
        },
      },
      yAxis: {
        type: "value",
        min: 0,
        max: 1000,
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
        },
        //name : 'Corrente',
        nameLocation: 'middle',
        nameGap: 50,
        nameTextStyle: {
          fontWeight: 'bold',
          fontFamily: 'roboto',
          color: "white"
        },
        boundaryGap: [0, '100%'],
        splitArea: {
          show: true
        },
      },
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
      series: [{
        name: 'Mocking Data',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: this.data,
        smooth:true,
        areaStyle: {},
        lineStyle: {
          width: 2,
          color: "#fff"
         }
      }
    ]
    };
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  randomData() {
    this.now = new Date(this.now.getTime() + this.oneDay);
    this.value = this.value + Math.random() * 21 - 10;
    return {
      name: this.now.toString(),
      value: [
        [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'),
        Math.round(this.value)
      ]
    };
  }
}
