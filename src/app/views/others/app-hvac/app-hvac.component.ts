import {
  Component,
  OnInit,
  AfterViewInit
} from "@angular/core";
import { matxAnimations } from "app/shared/animations/matx-animations";
import { ThemeService } from "app/shared/services/theme.service";

@Component({
  selector: "app-blank",
  templateUrl: "./app-hvac.component.html",
  styleUrls: ["./app-hvac.component.scss"],
  animations: matxAnimations
})
export class AppHvacComponent implements OnInit, AfterViewInit {
  trafficData: any;
  saleData: any;

  dioxideChartBar: any;
  pmvChartBar: any;
  trafficSourcesChart: any;
  countryTrafficStats: any[];
  doughNutPieOptions: any;

  //used for creating and customizing the gauge chart
  gaugeTempType = "arch";
  gaugeTempValue = 23.5;
  gaugeTempMin = 23.5;
  gaugeTempMax = 24.5;
  gaugeTempLabel = "";
  gaugeTempAppendText = "°C";
  gaugeTempThickness = 20;
  gaugeTempForegroundColor = "deepSkyBlue";
  gaugeTempBackgroundColor = "rgb(55, 55, 153)";
  gaugeTempSize = 200;

  gaugePpmType = "arch";
  gaugePpmValue = 500;
  gaugePpmMin = 300;
  gaugePpmMax = 800;
  gaugePpmLabel = "";
  gaugePpmAppendText = "ppm";
  gaugePpmThickness = 20;
  gaugePpmForegroundColor = "deepSkyBlue";
  gaugePpmBackgroundColor = "rgb(55, 55, 153)";
  gaugePpmSize = 200;

  gaugeUmiditaType = "arch";
  gaugeUmiditaValue = 44;
  gaugeUmiditaMin = 43;
  gaugeUmiditaMax = 47;
  gaugeUmiditaLabel = "";
  gaugeUmiditaAppendText = "%";
  gaugeUmiditaThickness = 20;
  gaugeUmiditaForegroundColor = "#ff0000";
  gaugeUmiditaBackgroundColor = "rgb(55, 55, 153)";
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
  gaugePmvSize = 200;

  //gauge animation duration in ms
  gaugeDuration = 500;

  //--------------------------------------------------------------------

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

  //values by which the temperature varies
  //if it is needed to have fluctuations synchronized in time, with no stops, remove 0 from array and lower the 'max' argument by 1 where getRandomInt() is used
  temperatureDeltas = [-0.2, -0.1, 0, 0.1, 0.2];

