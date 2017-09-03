(function () {


    angular.module('chatConstants', []);
    angular.module('chatCommon', []);
    angular.module('agCommon', []);
    angular.module('chatApp', [
        'ui.router',
        'ui.bootstrap',
        'ui.bootstrap.tpls',
        'toastr',
        'ui.select',
        'ngDialog',
        'chatConstants',
        'chatCommon',
        'agCommon',
        'infinite-scroll',
        'angularMoment',
    ]);

})();