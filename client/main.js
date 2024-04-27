"use strict";
(self["webpackChunkfront_bis"] = self["webpackChunkfront_bis"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_poker_poker_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/poker/poker.component */ 8839);
/* harmony import */ var _guards_can_activate_poker_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/can-activate-poker.guard */ 3805);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);





const routes = [{
  path: 'poker',
  canActivate: [_guards_can_activate_poker_guard__WEBPACK_IMPORTED_MODULE_1__.canActivatePoker],
  children: [{
    path: ':roomName',
    component: _components_poker_poker_component__WEBPACK_IMPORTED_MODULE_0__.PokerComponent
  }]
}, {
  path: '',
  redirectTo: 'poker',
  pathMatch: 'full'
}, {
  path: '**',
  redirectTo: 'poker'
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
      bindToComponentInputs: true
    }), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_sw_update_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/sw-update.service */ 7822);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);




class AppComponent {
  constructor() {
    this.swUpdateService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_sw_update_service__WEBPACK_IMPORTED_MODULE_0__.SwUpdateService);
  }
  ngOnInit() {
    this.swUpdateService.initCheckingForUpdate();
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
    encapsulation: 2
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/service-worker */ 1509);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);









class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.BrowserAnimationsModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__.ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.isDevMode)(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.BrowserAnimationsModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__.ServiceWorkerModule]
  });
})();

/***/ }),

/***/ 7132:
/*!*******************************************************************************!*\
  !*** ./src/app/components/chenille-activator/chenille-activator.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChenilleActivatorComponent: () => (/* binding */ ChenilleActivatorComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_web_socket_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/web-socket.service */ 5901);
/* harmony import */ var src_app_shared_enums_user_action_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/enums/user-action.enum */ 5815);






const _c0 = a0 => ({
  "pointer-events-none opacity-20": a0
});
class ChenilleActivatorComponent {
  constructor() {
    this.chenilleIgnited = false;
    this.disabled = false;
    this.webSocketService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(src_app_services_web_socket_service__WEBPACK_IMPORTED_MODULE_0__.WebSocketService);
  }
  sendChenille() {
    this.webSocketService.sendUserActionUpdateMessage(this.chenilleIgnited ? null : src_app_shared_enums_user_action_enum__WEBPACK_IMPORTED_MODULE_1__.UserAction.ChenilleIgnition);
  }
  static #_ = this.ɵfac = function ChenilleActivatorComponent_Factory(t) {
    return new (t || ChenilleActivatorComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ChenilleActivatorComponent,
    selectors: [["chenille-activator"]],
    inputs: {
      chenilleIgnited: "chenilleIgnited",
      disabled: "disabled"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    consts: [[1, "w-12", "cursor-pointer", 3, "ngClass", "click"], ["src", "../../../assets/images/confetti.png"]],
    template: function ChenilleActivatorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChenilleActivatorComponent_Template_div_click_0_listener() {
          return ctx.sendChenille();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c0, ctx.disabled));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass],
    encapsulation: 2
  });
}

/***/ }),

/***/ 2786:
/*!*************************************************************!*\
  !*** ./src/app/components/countdown/countdown.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CountdownComponent: () => (/* binding */ CountdownComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 3379);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 1527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);




class CountdownComponent {
  constructor() {
    this.launchAuthorized = false;
    this.countDown = 10;
  }
  ngOnInit() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.interval)(1000).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.take)(10)).subscribe(() => {
      this.countDown -= 1;
    });
  }
  static #_ = this.ɵfac = function CountdownComponent_Factory(t) {
    return new (t || CountdownComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: CountdownComponent,
    selectors: [["countdown"]],
    inputs: {
      launchAuthorized: "launchAuthorized"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 2,
    consts: [[1, "fixed", "right-0", "top-0", "mr-6", "mt-3", "text-8xl", "font-bold", 3, "ngClass"]],
    template: function CountdownComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.launchAuthorized ? "text-green-700" : "text-red-700");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.countDown);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass],
    styles: ["div[_ngcontent-%COMP%] {\n  text-shadow: 0 0 5px white;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb3VudGRvd24vY291bnRkb3duLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XG4gIHRleHQtc2hhZG93OiAwIDAgNXB4IHdoaXRlO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 359:
/*!***********************************************************************************!*\
  !*** ./src/app/components/dialogs/join-room-dialog/join-room-dialog.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JoinRoomDialogComponent: () => (/* binding */ JoinRoomDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var src_app_helpers_string_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/helpers/string.helper */ 2463);
/* harmony import */ var src_app_shared_regex_room_name_regex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/regex/room-name.regex */ 7752);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 1333);














function JoinRoomDialogComponent_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Seulement minuscules, chiffres et '-' ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class JoinRoomDialogComponent {
  constructor(dialogRef) {
    this.dialogRef = dialogRef;
    this.roomNameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(src_app_shared_regex_room_name_regex__WEBPACK_IMPORTED_MODULE_1__.ROOM_NAME_REGEX)]);
    this.roomSelectionFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
      roomName: this.roomNameControl
    });
    this.RANDOM_ROOM_NAME = src_app_helpers_string_helper__WEBPACK_IMPORTED_MODULE_0__.StringHelper.generateRandomPhilippeRoomName();
  }
  closeDialog() {
    if (this.roomSelectionFormGroup.valid) this.dialogRef.close(this.roomNameControl.value);
  }
  static #_ = this.ɵfac = function JoinRoomDialogComponent_Factory(t) {
    return new (t || JoinRoomDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: JoinRoomDialogComponent,
    selectors: [["join-room-dialog"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 15,
    vars: 6,
    consts: [["mat-dialog-title", ""], [3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "w-full"], ["matInput", "", 3, "formControl"], [4, "ngIf"], [1, "flex", "w-full", "justify-end", "pb-2"], ["mat-raised-button", "", "color", "accent", 3, "mat-dialog-close"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "mat-dialog-close"]],
    template: function JoinRoomDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Quelle room rejoindre ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-dialog-content")(3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Je souhaite rejoindre la room suivante :");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function JoinRoomDialogComponent_Template_form_ngSubmit_5_listener() {
          return ctx.closeDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, JoinRoomDialogComponent_mat_error_8_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-dialog-actions")(10, "div", 5)(11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Room al\u00E9atoire");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Rejoindre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.roomSelectionFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.roomNameControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.roomNameControl.hasError("pattern") && !ctx.roomNameControl.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mat-dialog-close", ctx.RANDOM_ROOM_NAME);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.roomNameControl.valid)("mat-dialog-close", ctx.roomNameControl.value);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 8612:
/*!*************************************************************************************************!*\
  !*** ./src/app/components/dialogs/update-available-dialog/update-available-dialog.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpdateAvailableDialogComponent: () => (/* binding */ UpdateAvailableDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);






class UpdateAvailableDialogComponent {
  reloadApplication() {
    document.location.reload();
  }
  static #_ = this.ɵfac = function UpdateAvailableDialogComponent_Factory(t) {
    return new (t || UpdateAvailableDialogComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: UpdateAvailableDialogComponent,
    selectors: [["update-available-dialog"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 11,
    vars: 0,
    consts: [["mat-dialog-title", ""], [1, "max-w-[400px]", "text-justify"], [1, "flex", "w-full", "justify-end", "pb-2"], ["mat-raised-button", "", "color", "accent", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", 3, "click"]],
    template: function UpdateAvailableDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nouvelle version disponible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content")(3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Veuillez cliquer sur \"Recharger\" pour installer la nouvelle version. (ne pas mettre \u00E0 jour l'application risque d'emp\u00EAcher son fonctionnement) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-actions")(6, "div", 2)(7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Annuler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateAvailableDialogComponent_Template_button_click_9_listener() {
          return ctx.reloadApplication();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Recharger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton],
    encapsulation: 2
  });
}

/***/ }),

/***/ 6809:
/*!*****************************************************************************!*\
  !*** ./src/app/components/nuclear-activator/nuclear-activator.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NuclearActivatorComponent: () => (/* binding */ NuclearActivatorComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_web_socket_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/web-socket.service */ 5901);
/* harmony import */ var src_app_shared_enums_user_action_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/enums/user-action.enum */ 5815);






const _c0 = a0 => ({
  "pointer-events-none opacity-20": a0
});
class NuclearActivatorComponent {
  constructor() {
    this.disabled = false;
    this.webSocketService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(src_app_services_web_socket_service__WEBPACK_IMPORTED_MODULE_0__.WebSocketService);
  }
  sendNuclearIgnition() {
    this.webSocketService.sendUserActionUpdateMessage(src_app_shared_enums_user_action_enum__WEBPACK_IMPORTED_MODULE_1__.UserAction.NuclearIgnition);
  }
  static #_ = this.ɵfac = function NuclearActivatorComponent_Factory(t) {
    return new (t || NuclearActivatorComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: NuclearActivatorComponent,
    selectors: [["nuclear-activator"]],
    inputs: {
      disabled: "disabled"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    consts: [[1, "w-12", "cursor-pointer", 3, "ngClass", "click"], ["src", "../../../assets/images/nuclear.png"]],
    template: function NuclearActivatorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NuclearActivatorComponent_Template_div_click_0_listener() {
          return ctx.sendNuclearIgnition();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c0, ctx.disabled));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass],
    encapsulation: 2
  });
}

/***/ }),

