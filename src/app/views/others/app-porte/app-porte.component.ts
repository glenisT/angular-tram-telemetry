import { DatePipe } from "@angular/common";
import {
  Component,
  OnInit,
  AfterViewInit,
} from "@angular/core";
import { matxAnimations } from "app/shared/animations/matx-animations";
import { ThemeService } from "app/shared/services/theme.service";
import { DataSaverService } from "app/views/data-saver.service";

@Component({
  selector: "app-blank",
  templateUrl: "./app-porte.component.html",
  styleUrls: ["./app-porte.component.scss"],
  animations: matxAnimations
})
export class AppPorteComponent implements OnInit, AfterViewInit {

  primaPortaChartBar: any;
  secondaPortaChartBar: any;
  terzaPortaChartBar: any;
  updatePortaChartBar: any;
  updatePortaChartBar2: any;
  updatePortaChartBar3: any;

  private oneDay = 24 * 3600 * 1000;
  private oneHour = 3600 * 1000;
  private now: Date;
  private value: number ;
  private data: any[];
  private data2: any[];
  private data3: any[];
  private timer: any;

  statCardList = this.dataService.statCardList;

  //used for creating and customizing the gauge chart
  gaugeApertura1Type = "arch";
  gaugeApertura1Value = 24;
  gaugeApertura1Max = 100;
  gaugeApertura1Label = "";
  gaugeApertura1AppendText = "V";
  gaugeApertura1Thickness = 20;
  gaugeApertura1ForegroundColor = "deepSkyBlue";
  gaugeApertura1BackgroundColor = "rgb(55, 55, 153)";
  gaugeApertura1Size = 200;

  gaugeChiusura1Type = "arch";
  gaugeChiusura1Value = 60;
  gaugeChiusura1Max = 100;
  gaugeChiusura1Label = "";
  gaugeChiusura1AppendText = "V";
  gaugeChiusura1Thickness = 20;
  gaugeChiusura1ForegroundColor = "deepSkyBlue";
  gaugeChiusura1BackgroundColor = "rgb(55, 55, 153)";
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
  gaugeChiusura2Size = 200;

  gaugeApertura3Type = "arch";
  gaugeApertura3Value = 24;
  gaugeApertura3Min = 0;
  gaugeApertura3Max = 100;
  gaugeApertura3Label = "";
  gaugeApertura3AppendText = "V";
  gaugeApertura3Thickness = 20;
  gaugeApertura3ForegroundColor = "deepSkyBlue";
  gaugeApertura3BackgroundColor = "rgb(55, 55, 153)";
  gaugeApertura3Size = 200;

  gaugeChiusura3Type = "arch";
  gaugeChiusura3Value = 21;
  gaugeChiusura3Min = 0;
  gaugeChiusura3Max = 100;
  gaugeChiusura3Label = "";
  gaugeChiusura3AppendText = "V";
  gaugeChiusura3Thickness = 20;
  gaugeChiusura3ForegroundColor = "deepSkyBlue";
  gaugeChiusura3BackgroundColor = "rgb(55, 55, 153)";
  gaugeChiusura3Size = 200;

  //----------------------------------------------------------------------

  displayedColumns: string[] = ["name", "price", "available", "action"];

  constructor(private themeService: ThemeService, private dataService: DataSaverService, public datepipe: DatePipe) {}
  
  currentDateTime =this.datepipe.transform((new Date), 'h:mm:ss');
  timeUpdate = setInterval(() => {
    this.currentDateTime =this.datepipe.transform((new Date), 'h:mm:ss');
  }, 1000);

  //waiting function
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async changeRange()
  {
    //display values on first screen
    for (let i = 0; i < 25; i++) { //'i' sets how many values per single screen of the chart will be shown
      this.data.push(this.preRandomData());
      this.data2.push(this.preRandomData2());
      this.data3.push(this.preRandomData3());
    }
    for(let i = 0; i >= 0; i++)
    {
      await this.sleep(18000);  //waitForFullGiro 
      //for (let i = 0; i < 4; i++) {
        await this.sleep(2000) //waitToOpenDoors
        this.data.push(this.randomData());  //open doors
        this.gaugeApertura1Value = Math.round(this.value);
        if (this.gaugeApertura1Value >= 80) {
          this.gaugeApertura1ForegroundColor = "#ff0000";
        }
        else {
          this.gaugeApertura1ForegroundColor = "deepSkyBlue";
        }

        this.data2.push(this.randomData2());  //open doors
        this.gaugeApertura2Value = Math.round(this.value);
        if (this.gaugeApertura2Value >= 80) {
          this.gaugeApertura2ForegroundColor = "#ff0000";
        }
        else {
          this.gaugeApertura2ForegroundColor = "deepSkyBlue";
        }

        this.data3.push(this.randomData3());  //open doors
        this.gaugeApertura3Value = Math.round(this.value);
        if (this.gaugeApertura3Value >= 80) {
          this.gaugeApertura3ForegroundColor = "#ff0000";
        }
        else {
          this.gaugeApertura3ForegroundColor = "deepSkyBlue";
        }
      //}
      await this.sleep(10000);  //waitToCloseDoors = totalTimeInStation - waitToOpenDoors
      //for (let i = 0; i < 4; i++) {
        this.data.push(this.randomData());  //close doors
        this.gaugeChiusura1Value = Math.round(this.value);
        if (this.gaugeChiusura1Value >= 80) {
          this.gaugeChiusura1ForegroundColor = "#ff0000";
        }
        else {
          this.gaugeChiusura1ForegroundColor = "deepSkyBlue";
        }

        this.data2.push(this.randomData2());  //close doors
        this.gaugeChiusura2Value = Math.round(this.value);
        if (this.gaugeChiusura2Value >= 80) {
          this.gaugeChiusura2ForegroundColor = "#ff0000";
        }
        else {
          this.gaugeChiusura2ForegroundColor = "deepSkyBlue";
        }
        
        this.data3.push(this.randomData2());  //close doors
        this.gaugeChiusura3Value = Math.round(this.value);
        if (this.gaugeChiusura3Value >= 80) {
          this.gaugeChiusura3ForegroundColor = "#ff0000";
        }
        else {
          this.gaugeChiusura3ForegroundColor = "deepSkyBlue";
        }
      //}
    }
  }

