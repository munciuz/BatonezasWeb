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
var StarComponent = (function () {
    function StarComponent() {
        this.starValues = [0, 1, 2, 3, 4];
    }
    StarComponent.prototype.getStarClassName = function (starValue) {
        var starName;
        var residual = this.rating % 1;
        var whole = Math.trunc(this.rating) - starValue;
        if (whole > 0) {
            starName = 'glyphicon glyphicon-star';
        }
        else {
            starName = 'glyphicon glyphicon-star-empty';
        }
        return starName;
    };
    return StarComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], StarComponent.prototype, "rating", void 0);
StarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'comp-star',
        templateUrl: './star.component.html',
        styleUrls: ['./star.component.css']
    })
], StarComponent);
exports.StarComponent = StarComponent;
//# sourceMappingURL=star.component.js.map