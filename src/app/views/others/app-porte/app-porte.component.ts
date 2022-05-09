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

  private oneDay = 24 * 3600 * 1000;
  private now: Date;
  private value: number ;
  private data: any[];
  private timer: any;

  statCardList = [
    {
      icon: "people",
      title: "New Leads",
      amount: "3,050",
      color: "primary"
    },
    {
      icon: "attach_money",
      title: "This week Sales",
      amount: "$80,500",
      color: "primary"
    },
    {
      icon: "store",
      title: "Inventory Status",
      amount: "8.5% Stock Surplus",
      color: "accent"
    },
    {
      icon: "shopping_cart",
      title: "Orders to deliver",
      amount: "305 Orders",
      color: "accent"
    }
  ];

  displayedColumns: string[] = ["name", "price", "available", "action"];

  constructor(private themeService: ThemeService) {}

  ngAfterViewInit() {}
  ngOnInit() {
    this.themeService.onThemeChange.subscribe(activeTheme => {
      this.initDoughNutPieOptions(activeTheme);
      this.initDailyTrafficChartBar(activeTheme);
    });
    this.initDailyTrafficChartBar(this.themeService.activatedTheme);
    this.initDoughNutPieOptions(this.themeService.activatedTheme);

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

  initDailyTrafficChartBar(theme) {
    this.dailyTrafficChartBar = {
      title: {
        text: 'Consumo di Corrente - Porta 1'
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
        show: false,
        type: 'time',
        splitLine: {
          show: false
        }
      },
      yAxis: {
        name : 'Corrente',
        nameLocation: 'middle',
        nameGap: 50,
        nameTextStyle: {
          fontWeight: 'bold',
          fontFamily: 'roboto'
        },
        type: 'value',
        boundaryGap: [0, '100%'],
        splitArea: {
          show: true
        },
        splitLine: {
          show: false
        }
      },
      dataZoom: [
        {
            id: 'dataZoomX',
            type: 'slider',
            xAxisIndex: [0],
            filterMode: 'filter'
        },
        {
            id: 'dataZoomY',
            type: 'slider',
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
        smooth:true
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

  initDoughNutPieOptions(theme) {
    this.doughNutPieOptions = {
      backgroundColor: "transparent",
      color: [
        "#f44336",
        "#ff9e43",
        "rgba(116, 103, 239, 1)"
      ],
      legend: {
        show: true,
        itemGap: 20,
        icon: "circle",
        bottom: 0,
        textStyle: {
          fontSize: 13,
          fontFamily: "roboto"
        }
      },
      tooltip: {
        show: false,
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      xAxis: [
        {
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          }
        }
      ],
      yAxis: [
        {
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          }
        }
      ],

      series: [
        {
          name: "Traffic Rate",
          type: "pie",
          radius: ["45%", "72.55%"],
          center: ["50%", "50%"],
          avoidLabelOverlap: false,
          hoverOffset: 5,
          stillShowZeroSum: false,

          label: {
            normal: {
              show: false,
              position: "center",
              textStyle: {
                fontSize: "13",
                fontWeight: "normal"
              },
              formatter: "{a}"
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "15",
                fontWeight: "normal",
                color: "rgba(116, 103, 239, 1)"
              },
              formatter: "{b} \n{c} ({d}%)"
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            {
              value: 65,
              name: "Google"
            },
            {
              value: 20,
              name: "Facebook"
            },
            { value: 15, name: "Others" }
          ],

          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }
      ]
    };
  }

  getProductStatus(value) {
    if (value) {
      if (value < 20) {
        return {
          color: "accent",
          status: `${value} available`
        };
      } else
        return {
          color: "primary",
          status: `in stock`
        };
    } else
      return {
        color: "warn",
        status: `out of stcok`
      };
  }
}