  async clearData()
  {
    //wait 3 stops (chart becomes too crowded)
    //add cycles as needed
    //1 cycle = waitForFullGiro + waitToOpenDoors + waitToCloseDoors
    await this.sleep(90000); 
    this.data = [];
    this.data2 = [];
    this.data3 = [];
  }

  ngAfterViewInit() {}
  ngOnInit() {
    this.themeService.onThemeChange.subscribe(activeTheme => {
      this.initPrimaPortaChartBar(activeTheme);
      this.initSecondaPortaChartBar(activeTheme);
      this.initTerzaPortaChartBar(activeTheme);
    });
    this.initPrimaPortaChartBar(this.themeService.activatedTheme);
    this.initSecondaPortaChartBar(this.themeService.activatedTheme);
    this.initTerzaPortaChartBar(this.themeService.activatedTheme);

    this.dataService.ngOnInit();

    // generate some random testing data:
    this.data = [];
    this.data2 = [];
    this.data3 = [];
    this.now = new Date(2022, 20, 5);
    this.value = Math.random() * 100; //multiplication number sets the maximum value of the random values that will be generated
 
    this.changeRange();

    // Mock dynamic data:
    this.timer = setInterval(() => {
      for (let i = 0; i < 1; i++) { //use num in 'i < num' to manipulate how many new values will arrive at once
        this.data.shift();
        this.data2.shift();
        this.data3.shift();
        this.data.push(this.preRandomData());
        this.data2.push(this.preRandomData2());
        this.data3.push(this.preRandomData3());
      }

      // update chart series data:
      this.updatePortaChartBar = {
        series: [{
          data: this.data
        }]
      };
      this.updatePortaChartBar2 = {
        series: [{
          data: this.data2
        }]
      };
      this.updatePortaChartBar3 = {
        series: [{
          data: this.data3
        }]
      };
    }, 1000);

    // this.clearData();
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
        show: false,
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
        show: false,
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
        data: this.data2,
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

  initTerzaPortaChartBar(theme) {
    this.terzaPortaChartBar = {
      title: {
        text: 'Porta 3',
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
        show: false,
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
        data: this.data3,
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

  async changeValueRange()
  {
    while(true)
    {
      this.preRandomData();
      this.preRandomData2();
      this.preRandomData3();
      await this.sleep(12000);
      this.randomData();
      this.randomData2();
      this.randomData3();
    }
  }

  randomData() {
    this.now = new Date(this.now.getTime() + this.oneDay); //determines the intervals of time which display on the X axis
    this.value = Math.random() * 40 + 60;  //determines next value to come to the chart according to a certain interval
    return {
      name: this.now.toString(),
      value: [
        [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'),  //X axis format
        Math.round(this.value)
      ]
    };
  }

  randomData2() {
    this.now = new Date(this.now.getTime() + this.oneDay); //determines the intervals of time which display on the X axis
    this.value = Math.random() * 40 + 60;  //determines next value to come to the chart according to a certain interval
    return {
      name: this.now.toString(),
      value: [
        [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'),  //X axis format
        Math.round(this.value)
      ]
    };
  }

  randomData3() {
    this.now = new Date(this.now.getTime() + this.oneDay); //determines the intervals of time which display on the X axis
    this.value = Math.random() * 40 + 60;  //determines next value to come to the chart according to a certain interval
    return {
      name: this.now.toString(),
      value: [
        [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'),  //X axis format
        Math.round(this.value)
      ]
    };
  }

  preRandomData() {
    this.now = new Date(this.now.getTime() + this.oneDay); //determines the intervals of time which display on the X axis
    this.value = Math.random() * 30;  //determines next value to come to the chart according to a certain interval
    return {
      name: this.now.toString(),
      value: [
        [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'),  //X axis format
        Math.round(this.value)
      ]
    };
  }

  preRandomData2() {
    this.now = new Date(this.now.getTime() + this.oneDay); //determines the intervals of time which display on the X axis
    this.value = Math.random() * 30;  //determines next value to come to the chart according to a certain interval
    return {
      name: this.now.toString(),
      value: [
        [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'),  //X axis format
        Math.round(this.value)
      ]
    };
  }

  preRandomData3() {
    this.now = new Date(this.now.getTime() + this.oneDay); //determines the intervals of time which display on the X axis
    this.value = Math.random() * 30;  //determines next value to come to the chart according to a certain interval
    return {
      name: this.now.toString(),
      value: [
        [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'),  //X axis format
        Math.round(this.value)
      ]
    };
  }
}
