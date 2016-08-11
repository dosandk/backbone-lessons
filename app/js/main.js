'use strict';

require.config({
    paths: {
        jquery: '../../node_modules/jquery/dist/jquery',
        underscore: '../../node_modules/underscore/underscore',
        backbone: '../../node_modules/backbone/backbone',
        text: '../../node_modules/requirejs-text/text',
        templates: '../templates'
    }
});

require(
    [
        'app',
        // 'views/article',
        // 'views/articles-container',
        // 'views/articles-list',
        // 'views/form',

    ],
    function(App) {
        // console.log('Backbone', Backbone);
        // console.log('App', App);

    }
    // function(Backbone, AppView, ArticlesContainer, ArticlesList, AppForm) {
    //     console.log('Backbone', Backbone);
    //     console.log('AppView', AppView);
    //     console.log('ArticlesContainer', ArticlesContainer);
    //     console.log('ArticlesList', ArticlesList);
    //     console.log('AppForm', AppForm);
    // }
);
