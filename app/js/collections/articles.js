define('collections/articles',
    [
        'backbone',
        'models/article'
    ],
    function(Backbone, ArticleModel) {
        return Backbone.Collection.extend({
            model: ArticleModel,
            initialize: function() {
                console.error(this);
            }
        });
    }
);