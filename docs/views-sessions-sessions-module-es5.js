function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-sessions-sessions-module"], {
  /***/
  "./node_modules/ngx-custom-validators/__ivy_ngcc__/fesm2015/ngx-custom-validators.js":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/ngx-custom-validators/__ivy_ngcc__/fesm2015/ngx-custom-validators.js ***!
    \*******************************************************************************************/

  /*! exports provided: CustomFormsModule, CustomValidators, ɵa, ɵb, ɵba, ɵbb, ɵbc, ɵbd, ɵbe, ɵbf, ɵbg, ɵbh, ɵbi, ɵbj, ɵbk, ɵbl, ɵbm, ɵbn, ɵbo, ɵbp, ɵbq, ɵbr, ɵbs, ɵbt, ɵbu, ɵbv, ɵbw, ɵbx, ɵby, ɵbz, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr, ɵs, ɵt, ɵu, ɵv, ɵw, ɵx, ɵy, ɵz */

  /***/
  function node_modulesNgxCustomValidators__ivy_ngcc__Fesm2015NgxCustomValidatorsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomFormsModule", function () {
      return CustomFormsModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomValidators", function () {
      return CustomValidators;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return arrayLength;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return base64;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵba", function () {
      return ArrayLengthValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbb", function () {
      return Base64Validator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbc", function () {
      return CreditCardValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbd", function () {
      return DateValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbe", function () {
      return DateISOValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbf", function () {
      return DigitsValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbg", function () {
      return EmailValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbh", function () {
      return EqualValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbi", function () {
      return EqualToValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbj", function () {
      return GreaterThanValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbk", function () {
      return GreaterThanEqualValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbl", function () {
      return JSONValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbm", function () {
      return LessThanValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbn", function () {
      return LessThanEqualValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbo", function () {
      return MaxValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbp", function () {
      return MaxDateValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbq", function () {
      return MinValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbr", function () {
      return MinDateValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbs", function () {
      return NotEqualValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbt", function () {
      return NotEqualToValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbu", function () {
      return NumberValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbv", function () {
      return PropertyValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbw", function () {
      return RangeValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbx", function () {
      return RangeLengthValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵby", function () {
      return UrlValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbz", function () {
      return UUIDValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return creditCard;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵd", function () {
      return date;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵe", function () {
      return dateISO;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵf", function () {
      return digits;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵg", function () {
      return email;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵh", function () {
      return equal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵi", function () {
      return equalTo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵj", function () {
      return gt;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵk", function () {
      return gte;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵl", function () {
      return json;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵm", function () {
      return lt;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵn", function () {
      return lte;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵo", function () {
      return max;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵp", function () {
      return maxDate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵq", function () {
      return min;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵr", function () {
      return minDate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵs", function () {
      return notEqual;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵt", function () {
      return notEqualTo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵu", function () {
      return number;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵv", function () {
      return property;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵw", function () {
      return range;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵx", function () {
      return rangeLength;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵy", function () {
      return url;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵz", function () {
      return uuid;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function isPresent(obj) {
      return obj !== undefined && obj !== null;
    }

    function isDate(obj) {
      try {
        var _date = new Date(obj);

        return !isNaN(_date.getTime());
      } catch (e) {
        return false;
      }
    }

    function parseDate(obj) {
      try {
        // Moment.js
        if (obj._d instanceof Date) {
          var d = obj._d;
          var month = +d.getMonth() + 1;
          var day = +d.getDate();
          return "".concat(d.getFullYear(), "-").concat(formatDayOrMonth(month), "-").concat(formatDayOrMonth(day));
        } // NgbDateStruct


        if (typeof obj === 'object' && obj.year != null && obj.month != null && obj.day != null) {
          var _month = +obj.month;

          var _day = +obj.day;

          return "".concat(obj.year, "-").concat(formatDayOrMonth(_month), "-").concat(formatDayOrMonth(_day));
        }
      } catch (e) {}

      return obj;
    }

    function formatDayOrMonth(month) {
      return month < 10 ? "0".concat(month) : month;
    }

    var arrayLength = function arrayLength(value) {
      return function (control) {
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
          return null;
        }

        var obj = control.value;
        return Array.isArray(obj) && obj.length >= +value ? null : {
          arrayLength: {
            minLength: value
          }
        };
      };
    };

    var ARRAY_LENGTH_VALIDATOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return ArrayLengthValidator;
      }),
      multi: true
    };

    var ArrayLengthValidator = /*#__PURE__*/function () {
      function ArrayLengthValidator() {
        _classCallCheck(this, ArrayLengthValidator);
      }

      _createClass(ArrayLengthValidator, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.validator = arrayLength(this.arrayLength);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          for (var key in changes) {
            if (key === 'arrayLength') {
              this.validator = arrayLength(changes[key].currentValue);

              if (this.onChange) {
                this.onChange();
              }
            }
          }
        }
      }, {
        key: "validate",
        value: function validate(c) {
          return this.validator(c);
        }
      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this.onChange = fn;
        }
      }]);

      return ArrayLengthValidator;
    }();

    ArrayLengthValidator.ɵfac = function ArrayLengthValidator_Factory(t) {
      return new (t || ArrayLengthValidator)();
    };

    ArrayLengthValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: ArrayLengthValidator,
      selectors: [["", "arrayLength", "", "formControlName", ""], ["", "arrayLength", "", "formControl", ""], ["", "arrayLength", "", "ngModel", ""]],
      inputs: {
        arrayLength: "arrayLength"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([ARRAY_LENGTH_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ArrayLengthValidator.prototype, "arrayLength", void 0);

    var base64 = function base64(control) {
      if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
        return null;
      }

      var v = control.value;
      return /^(?:[A-Z0-9+\/]{4})*(?:[A-Z0-9+\/]{2}==|[A-Z0-9+\/]{3}=|[A-Z0-9+\/]{4})$/i.test(v) ? null : {
        base64: true
      };
    };

    var BASE64_VALIDATOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return Base64Validator;
      }),
      multi: true
    };

    var Base64Validator = /*#__PURE__*/function () {
      function Base64Validator() {
        _classCallCheck(this, Base64Validator);
      }

      _createClass(Base64Validator, [{
        key: "validate",
        value: function validate(c) {
          return base64(c);
        }
      }]);

      return Base64Validator;
    }();

    Base64Validator.ɵfac = function Base64Validator_Factory(t) {
      return new (t || Base64Validator)();
    };

    Base64Validator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: Base64Validator,
      selectors: [["", "base64", "", "formControlName", ""], ["", "base64", "", "formControl", ""], ["", "base64", "", "ngModel", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([BASE64_VALIDATOR])]
    });

    var creditCard = function creditCard(control) {
      if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
        return null;
      }

      var v = control.value;
      var sanitized = v.replace(/[^0-9]+/g, ''); // problem with chrome

      /* tslint:disable */

      if (!/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|(?:9792)\d{12})$/.test(sanitized)) {
        return {
          creditCard: true
        };
      }
      /* tslint:enable */


      var sum = 0;
      var digit;
      var tmpNum;
      var shouldDouble;

      for (var i = sanitized.length - 1; i >= 0; i--) {
        digit = sanitized.substring(i, i + 1);
        tmpNum = parseInt(digit, 10);

        if (shouldDouble) {
          tmpNum *= 2;

          if (tmpNum >= 10) {
            sum += tmpNum % 10 + 1;
          } else {
            sum += tmpNum;
          }
        } else {
          sum += tmpNum;
        }

        shouldDouble = !shouldDouble;
      }

      if (Boolean(sum % 10 === 0 ? sanitized : false)) {
        return null;
      }

      return {
        creditCard: true
      };
    };

    var CREDIT_CARD_VALIDATOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return CreditCardValidator;
      }),
      multi: true
    };

    var CreditCardValidator = /*#__PURE__*/function () {
      function CreditCardValidator() {
        _classCallCheck(this, CreditCardValidator);
      }

      _createClass(CreditCardValidator, [{
        key: "validate",
        value: function validate(c) {
          return creditCard(c);
        }
      }]);

      return CreditCardValidator;
    }();

    CreditCardValidator.ɵfac = function CreditCardValidator_Factory(t) {
      return new (t || CreditCardValidator)();
    };

    CreditCardValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CreditCardValidator,
      selectors: [["", "creditCard", "", "formControlName", ""], ["", "creditCard", "", "formControl", ""], ["", "creditCard", "", "ngModel", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([CREDIT_CARD_VALIDATOR])]
    });

    var dateISO = function dateISO(control) {
      if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
        return null;
      }

      var v = control.value;
      return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(v) ? null : {
        dateISO: true
      };
    };

    var DATE_ISO_VALIDATOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return DateISOValidator;
      }),
      multi: true
    };

    var DateISOValidator = /*#__PURE__*/function () {
      function DateISOValidator() {
        _classCallCheck(this, DateISOValidator);
      }

      _createClass(DateISOValidator, [{
        key: "validate",
        value: function validate(c) {
          return dateISO(c);
        }
      }]);

      return DateISOValidator;
    }();

    DateISOValidator.ɵfac = function DateISOValidator_Factory(t) {
      return new (t || DateISOValidator)();
    };

    DateISOValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: DateISOValidator,
      selectors: [["", "dateISO", "", "formControlName", ""], ["", "dateISO", "", "formControl", ""], ["", "dateISO", "", "ngModel", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([DATE_ISO_VALIDATOR])]
    });

    var date = function date(control) {
      if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
        return null;
      }

      var v = control.value;
      v = parseDate(v);
      return isDate(v) ? null : {
        date: true
      };
    };

    var DATE_VALIDATOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return DateValidator;
      }),
      multi: true
    };

    var DateValidator = /*#__PURE__*/function () {
      function DateValidator() {
        _classCallCheck(this, DateValidator);
      }

      _createClass(DateValidator, [{
        key: "validate",
        value: function validate(c) {
          return date(c);
        }
      }]);

      return DateValidator;
    }();

    DateValidator.ɵfac = function DateValidator_Factory(t) {
      return new (t || DateValidator)();
    };

    DateValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: DateValidator,
      selectors: [["", "date", "", "formControlName", ""], ["", "date", "", "formControl", ""], ["", "date", "", "ngModel", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([DATE_VALIDATOR])]
    });

    var digits = function digits(control) {
      if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
        return null;
      }

      var v = control.value;
      return /^\d+$/.test(v) ? null : {
        digits: true
      };
    };

    var DIGITS_VALIDATOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return DigitsValidator;
      }),
      multi: true
    };

    var DigitsValidator = /*#__PURE__*/function () {
      function DigitsValidator() {
        _classCallCheck(this, DigitsValidator);
      }

      _createClass(DigitsValidator, [{
        key: "validate",
        value: function validate(c) {
          return digits(c);
        }
      }]);

      return DigitsValidator;
    }();

    DigitsValidator.ɵfac = function DigitsValidator_Factory(t) {
      return new (t || DigitsValidator)();
    };

    DigitsValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: DigitsValidator,
      selectors: [["", "digits", "", "formControlName", ""], ["", "digits", "", "formControl", ""], ["", "digits", "", "ngModel", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([DIGITS_VALIDATOR])]
    });

    var email = function email(control) {
      if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
        return null;
      }

      var v = control.value;
      /* tslint:disable */

      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) ? null : {
        'email': true
      };
      /* tslint:enable */
    };

    var EMAIL_VALIDATOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return EmailValidator;
      }),
      multi: true
    };

    var EmailValidator = /*#__PURE__*/function () {
      function EmailValidator() {
        _classCallCheck(this, EmailValidator);
      }

      _createClass(EmailValidator, [{
        key: "validate",
        value: function validate(c) {
          return email(c);
        }
      }]);

      return EmailValidator;
    }();

    EmailValidator.ɵfac = function EmailValidator_Factory(t) {
      return new (t || EmailValidator)();
    };

    EmailValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: EmailValidator,
      selectors: [["", "ngvemail", "", "formControlName", ""], ["", "ngvemail", "", "formControl", ""], ["", "ngvemail", "", "ngModel", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([EMAIL_VALIDATOR])]
    });

    var equalTo = function equalTo(equalControl) {
      var subscribe = false;
      return function (control) {
        if (!subscribe) {
          subscribe = true;
          equalControl.valueChanges.subscribe(function () {
            control.updateValueAndValidity();
          });
        }

        var v = control.value;
        return equalControl.value === v ? null : {
          equalTo: {
            control: equalControl,
            value: equalControl.value
          }
        };
      };
    };

    var EQUAL_TO_VALIDATOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return EqualToValidator;
      }),
      multi: true
    };

    var EqualToValidator = /*#__PURE__*/function () {
      function EqualToValidator() {
        _classCallCheck(this, EqualToValidator);
      }

      _createClass(EqualToValidator, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.validator = equalTo(this.equalTo);
        }
      }, {
        key: "validate",
        value: function validate(c) {
          return this.validator(c);
        }
      }]);

      return EqualToValidator;
    }();

    EqualToValidator.ɵfac = function EqualToValidator_Factory(t) {
      return new (t || EqualToValidator)();
    };

    EqualToValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: EqualToValidator,
      selectors: [["", "equalTo", "", "formControlName", ""], ["", "equalTo", "", "formControl", ""], ["", "equalTo", "", "ngModel", ""]],
      inputs: {
        equalTo: "equalTo"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([EQUAL_TO_VALIDATOR])]
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EqualToValidator.prototype, "equalTo", void 0);

    var equal = function equal(val) {
      return function (control) {
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
          return null;
        }

        var v = control.value;
        return val === v ? null : {
          equal: {
            value: val
          }
        };
      };
    };

    var EQUAL_VALIDATOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return EqualValidator;
      }),
      multi: true
    };

    var EqualValidator = /*#__PURE__*/function () {
      function EqualValidator() {
        _classCallCheck(this, EqualValidator);
      }

      _createClass(EqualValidator, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.validator = equal(this.equal);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          for (var key in changes) {
            if (key === 'equal') {
              this.validator = equal(changes[key].currentValue);

              if (this.onChange) {
                this.onChange();
              }
            }
          }
        }
      }, {
        key: "validate",
        value: function validate(c) {
          return this.validator(c);
        }
      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this.onChange = fn;
        }
      }]);

      return EqualValidator;
    }();

    EqualValidator.ɵfac = function EqualValidator_Factory(t) {
      return new (t || EqualValidator)();
    };

    EqualValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: EqualValidator,
      selectors: [["", "equal", "", "formControlName", ""], ["", "equal", "", "formControl", ""], ["", "equal", "", "ngModel", ""]],
      inputs: {
        equal: "equal"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([EQUAL_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EqualValidator.prototype, "equal", void 0);

    var gte = function gte(value) {
      return function (control) {
        if (!isPresent(value)) {
          return null;
        }

        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
          return null;
        }

        var v = +control.value;
        return v >= +value ? null : {
          gte: {
            value: value
          }
        };
      };
    };

    var GREATER_THAN_EQUAL_VALIDATOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return GreaterThanEqualValidator;
      }),
      multi: true
    };

    var GreaterThanEqualValidator = /*#__PURE__*/function () {
      function GreaterThanEqualValidator() {
        _classCallCheck(this, GreaterThanEqualValidator);
      }

      _createClass(GreaterThanEqualValidator, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.validator = gte(this.gte);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          for (var key in changes) {
            if (key === 'gte') {
              this.validator = gte(changes[key].currentValue);

              if (this.onChange) {
                this.onChange();
              }
            }
          }
        }
      }, {
        key: "validate",
        value: function validate(c) {
          return this.validator(c);
        }
      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this.onChange = fn;
        }
      }]);

      return GreaterThanEqualValidator;
    }();

    GreaterThanEqualValidator.ɵfac = function GreaterThanEqualValidator_Factory(t) {
      return new (t || GreaterThanEqualValidator)();
    };

    GreaterThanEqualValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: GreaterThanEqualValidator,
      selectors: [["", "gte", "", "formControlName", ""], ["", "gte", "", "formControl", ""], ["", "gte", "", "ngModel", ""]],
      inputs: {
        gte: "gte"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([GREATER_THAN_EQUAL_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GreaterThanEqualValidator.prototype, "gte", void 0);

    var gt = function gt(value) {
      return function (control) {
        if (!isPresent(value)) {
          return null;
        }

        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
          return null;
        }

        var v = +control.value;
        return v > +value ? null : {
          gt: {
            value: value
          }
        };
      };
    };

    var GREATER_THAN_VALIDATOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return GreaterThanValidator;
      }),
      multi: true
    };

    var GreaterThanValidator = /*#__PURE__*/function () {
      function GreaterThanValidator() {
        _classCallCheck(this, GreaterThanValidator);
      }

      _createClass(GreaterThanValidator, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.validator = gt(this.gt);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          for (var key in changes) {
            if (key === 'gt') {
              this.validator = gt(changes[key].currentValue);

              if (this.onChange) {
                this.onChange();
              }
            }
          }
        }
      }, {
        key: "validate",
        value: function validate(c) {
          return this.validator(c);
        }
      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this.onChange = fn;
        }
      }]);

      return GreaterThanValidator;
    }();

    GreaterThanValidator.ɵfac = function GreaterThanValidator_Factory(t) {
      return new (t || GreaterThanValidator)();
    };

    GreaterThanValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: GreaterThanValidator,
      selectors: [["", "gt", "", "formControlName", ""], ["", "gt", "", "formControl", ""], ["", "gt", "", "ngModel", ""]],
      inputs: {
        gt: "gt"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([GREATER_THAN_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GreaterThanValidator.prototype, "gt", void 0);

    var json = function json(control) {
      if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
        return null;
      }

      var v = control.value;

      try {
        var obj = JSON.parse(v);

        if (Boolean(obj) && typeof obj === 'object') {
          return null;
        }
      } catch (e) {}

      return {
        json: true
      };
    };

    var JSON_VALIDATOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return JSONValidator;
      }),
      multi: true
    };

    var JSONValidator = /*#__PURE__*/function () {
      function JSONValidator() {
        _classCallCheck(this, JSONValidator);
      }

      _createClass(JSONValidator, [{
        key: "validate",
        value: function validate(c) {
          return json(c);
        }
      }]);

      return JSONValidator;
    }();

    JSONValidator.ɵfac = function JSONValidator_Factory(t) {
      return new (t || JSONValidator)();
    };

    JSONValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: JSONValidator,
      selectors: [["", "json", "", "formControlName", ""], ["", "json", "", "formControl", ""], ["", "json", "", "ngModel", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([JSON_VALIDATOR])]
    });

    var lte = function lte(value) {
      return function (control) {
        if (!isPresent(value)) {
          return null;
        }

        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
          return null;
        }

        var v = +control.value;
        return v <= +value ? null : {
          lte: {
            value: value
          }
        };
      };
    };

    var LESS_THAN_EQUAL_VALIDATOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return LessThanEqualValidator;
      }),
      multi: true
    };

    var LessThanEqualValidator = /*#__PURE__*/function () {
      function LessThanEqualValidator() {
        _classCallCheck(this, LessThanEqualValidator);
      }

      _createClass(LessThanEqualValidator, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.validator = lte(this.lte);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          for (var key in changes) {
            if (key === 'lte') {
              this.validator = lte(changes[key].currentValue);

              if (this.onChange) {
                this.onChange();
              }
            }
          }
        }
      }, {
        key: "validate",
        value: function validate(c) {
          return this.validator(c);
        }
      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this.onChange = fn;
        }
      }]);

      return LessThanEqualValidator;
    }();

    LessThanEqualValidator.ɵfac = function LessThanEqualValidator_Factory(t) {
      return new (t || LessThanEqualValidator)();
    };

    LessThanEqualValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: LessThanEqualValidator,
      selectors: [["", "lte", "", "formControlName", ""], ["", "lte", "", "formControl", ""], ["", "lte", "", "ngModel", ""]],
      inputs: {
        lte: "lte"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([LESS_THAN_EQUAL_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LessThanEqualValidator.prototype, "lte", void 0);

    var lt = function lt(value) {
      return function (control) {
        if (!isPresent(value)) {
          return null;
        }

        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
          return null;
        }

        var v = +control.value;
        return v < +value ? null : {
          lt: {
            value: value
          }
        };
      };
    };

    var LESS_THAN_VALIDATOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return LessThanValidator;
      }),
      multi: true
    };

    var LessThanValidator = /*#__PURE__*/function () {
      function LessThanValidator() {
        _classCallCheck(this, LessThanValidator);
      }

      _createClass(LessThanValidator, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.validator = lt(this.lt);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          for (var key in changes) {
            if (key === 'lt') {
              this.validator = lt(changes[key].currentValue);

              if (this.onChange) {
                this.onChange();
              }
            }
          }
        }
      }, {
        key: "validate",
        value: function validate(c) {
          return this.validator(c);
        }
      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this.onChange = fn;
        }
      }]);

      return LessThanValidator;
    }();

    LessThanValidator.ɵfac = function LessThanValidator_Factory(t) {
      return new (t || LessThanValidator)();
    };

    LessThanValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: LessThanValidator,
      selectors: [["", "lt", "", "formControlName", ""], ["", "lt", "", "formControl", ""], ["", "lt", "", "ngModel", ""]],
      inputs: {
        lt: "lt"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([LESS_THAN_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LessThanValidator.prototype, "lt", void 0);

    var maxDate = function maxDate(maxInput) {
      var value;
      var subscribe = false;
      var maxValue = maxInput;
      var isForm = maxInput instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"] || maxInput instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"];
      return function (control) {
        if (!subscribe && isForm) {
          subscribe = true;
          maxInput.valueChanges.subscribe(function () {
            control.updateValueAndValidity();
          });
        }

        if (isForm) {
          maxValue = maxInput.value;
        }

        value = parseDate(maxValue);

        if (!isDate(value) && !(value instanceof Function)) {
          if (value == null) {
            return null;
          } else if (isForm) {
            return {
              maxDate: {
                error: 'maxDate is invalid'
              }
            };
          } else {
            throw Error('maxDate value must be or return a formatted date');
          }
        }

        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
          return null;
        }

        var d = new Date(parseDate(control.value)).getTime();

        if (!isDate(d)) {
          return {
            value: true
          };
        }

        if (value instanceof Function) {
          value = value();
        }

        return d <= new Date(value).getTime() ? null : isForm ? {
          maxDate: {
            control: maxInput,
            value: maxInput.value
          }
        } : {
          maxDate: {
            value: maxValue,
            control: undefined
          }
        };
      };
    };

    var MAX_DATE_VALIDATOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return MaxDateValidator;
      }),
      multi: true
    };

    var MaxDateValidator = /*#__PURE__*/function () {
      function MaxDateValidator() {
        _classCallCheck(this, MaxDateValidator);
      }

      _createClass(MaxDateValidator, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.validator = maxDate(this.maxDate);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          for (var key in changes) {
            if (key === 'maxDate') {
              this.validator = maxDate(changes[key].currentValue);

              if (this.onChange) {
                this.onChange();
              }
            }
          }
        }
      }, {
        key: "validate",
        value: function validate(c) {
          return this.validator(c);
        }
      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this.onChange = fn;
        }
      }]);

      return MaxDateValidator;
    }();

    MaxDateValidator.ɵfac = function MaxDateValidator_Factory(t) {
      return new (t || MaxDateValidator)();
    };

    MaxDateValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MaxDateValidator,
      selectors: [["", "maxDate", "", "formControlName", ""], ["", "maxDate", "", "formControl", ""], ["", "maxDate", "", "ngModel", ""]],
      inputs: {
        maxDate: "maxDate"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAX_DATE_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MaxDateValidator.prototype, "maxDate", void 0);

    var max = function max(value) {
      return function (control) {
        if (!isPresent(value)) {
          return null;
        }

        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
          return null;
        }

        var v = +control.value;
        return v <= +value ? null : {
          max: {
            value: value
          }
        };
      };
    };

    var MAX_VALIDATOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return MaxValidator;
      }),
      multi: true
    };

    var MaxValidator = /*#__PURE__*/function () {
      function MaxValidator() {
        _classCallCheck(this, MaxValidator);
      }

      _createClass(MaxValidator, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.validator = max(this.max);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          for (var key in changes) {
            if (key === 'max') {
              this.validator = max(changes[key].currentValue);

              if (this.onChange) {
                this.onChange();
              }
            }
          }
        }
      }, {
        key: "validate",
        value: function validate(c) {
          return this.validator(c);
        }
      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this.onChange = fn;
        }
      }]);

      return MaxValidator;
    }();

    MaxValidator.ɵfac = function MaxValidator_Factory(t) {
      return new (t || MaxValidator)();
    };

    MaxValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MaxValidator,
      selectors: [["", "max", "", "formControlName", ""], ["", "max", "", "formControl", ""], ["", "max", "", "ngModel", ""]],
      inputs: {
        max: "max"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAX_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MaxValidator.prototype, "max", void 0);

    var minDate = function minDate(minInput) {
      var value;
      var subscribe = false;
      var minValue = minInput;
      var isForm = minInput instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"] || minInput instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"];
      return function (control) {
        if (!subscribe && isForm) {
          subscribe = true;
          minInput.valueChanges.subscribe(function () {
            control.updateValueAndValidity();
          });
        }

        if (isForm) {
          minValue = minInput.value;
        }

        value = parseDate(minValue);

        if (!isDate(value) && !(value instanceof Function)) {
          if (value == null) {
            return null;
          } else if (isForm) {
            return {
              minDate: {
                error: 'minDate is invalid'
              }
            };
          } else {
            throw Error('minDate value must be or return a formatted date');
          }
        }

        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
          return null;
        }

        var d = new Date(parseDate(control.value)).getTime();

        if (!isDate(d)) {
          return {
            value: true
          };
        }

        if (value instanceof Function) {
          value = value();
        }

        return d >= new Date(value).getTime() ? null : isForm ? {
          minDate: {
            control: minInput,
            value: minInput.value
          }
        } : {
          minDate: {
            value: minValue,
            control: undefined
          }
        };
      };
    };

    var MIN_DATE_VALIDATOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return MinDateValidator;
      }),
      multi: true
    };

    var MinDateValidator = /*#__PURE__*/function () {
      function MinDateValidator() {
        _classCallCheck(this, MinDateValidator);
      }

      _createClass(MinDateValidator, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.validator = minDate(this.minDate);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          for (var key in changes) {
            if (key === 'minDate') {
              this.validator = minDate(changes[key].currentValue);

              if (this.onChange) {
                this.onChange();
              }
            }
          }
        }
      }, {
        key: "validate",
        value: function validate(c) {
          return this.validator(c);
        }
      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this.onChange = fn;
        }
      }]);

      return MinDateValidator;
    }();

    MinDateValidator.ɵfac = function MinDateValidator_Factory(t) {
      return new (t || MinDateValidator)();
    };

    MinDateValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MinDateValidator,
      selectors: [["", "minDate", "", "formControlName", ""], ["", "minDate", "", "formControl", ""], ["", "minDate", "", "ngModel", ""]],
      inputs: {
        minDate: "minDate"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MIN_DATE_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MinDateValidator.prototype, "minDate", void 0);

    var min = function min(value) {
      return function (control) {
        if (!isPresent(value)) {
          return null;
        }

        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
          return null;
        }

        var v = +control.value;
        return v >= +value ? null : {
          min: {
            value: value
          }
        };
      };
    };

    var MIN_VALIDATOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return MinValidator;
      }),
      multi: true
    };

    var MinValidator = /*#__PURE__*/function () {
      function MinValidator() {
        _classCallCheck(this, MinValidator);
      }

      _createClass(MinValidator, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.validator = min(this.min);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          for (var key in changes) {
            if (key === 'min') {
              this.validator = min(changes[key].currentValue);

              if (this.onChange) {
                this.onChange();
              }
            }
          }
        }
      }, {
        key: "validate",
        value: function validate(c) {
          return this.validator(c);
        }
      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this.onChange = fn;
        }
      }]);

      return MinValidator;
    }();

    MinValidator.ɵfac = function MinValidator_Factory(t) {
      return new (t || MinValidator)();
    };

    MinValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MinValidator,
      selectors: [["", "min", "", "formControlName", ""], ["", "min", "", "formControl", ""], ["", "min", "", "ngModel", ""]],
      inputs: {
        min: "min"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MIN_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MinValidator.prototype, "min", void 0);

    var notEqualTo = function notEqualTo(notEqualControl) {
      var subscribe = false;
      return function (control) {
        if (!subscribe) {
          subscribe = true;
          notEqualControl.valueChanges.subscribe(function () {
            control.updateValueAndValidity();
          });
        }

        var v = control.value;

        if (notEqualControl.value == null && v == null) {
          return null;
        }

        return notEqualControl.value !== v ? null : {
          notEqualTo: {
            control: notEqualControl,
            value: notEqualControl.value
          }
        };
      };
    };

    var NOT_EQUAL_TO_VALIDATOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return NotEqualToValidator;
      }),
      multi: true
    };

    var NotEqualToValidator = /*#__PURE__*/function () {
      function NotEqualToValidator() {
        _classCallCheck(this, NotEqualToValidator);
      }

      _createClass(NotEqualToValidator, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.validator = notEqualTo(this.notEqualTo);
        }
      }, {
        key: "validate",
        value: function validate(c) {
          return this.validator(c);
        }
      }]);

      return NotEqualToValidator;
    }();

    NotEqualToValidator.ɵfac = function NotEqualToValidator_Factory(t) {
      return new (t || NotEqualToValidator)();
    };

    NotEqualToValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: NotEqualToValidator,
      selectors: [["", "notEqualTo", "", "formControlName", ""], ["", "notEqualTo", "", "formControl", ""], ["", "notEqualTo", "", "ngModel", ""]],
      inputs: {
        notEqualTo: "notEqualTo"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([NOT_EQUAL_TO_VALIDATOR])]
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NotEqualToValidator.prototype, "notEqualTo", void 0);

    var notEqual = function notEqual(val) {
      return function (control) {
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
          return null;
        }

        var v = control.value;
        return val !== v ? null : {
          notEqual: {
            value: val
          }
        };
      };
    };

    var NOT_EQUAL_VALIDATOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return NotEqualValidator;
      }),
      multi: true
    };

    var NotEqualValidator = /*#__PURE__*/function () {
      function NotEqualValidator() {
        _classCallCheck(this, NotEqualValidator);
      }

      _createClass(NotEqualValidator, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.validator = notEqual(this.notEqual);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          for (var key in changes) {
            if (key === 'notEqual') {
              this.validator = notEqual(changes[key].currentValue);

              if (this.onChange) {
                this.onChange();
              }
            }
          }
        }
      }, {
        key: "validate",
        value: function validate(c) {
          return this.validator(c);
        }
      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this.onChange = fn;
        }
      }]);

      return NotEqualValidator;
    }();

    NotEqualValidator.ɵfac = function NotEqualValidator_Factory(t) {
      return new (t || NotEqualValidator)();
    };

    NotEqualValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: NotEqualValidator,
      selectors: [["", "notEqual", "", "formControlName", ""], ["", "notEqual", "", "formControl", ""], ["", "notEqual", "", "ngModel", ""]],
      inputs: {
        notEqual: "notEqual"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([NOT_EQUAL_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NotEqualValidator.prototype, "notEqual", void 0);

    var number = function number(control) {
      if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
        return null;
      }

      var v = control.value;
      return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(v) ? null : {
        'number': true
      };
    };

    var NUMBER_VALIDATOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return NumberValidator;
      }),
      multi: true
    };

    var NumberValidator = /*#__PURE__*/function () {
      function NumberValidator() {
        _classCallCheck(this, NumberValidator);
      }

      _createClass(NumberValidator, [{
        key: "validate",
        value: function validate(c) {
          return number(c);
        }
      }]);

      return NumberValidator;
    }();

    NumberValidator.ɵfac = function NumberValidator_Factory(t) {
      return new (t || NumberValidator)();
    };

    NumberValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: NumberValidator,
      selectors: [["", "number", "", "formControlName", ""], ["", "number", "", "formControl", ""], ["", "number", "", "ngModel", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([NUMBER_VALIDATOR])]
    });

    var property = function property(value) {
      return function (control) {
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
          return null;
        }

        var properties = value.split(',');
        var obj = control.value;
        var isValid = true;

        var _iterator = _createForOfIteratorHelper(properties),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var prop = _step.value;

            if (obj[prop] == null) {
              isValid = false;
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return isValid ? null : {
          hasProperty: {
            value: value
          }
        };
      };
    };

    var PROPERTY_VALIDATOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return PropertyValidator;
      }),
      multi: true
    };

    var PropertyValidator = /*#__PURE__*/function () {
      function PropertyValidator() {
        _classCallCheck(this, PropertyValidator);
      }

      _createClass(PropertyValidator, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.validator = property(this.property);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          for (var key in changes) {
            if (key === 'property') {
              this.validator = property(changes[key].currentValue);

              if (this.onChange) {
                this.onChange();
              }
            }
          }
        }
      }, {
        key: "validate",
        value: function validate(c) {
          return this.validator(c);
        }
      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this.onChange = fn;
        }
      }]);

      return PropertyValidator;
    }();

    PropertyValidator.ɵfac = function PropertyValidator_Factory(t) {
      return new (t || PropertyValidator)();
    };

    PropertyValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: PropertyValidator,
      selectors: [["", "property", "", "formControlName", ""], ["", "property", "", "formControl", ""], ["", "property", "", "ngModel", ""]],
      inputs: {
        property: "property"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([PROPERTY_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PropertyValidator.prototype, "property", void 0);

    var rangeLength = function rangeLength(value) {
      return function (control) {
        if (!isPresent(value)) {
          return null;
        }

        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
          return null;
        }

        var v = control.value;
        return v.length >= value[0] && v.length <= value[1] ? null : {
          rangeLength: {
            value: value
          }
        };
      };
    };

    var RANGE_LENGTH_VALIDATOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return RangeLengthValidator;
      }),
      multi: true
    };

    var RangeLengthValidator = /*#__PURE__*/function () {
      function RangeLengthValidator() {
        _classCallCheck(this, RangeLengthValidator);
      }

      _createClass(RangeLengthValidator, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.validator = rangeLength(this.rangeLength);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          for (var key in changes) {
            if (key === 'rangeLength') {
              this.validator = rangeLength(changes[key].currentValue);

              if (this.onChange) {
                this.onChange();
              }
            }
          }
        }
      }, {
        key: "validate",
        value: function validate(c) {
          return this.validator(c);
        }
      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this.onChange = fn;
        }
      }]);

      return RangeLengthValidator;
    }();

    RangeLengthValidator.ɵfac = function RangeLengthValidator_Factory(t) {
      return new (t || RangeLengthValidator)();
    };

    RangeLengthValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: RangeLengthValidator,
      selectors: [["", "rangeLength", "", "formControlName", ""], ["", "rangeLength", "", "formControl", ""], ["", "rangeLength", "", "ngModel", ""]],
      inputs: {
        rangeLength: "rangeLength"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([RANGE_LENGTH_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], RangeLengthValidator.prototype, "rangeLength", void 0);

    var range = function range(value) {
      return function (control) {
        if (!isPresent(value)) {
          return null;
        }

        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
          return null;
        }

        var v = +control.value;
        return v >= value[0] && v <= value[1] ? null : {
          range: {
            value: value
          }
        };
      };
    };

    var RANGE_VALIDATOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return RangeValidator;
      }),
      multi: true
    };

    var RangeValidator = /*#__PURE__*/function () {
      function RangeValidator() {
        _classCallCheck(this, RangeValidator);
      }

      _createClass(RangeValidator, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.validator = range(this.range);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          for (var key in changes) {
            if (key === 'range') {
              this.validator = range(changes[key].currentValue);

              if (this.onChange) {
                this.onChange();
              }
            }
          }
        }
      }, {
        key: "validate",
        value: function validate(c) {
          return this.validator(c);
        }
      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this.onChange = fn;
        }
      }]);

      return RangeValidator;
    }();

    RangeValidator.ɵfac = function RangeValidator_Factory(t) {
      return new (t || RangeValidator)();
    };

    RangeValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: RangeValidator,
      selectors: [["", "range", "", "formControlName", ""], ["", "range", "", "formControl", ""], ["", "range", "", "ngModel", ""]],
      inputs: {
        range: "range"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([RANGE_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], RangeValidator.prototype, "range", void 0);

    var url = function url(control) {
      if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
        return null;
      }

      var v = control.value;
      /* tslint:disable */

      return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(v) ? null : {
        'url': true
      };
      /* tslint:enable */
    };

    var URL_VALIDATOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return UrlValidator;
      }),
      multi: true
    };

    var UrlValidator = /*#__PURE__*/function () {
      function UrlValidator() {
        _classCallCheck(this, UrlValidator);
      }

      _createClass(UrlValidator, [{
        key: "validate",
        value: function validate(c) {
          return url(c);
        }
      }]);

      return UrlValidator;
    }();

    UrlValidator.ɵfac = function UrlValidator_Factory(t) {
      return new (t || UrlValidator)();
    };

    UrlValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: UrlValidator,
      selectors: [["", "url", "", "formControlName", ""], ["", "url", "", "formControl", ""], ["", "url", "", "ngModel", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([URL_VALIDATOR])]
    });
    var uuids = {
      '3': /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
      '4': /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
      '5': /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
      'all': /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
    };

    var uuid = function uuid(version) {
      return function (control) {
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
          return null;
        }

        var v = control.value;
        var pattern = uuids[version] || uuids.all;
        return new RegExp(pattern).test(v) ? null : {
          uuid: true
        };
      };
    };

    var UUID_VALIDATOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return UUIDValidator;
      }),
      multi: true
    };

    var UUIDValidator = /*#__PURE__*/function () {
      function UUIDValidator() {
        _classCallCheck(this, UUIDValidator);
      }

      _createClass(UUIDValidator, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.validator = uuid(this.uuid);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          for (var key in changes) {
            if (key === 'uuid') {
              this.validator = uuid(changes[key].currentValue);

              if (this.onChange) {
                this.onChange();
              }
            }
          }
        }
      }, {
        key: "validate",
        value: function validate(c) {
          return this.validator(c);
        }
      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this.onChange = fn;
        }
      }]);

      return UUIDValidator;
    }();

    UUIDValidator.ɵfac = function UUIDValidator_Factory(t) {
      return new (t || UUIDValidator)();
    };

    UUIDValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: UUIDValidator,
      selectors: [["", "uuid", "", "formControlName", ""], ["", "uuid", "", "formControl", ""], ["", "uuid", "", "ngModel", ""]],
      inputs: {
        uuid: "uuid"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([UUID_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UUIDValidator.prototype, "uuid", void 0);
    var CustomValidators = {
      arrayLength: arrayLength,
      base64: base64,
      creditCard: creditCard,
      date: date,
      dateISO: dateISO,
      digits: digits,
      email: email,
      equal: equal,
      equalTo: equalTo,
      gt: gt,
      gte: gte,
      json: json,
      lt: lt,
      lte: lte,
      max: max,
      maxDate: maxDate,
      min: min,
      minDate: minDate,
      notEqual: notEqual,
      notEqualTo: notEqualTo,
      number: number,
      property: property,
      range: range,
      rangeLength: rangeLength,
      url: url,
      uuid: uuid
    };
    var CustomDirectives = [ArrayLengthValidator, Base64Validator, CreditCardValidator, DateValidator, DateISOValidator, DigitsValidator, EmailValidator, EqualValidator, EqualToValidator, GreaterThanValidator, GreaterThanEqualValidator, JSONValidator, LessThanValidator, LessThanEqualValidator, MaxValidator, MaxDateValidator, MinValidator, MinDateValidator, NotEqualValidator, NotEqualToValidator, NumberValidator, PropertyValidator, RangeValidator, RangeLengthValidator, UrlValidator, UUIDValidator];

    var CustomFormsModule = /*#__PURE__*/_createClass(function CustomFormsModule() {
      _classCallCheck(this, CustomFormsModule);
    });

    CustomFormsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: CustomFormsModule
    });
    CustomFormsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function CustomFormsModule_Factory(t) {
        return new (t || CustomFormsModule)();
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ArrayLengthValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[arrayLength][formControlName],[arrayLength][formControl],[arrayLength][ngModel]',
          providers: [ARRAY_LENGTH_VALIDATOR]
        }]
      }], null, {
        arrayLength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Base64Validator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[base64][formControlName],[base64][formControl],[base64][ngModel]',
          providers: [BASE64_VALIDATOR]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CreditCardValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[creditCard][formControlName],[creditCard][formControl],[creditCard][ngModel]',
          providers: [CREDIT_CARD_VALIDATOR]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DateISOValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[dateISO][formControlName],[dateISO][formControl],[dateISO][ngModel]',
          providers: [DATE_ISO_VALIDATOR]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DateValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[date][formControlName],[date][formControl],[date][ngModel]',
          providers: [DATE_VALIDATOR]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DigitsValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[digits][formControlName],[digits][formControl],[digits][ngModel]',
          providers: [DIGITS_VALIDATOR]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EmailValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[ngvemail][formControlName],[ngvemail][formControl],[ngvemail][ngModel]',
          providers: [EMAIL_VALIDATOR]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EqualToValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[equalTo][formControlName],[equalTo][formControl],[equalTo][ngModel]',
          providers: [EQUAL_TO_VALIDATOR]
        }]
      }], null, {
        equalTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EqualValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[equal][formControlName],[equal][formControl],[equal][ngModel]',
          providers: [EQUAL_VALIDATOR]
        }]
      }], null, {
        equal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GreaterThanEqualValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[gte][formControlName],[gte][formControl],[gte][ngModel]',
          providers: [GREATER_THAN_EQUAL_VALIDATOR]
        }]
      }], null, {
        gte: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GreaterThanValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[gt][formControlName],[gt][formControl],[gt][ngModel]',
          providers: [GREATER_THAN_VALIDATOR]
        }]
      }], null, {
        gt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](JSONValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[json][formControlName],[json][formControl],[json][ngModel]',
          providers: [JSON_VALIDATOR]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LessThanEqualValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[lte][formControlName],[lte][formControl],[lte][ngModel]',
          providers: [LESS_THAN_EQUAL_VALIDATOR]
        }]
      }], null, {
        lte: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LessThanValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[lt][formControlName],[lt][formControl],[lt][ngModel]',
          providers: [LESS_THAN_VALIDATOR]
        }]
      }], null, {
        lt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MaxDateValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[maxDate][formControlName],[maxDate][formControl],[maxDate][ngModel]',
          providers: [MAX_DATE_VALIDATOR]
        }]
      }], null, {
        maxDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MaxValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[max][formControlName],[max][formControl],[max][ngModel]',
          providers: [MAX_VALIDATOR]
        }]
      }], null, {
        max: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MinDateValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[minDate][formControlName],[minDate][formControl],[minDate][ngModel]',
          providers: [MIN_DATE_VALIDATOR]
        }]
      }], null, {
        minDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MinValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[min][formControlName],[min][formControl],[min][ngModel]',
          providers: [MIN_VALIDATOR]
        }]
      }], null, {
        min: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NotEqualToValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[notEqualTo][formControlName],[notEqualTo][formControl],[notEqualTo][ngModel]',
          providers: [NOT_EQUAL_TO_VALIDATOR]
        }]
      }], null, {
        notEqualTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NotEqualValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[notEqual][formControlName],[notEqual][formControl],[notEqual][ngModel]',
          providers: [NOT_EQUAL_VALIDATOR]
        }]
      }], null, {
        notEqual: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NumberValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[number][formControlName],[number][formControl],[number][ngModel]',
          providers: [NUMBER_VALIDATOR]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PropertyValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[property][formControlName],[property][formControl],[property][ngModel]',
          providers: [PROPERTY_VALIDATOR]
        }]
      }], null, {
        property: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RangeLengthValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[rangeLength][formControlName],[rangeLength][formControl],[rangeLength][ngModel]',
          providers: [RANGE_LENGTH_VALIDATOR]
        }]
      }], null, {
        rangeLength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RangeValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[range][formControlName],[range][formControl],[range][ngModel]',
          providers: [RANGE_VALIDATOR]
        }]
      }], null, {
        range: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UrlValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[url][formControlName],[url][formControl],[url][ngModel]',
          providers: [URL_VALIDATOR]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UUIDValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[uuid][formControlName],[uuid][formControl],[uuid][ngModel]',
          providers: [UUID_VALIDATOR]
        }]
      }], null, {
        uuid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CustomFormsModule, {
        declarations: [ArrayLengthValidator, Base64Validator, CreditCardValidator, DateValidator, DateISOValidator, DigitsValidator, EmailValidator, EqualValidator, EqualToValidator, GreaterThanValidator, GreaterThanEqualValidator, JSONValidator, LessThanValidator, LessThanEqualValidator, MaxValidator, MaxDateValidator, MinValidator, MinDateValidator, NotEqualValidator, NotEqualToValidator, NumberValidator, PropertyValidator, RangeValidator, RangeLengthValidator, UrlValidator, UUIDValidator],
        exports: [ArrayLengthValidator, Base64Validator, CreditCardValidator, DateValidator, DateISOValidator, DigitsValidator, EmailValidator, EqualValidator, EqualToValidator, GreaterThanValidator, GreaterThanEqualValidator, JSONValidator, LessThanValidator, LessThanEqualValidator, MaxValidator, MaxDateValidator, MinValidator, MinDateValidator, NotEqualValidator, NotEqualToValidator, NumberValidator, PropertyValidator, RangeValidator, RangeLengthValidator, UrlValidator, UUIDValidator]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CustomFormsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [CustomDirectives],
          exports: [CustomDirectives]
        }]
      }], null, null);
    })();
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ngx-custom-validators.js.map

    /***/

  },

  /***/
  "./src/app/views/sessions/error/error.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/views/sessions/error/error.component.ts ***!
    \*********************************************************/

  /*! exports provided: ErrorComponent */

  /***/
  function srcAppViewsSessionsErrorErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () {
      return ErrorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/"];
    };

    var ErrorComponent = /*#__PURE__*/function () {
      function ErrorComponent() {
        _classCallCheck(this, ErrorComponent);
      }

      _createClass(ErrorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ErrorComponent;
    }();

    ErrorComponent.ɵfac = function ErrorComponent_Factory(t) {
      return new (t || ErrorComponent)();
    };

    ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ErrorComponent,
      selectors: [["app-error"]],
      decls: 15,
      vars: 2,
      consts: [[1, "page-wrap", "height-100", "default-bg"], [1, "app-error"], [1, "fix"], ["color", "warn", 1, "error-icon"], [1, "error-text"], [1, "error-title"], [1, "error-subtitle"], [1, "error-actions"], ["mat-raised-button", "", "color", "primary", 1, "mb-1", "mr-05", 3, "routerLink"], ["mat-raised-button", "", "color", "warn"]],
      template: function ErrorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "500");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Server Error!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Back to Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Report this Problem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Nlc3Npb25zL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-error',
          templateUrl: './error.component.html',
          styleUrls: ['./error.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/sessions/forgot-password/forgot-password.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/views/sessions/forgot-password/forgot-password.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ForgotPasswordComponent */

  /***/
  function srcAppViewsSessionsForgotPasswordForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
      return ForgotPasswordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");

    function ForgotPasswordComponent_small_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ForgotPasswordComponent = /*#__PURE__*/function () {
      function ForgotPasswordComponent() {
        _classCallCheck(this, ForgotPasswordComponent);
      }

      _createClass(ForgotPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "submitEmail",
        value: function submitEmail() {
          this.submitButton.disabled = true;
          this.progressBar.mode = 'indeterminate';
        }
      }]);

      return ForgotPasswordComponent;
    }();

    ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) {
      return new (t || ForgotPasswordComponent)();
    };

    ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ForgotPasswordComponent,
      selectors: [["app-forgot-password"]],
      viewQuery: function ForgotPasswordComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBar"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.progressBar = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.submitButton = _t.first);
        }
      },
      decls: 24,
      vars: 5,
      consts: [[1, "page-wrap", "height-100", "black"], [1, "session-form-hold"], ["mode", "determinate", 1, "session-progress"], [1, "text-center", "pt-8", "pb-16"], ["width", "60px", "src", "assets/images/logo.png", "alt", "", 1, "mb-05"], [1, "text-muted", "m-0"], [3, "ngSubmit"], ["fpForm", "ngForm"], [1, ""], [1, "full-width"], ["matInput", "", "name", "email", "required", "", "placeholder", "Email", "value", "", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["class", "form-error-msg", 4, "ngIf"], ["mat-raised-button", "", 1, "mat-primary", "full-width", "mb-1", 3, "disabled"], [1, "text-center"], [1, "mat-primary", "text-center", "full-width", 3, "routerLink"], ["fxFlex", ""], [1, "form-error-msg"]],
      template: function ForgotPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-progress-bar", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "New password will be sent to your email address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_9_listener() {
            return ctx.submitEmail();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ForgotPasswordComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.userEmail = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ForgotPasswordComponent_small_15_Template, 2, 0, "small", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Sign in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Create a new account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userEmail);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors && (_r1.dirty || _r1.touched) && (_r1 == null ? null : _r1.errors == null ? null : _r1.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/sessions/signin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/sessions/signup");
        }
      },
      directives: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Nlc3Npb25zL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forgot-password',
          templateUrl: './forgot-password.component.html',
          styleUrls: ['./forgot-password.component.css']
        }]
      }], function () {
        return [];
      }, {
        progressBar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBar"]]
        }],
        submitButton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/views/sessions/lockscreen/lockscreen.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/views/sessions/lockscreen/lockscreen.component.ts ***!
    \*******************************************************************/

  /*! exports provided: LockscreenComponent */

  /***/
  function srcAppViewsSessionsLockscreenLockscreenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LockscreenComponent", function () {
      return LockscreenComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function LockscreenComponent_small_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var LockscreenComponent = /*#__PURE__*/function () {
      function LockscreenComponent() {
        _classCallCheck(this, LockscreenComponent);

        this.lockscreenData = {
          password: ''
        };
      }

      _createClass(LockscreenComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "unlock",
        value: function unlock() {
          console.log(this.lockscreenData);
          this.submitButton.disabled = true;
          this.progressBar.mode = 'indeterminate';
        }
      }]);

      return LockscreenComponent;
    }();

    LockscreenComponent.ɵfac = function LockscreenComponent_Factory(t) {
      return new (t || LockscreenComponent)();
    };

    LockscreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LockscreenComponent,
      selectors: [["app-lockscreen"]],
      viewQuery: function LockscreenComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBar"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.progressBar = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.submitButton = _t.first);
        }
      },
      decls: 23,
      vars: 4,
      consts: [[1, "page-wrap", "height-100", "black"], [1, "session-form-hold", "session-lockscreen"], ["mode", "determinate", 1, "session-progress"], ["fxFlex", "column", "fxFlexWrap", "wrap"], ["fxFlexWrap", "wrap", 1, "lockscreen-user"], ["src", "assets/images/face-3.jpg", "alt", "", 1, "lockscreen-face"], [1, "m-0", "font-normal"], [1, "text-muted"], [3, "ngSubmit"], ["lockscreenForm", "ngForm"], [1, ""], [1, "full-width"], ["type", "password", "name", "password", "required", "", "matInput", "", "placeholder", "Password", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["class", "form-error-msg", 4, "ngIf"], ["mat-raised-button", "", 1, "mat-primary", "full-width", "mb-05", 3, "disabled"], ["mat-raised-button", "", "color", "accent", 1, "mat-primary", "full-width", 3, "routerLink"], [1, "form-error-msg"]],
      template: function LockscreenComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-progress-bar", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "John Doe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Last seen 1 hour ago");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LockscreenComponent_Template_form_ngSubmit_12_listener() {
            return ctx.unlock();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LockscreenComponent_Template_input_ngModelChange_16_listener($event) {
            return ctx.lockscreenData.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LockscreenComponent_small_18_Template, 2, 0, "small", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Unlock");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "It's not me!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lockscreenData.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors && (_r1.dirty || _r1.touched) && (_r1 == null ? null : _r1.errors == null ? null : _r1.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/sessions/signin");
        }
      },
      directives: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Nlc3Npb25zL2xvY2tzY3JlZW4vbG9ja3NjcmVlbi5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LockscreenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-lockscreen',
          templateUrl: './lockscreen.component.html',
          styleUrls: ['./lockscreen.component.css']
        }]
      }], function () {
        return [];
      }, {
        progressBar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBar"]]
        }],
        submitButton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/views/sessions/not-found/not-found.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/views/sessions/not-found/not-found.component.ts ***!
    \*****************************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppViewsSessionsNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/"];
    };

    var NotFoundComponent = /*#__PURE__*/function () {
      function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);
      }

      _createClass(NotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotFoundComponent;
    }();

    NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
      return new (t || NotFoundComponent)();
    };

    NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotFoundComponent,
      selectors: [["app-not-found"]],
      decls: 15,
      vars: 2,
      consts: [[1, "page-wrap", "height-100", "default-bg"], [1, "app-error"], [1, "fix"], ["color", "warn", 1, "error-icon"], [1, "error-text"], [1, "error-title"], [1, "error-subtitle"], [1, "error-actions"], ["mat-raised-button", "", "color", "primary", 1, "mb-1", "mr-05", 3, "routerLink"], ["mat-raised-button", "", "color", "warn"]],
      template: function NotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "404");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Page Not Found!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Back to Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Report this Problem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Nlc3Npb25zL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-not-found',
          templateUrl: './not-found.component.html',
          styleUrls: ['./not-found.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/sessions/sessions.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/views/sessions/sessions.module.ts ***!
    \***************************************************/

  /*! exports provided: SessionsModule */

  /***/
  function srcAppViewsSessionsSessionsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionsModule", function () {
      return SessionsModule;
    });
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! app/shared/shared-material.module */
    "./src/app/shared/shared-material.module.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! app/shared/components/shared-components.module */
    "./src/app/shared/components/shared-components.module.ts");
    /* harmony import */


    var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./forgot-password/forgot-password.component */
    "./src/app/views/sessions/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./lockscreen/lockscreen.component */
    "./src/app/views/sessions/lockscreen/lockscreen.component.ts");
    /* harmony import */


    var _signin_signin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./signin/signin.component */
    "./src/app/views/sessions/signin/signin.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/views/sessions/signup/signup.component.ts");
    /* harmony import */


    var _sessions_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./sessions.routing */
    "./src/app/views/sessions/sessions.routing.ts");
    /* harmony import */


    var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./not-found/not-found.component */
    "./src/app/views/sessions/not-found/not-found.component.ts");
    /* harmony import */


    var _error_error_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./error/error.component */
    "./src/app/views/sessions/error/error.component.ts"); // import { CommonDirectivesModule } from './sdirectives/common/common-directives.module';


    var SessionsModule = /*#__PURE__*/_createClass(function SessionsModule() {
      _classCallCheck(this, SessionsModule);
    });

    SessionsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: SessionsModule
    });
    SessionsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function SessionsModule_Factory(t) {
        return new (t || SessionsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__["SharedMaterialModule"], app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["PerfectScrollbarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_sessions_routing__WEBPACK_IMPORTED_MODULE_12__["SessionsRoutes"])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SessionsModule, {
        declarations: [_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPasswordComponent"], _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_9__["LockscreenComponent"], _signin_signin_component__WEBPACK_IMPORTED_MODULE_10__["SigninComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__["NotFoundComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_14__["ErrorComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__["SharedMaterialModule"], app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["PerfectScrollbarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SessionsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__["SharedMaterialModule"], app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["PerfectScrollbarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_sessions_routing__WEBPACK_IMPORTED_MODULE_12__["SessionsRoutes"])],
          declarations: [_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPasswordComponent"], _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_9__["LockscreenComponent"], _signin_signin_component__WEBPACK_IMPORTED_MODULE_10__["SigninComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__["NotFoundComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_14__["ErrorComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/sessions/sessions.routing.ts":
  /*!****************************************************!*\
    !*** ./src/app/views/sessions/sessions.routing.ts ***!
    \****************************************************/

  /*! exports provided: SessionsRoutes */

  /***/
  function srcAppViewsSessionsSessionsRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionsRoutes", function () {
      return SessionsRoutes;
    });
    /* harmony import */


    var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./forgot-password/forgot-password.component */
    "./src/app/views/sessions/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./lockscreen/lockscreen.component */
    "./src/app/views/sessions/lockscreen/lockscreen.component.ts");
    /* harmony import */


    var _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./signin/signin.component */
    "./src/app/views/sessions/signin/signin.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/views/sessions/signup/signup.component.ts");
    /* harmony import */


    var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./not-found/not-found.component */
    "./src/app/views/sessions/not-found/not-found.component.ts");
    /* harmony import */


    var _error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./error/error.component */
    "./src/app/views/sessions/error/error.component.ts");

    var SessionsRoutes = [{
      path: "",
      children: [{
        path: "signup",
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"],
        data: {
          title: "Signup"
        }
      }, {
        path: "signin",
        component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"],
        data: {
          title: "Signin"
        }
      }, {
        path: "forgot-password",
        component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_0__["ForgotPasswordComponent"],
        data: {
          title: "Forgot password"
        }
      }, {
        path: "lockscreen",
        component: _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_1__["LockscreenComponent"],
        data: {
          title: "Lockscreen"
        }
      }, {
        path: "404",
        component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"],
        data: {
          title: "Not Found"
        }
      }, {
        path: "error",
        component: _error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"],
        data: {
          title: "Error"
        }
      }]
    }];
    /***/
  },

  /***/
  "./src/app/views/sessions/signin/signin.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/views/sessions/signin/signin.component.ts ***!
    \***********************************************************/

  /*! exports provided: SigninComponent */

  /***/
  function srcAppViewsSessionsSigninSigninComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigninComponent", function () {
      return SigninComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var app_shared_animations_matx_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! app/shared/animations/matx-animations */
    "./src/app/shared/animations/matx-animations.ts");
    /* harmony import */


    var app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! app/shared/services/auth/jwt-auth.service */
    "./src/app/shared/services/auth/jwt-auth.service.ts");
    /* harmony import */


    var app_shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! app/shared/services/app-loader/app-loader.service */
    "./src/app/shared/services/app-loader/app-loader.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _shared_components_button_loading_button_loading_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../shared/components/button-loading/button-loading.component */
    "./src/app/shared/components/button-loading/button-loading.component.ts");

    var _c0 = function _c0() {
      return {};
    };

    var _c1 = function _c1() {
      return {
        y: "40px",
        opacity: "0",
        delay: "100ms",
        duration: "400ms"
      };
    };

    var _c2 = function _c2(a1) {
      return {
        value: "*",
        params: a1
      };
    };

    var SigninComponent = /*#__PURE__*/function () {
      function SigninComponent(jwtAuth, matxLoader, router, route) {
        _classCallCheck(this, SigninComponent);

        this.jwtAuth = jwtAuth;
        this.matxLoader = matxLoader;
        this.router = router;
        this.route = route;
        this.errorMsg = '';
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
      }

      _createClass(SigninComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.signinForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('Watson', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('12345678', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            rememberMe: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true)
          });
          this.route.queryParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._unsubscribeAll)).subscribe(function (params) {
            return _this["return"] = params['return'] || '/';
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          // setTimeout(() => {
          this.autoSignIn(); // })
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._unsubscribeAll.next();

          this._unsubscribeAll.complete();
        }
      }, {
        key: "signin",
        value: function signin() {
          var _this2 = this;

          var signinData = this.signinForm.value;
          this.loading = true;
          this.jwtAuth.signin(signinData.username, signinData.password).subscribe(function (response) {
            _this2.loading = false;

            _this2.router.navigateByUrl(_this2["return"]);
          }, function (err) {
            _this2.loading = false;
            _this2.errorMsg = err.message;
          });
        }
      }, {
        key: "autoSignIn",
        value: function autoSignIn() {
          var _this3 = this;

          if (this["return"] === '/') {
            return;
          }

          this.matxLoader.open("Automatically Signing you in! \n Return url: ".concat(this["return"].substring(0, 20), "..."), {
            width: '320px'
          });
          setTimeout(function () {
            _this3.signin();

            console.log('autoSignIn');

            _this3.matxLoader.close();
          }, 2000);
        }
      }]);

      return SigninComponent;
    }();

    SigninComponent.ɵfac = function SigninComponent_Factory(t) {
      return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_3__["JwtAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_4__["AppLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]));
    };

    SigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SigninComponent,
      selectors: [["app-signin"]],
      decls: 24,
      vars: 8,
      consts: [["fxLayout", "row wrap", "fxLayoutAlign", "center center", 1, "height-100vh", "signup4-wrap", 3, "perfectScrollbar"], ["fxLayout", "row wrap", "fxLayout.xs", "column", "fxLayoutAlign", "start stretch", "fxFlex", "60", "fxFlex.xs", "94", "fxFlex.sm", "80", 1, "signup4-container", "mat-elevation-z4", "white"], ["fxLayout", "column", "fxLayoutAlign", "center center", "fxFlex", "40", 1, "signup4-header"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center", 1, ""], ["width", "200px", "src", "assets/images/illustrations/lighthouse.svg", "alt", ""], ["fxFlex", "60", "fxLayout", "row wrap", "fxLayoutAlign", "center center"], [1, "signup4-form", "grey-100", 3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "username", "type", "text", "name", "username", "placeholder", "Username"], ["matInput", "", "formControlName", "password", "type", "password", "name", "password", "placeholder", "********"], ["formControlName", "rememberMe"], ["fxLayout", "row wrap", "fxLayoutAlign", "start center", 2, "margin-top", "20px"], ["loadingText", "Signing in...", "color", "primary", 1, "mr-16", 3, "loading"], [1, "px-16"], ["routerLink", "/sessions/signup", 1, "font-weight-bold", "mat-color-primary"]],
      template: function SigninComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SigninComponent_Template_form_ngSubmit_6_listener() {
            return ctx.signin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-checkbox", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Remember this computer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button-loading", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Sign in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "or");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signinForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx.loading);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckbox"], _shared_components_button_loading_button_loading_component__WEBPACK_IMPORTED_MODULE_13__["ButtonLoadingComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Nlc3Npb25zL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LnNjc3MifQ== */"],
      data: {
        animation: app_shared_animations_matx_animations__WEBPACK_IMPORTED_MODULE_2__["matxAnimations"]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SigninComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-signin",
          templateUrl: "./signin.component.html",
          styleUrls: ["./signin.component.scss"],
          animations: app_shared_animations_matx_animations__WEBPACK_IMPORTED_MODULE_2__["matxAnimations"]
        }]
      }], function () {
        return [{
          type: app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_3__["JwtAuthService"]
        }, {
          type: app_shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_4__["AppLoaderService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/sessions/signup/signup.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/views/sessions/signup/signup.component.ts ***!
    \***********************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppViewsSessionsSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-custom-validators */
    "./node_modules/ngx-custom-validators/__ivy_ngcc__/fesm2015/ngx-custom-validators.js");
    /* harmony import */


    var app_shared_animations_matx_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! app/shared/animations/matx-animations */
    "./src/app/shared/animations/matx-animations.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return {};
    };

    var _c1 = function _c1() {
      return {
        y: "120px",
        opacity: "0",
        delay: "100ms",
        duration: "400ms"
      };
    };

    var _c2 = function _c2(a1) {
      return {
        value: "*",
        params: a1
      };
    };

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent(fb) {
        _classCallCheck(this, SignupComponent);

        this.fb = fb;
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
          var confirmPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", ngx_custom_validators__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].equalTo(password));
          this.signupForm = this.fb.group({
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: password,
            agreed: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          if (!this.signupForm.invalid) {
            // do what you wnat with your data
            console.log(this.signupForm.value);
          }
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["app-signup"]],
      decls: 28,
      vars: 7,
      consts: [["fxLayout", "row wrap", "fxLayoutAlign", "center center", 1, "height-100vh", "signup4-wrap", 3, "perfectScrollbar"], ["fxLayout", "row wrap", "fxLayout.xs", "column", "fxLayoutAlign", "start stretch", "fxFlex", "60", "fxFlex.xs", "94", "fxFlex.sm", "80", 1, "signup4-container", "mat-elevation-z4"], ["fxLayout", "column", "fxLayoutAlign", "center center", "fxFlex", "40", 1, "signup4-header", "grey-200"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center", 1, ""], ["width", "200px", "src", "assets/images/illustrations/posting_photo.svg", "alt", ""], ["fxFlex", "60", "fxLayout", "row wrap", "fxLayoutAlign", "center center"], [1, "signup4-form", "white", 3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "username", "type", "text", "name", "username", "placeholder", "Username"], ["matInput", "", "formControlName", "email", "type", "email", "name", "email", "placeholder", "Email"], ["matInput", "", "formControlName", "password", "type", "password", "name", "password", "placeholder", "********"], ["formControlName", "agreed"], ["fxLayout", "row wrap", "fxLayoutAlign", "start center", 2, "margin-top", "20px"], ["mat-flat-button", "", "color", "primary"], [2, "padding", "0px 8px 0px 16px"], ["routerLink", "/sessions/signin", 1, "font-weight-bold", "mat-color-primary"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_6_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-checkbox", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "I agree with terms and condtions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "or");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signupForm);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckbox"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Nlc3Npb25zL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MifQ== */"],
      data: {
        animation: app_shared_animations_matx_animations__WEBPACK_IMPORTED_MODULE_3__["matxAnimations"]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-signup",
          templateUrl: "./signup.component.html",
          styleUrls: ["./signup.component.scss"],
          animations: app_shared_animations_matx_animations__WEBPACK_IMPORTED_MODULE_3__["matxAnimations"]
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=views-sessions-sessions-module-es5.js.map