(function () {
    "use strict";

    $.fn.fillInForm = function (data) {
        return this.each(function () {
            var $this = $(this);
            $.each(data, function (name) {
                $this.find(':input[name='+name+']').val(data[name]);
            });
        });
    };
})();
