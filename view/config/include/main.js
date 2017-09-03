define([
    'require',
    'jquery',
    'angular',
    'domReady',
    'moment',
    'bootstrap',
    'modules-includes'
], function (require, $, ng, domReady) {
    'use strict';
    
    domReady(function (document) {
        
        ng.bootstrap(document, ['chatApp']);
        $("#mainLoading").hide();
        
    });
});