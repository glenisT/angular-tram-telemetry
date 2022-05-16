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

  primaPortaChartBar: any;
  updatePortaChartBar: any;
  trafficSourcesChart: any;
  countryTrafficStats: any[];
  doughNutPieOptions: any;

  secondaPortaChartBar: any;

  private oneDay = 24 * 3600 * 1000;
  private oneHour = 3600 * 1000;
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
  gaugeApertura1Type = "arch";
  gaugeApertura1Value = 24;
  gaugeApertura1Max = 100;
  gaugeApertura1Label = "";
  gaugeApertura1AppendText = "V";
  gaugeApertura1Thickness = 20;
  gaugeApertura1ForegroundColor = "deepSkyBlue";
  gaugeApertura1BackgroundColor = "rgb(55, 55, 153)";
  gaugeApertura1Markers = { "50": { color: "#555", type: "triangle", size: 8, label: "Goal", font: "12px arial" }};
  gaugeApertura1Size = 200;

  gaugeChiusura1Type = "arch";
  gaugeChiusura1Value = 60;
  gaugeChiusura1Max = 100;
  gaugeChiusura1Label = "";
  gaugeChiusura1AppendText = "V";
  gaugeChiusura1Thickness = 20;
  gaugeChiusura1ForegroundColor = "deepSkyBlue";
  gaugeChiusura1BackgroundColor = "rgb(55, 55, 153)";
  gaugeChiusura1Markers = { "50": { color: "#555", type: "triangle", size: 8, label: "Goal", font: "12px arial" }};
  gaugeChiusura1Size = 200;

  gaugeApertura2Type = "arch";
  gaugeApertura2Value = 26;
  gaugeApertura2Min = 0;
  gaugeApertura2Max = 100;
  gaugeApertura2Label = "";
  gaugeApertura2AppendText = "V";
  gaugeApertura2Thickness = 20;
  gaugeApertura2ForegroundColor = "deepSkyBlue";
  gaugeApertura2BackgroundColor = "rgb(55, 55, 153)";
  gaugeApertura2Markers = { "50": { color: "#555", type: "triangle", size: 8, label: "Goal", font: "12px arial" }};
  gaugeApertura2Size = 200;

  gaugeChiusura2Type = "arch";
  gaugeChiusura2Value = 30;
  gaugeChiusura2Min = 0;
  gaugeChiusura2Max = 100;
  gaugeChiusura2Label = "";
  gaugeChiusura2AppendText = "V";
  gaugeChiusura2Thickness = 20;
  gaugeChiusura2ForegroundColor = "deepSkyBlue";
  gaugeChiusura2BackgroundColor = "rgb(55, 55, 153)";
  gaugeChiusura2Markers = { "50": { color: "#555", type: "triangle", size: 8, label: "Goal", font: "12px arial" }};
  gaugeChiusura2Size = 200;

  displayedColumns: string[] = ["name", "price", "available", "action"];

  constructor(private themeService: ThemeService) {}

  ngAfterViewInit() {}
  ngOnInit() {
    this.themeService.onThemeChange.subscribe(activeTheme => {
      this.initPrimaPortaChartBar(activeTheme);
      this.initSecondaPortaChartBar(activeTheme);
    });
    this.initPrimaPortaChartBar(this.themeService.activatedTheme);
    this.initSecondaPortaChartBar(this.themeService.activatedTheme);

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
     this.value = Math.random() * 100; //multiplication number sets the maximum value of the random values that will be generated
 
     for (let i = 0; i < 50; i++) { //'i' sets how many values per single screen of the chart will be shown
       this.data.push(this.randomData());
     }

    // Mock dynamic data:
    this.timer = setInterval(() => {
      for (let i = 0; i < 1; i++) { //use num in 'i < num' to manipulate how many values will be displayed at once
        this.data.shift();
        this.data.push(this.randomData());
      }

      // update chart series data:
      this.updatePortaChartBar = {
        series: [{
          data: this.data
        }]
      };
    }, 1000);
  }

  initPrimaPortaChartBar(theme) {
    this.primaPortaChartBar = {
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
        bottom: 200
      },
      tooltip: {
        trigger: 'axis',
        formatter: (params) => {
          params = params[0];
          const date = new Date(params.name);
          return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
        },
        show: true,

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
      xAxis: {
        type: 'time',        
        showGrid: false,
        boundaryGap: false,
        splitLine: {
          show: false
        },
        axisLabel: {
          color: "#ccc",
          margin: 20
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: 100,
        boundaryGap: [0, '100%'],
        
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
      series: [{
        name: 'Mocking Data',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: this.data,
        smooth: false,
        lineStyle: {
          width: 2,
          color: "#fff"
        },
        areaStyle: {},
      }],
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
    ]
    };
  }

  initSecondaPortaChartBar(theme) {
    this.secondaPortaChartBar = {
      title: {
        text: 'Porta 2',
        textStyle: {
          color: "white"
        }
      },
      grid: {
        top: 56,
        left: 56,
        right: 25,
        bottom: 200
      },
      tooltip: {
        trigger: 'axis',
        formatter: (params) => {
          params = params[0];
          const date = new Date(params.name);
          return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
        },
        show: true,

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
      xAxis: {
        type: 'time',        
        showGrid: false,
        boundaryGap: false,
        splitLine: {
          show: false
        },
        axisLabel: {
          color: "#ccc",
          margin: 20
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: 100,
        boundaryGap: [0, '100%'],
        
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
      series: [{
        name: 'Mocking Data',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: this.data,
        smooth: false,
        lineStyle: {
          width: 2,
          color: "#fff"
        },
        areaStyle: {},
      }],
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
    ]
    };
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  randomData() {
    this.now = new Date(this.now.getTime() + this.oneDay); //determines the intervals of time which display on the X axis
    this.value = Math.random() * 100;  //determines next value to come to the chart according to a certain interval
    return {
      name: this.now.toString(),
      value: [
        [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'),  //X axis format
        Math.round(this.value)
      ]
    };
  }
}
