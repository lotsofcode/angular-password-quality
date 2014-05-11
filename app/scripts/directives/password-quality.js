'use strict';

angular.module('myApp')
  .directive('passwordQuality', function() {
    return {
      restrict: 'E',
      replace: true,
      template: function(elem) {
        return elem.html();
      },
      scope: {
        password: '='
      },
      link: function(scope) {
        var password,
          passwordQuality,
          hasLower = 0,
          hasNumeric = 0,
          hasUpper = 0,
          hasSpecial = 0,
          asciiVal,
          i;

        scope.$watch('password', function() {
          password = scope.password || '';
          passwordQuality = 0;

          // loop to traverse each and every character
          for (i = 0; i < password.length; i++) {
            asciiVal = password.charCodeAt(i);

            if ((asciiVal >= 97) && (asciiVal <= 122)) {
              ++hasLower;
            }
            else if ((asciiVal >= 65) && (asciiVal <= 90)) {
              ++hasUpper;
            }
            else if ((asciiVal >= 48) && (asciiVal <= 57)) {
              ++hasNumeric;
            }
            else if ((asciiVal <= 47) || ((asciiVal >= 58) && (asciiVal <= 64)) || ((asciiVal >= 91) && (asciiVal <= 96)) || ((asciiVal >= 123) && (asciiVal <= 126))) {
              ++hasSpecial;
            }
            // length and complexity check to determine Strength
            if (password.length < 8) {
              passwordQuality = 1;
            }
            if (password.length >= 8) {
              passwordQuality = 2;
            }
            if (password.length >= 14) {
              passwordQuality = 3;
              if ((hasUpper) && (hasSpecial) && (hasNumeric) && (hasLower)) {
                passwordQuality = 4;
              }
            }
          }

          // update scope
          scope.passwordQuality = passwordQuality;
        });
      }
    };
  });
