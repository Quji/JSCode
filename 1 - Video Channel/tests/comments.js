describe('comments', function ()
{
    beforeEach(function ()
    {
        browser.get('http://localhost/index.html');
    });

    it('should add new comment', function ()
    {
        var beginK = 0;
        // current comments number
        element(by.id('comments')).evaluate('Comments.length').then(function(value) {
            beginK = value;
        });

        // add two comments
        element(by.css('#comments .form textarea')).sendKeys('Test1', protractor.Key.ENTER);
        element(by.css('#comments .form textarea')).sendKeys('Test2', protractor.Key.ENTER);

        element(by.id('comments')).evaluate('Comments.length').then(function(value) {
            expect(value).toBe(beginK + 2);
        });
    });

    it('should add new child comment', function ()
    {
        var beginK = 0;
        var comment = element.all(by.css('comment')).get(0);

        // current child comments number
        comment.evaluate('Comment.children.length').then(function(value) {
            beginK = value;
        });

        // add one child comment
        comment.all(by.css('.like a')).get(0).click();
        comment.element(by.css('textarea')).sendKeys('Test', protractor.Key.ENTER);

        comment.evaluate('Comment.children.length').then(function(value) {
            expect(value).toBe(beginK + 1);
        });
    });

    it('should be liked', function ()
    {
        var beginI = 0;
        var comment = element.all(by.css('comment')).get(0);

        // current child comments number
        comment.evaluate('Comment.likes').then(function(value) {
            beginI = parseInt(value);
        });

        // like comment
        comment.all(by.css('.like a')).get(1).click();

        comment.evaluate('Comment.likes').then(function(value) {
            expect(value).toBe(beginI + 1);
        });
    });
});
