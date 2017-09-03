/// <reference  />
        var require = {
            waitSeconds: 0,
            paths: {
                'ng-infinite-scroll': '../../../assets/js/ng-infinite-scroll/ng-infinite-scroll.min',
                'jquery': '../../../assets/js/jquery/jquery.min',
                'bootstrap': '../../../assets/js/bootstrap/js/bootstrap.min',
                'offline': '../../../assets/js/offline/offline',
                'angular': '../../../assets/js/angular/angular.min',
                'domReady': '../../../assets/js/requirejs-domready/domReady',
                'angular-ui-router': '../../../assets/js/angular-ui-router/angular-ui-router.min',
                'ngDialog': '../../../assets/js/ngDialog/ngDialog.min',
                'toastr': '../../../assets/js/toastr/angular-toastr.tpls.min',
                'moment': '../../../assets/js/angular-moment/moment.min',
                'angular-moment': '../../../assets/js/angular-moment/angular-moment.min',
                'ui-bootstrap-tpl': '../../../assets/js/angular-ui/ui-bootstrap-tpls-1.3.2.min',
                'select': '../../../assets/js/select/select.min',
                // app js file includes
                'modules-includes': 'includes',
                'module-app': 'module-app',
                'module-config': 'module-config',

            },
            shim: {
                'angular': {'exports': 'angular', deps: ['jquery']},
                'bootstrap': {deps: ['jquery', 'angular']},
                'angular-moment': {deps: ['angular', 'moment']},
                'modules-includes': {deps: ['moment', 'toastr', 'module-config']},
                'module-config': {deps: ['module-app']},
                'module-app': {
                    deps: [
                        'jquery',
                        'angular',
                        'angular-ui-router',
                        'ui-bootstrap-tpl',
                        'select',
                        'ngDialog',
                        'angular-moment',
                        'ng-infinite-scroll',
                        'toastr',
                    ]
                },
                'angular-ui-router': {deps: ['angular']},
                'ngDialog': {deps: ['angular']},
                'ui-bootstrap-tpl': {deps: ['angular', 'bootstrap']},
                'ng-infinite-scroll': { deps: ['angular'] },
                'select': {deps: ['jquery', 'angular']},
                'offline': {deps: ['jquery']},
                'toastr': {deps: ['angular']},
                'moment': {deps: ['jquery']},
            },
            priority: [
                'jquery',
                'bootstrap',
                'angular'
            ]
        };