/***/ 3204:
/*!*****************************************************************************!*\
  !*** ./src/app/components/nuclear-explosion/nuclear-explosion.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NuclearExplosionComponent: () => (/* binding */ NuclearExplosionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class NuclearExplosionComponent {
  static #_ = this.ɵfac = function NuclearExplosionComponent_Factory(t) {
    return new (t || NuclearExplosionComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NuclearExplosionComponent,
    selectors: [["nuclear-explosion"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 0,
    consts: [[1, "fixed", "-bottom-8", "z-10", "w-full"], ["autoplay", "", "src", "../../../assets/videos/video.webm", 1, "w-full"], ["volume", "1", "autoplay", "", "src", "../../../assets/sounds/explosion.mp3"]],
    template: function NuclearExplosionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "video", 1)(2, "audio", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 8839:
/*!*****************************************************!*\
  !*** ./src/app/components/poker/poker.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PokerComponent: () => (/* binding */ PokerComponent)
/* harmony export */ });
/* harmony import */ var _home_julien_Development_poker_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slide-toggle */ 9293);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 274);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 331);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 4520);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs */ 655);
/* harmony import */ var src_app_enums_socket_event_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/enums/socket-event.enum */ 4083);
/* harmony import */ var src_app_shared_enums_room_effect_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enums/room-effect.enum */ 4653);
/* harmony import */ var src_app_shared_enums_user_action_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enums/user-action.enum */ 5815);
/* harmony import */ var src_app_shared_enums_user_effect_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enums/user-effect.enum */ 4328);
/* harmony import */ var src_app_shared_enums_vote_value_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enums/vote-value.enum */ 1382);
/* harmony import */ var src_app_shared_maps_effects_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/maps/effects.map */ 261);
/* harmony import */ var src_app_shared_maps_vote_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/maps/vote.map */ 531);
/* harmony import */ var _chenille_activator_chenille_activator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../chenille-activator/chenille-activator.component */ 7132);
/* harmony import */ var _countdown_countdown_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../countdown/countdown.component */ 2786);
/* harmony import */ var _dialogs_join_room_dialog_join_room_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../dialogs/join-room-dialog/join-room-dialog.component */ 359);
/* harmony import */ var _nuclear_activator_nuclear_activator_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../nuclear-activator/nuclear-activator.component */ 6809);
/* harmony import */ var _nuclear_explosion_nuclear_explosion_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../nuclear-explosion/nuclear-explosion.component */ 3204);
/* harmony import */ var _speech_bubble_speech_bubble_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../speech-bubble/speech-bubble.component */ 5420);
/* harmony import */ var src_app_services_web_socket_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/web-socket.service */ 5901);
/* harmony import */ var src_app_services_confetti_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/services/confetti.service */ 2034);
/* harmony import */ var src_app_services_spot_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/services/spot.service */ 8504);
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/services/local-storage.service */ 3683);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/form-field */ 1333);





































