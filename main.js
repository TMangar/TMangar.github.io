(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+22f":
/*!********************************************************************************!*\
  !*** ./src/app/components/expanding-card/expanding-timeline-card.component.ts ***!
  \********************************************************************************/
/*! exports provided: ExpandingTimelineCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandingTimelineCardComponent", function() { return ExpandingTimelineCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = ["big"];
const _c1 = ["small"];
function ExpandingTimelineCardComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const paragraph_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](paragraph_r6);
} }
function ExpandingTimelineCardComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const responsibility_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](responsibility_r7);
} }
function ExpandingTimelineCardComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpandingTimelineCardComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.toggleExpanded(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "See More \u25BC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExpandingTimelineCardComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpandingTimelineCardComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.toggleExpanded(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "See Less \u25B2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function (a0, a1) { return { expandedHeight: a0, collapsedHeight: a1 }; };
const _c3 = function (a0, a1) { return { value: a0, params: a1 }; };
const ExtraSpacing = 25;
class ExpandingTimelineCardComponent {
    constructor() {
        this.expanded = false;
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.collapsedHeight = this.small.nativeElement.scrollHeight + ExtraSpacing + 'px';
            this.expandedHeight = this.big.nativeElement.scrollHeight + 'px';
        }, 25);
    }
    toggleExpanded() {
        this.expanded = !this.expanded;
    }
}
ExpandingTimelineCardComponent.ɵfac = function ExpandingTimelineCardComponent_Factory(t) { return new (t || ExpandingTimelineCardComponent)(); };
ExpandingTimelineCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExpandingTimelineCardComponent, selectors: [["app-expanding-timeline-card"]], viewQuery: function ExpandingTimelineCardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.big = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.small = _t.first);
    } }, inputs: { responsibilities: "responsibilities", blurb: "blurb" }, decls: 11, vars: 11, consts: [[1, "expanding-timeline-card_container"], [1, "expanding-timeline-card_big"], ["big", ""], [1, "expanding-timeline-card_small"], ["small", ""], [4, "ngFor", "ngForOf"], [1, "expanding-timeline-card_rest"], [1, "expanding-timeline-card_open"], ["class", "expanding-timeline-card_button", 3, "click", 4, "ngIf"], [1, "expanding-timeline-card_button", 3, "click"]], template: function ExpandingTimelineCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExpandingTimelineCardComponent_div_5_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExpandingTimelineCardComponent_li_8_Template, 2, 1, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExpandingTimelineCardComponent_button_9_Template, 2, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExpandingTimelineCardComponent_button_10_Template, 2, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@expand", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c3, ctx.expanded, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c2, ctx.expandedHeight, ctx.collapsedHeight)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.blurb);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.responsibilities);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.expanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.expanded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".expanding-timeline-card_container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n}\n\n.expanding-timeline-card_big[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin-bottom: 20px;\n  grid-column: span 4;\n}\n\n.expanding-timeline-card_small[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n\n.expanding-timeline-card_open[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  margin-top: 0;\n}\n\n.expanding-timeline-card_rest[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-top: 0;\n}\n\n.expanding-timeline-card_button[_ngcontent-%COMP%] {\n  background-color: #25de72;\n  border-radius: 4px;\n  border: none;\n  color: white;\n  font-size: 16px;\n  font-family: Roboto, serif;\n  grid-column: 3/5;\n  padding: 5px;\n  min-width: 100px;\n}\n\n@media (min-device-width: 600px) {\n  .expanding-timeline-card_container[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n  }\n\n  .expanding-timeline-card_big[_ngcontent-%COMP%] {\n    grid-column: span 8;\n  }\n\n  .expanding-timeline-card_button[_ngcontent-%COMP%] {\n    grid-column: 7/8;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leHBhbmRpbmctY2FyZC9leHBhbmRpbmctdGltZWxpbmUtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQ0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFBO0lBQ0Esc0RBQUE7RUFDRjs7RUFDQTtJQUNFLG1CQUFBO0VBRUY7O0VBQ0E7SUFDRSxnQkFBQTtFQUVGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2V4cGFuZGluZy1jYXJkL2V4cGFuZGluZy10aW1lbGluZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cGFuZGluZy10aW1lbGluZS1jYXJkX2NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcclxufVxyXG5cclxuLmV4cGFuZGluZy10aW1lbGluZS1jYXJkX2JpZyB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGdyaWQtY29sdW1uOiBzcGFuIDQ7XHJcbn1cclxuXHJcbi5leHBhbmRpbmctdGltZWxpbmUtY2FyZF9zbWFsbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmV4cGFuZGluZy10aW1lbGluZS1jYXJkX29wZW4ge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLmV4cGFuZGluZy10aW1lbGluZS1jYXJkX3Jlc3Qge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbn1cclxuXHJcbi5leHBhbmRpbmctdGltZWxpbmUtY2FyZF9idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNWRlNzI7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNlcmlmO1xyXG4gIGdyaWQtY29sdW1uOiAzLzU7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1pbi13aWR0aDoxMDBweDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4tZGV2aWNlLXdpZHRoOiA2MDBweCkge1xyXG4gIC5leHBhbmRpbmctdGltZWxpbmUtY2FyZF9jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcclxuICB9XHJcbiAgLmV4cGFuZGluZy10aW1lbGluZS1jYXJkX2JpZyB7XHJcbiAgICBncmlkLWNvbHVtbjogc3BhbiA4O1xyXG4gIH1cclxuXHJcbiAgLmV4cGFuZGluZy10aW1lbGluZS1jYXJkX2J1dHRvbiB7XHJcbiAgICBncmlkLWNvbHVtbjogNy84O1xyXG4gIH1cclxufVxyXG5cclxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('expand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    height: '{{expandedHeight}}'
                }), { params: { expandedHeight: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AUTO_STYLE"] } }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    height: '{{collapsedHeight}}'
                }), { params: { collapsedHeight: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AUTO_STYLE"] } }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('true => false', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-out')
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('false => true', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in')
                ]),
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExpandingTimelineCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-expanding-timeline-card',
                templateUrl: './expanding-timeline-card.component.html',
                styleUrls: ['./expanding-timeline-card.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('expand', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            height: '{{expandedHeight}}'
                        }), { params: { expandedHeight: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AUTO_STYLE"] } }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            height: '{{collapsedHeight}}'
                        }), { params: { collapsedHeight: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AUTO_STYLE"] } }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('true => false', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-out')
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('false => true', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in')
                        ]),
                    ]),
                ]
            }]
    }], null, { responsibilities: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], blurb: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], big: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['big']
        }], small: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['small']
        }] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Repos\TMangar.github.io\angular-resume\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "LsEZ":
/*!***********************************************************!*\
  !*** ./src/app/components/timeline/timeline.component.ts ***!
  \***********************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_work_experience_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/work-experience.service */ "MIx7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _expanding_card_expanding_timeline_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../expanding-card/expanding-timeline-card.component */ "+22f");





function TimelineComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-expanding-timeline-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const job_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](job_r1.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("responsibilities", job_r1.responsibilities)("blurb", job_r1.blurb);
} }
class TimelineComponent {
    constructor(workExperienceService) {
        this.workExperienceService = workExperienceService;
    }
    ngOnInit() {
        this.workExperienceService.getWorkExperience().subscribe((result) => {
            this.jobs = result;
        });
    }
}
TimelineComponent.ɵfac = function TimelineComponent_Factory(t) { return new (t || TimelineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_work_experience_service__WEBPACK_IMPORTED_MODULE_1__["WorkExperienceService"])); };
TimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimelineComponent, selectors: [["app-timeline"]], decls: 6, vars: 1, consts: [[1, "timeline"], [1, "header-card"], [1, "header-card_title"], ["class", "timeline-container right", 4, "ngFor", "ngForOf"], [1, "timeline-end", "right"], [1, "timeline-container", "right"], [1, "timeline-content"], [3, "responsibilities", "blurb"]], template: function TimelineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "WORK EXPERIENCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TimelineComponent_div_4_Template, 5, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.jobs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _expanding_card_expanding_timeline_card_component__WEBPACK_IMPORTED_MODULE_3__["ExpandingTimelineCardComponent"]], styles: [".timeline[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n\r\n.timeline[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  max-width: 1200px;\r\n  margin-top: 20px;\r\n  margin-left: 20px;\r\n  grid-column: 2/8;\r\n}\r\n\r\n\r\n\r\n.timeline[_ngcontent-%COMP%]::after {\r\n  content: '';\r\n  position: absolute;\r\n  width: 6px;\r\n  background-color: #00A0E9;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 5%;\r\n  margin-left: -3px;\r\n}\r\n\r\n.timeline-end[_ngcontent-%COMP%]::after {\r\n  content: '';\r\n  position: absolute;\r\n  width: 25px;\r\n  height: 25px;\r\n  right: -17px;\r\n  background-color: #00A0E9;\r\n  border: 4px solid #00A0E9;\r\n  top: -15px;\r\n  border-radius: 50%;\r\n  z-index: 1;\r\n}\r\n\r\n.timeline-end[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n\r\n\r\n.timeline-container[_ngcontent-%COMP%] {\r\n  padding: 10px 40px;\r\n  position: relative;\r\n  background-color: inherit;\r\n}\r\n\r\n\r\n\r\n.timeline-container[_ngcontent-%COMP%]::after {\r\n  content: '';\r\n  position: absolute;\r\n  width: 25px;\r\n  height: 25px;\r\n  right: -17px;\r\n  background-color: white;\r\n  border: 4px solid #00A0E9;\r\n  top: 15px;\r\n  border-radius: 50%;\r\n  z-index: 1;\r\n}\r\n\r\n\r\n\r\n.left[_ngcontent-%COMP%] {\r\n  left: 0;\r\n}\r\n\r\n\r\n\r\n.right[_ngcontent-%COMP%] {\r\n  left: 5%;\r\n}\r\n\r\n\r\n\r\n.left[_ngcontent-%COMP%]::before {\r\n  content: \" \";\r\n  height: 0;\r\n  position: absolute;\r\n  top: 22px;\r\n  width: 0;\r\n  z-index: 1;\r\n  right: 30px;\r\n  border-width: 10px 0 10px 10px;\r\n  border-color: transparent transparent transparent white;\r\n}\r\n\r\n\r\n\r\n.right[_ngcontent-%COMP%]::before {\r\n  content: \" \";\r\n  height: 0;\r\n  position: absolute;\r\n  top: 22px;\r\n  width: 0;\r\n  z-index: 1;\r\n  left: 30px;\r\n  border-width: 10px 10px 10px 0;\r\n  border-color: transparent white transparent transparent;\r\n}\r\n\r\n\r\n\r\n.right[_ngcontent-%COMP%]::after {\r\n  left: -16px;\r\n}\r\n\r\n\r\n\r\n.timeline-content[_ngcontent-%COMP%] {\r\n  padding: 20px 30px;\r\n  background-color: white;\r\n  position: relative;\r\n  border-radius: 6px;\r\n  margin-left: 20px;\r\n  min-width:300px;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 600px) {\r\n  \r\n  .timeline[_ngcontent-%COMP%]::after {\r\n    left: 31px;\r\n  }\r\n\r\n  \r\n  .container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding-left: 70px;\r\n    padding-right: 25px;\r\n  }\r\n\r\n  \r\n  .container[_ngcontent-%COMP%]::before {\r\n    left: 60px;\r\n    border-width: 10px 10px 10px 0;\r\n    border-color: transparent white transparent transparent;\r\n  }\r\n\r\n  \r\n  .left[_ngcontent-%COMP%]::after, .right[_ngcontent-%COMP%]::after {\r\n    left: 15px;\r\n  }\r\n\r\n  \r\n  .right[_ngcontent-%COMP%] {\r\n    left: 0%;\r\n  }\r\n}\r\n\r\n.header-card[_ngcontent-%COMP%] {\r\n  background-color: #00A0E9;\r\n  padding: 5px;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  position: relative;\r\n  bottom: 36px;\r\n  left: 10px;\r\n  box-shadow: 3px 3px 8px rgba(0,0,0,.4);\r\n\r\n}\r\n\r\n.header-card_title[_ngcontent-%COMP%] {\r\n  color: white;\r\n  margin: 5px;\r\n}\r\n\r\n@media (min-device-width: 600px) {\r\n  .timeline-content[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBLDZDQUE2Qzs7QUFDN0M7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBLDZDQUE2Qzs7QUFDN0M7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsTUFBTTtFQUNOLFNBQVM7RUFDVCxRQUFRO0VBQ1IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLDZCQUE2Qjs7QUFDN0I7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQSxnQ0FBZ0M7O0FBQ2hDO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBLG9DQUFvQzs7QUFDcEM7RUFDRSxPQUFPO0FBQ1Q7O0FBRUEscUNBQXFDOztBQUNyQztFQUNFLFFBQVE7QUFDVjs7QUFFQSxzREFBc0Q7O0FBQ3REO0VBQ0UsWUFBWTtFQUNaLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixVQUFVO0VBQ1YsV0FBVztFQUNYLDhCQUE4QjtFQUM5Qix1REFBdUQ7QUFDekQ7O0FBRUEsc0RBQXNEOztBQUN0RDtFQUNFLFlBQVk7RUFDWixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsVUFBVTtFQUNWLFVBQVU7RUFDViw4QkFBOEI7RUFDOUIsdURBQXVEO0FBQ3pEOztBQUVBLG9EQUFvRDs7QUFDcEQ7RUFDRSxXQUFXO0FBQ2I7O0FBRUEsdUJBQXVCOztBQUN2QjtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQSx3RUFBd0U7O0FBQ3hFO0VBQ0UsbUNBQW1DO0VBQ25DO0lBQ0UsVUFBVTtFQUNaOztFQUVBLDBCQUEwQjtFQUMxQjtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCOztFQUVBLHFEQUFxRDtFQUNyRDtJQUNFLFVBQVU7SUFDViw4QkFBOEI7SUFDOUIsdURBQXVEO0VBQ3pEOztFQUVBLCtDQUErQztFQUMvQztJQUNFLFVBQVU7RUFDWjs7RUFFQSx3REFBd0Q7RUFDeEQ7SUFDRSxRQUFRO0VBQ1Y7QUFDRjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVO0VBQ1Ysc0NBQXNDOztBQUV4Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aW1lbGluZSA+ICoge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi8qIFRoZSBhY3R1YWwgdGltZWxpbmUgKHRoZSB2ZXJ0aWNhbCBydWxlcikgKi9cclxuLnRpbWVsaW5lIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBncmlkLWNvbHVtbjogMi84O1xyXG59XHJcblxyXG4vKiBUaGUgYWN0dWFsIHRpbWVsaW5lICh0aGUgdmVydGljYWwgcnVsZXIpICovXHJcbi50aW1lbGluZTo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEEwRTk7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiA1JTtcclxuICBtYXJnaW4tbGVmdDogLTNweDtcclxufVxyXG5cclxuLnRpbWVsaW5lLWVuZDo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMjVweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgcmlnaHQ6IC0xN3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEEwRTk7XHJcbiAgYm9yZGVyOiA0cHggc29saWQgIzAwQTBFOTtcclxuICB0b3A6IC0xNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4udGltZWxpbmUtZW5kIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi8qIENvbnRhaW5lciBhcm91bmQgY29udGVudCAqL1xyXG4udGltZWxpbmUtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxMHB4IDQwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi8qIFRoZSBjaXJjbGVzIG9uIHRoZSB0aW1lbGluZSAqL1xyXG4udGltZWxpbmUtY29udGFpbmVyOjphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICByaWdodDogLTE3cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiA0cHggc29saWQgIzAwQTBFOTtcclxuICB0b3A6IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi8qIFBsYWNlIHRoZSBjb250YWluZXIgdG8gdGhlIGxlZnQgKi9cclxuLmxlZnQge1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi8qIFBsYWNlIHRoZSBjb250YWluZXIgdG8gdGhlIHJpZ2h0ICovXHJcbi5yaWdodCB7XHJcbiAgbGVmdDogNSU7XHJcbn1cclxuXHJcbi8qIEFkZCBhcnJvd3MgdG8gdGhlIGxlZnQgY29udGFpbmVyIChwb2ludGluZyByaWdodCkgKi9cclxuLmxlZnQ6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIycHg7XHJcbiAgd2lkdGg6IDA7XHJcbiAgei1pbmRleDogMTtcclxuICByaWdodDogMzBweDtcclxuICBib3JkZXItd2lkdGg6IDEwcHggMCAxMHB4IDEwcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB3aGl0ZTtcclxufVxyXG5cclxuLyogQWRkIGFycm93cyB0byB0aGUgcmlnaHQgY29udGFpbmVyIChwb2ludGluZyBsZWZ0KSAqL1xyXG4ucmlnaHQ6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIycHg7XHJcbiAgd2lkdGg6IDA7XHJcbiAgei1pbmRleDogMTtcclxuICBsZWZ0OiAzMHB4O1xyXG4gIGJvcmRlci13aWR0aDogMTBweCAxMHB4IDEwcHggMDtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHdoaXRlIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4vKiBGaXggdGhlIGNpcmNsZSBmb3IgY29udGFpbmVycyBvbiB0aGUgcmlnaHQgc2lkZSAqL1xyXG4ucmlnaHQ6OmFmdGVyIHtcclxuICBsZWZ0OiAtMTZweDtcclxufVxyXG5cclxuLyogVGhlIGFjdHVhbCBjb250ZW50ICovXHJcbi50aW1lbGluZS1jb250ZW50IHtcclxuICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBtaW4td2lkdGg6MzAwcHg7XHJcbn1cclxuXHJcbi8qIE1lZGlhIHF1ZXJpZXMgLSBSZXNwb25zaXZlIHRpbWVsaW5lIG9uIHNjcmVlbnMgbGVzcyB0aGFuIDYwMHB4IHdpZGUgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAvKiBQbGFjZSB0aGUgdGltZWxpbWUgdG8gdGhlIGxlZnQgKi9cclxuICAudGltZWxpbmU6OmFmdGVyIHtcclxuICAgIGxlZnQ6IDMxcHg7XHJcbiAgfVxyXG5cclxuICAvKiBGdWxsLXdpZHRoIGNvbnRhaW5lcnMgKi9cclxuICAuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcclxuICB9XHJcblxyXG4gIC8qIE1ha2Ugc3VyZSB0aGF0IGFsbCBhcnJvd3MgYXJlIHBvaW50aW5nIGxlZnR3YXJkcyAqL1xyXG4gIC5jb250YWluZXI6OmJlZm9yZSB7XHJcbiAgICBsZWZ0OiA2MHB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4IDEwcHggMTBweCAwO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB3aGl0ZSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuICB9XHJcblxyXG4gIC8qIE1ha2Ugc3VyZSBhbGwgY2lyY2xlcyBhcmUgYXQgdGhlIHNhbWUgc3BvdCAqL1xyXG4gIC5sZWZ0OjphZnRlciwgLnJpZ2h0OjphZnRlciB7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLyogTWFrZSBhbGwgcmlnaHQgY29udGFpbmVycyBiZWhhdmUgbGlrZSB0aGUgbGVmdCBvbmVzICovXHJcbiAgLnJpZ2h0IHtcclxuICAgIGxlZnQ6IDAlO1xyXG4gIH1cclxufVxyXG4uaGVhZGVyLWNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEEwRTk7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm90dG9tOiAzNnB4O1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogM3B4IDNweCA4cHggcmdiYSgwLDAsMCwuNCk7XHJcblxyXG59XHJcblxyXG4uaGVhZGVyLWNhcmRfdGl0bGUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4tZGV2aWNlLXdpZHRoOiA2MDBweCkge1xyXG4gIC50aW1lbGluZS1jb250ZW50IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimelineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-timeline',
                templateUrl: './timeline.component.html',
                styleUrls: ['./timeline.component.css']
            }]
    }], function () { return [{ type: _services_work_experience_service__WEBPACK_IMPORTED_MODULE_1__["WorkExperienceService"] }]; }, null); })();


