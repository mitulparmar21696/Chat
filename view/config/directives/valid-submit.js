(function () {
    'use strict';
    // directive that prevents submit if there are still form errors
    angular
        .module("chatCommon")
        .directive('validSubmit', fnValidSubmit);

    fnValidSubmit.$inject = ['$parse'];
    /* @ngInject */

    function fnValidSubmit($parse) {
        return {
            // we need a form controller to be on the same element as this directive
            // in other words: this directive can only be used on a &lt;form&gt;
            require: 'form',
            // one time action per form
            link: link
        };

        function link(scope, element, iAttrs, form) {
            form.$submitted = false;
            // get a hold of the function that handles submission when form is valid
            var fn = $parse(iAttrs.validSubmit);

            // register DOM event handler and wire into Angular's lifecycle with scope.$apply
            element.on('submit', function (event) {
                scope.$apply(function () {

                    // on submit event, set submitted to true (like the previous trick)
                    form.$submitted = true;
                    // if form is valid, execute the submission handler function and reset form submission state
                    if (form.$valid) {
                        //event.target
                        fn(scope, { $event: event });
                        
                        form.$submitted = false;
                    }
                });
            });
        }
    }
    var disableAll = function (element) {
        angular.element(element).addClass('disable-all');
        element.style.color = 'gray';
        disableElements(element.getElementsByTagName('input'));
        disableElements(element.getElementsByTagName('button'));
        disableElements(element.getElementsByTagName('textarea'));
        disableElements(element.getElementsByTagName('select'));
        //element.addEventListener('click', preventDefault, true);
    };
    var disableElements = function (elements) {
        var len = elements.length;
        for (var i = 0; i < len; i++) {
            for (var j = 0; j < elements[i].attributes.length; j++) {
                if (elements[i].disabled === false) {
                    elements[i].disabled = true;
                    elements[i].disabledIf = true;
                }
            }
        }
    };

    var enableAll = function (element) {
        angular.element(element).removeClass('disable-all');
        element.style.color = 'inherit';
        enableElements(element.getElementsByTagName('input'));
        enableElements(element.getElementsByTagName('button'));
        enableElements(element.getElementsByTagName('textarea'));
        enableElements(element.getElementsByTagName('select'));
        element.removeEventListener('click', preventDefault, true);
    };
    var enableElements = function (elements) {
        var len = elements.length;
        for (var i = 0; i < len; i++) {
            if (elements[i].disabled === true && elements[i].disabledIf === true) {
                elements[i].disabled = false;
                elements[i].disabledIf = null;
            }
        }
    };

})();