const _c0 = ["dataTable"];
const _c1 = ["spot"];
function PokerComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function PokerComponent_button_12_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r25);
      const effect_r23 = restoredCtx.$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r24.sendUserEffect(effect_r23.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const effect_r23 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", ctx_r0.isUserEffectPlaying);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", effect_r23.message, " ");
  }
}
function PokerComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function PokerComponent_button_14_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r28);
      const card_r26 = restoredCtx.$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r27.sendVote(card_r26.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const card_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", card_r26.value, " ");
  }
}
function PokerComponent_th_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, "Pseudonyme");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function PokerComponent_td_20_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, " \uD83C\uDF89");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function PokerComponent_td_20_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, " \uD83C\uDF89");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function PokerComponent_td_20_speech_bubble_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "speech-bubble", 50);
  }
  if (rf & 2) {
    const user_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("effect", user_r29.effect);
  }
}
const _c2 = a0 => ({
  "font-bold text-red-600": a0
});
function PokerComponent_td_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "td", 47)(1, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, PokerComponent_td_20_span_2_Template, 2, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, PokerComponent_td_20_span_4_Template, 2, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, PokerComponent_td_20_speech_bubble_5_Template, 1, 1, "speech-bubble", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r29 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction1"](5, _c2, user_r29.action === ctx_r4.USER_ACTION.NuclearIgnition));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", user_r29.action === ctx_r4.USER_ACTION.ChenilleIgnition);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", user_r29.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", user_r29.action === ctx_r4.USER_ACTION.ChenilleIgnition);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", user_r29.effect);
  }
}
function PokerComponent_th_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, "Vote");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function PokerComponent_td_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r34 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", user_r34.vote ? ctx_r6.roomState.isHidden ? "??" : user_r34.vote.value : "", " ");
  }
}
function PokerComponent_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "tr", 52);
  }
}
function PokerComponent_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "tr", 53);
  }
}
function PokerComponent_audio_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "audio", 54);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("volume", 0.2);
  }
}
function PokerComponent_audio_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "audio", 55);
  }
}
function PokerComponent_audio_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "audio", 56);
  }
}
function PokerComponent_audio_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "audio", 57);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("volume", 0.2);
  }
}
function PokerComponent_nuclear_explosion_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "nuclear-explosion");
  }
}
function PokerComponent_countdown_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "countdown", 58);
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("launchAuthorized", ctx_r14.isLaunchAuthorized);
  }
}
const _c3 = (a0, a1) => ({
  "pointer-events-none opacity-0": a0,
  chenille: a1
});
const _c4 = (a0, a1) => ({
  rip: a0,
  hidden: a1
});
const _c5 = (a0, a1, a2) => ({
  rip: a0,
  hidden: a1,
  flex: a2
});
const _c6 = a0 => ({
  rise: a0
});
class PokerComponent {
  constructor(webSocketService, confettiService, spotService, localStorageService, dialogService, router) {
    this.webSocketService = webSocketService;
    this.confettiService = confettiService;
    this.spotService = spotService;
    this.localStorageService = localStorageService;
    this.dialogService = dialogService;
    this.router = router;
    this.roomName = '';
    // Constants
    this.VOTE_CARDS = [{
      value: src_app_shared_enums_vote_value_enum__WEBPACK_IMPORTED_MODULE_5__.VoteValue.One,
      weight: src_app_shared_maps_vote_map__WEBPACK_IMPORTED_MODULE_7__.VOTE_VALUE_WEIGHT_MAP[src_app_shared_enums_vote_value_enum__WEBPACK_IMPORTED_MODULE_5__.VoteValue.One]
    }, {
      value: src_app_shared_enums_vote_value_enum__WEBPACK_IMPORTED_MODULE_5__.VoteValue.Two,
      weight: src_app_shared_maps_vote_map__WEBPACK_IMPORTED_MODULE_7__.VOTE_VALUE_WEIGHT_MAP[src_app_shared_enums_vote_value_enum__WEBPACK_IMPORTED_MODULE_5__.VoteValue.Two]
    }, {
      value: src_app_shared_enums_vote_value_enum__WEBPACK_IMPORTED_MODULE_5__.VoteValue.Three,
      weight: src_app_shared_maps_vote_map__WEBPACK_IMPORTED_MODULE_7__.VOTE_VALUE_WEIGHT_MAP[src_app_shared_enums_vote_value_enum__WEBPACK_IMPORTED_MODULE_5__.VoteValue.Three]
    }, {
      value: src_app_shared_enums_vote_value_enum__WEBPACK_IMPORTED_MODULE_5__.VoteValue.Five,
      weight: src_app_shared_maps_vote_map__WEBPACK_IMPORTED_MODULE_7__.VOTE_VALUE_WEIGHT_MAP[src_app_shared_enums_vote_value_enum__WEBPACK_IMPORTED_MODULE_5__.VoteValue.Five]
    }, {
      value: src_app_shared_enums_vote_value_enum__WEBPACK_IMPORTED_MODULE_5__.VoteValue.Eight,
      weight: src_app_shared_maps_vote_map__WEBPACK_IMPORTED_MODULE_7__.VOTE_VALUE_WEIGHT_MAP[src_app_shared_enums_vote_value_enum__WEBPACK_IMPORTED_MODULE_5__.VoteValue.Eight]
    }, {
      value: src_app_shared_enums_vote_value_enum__WEBPACK_IMPORTED_MODULE_5__.VoteValue.Thirteen,
      weight: src_app_shared_maps_vote_map__WEBPACK_IMPORTED_MODULE_7__.VOTE_VALUE_WEIGHT_MAP[src_app_shared_enums_vote_value_enum__WEBPACK_IMPORTED_MODULE_5__.VoteValue.Thirteen]
    }, {
      value: src_app_shared_enums_vote_value_enum__WEBPACK_IMPORTED_MODULE_5__.VoteValue.TwentyOne,
      weight: src_app_shared_maps_vote_map__WEBPACK_IMPORTED_MODULE_7__.VOTE_VALUE_WEIGHT_MAP[src_app_shared_enums_vote_value_enum__WEBPACK_IMPORTED_MODULE_5__.VoteValue.TwentyOne]
    }, {
      value: src_app_shared_enums_vote_value_enum__WEBPACK_IMPORTED_MODULE_5__.VoteValue.Shrug,
      weight: src_app_shared_maps_vote_map__WEBPACK_IMPORTED_MODULE_7__.VOTE_VALUE_WEIGHT_MAP[src_app_shared_enums_vote_value_enum__WEBPACK_IMPORTED_MODULE_5__.VoteValue.Shrug]
    }, {
      value: src_app_shared_enums_vote_value_enum__WEBPACK_IMPORTED_MODULE_5__.VoteValue.Graive,
      weight: src_app_shared_maps_vote_map__WEBPACK_IMPORTED_MODULE_7__.VOTE_VALUE_WEIGHT_MAP[src_app_shared_enums_vote_value_enum__WEBPACK_IMPORTED_MODULE_5__.VoteValue.Graive]
    }, {
      value: src_app_shared_enums_vote_value_enum__WEBPACK_IMPORTED_MODULE_5__.VoteValue.MiddleFinger,
      weight: src_app_shared_maps_vote_map__WEBPACK_IMPORTED_MODULE_7__.VOTE_VALUE_WEIGHT_MAP[src_app_shared_enums_vote_value_enum__WEBPACK_IMPORTED_MODULE_5__.VoteValue.MiddleFinger]
    }, {
      value: src_app_shared_enums_vote_value_enum__WEBPACK_IMPORTED_MODULE_5__.VoteValue.Surf,
      weight: src_app_shared_maps_vote_map__WEBPACK_IMPORTED_MODULE_7__.VOTE_VALUE_WEIGHT_MAP[src_app_shared_enums_vote_value_enum__WEBPACK_IMPORTED_MODULE_5__.VoteValue.Surf]
    }];
    this.EFFECTS = [{
      name: src_app_shared_enums_user_effect_enum__WEBPACK_IMPORTED_MODULE_4__.UserEffect.Philippe,
      message: src_app_shared_maps_effects_map__WEBPACK_IMPORTED_MODULE_6__.USER_EFFECTS_MAP[src_app_shared_enums_user_effect_enum__WEBPACK_IMPORTED_MODULE_4__.UserEffect.Philippe].message
    }, {
      name: src_app_shared_enums_user_effect_enum__WEBPACK_IMPORTED_MODULE_4__.UserEffect.Issou,
      message: src_app_shared_maps_effects_map__WEBPACK_IMPORTED_MODULE_6__.USER_EFFECTS_MAP[src_app_shared_enums_user_effect_enum__WEBPACK_IMPORTED_MODULE_4__.UserEffect.Issou].message
    }, {
      name: src_app_shared_enums_user_effect_enum__WEBPACK_IMPORTED_MODULE_4__.UserEffect.Arretez,
      message: src_app_shared_maps_effects_map__WEBPACK_IMPORTED_MODULE_6__.USER_EFFECTS_MAP[src_app_shared_enums_user_effect_enum__WEBPACK_IMPORTED_MODULE_4__.UserEffect.Arretez].message
    }, {
      name: src_app_shared_enums_user_effect_enum__WEBPACK_IMPORTED_MODULE_4__.UserEffect.PutainGenial,
      message: src_app_shared_maps_effects_map__WEBPACK_IMPORTED_MODULE_6__.USER_EFFECTS_MAP[src_app_shared_enums_user_effect_enum__WEBPACK_IMPORTED_MODULE_4__.UserEffect.PutainGenial].message
    }, {
      name: src_app_shared_enums_user_effect_enum__WEBPACK_IMPORTED_MODULE_4__.UserEffect.Leviosa,
      message: src_app_shared_maps_effects_map__WEBPACK_IMPORTED_MODULE_6__.USER_EFFECTS_MAP[src_app_shared_enums_user_effect_enum__WEBPACK_IMPORTED_MODULE_4__.UserEffect.Leviosa].message
    }, {
      name: src_app_shared_enums_user_effect_enum__WEBPACK_IMPORTED_MODULE_4__.UserEffect.OhYeah,
      message: src_app_shared_maps_effects_map__WEBPACK_IMPORTED_MODULE_6__.USER_EFFECTS_MAP[src_app_shared_enums_user_effect_enum__WEBPACK_IMPORTED_MODULE_4__.UserEffect.OhYeah].message
    }];
    this.USER_EFFECT = src_app_shared_enums_user_effect_enum__WEBPACK_IMPORTED_MODULE_4__.UserEffect;
    this.USER_ACTION = src_app_shared_enums_user_action_enum__WEBPACK_IMPORTED_MODULE_3__.UserAction;
    this.ROOM_EFFECT = src_app_shared_enums_room_effect_enum__WEBPACK_IMPORTED_MODULE_2__.RoomEffect;
    // Room
    this.roomState = {
      name: '',
      users: [],
      isHidden: true,
      roomEffect: null,
      roomEffectCoolDowns: {
        [src_app_shared_enums_room_effect_enum__WEBPACK_IMPORTED_MODULE_2__.RoomEffect.Fanfare]: 0,
        [src_app_shared_enums_room_effect_enum__WEBPACK_IMPORTED_MODULE_2__.RoomEffect.Ignition]: 0,
        [src_app_shared_enums_room_effect_enum__WEBPACK_IMPORTED_MODULE_2__.RoomEffect.Explosion]: 0,
        [src_app_shared_enums_room_effect_enum__WEBPACK_IMPORTED_MODULE_2__.RoomEffect.Chenille]: 0,
        [src_app_shared_enums_room_effect_enum__WEBPACK_IMPORTED_MODULE_2__.RoomEffect.NoFun]: 0
      }
    };
    // Classes
    this.funButtonsDisabled = false;
    // User
    this.userId = '';
    // Activators
    this.ignitionButtonActivated = true;
    this.chenilleButtonActivated = true;
    // Effects
    this.isUserEffectPlaying = false;
    this.isRoomEffectPlaying = false;
    // Nuclear effects
    this.isIgnitionReloading = false;
    this.isWasteLand = false;
    this.isLaunchAuthorized = false;
    // Chenille effects
    this.isChenilleIgnitionReloading = false;
    this.displayedColumns = ['name', 'vote'];
    this.dataSource = [];
    // Controls
    this.nameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormControl(this.localStorageService.getUserNameFromLocalStorage() ?? '');
    this.userEffectControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormControl(null);
    // Subscriptions
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_20__.Subject();
    // Service subjects
    this.socketEvent$ = this.webSocketService.socketEvent$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_21__.takeUntil)(this.destroy$));
    this.roomStateEvent$ = this.webSocketService.roomStateEvent$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_21__.takeUntil)(this.destroy$));
    this.userEvent$ = this.webSocketService.userEvent$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_21__.takeUntil)(this.destroy$));
  }
  ngOnInit() {
    this.webSocketService.initWebSocket();
    this.handleSocketOpen();
    this.handleRoomUpdateMessages();
    this.handleUserMessages();
    this.handleNameControlValueChanges();
    this.handleUserEffectControlValueChanges();
    this.localStorageService.setRoomNameToLocalStorage(this.roomName);
  }
  ngAfterViewInit() {
    const spots = this.spots.toArray();
    if (spots.length > 0) this.spotService.initSpots(this.spots.map(elRef => elRef.nativeElement));
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.webSocketService.closeWebSocket();
  }
  // UI event handlers
  sendVote(vote) {
    this.webSocketService.sendVoteMessage(vote);
  }
  sendUserEffect(effect) {
    this.userEffectControl.disable({
      emitEvent: false
    });
    this.webSocketService.sendUserEffectMessage(effect);
  }
  toggleHide() {
    this.webSocketService.sendToggleHideMessage();
  }
  resetVotes() {
    this.webSocketService.sendResetVotesMessage();
  }
  toggleNoFun(event) {
    event.checked ? this.webSocketService.sendNoFunOnMessage() : this.webSocketService.sendNoFunOffMessage();
  }
  joinRoom() {
    var _this = this;
    return (0,_home_julien_Development_poker_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.firstValueFrom)(_this.dialogService.open(_dialogs_join_room_dialog_join_room_dialog_component__WEBPACK_IMPORTED_MODULE_10__.JoinRoomDialogComponent).afterClosed().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_23__.map)(roomName => {
        if (roomName) {
          _this.router.navigate([`/poker/${roomName}`]);
          _this.localStorageService.setRoomNameToLocalStorage(roomName);
        }
      })));
    })();
  }
  // Web socket handlers
  handleSocketOpen() {
    this.socketEvent$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_24__.filter)(event => event.type === src_app_enums_socket_event_enum__WEBPACK_IMPORTED_MODULE_1__.SocketEvent.Open)).subscribe(() => {
      this.webSocketService.sendUserJoinRoomMessage(this.roomName);
      const userName = this.nameControl.value;
      if (userName) this.webSocketService.sendUserNameUpdateMessage(userName);
    });
  }
  handleRoomUpdateMessages() {
    this.roomStateEvent$.subscribe(roomState => {
      this.roomState = roomState;
      this.updateDataSource();
      this.updateUserEffects();
      this.handleRoomEffects();
      this.updateNuclearEffects();
      this.updateChenilleEffects();
    });
  }
  handleUserMessages() {
    this.userEvent$.subscribe(userId => {
      this.userId = userId;
    });
  }
  // Control handlers
  handleNameControlValueChanges() {
    this.nameControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_25__.debounceTime)(1000), (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.takeUntil)(this.destroy$)).subscribe(name => {
      if (name) {
        this.localStorageService.setUserNameToLocalStorage(name);
        this.webSocketService.sendUserNameUpdateMessage(name);
      }
    });
  }
  handleUserEffectControlValueChanges() {
    this.userEffectControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_21__.takeUntil)(this.destroy$)).subscribe(effect => {
      if (effect) {
        this.sendUserEffect(effect);
        this.userEffectControl.disable({
          emitEvent: false
        });
      }
    });
  }
  updateNuclearEffects() {
    const currentTimestamp = new Date().getTime();
    const roomState = this.roomState;
    this.isWasteLand = roomState.roomEffectCoolDowns[src_app_shared_enums_room_effect_enum__WEBPACK_IMPORTED_MODULE_2__.RoomEffect.Explosion] > currentTimestamp;
    this.isIgnitionReloading = roomState.roomEffect !== src_app_shared_enums_room_effect_enum__WEBPACK_IMPORTED_MODULE_2__.RoomEffect.Ignition && roomState.roomEffectCoolDowns[src_app_shared_enums_room_effect_enum__WEBPACK_IMPORTED_MODULE_2__.RoomEffect.Ignition] > currentTimestamp;
    this.isLaunchAuthorized = roomState.users.filter(user => user.action === src_app_shared_enums_user_action_enum__WEBPACK_IMPORTED_MODULE_3__.UserAction.NuclearIgnition).length >= 3;
  }
  updateChenilleEffects() {
    const currentTimestamp = new Date().getTime();
    const roomState = this.roomState;
    if (roomState.roomEffect !== src_app_shared_enums_room_effect_enum__WEBPACK_IMPORTED_MODULE_2__.RoomEffect.Chenille) {
      this.confettiService.clearConfettiInterval();
      this.spotService.finishTheShow();
    }
    this.isChenilleIgnitionReloading = roomState.roomEffect !== src_app_shared_enums_room_effect_enum__WEBPACK_IMPORTED_MODULE_2__.RoomEffect.Chenille && roomState.roomEffectCoolDowns[src_app_shared_enums_room_effect_enum__WEBPACK_IMPORTED_MODULE_2__.RoomEffect.Chenille] > currentTimestamp;
  }
  updateDataSource() {
    // Update or remove votes
    this.dataSource.forEach((user, index) => {
      const userWithVote = this.roomState.users.find(usr => usr.id === user.id);
      // User no longer exists in room, remove from data source
      if (!userWithVote) {
        this.dataSource.splice(index, 1);
      } else {
        // User still exists in room, update its item
        user.name = userWithVote.name;
        user.vote = userWithVote.vote;
        user.effect = userWithVote.effect;
        user.action = userWithVote.action;
      }
    });
    // Add new users
    const newUsers = this.roomState.users.filter(user => !this.dataSource.map(usr => usr.id).includes(user.id));
    newUsers.forEach((user, index) => {
      this.dataSource.push(user);
      if (!this.nameControl.value && index === newUsers.length - 1) {
        this.nameControl.setValue(user.name);
      }
    });
    // Sort table if votes are not hidden
    if (!this.roomState.isHidden) {
      this.dataSource.sort((a, b) => {
        const voteAWeight = a.vote?.weight ?? -1;
        const voteBWeight = b.vote?.weight ?? -1;
        return voteAWeight - voteBWeight;
      });
    }
    this.dataTableRef?.renderRows();
  }
  updateUserEffects() {
    this.isUserEffectPlaying = this.roomState.users.some(user => user.effect !== null);
    if (!this.isUserEffectPlaying) {
      this.userEffectControl.reset();
      this.userEffectControl.enable();
    }
    const userAction = this.roomState.users.find(user => user.id === this.userId)?.action;
    this.ignitionButtonActivated = !userAction;
    this.chenilleButtonActivated = !userAction;
  }
  handleRoomEffects() {
    const roomEffect = this.roomState.roomEffect;
    if (!roomEffect) {
      this.funButtonsDisabled = false;
      this.isRoomEffectPlaying = false;
      return;
    }
    if (this.isRoomEffectPlaying) return;
    switch (roomEffect) {
      case src_app_shared_enums_room_effect_enum__WEBPACK_IMPORTED_MODULE_2__.RoomEffect.Fanfare:
        this.confettiService.sendConfettisFromBottomCorners();
        break;
      case src_app_shared_enums_room_effect_enum__WEBPACK_IMPORTED_MODULE_2__.RoomEffect.NoFun:
        setTimeout(() => {
          this.funButtonsDisabled = true;
        }, 5000);
        break;
      case src_app_shared_enums_room_effect_enum__WEBPACK_IMPORTED_MODULE_2__.RoomEffect.Chenille:
        this.confettiService.sendConfettisFromTop();
        this.spotService.startTheShow();
        break;
    }
    this.isRoomEffectPlaying = true;
  }
  static #_ = this.ɵfac = function PokerComponent_Factory(t) {
    return new (t || PokerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_services_web_socket_service__WEBPACK_IMPORTED_MODULE_14__.WebSocketService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_services_confetti_service__WEBPACK_IMPORTED_MODULE_15__.ConfettiService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_services_spot_service__WEBPACK_IMPORTED_MODULE_16__.SpotService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_17__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_27__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({
    type: PokerComponent,
    selectors: [["poker"]],
    viewQuery: function PokerComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_c1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_18__.ElementRef);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.dataTableRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.spots = _t);
      }
    },
    inputs: {
      roomName: "roomName"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵStandaloneFeature"]],
    decls: 59,
    vars: 41,
    consts: [["id", "full-container", 1, "flex", "h-full", "w-full", "flex-col", "items-center", "transition-[opacity]", "duration-1000", 3, "ngClass"], [1, "mt-4", "flex", "flex-col", "items-center", "justify-between", "sm:w-[800px]"], [1, "flex", "items-start"], [1, "w-40"], ["matInput", "", 3, "formControl"], [1, "ml-3", "mt-1", 3, "ngClass", "disabled"], [1, "ml-3", "mt-1", 3, "ngClass", "disabled", "chenilleIgnited"], ["color", "color", 1, "ml-6", "mt-4", 3, "disabled", "checked", "change"], [1, "w-full", "items-center", "justify-between", 3, "ngClass"], ["class", "mb-6 text-lg", "mat-raised-button", "", "color", "warn", 3, "disabled", "click", 4, "ngFor", "ngForOf"], [1, "flex", "flex-wrap", "justify-center", "sm:my-4"], ["class", "mx-2 my-2 text-xl", "mat-raised-button", "", "color", "primary", 3, "click", 4, "ngFor", "ngForOf"], [1, "mt-5"], ["mat-table", "", 1, "mat-elevation-z8", "mx-auto", 3, "dataSource"], ["dataTable", ""], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "relative", 3, "ngClass", 4, "matCellDef"], ["matColumnDef", "vote"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "mt-10", "flex", "w-56", "justify-between", "sm:w-60"], ["mat-raised-button", "", "color", "accent", 1, "my-2", "text-lg", 3, "click"], [1, "h-9", "sm:hidden"], ["mat-raised-button", "", "color", "accent", 1, "mt-6", "text-lg", 3, "click"], ["id", "myCanvas", 1, "pointer-events-none", "fixed", "left-0", "top-0", "z-10", "h-full", "w-full"], ["class", "hidden", "autoplay", "", "src", "../../../assets/sounds/fanfare.mp3", 3, "volume", 4, "ngIf"], ["class", "hidden", "autoplay", "", "src", "../../../assets/sounds/alarm.mp3", 4, "ngIf"], ["class", "hidden", "autoplay", "", "src", "../../../assets/sounds/chenille.mp3", 4, "ngIf"], ["class", "hidden", "autoplay", "", "src", "../../../assets/sounds/taps.mp3", 3, "volume", 4, "ngIf"], [4, "ngIf"], [3, "launchAuthorized", 4, "ngIf"], [1, "spot-1", "pointer-events-none", "fixed", "-top-10", "left-[10%]", "hidden", "-rotate-[15deg]", "opacity-50"], ["spot", ""], [1, "spot-2", "pointer-events-none", "fixed", "-top-10", "left-[20%]", "hidden", "rotate-[15deg]", "opacity-50"], [1, "spot-3", "pointer-events-none", "fixed", "-top-10", "left-[30%]", "hidden", "-rotate-[8deg]", "opacity-50"], [1, "spot-4", "pointer-events-none", "fixed", "-top-10", "left-[40%]", "hidden", "rotate-[20deg]", "opacity-50"], [1, "spot-5", "pointer-events-none", "fixed", "-top-10", "left-[50%]", "hidden", "-rotate-[15deg]", "opacity-50"], [1, "spot-6", "pointer-events-none", "fixed", "-top-10", "left-[60%]", "hidden", "rotate-[15deg]", "opacity-50"], [1, "spot-7", "pointer-events-none", "fixed", "-top-10", "left-[70%]", "hidden", "-rotate-[15deg]", "opacity-50"], [1, "spot-8", "pointer-events-none", "fixed", "-top-10", "left-[80%]", "hidden", "rotate-[15deg]", "opacity-50"], ["src", "../../../assets/images/rip.png", 1, "pointer-events-none", "fixed", "left-[5vw]", "top-[calc(50vh-256px)]", "-z-10", "opacity-0", 3, "ngClass"], ["src", "../../../assets/images/rip.png", 1, "pointer-events-none", "fixed", "right-[5vw]", "top-[calc(50vh-256px)]", "-z-10", "opacity-0", 3, "ngClass"], ["mat-raised-button", "", "color", "warn", 1, "mb-6", "text-lg", 3, "disabled", "click"], ["mat-raised-button", "", "color", "primary", 1, "mx-2", "my-2", "text-xl", 3, "click"], ["mat-header-cell", ""], ["mat-cell", "", 1, "relative", 3, "ngClass"], [1, "mb-0", "overflow-hidden", "overflow-ellipsis", "whitespace-nowrap"], ["class", "absolute -top-[90px] left-[50%] h-[100px] w-[100px]", 3, "effect", 4, "ngIf"], [1, "absolute", "-top-[90px]", "left-[50%]", "h-[100px]", "w-[100px]", 3, "effect"], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], ["autoplay", "", "src", "../../../assets/sounds/fanfare.mp3", 1, "hidden", 3, "volume"], ["autoplay", "", "src", "../../../assets/sounds/alarm.mp3", 1, "hidden"], ["autoplay", "", "src", "../../../assets/sounds/chenille.mp3", 1, "hidden"], ["autoplay", "", "src", "../../../assets/sounds/taps.mp3", 1, "hidden", 3, "volume"], [3, "launchAuthorized"]],
    template: function PokerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "mat-form-field", 3)(4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5, "Pseudonyme");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](7, "nuclear-activator", 5)(8, "chenille-activator", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "mat-slide-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("change", function PokerComponent_Template_mat_slide_toggle_change_9_listener($event) {
          return ctx.toggleNoFun($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10, " No fun mode ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](12, PokerComponent_button_12_Template, 2, 2, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](14, PokerComponent_button_14_Template, 2, 1, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "div", 12)(16, "table", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](18, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](19, PokerComponent_th_19_Template, 2, 0, "th", 16)(20, PokerComponent_td_20_Template, 6, 7, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](21, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](22, PokerComponent_th_22_Template, 2, 0, "th", 16)(23, PokerComponent_td_23_Template, 2, 1, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](24, PokerComponent_tr_24_Template, 1, 0, "tr", 20)(25, PokerComponent_tr_25_Template, 1, 0, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](26, "div", 22)(27, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function PokerComponent_Template_button_click_27_listener() {
          return ctx.toggleHide();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](29, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function PokerComponent_Template_button_click_29_listener() {
          return ctx.resetVotes();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](30, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](31, "div", 24)(32, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function PokerComponent_Template_button_click_32_listener() {
          return ctx.joinRoom();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](33, "Rejoindre une room");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](34, "canvas", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](35, PokerComponent_audio_35_Template, 1, 1, "audio", 27)(36, PokerComponent_audio_36_Template, 1, 0, "audio", 28)(37, PokerComponent_audio_37_Template, 1, 0, "audio", 29)(38, PokerComponent_audio_38_Template, 1, 1, "audio", 30)(39, PokerComponent_nuclear_explosion_39_Template, 1, 0, "nuclear-explosion", 31)(40, PokerComponent_countdown_40_Template, 1, 1, "countdown", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](41, "div", 33, 34)(43, "div", 35, 34)(45, "div", 36, 34)(47, "div", 37, 34)(49, "div", 38, 34)(51, "div", 39, 34)(53, "div", 40, 34)(55, "div", 41, 34)(57, "img", 42)(58, "img", 43);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction2"](24, _c3, ctx.isWasteLand, ctx.roomState.roomEffect === ctx.ROOM_EFFECT.Chenille));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("formControl", ctx.nameControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction2"](27, _c4, ctx.roomState.roomEffect === ctx.ROOM_EFFECT.NoFun, ctx.funButtonsDisabled))("disabled", !ctx.ignitionButtonActivated || ctx.isIgnitionReloading);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction2"](30, _c4, ctx.roomState.roomEffect === ctx.ROOM_EFFECT.NoFun, ctx.funButtonsDisabled))("disabled", ctx.isChenilleIgnitionReloading)("chenilleIgnited", !ctx.chenilleButtonActivated);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", ctx.isUserEffectPlaying || ctx.roomState.roomEffect !== null && ctx.roomState.roomEffect !== ctx.ROOM_EFFECT.NoFun)("checked", ctx.roomState.roomEffect === ctx.ROOM_EFFECT.NoFun);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction3"](33, _c5, ctx.roomState.roomEffect === ctx.ROOM_EFFECT.NoFun, ctx.funButtonsDisabled, !ctx.funButtonsDisabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx.EFFECTS);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx.VOTE_CARDS);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx.roomState.isHidden ? "Afficher" : "Masquer", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.roomState.roomEffect === ctx.ROOM_EFFECT.Fanfare);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.roomState.roomEffect === ctx.ROOM_EFFECT.Ignition);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.roomState.roomEffect === ctx.ROOM_EFFECT.Chenille);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.roomState.roomEffect === ctx.ROOM_EFFECT.NoFun);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.roomState.roomEffect === ctx.ROOM_EFFECT.Explosion);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.roomState.roomEffect === ctx.ROOM_EFFECT.Ignition);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction1"](37, _c6, ctx.roomState.roomEffect === ctx.ROOM_EFFECT.NoFun));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction1"](39, _c6, ctx.roomState.roomEffect === ctx.ROOM_EFFECT.NoFun));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_28__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgIf, _speech_bubble_speech_bubble_component__WEBPACK_IMPORTED_MODULE_13__.SpeechBubbleComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_29__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_29__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_30__.MatTableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_30__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_30__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_30__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_30__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_30__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_30__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_30__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_30__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_30__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_30__.MatRow, _angular_material_input__WEBPACK_IMPORTED_MODULE_31__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_31__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_33__.MatSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormControlDirective, _nuclear_explosion_nuclear_explosion_component__WEBPACK_IMPORTED_MODULE_12__.NuclearExplosionComponent, _nuclear_activator_nuclear_activator_component__WEBPACK_IMPORTED_MODULE_11__.NuclearActivatorComponent, _countdown_countdown_component__WEBPACK_IMPORTED_MODULE_9__.CountdownComponent, _chenille_activator_chenille_activator_component__WEBPACK_IMPORTED_MODULE_8__.ChenilleActivatorComponent, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__.MatSlideToggleModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__.MatSlideToggle],
    styles: [".mat-column-vote[_ngcontent-%COMP%] {\n  width: 8rem;\n  text-align: center;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n\n.mat-column-name[_ngcontent-%COMP%] {\n  min-width: 220px;\n  max-width: 220px;\n  text-align: center;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.mat-column-name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0 !important;\n}\n\ntd.mat-column-name[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\n.spot-1[_ngcontent-%COMP%] {\n  border-left: 90px solid transparent;\n  border-right: 90px solid transparent;\n  border-bottom: 120vh solid #66b2ff;\n  height: 120vh;\n  width: 200px;\n}\n\n.spot-2[_ngcontent-%COMP%] {\n  border-left: 90px solid transparent;\n  border-right: 90px solid transparent;\n  border-bottom: 120vh solid rgb(224, 255, 102);\n  height: 120vh;\n  width: 200px;\n}\n\n.spot-3[_ngcontent-%COMP%] {\n  border-left: 90px solid transparent;\n  border-right: 90px solid transparent;\n  border-bottom: 120vh solid #d666ff;\n  height: 120vh;\n  width: 200px;\n}\n\n.spot-4[_ngcontent-%COMP%] {\n  border-left: 90px solid transparent;\n  border-right: 90px solid transparent;\n  border-bottom: 120vh solid #27c54e;\n  height: 120vh;\n  width: 200px;\n}\n\n.spot-5[_ngcontent-%COMP%] {\n  border-left: 90px solid transparent;\n  border-right: 90px solid transparent;\n  border-bottom: 120vh solid #fe4646;\n  height: 120vh;\n  width: 200px;\n}\n\n.spot-6[_ngcontent-%COMP%] {\n  border-left: 90px solid transparent;\n  border-right: 90px solid transparent;\n  border-bottom: 120vh solid #866eff;\n  height: 120vh;\n  width: 200px;\n}\n\n.spot-7[_ngcontent-%COMP%] {\n  border-left: 90px solid transparent;\n  border-right: 90px solid transparent;\n  border-bottom: 120vh solid #66e3ff;\n  height: 120vh;\n  width: 200px;\n}\n\n.spot-8[_ngcontent-%COMP%] {\n  border-left: 90px solid transparent;\n  border-right: 90px solid transparent;\n  border-bottom: 120vh solid rgb(40, 167, 14);\n  height: 120vh;\n  width: 200px;\n}\n\n@keyframes _ngcontent-%COMP%_chenille {\n  0% {\n    transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(25px, 25px);\n  }\n  50% {\n    transform: translate(50px, 0px);\n  }\n  75% {\n    transform: translate(25px, 25px);\n  }\n  100% {\n    transform: translate(0, 0);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeout {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadein {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.rip[_ngcontent-%COMP%] {\n  animation: 5s _ngcontent-%COMP%_fadeout;\n  opacity: 0;\n}\n\n.rise[_ngcontent-%COMP%] {\n  animation: 10s _ngcontent-%COMP%_fadein;\n  opacity: 1;\n}\n\n#full-container.chenille[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  animation: 1s infinite alternate _ngcontent-%COMP%_chenille;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wb2tlci9wb2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUFBLFdBQUE7RUFBQSxrQkFBQTtFQUFBLG1CQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLGdCQUFBO0VBQUEsZ0JBQUE7RUFBQSxrQkFBQTtFQUFBLG1CQUFBO0VBQUE7QUFBQTtBQUVBO0VBQ0UsMkJBQUE7QUFDSjs7QUFHQTtFQUNFLGlCQUFBO0FBQUY7O0FBT0E7RUFDRSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQVBZO0VBUVosWUFQZTtBQUdqQjs7QUFNQTtFQUNFLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSw2Q0FBQTtFQUNBLGFBZFk7RUFlWixZQWRlO0FBV2pCOztBQUtBO0VBQ0UsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsYUFyQlk7RUFzQlosWUFyQmU7QUFtQmpCOztBQUlBO0VBQ0UsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsYUE1Qlk7RUE2QlosWUE1QmU7QUEyQmpCOztBQUdBO0VBQ0UsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsYUFuQ1k7RUFvQ1osWUFuQ2U7QUFtQ2pCOztBQUVBO0VBQ0UsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsYUExQ1k7RUEyQ1osWUExQ2U7QUEyQ2pCOztBQUNBO0VBQ0UsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsYUFqRFk7RUFrRFosWUFqRGU7QUFtRGpCOztBQUFBO0VBQ0UsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsYUF4RFk7RUF5RFosWUF4RGU7QUEyRGpCOztBQUFBO0VBQ0U7SUFDRSwwQkFBQTtFQUdGO0VBQUE7SUFDRSxnQ0FBQTtFQUVGO0VBQ0E7SUFDRSwrQkFBQTtFQUNGO0VBRUE7SUFDRSxnQ0FBQTtFQUFGO0VBR0E7SUFDRSwwQkFBQTtFQURGO0FBQ0Y7QUFJQTtFQUNFO0lBQ0UsVUFBQTtFQUZGO0VBS0E7SUFDRSxVQUFBO0VBSEY7QUFDRjtBQU1BO0VBQ0U7SUFDRSxVQUFBO0VBSkY7RUFPQTtJQUNFLFVBQUE7RUFMRjtBQUNGO0FBUUE7RUFDRSxxQkFBQTtFQUNBLFVBQUE7QUFORjs7QUFTQTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtBQU5GOztBQVVFO0VBQ0UseUNBQUE7QUFQSiIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY29sdW1uLXZvdGUge1xuICBAYXBwbHkgdy0zMiB0ZXh0LWNlbnRlciB0ZXh0LWxnO1xufVxuXG4ubWF0LWNvbHVtbi1uYW1lIHtcbiAgQGFwcGx5IG1pbi13LVsyMjBweF0gbWF4LXctWzIyMHB4XSB0ZXh0LWNlbnRlciB0ZXh0LWxnO1xuXG4gIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgfVxufVxuXG50ZC5tYXQtY29sdW1uLW5hbWUge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuJHNwb3Qtd2lkdGg6IDkwcHg7XG4kc3BvdC1oZWlnaHQ6IDEyMHZoO1xuJHNwb3QtdG9wLXdpZHRoOiAyMDBweDtcblxuLnNwb3QtMSB7XG4gIGJvcmRlci1sZWZ0OiAkc3BvdC13aWR0aCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAkc3BvdC13aWR0aCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogJHNwb3QtaGVpZ2h0IHNvbGlkICM2NmIyZmY7XG4gIGhlaWdodDogJHNwb3QtaGVpZ2h0O1xuICB3aWR0aDogJHNwb3QtdG9wLXdpZHRoO1xufVxuLnNwb3QtMiB7XG4gIGJvcmRlci1sZWZ0OiAkc3BvdC13aWR0aCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAkc3BvdC13aWR0aCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogJHNwb3QtaGVpZ2h0IHNvbGlkIHJnYigyMjQsIDI1NSwgMTAyKTtcbiAgaGVpZ2h0OiAkc3BvdC1oZWlnaHQ7XG4gIHdpZHRoOiAkc3BvdC10b3Atd2lkdGg7XG59XG4uc3BvdC0zIHtcbiAgYm9yZGVyLWxlZnQ6ICRzcG90LXdpZHRoIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6ICRzcG90LXdpZHRoIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAkc3BvdC1oZWlnaHQgc29saWQgI2Q2NjZmZjtcbiAgaGVpZ2h0OiAkc3BvdC1oZWlnaHQ7XG4gIHdpZHRoOiAkc3BvdC10b3Atd2lkdGg7XG59XG4uc3BvdC00IHtcbiAgYm9yZGVyLWxlZnQ6ICRzcG90LXdpZHRoIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6ICRzcG90LXdpZHRoIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAkc3BvdC1oZWlnaHQgc29saWQgIzI3YzU0ZTtcbiAgaGVpZ2h0OiAkc3BvdC1oZWlnaHQ7XG4gIHdpZHRoOiAkc3BvdC10b3Atd2lkdGg7XG59XG4uc3BvdC01IHtcbiAgYm9yZGVyLWxlZnQ6ICRzcG90LXdpZHRoIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6ICRzcG90LXdpZHRoIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAkc3BvdC1oZWlnaHQgc29saWQgI2ZlNDY0NjtcbiAgaGVpZ2h0OiAkc3BvdC1oZWlnaHQ7XG4gIHdpZHRoOiAkc3BvdC10b3Atd2lkdGg7XG59XG4uc3BvdC02IHtcbiAgYm9yZGVyLWxlZnQ6ICRzcG90LXdpZHRoIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6ICRzcG90LXdpZHRoIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAkc3BvdC1oZWlnaHQgc29saWQgIzg2NmVmZjtcbiAgaGVpZ2h0OiAkc3BvdC1oZWlnaHQ7XG4gIHdpZHRoOiAkc3BvdC10b3Atd2lkdGg7XG59XG4uc3BvdC03IHtcbiAgYm9yZGVyLWxlZnQ6ICRzcG90LXdpZHRoIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6ICRzcG90LXdpZHRoIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAkc3BvdC1oZWlnaHQgc29saWQgIzY2ZTNmZjtcbiAgaGVpZ2h0OiAkc3BvdC1oZWlnaHQ7XG4gIHdpZHRoOiAkc3BvdC10b3Atd2lkdGg7XG59XG4uc3BvdC04IHtcbiAgYm9yZGVyLWxlZnQ6ICRzcG90LXdpZHRoIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6ICRzcG90LXdpZHRoIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAkc3BvdC1oZWlnaHQgc29saWQgcmdiKDQwLCAxNjcsIDE0KTtcbiAgaGVpZ2h0OiAkc3BvdC1oZWlnaHQ7XG4gIHdpZHRoOiAkc3BvdC10b3Atd2lkdGg7XG59XG5cbkBrZXlmcmFtZXMgY2hlbmlsbGUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gIH1cblxuICAyNSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDI1cHgsIDI1cHgpO1xuICB9XG5cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MHB4LCAwcHgpO1xuICB9XG5cbiAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNXB4LCAyNXB4KTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZW91dCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4ucmlwIHtcbiAgYW5pbWF0aW9uOiA1cyBmYWRlb3V0O1xuICBvcGFjaXR5OiAwO1xufVxuXG4ucmlzZSB7XG4gIGFuaW1hdGlvbjogMTBzIGZhZGVpbjtcbiAgb3BhY2l0eTogMTtcbn1cblxuI2Z1bGwtY29udGFpbmVyLmNoZW5pbGxlIHtcbiAgZGl2IHtcbiAgICBhbmltYXRpb246IDFzIGluZmluaXRlIGFsdGVybmF0ZSBjaGVuaWxsZTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5420:
/*!*********************************************************************!*\
  !*** ./src/app/components/speech-bubble/speech-bubble.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpeechBubbleComponent: () => (/* binding */ SpeechBubbleComponent)
