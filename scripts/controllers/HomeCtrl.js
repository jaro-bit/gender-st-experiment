angular.module('tutor').controller("HomeCtrl", function($scope, $location, $mdDialog, configService, User) {
    console.log("HomeCtrl ok");

    $scope.badges = [];

    $scope.showNext = function() {
        return configService.getNext();
    };

    $scope.dynamicTheme = function() {
        console.log("theme: " + configService.getTheme());
        return configService.getTheme();
    };

    $scope.showPosttest = function() {
        $location.path("/posttest");
    };

    $scope.showProblems = function() {
        $location.path("/set1");
    };

    $scope.getStars = function() {

        if (configService.nextOn) {
            return "star";
        }

        return "star_border";
    };

    $scope.getPoints = function() {
        return User.getResponse().activityPoints;
    }

    $scope.getRanking = function() {
        return "assets/" + configService.getTheme() + "/images/ranking.svg";
    };

    $scope.checkBadge = function(id) {
        return configService.getBadges()[id];
    };

    $scope.getBadge = function(id) {
        return "assets/" + configService.getTheme() + "/images/" + id + ".png";
    };

    $scope.getAvatar = function() {
        return configService.getAvatar();
    };

    $scope.chooseAvatar = function() {
        $mdDialog.show({
            controller: 'AvatarCtrl',
            templateUrl: 'views/avatar.html',
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        });
    };
});
