(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n<app-bank-details></app-bank-details>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'bank';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _bank_details_bank_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bank-details/bank-details.component */ "./src/app/bank-details/bank-details.component.ts");






// import { MatPaginatorModule  } from '@angular/material';

// import {MatTableModule} from '@angular/material/table'; 
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _bank_details_bank_details_component__WEBPACK_IMPORTED_MODULE_10__["BankDetailsComponent"]
            ],
            exports: [],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                // MatTableModule,
                // MatPaginatorModule ,
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__["Ng2SearchPipeModule"],
                // BrowserAnimationsModule,
                ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["NgMultiSelectDropDownModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bank-details/bank-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/bank-details/bank-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg{\r\n\t/*background-color: #abcbcd;*/\r\n\tpadding: 15px;\r\n\tmargin: 5px;\r\n}\r\n.tableStyle{\r\n\tmargin-left: 30px;\r\n}\r\n.buttspace{\r\n\tmargin-right: 20px;\r\n\tmargin-left: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFuay1kZXRhaWxzL2JhbmstZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsNkJBQTZCO0NBQzdCLGFBQWE7Q0FDYixXQUFXO0FBQ1o7QUFDQTtDQUNDLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLGlCQUFpQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2JhbmstZGV0YWlscy9iYW5rLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ3tcclxuXHQvKmJhY2tncm91bmQtY29sb3I6ICNhYmNiY2Q7Ki9cclxuXHRwYWRkaW5nOiAxNXB4O1xyXG5cdG1hcmdpbjogNXB4O1xyXG59XHJcbi50YWJsZVN0eWxle1xyXG5cdG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcbi5idXR0c3BhY2V7XHJcblx0bWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG5cdG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/bank-details/bank-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/bank-details/bank-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card bg\">\r\n  <!-- <div class=\"card-header card-header-danger\"> -->\r\n    <div class=\"row\">\r\n    \t<div class=\"col-md-2\">\r\n    \t\t\t<ng-multiselect-dropdown\r\n    \t\t\t  [placeholder]=\"'custom placeholder'\"\r\n    \t\t\t  [data]=\"dropdownList\"\r\n    \t\t\t  [(ngModel)]=\"selectedItems\"\r\n    \t\t\t  [settings]=\"dropdownSettings\"\r\n    \t\t\t  (onSelect)=\"onItemSelect($event)\"\r\n    \t\t\t  (onDeSelect)=\"onItemDeSelect($event)\"\r\n    \t\t\t>\r\n    \t\t\t</ng-multiselect-dropdown>\r\n    \t</div>\r\n    \t\t<form class=\"col-md-3\">\r\n          <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"searchText\" autocomplete=\"off\" placeholder=\"&#61442;  Start searching\">\r\n    \t\t</form>\r\n      <!-- <div class=\" col-md-1\"></div> -->\r\n        <label>Select size for your table(Paginate)</label>\r\n        <select [(ngModel)]=\"selectedValue\" class=\"col-md-1\">\r\n          <option *ngFor=\"let c of pagination\">{{c.val}}</option>\r\n        </select>\r\n      <div class=\"col-md-1\"></div>\r\n        <button (click)='favorites($event)' type='button' class=\"btn btn-success buttspace\"> My Favorite Banks</button>\r\n        <button (click)='backtoall($event)' type='button' class=\"btn btn-success\">Back to all Banks</button>\r\n    </div>\r\n  <!-- </div> -->\r\n</div>\r\n\r\n  <!-- <div class=\"container\"> -->\r\n    <table class=\"table table-striped tableStyle\">\r\n      <thead>\r\n        <tr>\r\n          <th>Favorites (Add or Remove)</th>\r\n          <th>ifsc</th>\r\n          <th>bank_id</th>\r\n          <th>branch</th>\r\n          <th>address</th>\r\n          <th>city</th>\r\n          <th>district</th>\r\n          <th>state</th>\r\n          <th>bank_name</th>\r\n        </tr>\r\n    </thead>\r\n    \r\n    <tbody>\r\n      <tr *ngFor=\"let item of ourData | filter:searchText | paginate: { itemsPerPage: selectedValue, currentPage: p }\" >\r\n        <td><p ng-if=\"item.flag\"><button (click)='handleClick($event, item)' type='button' class=\"btn btn-danger\"> {{buttonName}}</button></p></td>\r\n        <td>{{item.ifsc}}</td>\r\n        <td>{{ item.bank_id }}</td>\r\n        <td>{{ item.branch }}</td>\r\n        <td>{{ item.address }}</td>\r\n        <td>{{ item.city }}</td>\r\n        <td>{{ item.district }}</td>\r\n        <td>{{ item.state }}</td>\r\n        <td>{{ item.bank_name}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <!-- </div> -->\r\n\r\n<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n<!-- </div> -->"

/***/ }),