/* harmony export */ });
/* harmony import */ var src_app_maps_user_effect_sound_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/maps/user-effect-sound.map */ 658);
/* harmony import */ var src_app_shared_enums_user_effect_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/enums/user-effect.enum */ 4328);
/* harmony import */ var src_app_shared_maps_effects_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/maps/effects.map */ 261);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);




class SpeechBubbleComponent {
  constructor() {
    this.effect = src_app_shared_enums_user_effect_enum__WEBPACK_IMPORTED_MODULE_1__.UserEffect.Philippe;
    this.BASE_ASSETS_URL = '../../../assets';
  }
  ngOnInit() {
    this.userEffectData = src_app_shared_maps_effects_map__WEBPACK_IMPORTED_MODULE_2__.USER_EFFECTS_MAP[this.effect];
    this.soundUrl = `${this.BASE_ASSETS_URL}/sounds/${src_app_maps_user_effect_sound_map__WEBPACK_IMPORTED_MODULE_0__.USER_EFFECTS_SOUND_MAP[this.effect]}`;
  }
  static #_ = this.ɵfac = function SpeechBubbleComponent_Factory(t) {
    return new (t || SpeechBubbleComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: SpeechBubbleComponent,
    selectors: [["speech-bubble"]],
    inputs: {
      effect: "effect"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 3,
    consts: [[1, "flex", "h-full", "w-full", "bg-[url('./assets/images/speech-bubble.svg')]", "bg-cover"], [1, "relative", "-top-2", "m-auto", "text-black"], ["autoplay", "", 3, "volume", "src"]],
    template: function SpeechBubbleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "audio", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.userEffectData.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("volume", ctx.userEffectData.volume)("src", ctx.soundUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 4083:
/*!********************************************!*\
  !*** ./src/app/enums/socket-event.enum.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SocketEvent: () => (/* binding */ SocketEvent)
/* harmony export */ });
var SocketEvent;
(function (SocketEvent) {
  SocketEvent["Open"] = "open";
  SocketEvent["Message"] = "message";
  SocketEvent["Error"] = "error";
  SocketEvent["Close"] = "close";
})(SocketEvent || (SocketEvent = {}));

/***/ }),

