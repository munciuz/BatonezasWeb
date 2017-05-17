"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var tag_list_component_1 = require("./tag-list/tag-list.component");
var tag_component_1 = require("./tag/tag.component");
var tag_service_1 = require("./tag.service");
var apis_1 = require("../shared/apis");
var shared_module_1 = require("../shared/shared.module");
var TagModule = (function () {
    function TagModule() {
    }
    return TagModule;
}());
TagModule = __decorate([
    core_1.NgModule({
        declarations: [
            tag_list_component_1.TagListComponent,
            tag_component_1.TagComponent
        ],
        imports: [
            shared_module_1.SharedModule,
            router_1.RouterModule.forChild([
                { path: 'tags', component: tag_list_component_1.TagListComponent },
                { path: 'tag/:id', component: tag_component_1.TagComponent }
            ])
        ],
        providers: [tag_service_1.TagService, apis_1.Apis]
    })
], TagModule);
exports.TagModule = TagModule;
//# sourceMappingURL=tag.module.js.map