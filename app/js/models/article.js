var App = App || {};

App.ArticleModel = Backbone.Model.extend({
    defaults: {
        title: 'default title',
        description: 'super long text'
    },
    initialize: function() {
        console.error(this);
        this.set({id: Date.now()})
    }
});