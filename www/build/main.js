webpackJsonp([3],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_long_press__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_api_api__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(22);
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
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminPage = /** @class */ (function () {
    function AdminPage(navCtrl, LongPressModule, apiProvider, navParams, AlertControl) {
        this.navCtrl = navCtrl;
        this.LongPressModule = LongPressModule;
        this.apiProvider = apiProvider;
        this.navParams = navParams;
        this.AlertControl = AlertControl;
        this.users = new Array();
        this.ifData = false;
    }
    AdminPage.prototype.setAlert = function (titleAlert, contentAlert) {
        var alert = this.AlertControl.create({
            title: titleAlert,
            subTitle: contentAlert,
            buttons: ['Fermer']
        });
        alert.present();
    };
    AdminPage.prototype.pressed = function () {
        console.log('pressed');
    };
    AdminPage.prototype.active = function () {
        console.log('active');
    };
    AdminPage.prototype.fillData = function () {
        var _this = this;
        this.apiProvider.getUsers().subscribe(function (data) {
            if (data['error'] == 'SUCCESS') {
                _this.users = data['data'];
                if (_this.users.length != 0) {
                    _this.ifData = true;
                }
            }
        });
    };
    AdminPage.prototype.ionViewDidLoad = function () {
        this.fillData();
    };
    AdminPage.prototype.enableUser = function (id) {
        var _this = this;
        this.apiProvider.enableUser(id).subscribe(function (data) {
            if (data['error'] === 'SUCCESS') {
                _this.setAlert('Succès', 'L\'utilisateur à été désactivé.');
                _this.fillData();
            }
        });
    };
    AdminPage.prototype.disableUser = function (id) {
        var _this = this;
        this.apiProvider.disableUser(id).subscribe(function (data) {
            if (data['error'] === 'SUCCESS') {
                _this.setAlert('Attention', 'L\'Utilisateur à été désactivé');
                _this.fillData();
            }
        });
    };
    AdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-admin',template:/*ion-inline-start:"C:\Users\paul-\Desktop\home.paulsouille.fr\mexicainOutils\mexicainForm\src\pages\admin\admin.html"*/'<ion-header>\n  <ion-navbar>\n      <button ion-button menuToggle>\n    <ion-icon name="menu"></ion-icon>\n  </button>\n      <ion-title>Mexicano</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item *ngIf="!ifData" class="square">\n      <p>Pas d\'utilisateurs</p>\n\n  </ion-item>\n\n  <ion-col col-10 style="margin: auto; padding-left: 1em;" *ngFor="let user of users">\n\n\n    \n    <ion-item class="square">\n          <p class="white">{{user.name}}</p>\n          <button *ngIf="user.isActive==1" ion-button clear color="light" class="btnDisable" (click)="disableUser(user.id)">Désactiver</button>\n          <button *ngIf="user.isActive==0" ion-button clear color="light" class="btnEnable" (click)="enableUser(user.id)">Activer</button>\n      </ion-item>\n  </ion-col>\n</ion-content>'/*ion-inline-end:"C:\Users\paul-\Desktop\home.paulsouille.fr\mexicainOutils\mexicainForm\src\pages\admin\admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_long_press__["a" /* LongPressModule */], __WEBPACK_IMPORTED_MODULE_1__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
    ], AdminPage);
    return AdminPage;
}());

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ComponentModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_expandable_expandable__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_api_api__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(173);
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
 * Generated class for the DisplayEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ComponentModule = /** @class */ (function () {
    function ComponentModule() {
    }
    return ComponentModule;
}());

