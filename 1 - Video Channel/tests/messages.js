describe('messages', function ()
{
    beforeEach(function ()
    {
        browser.get('http://localhost/index.html');
        element(by.css('.glyphicon-comment')).click();
    });

    it('should be toggled', function ()
    {
        var message = element.all(by.css('message')).get(0);
        var now;

        // current unread
        message.evaluate('Message.unread').then(function(value) {
            now = parseInt(value);
        });

        message.element(by.css('.icon i')).click();

        message.evaluate('Message.unread').then(function(value) {
            expect(now).not.toBe(value);
        });
    });

    it('should be all read', function ()
    {
        var messages = element(by.css('.messages'));

        messages.element(by.css('[ng-click="readAll()"]')).click();

        messages.evaluate('getUnread()').then(function(value) {
            expect(value).toBe(0);
        });
    });
});
