// @codekit-prepend "vendor/jquery-1.10.2.js"
// @codekit-append "vendor/handlebars-v1.3.0.js"


$(document).ready(function () {

    var name = "Jean-Luc Trachsel";
    var fonction = "Directeur international";
    var mobile = "";
    var domain = "iahm";
    var picture = "";

    if (getParameterByName("name") != "") {
        name = getParameterByName("name");
    }

    if (getParameterByName("function") != "") {
        fonction = getParameterByName("function");
    }

    if (getParameterByName("mobile") != "") {
        mobile = getParameterByName("mobile");
    }

    if (getParameterByName("domain") != "") {
        domain = getParameterByName("domain");
    }

    if (getParameterByName("picture") != "") {
        picture = getParameterByName("picture");
    }


    var context = {
        name: name,
        fonction: fonction,
        mobile: mobile,
        domain: domain,
        picture: picture
    };

    if (domain == "iahm") {

        context.logo = "iahm_logo_red";
        context.phone = "+41 21 907 44 44";
        context.website = "healing-ministries.org";
        context.website_link = "http://www.healing-ministries.org";
        context.address = "Route du Flon 28, 1610 Oron-la-Ville, Switzerland";
        context.line4 = "";
        context.line5 = "";
        context.facebook = "healingministries";
        context.twitter = "AIMG_IAHM";
        context.instagram = "iahm_aimg";
        context.youtube = "";

    } else if (domain == "aimg") {

        context.logo = "aimg_logo_red";
        context.phone = "+41 21 907 44 44";
        context.website = "www.laguerison.org";
        context.website_link = "http://www.laguerison.org";
        context.address = "Route du Flon 28, 1610 Oron-la-Ville, Suisse";
        context.line4 = "";
        context.line5 = "";
        context.facebook = "healingministries";
        context.twitter = "AIMG_IAHM";
        context.instagram = "iahm_aimg";
        context.youtube = "";

    } else if (domain == "gospelwave") {

        context.logo = "logo_gw";
        context.phone = "info@gospel-wave.org";
        context.website = "gospel-wave.org";
        context.website_link = "http://www.gospel-wave.org";
        context.address = "Route du Flon 28, 1610 Oron-la-Ville, Suisse";
        context.line4 = "";
        context.line5 = "";
        context.facebook = "";
        context.twitter = "";
        context.instagram = "";
        context.youtube = "";

    }

    if (context.line4 != "") {
        context.hasLine4 = true;
    } else {
        context.hasLine4 = false;
    }

    var source = $("#mail").html();
    var template = Handlebars.compile(source);
    var html = template(context);

    $("body").html("&nbsp;" + html);

});

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");

    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(location.search);

    if (results != null) {
        var result = decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    if (result == null) {
        result = "";
    } else if (result == "false") {
        result = false;
    } else if (result == "true") {
        result = true;
    }

    return result;
}