/***/ }),

/***/ "MIx7":
/*!*****************************************************!*\
  !*** ./src/app/services/work-experience.service.ts ***!
  \*****************************************************/
/*! exports provided: WorkExperienceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkExperienceService", function() { return WorkExperienceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class WorkExperienceService {
    constructor(http) {
        this.http = http;
    }
    getWorkExperience() {
        return this.http.get('assets/data/work-experience.json');
    }
}
WorkExperienceService.ɵfac = function WorkExperienceService_Factory(t) { return new (t || WorkExperienceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
WorkExperienceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WorkExperienceService, factory: WorkExperienceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkExperienceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/timeline/timeline.component */ "LsEZ");



const _c0 = "body[_ngcontent-%COMP%] {\r\n  font-family: Roboto, serif;\r\n  background-color: lightgray;\r\n  min-width: 440px;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 20px 1fr 1fr 1fr 1fr 1fr 1fr 20px;\r\n  overflow-x: scroll;\r\n  min-width: 440px;\r\n}\r\n.section[_ngcontent-%COMP%] {\r\n  margin-bottom: 30px;\r\n  grid-column: 2/8;\r\n}\r\n.card[_ngcontent-%COMP%]:first-of-type {\r\n  margin-top: 20px;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.15), 0 2px 10px 0 rgba(0,0,0,0.11);\r\n  background-color: white;\r\n  min-width: 400px;\r\n}\r\n.header-card[_ngcontent-%COMP%] {\r\n  background-color: #00A0E9;\r\n  padding: 5px;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  position: relative;\r\n  bottom: 32px;\r\n  left: 10px;\r\n  box-shadow: 3px 3px 8px rgba(0,0,0,.4);\r\n}\r\n.header-card_title[_ngcontent-%COMP%] {\r\n  color: white;\r\n  margin: 5px;\r\n}\r\n.main-title[_ngcontent-%COMP%] {\r\n  font-size: 72px;\r\n  font-weight: bolder;\r\n  margin-bottom: 5px;\r\n  margin-top: 20px;\r\n}\r\n.subtitle[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  color: darkgrey;\r\n  margin-top: 0;\r\n  margin-bottom: 60px;\r\n}\r\n.icon[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  top: 10px;\r\n  left: 35px;\r\n  height: 50px;\r\n  width: 50px;\r\n}\r\n.timeline-container[_ngcontent-%COMP%] {\r\n  grid-column: 2/8;\r\n  margin-bottom: 40px;\r\n}\r\n.timeline-header[_ngcontent-%COMP%] {\r\n  padding-left: 25px;\r\n  position: relative;\r\n  bottom: -32px;\r\n}\r\n@font-face {\r\n  font-family: Roboto;\r\n  src: url(RobotoSlab-VariableFont_wght.woff);\r\n}\r\nh3[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n}\r\n.technical-skills_block[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-bottom: 20px;\r\n}\r\n.technical-skills_logo-container[_ngcontent-%COMP%] {\r\n  height: 150px;\r\n  width: 150px;\r\n}\r\n.technical-skills_logo[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: scale-down;\r\n}\r\n.technical-skills_label[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n.technical-skills_container[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\r\n  grid-auto-rows: 200px;\r\n  gap: 10px;\r\n}\r\n.interests_container[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  gap: 50px;\r\n}\r\n.interests_small-card[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.15), 0 2px 10px 0 rgba(0,0,0,0.11);\r\n  min-width: 100px;\r\n  background-color: white;\r\n  display: inline-grid;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.interests_logo-container[_ngcontent-%COMP%] {\r\n  height: 150px;\r\n  width: 150px;\r\n}\r\n.interests_logo[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: scale-down;\r\n}\r\n.interests_text[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n@media (min-device-width: 600px) {\r\n  .card[_ngcontent-%COMP%]:first-of-type {\r\n    margin-top: 100px;\r\n  }\r\n\r\n  .container[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\r\n  }\r\n  .timeline-container[_ngcontent-%COMP%] {\r\n    grid-column: 2/8;\r\n    margin-bottom: 40px;\r\n  }\r\n\r\n  .card[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.15), 0 2px 10px 0 rgba(0,0,0,0.11);\r\n    min-width: 100px;\r\n    grid-column: 2/8;\r\n    background-color: white;\r\n  }\r\n\r\n  .section[_ngcontent-%COMP%] {\r\n    margin-bottom: 40px;\r\n  }\r\n\r\n  .technical-skills_block[_ngcontent-%COMP%] {\r\n    display: inline-grid;\r\n    align-items: start;\r\n    justify-content: center;\r\n    margin-right: 10px;\r\n  }\r\n\r\n  .technical-skills_block[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHdEQUF3RDtFQUN4RCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGFBQWE7RUFDYix1RUFBdUU7RUFDdkUsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFVBQVU7RUFDVixzQ0FBc0M7QUFDeEM7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiwyQ0FBMkM7QUFDN0M7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsNERBQTREO0VBQzVELHFCQUFxQjtFQUNyQixTQUFTO0FBQ1g7QUFFQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsU0FBUztBQUNYO0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUVBQXVFO0VBQ3ZFLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNEQUFzRDtFQUN4RDtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7SUFDYix1RUFBdUU7SUFDdkUsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNlcmlmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICBtaW4td2lkdGg6IDQ0MHB4O1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDIwcHg7XHJcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gIG1pbi13aWR0aDogNDQwcHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIGdyaWQtY29sdW1uOiAyLzg7XHJcbn1cclxuXHJcbi5jYXJkOmZpcnN0LW9mLXR5cGUge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwwLDAsMC4xNSksIDAgMnB4IDEwcHggMCByZ2JhKDAsMCwwLDAuMTEpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG1pbi13aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXItY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQTBFOTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3R0b206IDMycHg7XHJcbiAgbGVmdDogMTBweDtcclxuICBib3gtc2hhZG93OiAzcHggM3B4IDhweCByZ2JhKDAsMCwwLC40KTtcclxufVxyXG5cclxuLmhlYWRlci1jYXJkX3RpdGxlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbi5tYWluLXRpdGxlIHtcclxuICBmb250LXNpemU6IDcycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLnN1YnRpdGxlIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IGRhcmtncmV5O1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxufVxyXG5cclxuLmljb24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgbGVmdDogMzVweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbi50aW1lbGluZS1jb250YWluZXIge1xyXG4gIGdyaWQtY29sdW1uOiAyLzg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLnRpbWVsaW5lLWhlYWRlciB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3R0b206IC0zMnB4O1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIHNyYzogdXJsKFJvYm90b1NsYWItVmFyaWFibGVGb250X3dnaHQud29mZik7XHJcbn1cclxuXHJcbmgzIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4udGVjaG5pY2FsLXNraWxsc19ibG9jayB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi50ZWNobmljYWwtc2tpbGxzX2xvZ28tY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIHdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuLnRlY2huaWNhbC1za2lsbHNfbG9nbyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XHJcbn1cclxuXHJcbi50ZWNobmljYWwtc2tpbGxzX2xhYmVsIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50ZWNobmljYWwtc2tpbGxzX2NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNTBweCwgMWZyKSk7XHJcbiAgZ3JpZC1hdXRvLXJvd3M6IDIwMHB4O1xyXG4gIGdhcDogMTBweDtcclxufVxyXG5cclxuLmludGVyZXN0c19jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuICBnYXA6IDUwcHg7XHJcbn1cclxuXHJcbi5pbnRlcmVzdHNfc21hbGwtY2FyZCB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsMCwwLDAuMTUpLCAwIDJweCAxMHB4IDAgcmdiYSgwLDAsMCwwLjExKTtcclxuICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnRlcmVzdHNfbG9nby1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4uaW50ZXJlc3RzX2xvZ28ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xyXG59XHJcblxyXG4uaW50ZXJlc3RzX3RleHQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtaW4tZGV2aWNlLXdpZHRoOiA2MDBweCkge1xyXG4gIC5jYXJkOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XHJcbiAgfVxyXG4gIC50aW1lbGluZS1jb250YWluZXIge1xyXG4gICAgZ3JpZC1jb2x1bW46IDIvODtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLDAsMCwwLjE1KSwgMCAycHggMTBweCAwIHJnYmEoMCwwLDAsMC4xMSk7XHJcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgZ3JpZC1jb2x1bW46IDIvODtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICB9XHJcblxyXG4gIC50ZWNobmljYWwtc2tpbGxzX2Jsb2NrIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAudGVjaG5pY2FsLXNraWxsc19ibG9jayA+IHVsIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbn1cclxuIl19 */";
class AppComponent {
    constructor() {
        this.title = 'angular-resume';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 154, vars: 0, consts: [["lang", "en"], ["charset", "UTF-8"], [1, "container"], [1, "card", "section"], [1, "main-title"], [1, "subtitle"], ["href", "https://www.linkedin.com/in/tom-mangar-3a438580/"], ["src", "../assets/images/linkedin.svg", 1, "icon"], [1, "header-card"], [1, "header-card_title"], [1, "technical-skills_container"], [1, "technical-skills_block"], [1, "technical-skills_logo-container"], ["src", "assets/images/skill-icons/c-sharp.png", "alt", "C Sharp", 1, "technical-skills_logo"], [1, "technical-skills_label"], ["src", "assets/images/skill-icons/ts.png", "alt", "TypeScript", 1, "technical-skills_logo"], ["src", "assets/images/skill-icons/JS.png", "alt", "JavaScript", 1, "technical-skills_logo"], ["src", "assets/images/skill-icons/html5.png", "alt", "HTML 5", 1, "technical-skills_logo"], ["src", "assets/images/skill-icons/css3.svg", "alt", "CSS 3", 1, "technical-skills_logo"], ["src", "assets/images/skill-icons/angular.png", "alt", "Angular", 1, "technical-skills_logo"], ["src", "assets/images/skill-icons/angularJS.svg", "alt", "AngularJS", 1, "technical-skills_logo"], ["src", "assets/images/skill-icons/sql.png", "alt", "SQL", 1, "technical-skills_logo"], ["src", "assets/images/skill-icons/Git-Icon-1788C.png", "alt", "Git", 1, "technical-skills_logo"], ["src", "assets/images/skill-icons/nodeJs.png", "alt", "NodeJS", 1, "technical-skills_logo"], ["src", "assets/images/skill-icons/devops.png", "alt", "Azure Devops", 1, "technical-skills_logo"], ["src", "assets/images/skill-icons/Jira_logo.png", "alt", "Jira", 1, "technical-skills_logo"], ["src", "assets/images/skill-icons/aws.png", "alt", "Amazon Web Services", 1, "technical-skills_logo"], ["src", "assets/images/skill-icons/solid.png", "alt", "SOLID Principles", 1, "technical-skills_logo"], ["src", "assets/images/skill-icons/agile.png", "alt", "Agile", 1, "technical-skills_logo"], ["src", "assets/images/skill-icons/restful.png", "alt", "RESTful API", 1, "technical-skills_logo"], [1, "timeline-container"], [1, "section"], [1, "interests_container"], [1, "interests_small-card"], [1, "interests_logo-container"], ["src", "assets/images/interest-icons/dice-twenty-faces-twenty.png", "alt", "Tabletop RPGs", 1, "interests_logo"], [1, "interests_text"], ["src", "assets/images/interest-icons/streaming.png", "alt", "Streaming", 1, "interests_logo"], ["src", "assets/images/interest-icons/LOL.png", "alt", "League of Legends", 1, "interests_logo"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Tom Mangar, Software Engineer Extraordinaire!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Tom Mangar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Web Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " A passionate, versatile, people-driven professional with an eye for the bigger picture, and the vision to create and design complex software solutions to meet all client needs. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "TECHNICAL SKILLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Languages & Frameworks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " C# ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " TypeScript ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " JavaScript ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " HTML 5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " CSS 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Angular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " AngularJS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " SQL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Technologies & Tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Git ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " NodeJS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Azure Devops ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Jira ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " AWS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Principles and Ideologies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " SOLID Principles ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Agile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " RESTful API ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "app-timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "EDUCATION & QUALIFICATIONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "University of Derby - BSC Computer Games Programming 2015");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " This covered important programming and games designing fundamentals. It also included information on computer architecture and other key skills necessary to succeed as a programmer in any industry. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Other Qualifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Mental Health First Aid - St. John's Ambulance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Completed the Adult MHFA One Day course to become a Mental Health First Aid Chaampion, the course provided an understanding of common mental health issues and the skills to signpost people to support. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "INTERESTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Tabletop RPGs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Streaming");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "League of Legends");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "PROJECTS?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " Maybe? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " References available on request. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_1__["TimelineComponent"]], styles: [_c0, _c0] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/timeline/timeline.component */ "LsEZ");
/* harmony import */ var _components_expanding_card_expanding_timeline_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/expanding-card/expanding-timeline-card.component */ "+22f");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_4__["TimelineComponent"],
        _components_expanding_card_expanding_timeline_card_component__WEBPACK_IMPORTED_MODULE_5__["ExpandingTimelineCardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_4__["TimelineComponent"],
                    _components_expanding_card_expanding_timeline_card_component__WEBPACK_IMPORTED_MODULE_5__["ExpandingTimelineCardComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map