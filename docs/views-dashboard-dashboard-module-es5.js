function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-dashboard-dashboard-module"], {
  /***/
  "./src/app/views/dashboard/analytics/analytics.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/views/dashboard/analytics/analytics.component.ts ***!
    \******************************************************************/

  /*! exports provided: AnalyticsComponent */

  /***/
  function srcAppViewsDashboardAnalyticsAnalyticsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnalyticsComponent", function () {
      return AnalyticsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var app_shared_animations_matx_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! app/shared/animations/matx-animations */
    "./src/app/shared/animations/matx-animations.ts");
    /* harmony import */


    var app_shared_services_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! app/shared/services/theme.service */
    "./src/app/shared/services/theme.service.ts");
    /* harmony import */


    var app_views_data_saver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! app/views/data-saver.service */
    "./src/app/views/data-saver.service.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var ngx_gauge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-gauge */
    "./node_modules/ngx-gauge/__ivy_ngcc__/fesm2015/ngx-gauge.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _shared_pipes_number_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../shared/pipes/number.pipe */
    "./src/app/shared/pipes/number.pipe.ts");

    var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    var AnalyticsComponent = /*#__PURE__*/function () {
      function AnalyticsComponent(themeService, data) {
        _classCallCheck(this, AnalyticsComponent);

        this.themeService = themeService;
        this.data = data; //used for creating and customizing the gauge chart

        this.gaugeType = "arch";
        this.message = this.data.message;
        this.gaugeMax = 50;
        this.gaugeLabel = "Velocita";
        this.gaugeAppendText = "km/h";
        this.gaugeThickness = 35;
        this.gaugeForegroundColor = "deepSkyBlue";
        this.gaugeBackgroundColor = "rgb(55, 55, 153)";
        this.gaugeMarkers = {
          "50": {
            color: "#555",
            type: "triangle",
            size: 8,
            label: "Goal",
            font: "12px arial"
          }
        };
        this.gaugeSize = 600;
        this.gaugePasseggeriType = "full";
        this.gaugePasseggeriValue = 54;
        this.gaugePasseggeriMin = 50;
        this.gaugePasseggeriMax = 70;
        this.gaugePasseggeriLabel = "pax";
        this.gaugePasseggeriAppendText = "";
        this.gaugePasseggeriThickness = 10;
        this.gaugePasseggeriForegroundColor = "deepSkyBlue";
        this.gaugePasseggeriBackgroundColor = "rgb(55, 55, 153)";
        this.gaugePasseggeriSize = 300;
        this.gaugeTempType = "arch";
        this.gaugeTempValue = 23.5;
        this.gaugeTempMin = 15;
        this.gaugeTempMax = 30;
        this.gaugeTempLabel = "";
        this.gaugeTempAppendText = "°C";
        this.gaugeTempThickness = 20;
        this.gaugeTempForegroundColor = "deepSkyBlue";
        this.gaugeTempBackgroundColor = "rgb(55, 55, 153)";
        this.gaugeTempSize = 300;
        this.gaugeUmiditaType = "arch";
        this.gaugeUmiditaValue = 44;
        this.gaugeUmiditaMin = 0;
        this.gaugeUmiditaMax = 80;
        this.gaugeUmiditaLabel = "";
        this.gaugeUmiditaAppendText = "%";
        this.gaugeUmiditaThickness = 20;
        this.gaugeUmiditaForegroundColor = "#ff0000";
        this.gaugeUmiditaBackgroundColor = "rgb(55, 55, 153)";
        this.gaugeUmiditaSize = 300;
        this.gaugeDuration = 500;
        this.statCardList = this.data.statCardList;
        this.displayedColumns = ["name", "price", "available", "action"];
        this.passeggeriDeltas = [-5, -2, 2, 5];
        this.temperatureDeltas = [-0.2, -0.1, 0, 0.1, 0.2];
      } //waiting function


      _createClass(AnalyticsComponent, [{
        key: "sleep",
        value: function sleep(ms) {
          return new Promise(function (resolve) {
            return setTimeout(resolve, ms);
          });
        }
      }, {
        key: "transition",
        value: function transition() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var i;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!true) {
                      _context.next = 18;
                      break;
                    }

                    i = 0;

                  case 2:
                    if (!(i <= 0)) {
                      _context.next = 16;
                      break;
                    }

                    if (!(this.message == 50)) {
                      _context.next = 10;
                      break;
                    }

                    this.message = 50; //reach top speed at 50km/h (to stop incrementation)

                    _context.next = 7;
                    return this.sleep(13000);

                  case 7:
                    //wait 9seconds before slowing down
                    this.message = 0;
                    _context.next = 10;
                    return this.sleep(12000);

                  case 10:
                    _context.next = 12;
                    return this.sleep(100);

                  case 12:
                    //increment speed every 0.1s because 5s/50km = 0.1s/km (formula is maximumSpeed/maximumSpeedReachedInterval = incrementInterval)
                    this.message = this.message + 1;

                  case 13:
                    i++;
                    _context.next = 2;
                    break;

                  case 16:
                    _context.next = 0;
                    break;

                  case 18:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.themeService.onThemeChange.subscribe(function (activeTheme) {});
          this.data.ngOnInit();
          this.changePax();
          this.changeTemperature();
          this.changeHumidity(); //setTimeout(() => {

          this.transition(); //}, 12000) //wait 12seconds in station
        }
      }, {
        key: "getRandomInt",
        value: function getRandomInt(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive, so (0,5) = [0, 1, 2, 3, 4]
        }
      }, {
        key: "changePax",
        value: function changePax() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var i;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!true) {
                      _context2.next = 20;
                      break;
                    }

                    if (this.gaugePasseggeriValue <= this.gaugePasseggeriMin) {
                      this.gaugePasseggeriValue = 50;
                    }

                    i = 0;

                  case 3:
                    if (!(i < 1)) {
                      _context2.next = 16;
                      break;
                    }

                    _context2.next = 6;
                    return this.sleep(18000);

                  case 6:
                    _context2.next = 8;
                    return this.sleep(2000);

                  case 8:
                    this.gaugePasseggeriValue = this.gaugePasseggeriValue + this.passeggeriDeltas[this.getRandomInt(0, 2)];
                    _context2.next = 11;
                    return this.sleep(5000);

                  case 11:
                    this.gaugePasseggeriValue = this.gaugePasseggeriValue + this.passeggeriDeltas[this.getRandomInt(2, 4)];

                    if (this.gaugePasseggeriValue >= 60) {
                      //this.gaugePasseggeriLabel = "Numero pass alto!";
                      this.gaugePasseggeriForegroundColor = "red";

                      if (this.gaugePasseggeriValue >= this.gaugePasseggeriMax) {
                        this.gaugePasseggeriValue = 70; //this.gaugePasseggeriLabel = "Numero pass alto!";

                        this.gaugePasseggeriForegroundColor = "red";
                      }
                    }

                  case 13:
                    i++;
                    _context2.next = 3;
                    break;

                  case 16:
                    _context2.next = 18;
                    return this.sleep(5000);

                  case 18:
                    _context2.next = 0;
                    break;

                  case 20:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "changeTemperature",
        value: function changeTemperature() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!true) {
                      _context3.next = 6;
                      break;
                    }

                    _context3.next = 3;
                    return this.sleep(5000);

                  case 3:
                    if (this.gaugeTempValue >= 24.4) {
                      this.gaugeTempValue = this.gaugeTempValue + this.temperatureDeltas[this.getRandomInt(0, 4)];
                    } else if (this.gaugeTempValue <= 23.6) {
                      this.gaugeTempValue = this.gaugeTempValue + this.temperatureDeltas[this.getRandomInt(2, 5)];
                    } else {
                      this.gaugeTempValue = this.gaugeTempValue + this.temperatureDeltas[this.getRandomInt(0, 5)];
                    }

                    _context3.next = 0;
                    break;

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "changeHumidity",
        value: function changeHumidity() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!true) {
                      _context4.next = 6;
                      break;
                    }

                    _context4.next = 3;
                    return this.sleep(5000);

                  case 3:
                    if (this.gaugeUmiditaValue == 47) {
                      this.gaugeUmiditaValue = this.gaugeUmiditaValue + this.temperatureDeltas[this.getRandomInt(1, 3)] * 10;
                    } else if (this.gaugeUmiditaValue == 43) {
                      this.gaugeUmiditaValue = this.gaugeUmiditaValue + this.temperatureDeltas[this.getRandomInt(2, 4)] * 10;
                    } else {
                      this.gaugeUmiditaValue = this.gaugeUmiditaValue + this.temperatureDeltas[this.getRandomInt(1, 4)] * 10;
                    }

                    _context4.next = 0;
                    break;

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return AnalyticsComponent;
    }();

    AnalyticsComponent.ɵfac = function AnalyticsComponent_Factory(t) {
      return new (t || AnalyticsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_views_data_saver_service__WEBPACK_IMPORTED_MODULE_3__["DataSaverService"]));
    };

    AnalyticsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AnalyticsComponent,
      selectors: [["app-analytics"]],
      decls: 73,
      vars: 71,
      consts: [["id", "graph-container", 1, "mat-bg-primary", "mx--033", "mt--033", "px-24", "pt-24", "pb-96"], [1, "text-white", "font-weight-normal"], [1, "extragrid"], [1, "row1"], [1, "ngx-gauge-ppm"], [2, "display", "flex", "margin-left", "30%"], [1, "text-white", "font-weight-bold"], [1, "mat-icon", 2, "position", "inherit", "margin-left", "17%", "padding-top", "15%"], [2, "margin-top", "-12%", 3, "type", "value", "min", "max", "label", "append", "thick", "foregroundColor", "backgroundColor", "size", "duration"], [1, "ngx-gauge-temp"], [2, "display", "flex", "margin-left", "16%"], [1, "text-white", "font-weight-bold", 2, "white-space", "nowrap"], [1, "mat-icon", 2, "position", "inherit", "margin-left", "10%", "padding-top", "15%"], [2, "margin-top", "-15%", 3, "type", "value", "min", "max", "label", "append", "thick", "foregroundColor", "backgroundColor", "size", "duration"], [1, "ngx-gauge-pmv"], [2, "display", "flex", "margin-left", "25%"], [2, "margin-top", "-12.5%", 3, "type", "value", "min", "max", "label", "append", "thick", "foregroundColor", "backgroundColor", "size", "duration"], [1, "row2"], [2, "text-align", "center", "padding-bottom", "10px"], ["src", "assets/images/backgrounds/treno-colorato.png", "alt", "schema", 1, "schema-train"], [1, "ngx-gauge"], [2, "display", "flex", "margin-left", "33%"], [1, "mat-icon", 2, "position", "absolute", "left", "85%", "top", "15%"], [3, "type", "value", "max", "label", "append", "thick", "foregroundColor", "backgroundColor", "size"], [1, "mt--72"], ["fxLayout", "row wrap"], ["fxFlex", "100", "fxFlex.sm", "100", "fxFlex.gt-sm", "100"], ["fxFlex", "100", "fxFlex.sm", "90", "fxFlex.gt-sm", "90"], ["fxFlex", "", "fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "p-40"], ["fxLayout", "row", "fxLayoutAlign", "center center"], [1, "ml-12"], [1, "m-0", "text-muted", "mb-4"]],
      template: function AnalyticsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Informazioni generali");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Passeggeri");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "people");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "ngx-gauge", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Temperatura interna");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "thermostat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "ngx-gauge", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Umidit\xE0 interna");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "opacity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "ngx-gauge", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Cuscinetti");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h1", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Velocit\xE0 attuale");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-icon", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "speed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "ngx-gauge", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-card", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-card", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-card", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](72, "numberFormat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.gaugePasseggeriType)("value", ctx.gaugePasseggeriValue)("min", ctx.gaugePasseggeriMin)("max", ctx.gaugePasseggeriMax)("label", ctx.gaugePasseggeriLabel)("append", ctx.gaugePasseggeriAppendText)("thick", ctx.gaugePasseggeriThickness)("foregroundColor", ctx.gaugePasseggeriForegroundColor)("backgroundColor", ctx.gaugePasseggeriBackgroundColor)("size", ctx.gaugePasseggeriSize)("duration", ctx.gaugeDuration);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.gaugeTempType)("value", ctx.gaugeTempValue)("min", ctx.gaugeTempMin)("max", ctx.gaugeTempMax)("label", ctx.gaugeTempLabel)("append", ctx.gaugeTempAppendText)("thick", ctx.gaugeTempThickness)("foregroundColor", ctx.gaugeTempForegroundColor)("backgroundColor", ctx.gaugeTempBackgroundColor)("size", ctx.gaugeTempSize)("duration", ctx.gaugeDuration);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.gaugeUmiditaType)("value", ctx.gaugeUmiditaValue)("min", ctx.gaugeUmiditaMin)("max", ctx.gaugeUmiditaMax)("label", ctx.gaugeUmiditaLabel)("append", ctx.gaugeUmiditaAppendText)("thick", ctx.gaugeUmiditaThickness)("foregroundColor", ctx.gaugeUmiditaForegroundColor)("backgroundColor", ctx.gaugeUmiditaBackgroundColor)("size", ctx.gaugeUmiditaSize)("duration", ctx.gaugeDuration);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.gaugeType)("value", ctx.message)("max", ctx.gaugeMax)("label", ctx.gaugeLabel)("append", ctx.gaugeAppendText)("thick", ctx.gaugeThickness)("foregroundColor", ctx.gaugeForegroundColor)("backgroundColor", ctx.gaugeBackgroundColor)("size", ctx.gaugeSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("text-56 mat-color-", ctx.statCardList[0].color, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statCardList[0].icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statCardList[0].title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("m-0 mat-color-", ctx.statCardList[0].color, " text-40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statCardList[0].amount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("text-56 mat-color-", ctx.statCardList[1].color, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statCardList[1].icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statCardList[1].title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("m-0 mat-color-", ctx.statCardList[1].color, " text-40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statCardList[1].amount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("text-56 mat-color-", ctx.statCardList[2].color, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statCardList[2].icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statCardList[2].title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("m-0 mat-color-", ctx.statCardList[2].color, " text-40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](72, 69, ctx.statCardList[2].amount));
        }
      },
      directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], ngx_gauge__WEBPACK_IMPORTED_MODULE_5__["ɵa"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"]],
      pipes: [_shared_pipes_number_pipe__WEBPACK_IMPORTED_MODULE_8__["NumberFormatPipe"]],
      styles: ["#graph-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin-top: 0vh !important;\n  background-color: #032e6200 !important;\n  background-image: url('info-generali.png') !important;\n  background-size: cover !important;\n  \n  box-shadow: 0 0 0 10in #032d62;\n  padding: 0% !important;\n}\n\n.extragrid[_ngcontent-%COMP%] {\n  display: grid;\n  width: 60%;\n  grid-template-rows: repeat(2, 1fr);\n  gap: 5vh;\n  margin-top: 4%;\n  margin-left: 1%;\n}\n\n.row1[_ngcontent-%COMP%] {\n  display: grid;\n  width: 60%;\n  grid-template-columns: repeat(3, 1fr);\n}\n\n.row2[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: center;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.circles[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  position: absolute;\n  border-radius: 50%;\n  background-color: #ff0000;\n  margin-top: 65px;\n  margin-left: 43px;\n  box-shadow: 112px 0 0 0 #92d050, 162px 0 0 0 #92d050, 297px 0 0 0 #ffc001, 347px 0 0 0 #92d050, 482px 0 0 0 #ff0000;\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n  height: 48px !important;\n  width: 48px !important;\n  font-size: 48px !important;\n}\n\n.ngx-gauge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15%;\n  left: 60%;\n}\n\n.mt--72[_ngcontent-%COMP%] {\n  margin-top: -11% !important;\n  transform: translateX(3%);\n  padding-top: 2vh;\n  padding-bottom: 0% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvZGFzaGJvYXJkL2FuYWx5dGljcy9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXHRlbGVtZXRyeVxcYW5ndWxhci10cmFtLXRlbGVtZXRyeS9zcmNcXGFwcFxcdmlld3NcXGRhc2hib2FyZFxcYW5hbHl0aWNzXFxhbmFseXRpY3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2Rhc2hib2FyZC9hbmFseXRpY3MvYW5hbHl0aWNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksV0FBVztFQUNYLFlBQVk7RUFDWiwwQkFBMEI7RUFFMUIsc0NBQXNDO0VBQ3RDLHFEQUEyRjtFQUMzRixpQ0FBaUM7RUFFakMsK0NBQUE7RUFDQSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FDRjFCOztBREtBO0VBRUksYUFBYTtFQUNiLFVBQVU7RUFDVixrQ0FBaUM7RUFDakMsUUFBUTtFQUNSLGNBQWM7RUFDZCxlQUFlO0FDSG5COztBRE1BO0VBRUksYUFBYTtFQUNiLFVBQVU7RUFDVixxQ0FBb0M7QUNKeEM7O0FET0E7RUFFSSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLDJCQUFtQjtFQUFuQix3QkFBbUI7RUFBbkIsbUJBQW1CO0FDTHZCOztBRFFBO0VBRUksWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1IQUFvSDtBQ054SDs7QURTQTtFQUVJLHVCQUFzQjtFQUN0QixzQkFBcUI7RUFDckIsMEJBQXlCO0FDUDdCOztBRFVBO0VBRUksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0FDUmI7O0FEV0E7RUFFSSwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQiw2QkFBNkI7QUNUakMiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9kYXNoYm9hcmQvYW5hbHl0aWNzL2FuYWx5dGljcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNncmFwaC1jb250YWluZXJcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAwdmggIWltcG9ydGFudDtcclxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogIzAzMmQ2MiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAzMmU2MjAwICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvaW5mby1nZW5lcmFsaS5wbmcnKSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gICAgLy9iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XHJcbiAgICAvKiB0byBnaXZlIHRoZSBlbnRpcmUgcGFnZSB0aGUgaW50ZW50ZWQgY29sb3IgKi9cclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDEwaW4gIzAzMmQ2MjsgXHJcbiAgICBwYWRkaW5nOiAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZXh0cmFncmlkXHJcbntcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOnJlcGVhdCgyLCAxZnIpO1xyXG4gICAgZ2FwOiA1dmg7XHJcbiAgICBtYXJnaW4tdG9wOiA0JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxufVxyXG5cclxuLnJvdzFcclxue1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDMsIDFmcik7XHJcbn1cclxuXHJcbi5yb3cyXHJcbntcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5jaXJjbGVzXHJcbntcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcclxuICAgIG1hcmdpbi10b3A6IDY1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNDNweDtcclxuICAgIGJveC1zaGFkb3c6IDExMnB4IDAgMCAwICM5MmQwNTAsIDE2MnB4IDAgMCAwICM5MmQwNTAsIDI5N3B4IDAgMCAwICNmZmMwMDEsIDM0N3B4IDAgMCAwICM5MmQwNTAsIDQ4MnB4IDAgMCAwICNmZjAwMDAgO1xyXG59XHJcblxyXG4ubWF0LWljb25cclxue1xyXG4gICAgaGVpZ2h0OjQ4cHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOjQ4cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTo0OHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uZ3gtZ2F1Z2Vcclxue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNSU7XHJcbiAgICBsZWZ0OiA2MCU7XHJcbn1cclxuXHJcbi5tdC0tNzJcclxue1xyXG4gICAgbWFyZ2luLXRvcDogLTExJSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMlKTtcclxuICAgIHBhZGRpbmctdG9wOiAydmg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMCUgIWltcG9ydGFudDtcclxufSIsIiNncmFwaC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tdG9wOiAwdmggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzMmU2MjAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvaW5mby1nZW5lcmFsaS5wbmdcIikgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAvKiB0byBnaXZlIHRoZSBlbnRpcmUgcGFnZSB0aGUgaW50ZW50ZWQgY29sb3IgKi9cbiAgYm94LXNoYWRvdzogMCAwIDAgMTBpbiAjMDMyZDYyO1xuICBwYWRkaW5nOiAwJSAhaW1wb3J0YW50O1xufVxuXG4uZXh0cmFncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgd2lkdGg6IDYwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcbiAgZ2FwOiA1dmg7XG4gIG1hcmdpbi10b3A6IDQlO1xuICBtYXJnaW4tbGVmdDogMSU7XG59XG5cbi5yb3cxIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgd2lkdGg6IDYwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbn1cblxuLnJvdzIge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cblxuLmNpcmNsZXMge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcbiAgbWFyZ2luLXRvcDogNjVweDtcbiAgbWFyZ2luLWxlZnQ6IDQzcHg7XG4gIGJveC1zaGFkb3c6IDExMnB4IDAgMCAwICM5MmQwNTAsIDE2MnB4IDAgMCAwICM5MmQwNTAsIDI5N3B4IDAgMCAwICNmZmMwMDEsIDM0N3B4IDAgMCAwICM5MmQwNTAsIDQ4MnB4IDAgMCAwICNmZjAwMDA7XG59XG5cbi5tYXQtaWNvbiB7XG4gIGhlaWdodDogNDhweCAhaW1wb3J0YW50O1xuICB3aWR0aDogNDhweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDQ4cHggIWltcG9ydGFudDtcbn1cblxuLm5neC1nYXVnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNSU7XG4gIGxlZnQ6IDYwJTtcbn1cblxuLm10LS03MiB7XG4gIG1hcmdpbi10b3A6IC0xMSUgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMlKTtcbiAgcGFkZGluZy10b3A6IDJ2aDtcbiAgcGFkZGluZy1ib3R0b206IDAlICFpbXBvcnRhbnQ7XG59XG4iXX0= */"],
      data: {
        animation: app_shared_animations_matx_animations__WEBPACK_IMPORTED_MODULE_1__["matxAnimations"]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalyticsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-analytics",
          templateUrl: "./analytics.component.html",
          styleUrls: ["./analytics.component.scss"],
          animations: app_shared_animations_matx_animations__WEBPACK_IMPORTED_MODULE_1__["matxAnimations"]
        }]
      }], function () {
        return [{
          type: app_shared_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]
        }, {
          type: app_views_data_saver_service__WEBPACK_IMPORTED_MODULE_3__["DataSaverService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/dashboard/dashboard.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/views/dashboard/dashboard.module.ts ***!
    \*****************************************************/

  /*! exports provided: DashboardModule */

  /***/
  function srcAppViewsDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
      return DashboardModule;
    });
    /* harmony import */


    var app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! app/shared/shared-material.module */
    "./src/app/shared/shared-material.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
    /* harmony import */


    var ngx_echarts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-echarts */
    "./node_modules/ngx-echarts/__ivy_ngcc__/fesm2015/ngx-echarts.js");
    /* harmony import */


    var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @swimlane/ngx-datatable */
    "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
    /* harmony import */


    var app_shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! app/shared/pipes/shared-pipes.module */
    "./src/app/shared/pipes/shared-pipes.module.ts");
    /* harmony import */


    var _dashboard_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./dashboard.routing */
    "./src/app/views/dashboard/dashboard.routing.ts");
    /* harmony import */


    var _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./analytics/analytics.component */
    "./src/app/views/dashboard/analytics/analytics.component.ts");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
    /* harmony import */


    var ngx_gauge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-gauge */
    "./node_modules/ngx-gauge/__ivy_ngcc__/fesm2015/ngx-gauge.js");

    var DashboardModule = /*#__PURE__*/_createClass(function DashboardModule() {
      _classCallCheck(this, DashboardModule);
    });

    DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: DashboardModule
    });
    DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function DashboardModule_Factory(t) {
        return new (t || DashboardModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_0__["SharedMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_6__["NgxEchartsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"], app_shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_8__["SharedPipesModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarModule"], ngx_gauge__WEBPACK_IMPORTED_MODULE_12__["NgxGaugeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_dashboard_routing__WEBPACK_IMPORTED_MODULE_9__["DashboardRoutes"])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashboardModule, {
        declarations: [_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_10__["AnalyticsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_0__["SharedMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_6__["NgxEchartsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"], app_shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_8__["SharedPipesModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarModule"], ngx_gauge__WEBPACK_IMPORTED_MODULE_12__["NgxGaugeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_0__["SharedMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_6__["NgxEchartsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"], app_shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_8__["SharedPipesModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarModule"], ngx_gauge__WEBPACK_IMPORTED_MODULE_12__["NgxGaugeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_dashboard_routing__WEBPACK_IMPORTED_MODULE_9__["DashboardRoutes"])],
          declarations: [_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_10__["AnalyticsComponent"]],
          exports: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/dashboard/dashboard.routing.ts":
  /*!******************************************************!*\
    !*** ./src/app/views/dashboard/dashboard.routing.ts ***!
    \******************************************************/

  /*! exports provided: DashboardRoutes */

  /***/
  function srcAppViewsDashboardDashboardRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardRoutes", function () {
      return DashboardRoutes;
    });
    /* harmony import */


    var _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./analytics/analytics.component */
    "./src/app/views/dashboard/analytics/analytics.component.ts");

    var DashboardRoutes = [{
      path: "general",
      component: _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_0__["AnalyticsComponent"],
      data: {
        title: 'Informazioni Generali',
        breadcrumb: ''
      }
    }];
    /***/
  }
}]);
//# sourceMappingURL=views-dashboard-dashboard-module-es5.js.map