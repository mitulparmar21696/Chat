(function () {
    'use strict';
    angular
            .module("chatApp")
            .controller('TopMenuController', fnTopMenuController);

    fnTopMenuController.$inject = ['$scope']
    /* @ngInject */

    function fnTopMenuController($scope) {

        //====================================================================================//
        // Function Declaration
        //====================================================================================//
        $scope.init = init;                


        //====================================================================================//
        // Function Implementation
        //====================================================================================//

        //Init
        function init() {

        }


    }
})();