/***/ 3805:
/*!****************************************************!*\
  !*** ./src/app/guards/can-activate-poker.guard.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canActivatePoker: () => (/* binding */ canActivatePoker)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var _components_dialogs_join_room_dialog_join_room_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/dialogs/join-room-dialog/join-room-dialog.component */ 359);
/* harmony import */ var _helpers_string_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/string.helper */ 2463);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/local-storage.service */ 3683);
/* harmony import */ var _shared_regex_room_name_regex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/regex/room-name.regex */ 7752);








const canActivatePoker = route => {
  // First check if room name is available in URL
  const roomName = route.children[0]?.params['roomName'];
  if (roomName && !!roomName.match(_shared_regex_room_name_regex__WEBPACK_IMPORTED_MODULE_3__.ROOM_NAME_REGEX)) return true;
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router);
  // If no, check if one was saved in local storage and redirect to this URL if it's valid
  const localStorageRoomName = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService).getRoomNameFromLocalStorage();
  if (localStorageRoomName && !!localStorageRoomName.match(_shared_regex_room_name_regex__WEBPACK_IMPORTED_MODULE_3__.ROOM_NAME_REGEX)) return router.parseUrl(`/poker/${localStorageRoomName}`);
  // Else, open dialog to join a room of be redirected to a random one
  const dialog = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog);
  return dialog.open(_components_dialogs_join_room_dialog_join_room_dialog_component__WEBPACK_IMPORTED_MODULE_0__.JoinRoomDialogComponent).afterClosed().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(room => {
    return room ? router.parseUrl(`/poker/${room}`) : router.parseUrl(`/poker/${_helpers_string_helper__WEBPACK_IMPORTED_MODULE_1__.StringHelper.generateRandomPhilippeRoomName()}`);
  }));
};

