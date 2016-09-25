
module.controller('mainController', function( $scope, world )
{
    /* Ball */

    $scope.ball = {
        x: 0,
        y: 0,
        d: 10,
        elast: 10
    };
    //var ballOrig = angular.copy($scope.ball);

    $scope.$watchGroup(['ball.x', 'ball.y', 'ball.d'], function( ball ) {

        if($scope.ball.x == '' || $scope.ball.y == '' || $scope.ball.d == 0) {
            return;
        }

        world.addDashedCircle($scope.ball.x, $scope.ball.y, $scope.ball.d);
    });

    $scope.onBallSubmit = function() {
        if($scope.ball.x == '' || $scope.ball.y == '' || $scope.ball.d == 0) {
            return;
        }

        world.addCircle($scope.ball.x, $scope.ball.y, $scope.ball.d, $scope.ball.elast);

        //$scope.ball = angular.copy(ballOrig);
    };

    /* Box */

    $scope.box = {
        x: 0,
        y: 0,
        w: 60,
        h: 15
    };
    //var boxOrig = angular.copy($scope.box);

    $scope.onBoxBlur = function()
    {
        if($scope.box.x == '' || $scope.box.y == '') {
            return;
        }

        world.addCircle($scope.ball.x, $scope.ball.y, $scope.ball.d);

        //$scope.ball = angular.copy(ballOrig);
    };

    $scope.$watchGroup(['box.x', 'box.y', 'box.w', 'box.h'], function( box )
    {
        if ($scope.box.x == '' || $scope.box.y == '' || $scope.box.w == 0 || $scope.box.h == 0) {
            return;
        }

        world.addDashedBox($scope.box.x, $scope.box.y, $scope.box.w, $scope.box.h);
    });

    $scope.onBoxSubmit = function()
    {
        if($scope.box.x == '' || $scope.box.y == '' || $scope.box.w == 0 || $scope.box.h == 0) {
            return;
        }

        world.addBox($scope.box.x, $scope.box.y, $scope.box.w, $scope.box.h);

        //$scope.box = angular.copy(boxOrig);
    };

    /* Gravity */

    $scope.gravity = 81;

    $scope.$watch('gravity', function( gravity ) {
        gravity = gravity / 81;
        world.changeGravity(gravity);
    });
});
