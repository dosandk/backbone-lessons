define('collections/articles', ['backbone'], function(Backbone) {
    var App = App || {};

    App.ArticlesCollection = Backbone.Collection.extend({
        model: App.ArticleModel,
        initialize: function() {
            console.error(this);
        }
    });

    return App.ArticlesCollection;
});


// var App = App || {};

// App.ArticlesCollection = Backbone.Collection.extend({
//     model: App.ArticleModel,
//     initialize: function() {
//         console.error(this);
//     }
// });