/***/ }),

/***/ 2463:
/*!******************************************!*\
  !*** ./src/app/helpers/string.helper.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StringHelper: () => (/* binding */ StringHelper)
/* harmony export */ });
class StringHelper {
  static generateRandomPhilippeRoomName() {
    return `philippe-room-${Math.floor(Math.random() * 100000)}`;
  }
}

/***/ }),

/***/ 658:
/*!***********************************************!*\
  !*** ./src/app/maps/user-effect-sound.map.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   USER_EFFECTS_SOUND_MAP: () => (/* binding */ USER_EFFECTS_SOUND_MAP)
/* harmony export */ });
/* harmony import */ var _shared_enums_user_effect_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/enums/user-effect.enum */ 4328);

const USER_EFFECTS_SOUND_MAP = {
  [_shared_enums_user_effect_enum__WEBPACK_IMPORTED_MODULE_0__.UserEffect.Philippe]: 'philippe.mp3',
  [_shared_enums_user_effect_enum__WEBPACK_IMPORTED_MODULE_0__.UserEffect.Issou]: 'issou.mp3',
  [_shared_enums_user_effect_enum__WEBPACK_IMPORTED_MODULE_0__.UserEffect.Arretez]: 'arretez.mp3',
  [_shared_enums_user_effect_enum__WEBPACK_IMPORTED_MODULE_0__.UserEffect.PutainGenial]: 'putain-genial.mp3',
  [_shared_enums_user_effect_enum__WEBPACK_IMPORTED_MODULE_0__.UserEffect.Leviosa]: 'leviosa.mp3',
  [_shared_enums_user_effect_enum__WEBPACK_IMPORTED_MODULE_0__.UserEffect.OhYeah]: 'oh-yeah.mp3'
};

