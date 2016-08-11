define('app', [

    'views/app-view',
    'collections/articles',
    'views/form'

  ], function(AppView, ArticlesCollection) {
    // console.log('AppView', AppView);

    var App = App || {};

    App.app = new AppView();
    App.articlesCollection = new ArticlesCollection();
    App.form = new Form();

});

// var App = App || {};

// App.app = new App.AppView();
// App.app.afterRender = function() {
//     App.articlesCollection = new App.ArticlesCollection();
//     App.form = new App.Form();
//     App.articleModel = new App.ArticleModel();
//     App.articlesContainer = new App.ArticlesContainer();
// };
