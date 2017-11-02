webpackJsonp([0],{

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoalPageModule", function() { return SoalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__soal__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SoalPageModule = (function () {
    function SoalPageModule() {
    }
    return SoalPageModule;
}());
SoalPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__soal__["a" /* SoalPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__soal__["a" /* SoalPage */]),
        ],
    })
], SoalPageModule);

//# sourceMappingURL=soal.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SoalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SoalPage = (function () {
    function SoalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SoalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SoalPage');
    };
    SoalPage.prototype.quiz = function () {
        this.navCtrl.push("QuizPage");
    };
    return SoalPage;
}());
SoalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-soal',template:/*ion-inline-start:"D:\Sekolah\kelasxii\PK7\Ionic3\erd\EbookFrontEnd\src\pages\soal\soal.html"*/'<ion-content class="home" padding>\n	<button class="tombol3" (click)="quiz()" ion-button><ion-icon name="md-arrow-back"></ion-icon></button>\n	<h2 class="erd2 materi1">Quiz</h2>\n	<br>\n	<h5 class="erd2">Apakah Kepanjangan ERD?</h5>\n	<ion-list no-lines radio-group [(ngModel)]="relationship">\n  <ion-item class="trans">\n    <ion-label class="radio-value">Entitiy Relationalship Diagram</ion-label>\n    <ion-radio item-left color="light" value="Entitiy Relationalship Diagram" class="radio"></ion-radio>\n  </ion-item>\n  <ion-item class="trans">\n    <ion-label class="radio-value">Entity Rational Diagram</ion-label>\n    <ion-radio item-left color="light" class="radio"></ion-radio>\n  </ion-item>\n  <ion-item class="trans">\n    <ion-label class="radio-value">Entitas Rasio Dialog</ion-label>\n    <ion-radio item-left color="light" value="Entitas Rasio Dialog" class="radio"></ion-radio>\n  </ion-item>\n  <ion-item class="trans">\n    <ion-label class="radio-value">Entity Relation Diagram</ion-label>\n    <ion-radio item-left color="light" value="Entity Relation Diagram" class="radio"></ion-radio>\n  </ion-item>\n</ion-list>\n<div id="navigation">\n	<button class="nav-button-left" ion-button><ion-icon name="ios-arrow-back"></ion-icon></button>\n	<div class="num-page">1</div>\n	<button class="nav-button-right" ion-button><ion-icon name="ios-arrow-forward"></ion-icon></button>\n</div>\n</ion-content>\n'/*ion-inline-end:"D:\Sekolah\kelasxii\PK7\Ionic3\erd\EbookFrontEnd\src\pages\soal\soal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], SoalPage);

//# sourceMappingURL=soal.js.map

/***/ })

});
//# sourceMappingURL=0.js.map