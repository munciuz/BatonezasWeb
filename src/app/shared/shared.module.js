"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var star_component_1 = require("./star.component");
var work_hours_component_1 = require("./components/work-hours.component");
var ng2_social_share_1 = require("ng2-social-share");
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        declarations: [star_component_1.StarComponent, work_hours_component_1.WorkHoursComponent, ng2_social_share_1.CeiboShare],
        imports: [common_1.CommonModule],
        exports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            star_component_1.StarComponent,
            work_hours_component_1.WorkHoursComponent,
            ng2_social_share_1.CeiboShare
        ]
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map