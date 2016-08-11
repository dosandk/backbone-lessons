define('views/app-view',
    [
        'backbone',
        'text!templates/app-view.html'
    ],
    function(Backbone, tpl) {
        return Backbone.View.extend({
            el: '#app',
            template: _.template(tpl),
            initialize: function() {
                this.render();
            },
            render: function() {
                this.$el.html(this.template());
            }
        });
    }
);


