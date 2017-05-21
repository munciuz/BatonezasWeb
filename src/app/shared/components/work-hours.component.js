"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var WorkHoursComponent = (function () {
    function WorkHoursComponent() {
        this.days = [1, 2, 3, 4, 5, 6, 0]; // 0 - Sunday
    }
    WorkHoursComponent.prototype.getWorkingHoursForTheDay = function (day) {
        var period = this.openingHours.periods[day];
        var openHours = period.open.time.substr(0, 2) + ':' + period.open.time.substr(2);
        openHours = openHours.replace(/^0/, '');
        var closeHours = period.close.time.substr(0, 2) + ':' + period.close.time.substr(2);
        return openHours + ' - ' + closeHours;
    };
    WorkHoursComponent.prototype.getDayName = function (day) {
        switch (day) {
            case 1: return 'Pirmadienis';
            case 2: return 'Antradienis';
            case 3: return 'Trečiadienis';
            case 4: return 'Ketvirtadienis';
            case 5: return 'Penktadienis';
            case 6: return 'Šeštadienis';
            case 0: return 'Sekmadienis';
        }
    };
    return WorkHoursComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], WorkHoursComponent.prototype, "openingHours", void 0);
WorkHoursComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'comp-work-hours',
        templateUrl: './work-hours.component.html',
        styleUrls: ['./work-hours.component.css']
    })
], WorkHoursComponent);
exports.WorkHoursComponent = WorkHoursComponent;
//# sourceMappingURL=work-hours.component.js.map