/***/ "./src/app/bank-details/bank-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/bank-details/bank-details.component.ts ***!
  \********************************************************/
/*! exports provided: BankDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankDetailsComponent", function() { return BankDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var BankDetailsComponent = /** @class */ (function () {
    function BankDetailsComponent(httpClient) {
        this.httpClient = httpClient;
        this.favorite = true;
        this.buttonName = 'add to favorite';
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.datathere = 0;
        this.selectedPlace = [];
        this.p = 1;
        this.server_url = "https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI";
        this.server_url1 = "https://vast-shore-74260.herokuapp.com/banks?city=";
        this.favLocalData = [];
        this.ourData = [];
        this.abc = {};
        this.pagination = [];
        this.selectedValue = [];
        this.selectedValue1 = [];
    }
    BankDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pagination = [
            { id: 1, val: "5" },
            { id: 2, val: "10" },
            { id: 3, val: "15" },
            { id: 4, val: "20" },
            { id: 5, val: "50" }
        ];
        this.selectedValue1 = [{ val: "5" }];
        this.selectedValue = this.selectedValue1["val"];
        this.dropdownList = [
            { item_id: 1, item_text: 'MUMBAI' },
            { item_id: 2, item_text: 'BANGALORE' },
            { item_id: 3, item_text: 'PUNE' },
            { item_id: 4, item_text: 'NAVSARI' },
            { item_id: 5, item_text: 'NEW DELHI' }
        ];
        this.selectedItems = [
            { item_id: 1, item_text: 'MUMBAI' },
        ];
        this.dropdownSettings = {
            singleSelection: true,
            idField: 'item_id',
            textField: 'item_text',
            itemsShowLimit: 3,
        };
        // Get the data from Api (by default it shows details of banks in Mumbai)
        this.httpClient.get(this.server_url).subscribe(function (res) {
            _this.ourData = res;
        });
    };
    // showing the banks & it's details for a particular place when select 
    BankDetailsComponent.prototype.onItemSelect = function (item) {
        var _this = this;
        console.log(item);
        this.selectedPlace = item;
        this.abc = item["item_text"];
        this.httpClient.get(this.server_url1 + this.abc).subscribe(function (res) {
            _this.ourData = res;
        });
    };
    BankDetailsComponent.prototype.onItemDeSelect = function (item) {
        //console.log(item)
    };
    // Hanlde when click on add to favourite button(or remove)
    BankDetailsComponent.prototype.handleClick = function (event, item) {
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            if (key == item["ifsc"]) {
                this.datathere = 1;
            }
        }
        if (this.datathere == 0) {
            // item["flag"] = true
            localStorage.setItem(item["ifsc"], JSON.stringify(item));
            alert("THE BANK ( IFSC: " + item["ifsc"] + ") ADDED IN TO FAVORITES");
        }
        else {
            localStorage.removeItem(item["ifsc"]);
            alert("THE BANK ( IFSC: " + item["ifsc"] + ") REMOVED FROM FAVORITES");
            this.datathere = 0;
        }
    };
    //handle when click on my favorite banks button 
    BankDetailsComponent.prototype.favorites = function (event) {
        var ourData_temp = [];
        this.ourData = [];
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            ourData_temp.push(localStorage.getItem(key));
            this.ourData.push(JSON.parse(localStorage.getItem(key)));
        }
    };
    //handles when click on "back to all Banks" button     
    BankDetailsComponent.prototype.backtoall = function (event) {
        if (this.selectedPlace.length == 0) {
            // alert("in []"+ JSON.stringify(this.selectedItems[0]) + typeof(this.selectedItems))
            this.onItemSelect(this.selectedItems[0]);
        }
        else {
            // alert("in else" + JSON.stringify(this.selectedPlace) + typeof(this.selectedPlace))
            this.onItemSelect(this.selectedPlace);
        }
    };
    BankDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bank-details',
            template: __webpack_require__(/*! ./bank-details.component.html */ "./src/app/bank-details/bank-details.component.html"),
            styles: [__webpack_require__(/*! ./bank-details.component.css */ "./src/app/bank-details/bank-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BankDetailsComponent);
    return BankDetailsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Anjana\Desktop\bank_app\angular-test\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map