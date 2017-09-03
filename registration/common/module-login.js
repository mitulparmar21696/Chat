(function () {
    'use strict';
    angular
        .module('chatConstants', []);
    angular
        .module('chatCommon', []);
    angular
        .module('agCommon', []);
    angular
        .module("voiceLogin", [
        'ui.router',
        'chatConstants',
        'chatCommon',
        'agCommon',
        'toastr',
        'angularMoment'
        
        ]);

})();