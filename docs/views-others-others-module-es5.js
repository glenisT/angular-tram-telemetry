function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-others-others-module"], {
  /***/
  "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js":
  /*!*******************************************************************************!*\
    !*** ./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js ***!
    \*******************************************************************************/

  /*! exports provided: FileDropDirective, FileItem, FileLikeObject, FileSelectDirective, FileUploadModule, FileUploader */

  /***/
  function node_modulesNg2FileUpload__ivy_ngcc__Fesm2015Ng2FileUploadJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileDropDirective", function () {
      return FileDropDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileItem", function () {
      return FileItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileLikeObject", function () {
      return FileLikeObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileSelectDirective", function () {
      return FileSelectDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileUploadModule", function () {
      return FileUploadModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileUploader", function () {
      return FileUploader;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} node
     * @return {?}
     */


    function isElement(node) {
      return !!(node && (node.nodeName || node.prop && node.attr && node.find));
    }

    var FileLikeObject = /*#__PURE__*/function () {
      /**
       * @param {?} fileOrInput
       */
      function FileLikeObject(fileOrInput) {
        _classCallCheck(this, FileLikeObject);

        this.rawFile = fileOrInput;
        /** @type {?} */

        var isInput = isElement(fileOrInput);
        /** @type {?} */

        var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
        /** @type {?} */

        var postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
        /** @type {?} */

        var method = '_createFrom' + postfix;

        /** @type {?} */
        this[method](fakePathOrObject);
      }
      /**
       * @param {?} path
       * @return {?}
       */


      _createClass(FileLikeObject, [{
        key: "_createFromFakePath",
        value: function _createFromFakePath(path) {
          this.lastModifiedDate = void 0;
          this.size = void 0;
          this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
          this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
        }
        /**
         * @param {?} object
         * @return {?}
         */

      }, {
        key: "_createFromObject",
        value: function _createFromObject(object) {
          this.size = object.size;
          this.type = object.type;
          this.name = object.name;
        }
      }]);

      return FileLikeObject;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FileItem = /*#__PURE__*/function () {
      /**
       * @param {?} uploader
       * @param {?} some
       * @param {?} options
       */
      function FileItem(uploader, some, options) {
        _classCallCheck(this, FileItem);

        this.url = '/';
        this.headers = [];
        this.withCredentials = true;
        this.formData = [];
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.uploader = uploader;
        this.some = some;
        this.options = options;
        this.file = new FileLikeObject(some);
        this._file = some;

        if (uploader.options) {
          this.method = uploader.options.method || 'POST';
          this.alias = uploader.options.itemAlias || 'file';
        }

        this.url = uploader.options.url;
      }
      /**
       * @return {?}
       */


      _createClass(FileItem, [{
        key: "upload",
        value: function upload() {
          try {
            this.uploader.uploadItem(this);
          } catch (e) {
            this.uploader._onCompleteItem(this, '', 0, {});

            this.uploader._onErrorItem(this, '', 0, {});
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "cancel",
        value: function cancel() {
          this.uploader.cancelItem(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "remove",
        value: function remove() {
          this.uploader.removeFromQueue(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "onBeforeUpload",
        value: function onBeforeUpload() {
          return void 0;
        }
        /**
         * @param {?} form
         * @return {?}
         */

      }, {
        key: "onBuildForm",
        value: function onBuildForm(form) {
          return {
            form: form
          };
        }
        /**
         * @param {?} progress
         * @return {?}
         */

      }, {
        key: "onProgress",
        value: function onProgress(progress) {
          return {
            progress: progress
          };
        }
        /**
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "onSuccess",
        value: function onSuccess(response, status, headers) {
          return {
            response: response,
            status: status,
            headers: headers
          };
        }
        /**
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "onError",
        value: function onError(response, status, headers) {
          return {
            response: response,
            status: status,
            headers: headers
          };
        }
        /**
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "onCancel",
        value: function onCancel(response, status, headers) {
          return {
            response: response,
            status: status,
            headers: headers
          };
        }
        /**
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "onComplete",
        value: function onComplete(response, status, headers) {
          return {
            response: response,
            status: status,
            headers: headers
          };
        }
        /**
         * @return {?}
         */

      }, {
        key: "_onBeforeUpload",
        value: function _onBeforeUpload() {
          this.isReady = true;
          this.isUploading = true;
          this.isUploaded = false;
          this.isSuccess = false;
          this.isCancel = false;
          this.isError = false;
          this.progress = 0;
          this.onBeforeUpload();
        }
        /**
         * @param {?} form
         * @return {?}
         */

      }, {
        key: "_onBuildForm",
        value: function _onBuildForm(form) {
          this.onBuildForm(form);
        }
        /**
         * @param {?} progress
         * @return {?}
         */

      }, {
        key: "_onProgress",
        value: function _onProgress(progress) {
          this.progress = progress;
          this.onProgress(progress);
        }
        /**
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "_onSuccess",
        value: function _onSuccess(response, status, headers) {
          this.isReady = false;
          this.isUploading = false;
          this.isUploaded = true;
          this.isSuccess = true;
          this.isCancel = false;
          this.isError = false;
          this.progress = 100;
          this.index = void 0;
          this.onSuccess(response, status, headers);
        }
        /**
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "_onError",
        value: function _onError(response, status, headers) {
          this.isReady = false;
          this.isUploading = false;
          this.isUploaded = true;
          this.isSuccess = false;
          this.isCancel = false;
          this.isError = true;
          this.progress = 0;
          this.index = void 0;
          this.onError(response, status, headers);
        }
        /**
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "_onCancel",
        value: function _onCancel(response, status, headers) {
          this.isReady = false;
          this.isUploading = false;
          this.isUploaded = false;
          this.isSuccess = false;
          this.isCancel = true;
          this.isError = false;
          this.progress = 0;
          this.index = void 0;
          this.onCancel(response, status, headers);
        }
        /**
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "_onComplete",
        value: function _onComplete(response, status, headers) {
          this.onComplete(response, status, headers);

          if (this.uploader.options.removeAfterUpload) {
            this.remove();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "_prepareToUploading",
        value: function _prepareToUploading() {
          this.index = this.index || ++this.uploader._nextIndex;
          this.isReady = true;
        }
      }]);

      return FileItem;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FileType = /*#__PURE__*/function () {
      function FileType() {
        _classCallCheck(this, FileType);
      }

      _createClass(FileType, null, [{
        key: "getMimeClass",
        value:
        /**
         * @param {?} file
         * @return {?}
         */
        function getMimeClass(file) {
          /** @type {?} */
          var mimeClass = 'application';

          if (this.mime_psd.indexOf(file.type) !== -1) {
            mimeClass = 'image';
          } else if (file.type.match('image.*')) {
            mimeClass = 'image';
          } else if (file.type.match('video.*')) {
            mimeClass = 'video';
          } else if (file.type.match('audio.*')) {
            mimeClass = 'audio';
          } else if (file.type === 'application/pdf') {
            mimeClass = 'pdf';
          } else if (this.mime_compress.indexOf(file.type) !== -1) {
            mimeClass = 'compress';
          } else if (this.mime_doc.indexOf(file.type) !== -1) {
            mimeClass = 'doc';
          } else if (this.mime_xsl.indexOf(file.type) !== -1) {
            mimeClass = 'xls';
          } else if (this.mime_ppt.indexOf(file.type) !== -1) {
            mimeClass = 'ppt';
          }

          if (mimeClass === 'application') {
            mimeClass = this.fileTypeDetection(file.name);
          }

          return mimeClass;
        }
        /**
         * @param {?} inputFilename
         * @return {?}
         */

      }, {
        key: "fileTypeDetection",
        value: function fileTypeDetection(inputFilename) {
          /** @type {?} */
          var types = {
            'jpg': 'image',
            'jpeg': 'image',
            'tif': 'image',
            'psd': 'image',
            'bmp': 'image',
            'png': 'image',
            'nef': 'image',
            'tiff': 'image',
            'cr2': 'image',
            'dwg': 'image',
            'cdr': 'image',
            'ai': 'image',
            'indd': 'image',
            'pin': 'image',
            'cdp': 'image',
            'skp': 'image',
            'stp': 'image',
            '3dm': 'image',
            'mp3': 'audio',
            'wav': 'audio',
            'wma': 'audio',
            'mod': 'audio',
            'm4a': 'audio',
            'compress': 'compress',
            'zip': 'compress',
            'rar': 'compress',
            '7z': 'compress',
            'lz': 'compress',
            'z01': 'compress',
            'bz2': 'compress',
            'gz': 'compress',
            'pdf': 'pdf',
            'xls': 'xls',
            'xlsx': 'xls',
            'ods': 'xls',
            'mp4': 'video',
            'avi': 'video',
            'wmv': 'video',
            'mpg': 'video',
            'mts': 'video',
            'flv': 'video',
            '3gp': 'video',
            'vob': 'video',
            'm4v': 'video',
            'mpeg': 'video',
            'm2ts': 'video',
            'mov': 'video',
            'doc': 'doc',
            'docx': 'doc',
            'eps': 'doc',
            'txt': 'doc',
            'odt': 'doc',
            'rtf': 'doc',
            'ppt': 'ppt',
            'pptx': 'ppt',
            'pps': 'ppt',
            'ppsx': 'ppt',
            'odp': 'ppt'
          };
          /** @type {?} */

          var chunks = inputFilename.split('.');

          if (chunks.length < 2) {
            return 'application';
          }
          /** @type {?} */


          var extension = chunks[chunks.length - 1].toLowerCase();

          if (types[extension] === undefined) {
            return 'application';
          } else {
            return types[extension];
          }
        }
      }]);

      return FileType;
    }();
    /*  MS office  */


    FileType.mime_doc = ['application/msword', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.openxmlformats-officedocument.wordprocessingml.template', 'application/vnd.ms-word.document.macroEnabled.12', 'application/vnd.ms-word.template.macroEnabled.12'];
    FileType.mime_xsl = ['application/vnd.ms-excel', 'application/vnd.ms-excel', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.spreadsheetml.template', 'application/vnd.ms-excel.sheet.macroEnabled.12', 'application/vnd.ms-excel.template.macroEnabled.12', 'application/vnd.ms-excel.addin.macroEnabled.12', 'application/vnd.ms-excel.sheet.binary.macroEnabled.12'];
    FileType.mime_ppt = ['application/vnd.ms-powerpoint', 'application/vnd.ms-powerpoint', 'application/vnd.ms-powerpoint', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.presentationml.template', 'application/vnd.openxmlformats-officedocument.presentationml.slideshow', 'application/vnd.ms-powerpoint.addin.macroEnabled.12', 'application/vnd.ms-powerpoint.presentation.macroEnabled.12', 'application/vnd.ms-powerpoint.presentation.macroEnabled.12', 'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'];
    /* PSD */

    FileType.mime_psd = ['image/photoshop', 'image/x-photoshop', 'image/psd', 'application/photoshop', 'application/psd', 'zz-application/zz-winassoc-psd'];
    /* Compressed files */

    FileType.mime_compress = ['application/x-gtar', 'application/x-gcompress', 'application/compress', 'application/x-tar', 'application/x-rar-compressed', 'application/octet-stream', 'application/x-zip-compressed', 'application/zip-compressed', 'application/x-7z-compressed', 'application/gzip', 'application/x-bzip2'];

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} value
     * @return {?}
     */


    function _isFile(value) {
      return File && value instanceof File;
    }
    /**
     * @record
     */


    function Headers() {}

    if (false) {}
    /**
     * @record
     */


    function FileUploaderOptions() {}

    if (false) {}

    var FileUploader = /*#__PURE__*/function () {
      /**
       * @param {?} options
       */
      function FileUploader(options) {
        _classCallCheck(this, FileUploader);

        this.isUploading = false;
        this.queue = [];
        this.progress = 0;
        this._nextIndex = 0;
        this.options = {
          autoUpload: false,
          isHTML5: true,
          filters: [],
          removeAfterUpload: false,
          disableMultipart: false,
          formatDataFunction:
          /**
          * @param {?} item
          * @return {?}
          */
          function formatDataFunction(item) {
            return item._file;
          },
          formatDataFunctionIsAsync: false
        };
        this.setOptions(options);
        this.response = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @param {?} options
       * @return {?}
       */


      _createClass(FileUploader, [{
        key: "setOptions",
        value: function setOptions(options) {
          this.options = Object.assign(this.options, options);
          this.authToken = this.options.authToken;
          this.authTokenHeader = this.options.authTokenHeader || 'Authorization';
          this.autoUpload = this.options.autoUpload;
          this.options.filters.unshift({
            name: 'queueLimit',
            fn: this._queueLimitFilter
          });

          if (this.options.maxFileSize) {
            this.options.filters.unshift({
              name: 'fileSize',
              fn: this._fileSizeFilter
            });
          }

          if (this.options.allowedFileType) {
            this.options.filters.unshift({
              name: 'fileType',
              fn: this._fileTypeFilter
            });
          }

          if (this.options.allowedMimeType) {
            this.options.filters.unshift({
              name: 'mimeType',
              fn: this._mimeTypeFilter
            });
          }

          for (var i = 0; i < this.queue.length; i++) {
            this.queue[i].url = this.options.url;
          }
        }
        /**
         * @param {?} files
         * @param {?=} options
         * @param {?=} filters
         * @return {?}
         */

      }, {
        key: "addToQueue",
        value: function addToQueue(files, options, filters) {
          var _this = this;

          /** @type {?} */
          var list = [];

          var _iterator = _createForOfIteratorHelper(files),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var file = _step.value;
              list.push(file);
            }
            /** @type {?} */

          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          var arrayOfFilters = this._getFilters(filters);
          /** @type {?} */


          var count = this.queue.length;
          /** @type {?} */

          var addedFileItems = [];
          list.map(
          /**
          * @param {?} some
          * @return {?}
          */
          function (some) {
            if (!options) {
              options = _this.options;
            }
            /** @type {?} */


            var temp = new FileLikeObject(some);

            if (_this._isValidFile(temp, arrayOfFilters, options)) {
              /** @type {?} */
              var fileItem = new FileItem(_this, some, options);
              addedFileItems.push(fileItem);

              _this.queue.push(fileItem);

              _this._onAfterAddingFile(fileItem);
            } else {
              /** @type {?} */
              var filter = arrayOfFilters[_this._failFilterIndex];

              _this._onWhenAddingFileFailed(temp, filter, options);
            }
          });

          if (this.queue.length !== count) {
            this._onAfterAddingAll(addedFileItems);

            this.progress = this._getTotalProgress();
          }

          this._render();

          if (this.options.autoUpload) {
            this.uploadAll();
          }
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "removeFromQueue",
        value: function removeFromQueue(value) {
          /** @type {?} */
          var index = this.getIndexOfItem(value);
          /** @type {?} */

          var item = this.queue[index];

          if (item.isUploading) {
            item.cancel();
          }

          this.queue.splice(index, 1);
          this.progress = this._getTotalProgress();
        }
        /**
         * @return {?}
         */

      }, {
        key: "clearQueue",
        value: function clearQueue() {
          while (this.queue.length) {
            this.queue[0].remove();
          }

          this.progress = 0;
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "uploadItem",
        value: function uploadItem(value) {
          /** @type {?} */
          var index = this.getIndexOfItem(value);
          /** @type {?} */

          var item = this.queue[index];
          /** @type {?} */

          var transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';

          item._prepareToUploading();

          if (this.isUploading) {
            return;
          }

          this.isUploading = true;

          /** @type {?} */
          this[transport](item);
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "cancelItem",
        value: function cancelItem(value) {
          /** @type {?} */
          var index = this.getIndexOfItem(value);
          /** @type {?} */

          var item = this.queue[index];
          /** @type {?} */

          var prop = this.options.isHTML5 ? item._xhr : item._form;

          if (item && item.isUploading) {
            prop.abort();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "uploadAll",
        value: function uploadAll() {
          /** @type {?} */
          var items = this.getNotUploadedItems().filter(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return !item.isUploading;
          });

          if (!items.length) {
            return;
          }

          items.map(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return item._prepareToUploading();
          });
          items[0].upload();
        }
        /**
         * @return {?}
         */

      }, {
        key: "cancelAll",
        value: function cancelAll() {
          /** @type {?} */
          var items = this.getNotUploadedItems();
          items.map(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return item.cancel();
          });
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "isFile",
        value: function isFile(value) {
          return _isFile(value);
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "isFileLikeObject",
        value: function isFileLikeObject(value) {
          return value instanceof FileLikeObject;
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "getIndexOfItem",
        value: function getIndexOfItem(value) {
          return typeof value === 'number' ? value : this.queue.indexOf(value);
        }
        /**
         * @return {?}
         */

      }, {
        key: "getNotUploadedItems",
        value: function getNotUploadedItems() {
          return this.queue.filter(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return !item.isUploaded;
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "getReadyItems",
        value: function getReadyItems() {
          return this.queue.filter(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return item.isReady && !item.isUploading;
          }).sort(
          /**
          * @param {?} item1
          * @param {?} item2
          * @return {?}
          */
          function (item1, item2) {
            return item1.index - item2.index;
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "destroy",
        value: function destroy() {
          return void 0;
        }
        /**
         * @param {?} fileItems
         * @return {?}
         */

      }, {
        key: "onAfterAddingAll",
        value: function onAfterAddingAll(fileItems) {
          return {
            fileItems: fileItems
          };
        }
        /**
         * @param {?} fileItem
         * @param {?} form
         * @return {?}
         */

      }, {
        key: "onBuildItemForm",
        value: function onBuildItemForm(fileItem, form) {
          return {
            fileItem: fileItem,
            form: form
          };
        }
        /**
         * @param {?} fileItem
         * @return {?}
         */

      }, {
        key: "onAfterAddingFile",
        value: function onAfterAddingFile(fileItem) {
          return {
            fileItem: fileItem
          };
        }
        /**
         * @param {?} item
         * @param {?} filter
         * @param {?} options
         * @return {?}
         */

      }, {
        key: "onWhenAddingFileFailed",
        value: function onWhenAddingFileFailed(item, filter, options) {
          return {
            item: item,
            filter: filter,
            options: options
          };
        }
        /**
         * @param {?} fileItem
         * @return {?}
         */

      }, {
        key: "onBeforeUploadItem",
        value: function onBeforeUploadItem(fileItem) {
          return {
            fileItem: fileItem
          };
        }
        /**
         * @param {?} fileItem
         * @param {?} progress
         * @return {?}
         */

      }, {
        key: "onProgressItem",
        value: function onProgressItem(fileItem, progress) {
          return {
            fileItem: fileItem,
            progress: progress
          };
        }
        /**
         * @param {?} progress
         * @return {?}
         */

      }, {
        key: "onProgressAll",
        value: function onProgressAll(progress) {
          return {
            progress: progress
          };
        }
        /**
         * @param {?} item
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "onSuccessItem",
        value: function onSuccessItem(item, response, status, headers) {
          return {
            item: item,
            response: response,
            status: status,
            headers: headers
          };
        }
        /**
         * @param {?} item
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "onErrorItem",
        value: function onErrorItem(item, response, status, headers) {
          return {
            item: item,
            response: response,
            status: status,
            headers: headers
          };
        }
        /**
         * @param {?} item
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "onCancelItem",
        value: function onCancelItem(item, response, status, headers) {
          return {
            item: item,
            response: response,
            status: status,
            headers: headers
          };
        }
        /**
         * @param {?} item
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "onCompleteItem",
        value: function onCompleteItem(item, response, status, headers) {
          return {
            item: item,
            response: response,
            status: status,
            headers: headers
          };
        }
        /**
         * @return {?}
         */

      }, {
        key: "onCompleteAll",
        value: function onCompleteAll() {
          return void 0;
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "_mimeTypeFilter",
        value: function _mimeTypeFilter(item) {
          return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "_fileSizeFilter",
        value: function _fileSizeFilter(item) {
          return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "_fileTypeFilter",
        value: function _fileTypeFilter(item) {
          return !(this.options.allowedFileType && this.options.allowedFileType.indexOf(FileType.getMimeClass(item)) === -1);
        }
        /**
         * @param {?} item
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "_onErrorItem",
        value: function _onErrorItem(item, response, status, headers) {
          item._onError(response, status, headers);

          this.onErrorItem(item, response, status, headers);
        }
        /**
         * @param {?} item
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "_onCompleteItem",
        value: function _onCompleteItem(item, response, status, headers) {
          item._onComplete(response, status, headers);

          this.onCompleteItem(item, response, status, headers);
          /** @type {?} */

          var nextItem = this.getReadyItems()[0];
          this.isUploading = false;

          if (nextItem) {
            nextItem.upload();
            return;
          }

          this.onCompleteAll();
          this.progress = this._getTotalProgress();

          this._render();
        }
        /**
         * @protected
         * @param {?} parsedHeaders
         * @return {?}
         */

      }, {
        key: "_headersGetter",
        value: function _headersGetter(parsedHeaders) {
          return (
            /**
            * @param {?} name
            * @return {?}
            */
            function (name) {
              if (name) {
                return parsedHeaders[name.toLowerCase()] || void 0;
              }

              return parsedHeaders;
            }
          );
        }
        /**
         * @protected
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "_xhrTransport",
        value: function _xhrTransport(item) {
          var _this2 = this;

          /** @type {?} */
          var that = this;
          /** @type {?} */

          var xhr = item._xhr = new XMLHttpRequest();
          /** @type {?} */

          var sendable;

          this._onBeforeUploadItem(item);

          if (typeof item._file.size !== 'number') {
            throw new TypeError('The file specified is no longer valid');
          }

          if (!this.options.disableMultipart) {
            sendable = new FormData();

            this._onBuildItemForm(item, sendable);
            /** @type {?} */


            var appendFile =
            /**
            * @return {?}
            */
            function appendFile() {
              return sendable.append(item.alias, item._file, item.file.name);
            };

            if (!this.options.parametersBeforeFiles) {
              appendFile();
            } // For AWS, Additional Parameters must come BEFORE Files


            if (this.options.additionalParameter !== undefined) {
              Object.keys(this.options.additionalParameter).forEach(
              /**
              * @param {?} key
              * @return {?}
              */
              function (key) {
                /** @type {?} */
                var paramVal = _this2.options.additionalParameter[key]; // Allow an additional parameter to include the filename

                if (typeof paramVal === 'string' && paramVal.indexOf('{{file_name}}') >= 0) {
                  paramVal = paramVal.replace('{{file_name}}', item.file.name);
                }

                sendable.append(key, paramVal);
              });
            }

            if (this.options.parametersBeforeFiles) {
              appendFile();
            }
          } else {
            sendable = this.options.formatDataFunction(item);
          }

          xhr.upload.onprogress =
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            /** @type {?} */
            var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);

            _this2._onProgressItem(item, progress);
          };

          xhr.onload =
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var headers = _this2._parseHeaders(xhr.getAllResponseHeaders());
            /** @type {?} */


            var response = _this2._transformResponse(xhr.response, headers);
            /** @type {?} */


            var gist = _this2._isSuccessCode(xhr.status) ? 'Success' : 'Error';
            /** @type {?} */

            var method = '_on' + gist + 'Item';

            /** @type {?} */
            _this2[method](item, response, xhr.status, headers);

            _this2._onCompleteItem(item, response, xhr.status, headers);
          };

          xhr.onerror =
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var headers = _this2._parseHeaders(xhr.getAllResponseHeaders());
            /** @type {?} */


            var response = _this2._transformResponse(xhr.response, headers);

            _this2._onErrorItem(item, response, xhr.status, headers);

            _this2._onCompleteItem(item, response, xhr.status, headers);
          };

          xhr.onabort =
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var headers = _this2._parseHeaders(xhr.getAllResponseHeaders());
            /** @type {?} */


            var response = _this2._transformResponse(xhr.response, headers);

            _this2._onCancelItem(item, response, xhr.status, headers);

            _this2._onCompleteItem(item, response, xhr.status, headers);
          };

          xhr.open(item.method, item.url, true);
          xhr.withCredentials = item.withCredentials;

          if (this.options.headers) {
            var _iterator2 = _createForOfIteratorHelper(this.options.headers),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var header = _step2.value;
                xhr.setRequestHeader(header.name, header.value);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }

          if (item.headers.length) {
            var _iterator3 = _createForOfIteratorHelper(item.headers),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _header = _step3.value;
                xhr.setRequestHeader(_header.name, _header.value);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }

          if (this.authToken) {
            xhr.setRequestHeader(this.authTokenHeader, this.authToken);
          }

          xhr.onreadystatechange =
          /**
          * @return {?}
          */
          function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
              that.response.emit(xhr.responseText);
            }
          };

          if (this.options.formatDataFunctionIsAsync) {
            sendable.then(
            /**
            * @param {?} result
            * @return {?}
            */
            function (result) {
              return xhr.send(JSON.stringify(result));
            });
          } else {
            xhr.send(sendable);
          }

          this._render();
        }
        /**
         * @protected
         * @param {?=} value
         * @return {?}
         */

      }, {
        key: "_getTotalProgress",
        value: function _getTotalProgress() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

          if (this.options.removeAfterUpload) {
            return value;
          }
          /** @type {?} */


          var notUploaded = this.getNotUploadedItems().length;
          /** @type {?} */

          var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
          /** @type {?} */

          var ratio = 100 / this.queue.length;
          /** @type {?} */

          var current = value * ratio / 100;
          return Math.round(uploaded * ratio + current);
        }
        /**
         * @protected
         * @param {?} filters
         * @return {?}
         */

      }, {
        key: "_getFilters",
        value: function _getFilters(filters) {
          if (!filters) {
            return this.options.filters;
          }

          if (Array.isArray(filters)) {
            return filters;
          }

          if (typeof filters === 'string') {
            /** @type {?} */
            var names = filters.match(/[^\s,]+/g);
            return this.options.filters.filter(
            /**
            * @param {?} filter
            * @return {?}
            */
            function (filter) {
              return names.indexOf(filter.name) !== -1;
            });
          }

          return this.options.filters;
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "_render",
        value: function _render() {
          return void 0;
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "_queueLimitFilter",
        value: function _queueLimitFilter() {
          return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
        }
        /**
         * @protected
         * @param {?} file
         * @param {?} filters
         * @param {?} options
         * @return {?}
         */

      }, {
        key: "_isValidFile",
        value: function _isValidFile(file, filters, options) {
          var _this3 = this;

          this._failFilterIndex = -1;
          return !filters.length ? true : filters.every(
          /**
          * @param {?} filter
          * @return {?}
          */
          function (filter) {
            _this3._failFilterIndex++;
            return filter.fn.call(_this3, file, options);
          });
        }
        /**
         * @protected
         * @param {?} status
         * @return {?}
         */

      }, {
        key: "_isSuccessCode",
        value: function _isSuccessCode(status) {
          return status >= 200 && status < 300 || status === 304;
        }
        /**
         * @protected
         * @param {?} response
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "_transformResponse",
        value: function _transformResponse(response, headers) {
          return response;
        }
        /**
         * @protected
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "_parseHeaders",
        value: function _parseHeaders(headers) {
          /** @type {?} */
          var parsed = {};
          /** @type {?} */

          var key;
          /** @type {?} */

          var val;
          /** @type {?} */

          var i;

          if (!headers) {
            return parsed;
          }

          headers.split('\n').map(
          /**
          * @param {?} line
          * @return {?}
          */
          function (line) {
            i = line.indexOf(':');
            key = line.slice(0, i).trim().toLowerCase();
            val = line.slice(i + 1).trim();

            if (key) {
              parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
          });
          return parsed;
        }
        /**
         * @protected
         * @param {?} item
         * @param {?} filter
         * @param {?} options
         * @return {?}
         */

      }, {
        key: "_onWhenAddingFileFailed",
        value: function _onWhenAddingFileFailed(item, filter, options) {
          this.onWhenAddingFileFailed(item, filter, options);
        }
        /**
         * @protected
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "_onAfterAddingFile",
        value: function _onAfterAddingFile(item) {
          this.onAfterAddingFile(item);
        }
        /**
         * @protected
         * @param {?} items
         * @return {?}
         */

      }, {
        key: "_onAfterAddingAll",
        value: function _onAfterAddingAll(items) {
          this.onAfterAddingAll(items);
        }
        /**
         * @protected
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "_onBeforeUploadItem",
        value: function _onBeforeUploadItem(item) {
          item._onBeforeUpload();

          this.onBeforeUploadItem(item);
        }
        /**
         * @protected
         * @param {?} item
         * @param {?} form
         * @return {?}
         */

      }, {
        key: "_onBuildItemForm",
        value: function _onBuildItemForm(item, form) {
          item._onBuildForm(form);

          this.onBuildItemForm(item, form);
        }
        /**
         * @protected
         * @param {?} item
         * @param {?} progress
         * @return {?}
         */

      }, {
        key: "_onProgressItem",
        value: function _onProgressItem(item, progress) {
          /** @type {?} */
          var total = this._getTotalProgress(progress);

          this.progress = total;

          item._onProgress(progress);

          this.onProgressItem(item, progress);
          this.onProgressAll(total);

          this._render();
        }
        /**
         * @protected
         * @param {?} item
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "_onSuccessItem",
        value: function _onSuccessItem(item, response, status, headers) {
          item._onSuccess(response, status, headers);

          this.onSuccessItem(item, response, status, headers);
        }
        /**
         * @protected
         * @param {?} item
         * @param {?} response
         * @param {?} status
         * @param {?} headers
         * @return {?}
         */

      }, {
        key: "_onCancelItem",
        value: function _onCancelItem(item, response, status, headers) {
          item._onCancel(response, status, headers);

          this.onCancelItem(item, response, status, headers);
        }
      }]);

      return FileUploader;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FileSelectDirective = /*#__PURE__*/function () {
      /**
       * @param {?} element
       */
      function FileSelectDirective(element) {
        _classCallCheck(this, FileSelectDirective);

        this.onFileSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.element = element;
      }
      /**
       * @return {?}
       */


      _createClass(FileSelectDirective, [{
        key: "getOptions",
        value: function getOptions() {
          return this.uploader.options;
        }
        /**
         * @return {?}
         */

      }, {
        key: "getFilters",
        value: function getFilters() {
          return {};
        }
        /**
         * @return {?}
         */

      }, {
        key: "isEmptyAfterSelection",
        value: function isEmptyAfterSelection() {
          return !!this.element.nativeElement.attributes.multiple;
        }
        /**
         * @return {?}
         */

      }, {
        key: "onChange",
        value: function onChange() {
          /** @type {?} */
          var files = this.element.nativeElement.files;
          /** @type {?} */

          var options = this.getOptions();
          /** @type {?} */

          var filters = this.getFilters();
          this.uploader.addToQueue(files, options, filters);
          this.onFileSelected.emit(files);

          if (this.isEmptyAfterSelection()) {
            this.element.nativeElement.value = '';
          }
        }
      }]);

      return FileSelectDirective;
    }();

    FileSelectDirective.ɵfac = function FileSelectDirective_Factory(t) {
      return new (t || FileSelectDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    FileSelectDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: FileSelectDirective,
      selectors: [["", "ng2FileSelect", ""]],
      hostBindings: function FileSelectDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FileSelectDirective_change_HostBindingHandler() {
            return ctx.onChange();
          });
        }
      },
      inputs: {
        uploader: "uploader"
      },
      outputs: {
        onFileSelected: "onFileSelected"
      }
    });
    /** @nocollapse */

    FileSelectDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    FileSelectDirective.propDecorators = {
      uploader: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      onFileSelected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['change']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileSelectDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[ng2FileSelect]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        onFileSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['change']
        }],
        uploader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FileDropDirective = /*#__PURE__*/function () {
      /**
       * @param {?} element
       */
      function FileDropDirective(element) {
        _classCallCheck(this, FileDropDirective);

        this.fileOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFileDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.element = element;
      }
      /**
       * @return {?}
       */


      _createClass(FileDropDirective, [{
        key: "getOptions",
        value: function getOptions() {
          return this.uploader.options;
        }
        /**
         * @return {?}
         */

      }, {
        key: "getFilters",
        value: function getFilters() {
          return {};
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onDrop",
        value: function onDrop(event) {
          /** @type {?} */
          var transfer = this._getTransfer(event);

          if (!transfer) {
            return;
          }
          /** @type {?} */


          var options = this.getOptions();
          /** @type {?} */

          var filters = this.getFilters();

          this._preventAndStop(event);

          this.uploader.addToQueue(transfer.files, options, filters);
          this.fileOver.emit(false);
          this.onFileDrop.emit(transfer.files);
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onDragOver",
        value: function onDragOver(event) {
          /** @type {?} */
          var transfer = this._getTransfer(event);

          if (!this._haveFiles(transfer.types)) {
            return;
          }

          transfer.dropEffect = 'copy';

          this._preventAndStop(event);

          this.fileOver.emit(true);
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onDragLeave",
        value: function onDragLeave(event) {
          if (
          /** @type {?} */
          this.element) {
            if (event.currentTarget ===
            /** @type {?} */
            this.element[0]) {
              return;
            }
          }

          this._preventAndStop(event);

          this.fileOver.emit(false);
        }
        /**
         * @protected
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_getTransfer",
        value: function _getTransfer(event) {
          return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
        }
        /**
         * @protected
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_preventAndStop",
        value: function _preventAndStop(event) {
          event.preventDefault();
          event.stopPropagation();
        }
        /**
         * @protected
         * @param {?} types
         * @return {?}
         */

      }, {
        key: "_haveFiles",
        value: function _haveFiles(types) {
          if (!types) {
            return false;
          }

          if (types.indexOf) {
            return types.indexOf('Files') !== -1;
          } else if (types.contains) {
            return types.contains('Files');
          } else {
            return false;
          }
        }
      }]);

      return FileDropDirective;
    }();

    FileDropDirective.ɵfac = function FileDropDirective_Factory(t) {
      return new (t || FileDropDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    FileDropDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: FileDropDirective,
      selectors: [["", "ng2FileDrop", ""]],
      hostBindings: function FileDropDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function FileDropDirective_drop_HostBindingHandler($event) {
            return ctx.onDrop($event);
          })("dragover", function FileDropDirective_dragover_HostBindingHandler($event) {
            return ctx.onDragOver($event);
          })("dragleave", function FileDropDirective_dragleave_HostBindingHandler($event) {
            return ctx.onDragLeave($event);
          });
        }
      },
      inputs: {
        uploader: "uploader"
      },
      outputs: {
        fileOver: "fileOver",
        onFileDrop: "onFileDrop"
      }
    });
    /** @nocollapse */

    FileDropDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    FileDropDirective.propDecorators = {
      uploader: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      fileOver: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onFileDrop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onDrop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['drop', ['$event']]
      }],
      onDragOver: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['dragover', ['$event']]
      }],
      onDragLeave: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['dragleave', ['$event']]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileDropDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[ng2FileDrop]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        fileOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onFileDrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onDrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['drop', ['$event']]
        }],
        onDragOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['dragover', ['$event']]
        }],
        onDragLeave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['dragleave', ['$event']]
        }],
        uploader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FileUploadModule = /*#__PURE__*/_createClass(function FileUploadModule() {
      _classCallCheck(this, FileUploadModule);
    });

    FileUploadModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FileUploadModule
    });
    FileUploadModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FileUploadModule_Factory(t) {
        return new (t || FileUploadModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FileUploadModule, {
        declarations: function declarations() {
          return [FileDropDirective, FileSelectDirective];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
        },
        exports: function exports() {
          return [FileDropDirective, FileSelectDirective];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileUploadModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          declarations: [FileDropDirective, FileSelectDirective],
          exports: [FileDropDirective, FileSelectDirective]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ng2-file-upload.js.map

    /***/

  },

  /***/
  "./src/app/views/others/app-cuscinetti/app-cuscinetti.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/views/others/app-cuscinetti/app-cuscinetti.component.ts ***!
    \*************************************************************************/

  /*! exports provided: AppCuscinettiComponent */

  /***/
  function srcAppViewsOthersAppCuscinettiAppCuscinettiComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppCuscinettiComponent", function () {
      return AppCuscinettiComponent;
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

    var AppCuscinettiComponent = /*#__PURE__*/function () {
      function AppCuscinettiComponent(themeService, data) {
        _classCallCheck(this, AppCuscinettiComponent);

        this.themeService = themeService;
        this.data = data; //used for creating and customizing the gauge chart

        this.gaugeTempType = "arch";
        this.gaugeTempValue = 23.8;
        this.gaugeTempMin = 23.5;
        this.gaugeTempMax = 24.5;
        this.gaugeTempLabel = "";
        this.gaugeTempAppendText = "°C";
        this.gaugeTempThickness = 20;
        this.gaugeTempForegroundColor = "deepSkyBlue";
        this.gaugeTempBackgroundColor = "rgb(55, 55, 153)";
        this.gaugeTempMarkers = {
          "50": {
            color: "#555",
            type: "triangle",
            size: 8,
            label: "Goal",
            font: "12px arial"
          }
        };
        this.gaugeTempSize = 200;
        this.gaugeTemp2Value = 23.6;
        this.gaugeTemp3Value = 24.2;
        this.gaugeTemp4Value = 23.9;
        this.gaugeTemp5Value = 24;
        this.gaugeTemp6Value = 24.2; //---------------------------------------------------------------------

        this.gaugeStimaType = "full";
        this.gaugeStimaValue = 5;
        this.gaugeStimaMin = 0;
        this.gaugeStimaMax = 365;
        this.gaugeStimaLabel = "gg";
        this.gaugeStimaAppendText = "";
        this.gaugeStimaThickness = 15;
        this.gaugeStimaForegroundColor = "";
        this.gaugeStimaBackgroundColor = "rgb(55, 55, 153)";
        this.gaugeStimaMarkers = {
          "50": {
            color: "#555",
            type: "triangle",
            size: 8,
            label: "Goal",
            font: "12px arial"
          }
        };
        this.gaugeStimaSize = 200;
        this.gaugeStima2Value = 236;
        this.gaugeStima2ForegroundColor = "";
        this.gaugeStima3Value = 289;
        this.gaugeStima3ForegroundColor = "";
        this.gaugeStima4Value = 56;
        this.gaugeStima4ForegroundColor = "";
        this.gaugeStima5Value = 125;
        this.gaugeStima5ForegroundColor = "";
        this.gaugeStima6Value = 170;
        this.gaugeStima6ForegroundColor = ""; //---------------------------------------------------------------------

        this.statCardList = this.data.statCardList;
        this.displayedColumns = ["name", "price", "available", "action"];
      }

      _createClass(AppCuscinettiComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.data.ngOnInit(); //----------Demo for dynamic colors of Stima----------
          // let timer = setInterval(() => {
          //   for(let i = 0; i <= 0; i++)
          //   {
          //     if(this.gaugeStimaValue == 0)
          //     {
          //       this.gaugeStimaValue = 1;
          //       clearInterval(timer);
          //     }
          //     this.gaugeStimaValue = this.gaugeStimaValue - 1;
          //     if(this.gaugeStimaValue <= 200)
          //     {
          //       this.gaugeStimaForegroundColor = "#ffc001";
          //       document.getElementById("circle").style.backgroundColor = "#ffc001d3";
          //     }
          //     if(this.gaugeStimaValue <= 100)
          //     {
          //       this.gaugeStimaForegroundColor = "#ff0000";
          //       document.getElementById("circle").style.backgroundColor = "#ff0000d3";
          //     }
          //     if(this.gaugeStimaValue <= 90)
          //     {
          //       document.getElementById("circle").style.animation = "danger 0.5s alternate infinite forwards";
          //       document.getElementById("cambio").style.display = "flex";
          //     }
          //   }
          // }, 50);
          //assign dynamic colors to Stima gauges------------------------------

          if (this.gaugeStimaValue <= 365) {
            this.gaugeStimaForegroundColor = "#92d050";
            document.getElementById("circle").style.backgroundColor = "#92d050d3";
          }

          if (this.gaugeStimaValue <= 200) {
            this.gaugeStimaForegroundColor = "#ffc001";
            document.getElementById("circle").style.backgroundColor = "#ffc001d3";
          }

          if (this.gaugeStimaValue <= 100) {
            this.gaugeStimaForegroundColor = "#ff0000";
            document.getElementById("circle").style.backgroundColor = "#ff0000d3";
          }

          if (this.gaugeStimaValue <= 90) {
            document.getElementById("circle").style.animation = "danger 0.5s alternate infinite forwards";
            document.getElementById("cambio").style.display = "flex";
          } //-----2-----


          if (this.gaugeStima2Value <= 365) {
            this.gaugeStima2ForegroundColor = "#92d050";
            document.getElementById("circle2").style.backgroundColor = "#92d050d3";
          }

          if (this.gaugeStima2Value <= 200) {
            this.gaugeStima2ForegroundColor = "#ffc001";
            document.getElementById("circle2").style.backgroundColor = "#ffc001d3";
          }

          if (this.gaugeStima2Value <= 100) {
            this.gaugeStima2ForegroundColor = "#ff0000";
            document.getElementById("circle2").style.backgroundColor = "#ff0000d3";
          } //-----3-----


          if (this.gaugeStima3Value <= 365) {
            this.gaugeStima3ForegroundColor = "#92d050";
            document.getElementById("circle3").style.backgroundColor = "#92d050d3";
          }

          if (this.gaugeStima3Value <= 200) {
            this.gaugeStima3ForegroundColor = "#ffc001";
            document.getElementById("circle3").style.backgroundColor = "#ffc001d3";
          }

          if (this.gaugeStima3Value <= 100) {
            this.gaugeStima3ForegroundColor = "#ff0000";
            document.getElementById("circle3").style.backgroundColor = "#ff0000d3";
          } //-----4-----


          if (this.gaugeStima4Value <= 365) {
            this.gaugeStima4ForegroundColor = "#92d050";
            document.getElementById("circle4").style.backgroundColor = "#92d050d3";
          }

          if (this.gaugeStima4Value <= 200) {
            this.gaugeStima4ForegroundColor = "#ffc001";
            document.getElementById("circle4").style.backgroundColor = "#ffc001d3";
          }

          if (this.gaugeStima4Value <= 100) {
            this.gaugeStima4ForegroundColor = "#ff0000";
            document.getElementById("circle4").style.backgroundColor = "#ff0000d3";
          } //-----5-----


          if (this.gaugeStima5Value <= 365) {
            this.gaugeStima5ForegroundColor = "#92d050";
            document.getElementById("circle5").style.backgroundColor = "#92d050d3";
          }

          if (this.gaugeStima5Value <= 200) {
            this.gaugeStima5ForegroundColor = "#ffc001";
            document.getElementById("circle5").style.backgroundColor = "#ffc001d3";
          }

          if (this.gaugeStima5Value <= 100) {
            this.gaugeStima5ForegroundColor = "#ff0000";
            document.getElementById("circle5").style.backgroundColor = "#ff0000d3";
          } //-----6-----


          if (this.gaugeStima6Value <= 365) {
            this.gaugeStima6ForegroundColor = "#92d050";
            document.getElementById("circle6").style.backgroundColor = "#92d050d3";
          }

          if (this.gaugeStima6Value <= 200) {
            this.gaugeStima6ForegroundColor = "#ffc001";
            document.getElementById("circle6").style.backgroundColor = "#ffc001d3";
          }

          if (this.gaugeStima6Value <= 100) {
            this.gaugeStima6ForegroundColor = "#ff0000";
            document.getElementById("circle6").style.backgroundColor = "#ff0000d3";
          } //------------------------------------------------------------

        }
      }]);

      return AppCuscinettiComponent;
    }();

    AppCuscinettiComponent.ɵfac = function AppCuscinettiComponent_Factory(t) {
      return new (t || AppCuscinettiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_views_data_saver_service__WEBPACK_IMPORTED_MODULE_3__["DataSaverService"]));
    };

    AppCuscinettiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppCuscinettiComponent,
      selectors: [["app-blank"]],
      decls: 159,
      vars: 149,
      consts: [[1, "borders"], ["id", "graph-container", 1, "mat-bg-primary", "mx--033", "mt--033", "px-24", "pt-24"], [1, "header"], [1, "text-white", "font-weight-normal"], ["src", "../../../../assets/images/backgrounds/treno-semplice.png", "alt", "schema", "height", "90px", 1, "schema-train"], [1, "legend"], [1, "element"], [1, "green", "square"], [1, "yellow", "square"], [1, "red", "square"], [1, "grid"], [1, "row-1"], [1, "ngx-gauge"], [1, "text-white", "font-weight-bold", 2, "margin-top", "-3.4vh", "margin-left", "-1vw"], [2, "display", "flex", "margin-left", "15%"], [2, "position", "absolute", "left", "85%", "top", "15%"], [1, "text-white"], [3, "type", "value", "min", "max", "label", "append", "thick", "foregroundColor", "backgroundColor", "size"], [2, "display", "flex", "margin-left", "25%"], ["id", "circle", 1, "circle", 2, "display", "flex", "justify-content", "center", "align-items", "center"], ["id", "cambio"], ["id", "circle2", 1, "circle"], ["id", "circle3", 1, "circle"], [1, "row-2"], [1, "ngx-gauge-2"], ["id", "circle4", 1, "circle"], ["id", "circle5", 1, "circle"], ["id", "circle6", 1, "circle"], [1, "mt--72"], ["fxLayout", "row wrap"], ["fxFlex", "100", "fxFlex.sm", "100", "fxFlex.gt-sm", "100"], ["fxLayout", "row wrap", 2, "margin-top", "-2vh", "margin-left", "10vh"], ["fxFlex", "100", "fxFlex.sm", "90", "fxFlex.gt-sm", "90"], ["fxFlex", "", "fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "p-24"], ["fxLayout", "row", "fxLayoutAlign", "center center"], [1, "ml-12"], [1, "m-0", "text-muted", "mb-4"]],
      template: function AppCuscinettiComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cuscinetti");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Usura bassa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Usura media");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Usura alta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Asse 1 Destro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "thermostat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Temperatura asse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "ngx-gauge", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "build");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Stima durata");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Manutenzione necessaria!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "ngx-gauge", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h2", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Asse 2 Destro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "thermostat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Temperatura asse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "ngx-gauge", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "build");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h3", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Stima durata");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "ngx-gauge", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h2", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Asse 3 Destro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "thermostat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h3", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Temperatura asse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "ngx-gauge", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "build");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h3", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Stima durata");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "ngx-gauge", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h2", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Asse 1 Sinistro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "thermostat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h3", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Temperatura asse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "ngx-gauge", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "build");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h3", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Stima durata");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "ngx-gauge", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h2", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Asse 2 Sinistro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "mat-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "thermostat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h3", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Temperatura asse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "ngx-gauge", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "mat-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "build");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h3", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Stima durata");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "ngx-gauge", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h2", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Asse 3 Sinistro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "mat-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "thermostat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h3", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Temperatura asse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "ngx-gauge", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "mat-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "build");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h3", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Stima durata");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "ngx-gauge", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "mat-card", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "mat-card", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "mat-card", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](158, "numberFormat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.gaugeTempType)("value", ctx.gaugeTempValue)("min", ctx.gaugeTempMin)("max", ctx.gaugeTempMax)("label", ctx.gaugeTempLabel)("append", ctx.gaugeTempAppendText)("thick", ctx.gaugeTempThickness)("foregroundColor", ctx.gaugeTempForegroundColor)("backgroundColor", ctx.gaugeTempBackgroundColor)("size", ctx.gaugeTempSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.gaugeStimaType)("value", ctx.gaugeStimaValue)("min", ctx.gaugeStimaMin)("max", ctx.gaugeStimaMax)("label", ctx.gaugeStimaLabel)("append", ctx.gaugeStimaAppendText)("thick", ctx.gaugeStimaThickness)("foregroundColor", ctx.gaugeStimaForegroundColor)("backgroundColor", ctx.gaugeStimaBackgroundColor)("size", ctx.gaugeStimaSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.gaugeTempType)("value", ctx.gaugeTemp2Value)("min", ctx.gaugeTempMin)("max", ctx.gaugeTempMax)("label", ctx.gaugeTempLabel)("append", ctx.gaugeTempAppendText)("thick", ctx.gaugeTempThickness)("foregroundColor", ctx.gaugeTempForegroundColor)("backgroundColor", ctx.gaugeTempBackgroundColor)("size", ctx.gaugeTempSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.gaugeStimaType)("value", ctx.gaugeStima2Value)("min", ctx.gaugeStimaMin)("max", ctx.gaugeStimaMax)("label", ctx.gaugeStimaLabel)("append", ctx.gaugeStimaAppendText)("thick", ctx.gaugeStimaThickness)("foregroundColor", ctx.gaugeStima2ForegroundColor)("backgroundColor", ctx.gaugeStimaBackgroundColor)("size", ctx.gaugeStimaSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.gaugeTempType)("value", ctx.gaugeTemp3Value)("min", ctx.gaugeTempMin)("max", ctx.gaugeTempMax)("label", ctx.gaugeTempLabel)("append", ctx.gaugeTempAppendText)("thick", ctx.gaugeTempThickness)("foregroundColor", ctx.gaugeTempForegroundColor)("backgroundColor", ctx.gaugeTempBackgroundColor)("size", ctx.gaugeTempSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.gaugeStimaType)("value", ctx.gaugeStima3Value)("min", ctx.gaugeStimaMin)("max", ctx.gaugeStimaMax)("label", ctx.gaugeStimaLabel)("append", ctx.gaugeStimaAppendText)("thick", ctx.gaugeStimaThickness)("foregroundColor", ctx.gaugeStima3ForegroundColor)("backgroundColor", ctx.gaugeStimaBackgroundColor)("size", ctx.gaugeStimaSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.gaugeTempType)("value", ctx.gaugeTemp4Value)("min", ctx.gaugeTempMin)("max", ctx.gaugeTempMax)("label", ctx.gaugeTempLabel)("append", ctx.gaugeTempAppendText)("thick", ctx.gaugeTempThickness)("foregroundColor", ctx.gaugeTempForegroundColor)("backgroundColor", ctx.gaugeTempBackgroundColor)("size", ctx.gaugeTempSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.gaugeStimaType)("value", ctx.gaugeStima4Value)("min", ctx.gaugeStimaMin)("max", ctx.gaugeStimaMax)("label", ctx.gaugeStimaLabel)("append", ctx.gaugeStimaAppendText)("thick", ctx.gaugeStimaThickness)("foregroundColor", ctx.gaugeStima4ForegroundColor)("backgroundColor", ctx.gaugeStimaBackgroundColor)("size", ctx.gaugeStimaSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.gaugeTempType)("value", ctx.gaugeTemp5Value)("min", ctx.gaugeTempMin)("max", ctx.gaugeTempMax)("label", ctx.gaugeTempLabel)("append", ctx.gaugeTempAppendText)("thick", ctx.gaugeTempThickness)("foregroundColor", ctx.gaugeTempForegroundColor)("backgroundColor", ctx.gaugeTempBackgroundColor)("size", ctx.gaugeTempSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.gaugeStimaType)("value", ctx.gaugeStima5Value)("min", ctx.gaugeStimaMin)("max", ctx.gaugeStimaMax)("label", ctx.gaugeStimaLabel)("append", ctx.gaugeStimaAppendText)("thick", ctx.gaugeStimaThickness)("foregroundColor", ctx.gaugeStima5ForegroundColor)("backgroundColor", ctx.gaugeStimaBackgroundColor)("size", ctx.gaugeStimaSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.gaugeTempType)("value", ctx.gaugeTemp6Value)("min", ctx.gaugeTempMin)("max", ctx.gaugeTempMax)("label", ctx.gaugeTempLabel)("append", ctx.gaugeTempAppendText)("thick", ctx.gaugeTempThickness)("foregroundColor", ctx.gaugeTempForegroundColor)("backgroundColor", ctx.gaugeTempBackgroundColor)("size", ctx.gaugeTempSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.gaugeStimaType)("value", ctx.gaugeStima6Value)("min", ctx.gaugeStimaMin)("max", ctx.gaugeStimaMax)("label", ctx.gaugeStimaLabel)("append", ctx.gaugeStimaAppendText)("thick", ctx.gaugeStimaThickness)("foregroundColor", ctx.gaugeStima6ForegroundColor)("backgroundColor", ctx.gaugeStimaBackgroundColor)("size", ctx.gaugeStimaSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("text-48 mat-color-", ctx.statCardList[0].color, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statCardList[0].icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statCardList[0].title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("m-0 mat-color-", ctx.statCardList[0].color, " text-25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statCardList[0].amount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("text-48 mat-color-", ctx.statCardList[1].color, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statCardList[1].icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statCardList[1].title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("m-0 mat-color-", ctx.statCardList[1].color, " text-25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statCardList[1].amount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("text-48 mat-color-", ctx.statCardList[2].color, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statCardList[2].icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statCardList[2].title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("m-0 mat-color-", ctx.statCardList[2].color, " text-25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](158, 147, ctx.statCardList[2].amount));
        }
      },
      directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], ngx_gauge__WEBPACK_IMPORTED_MODULE_5__["ɵa"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"]],
      pipes: [_shared_pipes_number_pipe__WEBPACK_IMPORTED_MODULE_8__["NumberFormatPipe"]],
      styles: ["@-webkit-keyframes danger {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes danger {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.legend[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 0.1fr);\n}\n\n.element[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.square[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  margin-right: 5px;\n}\n\n.schema-train[_ngcontent-%COMP%] {\n  margin-left: 25%;\n  margin-top: -5vh;\n}\n\n#graph-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin-top: 0vh !important;\n  background-color: #032e6200 !important;\n  background-image: url('bg_cuscinetti.png') !important;\n  background-size: 100% !important;\n  \n  box-shadow: 0 0 0 10in #032d62;\n}\n\n.circle[_ngcontent-%COMP%] {\n  height: 160px;\n  width: 160px;\n  border-radius: 50%;\n  position: absolute;\n  left: 10%;\n  top: 20%;\n}\n\n#cambio[_ngcontent-%COMP%] {\n  display: none;\n  font-size: x-small;\n  margin-bottom: 30%;\n}\n\n.ngx-gauge[_ngcontent-%COMP%]:nth-child(1) {\n  position: absolute;\n  top: 19vh;\n  right: 73vw;\n}\n\n.ngx-gauge[_ngcontent-%COMP%]:nth-child(2) {\n  position: absolute;\n  top: 19vh;\n  right: 61vw;\n}\n\n.ngx-gauge[_ngcontent-%COMP%]:nth-child(3) {\n  position: absolute;\n  top: 19vh;\n  right: 46.5vw;\n}\n\n.ngx-gauge[_ngcontent-%COMP%]:nth-child(4) {\n  position: absolute;\n  top: 19vh;\n  right: 35.5vw;\n}\n\n.ngx-gauge[_ngcontent-%COMP%]:nth-child(5) {\n  position: absolute;\n  top: 19vh;\n  right: 22vw;\n}\n\n.ngx-gauge[_ngcontent-%COMP%]:nth-child(6) {\n  position: absolute;\n  top: 19vh;\n  right: 10vw;\n}\n\n.ngx-gauge-2[_ngcontent-%COMP%]:nth-child(1) {\n  position: absolute;\n  top: 57vh;\n  right: 73vw;\n}\n\n.ngx-gauge-2[_ngcontent-%COMP%]:nth-child(2) {\n  position: absolute;\n  top: 57vh;\n  right: 61vw;\n}\n\n.ngx-gauge-2[_ngcontent-%COMP%]:nth-child(3) {\n  position: absolute;\n  top: 57vh;\n  right: 46.5vw;\n}\n\n.ngx-gauge-2[_ngcontent-%COMP%]:nth-child(4) {\n  position: absolute;\n  top: 57vh;\n  right: 35.5vw;\n}\n\n.ngx-gauge-2[_ngcontent-%COMP%]:nth-child(5) {\n  position: absolute;\n  top: 57vh;\n  right: 22vw;\n}\n\n.ngx-gauge-2[_ngcontent-%COMP%]:nth-child(6) {\n  position: absolute;\n  top: 57vh;\n  right: 10vw;\n}\n\n.borders[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 80vw;\n  height: 1px;\n  background-color: rgba(255, 255, 255, 0.342);\n  top: 48vh;\n  left: 2.5vw;\n}\n\n.borders[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  background-color: rgba(255, 255, 255, 0.281);\n  width: 1px;\n  height: 74vh;\n  left: 24vw;\n  top: -37vh;\n  box-shadow: 25vw 0 0 0 rgba(255, 255, 255, 0.281);\n}\n\n.grid[_ngcontent-%COMP%] {\n  display: grid !important;\n  grid-template-columns: repeat(1, 107vh) !important;\n  grid-template-rows: repeat(2, 42vh);\n}\n\n.mt--72[_ngcontent-%COMP%] {\n  margin: -10vh !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvb3RoZXJzL2FwcC1jdXNjaW5ldHRpL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcdGVsZW1ldHJ5XFxhbmd1bGFyLXRyYW0tdGVsZW1ldHJ5L3NyY1xcYXBwXFx2aWV3c1xcb3RoZXJzXFxhcHAtY3VzY2luZXR0aVxcYXBwLWN1c2NpbmV0dGkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL290aGVycy9hcHAtY3VzY2luZXR0aS9hcHAtY3VzY2luZXR0aS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0ksVUFBVTtFQ0NoQjtFRENFO0lBQ0ksVUFBVTtFQ0NoQjtBQUNGOztBRFBBO0VBQ0k7SUFDSSxVQUFVO0VDQ2hCO0VEQ0U7SUFDSSxVQUFVO0VDQ2hCO0FBQ0Y7O0FERUE7RUFFSSxhQUFhO0VBQ2IsdUNBQXVDO0FDQTNDOztBREdBO0VBRUksYUFBYTtBQ0RqQjs7QURJQTtFQUVJLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0FDRnJCOztBRE1BO0VBRUksZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQ0pwQjs7QURPQTtFQUVJLFdBQVc7RUFDWCxZQUFZO0VBQ1osMEJBQTBCO0VBRTFCLHNDQUFzQztFQUN0QyxxREFBMkY7RUFDM0YsZ0NBQWdDO0VBRWhDLCtDQUFBO0VBQ0EsOEJBQThCO0FDUGxDOztBRFVBO0VBRUksYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0FDUlo7O0FEV0E7RUFFSSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQ1R0Qjs7QURhQTtFQUVJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztBQ1hmOztBRGNBO0VBRUksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0FDWmY7O0FEZUE7RUFFSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGFBQWE7QUNiakI7O0FEZ0JBO0VBRUksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxhQUFhO0FDZGpCOztBRGlCQTtFQUVJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztBQ2ZmOztBRGtCQTtFQUVJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztBQ2hCZjs7QURvQkE7RUFFSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7QUNsQmY7O0FEcUJBO0VBRUksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0FDbkJmOztBRHNCQTtFQUVJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsYUFBYTtBQ3BCakI7O0FEdUJBO0VBRUksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxhQUFhO0FDckJqQjs7QUR3QkE7RUFFSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7QUN0QmY7O0FEeUJBO0VBRUksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0FDdkJmOztBRDBCQTtFQUVJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLDRDQUE0QztFQUM1QyxTQUFRO0VBQ1IsV0FBVztBQ3hCZjs7QUQyQkE7RUFFSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDRDQUE0QztFQUM1QyxVQUFVO0VBQ1YsWUFBWTtFQUNaLFVBQVU7RUFDVixVQUFVO0VBQ1YsaURBQWlEO0FDekJyRDs7QUQ0QkE7RUFFSSx3QkFBd0I7RUFDeEIsa0RBQWtEO0VBQ2xELG1DQUFtQztBQzFCdkM7O0FENkJBO0VBRUksd0JBQXdCO0FDM0I1QiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL290aGVycy9hcHAtY3VzY2luZXR0aS9hcHAtY3VzY2luZXR0aS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgZGFuZ2VyIHtcclxuICAgIGZyb217XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIHRve1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5sZWdlbmRcclxue1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDAuMWZyKTtcclxufVxyXG5cclxuLmVsZW1lbnRcclxue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnNxdWFyZVxyXG57XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG5cclxuLnNjaGVtYS10cmFpblxyXG57XHJcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gICAgbWFyZ2luLXRvcDogLTV2aDtcclxufVxyXG5cclxuI2dyYXBoLWNvbnRhaW5lclxyXG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDB2aCAhaW1wb3J0YW50O1xyXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjMDMyZDYyICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMyZTYyMDAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9iZ19jdXNjaW5ldHRpLnBuZycpICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIC8vYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xyXG4gICAgLyogdG8gZ2l2ZSB0aGUgZW50aXJlIHBhZ2UgdGhlIGludGVudGVkIGNvbG9yICovXHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxMGluICMwMzJkNjI7XHJcbn1cclxuXHJcbi5jaXJjbGVcclxue1xyXG4gICAgaGVpZ2h0OiAxNjBweDtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDEwJTtcclxuICAgIHRvcDogMjAlO1xyXG59XHJcblxyXG4jY2FtYmlvXHJcbntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMCU7XHJcbn1cclxuXHJcbi8vZmlyc3Qgcm93XHJcbi5uZ3gtZ2F1Z2U6bnRoLWNoaWxkKDEpXHJcbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTl2aDtcclxuICAgIHJpZ2h0OiA3M3Z3O1xyXG59XHJcblxyXG4ubmd4LWdhdWdlOm50aC1jaGlsZCgyKVxyXG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE5dmg7XHJcbiAgICByaWdodDogNjF2dztcclxufVxyXG5cclxuLm5neC1nYXVnZTpudGgtY2hpbGQoMylcclxue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxOXZoO1xyXG4gICAgcmlnaHQ6IDQ2LjV2dztcclxufVxyXG5cclxuLm5neC1nYXVnZTpudGgtY2hpbGQoNClcclxue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxOXZoO1xyXG4gICAgcmlnaHQ6IDM1LjV2dztcclxufVxyXG5cclxuLm5neC1nYXVnZTpudGgtY2hpbGQoNSlcclxue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxOXZoO1xyXG4gICAgcmlnaHQ6IDIydnc7XHJcbn1cclxuXHJcbi5uZ3gtZ2F1Z2U6bnRoLWNoaWxkKDYpXHJcbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTl2aDtcclxuICAgIHJpZ2h0OiAxMHZ3O1xyXG59XHJcblxyXG4vL3NlY29uZCByb3dcclxuLm5neC1nYXVnZS0yOm50aC1jaGlsZCgxKVxyXG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDU3dmg7XHJcbiAgICByaWdodDogNzN2dztcclxufVxyXG5cclxuLm5neC1nYXVnZS0yOm50aC1jaGlsZCgyKVxyXG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDU3dmg7XHJcbiAgICByaWdodDogNjF2dztcclxufVxyXG5cclxuLm5neC1nYXVnZS0yOm50aC1jaGlsZCgzKVxyXG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDU3dmg7XHJcbiAgICByaWdodDogNDYuNXZ3O1xyXG59XHJcblxyXG4ubmd4LWdhdWdlLTI6bnRoLWNoaWxkKDQpXHJcbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTd2aDtcclxuICAgIHJpZ2h0OiAzNS41dnc7XHJcbn1cclxuXHJcbi5uZ3gtZ2F1Z2UtMjpudGgtY2hpbGQoNSlcclxue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1N3ZoO1xyXG4gICAgcmlnaHQ6IDIydnc7XHJcbn1cclxuXHJcbi5uZ3gtZ2F1Z2UtMjpudGgtY2hpbGQoNilcclxue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1N3ZoO1xyXG4gICAgcmlnaHQ6IDEwdnc7XHJcbn1cclxuXHJcbi5ib3JkZXJzXHJcbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzQyKTtcclxuICAgIHRvcDo0OHZoO1xyXG4gICAgbGVmdDogMi41dnc7XHJcbn1cclxuXHJcbi5ib3JkZXJzOjpiZWZvcmVcclxue1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjgxKTtcclxuICAgIHdpZHRoOiAxcHg7XHJcbiAgICBoZWlnaHQ6IDc0dmg7XHJcbiAgICBsZWZ0OiAyNHZ3O1xyXG4gICAgdG9wOiAtMzd2aDtcclxuICAgIGJveC1zaGFkb3c6IDI1dncgMCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI4MSk7XHJcbn1cclxuXHJcbi5ncmlkXHJcbntcclxuICAgIGRpc3BsYXk6IGdyaWQgIWltcG9ydGFudDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDEwN3ZoKSAhaW1wb3J0YW50O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNDJ2aCk7XHJcbn1cclxuXHJcbi5tdC0tNzJcclxue1xyXG4gICAgbWFyZ2luOiAtMTB2aCAhaW1wb3J0YW50O1xyXG59IiwiQGtleWZyYW1lcyBkYW5nZXIge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5sZWdlbmQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAwLjFmcik7XG59XG5cbi5lbGVtZW50IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnNxdWFyZSB7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uc2NoZW1hLXRyYWluIHtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgbWFyZ2luLXRvcDogLTV2aDtcbn1cblxuI2dyYXBoLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDB2aCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMyZTYyMDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9iZ19jdXNjaW5ldHRpLnBuZ1wiKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgIWltcG9ydGFudDtcbiAgLyogdG8gZ2l2ZSB0aGUgZW50aXJlIHBhZ2UgdGhlIGludGVudGVkIGNvbG9yICovXG4gIGJveC1zaGFkb3c6IDAgMCAwIDEwaW4gIzAzMmQ2Mjtcbn1cblxuLmNpcmNsZSB7XG4gIGhlaWdodDogMTYwcHg7XG4gIHdpZHRoOiAxNjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwJTtcbiAgdG9wOiAyMCU7XG59XG5cbiNjYW1iaW8ge1xuICBkaXNwbGF5OiBub25lO1xuICBmb250LXNpemU6IHgtc21hbGw7XG4gIG1hcmdpbi1ib3R0b206IDMwJTtcbn1cblxuLm5neC1nYXVnZTpudGgtY2hpbGQoMSkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTl2aDtcbiAgcmlnaHQ6IDczdnc7XG59XG5cbi5uZ3gtZ2F1Z2U6bnRoLWNoaWxkKDIpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE5dmg7XG4gIHJpZ2h0OiA2MXZ3O1xufVxuXG4ubmd4LWdhdWdlOm50aC1jaGlsZCgzKSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOXZoO1xuICByaWdodDogNDYuNXZ3O1xufVxuXG4ubmd4LWdhdWdlOm50aC1jaGlsZCg0KSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOXZoO1xuICByaWdodDogMzUuNXZ3O1xufVxuXG4ubmd4LWdhdWdlOm50aC1jaGlsZCg1KSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOXZoO1xuICByaWdodDogMjJ2dztcbn1cblxuLm5neC1nYXVnZTpudGgtY2hpbGQoNikge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTl2aDtcbiAgcmlnaHQ6IDEwdnc7XG59XG5cbi5uZ3gtZ2F1Z2UtMjpudGgtY2hpbGQoMSkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTd2aDtcbiAgcmlnaHQ6IDczdnc7XG59XG5cbi5uZ3gtZ2F1Z2UtMjpudGgtY2hpbGQoMikge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTd2aDtcbiAgcmlnaHQ6IDYxdnc7XG59XG5cbi5uZ3gtZ2F1Z2UtMjpudGgtY2hpbGQoMykge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTd2aDtcbiAgcmlnaHQ6IDQ2LjV2dztcbn1cblxuLm5neC1nYXVnZS0yOm50aC1jaGlsZCg0KSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1N3ZoO1xuICByaWdodDogMzUuNXZ3O1xufVxuXG4ubmd4LWdhdWdlLTI6bnRoLWNoaWxkKDUpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDU3dmg7XG4gIHJpZ2h0OiAyMnZ3O1xufVxuXG4ubmd4LWdhdWdlLTI6bnRoLWNoaWxkKDYpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDU3dmg7XG4gIHJpZ2h0OiAxMHZ3O1xufVxuXG4uYm9yZGVycyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDgwdnc7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzQyKTtcbiAgdG9wOiA0OHZoO1xuICBsZWZ0OiAyLjV2dztcbn1cblxuLmJvcmRlcnM6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yODEpO1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDc0dmg7XG4gIGxlZnQ6IDI0dnc7XG4gIHRvcDogLTM3dmg7XG4gIGJveC1zaGFkb3c6IDI1dncgMCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI4MSk7XG59XG5cbi5ncmlkIHtcbiAgZGlzcGxheTogZ3JpZCAhaW1wb3J0YW50O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxMDd2aCkgIWltcG9ydGFudDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNDJ2aCk7XG59XG5cbi5tdC0tNzIge1xuICBtYXJnaW46IC0xMHZoICFpbXBvcnRhbnQ7XG59XG4iXX0= */"],
      data: {
        animation: app_shared_animations_matx_animations__WEBPACK_IMPORTED_MODULE_1__["matxAnimations"]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppCuscinettiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-blank",
          templateUrl: "./app-cuscinetti.component.html",
          styleUrls: ["./app-cuscinetti.component.scss"],
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
  "./src/app/views/others/app-hvac/app-hvac.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/views/others/app-hvac/app-hvac.component.ts ***!
    \*************************************************************/

  /*! exports provided: AppHvacComponent */

  /***/
  function srcAppViewsOthersAppHvacAppHvacComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppHvacComponent", function () {
      return AppHvacComponent;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var ngx_gauge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-gauge */
    "./node_modules/ngx-gauge/__ivy_ngcc__/fesm2015/ngx-gauge.js");
    /* harmony import */


    var ngx_echarts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-echarts */
    "./node_modules/ngx-echarts/__ivy_ngcc__/fesm2015/ngx-echarts.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _shared_pipes_number_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
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

    var AppHvacComponent = /*#__PURE__*/function () {
      function AppHvacComponent(themeService, data, datepipe) {
        var _this4 = this;

        _classCallCheck(this, AppHvacComponent);

        this.themeService = themeService;
        this.data = data;
        this.datepipe = datepipe; //used for creating and customizing the gauge chart

        this.gaugeTempType = "arch";
        this.gaugeTempValue = 23.5;
        this.gaugeTempMin = 15;
        this.gaugeTempMax = 30;
        this.gaugeTempLabel = "";
        this.gaugeTempAppendText = "°C";
        this.gaugeTempThickness = 20;
        this.gaugeTempForegroundColor = "deepSkyBlue";
        this.gaugeTempBackgroundColor = "rgb(55, 55, 153)";
        this.gaugeTempSize = 200;
        this.gaugePpmType = "arch";
        this.gaugePpmValue = 500;
        this.gaugePpmMin = 300;
        this.gaugePpmMax = 800;
        this.gaugePpmLabel = "";
        this.gaugePpmAppendText = "ppm";
        this.gaugePpmThickness = 20;
        this.gaugePpmForegroundColor = "deepSkyBlue";
        this.gaugePpmBackgroundColor = "rgb(55, 55, 153)";
        this.gaugePpmSize = 200;
        this.gaugeUmiditaType = "arch";
        this.gaugeUmiditaValue = 44;
        this.gaugeUmiditaMin = 0;
        this.gaugeUmiditaMax = 80;
        this.gaugeUmiditaLabel = "";
        this.gaugeUmiditaAppendText = "%";
        this.gaugeUmiditaThickness = 20;
        this.gaugeUmiditaForegroundColor = "#ff0000";
        this.gaugeUmiditaBackgroundColor = "rgb(55, 55, 153)";
        this.gaugeUmiditaSize = 200;
        this.gaugePmvType = "arch";
        this.gaugePmvValue = 1.0;
        this.gaugePmvMin = 0.5;
        this.gaugePmvMax = 1.5;
        this.gaugePmvLabel = "";
        this.gaugePmvAppendText = "pmv";
        this.gaugePmvThickness = 20;
        this.gaugePmvForegroundColor = "deepSkyBlue";
        this.gaugePmvBackgroundColor = "rgb(55, 55, 153)";
        this.gaugePmvSize = 200; //gauge animation duration in ms

        this.gaugeDuration = 500; //--------------------------------------------------------------------

        this.statCardList = this.data.statCardList;
        this.displayedColumns = ["name", "price", "available", "action"];
        this.currentDateTime = this.datepipe.transform(new Date(), 'h:mm');
        this.timeUpdate = setInterval(function () {
          _this4.currentDateTime = _this4.datepipe.transform(new Date(), 'h:mm');
        }, 1000); //values by which the temperature varies
        //if it is needed to have fluctuations synchronized in time, with no stops, remove 0 from array and lower the 'max' argument by 1 where getRandomInt() is used

        this.temperatureDeltas = [-0.2, -0.1, 0, 0.1, 0.2];
      } //waiting function


      _createClass(AppHvacComponent, [{
        key: "sleep",
        value: function sleep(ms) {
          return new Promise(function (resolve) {
            return setTimeout(resolve, ms);
          });
        } //random int value for indexing through temperatureDeltas

      }, {
        key: "getRandomInt",
        value: function getRandomInt(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive, so (0,5) = [0, 1, 2, 3, 4]
        }
      }, {
        key: "changeTemperature",
        value: function changeTemperature() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!true) {
                      _context.next = 6;
                      break;
                    }

                    _context.next = 3;
                    return this.sleep(5000);

                  case 3:
                    if (this.gaugeTempValue >= 24.4) //24.4 because a +0.2 would send this beyond the maximum
                      {
                        //keep only negative values & +0.1 so it doesn't go over maximum
                        this.gaugeTempValue = this.gaugeTempValue + this.temperatureDeltas[this.getRandomInt(0, 4)];
                      } else if (this.gaugeTempValue <= 23.6) {
                      //keep only positive values to avoid the temperature going lower than the minimum value
                      this.gaugeTempValue = this.gaugeTempValue + this.temperatureDeltas[this.getRandomInt(2, 5)];
                    } else {
                      //make all values available
                      this.gaugeTempValue = this.gaugeTempValue + this.temperatureDeltas[this.getRandomInt(0, 5)];
                    }

                    _context.next = 0;
                    break;

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "changeHumidity",
        value: function changeHumidity() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!true) {
                      _context2.next = 6;
                      break;
                    }

                    _context2.next = 3;
                    return this.sleep(5000);

                  case 3:
                    if (this.gaugeUmiditaValue == 47) {
                      this.gaugeUmiditaValue = this.gaugeUmiditaValue + this.temperatureDeltas[this.getRandomInt(1, 3)] * 10;
                    } else if (this.gaugeUmiditaValue == 43) {
                      this.gaugeUmiditaValue = this.gaugeUmiditaValue + this.temperatureDeltas[this.getRandomInt(2, 4)] * 10;
                    } else {
                      this.gaugeUmiditaValue = this.gaugeUmiditaValue + this.temperatureDeltas[this.getRandomInt(1, 4)] * 10;
                    }

                    _context2.next = 0;
                    break;

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "changeDioxide",
        value: function changeDioxide() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var i;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!true) {
                      _context3.next = 16;
                      break;
                    }

                    //set for(){} iteration count according to the intervals needed and the time it takes the tram to complete 1 ride according to the formulas:
                    //durationOfFullRide is the time it takes the train to complete 1 giro (from leaving station to returning to station)
                    //durationOfFullRide = iterationCount * increasePpmInterval + waitBeforeDoorsOpen
                    //iterationCount = durationOfFullRide / increasePpmInterval
                    if (this.gaugePpmValue <= this.gaugePpmMin) {
                      this.gaugePpmValue = 300;
                    }

                    i = 0;

                  case 3:
                    if (!(i < 3)) {
                      _context3.next = 11;
                      break;
                    }

                    _context3.next = 6;
                    return this.sleep(5000);

                  case 6:
                    //increasePpmInterval
                    this.gaugePpmValue = this.gaugePpmValue + this.getRandomInt(1, 10);

                    if (this.gaugePpmValue >= 700) {
                      this.gaugePpmLabel = "Livello CO2 alto!";
                      this.gaugePpmForegroundColor = "red";

                      if (this.gaugePpmValue >= this.gaugePpmMax) {
                        this.gaugePpmValue = 800;
                        this.gaugePpmLabel = "Livello CO2 alto!";
                        this.gaugePpmForegroundColor = "red";
                      }
                    }

                  case 8:
                    i++;
                    _context3.next = 3;
                    break;

                  case 11:
                    _context3.next = 13;
                    return this.sleep(3000);

                  case 13:
                    //waitBeforeDoorsOpen
                    this.gaugePpmValue = this.gaugePpmValue - 10 * this.getRandomInt(2, 4); //when doors open, drop PPM by 20 or 30ppm

                    _context3.next = 0;
                    break;

                  case 16:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "changePmv",
        value: function changePmv() {
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
                    return this.sleep(1000);

                  case 3:
                    if (this.gaugePmvValue >= 1.4) {
                      this.gaugePmvValue = this.gaugePmvValue + this.temperatureDeltas[this.getRandomInt(0, 4)];
                    } else if (this.gaugePmvValue <= 0.6) {
                      this.gaugePmvValue = this.gaugePmvValue + this.temperatureDeltas[this.getRandomInt(2, 5)];
                    } else {
                      this.gaugePmvValue = this.gaugePmvValue + this.temperatureDeltas[this.getRandomInt(0, 5)];
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
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.themeService.onThemeChange.subscribe(function (activeTheme) {
            _this5.initDioxideChartBar(activeTheme);

            _this5.initPmvChartBar(activeTheme);
          });
          this.initDioxideChartBar(this.themeService.activatedTheme);
          this.initPmvChartBar(this.themeService.activatedTheme); //put all the 'changeGauge()' functions inside this timeout if the tram begins in the station, waiting 12seconds
          //setTimeout(() => {
          //}, 12000);

          this.changeTemperature();
          this.changeHumidity();
          this.changeDioxide();
          this.changePmv();
          this.data.ngOnInit();
        }
      }, {
        key: "initDioxideChartBar",
        value: function initDioxideChartBar(theme) {
          this.dioxideChartBar = {
            title: {
              show: true,
              text: "Valore CO2",
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
            series: [{
              data: [500, 550, 560, 570, 590, 500, 520, 515, 540],
              type: "line",
              areaStyle: {},
              smooth: false,
              lineStyle: {
                width: 2,
                color: "#fff"
              }
            }],
            xAxis: {
              show: true,
              type: "category",
              showGrid: false,
              boundaryGap: false,
              data: [this.currentDateTime.replace(this.currentDateTime.charAt(this.currentDateTime.length - 1), (parseInt(this.currentDateTime.charAt(this.currentDateTime.length - 1)) - 4).toString()) + ':30', this.currentDateTime.replace(this.currentDateTime.charAt(this.currentDateTime.length - 1), (parseInt(this.currentDateTime.charAt(this.currentDateTime.length - 1)) - 3).toString()) + ':00', this.currentDateTime.replace(this.currentDateTime.charAt(this.currentDateTime.length - 1), (parseInt(this.currentDateTime.charAt(this.currentDateTime.length - 1)) - 3).toString()) + ':30', this.currentDateTime.replace(this.currentDateTime.charAt(this.currentDateTime.length - 1), (parseInt(this.currentDateTime.charAt(this.currentDateTime.length - 1)) - 2).toString()) + ':00', this.currentDateTime.replace(this.currentDateTime.charAt(this.currentDateTime.length - 1), (parseInt(this.currentDateTime.charAt(this.currentDateTime.length - 1)) - 2).toString()) + ':30', this.currentDateTime.replace(this.currentDateTime.charAt(this.currentDateTime.length - 1), (parseInt(this.currentDateTime.charAt(this.currentDateTime.length - 1)) - 1).toString()) + ':00', this.currentDateTime.replace(this.currentDateTime.charAt(this.currentDateTime.length - 1), (parseInt(this.currentDateTime.charAt(this.currentDateTime.length - 1)) - 1).toString()) + ':30', this.currentDateTime + ':00', this.currentDateTime + ':30'],
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
            color: [{
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: "rgba(255,255,255,0.3)" // color at 0% position

              }, {
                offset: 1,
                color: "rgba(255,255,255,0)" // color at 100% position

              }],
              global: false // false by default

            }],
            dataZoom: [{
              id: 'dataZoomX',
              type: 'inside',
              xAxisIndex: [0],
              filterMode: 'filter'
            }, {
              id: 'dataZoomY',
              type: 'inside',
              yAxisIndex: [0],
              filterMode: 'empty'
            }]
          };
        }
      }, {
        key: "initPmvChartBar",
        value: function initPmvChartBar(theme) {
          this.pmvChartBar = {
            title: {
              show: true,
              text: "Indice PMV",
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
            series: [{
              data: [1, 1.1, 1.4, 1.3, 1.5, 1.3, 1.4, 1.5, 1, 1.2, 1.1, 1],
              type: "line",
              areaStyle: {},
              smooth: false,
              lineStyle: {
                width: 2,
                color: "#fff"
              }
            }],
            xAxis: {
              show: true,
              type: "category",
              showGrid: false,
              boundaryGap: false,
              data: [this.currentDateTime + ':20', this.currentDateTime + ':21', this.currentDateTime + ':22', this.currentDateTime + ':23', this.currentDateTime + ':24', this.currentDateTime + ':25', this.currentDateTime + ':26', this.currentDateTime + ':27', this.currentDateTime + ':28', this.currentDateTime + ':29', this.currentDateTime + ':30'],
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
            color: [{
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: "rgba(255,255,255,0.3)" // color at 0% position

              }, {
                offset: 1,
                color: "rgba(255,255,255,0)" // color at 100% position

              }],
              global: false // false by default

            }],
            dataZoom: [{
              id: 'dataZoomX',
              type: 'inside',
              xAxisIndex: [0],
              filterMode: 'filter'
            }, {
              id: 'dataZoomY',
              type: 'inside',
              yAxisIndex: [0],
              filterMode: 'empty'
            }]
          };
        }
      }]);

      return AppHvacComponent;
    }();

    AppHvacComponent.ɵfac = function AppHvacComponent_Factory(t) {
      return new (t || AppHvacComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_views_data_saver_service__WEBPACK_IMPORTED_MODULE_3__["DataSaverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]));
    };

    AppHvacComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppHvacComponent,
      selectors: [["app-blank"]],
      decls: 75,
      vars: 75,
      consts: [[1, "borders"], ["id", "graph-container", 1, "mat-bg-primary", "mx--033", "mt--033", "px-24", "pt-24"], [1, "header"], [1, "text-white", "font-weight-normal"], [1, "grid"], [1, "row-1"], [1, "ngx-gauge-temp"], [2, "display", "flex", "margin-left", "10%"], [2, "position", "absolute", "left", "85%", "top", "15%"], [1, "text-white", "font-weight-bold"], [3, "type", "value", "min", "max", "label", "append", "thick", "foregroundColor", "backgroundColor", "size", "duration"], [2, "display", "flex"], [1, "graph"], ["height", "180", "echarts", "", 1, "chart", "m-0", 3, "options"], [1, "ngx-gauge-ppm"], [2, "display", "flex", "margin-left", "25%"], [3, "type", "value", "max", "min", "label", "append", "thick", "foregroundColor", "backgroundColor", "size", "duration"], [1, "row-2"], [1, "ngx-gauge-umidita"], [1, "ngx-gauge-pmv"], [2, "display", "flex", "margin-left", "20%"], [1, "mt--72"], ["fxLayout", "row wrap"], ["fxFlex", "100", "fxFlex.sm", "100", "fxFlex.gt-sm", "100"], ["fxLayout", "row wrap", 2, "margin-top", "-2vh", "margin-left", "10vh"], ["fxFlex", "100", "fxFlex.sm", "90", "fxFlex.gt-sm", "90"], ["fxFlex", "", "fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "p-24"], ["fxLayout", "row", "fxLayoutAlign", "center center"], [1, "ml-12"], [1, "m-0", "text-muted", "mb-4"]],
      template: function AppHvacComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "HVAC - Heating, Ventilation and Air Conditioning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "thermostat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Temperatura interna");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "ngx-gauge", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "cloud");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "h3", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "ngx-gauge", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "ac_unit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "h3", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "ngx-gauge", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "opacity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Umidit\xE0 interna");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "ngx-gauge", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-card", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-card", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-card", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](74, "numberFormat");

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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.gaugeTempType)("value", ctx.gaugeTempValue)("min", ctx.gaugeTempMin)("max", ctx.gaugeTempMax)("label", ctx.gaugeTempLabel)("append", ctx.gaugeTempAppendText)("thick", ctx.gaugeTempThickness)("foregroundColor", ctx.gaugeTempForegroundColor)("backgroundColor", ctx.gaugeTempBackgroundColor)("size", ctx.gaugeTempSize)("duration", ctx.gaugeDuration);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.dioxideChartBar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.gaugePpmType)("value", ctx.gaugePpmValue)("max", ctx.gaugePpmMax)("min", ctx.gaugePpmMin)("label", ctx.gaugePpmLabel)("append", ctx.gaugePpmAppendText)("thick", ctx.gaugePpmThickness)("foregroundColor", ctx.gaugePpmForegroundColor)("backgroundColor", ctx.gaugePpmBackgroundColor)("size", ctx.gaugePpmSize)("duration", ctx.gaugeDuration);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.gaugePmvType)("value", ctx.gaugePmvValue)("min", ctx.gaugePmvMin)("max", ctx.gaugePmvMax)("label", ctx.gaugePmvLabel)("append", ctx.gaugePmvAppendText)("thick", ctx.gaugePmvThickness)("foregroundColor", ctx.gaugePmvForegroundColor)("backgroundColor", ctx.gaugePmvBackgroundColor)("size", ctx.gaugePmvSize)("duration", ctx.gaugeDuration);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.pmvChartBar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.gaugeUmiditaType)("value", ctx.gaugeUmiditaValue)("min", ctx.gaugeUmiditaMin)("max", ctx.gaugeUmiditaMax)("label", ctx.gaugeUmiditaLabel)("append", ctx.gaugeUmiditaAppendText)("thick", ctx.gaugeUmiditaThickness)("foregroundColor", ctx.gaugeUmiditaForegroundColor)("backgroundColor", ctx.gaugeUmiditaBackgroundColor)("size", ctx.gaugeUmiditaSize)("duration", ctx.gaugeDuration);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("text-48 mat-color-", ctx.statCardList[0].color, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statCardList[0].icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statCardList[0].title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("m-0 mat-color-", ctx.statCardList[0].color, " text-25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statCardList[0].amount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("text-48 mat-color-", ctx.statCardList[1].color, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statCardList[1].icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statCardList[1].title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("m-0 mat-color-", ctx.statCardList[1].color, " text-25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statCardList[1].amount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("text-48 mat-color-", ctx.statCardList[2].color, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statCardList[2].icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statCardList[2].title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("m-0 mat-color-", ctx.statCardList[2].color, " text-25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](74, 73, ctx.statCardList[2].amount));
        }
      },
      directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], ngx_gauge__WEBPACK_IMPORTED_MODULE_6__["ɵa"], ngx_echarts__WEBPACK_IMPORTED_MODULE_7__["ɵa"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"]],
      pipes: [_shared_pipes_number_pipe__WEBPACK_IMPORTED_MODULE_10__["NumberFormatPipe"]],
      styles: ["#graph-container[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 100%;\n  margin-top: -1vh !important;\n  background-color: #032d62 !important;\n  \n  box-shadow: 0 0 0 10in #032d62;\n}\n\n.ngx-gauge-ppm[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 18%;\n  left: 70%;\n}\n\n.ngx-gauge-temp[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 18%;\n  right: 80%;\n}\n\n.ngx-gauge-umidita[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 58%;\n  left: 70%;\n}\n\n.ngx-gauge-pmv[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 58%;\n  right: 80%;\n}\n\n.graph[_ngcontent-%COMP%] {\n  margin-left: 40%;\n  width: 33vw;\n}\n\n.borders[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 80vw;\n  height: 1px;\n  background-color: rgba(255, 255, 255, 0.342);\n  top: 48vh;\n  left: 2.5vw;\n}\n\n.borders[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  background-color: rgba(255, 255, 255, 0.281);\n  width: 1px;\n  height: 74vh;\n  left: 23%;\n  top: -37vh;\n}\n\n.grid[_ngcontent-%COMP%] {\n  display: grid !important;\n  grid-template-columns: repeat(1, 107vh) !important;\n  grid-template-rows: repeat(2, 42vh);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvb3RoZXJzL2FwcC1odmFjL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcdGVsZW1ldHJ5XFxhbmd1bGFyLXRyYW0tdGVsZW1ldHJ5L3NyY1xcYXBwXFx2aWV3c1xcb3RoZXJzXFxhcHAtaHZhY1xcYXBwLWh2YWMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL290aGVycy9hcHAtaHZhYy9hcHAtaHZhYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFVBQVU7RUFDVixZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLG9DQUFvQztFQUNwQywrQ0FBQTtFQUNBLDhCQUE4QjtBQ0FsQzs7QURHQTtFQUVJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztBQ0RiOztBRElBO0VBRUksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0FDRmQ7O0FES0E7RUFFSSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7QUNIYjs7QURNQTtFQUVJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtBQ0pkOztBRE9BO0VBRUksZ0JBQWdCO0VBQ2hCLFdBQVc7QUNMZjs7QURRQTtFQUVJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLDRDQUE0QztFQUM1QyxTQUFRO0VBQ1IsV0FBVztBQ05mOztBRFNBO0VBRUksV0FBVztFQUNYLGtCQUFrQjtFQUNsQiw0Q0FBNEM7RUFDNUMsVUFBVTtFQUNWLFlBQVk7RUFDWixTQUFRO0VBQ1IsVUFBVTtBQ1BkOztBRFVBO0VBRUksd0JBQXdCO0VBQ3hCLGtEQUFrRDtFQUNsRCxtQ0FBbUM7QUNSdkMiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9vdGhlcnMvYXBwLWh2YWMvYXBwLWh2YWMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZ3JhcGgtY29udGFpbmVyXHJcbntcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMXZoICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMyZDYyICFpbXBvcnRhbnQ7XHJcbiAgICAvKiB0byBnaXZlIHRoZSBlbnRpcmUgcGFnZSB0aGUgaW50ZW50ZWQgY29sb3IgKi9cclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDEwaW4gIzAzMmQ2MjsgIFxyXG59XHJcblxyXG4ubmd4LWdhdWdlLXBwbVxyXG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE4JTtcclxuICAgIGxlZnQ6IDcwJTtcclxufVxyXG5cclxuLm5neC1nYXVnZS10ZW1wXHJcbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTglO1xyXG4gICAgcmlnaHQ6IDgwJTtcclxufVxyXG5cclxuLm5neC1nYXVnZS11bWlkaXRhXHJcbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTglO1xyXG4gICAgbGVmdDogNzAlO1xyXG59XHJcblxyXG4ubmd4LWdhdWdlLXBtdlxyXG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDU4JTtcclxuICAgIHJpZ2h0OiA4MCU7XHJcbn1cclxuXHJcbi5ncmFwaFxyXG57XHJcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xyXG4gICAgd2lkdGg6IDMzdnc7XHJcbn1cclxuXHJcbi5ib3JkZXJzXHJcbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzQyKTtcclxuICAgIHRvcDo0OHZoO1xyXG4gICAgbGVmdDogMi41dnc7XHJcbn1cclxuXHJcbi5ib3JkZXJzOjpiZWZvcmVcclxue1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjgxKTtcclxuICAgIHdpZHRoOiAxcHg7XHJcbiAgICBoZWlnaHQ6IDc0dmg7XHJcbiAgICBsZWZ0OjIzJTtcclxuICAgIHRvcDogLTM3dmg7XHJcbn1cclxuXHJcbi5ncmlkXHJcbntcclxuICAgIGRpc3BsYXk6IGdyaWQgIWltcG9ydGFudDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDEwN3ZoKSAhaW1wb3J0YW50O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNDJ2aCk7XHJcbn0iLCIjZ3JhcGgtY29udGFpbmVyIHtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tdG9wOiAtMXZoICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzJkNjIgIWltcG9ydGFudDtcbiAgLyogdG8gZ2l2ZSB0aGUgZW50aXJlIHBhZ2UgdGhlIGludGVudGVkIGNvbG9yICovXG4gIGJveC1zaGFkb3c6IDAgMCAwIDEwaW4gIzAzMmQ2Mjtcbn1cblxuLm5neC1nYXVnZS1wcG0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTglO1xuICBsZWZ0OiA3MCU7XG59XG5cbi5uZ3gtZ2F1Z2UtdGVtcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOCU7XG4gIHJpZ2h0OiA4MCU7XG59XG5cbi5uZ3gtZ2F1Z2UtdW1pZGl0YSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1OCU7XG4gIGxlZnQ6IDcwJTtcbn1cblxuLm5neC1nYXVnZS1wbXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTglO1xuICByaWdodDogODAlO1xufVxuXG4uZ3JhcGgge1xuICBtYXJnaW4tbGVmdDogNDAlO1xuICB3aWR0aDogMzN2dztcbn1cblxuLmJvcmRlcnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA4MHZ3O1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM0Mik7XG4gIHRvcDogNDh2aDtcbiAgbGVmdDogMi41dnc7XG59XG5cbi5ib3JkZXJzOjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjgxKTtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiA3NHZoO1xuICBsZWZ0OiAyMyU7XG4gIHRvcDogLTM3dmg7XG59XG5cbi5ncmlkIHtcbiAgZGlzcGxheTogZ3JpZCAhaW1wb3J0YW50O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxMDd2aCkgIWltcG9ydGFudDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNDJ2aCk7XG59XG4iXX0= */"],
      data: {
        animation: app_shared_animations_matx_animations__WEBPACK_IMPORTED_MODULE_1__["matxAnimations"]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppHvacComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-blank",
          templateUrl: "./app-hvac.component.html",
          styleUrls: ["./app-hvac.component.scss"],
          animations: app_shared_animations_matx_animations__WEBPACK_IMPORTED_MODULE_1__["matxAnimations"]
        }]
      }], function () {
        return [{
          type: app_shared_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]
        }, {
          type: app_views_data_saver_service__WEBPACK_IMPORTED_MODULE_3__["DataSaverService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/others/app-passeggeri/app-passeggeri.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/views/others/app-passeggeri/app-passeggeri.component.ts ***!
    \*************************************************************************/

  /*! exports provided: AppPasseggeriComponent */

  /***/
  function srcAppViewsOthersAppPasseggeriAppPasseggeriComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppPasseggeriComponent", function () {
      return AppPasseggeriComponent;
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


    var ngx_echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-echarts */
    "./node_modules/ngx-echarts/__ivy_ngcc__/fesm2015/ngx-echarts.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var ngx_gauge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-gauge */
    "./node_modules/ngx-gauge/__ivy_ngcc__/fesm2015/ngx-gauge.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _shared_pipes_number_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
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

    var AppPasseggeriComponent = /*#__PURE__*/function () {
      function AppPasseggeriComponent(themeService, data) {
        _classCallCheck(this, AppPasseggeriComponent);

        this.themeService = themeService;
        this.data = data; //used for creating and customizing the gauge chart

        this.gaugePasseggeriType = "full";
        this.gaugePasseggeriValue = 54;
        this.gaugePasseggeriMin = 50;
        this.gaugePasseggeriMax = 70;
        this.gaugePasseggeriLabel = "pax";
        this.gaugePasseggeriAppendText = "";
        this.gaugePasseggeriThickness = 20;
        this.gaugePasseggeriForegroundColor = "deepSkyBlue";
        this.gaugePasseggeriBackgroundColor = "rgb(55, 55, 153)";
        this.gaugePasseggeriSize = 300;
        this.gaugeDbType = "arch";
        this.gaugeDbValue = 52;
        this.gaugeDbMin = 40;
        this.gaugeDbMax = 70;
        this.gaugeDbLabel = "";
        this.gaugeDbAppendText = "db";
        this.gaugeDbThickness = 20;
        this.gaugeDbForegroundColor = "#ff0000";
        this.gaugeDbBackgroundColor = "rgb(55, 55, 153)";
        this.gaugeDbSize = 300; //gauge animation duration in ms

        this.gaugeDuration = 500; //---------------------------------------------------------

        this.statCardList = this.data.statCardList;
        this.displayedColumns = ["name", "price", "available", "action"];
        this.passeggeriDeltas = [-5, -2, 2, 5];
      } //waiting function


      _createClass(AppPasseggeriComponent, [{
        key: "sleep",
        value: function sleep(ms) {
          return new Promise(function (resolve) {
            return setTimeout(resolve, ms);
          });
        } //random int value for indexing through temperatureDeltas

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
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var i;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    if (!true) {
                      _context5.next = 23;
                      break;
                    }

                    //set for(){} iteration count according to the intervals needed and the time it takes the tram to complete 1 ride according to the formulas:
                    //durationOfFullRide is the time it takes the train to complete 1 giro (from leaving station to returning to station)
                    //timeInStation is the time the train stays in the station
                    //timeUntilOpenDoors is the imagined time it takes for the doors to open and passengers to get out AFTER the train has stopped
                    //iterationCount = timeUntilOpenDoors + durationOfFullRide / durationOfFullRide
                    //timeLeftInStation = (durationOfFullRide + timeInStation) - (durationOfFullRide + timeUntilOpenDoors + passengersGetOut)
                    //timeInStation = timeUntilOpenDoors + passengersGetOut + timeLeftInStation
                    if (this.gaugePasseggeriValue <= this.gaugePasseggeriMin) {
                      this.gaugePasseggeriValue = 50;
                    }

                    i = 0;

                  case 3:
                    if (!(i < 1)) {
                      _context5.next = 18;
                      break;
                    }

                    _context5.next = 6;
                    return this.sleep(18000);

                  case 6:
                    _context5.next = 8;
                    return this.sleep(2000);

                  case 8:
                    //timeUntilOpenDoors
                    this.gaugePasseggeriValue = this.gaugePasseggeriValue + this.passeggeriDeltas[this.getRandomInt(0, 2)]; //passengers get out of train

                    this.gaugeDbValue = this.gaugeDbValue + this.passeggeriDeltas[this.getRandomInt(2, 4)]; //noise level rises

                    _context5.next = 12;
                    return this.sleep(5000);

                  case 12:
                    //passengersGetOut (wait for passengers to get out)
                    this.gaugePasseggeriValue = this.gaugePasseggeriValue + this.passeggeriDeltas[this.getRandomInt(2, 4)]; //new passengers get inside train

                    this.gaugeDbValue = this.gaugeDbValue + 2; //noise level rises

                    if (this.gaugePasseggeriValue >= 60) {
                      //this.gaugePasseggeriLabel = "Numero pass alto!";
                      this.gaugePasseggeriForegroundColor = "red";

                      if (this.gaugePasseggeriValue >= this.gaugePasseggeriMax) {
                        this.gaugePasseggeriValue = 70; //this.gaugePasseggeriLabel = "Numero pass alto!";

                        this.gaugePasseggeriForegroundColor = "red";
                      }
                    }

                  case 15:
                    i++;
                    _context5.next = 3;
                    break;

                  case 18:
                    _context5.next = 20;
                    return this.sleep(5000);

                  case 20:
                    //timeLeftInStation
                    this.gaugeDbValue = this.gaugeDbValue - 5; //noise level drops

                    _context5.next = 0;
                    break;

                  case 23:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.data.currentMessage.subscribe(function (message) {
            return _this6.message = message;
          });
          this.themeService.onThemeChange.subscribe(function (activeTheme) {
            _this6.initDbChartBar(activeTheme);
          });
          this.initDbChartBar(this.themeService.activatedTheme);
          this.changePax();
          this.data.ngOnInit();
          var dataAxis = ["9:00-10:00", "10:00-11:00", "11:00-12:00", "12:00-13:00", "13:00-14:00", "14:00-15:00", "15:00-16:00", "16:00-17:00", "17:00-18:00"];
          var data = [20, 30, 35, 38, 42, 50, 55, 68, 60];
          var yMax = 70;
          var dataShadow = []; // tslint:disable-next-line: prefer-for-of

          for (var i = 0; i < data.length; i++) {
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
                color: '#fff'
              },
              axisTick: {
                show: false
              },
              axisLine: {
                show: false
              },
              z: 10
            },
            yAxis: {
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                textStyle: {
                  color: '#999'
                }
              }
            },
            dataZoom: [{
              id: 'dataZoomX',
              type: 'inside',
              xAxisIndex: [0],
              filterMode: 'filter'
            }, {
              id: 'dataZoomY',
              type: 'inside',
              yAxisIndex: [0],
              filterMode: 'empty'
            }],
            series: [{
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
              data: [{
                value: 20,
                itemStyle: {
                  color: 'deepskyblue'
                }
              }, {
                value: 30,
                itemStyle: {
                  color: 'deepskyblue'
                }
              }, {
                value: 35,
                itemStyle: {
                  color: 'deepskyblue'
                }
              }, {
                value: 42,
                itemStyle: {
                  color: 'deepskyblue'
                }
              }, {
                value: 62,
                itemStyle: {
                  color: '#ff0000'
                }
              }, {
                value: 60,
                itemStyle: {
                  color: '#ff0000'
                }
              }, {
                value: 55,
                itemStyle: {
                  color: 'deepskyblue'
                }
              }, {
                value: 50,
                itemStyle: {
                  color: 'deepskyblue'
                }
              }, {
                value: 52,
                itemStyle: {
                  color: 'deepskyblue'
                }
              }],
              animation: false
            }, {
              type: 'bar',
              itemStyle: {
                color: "deepskyblue"
              },
              emphasis: {
                itemStyle: {
                  color: "deepskyblue"
                }
              }
            }]
          };
        }
      }, {
        key: "initDbChartBar",
        value: function initDbChartBar(theme) {
          this.dbChartBar = {
            title: {
              show: true,
              text: "Indice decibel",
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
            series: [{
              data: [40, 45, 50, 52, 60, 58, 52, 50, 51],
              type: "line",
              areaStyle: {},
              smooth: false,
              lineStyle: {
                width: 2,
                color: "#fff"
              }
            }],
            xAxis: {
              show: true,
              type: "category",
              showGrid: false,
              boundaryGap: false,
              data: ["9:00-10:00", "10:00-11:00", "11:00-12:00", "12:00-13:00", "13:00-14:00", "14:00-15:00", "15:00-16:00", "16:00-17:00", "17:00-18:00"],
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
            color: [{
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: "rgba(255,255,255,0.3)" // color at 0% position

              }, {
                offset: 1,
                color: "rgba(255,255,255,0)" // color at 100% position

              }],
              global: false // false by default

            }],
            dataZoom: [{
              id: 'dataZoomX',
              type: 'inside',
              xAxisIndex: [0],
              filterMode: 'filter'
            }, {
              id: 'dataZoomY',
              type: 'inside',
              yAxisIndex: [0],
              filterMode: 'empty'
            }]
          };
        }
      }]);

      return AppPasseggeriComponent;
    }();

    AppPasseggeriComponent.ɵfac = function AppPasseggeriComponent_Factory(t) {
      return new (t || AppPasseggeriComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_views_data_saver_service__WEBPACK_IMPORTED_MODULE_3__["DataSaverService"]));
    };

    AppPasseggeriComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppPasseggeriComponent,
      selectors: [["app-blank"]],
      decls: 61,
      vars: 53,
      consts: [[1, "borders"], ["id", "graph-container", 1, "mat-bg-primary", "mx--033", "mt--033", "px-24", "pt-24"], [1, "header"], [1, "text-white", "font-weight-normal"], [1, "grid"], [1, "row-1"], [2, "display", "flex"], [1, "graph"], ["height", "180", "echarts", "", 1, "chart", "m-0", 3, "options"], [1, "ngx-gauge-ppm"], [2, "display", "flex", "margin-left", "25%"], [2, "position", "absolute", "left", "85%", "top", "15%"], [1, "text-white", "font-weight-bold"], [3, "type", "value", "min", "max", "label", "append", "thick", "foregroundColor", "backgroundColor", "size", "duration"], [1, "row-2"], [1, "ngx-gauge-umidita"], [1, "mt--72"], ["fxLayout", "row wrap"], ["fxFlex", "100", "fxFlex.sm", "100", "fxFlex.gt-sm", "100"], ["fxLayout", "row wrap", 2, "margin-top", "-2vh", "margin-left", "10vh"], ["fxFlex", "100", "fxFlex.sm", "90", "fxFlex.gt-sm", "90"], ["fxFlex", "", "fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "p-24"], ["fxLayout", "row", "fxLayoutAlign", "center center"], [1, "ml-12"], [1, "m-0", "text-muted", "mb-4"]],
      template: function AppPasseggeriComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Passeggeri");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "people");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "h3", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "ngx-gauge", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "graphic_eq");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "h3", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "ngx-gauge", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-card", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-card", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-card", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "numberFormat");

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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.passeggeri);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.gaugePasseggeriType)("value", ctx.gaugePasseggeriValue)("min", ctx.gaugePasseggeriMin)("max", ctx.gaugePasseggeriMax)("label", ctx.gaugePasseggeriLabel)("append", ctx.gaugePasseggeriAppendText)("thick", ctx.gaugePasseggeriThickness)("foregroundColor", ctx.gaugePasseggeriForegroundColor)("backgroundColor", ctx.gaugePasseggeriBackgroundColor)("size", ctx.gaugePasseggeriSize)("duration", ctx.gaugeDuration);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.gaugeDbType)("value", ctx.gaugeDbValue)("min", ctx.gaugeDbMin)("max", ctx.gaugeDbMax)("label", ctx.gaugeDbLabel)("append", ctx.gaugeDbAppendText)("thick", ctx.gaugeDbThickness)("foregroundColor", ctx.gaugeDbForegroundColor)("backgroundColor", ctx.gaugeDbBackgroundColor)("size", ctx.gaugeDbSize)("duration", ctx.gaugeDuration);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.dbChartBar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("text-48 mat-color-", ctx.statCardList[0].color, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statCardList[0].icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statCardList[0].title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("m-0 mat-color-", ctx.statCardList[0].color, " text-25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statCardList[0].amount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("text-48 mat-color-", ctx.statCardList[1].color, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statCardList[1].icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statCardList[1].title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("m-0 mat-color-", ctx.statCardList[1].color, " text-25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statCardList[1].amount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("text-48 mat-color-", ctx.statCardList[2].color, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statCardList[2].icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statCardList[2].title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("m-0 mat-color-", ctx.statCardList[2].color, " text-25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](60, 51, ctx.statCardList[2].amount));
        }
      },
      directives: [ngx_echarts__WEBPACK_IMPORTED_MODULE_4__["ɵa"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], ngx_gauge__WEBPACK_IMPORTED_MODULE_6__["ɵa"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"]],
      pipes: [_shared_pipes_number_pipe__WEBPACK_IMPORTED_MODULE_9__["NumberFormatPipe"]],
      styles: ["#graph-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin-top: -1vh !important;\n  background-color: #032d62 !important;\n  \n  box-shadow: 0 0 0 10in #032d62;\n}\n\n.ngx-gauge-ppm[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 13%;\n  left: 70%;\n}\n\n.ngx-gauge-umidita[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 55%;\n  left: 70%;\n}\n\n.graph[_ngcontent-%COMP%] {\n  margin-left: 0;\n  width: 56vw;\n}\n\n.borders[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 80vw;\n  height: 1px;\n  background-color: rgba(255, 255, 255, 0.342);\n  top: 48vh;\n  left: 2.5vw;\n}\n\n.grid[_ngcontent-%COMP%] {\n  display: grid !important;\n  grid-template-columns: repeat(1, 107vh) !important;\n  grid-template-rows: repeat(2, 42vh);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvb3RoZXJzL2FwcC1wYXNzZWdnZXJpL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcdGVsZW1ldHJ5XFxhbmd1bGFyLXRyYW0tdGVsZW1ldHJ5L3NyY1xcYXBwXFx2aWV3c1xcb3RoZXJzXFxhcHAtcGFzc2VnZ2VyaVxcYXBwLXBhc3NlZ2dlcmkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL290aGVycy9hcHAtcGFzc2VnZ2VyaS9hcHAtcGFzc2VnZ2VyaS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLG9DQUFvQztFQUNwQywrQ0FBQTtFQUNBLDhCQUE4QjtBQ0FsQzs7QURHQTtFQUVJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztBQ0RiOztBRElBO0VBRUksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0FDRmI7O0FES0E7RUFFSSxjQUFjO0VBQ2QsV0FBVztBQ0hmOztBRE1BO0VBRUksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsNENBQTRDO0VBQzVDLFNBQVE7RUFDUixXQUFXO0FDSmY7O0FET0E7RUFFSSx3QkFBd0I7RUFDeEIsa0RBQWtEO0VBQ2xELG1DQUFtQztBQ0x2QyIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL290aGVycy9hcHAtcGFzc2VnZ2VyaS9hcHAtcGFzc2VnZ2VyaS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNncmFwaC1jb250YWluZXJcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMXZoICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMyZDYyICFpbXBvcnRhbnQ7XHJcbiAgICAvKiB0byBnaXZlIHRoZSBlbnRpcmUgcGFnZSB0aGUgaW50ZW50ZWQgY29sb3IgKi9cclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDEwaW4gIzAzMmQ2MjsgIFxyXG59XHJcblxyXG4ubmd4LWdhdWdlLXBwbVxyXG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEzJTtcclxuICAgIGxlZnQ6IDcwJTtcclxufVxyXG5cclxuLm5neC1nYXVnZS11bWlkaXRhXHJcbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTUlO1xyXG4gICAgbGVmdDogNzAlO1xyXG59XHJcblxyXG4uZ3JhcGhcclxue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB3aWR0aDogNTZ2dztcclxufVxyXG5cclxuLmJvcmRlcnNcclxue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDgwdnc7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNDIpO1xyXG4gICAgdG9wOjQ4dmg7XHJcbiAgICBsZWZ0OiAyLjV2dztcclxufVxyXG5cclxuLmdyaWRcclxue1xyXG4gICAgZGlzcGxheTogZ3JpZCAhaW1wb3J0YW50O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMTA3dmgpICFpbXBvcnRhbnQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCA0MnZoKTtcclxufSIsIiNncmFwaC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tdG9wOiAtMXZoICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzJkNjIgIWltcG9ydGFudDtcbiAgLyogdG8gZ2l2ZSB0aGUgZW50aXJlIHBhZ2UgdGhlIGludGVudGVkIGNvbG9yICovXG4gIGJveC1zaGFkb3c6IDAgMCAwIDEwaW4gIzAzMmQ2Mjtcbn1cblxuLm5neC1nYXVnZS1wcG0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTMlO1xuICBsZWZ0OiA3MCU7XG59XG5cbi5uZ3gtZ2F1Z2UtdW1pZGl0YSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1NSU7XG4gIGxlZnQ6IDcwJTtcbn1cblxuLmdyYXBoIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIHdpZHRoOiA1NnZ3O1xufVxuXG4uYm9yZGVycyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDgwdnc7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzQyKTtcbiAgdG9wOiA0OHZoO1xuICBsZWZ0OiAyLjV2dztcbn1cblxuLmdyaWQge1xuICBkaXNwbGF5OiBncmlkICFpbXBvcnRhbnQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDEwN3ZoKSAhaW1wb3J0YW50O1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCA0MnZoKTtcbn1cbiJdfQ== */"],
      data: {
        animation: app_shared_animations_matx_animations__WEBPACK_IMPORTED_MODULE_1__["matxAnimations"]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppPasseggeriComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-blank",
          templateUrl: "./app-passeggeri.component.html",
          styleUrls: ["./app-passeggeri.component.scss"],
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
  "./src/app/views/others/app-porte/app-porte.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/views/others/app-porte/app-porte.component.ts ***!
    \***************************************************************/

  /*! exports provided: AppPorteComponent */

  /***/
  function srcAppViewsOthersAppPorteAppPorteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppPorteComponent", function () {
      return AppPorteComponent;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var app_shared_animations_matx_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! app/shared/animations/matx-animations */
    "./src/app/shared/animations/matx-animations.ts");
    /* harmony import */


    var app_shared_services_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! app/shared/services/theme.service */
    "./src/app/shared/services/theme.service.ts");
    /* harmony import */


    var app_views_data_saver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! app/views/data-saver.service */
    "./src/app/views/data-saver.service.ts");
    /* harmony import */


    var ngx_echarts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-echarts */
    "./node_modules/ngx-echarts/__ivy_ngcc__/fesm2015/ngx-echarts.js");
    /* harmony import */


    var ngx_gauge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-gauge */
    "./node_modules/ngx-gauge/__ivy_ngcc__/fesm2015/ngx-gauge.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _shared_pipes_number_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
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

    var AppPorteComponent = /*#__PURE__*/function () {
      function AppPorteComponent(themeService, dataService, datepipe) {
        var _this7 = this;

        _classCallCheck(this, AppPorteComponent);

        this.themeService = themeService;
        this.dataService = dataService;
        this.datepipe = datepipe;
        this.oneDay = 24 * 3600 * 1000;
        this.oneHour = 3600 * 1000;
        this.statCardList = this.dataService.statCardList; //used for creating and customizing the gauge chart

        this.gaugeApertura1Type = "arch";
        this.gaugeApertura1Value = 24;
        this.gaugeApertura1Max = 100;
        this.gaugeApertura1Label = "";
        this.gaugeApertura1AppendText = "V";
        this.gaugeApertura1Thickness = 20;
        this.gaugeApertura1ForegroundColor = "deepSkyBlue";
        this.gaugeApertura1BackgroundColor = "rgb(55, 55, 153)";
        this.gaugeApertura1Size = 200;
        this.gaugeChiusura1Type = "arch";
        this.gaugeChiusura1Value = 60;
        this.gaugeChiusura1Max = 100;
        this.gaugeChiusura1Label = "";
        this.gaugeChiusura1AppendText = "V";
        this.gaugeChiusura1Thickness = 20;
        this.gaugeChiusura1ForegroundColor = "deepSkyBlue";
        this.gaugeChiusura1BackgroundColor = "rgb(55, 55, 153)";
        this.gaugeChiusura1Size = 200;
        this.gaugeApertura2Type = "arch";
        this.gaugeApertura2Value = 26;
        this.gaugeApertura2Min = 0;
        this.gaugeApertura2Max = 100;
        this.gaugeApertura2Label = "";
        this.gaugeApertura2AppendText = "V";
        this.gaugeApertura2Thickness = 20;
        this.gaugeApertura2ForegroundColor = "deepSkyBlue";
        this.gaugeApertura2BackgroundColor = "rgb(55, 55, 153)";
        this.gaugeApertura2Size = 200;
        this.gaugeChiusura2Type = "arch";
        this.gaugeChiusura2Value = 30;
        this.gaugeChiusura2Min = 0;
        this.gaugeChiusura2Max = 100;
        this.gaugeChiusura2Label = "";
        this.gaugeChiusura2AppendText = "V";
        this.gaugeChiusura2Thickness = 20;
        this.gaugeChiusura2ForegroundColor = "deepSkyBlue";
        this.gaugeChiusura2BackgroundColor = "rgb(55, 55, 153)";
        this.gaugeChiusura2Size = 200;
        this.gaugeApertura3Type = "arch";
        this.gaugeApertura3Value = 24;
        this.gaugeApertura3Min = 0;
        this.gaugeApertura3Max = 100;
        this.gaugeApertura3Label = "";
        this.gaugeApertura3AppendText = "V";
        this.gaugeApertura3Thickness = 20;
        this.gaugeApertura3ForegroundColor = "deepSkyBlue";
        this.gaugeApertura3BackgroundColor = "rgb(55, 55, 153)";
        this.gaugeApertura3Size = 200;
        this.gaugeChiusura3Type = "arch";
        this.gaugeChiusura3Value = 21;
        this.gaugeChiusura3Min = 0;
        this.gaugeChiusura3Max = 100;
        this.gaugeChiusura3Label = "";
        this.gaugeChiusura3AppendText = "V";
        this.gaugeChiusura3Thickness = 20;
        this.gaugeChiusura3ForegroundColor = "deepSkyBlue";
        this.gaugeChiusura3BackgroundColor = "rgb(55, 55, 153)";
        this.gaugeChiusura3Size = 200; //----------------------------------------------------------------------

        this.displayedColumns = ["name", "price", "available", "action"];
        this.currentDateTime = this.datepipe.transform(new Date(), 'h:mm:ss');
        this.timeUpdate = setInterval(function () {
          _this7.currentDateTime = _this7.datepipe.transform(new Date(), 'h:mm:ss');
        }, 1000);
      } //waiting function


      _createClass(AppPorteComponent, [{
        key: "sleep",
        value: function sleep(ms) {
          return new Promise(function (resolve) {
            return setTimeout(resolve, ms);
          });
        }
      }, {
        key: "changeRange",
        value: function changeRange() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var i, _i;

            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    //display values on first screen
                    for (i = 0; i < 25; i++) {
                      //'i' sets how many values per single screen of the chart will be shown
                      this.data.push(this.preRandomData());
                      this.data2.push(this.preRandomData2());
                      this.data3.push(this.preRandomData3());
                    }

                    _i = 0;

                  case 2:
                    if (!(_i >= 0)) {
                      _context6.next = 30;
                      break;
                    }

                    _context6.next = 5;
                    return this.sleep(18000);

                  case 5:
                    _context6.next = 7;
                    return this.sleep(2000);

                  case 7:
                    //waitToOpenDoors
                    this.data.push(this.randomData()); //open doors

                    this.gaugeApertura1Value = Math.round(this.value);

                    if (this.gaugeApertura1Value >= 80) {
                      this.gaugeApertura1ForegroundColor = "#ff0000";
                    } else {
                      this.gaugeApertura1ForegroundColor = "deepSkyBlue";
                    }

                    this.data2.push(this.randomData2()); //open doors

                    this.gaugeApertura2Value = Math.round(this.value);

                    if (this.gaugeApertura2Value >= 80) {
                      this.gaugeApertura2ForegroundColor = "#ff0000";
                    } else {
                      this.gaugeApertura2ForegroundColor = "deepSkyBlue";
                    }

                    this.data3.push(this.randomData3()); //open doors

                    this.gaugeApertura3Value = Math.round(this.value);

                    if (this.gaugeApertura3Value >= 80) {
                      this.gaugeApertura3ForegroundColor = "#ff0000";
                    } else {
                      this.gaugeApertura3ForegroundColor = "deepSkyBlue";
                    } //}


                    _context6.next = 18;
                    return this.sleep(10000);

                  case 18:
                    //waitToCloseDoors = totalTimeInStation - waitToOpenDoors
                    //for (let i = 0; i < 4; i++) {
                    this.data.push(this.randomData()); //close doors

                    this.gaugeChiusura1Value = Math.round(this.value);

                    if (this.gaugeChiusura1Value >= 80) {
                      this.gaugeChiusura1ForegroundColor = "#ff0000";
                    } else {
                      this.gaugeChiusura1ForegroundColor = "deepSkyBlue";
                    }

                    this.data2.push(this.randomData2()); //close doors

                    this.gaugeChiusura2Value = Math.round(this.value);

                    if (this.gaugeChiusura2Value >= 80) {
                      this.gaugeChiusura2ForegroundColor = "#ff0000";
                    } else {
                      this.gaugeChiusura2ForegroundColor = "deepSkyBlue";
                    }

                    this.data3.push(this.randomData2()); //close doors

                    this.gaugeChiusura3Value = Math.round(this.value);

                    if (this.gaugeChiusura3Value >= 80) {
                      this.gaugeChiusura3ForegroundColor = "#ff0000";
                    } else {
                      this.gaugeChiusura3ForegroundColor = "deepSkyBlue";
                    } //}


                  case 27:
                    _i++;
                    _context6.next = 2;
                    break;

                  case 30:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "clearData",
        value: function clearData() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.sleep(90000);

                  case 2:
                    this.data = [];
                    this.data2 = [];
                    this.data3 = [];

                  case 5:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.themeService.onThemeChange.subscribe(function (activeTheme) {
            _this8.initPrimaPortaChartBar(activeTheme);

            _this8.initSecondaPortaChartBar(activeTheme);

            _this8.initTerzaPortaChartBar(activeTheme);
          });
          this.initPrimaPortaChartBar(this.themeService.activatedTheme);
          this.initSecondaPortaChartBar(this.themeService.activatedTheme);
          this.initTerzaPortaChartBar(this.themeService.activatedTheme);
          this.dataService.ngOnInit(); // generate some random testing data:

          this.data = [];
          this.data2 = [];
          this.data3 = [];
          this.now = new Date(2022, 20, 5);
          this.value = Math.random() * 100; //multiplication number sets the maximum value of the random values that will be generated

          this.changeRange(); // Mock dynamic data:

          this.timer = setInterval(function () {
            for (var i = 0; i < 1; i++) {
              //use num in 'i < num' to manipulate how many new values will arrive at once
              _this8.data.shift();

              _this8.data2.shift();

              _this8.data3.shift();

              _this8.data.push(_this8.preRandomData());

              _this8.data2.push(_this8.preRandomData2());

              _this8.data3.push(_this8.preRandomData3());
            } // update chart series data:


            _this8.updatePortaChartBar = {
              series: [{
                data: _this8.data
              }]
            };
            _this8.updatePortaChartBar2 = {
              series: [{
                data: _this8.data2
              }]
            };
            _this8.updatePortaChartBar3 = {
              series: [{
                data: _this8.data3
              }]
            };
          }, 1000); // this.clearData();
        }
      }, {
        key: "initPrimaPortaChartBar",
        value: function initPrimaPortaChartBar(theme) {
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
              formatter: function formatter(params) {
                params = params[0];
                var date = new Date(params.name);
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
              }
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
              }
            },
            color: [{
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: "rgba(255,255,255,0.3)" // color at 0% position

              }, {
                offset: 1,
                color: "rgba(255,255,255,0)" // color at 100% position

              }],
              global: false // false by default

            }],
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
              areaStyle: {}
            }],
            dataZoom: [{
              id: 'dataZoomX',
              type: 'inside',
              xAxisIndex: [0],
              filterMode: 'filter'
            }, {
              id: 'dataZoomY',
              type: 'inside',
              yAxisIndex: [0],
              filterMode: 'empty'
            }]
          };
        }
      }, {
        key: "initSecondaPortaChartBar",
        value: function initSecondaPortaChartBar(theme) {
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
              formatter: function formatter(params) {
                params = params[0];
                var date = new Date(params.name);
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
              }
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
              }
            },
            color: [{
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: "rgba(255,255,255,0.3)" // color at 0% position

              }, {
                offset: 1,
                color: "rgba(255,255,255,0)" // color at 100% position

              }],
              global: false // false by default

            }],
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
              areaStyle: {}
            }],
            dataZoom: [{
              id: 'dataZoomX',
              type: 'inside',
              xAxisIndex: [0],
              filterMode: 'filter'
            }, {
              id: 'dataZoomY',
              type: 'inside',
              yAxisIndex: [0],
              filterMode: 'empty'
            }]
          };
        }
      }, {
        key: "initTerzaPortaChartBar",
        value: function initTerzaPortaChartBar(theme) {
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
              formatter: function formatter(params) {
                params = params[0];
                var date = new Date(params.name);
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
              }
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
              }
            },
            color: [{
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: "rgba(255,255,255,0.3)" // color at 0% position

              }, {
                offset: 1,
                color: "rgba(255,255,255,0)" // color at 100% position

              }],
              global: false // false by default

            }],
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
              areaStyle: {}
            }],
            dataZoom: [{
              id: 'dataZoomX',
              type: 'inside',
              xAxisIndex: [0],
              filterMode: 'filter'
            }, {
              id: 'dataZoomY',
              type: 'inside',
              yAxisIndex: [0],
              filterMode: 'empty'
            }]
          };
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          clearInterval(this.timer);
        }
      }, {
        key: "changeValueRange",
        value: function changeValueRange() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    if (!true) {
                      _context8.next = 11;
                      break;
                    }

                    this.preRandomData();
                    this.preRandomData2();
                    this.preRandomData3();
                    _context8.next = 6;
                    return this.sleep(12000);

                  case 6:
                    this.randomData();
                    this.randomData2();
                    this.randomData3();
                    _context8.next = 0;
                    break;

                  case 11:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "randomData",
        value: function randomData() {
          this.now = new Date(this.now.getTime() + this.oneDay); //determines the intervals of time which display on the X axis

          this.value = Math.random() * 40 + 60; //determines next value to come to the chart according to a certain interval

          return {
            name: this.now.toString(),
            value: [[this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'), Math.round(this.value)]
          };
        }
      }, {
        key: "randomData2",
        value: function randomData2() {
          this.now = new Date(this.now.getTime() + this.oneDay); //determines the intervals of time which display on the X axis

          this.value = Math.random() * 40 + 60; //determines next value to come to the chart according to a certain interval

          return {
            name: this.now.toString(),
            value: [[this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'), Math.round(this.value)]
          };
        }
      }, {
        key: "randomData3",
        value: function randomData3() {
          this.now = new Date(this.now.getTime() + this.oneDay); //determines the intervals of time which display on the X axis

          this.value = Math.random() * 40 + 60; //determines next value to come to the chart according to a certain interval

          return {
            name: this.now.toString(),
            value: [[this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'), Math.round(this.value)]
          };
        }
      }, {
        key: "preRandomData",
        value: function preRandomData() {
          this.now = new Date(this.now.getTime() + this.oneDay); //determines the intervals of time which display on the X axis

          this.value = Math.random() * 30; //determines next value to come to the chart according to a certain interval

          return {
            name: this.now.toString(),
            value: [[this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'), Math.round(this.value)]
          };
        }
      }, {
        key: "preRandomData2",
        value: function preRandomData2() {
          this.now = new Date(this.now.getTime() + this.oneDay); //determines the intervals of time which display on the X axis

          this.value = Math.random() * 30; //determines next value to come to the chart according to a certain interval

          return {
            name: this.now.toString(),
            value: [[this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'), Math.round(this.value)]
          };
        }
      }, {
        key: "preRandomData3",
        value: function preRandomData3() {
          this.now = new Date(this.now.getTime() + this.oneDay); //determines the intervals of time which display on the X axis

          this.value = Math.random() * 30; //determines next value to come to the chart according to a certain interval

          return {
            name: this.now.toString(),
            value: [[this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'), Math.round(this.value)]
          };
        }
      }]);

      return AppPorteComponent;
    }();

    AppPorteComponent.ɵfac = function AppPorteComponent_Factory(t) {
      return new (t || AppPorteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_views_data_saver_service__WEBPACK_IMPORTED_MODULE_4__["DataSaverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]));
    };

    AppPorteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppPorteComponent,
      selectors: [["app-blank"]],
      decls: 88,
      vars: 94,
      consts: [[1, "borders"], ["id", "graph-container", 1, "mat-bg-primary", "mx--033", "mt--033", "px-24", "pt-24"], [1, "header"], [1, "text-white", "font-weight-normal"], [1, "grid"], [1, "row-1"], [2, "display", "flex"], [1, "graph-1"], [1, "redline"], ["height", "180", "echarts", "", 1, "chart", "m-0", 3, "options", "merge"], [1, "ngx-gauge-ap-1"], [2, "display", "flex", "margin-left", "20%"], [1, "text-white", "font-weight-bold"], [3, "type", "value", "max", "label", "append", "thick", "foregroundColor", "backgroundColor", "size"], [1, "ngx-gauge-chius-1"], [1, "row-2"], [1, "ngx-gauge-ap-2"], [3, "type", "value", "min", "max", "label", "append", "thick", "foregroundColor", "backgroundColor", "size"], [1, "ngx-gauge-chius-2"], [1, "graph-2"], [1, "row-3"], [1, "ngx-gauge-ap-3"], [1, "ngx-gauge-chius-3"], [1, "graph-3"], [1, "mt--72"], ["fxLayout", "row wrap"], ["fxFlex", "100", "fxFlex.sm", "100", "fxFlex.gt-sm", "100"], ["fxLayout", "row wrap", 2, "margin-top", "-3vh", "margin-left", "10vh"], ["fxFlex", "100", "fxFlex.sm", "90", "fxFlex.gt-sm", "90"], ["fxFlex", "", "fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "p-10"], ["fxLayout", "row", "fxLayoutAlign", "center center"], [1, "ml-12"], [1, "m-0", "text-muted", "mb-4"]],
      template: function AppPorteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Porte");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "hr", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h3", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Ultima Apertura");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "ngx-gauge", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h3", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Ultima Chiusura");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "ngx-gauge", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h3", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Ultima Apertura");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "ngx-gauge", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "h3", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Ultima Chiusura");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "ngx-gauge", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "hr", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "h3", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Ultima Apertura");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "ngx-gauge", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "h3", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Ultima Chiusura");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "ngx-gauge", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "hr", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "mat-card", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "p", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "mat-card", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "p", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "mat-card", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "p", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](87, "numberFormat");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Orario Corrente: ", ctx.currentDateTime, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.primaPortaChartBar)("merge", ctx.updatePortaChartBar);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.gaugeApertura1Type)("value", ctx.gaugeApertura1Value)("max", ctx.gaugeApertura1Max)("label", ctx.gaugeApertura1Label)("append", ctx.gaugeApertura1AppendText)("thick", ctx.gaugeApertura1Thickness)("foregroundColor", ctx.gaugeApertura1ForegroundColor)("backgroundColor", ctx.gaugeApertura1BackgroundColor)("size", ctx.gaugeApertura1Size);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.gaugeChiusura1Type)("value", ctx.gaugeChiusura1Value)("max", ctx.gaugeChiusura1Max)("label", ctx.gaugeChiusura1Label)("append", ctx.gaugeChiusura1AppendText)("thick", ctx.gaugeChiusura1Thickness)("foregroundColor", ctx.gaugeChiusura1ForegroundColor)("backgroundColor", ctx.gaugeChiusura1BackgroundColor)("size", ctx.gaugeChiusura1Size);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.gaugeApertura2Type)("value", ctx.gaugeApertura2Value)("min", ctx.gaugeApertura2Min)("max", ctx.gaugeApertura2Max)("label", ctx.gaugeApertura2Label)("append", ctx.gaugeApertura2AppendText)("thick", ctx.gaugeApertura2Thickness)("foregroundColor", ctx.gaugeApertura2ForegroundColor)("backgroundColor", ctx.gaugeApertura2BackgroundColor)("size", ctx.gaugeApertura2Size);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.gaugeChiusura2Type)("value", ctx.gaugeChiusura2Value)("min", ctx.gaugeChiusura2Min)("max", ctx.gaugeChiusura2Max)("label", ctx.gaugeChiusura2Label)("append", ctx.gaugeChiusura2AppendText)("thick", ctx.gaugeChiusura2Thickness)("foregroundColor", ctx.gaugeChiusura2ForegroundColor)("backgroundColor", ctx.gaugeChiusura2BackgroundColor)("size", ctx.gaugeChiusura2Size);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.secondaPortaChartBar)("merge", ctx.updatePortaChartBar2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.gaugeApertura3Type)("value", ctx.gaugeApertura3Value)("min", ctx.gaugeApertura3Min)("max", ctx.gaugeApertura3Max)("label", ctx.gaugeApertura3Label)("append", ctx.gaugeApertura3AppendText)("thick", ctx.gaugeApertura3Thickness)("foregroundColor", ctx.gaugeApertura3ForegroundColor)("backgroundColor", ctx.gaugeApertura3BackgroundColor)("size", ctx.gaugeApertura3Size);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.gaugeChiusura3Type)("value", ctx.gaugeChiusura3Value)("min", ctx.gaugeChiusura3Min)("max", ctx.gaugeChiusura3Max)("label", ctx.gaugeChiusura3Label)("append", ctx.gaugeChiusura3AppendText)("thick", ctx.gaugeChiusura3Thickness)("foregroundColor", ctx.gaugeChiusura3ForegroundColor)("backgroundColor", ctx.gaugeChiusura3BackgroundColor)("size", ctx.gaugeChiusura3Size);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.terzaPortaChartBar)("merge", ctx.updatePortaChartBar3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("text-48 mat-color-", ctx.statCardList[0].color, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.statCardList[0].icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.statCardList[0].title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("m-0 mat-color-", ctx.statCardList[0].color, " text-25");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.statCardList[0].amount);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("text-48 mat-color-", ctx.statCardList[1].color, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.statCardList[1].icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.statCardList[1].title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("m-0 mat-color-", ctx.statCardList[1].color, " text-25");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.statCardList[1].amount);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("text-48 mat-color-", ctx.statCardList[2].color, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.statCardList[2].icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.statCardList[2].title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("m-0 mat-color-", ctx.statCardList[2].color, " text-25");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](87, 92, ctx.statCardList[2].amount));
        }
      },
      directives: [ngx_echarts__WEBPACK_IMPORTED_MODULE_5__["ɵa"], ngx_gauge__WEBPACK_IMPORTED_MODULE_6__["ɵa"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]],
      pipes: [_shared_pipes_number_pipe__WEBPACK_IMPORTED_MODULE_10__["NumberFormatPipe"]],
      styles: ["#graph-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin-top: -3vh !important;\n  background-color: #032d62 !important;\n  \n  box-shadow: 0 0 0 10in #032d62;\n}\n\n.chart-container[_ngcontent-%COMP%] {\n  width: 95%;\n}\n\n.ngx-gauge-ap-1[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10%;\n  left: 70%;\n}\n\n.ngx-gauge-chius-1[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10%;\n  left: 82%;\n}\n\n.ngx-gauge-ap-2[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 38%;\n  left: 70%;\n}\n\n.ngx-gauge-chius-2[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 38%;\n  left: 82%;\n}\n\n.ngx-gauge-ap-3[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 66%;\n  left: 70%;\n}\n\n.ngx-gauge-chius-3[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 66%;\n  left: 82%;\n}\n\n.graph-1[_ngcontent-%COMP%] {\n  margin-top: -6%;\n  width: 56vw;\n}\n\n.redline[_ngcontent-%COMP%] {\n  position: relative;\n  top: 92px;\n  left: 16.8px;\n  height: 1px;\n  width: 92%;\n  border: none;\n  background-color: #ff0000 !important;\n}\n\n.graph-2[_ngcontent-%COMP%] {\n  margin-top: -19%;\n  width: 56vw;\n}\n\n.graph-3[_ngcontent-%COMP%] {\n  margin-top: -34%;\n  width: 56vw;\n}\n\n.borders[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 80vw;\n  height: 1px;\n  background-color: rgba(255, 255, 255, 0.342);\n  top: 34vh;\n  left: 2.5vw;\n  box-shadow: 0 26.5vh 0 0 rgba(255, 255, 255, 0.342);\n}\n\n.grid[_ngcontent-%COMP%] {\n  display: grid !important;\n  grid-template-columns: repeat(1, 107vh) !important;\n  grid-template-rows: repeat(2, 42vh);\n}\n\n.mt--72[_ngcontent-%COMP%] {\n  margin-top: -5% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvb3RoZXJzL2FwcC1wb3J0ZS9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXHRlbGVtZXRyeVxcYW5ndWxhci10cmFtLXRlbGVtZXRyeS9zcmNcXGFwcFxcdmlld3NcXG90aGVyc1xcYXBwLXBvcnRlXFxhcHAtcG9ydGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL290aGVycy9hcHAtcG9ydGUvYXBwLXBvcnRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksV0FBVztFQUNYLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0Isb0NBQW9DO0VBQ3BDLCtDQUFBO0VBQ0EsOEJBQThCO0FDQWxDOztBREdBO0VBRUksVUFBVTtBQ0RkOztBRElBO0VBRUksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0FDRmI7O0FES0E7RUFFSSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7QUNIYjs7QURNQTtFQUVJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztBQ0piOztBRE9BO0VBRUksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0FDTGI7O0FEUUE7RUFFSSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7QUNOYjs7QURTQTtFQUVJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztBQ1BiOztBRFVBO0VBRUksZUFBZTtFQUNmLFdBQVc7QUNSZjs7QURXQTtFQUVJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0VBQ1YsWUFBWTtFQUNaLG9DQUFvQztBQ1R4Qzs7QURZQTtFQUVJLGdCQUFnQjtFQUNoQixXQUFXO0FDVmY7O0FEYUE7RUFFSSxnQkFBZ0I7RUFDaEIsV0FBVztBQ1hmOztBRGNBO0VBRUksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsNENBQTRDO0VBQzVDLFNBQVM7RUFDVCxXQUFXO0VBQ1gsbURBQW1EO0FDWnZEOztBRGVBO0VBRUksd0JBQXdCO0VBQ3hCLGtEQUFrRDtFQUNsRCxtQ0FBbUM7QUNidkM7O0FEZ0JBO0VBRUksMEJBQTBCO0FDZDlCIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvb3RoZXJzL2FwcC1wb3J0ZS9hcHAtcG9ydGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZ3JhcGgtY29udGFpbmVyXHJcbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTN2aCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAzMmQ2MiAhaW1wb3J0YW50O1xyXG4gICAgLyogdG8gZ2l2ZSB0aGUgZW50aXJlIHBhZ2UgdGhlIGludGVudGVkIGNvbG9yICovXHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxMGluICMwMzJkNjI7ICBcclxufVxyXG5cclxuLmNoYXJ0LWNvbnRhaW5lclxyXG57XHJcbiAgICB3aWR0aDogOTUlO1xyXG59XHJcblxyXG4ubmd4LWdhdWdlLWFwLTFcclxue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMCU7XHJcbiAgICBsZWZ0OiA3MCU7XHJcbn1cclxuXHJcbi5uZ3gtZ2F1Z2UtY2hpdXMtMVxyXG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIGxlZnQ6IDgyJTtcclxufVxyXG5cclxuLm5neC1nYXVnZS1hcC0yXHJcbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzglO1xyXG4gICAgbGVmdDogNzAlO1xyXG59XHJcblxyXG4ubmd4LWdhdWdlLWNoaXVzLTJcclxue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzOCU7XHJcbiAgICBsZWZ0OiA4MiU7XHJcbn1cclxuXHJcbi5uZ3gtZ2F1Z2UtYXAtM1xyXG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDY2JTtcclxuICAgIGxlZnQ6IDcwJTtcclxufVxyXG5cclxuLm5neC1nYXVnZS1jaGl1cy0zXHJcbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNjYlO1xyXG4gICAgbGVmdDogODIlO1xyXG59XHJcblxyXG4uZ3JhcGgtMVxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiAtNiU7XHJcbiAgICB3aWR0aDogNTZ2dztcclxufVxyXG5cclxuLnJlZGxpbmVcclxue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA5MnB4O1xyXG4gICAgbGVmdDogMTYuOHB4O1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICB3aWR0aDogOTIlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZ3JhcGgtMlxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiAtMTklO1xyXG4gICAgd2lkdGg6IDU2dnc7XHJcbn1cclxuXHJcbi5ncmFwaC0zXHJcbntcclxuICAgIG1hcmdpbi10b3A6IC0zNCU7XHJcbiAgICB3aWR0aDogNTZ2dztcclxufVxyXG5cclxuLmJvcmRlcnNcclxue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDgwdnc7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNDIpO1xyXG4gICAgdG9wOiAzNHZoO1xyXG4gICAgbGVmdDogMi41dnc7XHJcbiAgICBib3gtc2hhZG93OiAwIDI2LjV2aCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM0Mik7XHJcbn1cclxuXHJcbi5ncmlkXHJcbntcclxuICAgIGRpc3BsYXk6IGdyaWQgIWltcG9ydGFudDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDEwN3ZoKSAhaW1wb3J0YW50O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNDJ2aCk7XHJcbn1cclxuXHJcbi5tdC0tNzJcclxue1xyXG4gICAgbWFyZ2luLXRvcDogLTUlICFpbXBvcnRhbnQ7XHJcbn0iLCIjZ3JhcGgtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLXRvcDogLTN2aCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMyZDYyICFpbXBvcnRhbnQ7XG4gIC8qIHRvIGdpdmUgdGhlIGVudGlyZSBwYWdlIHRoZSBpbnRlbnRlZCBjb2xvciAqL1xuICBib3gtc2hhZG93OiAwIDAgMCAxMGluICMwMzJkNjI7XG59XG5cbi5jaGFydC1jb250YWluZXIge1xuICB3aWR0aDogOTUlO1xufVxuXG4ubmd4LWdhdWdlLWFwLTEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAlO1xuICBsZWZ0OiA3MCU7XG59XG5cbi5uZ3gtZ2F1Z2UtY2hpdXMtMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMCU7XG4gIGxlZnQ6IDgyJTtcbn1cblxuLm5neC1nYXVnZS1hcC0yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM4JTtcbiAgbGVmdDogNzAlO1xufVxuXG4ubmd4LWdhdWdlLWNoaXVzLTIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzglO1xuICBsZWZ0OiA4MiU7XG59XG5cbi5uZ3gtZ2F1Z2UtYXAtMyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2NiU7XG4gIGxlZnQ6IDcwJTtcbn1cblxuLm5neC1nYXVnZS1jaGl1cy0zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDY2JTtcbiAgbGVmdDogODIlO1xufVxuXG4uZ3JhcGgtMSB7XG4gIG1hcmdpbi10b3A6IC02JTtcbiAgd2lkdGg6IDU2dnc7XG59XG5cbi5yZWRsaW5lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDkycHg7XG4gIGxlZnQ6IDE2LjhweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiA5MiU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMCAhaW1wb3J0YW50O1xufVxuXG4uZ3JhcGgtMiB7XG4gIG1hcmdpbi10b3A6IC0xOSU7XG4gIHdpZHRoOiA1NnZ3O1xufVxuXG4uZ3JhcGgtMyB7XG4gIG1hcmdpbi10b3A6IC0zNCU7XG4gIHdpZHRoOiA1NnZ3O1xufVxuXG4uYm9yZGVycyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDgwdnc7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzQyKTtcbiAgdG9wOiAzNHZoO1xuICBsZWZ0OiAyLjV2dztcbiAgYm94LXNoYWRvdzogMCAyNi41dmggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNDIpO1xufVxuXG4uZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQgIWltcG9ydGFudDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMTA3dmgpICFpbXBvcnRhbnQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDQydmgpO1xufVxuXG4ubXQtLTcyIHtcbiAgbWFyZ2luLXRvcDogLTUlICFpbXBvcnRhbnQ7XG59XG4iXX0= */"],
      data: {
        animation: app_shared_animations_matx_animations__WEBPACK_IMPORTED_MODULE_2__["matxAnimations"]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppPorteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: "app-blank",
          templateUrl: "./app-porte.component.html",
          styleUrls: ["./app-porte.component.scss"],
          animations: app_shared_animations_matx_animations__WEBPACK_IMPORTED_MODULE_2__["matxAnimations"]
        }]
      }], function () {
        return [{
          type: app_shared_services_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"]
        }, {
          type: app_views_data_saver_service__WEBPACK_IMPORTED_MODULE_4__["DataSaverService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/others/others.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/views/others/others.module.ts ***!
    \***********************************************/

  /*! exports provided: OthersModule */

  /***/
  function srcAppViewsOthersOthersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OthersModule", function () {
      return OthersModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @swimlane/ngx-datatable */
    "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
    /* harmony import */


    var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng2-file-upload */
    "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! app/shared/shared-material.module */
    "./src/app/shared/shared-material.module.ts");
    /* harmony import */


    var _others_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./others.routing */
    "./src/app/views/others/others.routing.ts");
    /* harmony import */


    var _app_hvac_app_hvac_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app-hvac/app-hvac.component */
    "./src/app/views/others/app-hvac/app-hvac.component.ts");
    /* harmony import */


    var _app_passeggeri_app_passeggeri_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./app-passeggeri/app-passeggeri.component */
    "./src/app/views/others/app-passeggeri/app-passeggeri.component.ts");
    /* harmony import */


    var _app_cuscinetti_app_cuscinetti_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./app-cuscinetti/app-cuscinetti.component */
    "./src/app/views/others/app-cuscinetti/app-cuscinetti.component.ts");
    /* harmony import */


    var _app_porte_app_porte_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./app-porte/app-porte.component */
    "./src/app/views/others/app-porte/app-porte.component.ts");
    /* harmony import */


    var ngx_echarts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ngx-echarts */
    "./node_modules/ngx-echarts/__ivy_ngcc__/fesm2015/ngx-echarts.js");
    /* harmony import */


    var ngx_gauge__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ngx-gauge */
    "./node_modules/ngx-gauge/__ivy_ngcc__/fesm2015/ngx-gauge.js");

    var OthersModule = /*#__PURE__*/_createClass(function OthersModule() {
      _classCallCheck(this, OthersModule);
    });

    OthersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: OthersModule
    });
    OthersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function OthersModule_Factory(t) {
        return new (t || OthersModule)();
      },
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_9__["SharedMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_15__["NgxEchartsModule"], ngx_gauge__WEBPACK_IMPORTED_MODULE_16__["NgxGaugeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_others_routing__WEBPACK_IMPORTED_MODULE_10__["OthersRoutes"])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OthersModule, {
        declarations: [_app_hvac_app_hvac_component__WEBPACK_IMPORTED_MODULE_11__["AppHvacComponent"], _app_passeggeri_app_passeggeri_component__WEBPACK_IMPORTED_MODULE_12__["AppPasseggeriComponent"], _app_cuscinetti_app_cuscinetti_component__WEBPACK_IMPORTED_MODULE_13__["AppCuscinettiComponent"], _app_porte_app_porte_component__WEBPACK_IMPORTED_MODULE_14__["AppPorteComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_9__["SharedMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_15__["NgxEchartsModule"], ngx_gauge__WEBPACK_IMPORTED_MODULE_16__["NgxGaugeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OthersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_9__["SharedMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_15__["NgxEchartsModule"], ngx_gauge__WEBPACK_IMPORTED_MODULE_16__["NgxGaugeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_others_routing__WEBPACK_IMPORTED_MODULE_10__["OthersRoutes"])],
          declarations: [_app_hvac_app_hvac_component__WEBPACK_IMPORTED_MODULE_11__["AppHvacComponent"], _app_passeggeri_app_passeggeri_component__WEBPACK_IMPORTED_MODULE_12__["AppPasseggeriComponent"], _app_cuscinetti_app_cuscinetti_component__WEBPACK_IMPORTED_MODULE_13__["AppCuscinettiComponent"], _app_porte_app_porte_component__WEBPACK_IMPORTED_MODULE_14__["AppPorteComponent"]],
          providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/others/others.routing.ts":
  /*!************************************************!*\
    !*** ./src/app/views/others/others.routing.ts ***!
    \************************************************/

  /*! exports provided: OthersRoutes */

  /***/
  function srcAppViewsOthersOthersRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OthersRoutes", function () {
      return OthersRoutes;
    });
    /* harmony import */


    var _app_cuscinetti_app_cuscinetti_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./app-cuscinetti/app-cuscinetti.component */
    "./src/app/views/others/app-cuscinetti/app-cuscinetti.component.ts");
    /* harmony import */


    var _app_hvac_app_hvac_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app-hvac/app-hvac.component */
    "./src/app/views/others/app-hvac/app-hvac.component.ts");
    /* harmony import */


    var _app_passeggeri_app_passeggeri_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-passeggeri/app-passeggeri.component */
    "./src/app/views/others/app-passeggeri/app-passeggeri.component.ts");
    /* harmony import */


    var _app_porte_app_porte_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-porte/app-porte.component */
    "./src/app/views/others/app-porte/app-porte.component.ts");

    var OthersRoutes = [{
      path: '',
      children: [{
        path: 'telemetryHVAC',
        component: _app_hvac_app_hvac_component__WEBPACK_IMPORTED_MODULE_1__["AppHvacComponent"],
        data: {
          title: 'HVAC',
          breadcrumb: ''
        }
      }, {
        path: 'telemetryPasseggeri',
        component: _app_passeggeri_app_passeggeri_component__WEBPACK_IMPORTED_MODULE_2__["AppPasseggeriComponent"],
        data: {
          title: 'Passeggeri',
          breadcrumb: ''
        }
      }, {
        path: 'telemetryCuscinetti',
        component: _app_cuscinetti_app_cuscinetti_component__WEBPACK_IMPORTED_MODULE_0__["AppCuscinettiComponent"],
        data: {
          title: 'Cuscinetti',
          breadcrumb: ''
        }
      }, {
        path: 'telemetryPorte',
        component: _app_porte_app_porte_component__WEBPACK_IMPORTED_MODULE_3__["AppPorteComponent"],
        data: {
          title: 'Porte',
          breadcrumb: ''
        }
      }]
    }];
    /***/
  }
}]);
//# sourceMappingURL=views-others-others-module-es5.js.map