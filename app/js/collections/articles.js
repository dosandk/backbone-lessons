var App = App || {};

App.ArticlesCollection = Backbone.Collection.extend({
    model: App.ArticleModel,
    initialize: function() {
        console.error(this);
    }
});
