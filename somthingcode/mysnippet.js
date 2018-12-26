
$(document).ready(function () {
    $('.collapse')
        .on('shown.bs.collapse', function () {
            $(this)
                .parent()
                .find(".fa-plus")
                .removeClass("fa-plus")
                .addClass("fa-minus");
        })
        .on('hidden.bs.collapse', function () {
            $(this)
                .parent()
                .find(".fa-minus")
                .removeClass("fa-minus")
                .addClass("fa-plus");
        });
});

// dropdow minus plus


require('./colorpicker');

$('#colorpickerField').ColorPicker({
        onSubmit: function (hsb, hex, rgb, el) {
            $(el).val(hex);
        },
        onChange: function (hsb, hex, rgb) {
            $('#colorpickerField').val(hex)
        },
        onBeforeShow: function () {}
    })
    .bind('keyup', function () {
        $(this).ColorPickerSetColor(this.value);
    });
