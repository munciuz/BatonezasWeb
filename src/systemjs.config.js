/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

      // other libraries
      'rxjs': 'npm:rxjs',
      // 'angular2-google-maps': 'node_modules/angular2-google-maps@0.17.0'
      // "angular2-google-maps/core": {    
      //   "defaultExtension": "js",
      //   "main": "index.js"
      // }
      'angular2-google-maps': 'npm:angular2-google-maps',
      'angular-2-dropdown-multiselect': 'npm:angular-2-dropdown-multiselect',
      // 'angular-2-dropdown-multiselect': 'npm:angular-2-dropdown-multiselect',
      // 'ng2-dropdown-multiselect': 'npm:ng2-dropdown-multiselect'
      'lodash': 'npm:lodash',
      'ng2-social-share': 'npm:ng2-social-share'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      "angular2-google-maps/core": {    
        "defaultExtension": "js",
        "main": "index.js"
      },
      'angular-2-dropdown-multiselect': {
        "defaultExtension": 'js',
        "main": 'index.js'
      },
      'lodash': {
        "defaultExtension": 'js',
        "main": 'index.js'
      },
      'ng2-social-share': {
        "defaultExtension": 'js',
        "main": 'ng2-social-share.js'
      },
      // 'ng2-dropdown-multiselect': {
      //   "main": 'dis/index.js',
      //   "defaultExtension": 'js'
      // }
    }
  });
})(this);