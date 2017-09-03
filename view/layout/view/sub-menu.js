(function () {
    'use strict';
    angular
            .module("chatApp")
            .controller('SubMenuController', fnSubMenuController);

    fnSubMenuController.$inject = ['$scope']
    /* @ngInject */

    function fnSubMenuController($scope ) {
        $scope.topMenuData = {
            menu: []
        };

        //====================================================================================//
        // Function Declaration
        //====================================================================================//
        $scope.init = init;
        $scope.logoutClick = logoutClick;

        //====================================================================================//
        // Function Implementation
        //====================================================================================//

        //Init
        function init() {
        }

//        get menu 
      
        function logoutClick() {
            
            window.location = '/login.html';

        }
    }
})();