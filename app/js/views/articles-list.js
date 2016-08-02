var App = App || {};

App.ArticlesList = Backbone.View.extend({
    tagName: 'ul',
    render: function() {
        var self = this;

        // articlesCollection.add(arr);

        App.articlesCollection.each(function(el) {
            var article = new App.Article();

            article.setValue(el.get('data'));

            self.$el.append(article.render());
        });

        return self.$el;
    }
});