var DisplayEventPage = /** @class */ (function () {
    function DisplayEventPage(navCtrl, navParams, apiProvider, iab, AlertControl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.iab = iab;
        this.AlertControl = AlertControl;
        this.events = new Array();
        this.itemExpandHeight = 50;
        this.ifData = false;
    }
    DisplayEventPage_1 = DisplayEventPage;
    DisplayEventPage.prototype.setAlert = function (titleAlert, contentAlert) {
        var alert = this.AlertControl.create({
            title: titleAlert,
            subTitle: contentAlert,
            buttons: ['Fermer']
        });
        alert.present();
    };
    DisplayEventPage.prototype.isLink = function (message) {
        return (message.includes('https://'));
    };
    DisplayEventPage.prototype.goInternet = function (response) {
        this.iab.create(response);
    };
    DisplayEventPage.prototype.expandItem = function (item) {
        this.events.map(function (listItem) {
            if (item == listItem) {
                listItem.expanded = !listItem.expanded;
            }
            else {
                listItem.expanded = false;
            }
            return listItem;
        });
    };
    DisplayEventPage.prototype.fillData = function () {
        var _this = this;
        this.apiProvider.getEvent().subscribe(function (data) {
            if (data['error'] == 'SUCCESS') {
                _this.events = data['data'];
                if (_this.events.length != 0) {
                    _this.ifData = true;
                }
                _this.events.map(function (oneEvent, i) {
                    oneEvent.expanded = false;
                    if (_this.isLink(oneEvent.response)) {
                        oneEvent.isLink = true;
                    }
                    else {
                        oneEvent.isLink = false;
                    }
                });
            }
        });
    };
    DisplayEventPage.prototype.ionViewDidLoad = function () {
        this.user_id = localStorage.getItem('user_id');
        this.apiKey = localStorage.getItem('apiKey');
        this.role_id = localStorage.getItem('role_id');
        this.fillData();
    };
    DisplayEventPage.prototype.delete = function (id) {
        var _this = this;
        this.apiProvider.deleteEvent(id, this.apiKey, this.user_id).subscribe(function (data) {
            if (data['error'] === "SUCCESS") {
                _this.setAlert('Succès', 'Element supprimé.');
                _this.fillData();
            }
        });
    };
    DisplayEventPage.prototype.askDelete = function (id) {
        var _this = this;
        this.apiProvider.askDelete(id).subscribe(function (data) {
            if (data['error'] === 'SUCCESS') {
                _this.setAlert('Succès', 'La demande à été effectuée.');
                _this.fillData();
            }
        });
    };
    DisplayEventPage.prototype.removeDelete = function (id) {
        var _this = this;
        this.apiProvider.removeDelete(id).subscribe(function (data) {
            if (data['error'] === 'SUCCESS') {
                _this.setAlert('Succès', 'La demande à été supprimée.');
                _this.fillData();
            }
        });
    };
    DisplayEventPage = DisplayEventPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-display-event',template:/*ion-inline-start:"C:\Users\paul-\Desktop\home.paulsouille.fr\mexicainOutils\mexicainForm\src\pages\display-event\display-event.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>Mexicano</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <button detail-none (click)="expandItem(event)" ion-item *ngFor="let event of events">\n\n  \n\n            <h2>{{event.event}}</h2>     \n\n            <expandable [expandHeight]="itemExpandHeight" [expanded]="event.expanded">\n\n     \n\n                    <p *ngIf="event.isLink" class="link" (click)="goInternet(event.response)">Liens</p>\n\n                    <p *ngIf="!event.isLink">{{event.response}}</p>\n\n                    <p class="red">Créateur : {{event.name}}</p>\n\n            </expandable>\n\n            <button *ngIf="role_id==\'1\'" ion-button clear item-end (click)="delete(event.id)">Delete</button>\n\n            <button *ngIf="role_id==\'2\' " ion-button clear item-end (click)="askDelete(event.id)">Supprimer</button>\n\n\n\n        </button>\n\n      </ion-list>\n\n\n\n    <ion-item *ngIf="!ifData" class="square">\n\n        <p>Pas d\'évènements</p>\n\n\n\n    </ion-item>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\paul-\Desktop\home.paulsouille.fr\mexicainOutils\mexicainForm\src\pages\display-event\display-event.html"*/,
        }),
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                DisplayEventPage_1,
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__components_expandable_expandable__["a" /* ExpandableComponent */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* IonicPageModule */].forChild(DisplayEventPage_1),
            ],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__providers_api_api__["a" /* ApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_api_api__["a" /* ApiProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object])
    ], DisplayEventPage);
    return DisplayEventPage;
    var DisplayEventPage_1, _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=display-event.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_auth_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = /** @class */ (function () {
    function LoginPage(AuthService, formBuilder) {
        this.AuthService = AuthService;
        this.formBuilder = formBuilder;
        this.isApp = false;
        this.credentialsForm = this.formBuilder.group({
            login: [''],
            password: [''],
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        this.isApp = document.URL.startsWith('http://home.paulsouille.fr:8080/');
    };
    LoginPage.prototype.onSignIn = function () {
        this.AuthService.login(this.credentialsForm.controls['login'].value, this.credentialsForm.controls['password'].value);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\paul-\Desktop\home.paulsouille.fr\mexicainOutils\mexicainForm\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title text-center>\n\n            <img src="assets/imgs/mexicain.png" width="100">\n\n        </ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content text-center>\n\n    <p> MexicainJS</p>\n\n    <form [formGroup]="credentialsForm">\n\n\n\n        <ion-item>\n\n            <ion-label floating>Login</ion-label>\n\n            <ion-input [formControl]="credentialsForm.controls[\'login\']" value="" type="text"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Mot de passe</ion-label>\n\n            <ion-input [formControl]="credentialsForm.controls[\'password\']" value="" type="password"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-row>\n\n            <ion-col text-center>\n\n                <button ion-button block color="button" (click)="onSignIn()">\n\n        Connexion\n\n      </button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </form>\n\n    <a href="http://home.paulsouille.fr/download/mexicain.apk" *ngIf="isApp" >Télécharger l\'APK</a>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\paul-\Desktop\home.paulsouille.fr\mexicainOutils\mexicainForm\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 125:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 125;

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertTool; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertTool = /** @class */ (function () {
    function AlertTool(AlertController) {
        this.AlertController = AlertController;
    }
    AlertTool = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AlertTool);
    return AlertTool;
}());

//# sourceMappingURL=alert.tool.js.map

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin/admin.module": [
		319,
		2
	],
	"../pages/display-event/display-event.module": [
		320,
		1
	],
	"../pages/login/login.module": [
		321,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 168;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExpandableComponent = /** @class */ (function () {
    function ExpandableComponent(renderer) {
        this.renderer = renderer;
    }
    ExpandableComponent.prototype.ngAfterViewInit = function () {
        this.renderer.setElementStyle(this.expandWrapper.nativeElement, 'height', this.expandHeight + 'px');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('expandWrapper', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", Object)
    ], ExpandableComponent.prototype, "expandWrapper", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('expanded'),
        __metadata("design:type", Object)
    ], ExpandableComponent.prototype, "expanded", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('expandHeight'),
        __metadata("design:type", Object)
    ], ExpandableComponent.prototype, "expandHeight", void 0);
    ExpandableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'expandable',template:/*ion-inline-start:"C:\Users\paul-\Desktop\home.paulsouille.fr\mexicainOutils\mexicainForm\src\components\expandable\expandable.html"*/'<div #expandWrapper class=\'expand-wrapper\' [class.collapsed]="!expanded">\n    <ng-content></ng-content>\n  </div>\n  '/*ion-inline-end:"C:\Users\paul-\Desktop\home.paulsouille.fr\mexicainOutils\mexicainForm\src\components\expandable\expandable.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]) === "function" && _a || Object])
    ], ExpandableComponent);
    return ExpandableComponent;
    var _a;
}());

//# sourceMappingURL=expandable.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(239);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_alert_tool__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_display_event_display_event__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_vibration__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_admin_admin__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_long_press__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_api_api__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common_http__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_barcode_scanner__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_expandable_expandable__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_display_event_display_event__["a" /* DisplayEventPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_18__components_expandable_expandable__["a" /* ExpandableComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/admin/admin.module#AdminPageModule', name: 'AdminPage', segment: 'admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/display-event/display-event.module#DisplayEventPageModule', name: 'DisplayEventPage', segment: 'display-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_16__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12_ionic_long_press__["a" /* LongPressModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_display_event_display_event__["a" /* DisplayEventPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_admin_admin__["a" /* AdminPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_api_api__["a" /* ApiProvider */],
                __WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_vibration__["a" /* Vibration */],
                __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_0__tools_alert_tool__["a" /* AlertTool */],
                __WEBPACK_IMPORTED_MODULE_12_ionic_long_press__["a" /* LongPressModule */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_auth_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_display_event_display_event__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_admin_admin__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, events, statusBar, splashScreen, Auth) {
        var _this = this;
        this.platform = platform;
        this.events = events;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.Auth = Auth;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.user_id = "1";
        this.initializeApp();
        this.pages = [
            { title: 'Accueil', component: __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */] },
            { title: "Les évènements", component: __WEBPACK_IMPORTED_MODULE_1__pages_display_event_display_event__["a" /* DisplayEventPage */] }
        ];
        this.events.subscribe('user:changed', function (user_id) {
            _this.user_id = user_id;
            if (_this.user_id == "2") {
                _this.pages = [
                    { title: 'Accueil', component: __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */] },
                    { title: "Les évènements", component: __WEBPACK_IMPORTED_MODULE_1__pages_display_event_display_event__["a" /* DisplayEventPage */] }
                ];
            }
            else {
                _this.pages = [
                    { title: 'Accueil', component: __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */] },
                    { title: "Les évènements", component: __WEBPACK_IMPORTED_MODULE_1__pages_display_event_display_event__["a" /* DisplayEventPage */] },
                    { title: "Administration", component: __WEBPACK_IMPORTED_MODULE_8__pages_admin_admin__["a" /* AdminPage */] },
                ];
            }
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\paul-\Desktop\home.paulsouille.fr\mexicainOutils\mexicainForm\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n  <ion-footer>\n\n     <button menuClose ion-item (click)="Auth.logout()" >Se déconnecter  </button>\n\n</ion-footer>\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\paul-\Desktop\home.paulsouille.fr\mexicainOutils\mexicainForm\src\app\app.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_0__service_auth_service__["a" /* AuthService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiProvider = /** @class */ (function () {
    function ApiProvider(http) {
        this.http = http;
        this.baseUrl = "http://home.paulsouille.fr:3000";
    }
    ApiProvider.prototype.getEvent = function () {
        var url = this.baseUrl + '/event/get';
        return this.http.get("" + url);
    };
    ApiProvider.prototype.login = function (login, password) {
        var url = this.baseUrl + '/login?login=' + login + '&password=' + password;
        return this.http.get("" + url);
    };
    ApiProvider.prototype.addEvent = function (event, response, user_id) {
        var url = this.baseUrl + '/event/add?event=' + event + '&response=' + response + '&user_id=' + user_id;
        return this.http.get("" + url);
    };
    ApiProvider.prototype.deleteEvent = function (id, apiKey, user_id) {
        var url = this.baseUrl + '/event/delete?event_id=' + id + '&apiKey=' + apiKey + '&user_id=' + user_id;
        return this.http.get("" + url);
    };
    ApiProvider.prototype.askDelete = function (message_id) {
        var url = this.baseUrl + '/event/askDelete?message_id=' + message_id;
        return this.http.get("" + url);
    };
    ApiProvider.prototype.removeDelete = function (message_id) {
        var url = this.baseUrl + '/event/removeDelete?message_id=' + message_id;
        return this.http.get("" + url);
    };
    ApiProvider.prototype.enableUser = function (user_id) {
        var url = this.baseUrl + '/users/enableUser?user_id=' + user_id;
        return this.http.get("" + url);
    };
    ApiProvider.prototype.disableUser = function (user_id) {
        var url = this.baseUrl + '/users/disableUser?user_id=' + user_id;
        return this.http.get("" + url);
    };
    ApiProvider.prototype.getUsers = function () {
        var url = this.baseUrl + '/users/';
        return this.http.get("" + url);
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_alert_tool__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home_home__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_crypto_js__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_crypto_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = /** @class */ (function () {
    function AuthService(ApiProvider, events, AlertTool, App, AlertController) {
        this.ApiProvider = ApiProvider;
        this.events = events;
        this.AlertTool = AlertTool;
        this.App = App;
        this.AlertController = AlertController;
    }
    AuthService.prototype.setAlert = function (titleAlert, contentAlert) {
        var alert = this.AlertController.create({
            title: titleAlert,
            subTitle: contentAlert,
            buttons: ['Fermer']
        });
        alert.present();
    };
    AuthService.prototype.login = function (login, password) {
        var _this = this;
        this.ApiProvider.login(login, __WEBPACK_IMPORTED_MODULE_2_crypto_js___default.a.SHA256(password).toString(__WEBPACK_IMPORTED_MODULE_2_crypto_js___default.a.enc.Hex).toUpperCase()).subscribe(function (data) {
            if (data['error'] == 'ERROR_EMAIL') {
                _this.setAlert('Attention', 'Email incorrect.');
            }
            else {
                if (data['error'] == 'ERROR_PASSWORD') {
                    _this.setAlert('Attention', 'Mot de passe incorrect');
                }
                else {
                    if (data.data.isActive) {
                        if (data['error'] == 'SUCCESS') {
                            localStorage.setItem("user_id", data.data.id);
                            localStorage.setItem('role_id', data.data.role_id);
                            localStorage.setItem('apiKey', data.data.apiKey);
                            _this.events.publish('user:changed', localStorage.getItem('role_id'));
                            _this.App.getActiveNav().setRoot(__WEBPACK_IMPORTED_MODULE_1__pages_home_home__["a" /* HomePage */]);
                        }
                    }
                    else {
                        _this.setAlert('Attention', 'Votre compte à été désactivé.');
                    }
                }
            }
        });
        return false;
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
        document.location.href = 'index.html';
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_0__tools_alert_tool__["a" /* AlertTool */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_api_api__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, formBuilder, alertCtrl, apiProvider) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.apiProvider = apiProvider;
        this.credentialsForm = this.formBuilder.group({
            event: [''],
            response: [''],
        });
    }
    HomePage.prototype.setAlert = function (titleAlert, contentAlert) {
        var alert = this.alertCtrl.create({
            title: titleAlert,
            subTitle: contentAlert,
            buttons: ['Fermer']
        });
        alert.present();
    };
    HomePage.prototype.addEvent = function () {
        var _this = this;
        this.apiProvider.addEvent(this.credentialsForm.controls['event'].value, this.credentialsForm.controls['response'].value, localStorage.getItem('user_id')).subscribe(function (data) {
            if (data['error'] == 'ERROR_PARAM') {
                _this.setAlert('Attention', 'Remplissez les champs.');
            }
            else {
                if (data['error'] == 'ERROR_ALREADY') {
                    _this.setAlert('Attention', 'Cet évènement existe déjà.');
                }
                else {
                    if (data['error'] == 'ERROR') {
                        _this.setAlert('Attention', 'Une erreur est survenue.');
                    }
                    else {
                        if (data['error'] == 'SUCCESS') {
                            _this.credentialsForm.reset();
                            _this.setAlert('Succès', 'L\'évènement a été ajouté avec succès.');
                        }
                    }
                }
            }
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\paul-\Desktop\home.paulsouille.fr\mexicainOutils\mexicainForm\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mexicano</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content text-center>\n  <p> MexicainJS</p>\n  <form [formGroup]="credentialsForm">\n  \n    <ion-item>\n      <ion-label  floating>Event</ion-label>\n      <ion-input  [formControl]="credentialsForm.controls[\'event\']" value=""\n          type="text"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label  floating>Response</ion-label>\n      <ion-input  [formControl]="credentialsForm.controls[\'response\']"value=""\n          type="text"></ion-input>\n    </ion-item>\n  \n    <ion-row>\n      <ion-col text-center>\n        <button ion-button block color="button" (click)="addEvent()">\n          Ajouter\n        </button>\n      </ion-col>\n    </ion-row>\n  \n  \n  \n  </form>\n  </ion-content>\n'/*ion-inline-end:"C:\Users\paul-\Desktop\home.paulsouille.fr\mexicainOutils\mexicainForm\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_0__providers_api_api__["a" /* ApiProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[218]);
//# sourceMappingURL=main.js.map