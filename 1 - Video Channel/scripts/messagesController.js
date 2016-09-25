
module.directive('message', function() {
    return function($scope) {

        $scope.getClass = function()
        {
            var unread = $scope.Message.unread;
            return unread ? 'blue' : '';
        };

        $scope.getIconClass = function()
        {
            var unread = $scope.Message.unread;
            return unread ? 'glyphicon glyphicon-record' : 'glyphicon glyphicon-unchecked';
        };

        $scope.toggle = function()
        {
            var Message = $scope.Message;
            if(Message.unread > 0) {
                Message.unread--;
            }
            else {
                Message.unread++;
            }
        };
    };
});

module.classy.controller({
    name: 'messagesController',
    inject: ['$scope', '$http'],
    init: function()
    {
        var $scope = this.$scope;
        $scope.show = 0;

        this.$http.get('./data/messages.json').success(function( Messages )
        {
            $scope.Messages = Messages;
        });
    },
    methods: {
        getUnread: function()
        {
            var i, Message, k = 0;
            for(i in this.$scope.Messages)
            {
                Message = this.$scope.Messages[i];
                if(Message.unread) {
                    k++;
                }
            }

            return k;
        },
        readAll: function()
        {
            var i, Message, k = 0;
            for(i in this.$scope.Messages)
            {
                this.$scope.Messages[i].unread = 0;
            }

            return k;
        },
        toggle: function()
        {
            this.$scope.show = !this.$scope.show;
        }
    }
});
