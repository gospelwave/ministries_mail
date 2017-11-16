// @codekit-prepend "vendor/jquery-1.10.2.js"
// @codekit-append "vendor/jquery.popupWindow.js"
// @codekit-append "_checkbox.js"

$(document).ready(function () {


    $("form").on('click', 'input[type="submit"]', function (event) {
        event.preventDefault();
        generate();
    });

    $("input[type='checkbox']").each(function () {
        var label = $(this).attr("placeholder");

        var value = $(this).prop("checked");

        var box = '<div class="checkbox"></div>';
        var html = '<div class="box"><div class="chip"></div></div><label>' + label + '</label>';

        $(this).wrap(box);
        $(this).after(html);

        if (value) {
            $(this).parent().attr("data-checked", true);
        } else {
            $(this).parent().attr("data-checked", false);
        }

    });


    $("form").on('click', 'div.checkbox', function () {

        var input = $(this).find("input[type='checkbox']");

        var value = input.prop("checked");

        if (value) {
            input.prop("checked", false);
            $(this).attr("data-checked", false);
        } else {
            input.prop("checked", true);
            $(this).attr("data-checked", true);
        }

    });

});


function generate() {

    var name = $('input[name="name"]').val();
    var fonction = $('input[name="function"]').val();
    var mobile = $('input[name="mobile"]').val();
    var picture = $('input[name="picture"]').val();


    var domain = "";
    var url = "";

    $('select[name="domain"] option:selected').each(function () {

        domain = $(this).val();

    });

    if (domain == 'gospelwave') {

        url = "mail_gw.html?";

    } else if (domain == 'aimg') {

        url = "mail_aimg.html?";

    } else if (domain == 'iahm') {

        url = "mail_iahm.html?";

    } else {

        url = "mail_gw.html?";

    }


    var data = "name=" + encodeURIComponent(name) + "&function="
        + encodeURIComponent(fonction) + "&mobile=" + encodeURIComponent(mobile) + "&picture=" + picture + "&domain=" + domain;


    url += data;

    window.open(url, '_blank');


}


