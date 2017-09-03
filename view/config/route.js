/// <reference path="../layout/view/common/top-menu-service.js" />
(function () {
    'use strict';
    angular
            .module("chatConstants")
            .constant('mainRoutes', [
                {
                    name: "app",
                    config:
                            {
                                url: "", //TODO: use company code after login
                                abstract: true,
                                views:
                                        {
                                            "topmenu":
                                                    {
                                                        templateUrl: 'view/layout/view/top-menu.html',
                                                        controller: 'TopMenuController'
                                                    },
                                            "layout":
                                                    {
                                                        templateUrl: 'view/layout/site.html',
                                                    }
                                        }
                            },
                    proddep: ['view/layout.js', 'view/common.js'],
                    dependencies: [ 'view/layout/view/top-menu.js', 'view/layout/view/sub-menu.js']

                },
                
                {
                    name: "app.home",
                    config:
                            {
                                url: "/home",
                                views:
                                        {
                                            "submenu":
                                                    {
                                                        templateUrl: 'view/layout/view/sub-menu.html',
                                                        controller: 'SubMenuController'
                                                    },
                                            "sitecontent":
                                                    {
                                                        templateUrl: 'view/modules/home/home.html',
                                                        controller: 'HomeController'
                                                    }
                                        }
                            },
                    proddep: ['view/home.js', 'view/admin.js', 'view/board.js', 'view/project.js', 'view/team.js', 'view/sprint.js', 'view/mystuff.js', 'view/common.js', 'view/layout.js'],
                    dependencies: ['view/modules/home/home.js',  'view/layout/view/sub-menu.js', 'view/layout/view/top-menu.js']
                },
                {
                    name: "app.projects",
                    config:
                            {
                                url: "",
                                abstract: true,
                                views:
                                        {
                                            "submenu":
                                                    {
                                                        templateUrl: 'view/layout/view/sub-menu.html',
                                                        controller: 'SubMenuController'
                                                    },
                                            "sitecontent":
                                                    {
                                                        template: '<div ui-view></div>'
                                                    }
                                        }
                            },
                    proddep: ['view/home.js', 'view/admin.js', 'view/board.js', 'view/project.js', 'view/team.js', 'view/sprint.js', 'view/mystuff.js', 'view/layout.js', 'view/common.js'],
                    dependencies: ['view/modules/home/home.js',  'view/layout/view/sub-menu.js']
                },
               
            ]);
    //#endregion Register Routes Here
    angular
            .module("chatApp")
            .config(['$stateProvider', '$urlRouterProvider', '$rootScopeProvider', '$qProvider', 'mainRoutes', 'homeRoutes', 
                function ($stateProvider, $urlRouterProvider, $rootScope, $q, mainRoutes, homeRoutes) {
                    //Add Backlog routes to main routes

                    mainRoutes = mainRoutes.concat(homeRoutes);


                    ////following code is for add route with its dependancies for lazyloading
                    angular.forEach(mainRoutes, function (route) {
                        var depItems = route.dependencies;
                        if (CURRENT_STAGE == 1) {
                            depItems = route.proddep;
                        }

                        if (depItems) {
                            var items = [];
                            angular.forEach(depItems, function (url) {
                                if (CURRENT_STAGE == 1) {
                                    url = url.replace('.js', '.min.js');
                                }

                                items.push(url + '?' + CURRENT_APP_VERSION);
                            });

                            var fnResolve = function ($q, $rootScope) {
                                var deferred = $q.defer();
                                require(items, function () {
                                    $rootScope.$apply(function () {
                                        deferred.resolve();
                                    });

                                });
                                return deferred.promise;
                            }
                            fnResolve.$inject = ['$q', '$rootScope'];
                            route.config.resolve =
                                    {
                                        deps: fnResolve
                                    };
                        }
                        //TODO: Depending upon permission add routes. 
                        //If do not add following line then it will not route, instead execute otherwise path
                        //e.g. if we do not add state for admin then #/admin will redirect to /project path

                        $stateProvider.state(route.name, route.config);

                    });

                    $urlRouterProvider.otherwise('/home');




                }]);
})();