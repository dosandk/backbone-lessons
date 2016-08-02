var App = App || {};

App.ArticlesContainer = Backbone.View.extend({
    el: '#articles-container',
    template: _.template(Templates.articlesContainer),
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.html(this.template());

        var articlesList = new App.ArticlesList();

        this.$('#articles-list').html(articlesList.render());
    }
});
