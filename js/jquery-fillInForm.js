(function () {
    "use strict";

    $.fn.fillInForm = function (data, options) {
        return this.each(function () {
            var $this = $(this),
                opts  = $.extend({
                    "attr_name": 'name'
                }, options);
            $.each(data, function (name) {
                $this.find(':input['+opts.attr_name+'='+name+']').val(data[name]);
            });
        });
    };
})();
