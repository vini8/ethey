// toggle tabs on click of links
$(document).ready(function () {
    $('#livefit-tab').click(function () {
        $("#livefit").toggleClass("active show");
        $("#ctt").removeClass("active show");
        $("#kabo").removeClass("active show");
        $("#pg").removeClass("active show");
        $("#denovia").removeClass("active show");

        $(".livefit-bg").addClass("d-block");
        $(".leaf-bg").removeClass("d-block");
        $(".ctt-bg").removeClass("d-block");
        $(".kabo-bg").removeClass("d-block");
        $(".pg-bg").removeClass("d-block");
        $(".denovia-bg").removeClass("d-block");


        if ($("#livefit").hasClass("active")) {
            $(".livefit-active-img").css("display", 'block');
            $(".livefit-default-img").css("display", 'none');

            $(".ctt-active-img").css("display", 'none');
            $(".kabo-active-img").css("display", 'none');
            $(".pg-active-img").css("display", 'none');
            $(".denovia-active-img").css("display", 'none');

            $(".ctt-default-img").css("display", 'block');
            $(".kabo-default-img").css("display", 'block');
            $(".pg-default-img").css("display", 'block');
            $(".denovia-default-img").css("display", 'block');

            $(".red-shape svg").css("fill", '#EE254D');
            $(".orange-btn").css("backgroundColor", '#EE254D');
        } else {
            $(".livefit-active-img").css("display", 'none');
            $(".livefit-default-img").css("display", 'block');

            $(".leaf-bg").addClass("d-block");
            $(".livefit-bg").removeClass("d-block")
        }
    })
});
$(document).ready(function () {
    $('#ctt-tab').click(function () {
        $("#livefit").removeClass("active show");
        $("#ctt").toggleClass("active show");
        $("#kabo").removeClass("active show");
        $("#pg").removeClass("active show");
        $("#denovia").removeClass("active show");

        $(".livefit-bg").removeClass("d-block");
        $(".leaf-bg").removeClass("d-block");
        $(".ctt-bg").addClass("d-block");
        $(".kabo-bg").removeClass("d-block");
        $(".pg-bg").removeClass("d-block");
        $(".denovia-bg").removeClass("d-block");

        if ($("#ctt").hasClass("active")) {
            $(".ctt-active-img").css("display", 'block');
            $(".ctt-default-img").css("display", 'none');

            $(".livefit-active-img").css("display", 'none');
            $(".kabo-active-img").css("display", 'none');
            $(".pg-active-img").css("display", 'none');
            $(".denovia-active-img").css("display", 'none');

            $(".livefit-default-img").css("display", 'block');
            $(".kabo-default-img").css("display", 'block');
            $(".pg-default-img").css("display", 'block');
            $(".denovia-default-img").css("display", 'block');

            $(".red-shape svg").css("fill", '#CD783B');
            $(".orange-btn").css("backgroundColor", '#CD783B');

        } else {
            $(".ctt-active-img").css("display", 'none');
            $(".ctt-default-img").css("display", 'block');

            $(".leaf-bg").addClass("d-block");
            $(".ctt-bg").removeClass("d-block")

            $(".red-shape svg").css("fill", '#F78568');
            $(".orange-btn").css("backgroundColor", '#F78568');
        }
    })
});
$(document).ready(function () {
    $('#kabo-tab').click(function () {
        $("#livefit").removeClass("active show");
        $("#ctt").removeClass("active show");
        $("#kabo").toggleClass("active show");
        $("#pg").removeClass("active show");
        $("#denovia").removeClass("active show");

        $(".kabo-bg").addClass("d-block");
        $(".livefit-bg").removeClass("d-block");
        $(".leaf-bg").removeClass("d-block");
        $(".ctt-bg").removeClass("d-block");
        $(".pg-bg").removeClass("d-block");
        $(".denovia-bg").removeClass("d-block");

        if ($("#kabo").hasClass("active")) {
            $(".kabo-active-img").css("display", 'block');
            $(".kabo-default-img").css("display", 'none');

            $(".livefit-active-img").css("display", 'none');
            $(".ctt-active-img").css("display", 'none');
            $(".pg-active-img").css("display", 'none');
            $(".denovia-active-img").css("display", 'none');

            $(".livefit-default-img").css("display", 'block');
            $(".ctt-default-img").css("display", 'block');
            $(".pg-default-img").css("display", 'block');
            $(".denovia-default-img").css("display", 'block');

            $(".red-shape svg").css("fill", '#1A2B4E');
            $(".orange-btn").css("backgroundColor", '#1A2B4E');

        } else {
            $(".kabo-active-img").css("display", 'none');
            $(".kabo-default-img").css("display", 'block');

            $(".leaf-bg").addClass("d-block");
            $(".kabo-bg").removeClass("d-block")

            $(".red-shape svg").css("fill", '#F78568');
            $(".orange-btn").css("backgroundColor", '#F78568');
        }
    })
});
$(document).ready(function () {
    $('#pg-tab').click(function () {
        $("#livefit").removeClass("active show");
        $("#ctt").removeClass("active show");
        $("#kabo").removeClass("active show");
        $("#pg").toggleClass("active show");
        $("#denovia").removeClass("active show");

        $(".pg-bg").addClass("d-block");
        $(".livefit-bg").removeClass("d-block");
        $(".leaf-bg").removeClass("d-block");
        $(".ctt-bg").removeClass("d-block");
        $(".kabo-bg").removeClass("d-block");
        $(".denovia-bg").removeClass("d-block");

        if ($("#pg").hasClass("active")) {
            $(".pg-active-img").css("display", 'block');
            $(".pg-default-img").css("display", 'none');

            $(".livefit-active-img").css("display", 'none');
            $(".ctt-active-img").css("display", 'none');
            $(".kabo-active-img").css("display", 'none');
            $(".denovia-active-img").css("display", 'none');

            $(".livefit-default-img").css("display", 'block');
            $(".ctt-default-img").css("display", 'block');
            $(".kabo-default-img").css("display", 'block');
            $(".denovia-default-img").css("display", 'block');

            $(".red-shape svg").css("fill", '#FFC505');
            $(".orange-btn").css("backgroundColor", '#FFC505');

        } else {
            $(".pg-active-img").css("display", 'none');
            $(".pg-default-img").css("display", 'block');

            $(".leaf-bg").addClass("d-block");
            $(".pg-bg").removeClass("d-block")

            $(".red-shape svg").css("fill", '#F78568');
            $(".orange-btn").css("backgroundColor", '#F78568');
        }

    })
});
$(document).ready(function () {
    $('#denovia-tab').click(function () {
        $("#livefit").removeClass("active show");
        $("#ctt").removeClass("active show");
        $("#kabo").removeClass("active show");
        $("#pg").removeClass("active show");
        $("#denovia").toggleClass("active show");

        $(".denovia-bg").addClass("d-block");
        $(".livefit-bg").removeClass("d-block");
        $(".leaf-bg").removeClass("d-block");
        $(".ctt-bg").removeClass("d-block");
        $(".kabo-bg").removeClass("d-block");
        $(".pg-bg").removeClass("d-block");

        if ($("#denovia").hasClass("active")) {
            $(".denovia-active-img").css("display", 'block');
            $(".denovia-default-img").css("display", 'none');

            $(".livefit-active-img").css("display", 'none');
            $(".ctt-active-img").css("display", 'none');
            $(".kabo-active-img").css("display", 'none');
            $(".pg-active-img").css("display", 'none');

            $(".livefit-default-img").css("display", 'block');
            $(".ctt-default-img").css("display", 'block');
            $(".kabo-default-img").css("display", 'block');
            $(".pg-default-img").css("display", 'block');

            $(".red-shape svg").css("fill", '#000000');
            $(".orange-btn").css("backgroundColor", '#000000');


        } else {
            $(".denovia-active-img").css("display", 'none');
            $(".denovia-default-img").css("display", 'block');

            $(".leaf-bg").addClass("d-block");
            $(".denovia-bg").removeClass("d-block")

            $(".red-shape svg").css("fill", '#F78568');
            $(".orange-btn").css("backgroundColor", '#F78568');
        }

    })
});
