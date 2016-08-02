var App = App || {};

App.Article = Backbone.View.extend({
    // el: '#articles-list',
    tagName: 'li',
    template: _.template(Templates.article),
    initialize: function() {
        //this.render();
    },
    setValue: function(value) {
        this.value = value;
    },
    render: function() {
        var self = this;

        return self.$el.html(this.template({
            data: self.value
        }));
    }
});