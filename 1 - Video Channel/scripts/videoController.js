
module.classy.controller({
    name: 'videoController',
    inject: ['$scope', '$http'],
    init: function()
    {
        var $scope = this.$scope;
        this.$http.get('./data/video.json').success(function( Videos )
        {
            $scope.Videos = Videos;
        });
    }
});
