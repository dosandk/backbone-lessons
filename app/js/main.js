'use strict';

require.config({
    paths: {
        jquery: '../../node_modules/jquery/dist/jquery',
        underscore: '../../node_modules/underscore/underscore',
        backbone: '../../node_modules/backbone/backbone'
        // text: ''
    }
});

require(
    [
        'backbone',
        'views/module1'
    ],
    function(Backbone, Module1) {
        console.log('Backbone', Backbone);
        console.log('Module1', Module1);
    }
);
