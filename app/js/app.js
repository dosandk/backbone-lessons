define('app',
    [
        'views/app-view',
        'collections/articles',
        'views/form'
    ],
    function(AppView, ArticlesCollection, Form) {
        var App = {};

        App.app = new AppView();
        App.articlesCollection = new ArticlesCollection();
        App.form = new Form();

        return App;
    }
);

// var App = App || {};

// App.app = new App.AppView();
// App.app.afterRender = function() {
//     App.articlesCollection = new App.ArticlesCollection();
//     App.form = new App.Form();
//     App.articleModel = new App.ArticleModel();
//     App.articlesContainer = new App.ArticlesContainer();
// };
