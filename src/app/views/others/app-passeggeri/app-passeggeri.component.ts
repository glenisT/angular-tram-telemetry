import {
  Component,
  OnInit,
  AfterViewInit
} from "@angular/core";
import { matxAnimations } from "app/shared/animations/matx-animations";
import { ThemeService } from "app/shared/services/theme.service";

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

  //---------------------------------------------------------

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
      //openDoors is the imagined time it takes for the doors to open and passengers to get out AFTER the train has stopped

      //timeUntilOpenDoors = durationOfFullRide + openDoors | to make it seem more realistic(doors take some time to open)
      //iterationCount = timeUntilOpenDoors - openDoors / durationOfFullRide
      //timeLeftInStation = durationOfFullRide + (timeUntilDoorsOpen - openDoors) - (timeUntilDoorsOpen + passengersGetOut)
      //timeInStation = timeUntilOpenDoors - durationOfFullRide + passengersGetOut + timeLeftInStation
      if(this.gaugePasseggeriValue <= this.gaugePasseggeriMin)
      {
        this.gaugePasseggeriValue = 50;
      }
      for(let i = 0; i < 1; i++)
      {
        await this.sleep(20000); //timeUntilOpenDoors
        this.gaugePasseggeriValue = this.gaugePasseggeriValue + this.passeggeriDeltas[this.getRandomInt(0, 2)]; //passengers get out of train
        await this.sleep(5000); //passengersGetOut (wait for passengers to get out)
        this.gaugePasseggeriValue = this.gaugePasseggeriValue + this.passeggeriDeltas[this.getRandomInt(2, 4)]; //new passengers get inside train

        if(this.gaugePasseggeriValue >= 60)
        {
          this.gaugePasseggeriLabel = "Numero pass alto!";
          this.gaugePasseggeriForegroundColor = "red";
          if(this.gaugePasseggeriValue >= this.gaugePasseggeriMax)
          {
            this.gaugePasseggeriValue = 70;
            this.gaugePasseggeriLabel = "Numero pass alto!";
            this.gaugePasseggeriForegroundColor = "red";
          }
        }
      }
      await this.sleep(5000);  //timeLeftInStation
    }
  }

  ngAfterViewInit() {}
  ngOnInit() {
    this.themeService.onThemeChange.subscribe(activeTheme => {
      this.initDbChartBar(activeTheme);
    });
    this.initDbChartBar(this.themeService.activatedTheme);

    this.changePax();

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
