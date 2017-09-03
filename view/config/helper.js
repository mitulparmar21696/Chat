(function () {
    'use strict';
    angular
            .module("chatApp")
            .run(['$rootScope',  'pendingRequests',   '$state',      
                function ($rootScope,  pendingRequests,   $state) {
                    //for xeditable theme 
//                    editableOptions.theme = 'bs3';
                    setTimeout(function asyncBootstrap() {
                        $("#myarea").hide();
                    }, (1 * 1000));
                    //$templateCache.removeAll();
                    $rootScope.$on('$stateChangeStart',
                            function (event, toState, toParams, fromState, fromParams) {
                                if (fromState.name.indexOf('app.project.setting') < 0 && fromState.name != toState.name && fromState.name.indexOf(toState.name) == 0 && fromState.name.indexOf('app.project.wizard.status') < 0) {
                                    event.preventDefault();
                                    return $state.go(fromState.name);
                                }
                                //Check if user is authenticated
                                $rootScope.PreviousState = fromState.name;
                                $rootScope.fromParams = fromParams;
                                var accesKey=null;
                                if (accesKey === null) {
                                    window.location = '/index.html#/home';
                                } else {
                                    // event.preventDefault();
                                    window.location = 'login.html';
                                }
                            })

                    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                        debugger;
                        var fromParts = fromState.name.split(".");
                        var toParts = toState.name.split(".");
                        debugger;

                        var fromPart = "";
                        var toPart = "";
                        for (var i = 0; i < 3; i++) {
                            if (fromParts.length > i) {
                                fromPart = fromPart + "." + fromParts[i];
                            }
                            if (toParts.length > i) {
                                toPart = toPart + "." + toParts[i];
                            }
                        }

                        if (fromPart != toPart) {
                            pendingRequests.cancelAll();
                        }
                        debugger;
//                        if (cacheService.topMenu.isSprintDropDown != null) {
//                            cacheService.topMenu.isSprintDropDown();
//                        }

                        var returnHref = $state.href($state.current.name);
                        localStorage.setItem('returnUrl', returnHref);

                    })


                }]);
    angular
            .module('infinite-scroll')
            .value('THROTTLE_MILLISECONDS', 250)
})();