/***/ }),

/***/ 2034:
/*!**********************************************!*\
  !*** ./src/app/services/confetti.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfettiService: () => (/* binding */ ConfettiService)
/* harmony export */ });
/* harmony import */ var canvas_confetti__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! canvas-confetti */ 4592);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class ConfettiService {
  constructor() {
    this.CONFETTI_FACTORY = canvas_confetti__WEBPACK_IMPORTED_MODULE_0__.create(document.getElementById('myCanvas'), {
      resize: true,
      useWorker: true
    });
    this.CONFETTI_BASIC_OPTIONS = {
      particleCount: 200,
      spread: 70
    };
    this.confettiInterval = null;
  }
  sendConfettisFromBottomCorners() {
    const intervals = [0, 500, 1000, 1500, 2000, 2500];
    intervals.forEach(interval => {
      setTimeout(() => {
        this.sendConfettis({
          angle: 45,
          origin: {
            x: -0.1,
            y: 1.1
          }
        });
        this.sendConfettis({
          angle: 135,
          origin: {
            x: 1.1,
            y: 1.1
          }
        });
      }, interval);
    });
  }
  sendConfettisFromTop() {
    setTimeout(() => {
      const distances = [0, 0.2, 0.4, 0.6, 0.8, 1];
      distances.forEach(distance => {
        this.sendConfettis({
          angle: -90,
          origin: {
            x: distance,
            y: -0.6
          }
        });
      });
      this.confettiInterval = globalThis.setInterval(() => {
        const distances = [0, 0.2, 0.4, 0.6, 0.8, 1];
        distances.forEach(distance => {
          this.sendConfettis({
            angle: -90,
            origin: {
              x: distance,
              y: -0.6
            }
          });
        });
      }, 1000);
    }, 350);
  }
  clearConfettiInterval() {
    if (this.confettiInterval) globalThis.clearInterval(this.confettiInterval);
  }
  sendConfettis(options) {
    this.CONFETTI_FACTORY({
      ...this.CONFETTI_BASIC_OPTIONS,
      ...options
    });
  }
  static #_ = this.ɵfac = function ConfettiService_Factory(t) {
    return new (t || ConfettiService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ConfettiService,
    factory: ConfettiService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3683:
/*!***************************************************!*\
  !*** ./src/app/services/local-storage.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalStorageService: () => (/* binding */ LocalStorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class LocalStorageService {
  setUserNameToLocalStorage(userName) {
    globalThis.localStorage.setItem('userName', userName);
  }
  getUserNameFromLocalStorage() {
    return globalThis.localStorage.getItem('userName');
  }
  setRoomNameToLocalStorage(roomName) {
    globalThis.localStorage.setItem('roomName', roomName);
  }
  getRoomNameFromLocalStorage() {
    return globalThis.localStorage.getItem('roomName');
  }
  static #_ = this.ɵfac = function LocalStorageService_Factory(t) {
    return new (t || LocalStorageService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: LocalStorageService,
    factory: LocalStorageService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8504:
/*!******************************************!*\
  !*** ./src/app/services/spot.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpotService: () => (/* binding */ SpotService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class SpotService {
  constructor() {
    this.spotInterval = null;
    this.spots = [];
  }
  initSpots(spots) {
    this.spots = spots;
  }
  startTheShow() {
    setTimeout(() => {
      const randomSpot = this.spots[this.randomSpotIndex()];
      if (randomSpot.classList.contains('hidden')) {
        randomSpot.classList.remove('hidden');
      } else {
        randomSpot.classList.add('hidden');
      }
      this.spotInterval = globalThis.setInterval(() => {
        const randomSpot = this.spots[this.randomSpotIndex()];
        if (randomSpot.classList.contains('hidden')) {
          randomSpot.classList.remove('hidden');
        } else {
          randomSpot.classList.add('hidden');
        }
      }, 500);
    }, 350);
  }
  finishTheShow() {
    this.spots.forEach(spot => {
      spot.classList.add('hidden');
    });
    if (this.spotInterval) globalThis.clearInterval(this.spotInterval);
  }
  randomSpotIndex() {
    return Math.floor(Math.random() * this.spots.length);
  }
  static #_ = this.ɵfac = function SpotService_Factory(t) {
    return new (t || SpotService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: SpotService,
    factory: SpotService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7822:
/*!***********************************************!*\
  !*** ./src/app/services/sw-update.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SwUpdateService: () => (/* binding */ SwUpdateService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/service-worker */ 1509);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4520);
/* harmony import */ var _components_dialogs_update_available_dialog_update_available_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/dialogs/update-available-dialog/update-available-dialog.component */ 8612);






class SwUpdateService {
  constructor() {
    this.swUpdate = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_service_worker__WEBPACK_IMPORTED_MODULE_2__.SwUpdate);
    this.matDialog = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog);
  }
  initCheckingForUpdate() {
    this.swUpdate.versionUpdates.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.filter)(event => event.type === 'VERSION_READY')).subscribe(() => {
      this.matDialog.open(_components_dialogs_update_available_dialog_update_available_dialog_component__WEBPACK_IMPORTED_MODULE_0__.UpdateAvailableDialogComponent);
    });
  }
  static #_ = this.ɵfac = function SwUpdateService_Factory(t) {
    return new (t || SwUpdateService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: SwUpdateService,
    factory: SwUpdateService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5901:
/*!************************************************!*\
  !*** ./src/app/services/web-socket.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebSocketService: () => (/* binding */ WebSocketService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4520);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _enums_socket_event_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/socket-event.enum */ 4083);
/* harmony import */ var _shared_enums_message_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/enums/message-type.enum */ 6442);
/* harmony import */ var _shared_enums_room_effect_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/enums/room-effect.enum */ 4653);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);






class WebSocketService {
  constructor() {
    this.socketEvent$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.roomStateEvent$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject({
      name: '',
      users: [],
      isHidden: true,
      roomEffect: null,
      roomEffectCoolDowns: {
        [_shared_enums_room_effect_enum__WEBPACK_IMPORTED_MODULE_3__.RoomEffect.Fanfare]: 0,
        [_shared_enums_room_effect_enum__WEBPACK_IMPORTED_MODULE_3__.RoomEffect.Ignition]: 0,
        [_shared_enums_room_effect_enum__WEBPACK_IMPORTED_MODULE_3__.RoomEffect.Explosion]: 0,
        [_shared_enums_room_effect_enum__WEBPACK_IMPORTED_MODULE_3__.RoomEffect.Chenille]: 0,
        [_shared_enums_room_effect_enum__WEBPACK_IMPORTED_MODULE_3__.RoomEffect.NoFun]: 0
      }
    });
    this.userEvent$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject('');
  }
  initWebSocket() {
    this.socket = new WebSocket(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.prod ? 'wss' : 'ws'}://${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.wsUrl}/web_socket`);
    this.handleOpen();
    this.handleMessage();
    this.handleClose();
    this.registerEventDispatchers();
  }
  closeWebSocket() {
    this.socket.close();
  }
  handleOpen() {
    this.socket.addEventListener(_enums_socket_event_enum__WEBPACK_IMPORTED_MODULE_1__.SocketEvent.Open, () => {
      this.socketEvent$.next({
        type: _enums_socket_event_enum__WEBPACK_IMPORTED_MODULE_1__.SocketEvent.Open,
        message: null
      });
    });
  }
  handleMessage() {
    this.socket.addEventListener(_enums_socket_event_enum__WEBPACK_IMPORTED_MODULE_1__.SocketEvent.Message, event => {
      try {
        const message = JSON.parse(event.data);
        this.socketEvent$.next({
          type: _enums_socket_event_enum__WEBPACK_IMPORTED_MODULE_1__.SocketEvent.Message,
          message
        });
      } catch (error) {
        console.error('Failed to parse websocket message');
      }
    });
  }
  registerEventDispatchers() {
    this.socketEvent$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.filter)(event => event.type === _enums_socket_event_enum__WEBPACK_IMPORTED_MODULE_1__.SocketEvent.Message)).subscribe(event => {
      const message = event.message;
      if (message?.event === _shared_enums_message_type_enum__WEBPACK_IMPORTED_MODULE_2__.MessageType.RoomUpdate) {
        // Emit new room state
        this.roomStateEvent$.next(message.data);
      }
    });
    this.socketEvent$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.filter)(event => event.type === _enums_socket_event_enum__WEBPACK_IMPORTED_MODULE_1__.SocketEvent.Message)).subscribe(event => {
      const message = event.message;
      if (message?.event === _shared_enums_message_type_enum__WEBPACK_IMPORTED_MODULE_2__.MessageType.UserSuccessfullyConnected) {
        // Emit new room state
        this.userEvent$.next(message.data);
      }
    });
  }
  handleClose() {
    this.socket.addEventListener(_enums_socket_event_enum__WEBPACK_IMPORTED_MODULE_1__.SocketEvent.Close, () => {
      this.initWebSocket();
    });
  }
  sendVoteMessage(vote) {
    this.sendWebSocketMessage({
      event: _shared_enums_message_type_enum__WEBPACK_IMPORTED_MODULE_2__.MessageType.UserVoteUpdate,
      data: vote
    });
  }
  sendUserEffectMessage(userEffect) {
    this.sendWebSocketMessage({
      event: _shared_enums_message_type_enum__WEBPACK_IMPORTED_MODULE_2__.MessageType.UserEffectUpdate,
      data: userEffect
    });
  }
  sendUserNameUpdateMessage(userName) {
    this.sendWebSocketMessage({
      event: _shared_enums_message_type_enum__WEBPACK_IMPORTED_MODULE_2__.MessageType.UserNameUpdate,
      data: userName
    });
  }
  sendUserActionUpdateMessage(userAction) {
    this.sendWebSocketMessage({
      event: _shared_enums_message_type_enum__WEBPACK_IMPORTED_MODULE_2__.MessageType.UserActionUpdate,
      data: userAction
    });
  }
  sendUserJoinRoomMessage(roomName) {
    this.sendWebSocketMessage({
      event: _shared_enums_message_type_enum__WEBPACK_IMPORTED_MODULE_2__.MessageType.UserJoinRoom,
      data: roomName
    });
  }
  sendToggleHideMessage() {
    this.sendWebSocketMessage({
      event: _shared_enums_message_type_enum__WEBPACK_IMPORTED_MODULE_2__.MessageType.HiddenUpdate
    });
  }
  sendResetVotesMessage() {
    this.sendWebSocketMessage({
      event: _shared_enums_message_type_enum__WEBPACK_IMPORTED_MODULE_2__.MessageType.ResetVotes
    });
  }
  sendNoFunOnMessage() {
    this.sendWebSocketMessage({
      event: _shared_enums_message_type_enum__WEBPACK_IMPORTED_MODULE_2__.MessageType.NoFunOn
    });
  }
  sendNoFunOffMessage() {
    this.sendWebSocketMessage({
      event: _shared_enums_message_type_enum__WEBPACK_IMPORTED_MODULE_2__.MessageType.NoFunOff
    });
  }
  sendWebSocketMessage(wsMessage) {
    try {
      const stringifiedMessage = JSON.stringify(wsMessage);
      this.socket.send(stringifiedMessage);
    } catch (error) {
      console.error('Failed to stringify websocket message before sending it');
    }
  }
  static #_ = this.ɵfac = function WebSocketService_Factory(t) {
    return new (t || WebSocketService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: WebSocketService,
    factory: WebSocketService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6442:
/*!***************************************************!*\
  !*** ./src/app/shared/enums/message-type.enum.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageType: () => (/* binding */ MessageType)
