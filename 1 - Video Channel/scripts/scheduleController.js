
module.classy.controller({
    name: 'scheduleController',
    inject: ['$scope', '$http'],
    init: function()
    {
        var $scope = this.$scope;
        this.$http.get('./data/schedule.json').success(function( Schedules )
        {
            $scope.Schedules = Schedules;
        });
    },
    methods: {
        loadComments: function(id)
        {
            var controller = $('#comments').controller();
            controller.loadComments(id);
            controller.focusForm();
        }
    }
});