  //random int value for indexing through temperatureDeltas
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive, so (0,5) = [0, 1, 2, 3, 4]
  }

  async changeTemperature() {
    while (true) {
      //a lower timeout might cause the function to behave badly, due to TS not being very accurate with operations on FLOAT values 
      //& the gauge library's animation times interferance with the callbacks on the browser
      await this.sleep(5000);
      if(this.gaugeTempValue >= 24.4) //24.4 because a +0.2 would send this beyond the maximum
      {
        //keep only negative values & +0.1 so it doesn't go over maximum
        this.gaugeTempValue = this.gaugeTempValue + this.temperatureDeltas[this.getRandomInt(0, 4)];
      }
      else if(this.gaugeTempValue <= 23.6)
      {
        //keep only positive values to avoid the temperature going lower than the minimum value
        this.gaugeTempValue = this.gaugeTempValue + this.temperatureDeltas[this.getRandomInt(2, 5)];
      }
      else
      {
        //make all values available
        this.gaugeTempValue = this.gaugeTempValue + this.temperatureDeltas[this.getRandomInt(0, 5)];
      }
    }
  }

  async changeHumidity() {
    while (true) {
      await this.sleep(5000);
      if(this.gaugeUmiditaValue == this.gaugeUmiditaMax)
      {
        this.gaugeUmiditaValue = this.gaugeUmiditaValue + this.temperatureDeltas[this.getRandomInt(1, 3)] * 10;
      }
      else if(this.gaugeUmiditaValue == this.gaugeUmiditaMin)
      {
        this.gaugeUmiditaValue = this.gaugeUmiditaValue + this.temperatureDeltas[this.getRandomInt(2, 4)] * 10;
      }
      else
      {
        this.gaugeUmiditaValue = this.gaugeUmiditaValue + this.temperatureDeltas[this.getRandomInt(1, 4)] * 10;
      }
    }
  }

  async changeDioxide() {
    while (true) {
      //set for(){} iteration count according to the intervals needed and the time it takes the tram to complete 1 ride according to the formulas:
      //durationOfFullRide = iterationCount * increasePpmInterval + waitBeforeDoorsOpen
      //iterationCount = durationOfFullRide / increasePpmInterval
      if(this.gaugePpmValue <= this.gaugePpmMin)
      {
        this.gaugePpmValue = 300;
      }
      for(let i = 0; i < 3; i++)
      {
        await this.sleep(5000); //increasePpmInterval
        this.gaugePpmValue = this.gaugePpmValue + this.getRandomInt(1, 10);

        if(this.gaugePpmValue >= 700)
        {
          this.gaugePpmLabel = "Livello CO2 alto!";
          this.gaugePpmForegroundColor = "red";
          if(this.gaugePpmValue >= this.gaugePpmMax)
          {
            this.gaugePpmValue = 800;
            this.gaugePpmLabel = "Livello CO2 alto!";
            this.gaugePpmForegroundColor = "red";
          }
        }
      }
      await this.sleep(3000);  //waitBeforeDoorsOpen
      this.gaugePpmValue = this.gaugePpmValue - 10 * this.getRandomInt(2, 4);  //when doors open, drop PPM by 20 or 30ppm
    }
  }

  async changePmv() {
    while (true) {
      await this.sleep(1000);
      if(this.gaugePmvValue >= 1.4)
      {
        this.gaugePmvValue = this.gaugePmvValue + this.temperatureDeltas[this.getRandomInt(0, 4)];
      }
      else if(this.gaugePmvValue <= 0.6)
      {
        this.gaugePmvValue = this.gaugePmvValue + this.temperatureDeltas[this.getRandomInt(2, 5)];
      }
      else
      {
        this.gaugePmvValue = this.gaugePmvValue + this.temperatureDeltas[this.getRandomInt(0, 5)];
      }
    }
  }

  ngAfterViewInit() {}
  ngOnInit() {
    this.themeService.onThemeChange.subscribe(activeTheme => {
      this.initDioxideChartBar(activeTheme);
      this.initPmvChartBar(activeTheme);
    });
    this.initDioxideChartBar(this.themeService.activatedTheme);
    this.initPmvChartBar(this.themeService.activatedTheme);

    //put all the 'changeGauge()' functions inside this timeout if the tram begins in the station, waiting 12seconds
    //setTimeout(() => {
    //}, 12000);

    this.changeTemperature();
    this.changeHumidity();
    this.changeDioxide();

    //add km to km percorsi card
    setInterval(() => {
      for(let i = 0; i <= 0; i++)
      {
        this.statCardList[2].amount = +this.statCardList[2].amount + 1;
      }
    }, 120000);  //add 1km every 2minutes to total KM percorsi
  }

  initDioxideChartBar(theme) {
    this.dioxideChartBar = {
      title: {
        show:true,
        text:"Valore CO2",
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
          data: [500, 550, 560, 570, 590, 500, 520, 515, 540],
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
          "14:19:30",
          "14:20:00",
          "14:20:30",
          "14:21:00",
          "14:21:30",
          "14:22:00",
          "14:22:30",
          "14:23:00",
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
        min: 300,
        max: 800,
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

  initPmvChartBar(theme) {
    this.pmvChartBar = {
      title: {
        show:true,
        text:"Indice PMV",
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
          data: [1, 1.1, 1.4, 1.3, 1.5, 1.3, 1.4, 1.5, 1, 1.2, 1.1, 1],
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
          "14:23:19",
          "14:23:20",
          "14:23:21",
          "14:23:22",
          "14:23:23",
          "14:23:24",
          "14:23:25",
          "14:23:26",
          "14:23:27",
          "14:23:28",
          "14:23:29",
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
        max: 3.0,
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
