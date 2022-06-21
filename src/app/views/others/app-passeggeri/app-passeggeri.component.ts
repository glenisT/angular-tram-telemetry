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
  templateUrl: "./app-passeggeri.component.html",
  styleUrls: ["./app-passeggeri.component.scss"],
  animations: matxAnimations
})
export class AppPasseggeriComponent implements OnInit, AfterViewInit {

  dbChartBar: any;

  passeggeri: any;

  //used for creating and customizing the gauge chart
  gaugePasseggeriType = "full";
  gaugePasseggeriValue = 54;
  gaugePasseggeriMin = 50;
  gaugePasseggeriMax = 70;
  gaugePasseggeriLabel = "pax";
  gaugePasseggeriAppendText = "";
  gaugePasseggeriThickness = 20;
  gaugePasseggeriForegroundColor = "deepSkyBlue";
  gaugePasseggeriBackgroundColor = "rgb(55, 55, 153)";
  gaugePasseggeriSize = 300;

  gaugeDbType = "arch";
  gaugeDbValue = 52;
  gaugeDbMin = 40;
  gaugeDbMax = 70;
  gaugeDbLabel = "";
  gaugeDbAppendText = "db";
  gaugeDbThickness = 20;
  gaugeDbForegroundColor = "#ff0000";
  gaugeDbBackgroundColor = "rgb(55, 55, 153)";
  gaugeDbSize = 300;

  //gauge animation duration in ms
  gaugeDuration = 500;

  //---------------------------------------------------------

  statCardList = this.data.statCardList;

  displayedColumns: string[] = ["name", "price", "available", "action"];

  message: number;

  constructor(private themeService: ThemeService, private data: DataSaverService) {}

  //waiting function
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  //random int value for indexing through temperatureDeltas
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive, so (0,5) = [0, 1, 2, 3, 4]
  }

  passeggeriDeltas = [-5, -2, 2, 5];

  async changePax() {
    while (true) {
      //set for(){} iteration count according to the intervals needed and the time it takes the tram to complete 1 ride according to the formulas:
      //durationOfFullRide is the time it takes the train to complete 1 giro (from leaving station to returning to station)
      //timeInStation is the time the train stays in the station
      //timeUntilOpenDoors is the imagined time it takes for the doors to open and passengers to get out AFTER the train has stopped

      //iterationCount = timeUntilOpenDoors + durationOfFullRide / durationOfFullRide
      //timeLeftInStation = (durationOfFullRide + timeInStation) - (durationOfFullRide + timeUntilOpenDoors + passengersGetOut)
      //timeInStation = timeUntilOpenDoors + passengersGetOut + timeLeftInStation
      if(this.gaugePasseggeriValue <= this.gaugePasseggeriMin)
      {
        this.gaugePasseggeriValue = 50;
      }
      for(let i = 0; i < 1; i++)
      {
        await this.sleep(18000); //durationOfFullRide
        await this.sleep(2000); //timeUntilOpenDoors
        this.gaugePasseggeriValue = this.gaugePasseggeriValue + this.passeggeriDeltas[this.getRandomInt(0, 2)]; //passengers get out of train
        this.gaugeDbValue = this.gaugeDbValue + this.passeggeriDeltas[this.getRandomInt(2, 4)]; //noise level rises
        await this.sleep(5000); //passengersGetOut (wait for passengers to get out)
        this.gaugePasseggeriValue = this.gaugePasseggeriValue + this.passeggeriDeltas[this.getRandomInt(2, 4)]; //new passengers get inside train
        this.gaugeDbValue = this.gaugeDbValue + 2; //noise level rises

        if(this.gaugePasseggeriValue >= 60)
        {
          //this.gaugePasseggeriLabel = "Numero pass alto!";
          this.gaugePasseggeriForegroundColor = "red";
          if(this.gaugePasseggeriValue >= this.gaugePasseggeriMax)
          {
            this.gaugePasseggeriValue = 70;
            //this.gaugePasseggeriLabel = "Numero pass alto!";
            this.gaugePasseggeriForegroundColor = "red";
          }
        }
      }
      await this.sleep(5000);  //timeLeftInStation
      this.gaugeDbValue = this.gaugeDbValue - 5; //noise level drops
    }
  }

  ngAfterViewInit() {}
  ngOnInit() {

    this.data.currentMessage.subscribe(message => this.message = message);

    this.themeService.onThemeChange.subscribe(activeTheme => {
      this.initDbChartBar(activeTheme);
    });
    this.initDbChartBar(this.themeService.activatedTheme);

    this.changePax();

    this.data.ngOnInit();

    const dataAxis = [
          "9:00-10:00",
          "10:00-11:00",
          "11:00-12:00",
          "12:00-13:00",
          "13:00-14:00",
          "14:00-15:00",
          "15:00-16:00",
          "16:00-17:00",
          "17:00-18:00"
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
          inside: false,
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
      series: [
        {
          // For shadow
          type: 'bar',
          itemStyle: {
            color: 'rgba(0,0,0,0.05)'
          },
          barGap: '-100%',
          barCategoryGap: '30%',
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
              itemStyle: {color: '#ff0000'},
            },
            {
              value: 60,
              itemStyle: {color: '#ff0000'},
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
          color: "white",
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
          data: [40, 45, 50, 52, 54, 56, 61, 59, 50],
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
          "9:00-10:00",
          "10:00-11:00",
          "11:00-12:00",
          "12:00-13:00",
          "13:00-14:00",
          "14:00-15:00",
          "15:00-16:00",
          "16:00-17:00",
          "17:00-18:00",
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
        },
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
      ]
    };
  }
}
