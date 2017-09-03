(function () {
    'use strict';
    angular
            .module("chatApp")
            .controller('HomeController', fnHomeController);

    fnHomeController.$inject = ['$scope'];
    /* @ngInject */

    function fnHomeController($scope) {
        //====================================================================================//
        // Variable Declaration
        //====================================================================================//
        $scope.chatData = {
            myMsg: {},
            msgList: []
        };

        //====================================================================================//
        // Function Declaration
        //====================================================================================//
        $scope.init = init;
        $scope.chat = chat;
        //====================================================================================//
        // Function Implementation
        //====================================================================================//

        //Init
        function init() {

        }
        //chat function
        function chat() {
            debugger;
            $scope.chatData.myMsg.msg;
            $scope.chatData.myMsg.owner = "Sender";
            $scope.chatData.myMsg.id = 1;
            var msg=$scope.chatData.myMsg;
            $scope.chatData.myMsg={}
            $scope.chatData.msgList.push(msg);
            debugger;
            reciever();
        }
//        function reciever() {
//            $scope.chatData.myMsg.msg;
//            $scope.chatData.myMsg.owner = "Reciever";
//            $scope.chatData.myMsg.id = 2;
//            $scope.chatData.msgList.push($scope.chatData.myMsg);
//        }
    }
})();