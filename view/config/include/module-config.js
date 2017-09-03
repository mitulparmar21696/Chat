(function () {
    'use strict';
    angular
            .module('chatApp')
            .service('pendingRequests', ['$filter', function ($filter) {
                var pending = [];
                this.get = function () {
                    return pending;
                };
                this.add = function (request) {
                    //console.log(request + ' added');
                    pending.push(request);
                };
                this.remove = function (request) {
                    //console.log(request + ' finished');
                    pending = $filter('filter')(pending, { url: '!' + request }, true);
                    //console.log(pending.length);
                };
                this.cancelAll = function () {
                    angular.forEach(pending, function (p) {
                        p.canceller.resolve();
                    });
                    pending = [];
                };
                this.remaining = pending;
            }]);

    angular
            .module('chatApp')
            .config(fnMainConfig);

    fnMainConfig.$inject = ['$rootScopeProvider', '$locationProvider', '$uibTooltipProvider', '$stateProvider', '$controllerProvider', '$provide', '$httpProvider', '$compileProvider', '$filterProvider', '$animateProvider', 'ngDialogProvider',  'uiSelectConfig'];
    function fnMainConfig($rootScopeProvider, $locationProvider, $uibTooltipProvider, $stateProvider, $controllerProvider, $provide, $httpProvider, $compileProvider, $filterProvider, $animateProvider, ngDialogProvider,   uiSelectConfig) {
        //$httpProvider.useApplyAsync(true);
        $rootScopeProvider.digestTtl(50);
      
        $uibTooltipProvider.options({
            appendToBody: true
        });
        //Crate factory for HTTP handler 
        $provide.factory('GlobalHTTPHandler', fnGlobalHTTPHandler);

        //intercept HTTP
        $httpProvider.interceptors.push('GlobalHTTPHandler');

        //Decorate Excpetions
        $provide.decorator('$exceptionHandler', extendExceptionHandler);

        ////following three lines are setting of header and credential when using webapi cross origin
        $httpProvider.defaults.withCredentials = false;
        $httpProvider.defaults.useXDomain = true;

        uiSelectConfig.theme = 'bootstrap';
        uiSelectConfig.resetSearchInput = true;
        uiSelectConfig.appendToBody = true;


        var chatApp = angular.module("chatApp");
        var chatConstants = angular.module("chatConstants");
        ////register controller,service,factory,value,constant etc....
        chatApp.controller = $controllerProvider.register;
        chatApp.directive = $compileProvider.directive;
        chatApp.value = $provide.value;
        chatConstants.constant = $provide.constant;

        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        ////set dialog configuration
        ngDialogProvider.setDefaults({
            className: 'ngdialog-theme-default',
            plain: false,
            showClose: true,
            closeByDocument: true,
            closeByEscape: true,
            appendTo: false

        });
    }
    //HTTP Interceptor
    fnGlobalHTTPHandler.$inject = ['$q'];

    function fnGlobalHTTPHandler($q) {
       
        return {
            // On request success
            request: function (config) {
                //Chnage version of HTML to remove them from cache
                if (config.url.indexOf("view/") > -1 && config.url.indexOf(".html") > -1) {
                    //config.url = (config.url + "?" + CURRENT_APP_VERSION);
                }
                // Return the config or wrap it in a promise if blank.
                return config || $q.when(config);
            },
            // On request failure
//            
        };
    }

    //Exception Hnalder
    extendExceptionHandler.$inject = ['$delegate'];
    function extendExceptionHandler($delegate) {
        return function (exception, cause) {
            $delegate(exception, cause);
          
        };
    }
})();



