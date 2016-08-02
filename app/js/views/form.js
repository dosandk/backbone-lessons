var App = App || {};

App.Form = Backbone.View.extend({
    el: '#form',
    template: _.template(Templates.form),
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
        this.$el.html(this.template());
    }
});