/* harmony export */ });
var MessageType;
(function (MessageType) {
  MessageType["UserJoinRoom"] = "user_join_room";
  MessageType["UserSuccessfullyConnected"] = "user_successfully_connected";
  MessageType["UserVoteUpdate"] = "user_vote_update";
  MessageType["UserNameUpdate"] = "user_name_update";
  MessageType["UserEffectUpdate"] = "user_effect_update";
  MessageType["UserActionUpdate"] = "user_action_update";
  MessageType["RoomUpdate"] = "room_update";
  MessageType["HiddenUpdate"] = "hidden_update";
  MessageType["NoFunOn"] = "no_fun_on";
  MessageType["NoFunOff"] = "no_fun_off";
  MessageType["ResetVotes"] = "reset_votes";
})(MessageType || (MessageType = {}));

/***/ }),

/***/ 4653:
/*!**************************************************!*\
  !*** ./src/app/shared/enums/room-effect.enum.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoomEffect: () => (/* binding */ RoomEffect)
/* harmony export */ });
var RoomEffect;
(function (RoomEffect) {
  RoomEffect["Fanfare"] = "Fanfare";
  RoomEffect["Ignition"] = "Ignition";
  RoomEffect["Explosion"] = "Explosion";
  RoomEffect["Chenille"] = "Chenille";
  RoomEffect["NoFun"] = "NoFun";
})(RoomEffect || (RoomEffect = {}));

/***/ }),

/***/ 5815:
/*!**************************************************!*\
  !*** ./src/app/shared/enums/user-action.enum.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserAction: () => (/* binding */ UserAction)
/* harmony export */ });
var UserAction;
(function (UserAction) {
  UserAction["NuclearIgnition"] = "NuclearIgnition";
  UserAction["ChenilleIgnition"] = "ChenilleIgnition";
})(UserAction || (UserAction = {}));

/***/ }),

/***/ 4328:
/*!**************************************************!*\
  !*** ./src/app/shared/enums/user-effect.enum.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserEffect: () => (/* binding */ UserEffect)
/* harmony export */ });
var UserEffect;
(function (UserEffect) {
  UserEffect["Philippe"] = "Philippe";
  UserEffect["Issou"] = "Issou";
  UserEffect["Arretez"] = "Arretez";
  UserEffect["PutainGenial"] = "PutainGenial";
  UserEffect["Leviosa"] = "Leviosa";
  UserEffect["OhYeah"] = "OhYeah";
})(UserEffect || (UserEffect = {}));

/***/ }),

/***/ 1382:
/*!*************************************************!*\
  !*** ./src/app/shared/enums/vote-value.enum.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VoteValue: () => (/* binding */ VoteValue)
/* harmony export */ });
var VoteValue;
(function (VoteValue) {
  VoteValue["One"] = "1";
  VoteValue["Two"] = "2";
  VoteValue["Three"] = "3";
  VoteValue["Five"] = "5";
  VoteValue["Eight"] = "8";
  VoteValue["Thirteen"] = "13";
  VoteValue["TwentyOne"] = "21";
  VoteValue["Shrug"] = "\uD83E\uDD37";
  VoteValue["Graive"] = "\uD83D\uDFE5";
  VoteValue["MiddleFinger"] = "\uD83D\uDD95";
  VoteValue["Surf"] = "\uD83C\uDFC4";
})(VoteValue || (VoteValue = {}));

/***/ }),

/***/ 261:
/*!********************************************!*\
  !*** ./src/app/shared/maps/effects.map.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   USER_EFFECTS_MAP: () => (/* binding */ USER_EFFECTS_MAP)
/* harmony export */ });
/* harmony import */ var _enums_user_effect_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/user-effect.enum */ 4328);

const USER_EFFECTS_MAP = {
  [_enums_user_effect_enum__WEBPACK_IMPORTED_MODULE_0__.UserEffect.Philippe]: {
    duration: 1500,
    volume: 0.3,
    message: 'Philippe !'
  },
  [_enums_user_effect_enum__WEBPACK_IMPORTED_MODULE_0__.UserEffect.Issou]: {
    duration: 3100,
    volume: 0.5,
    message: 'Issou !'
  },
  [_enums_user_effect_enum__WEBPACK_IMPORTED_MODULE_0__.UserEffect.Arretez]: {
    duration: 2500,
    volume: 0.8,
    message: 'Arrêtez !'
  },
  [_enums_user_effect_enum__WEBPACK_IMPORTED_MODULE_0__.UserEffect.PutainGenial]: {
    duration: 1467,
    volume: 0.2,
    message: 'Génial !'
  },
  [_enums_user_effect_enum__WEBPACK_IMPORTED_MODULE_0__.UserEffect.Leviosa]: {
    duration: 3000,
    volume: 0.5,
    message: 'Leviosa !'
  },
  [_enums_user_effect_enum__WEBPACK_IMPORTED_MODULE_0__.UserEffect.OhYeah]: {
    duration: 3000,
    volume: 0.4,
    message: 'Oh Yeah !'
  }
};

/***/ }),

/***/ 531:
/*!*****************************************!*\
  !*** ./src/app/shared/maps/vote.map.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VOTE_VALUE_WEIGHT_MAP: () => (/* binding */ VOTE_VALUE_WEIGHT_MAP)
/* harmony export */ });
/* harmony import */ var _enums_vote_value_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/vote-value.enum */ 1382);

const VOTE_VALUE_WEIGHT_MAP = {
  [_enums_vote_value_enum__WEBPACK_IMPORTED_MODULE_0__.VoteValue.One]: 1,
  [_enums_vote_value_enum__WEBPACK_IMPORTED_MODULE_0__.VoteValue.Two]: 2,
  [_enums_vote_value_enum__WEBPACK_IMPORTED_MODULE_0__.VoteValue.Three]: 3,
  [_enums_vote_value_enum__WEBPACK_IMPORTED_MODULE_0__.VoteValue.Five]: 5,
  [_enums_vote_value_enum__WEBPACK_IMPORTED_MODULE_0__.VoteValue.Eight]: 8,
  [_enums_vote_value_enum__WEBPACK_IMPORTED_MODULE_0__.VoteValue.Thirteen]: 13,
  [_enums_vote_value_enum__WEBPACK_IMPORTED_MODULE_0__.VoteValue.TwentyOne]: 21,
  [_enums_vote_value_enum__WEBPACK_IMPORTED_MODULE_0__.VoteValue.Shrug]: 22,
  [_enums_vote_value_enum__WEBPACK_IMPORTED_MODULE_0__.VoteValue.Graive]: 23,
  [_enums_vote_value_enum__WEBPACK_IMPORTED_MODULE_0__.VoteValue.MiddleFinger]: 24,
  [_enums_vote_value_enum__WEBPACK_IMPORTED_MODULE_0__.VoteValue.Surf]: 25
};

/***/ }),

/***/ 7752:
/*!*************************************************!*\
  !*** ./src/app/shared/regex/room-name.regex.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROOM_NAME_REGEX: () => (/* binding */ ROOM_NAME_REGEX)
/* harmony export */ });
const ROOM_NAME_REGEX = /^[a-z\-0-9]+$/;

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  wsUrl: 'localhost:8080',
  prod: false
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map