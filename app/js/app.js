var App = App || {};

App.app = new App.AppView();
App.app.afterRender = function() {
    App.articlesCollection = new App.ArticlesCollection();
    App.form = new App.Form();
    App.articleModel = new App.ArticleModel();
    App.articlesContainer = new App.ArticlesContainer();
};