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
  templateUrl: "./app-passeggeri.component.html",
  styleUrls: ["./app-passeggeri.component.scss"],
  animations: matxAnimations
})
export class AppPasseggeriComponent implements OnInit, AfterViewInit {
  trafficVsSaleOptions: any;
  trafficVsSale: any;
  trafficData: any;
  saleData: any;

  sessionOptions: any;
  sessions: any;
  sessionsData: any;

  trafficGrowthChart: any;
  bounceRateGrowthChart: any;

  dbChartBar: any;
  trafficSourcesChart: any;
  countryTrafficStats: any[];
  doughNutPieOptions: any;

  passeggeri: any;

  //used for creating and customizing the gauge chart
  gaugePpmType = "full";
  gaugePpmValue = 54;
  gaugePpmMax = 70;
  gaugePpmLabel = "";
  gaugePpmAppendText = "pax";
  gaugePpmThickness = 20;
  gaugePpmForegroundColor = "deepSkyBlue";
  gaugePpmBackgroundColor = "rgb(55, 55, 153)";
  gaugePpmMarkers = { "50": { color: "#555", type: "triangle", size: 8, label: "Goal", font: "12px arial" }};
  gaugePpmSize = 300;

  gaugePmvType = "arch";
  gaugePmvValue = 52;
  gaugePmvMin = 0;
  gaugePmvMax = 70;
  gaugePmvLabel = "";
  gaugePmvAppendText = "db";
  gaugePmvThickness = 20;
  gaugePmvForegroundColor = "rgb(220, 0, 0)";
  gaugePmvBackgroundColor = "rgb(55, 55, 153)";
  gaugePmvMarkers = { "50": { color: "#555", type: "triangle", size: 8, label: "Goal", font: "12px arial" }};
  gaugePmvSize = 300;

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
    this.themeService.onThemeChange.subscribe(activeTheme => {
      this.initDbChartBar(activeTheme);
    });
    this.initDbChartBar(this.themeService.activatedTheme);

    //add km to km percorsi card
    setInterval(() => {
      for(let i = 0; i <= 0; i++)
      {
        this.statCardList[2].amount = +this.statCardList[2].amount + 1;
      }
    }, 120000);  //add 1km every 2minutes to total KM percorsi

    const dataAxis = [
          "14:19:30",
          "14:20:00",
          "14:20:30",
          "14:21:00",
          "14:21:30",
          "14:22:00",
          "14:22:30",
          "14:23:00",
          "14:23:30"
    ];
    const data = [
      20,
      30,
      35,
      38,
      42,
      50,
      55,
      68,
      60
    ];
    const yMax = 70;
    const dataShadow = [];

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < data.length; i++) {
      dataShadow.push(yMax);
    }

    this.passeggeri = {
      title: {
        text: 'Numero Passeggeri',
        textStyle: {
          color: "white"
        }
      },
      grid: {
        top: 56,
        left: 56,
        right: 25,
        bottom: 100
      },
      xAxis: {
        data: dataAxis,
        axisLabel: {
          inside: true,
          color: '#fff',
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        z: 10,
      },
      yAxis: {
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          textStyle: {
            color: '#999',
          },
        },
      },
      dataZoom: [
        {
          type: 'inside',
        },
      ],
      series: [
        {
          // For shadow
          type: 'bar',
          itemStyle: {
            color: 'rgba(0,0,0,0.05)'
          },
          barGap: '-100%',
          barCategoryGap: '40%',
          //commented the data below because it may be useful for when data becomes more dynamic
          //data: dataShadow,

          //data with specific colors for demo purposes of critical values
          data: [
            {
              value: 20,
              itemStyle: {color: 'deepskyblue'},
            },
            {
              value: 30,
              itemStyle: {color: 'deepskyblue'},
            },
            {
              value: 35,
              itemStyle: {color: 'deepskyblue'},
            },
            {
              value: 42,
              itemStyle: {color: 'deepskyblue'},
            },
            {
              value: 62,
              itemStyle: {color: 'rgb(220, 0, 0)'},
            },
            {
              value: 60,
              itemStyle: {color: 'rgb(220, 0, 0)'},
            },
            {
              value: 55,
              itemStyle: {color: 'deepskyblue'},
            },
            {
              value: 50,
              itemStyle: {color: 'deepskyblue'},
            },
            {
              value: 52,
              itemStyle: {color: 'deepskyblue'},
            }
        ],
          animation: false,
        },
        {
          type: 'bar',
          itemStyle: {
            color: "deepskyblue"
          },
          emphasis: {
            itemStyle: {
              color: "deepskyblue"
            }
          },
          //data,
        },
      ],
    };
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
}
