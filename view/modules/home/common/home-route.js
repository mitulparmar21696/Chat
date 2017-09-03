(function () {
    'use strict';
    angular
            .module("chatConstants")
            .constant('homeRoutes', [
                {
                    name: "app.home.myscrum",
                    config:
                            {
                                url: "/my-scrum",
                                views:
                                        {
                                            "childView":
                                                    {
                                                        templateUrl: 'view/modules/mystuff/today-task/today-task.html',
                                                        controller: 'todayTaskController'
                                                    }
                                        }
                            },
                    proddep: ['view/kross.js', 'view/issue.js','view/mystuff.js','view/common.js', 'view/project.js'],
                    dependencies: ['view/modules/mystuff/today-task/today-task.js', 'view/modules/mystuff/common/mytask-service.js', 'view/modules/mystuff/common/track-service.js', 'view/modules/kross/common/kross-team-service.js', 'view/modules/mystuff/common/remaining-service.js', 'view/modules/common/burndown-service.js', 'view/modules/project/setting/issue-status/common/issue-status-service.js', 'view/modules/issue/common/issue-service.js']
                },
                {
                    name: "app.home.mycard",
                    config:
                            {
                                url: "/my-card",
                                views:
                                        {
                                            "childView":
                                                    {
                                                        templateUrl: 'view/modules/mystuff/mytask/mytask-list.html',
                                                        controller: 'MytaskController'
                                                    }
                                        }
                            },
                    proddep: ['view/kross.js', 'view/issue.js','view/mystuff.js','view/common.js', 'view/project.js'],
                    dependencies: ['view/modules/project/setting/status/common/status-service.js']
                },
            ]);
})();