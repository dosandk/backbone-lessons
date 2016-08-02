var App = App || {};

App.AppView = Backbone.View.extend({
    el: '#app',
    /*template: _.template(Templates.indexTemplate),*/
    initialize: function() {
        this.render();
    },
    render: function() {
        // var tpl = this.getTemplate();
        // this.$el.html(_.template(tpl));

        this.getTemplate();
    },
    getTemplate: function() {
        var self = this;

        $.get('./app/templates/app-view.html', function(data) {
/*            console.log(data);*/
            self.$el.html(_.template(data)());
        });
    }
});