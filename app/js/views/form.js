define('views/form',
    [
        'backbone',
        'text!templates/form.html'
    ],
    function(Backbone, tpl) {
        return Backbone.View.extend({
            el: '#form',
            template: _.template(tpl),
            events: {
                'click #submit': 'sendForm'
            },
            sendForm: function(e) {
                e.preventDefault();

                var value = this.$('#title').val();
                var article = new App.Article();

                article.setValue(value);

                var riba = article.render();

                $('#articles-list').append(riba);
            },
            initialize: function() {
                this.render();
            },
            render: function() {
                this.$el.html(this.template({
                    superData: 'Hello World',
                    riba: 123
                }));
            }
        });
    }
);