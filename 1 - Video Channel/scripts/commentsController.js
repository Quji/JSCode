
module.directive('commentsList', function()
{
   return {
       scope: {
            Comments: '=comments'
       },
       controller: function($scope)
       {
           this.findComment = function( id )
            {
                var curr, i;
                for(i in $scope.Comments)
                {
                    curr = $scope.Comments[i];
                    if(curr.id == id)
                        return i;
                }
                return -1;
            };

            this.generateComment = function( val, level )
            {
                return ({
                    level: level || 0,
                    author: "Автор",
                    date: "Только что",
                    text: val,
                    who: ['Иван Иванов'],
                    likes: 0,
                    dislikes: 0,
                    children: []
                });
            };
       },
       template: '<comment ng-repeat="Comment in Comments" comment="Comment"></comment>'
   };
});

module.directive('comment', ['$compile', 'RecursionHelper', function($compile, RecursionHelper)
{
    return {
        scope: {
            Comment: '=comment'
        },
        require: '^commentsList',
        restrict: 'E',
        templateUrl: './comment.html',
        compile: function(element) {
            return RecursionHelper.compile(element, function(scope, $element, attrs, controller)
            {
                scope.other = function ( number )
                {
                    if (number == 1) {
                        return 'другому';
                    }

                    return 'другим';
                };

                scope.level = function ( )
                {
                    return {'margin-left': scope.Comment.level * 30 + 'px'};
                };

                scope.like = function ()
                {
                    scope.Comment.likes++;
                    return false;
                };

                scope.dislike = function ()
                {
                    scope.Comment.dislikes++;
                    return false;
                };

                scope.answer = function( $event )
                {
                    if($element.find('.form').length > 0) {
                        return false;
                    }

                    var $form = $('.form').clone();

                    $element.append($form);
                    $form.find('textarea').focus().attr('ng-keyup', 'tryAnswer($event, ' + Comment.id +')');
                    $compile($form)(scope);

                    return false;
                };

                scope.tryAnswer = function( $event )
                {
                    if($event.keyCode == 13) {
                        var $elem = $($event.target);
                        var Comment = controller.generateComment($elem.val(), scope.Comment.level + 1);
                        scope.Comment.children.push(Comment);

                        $elem.closest('.form').remove();
                    }
                };
            });
        }
    };
}]);

module.classy.controller({
    name: 'commentsController',
    inject: ['$scope', '$http', '$compile'],
    init: function()
    {
        this.loadComments(1);
    },
    methods: {
        loadComments: function( id )
        {
            var $scope = this.$scope;
            this.$http.get('./data/comments' + id +  '.json').success(function ( Comments )
            {
                $scope.Comments = Comments;
            }).error(function()
            {
                $scope.Comments = [];
            });
        },
        trySend: function( $event )
        {
            if($event.keyCode == 13) {
                var $elem = $($event.target);
                var Comment = $('comments-list').controller('comments-list').generateComment($elem.val());
                this.$scope.Comments.push(Comment);
                $elem.val('');
            }
        },
        focusForm: function()
        {
            $('#comments .form:last textarea').focus();
        }
    }
});
