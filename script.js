// Function for cross button to close tabs
$(document).ready(function () {
  $('.fa-close').click(function () {
    $("#livefit").removeClass("active show");
    $("#ctt").removeClass("active show");
    $("#kabo").removeClass("active show");
    $("#pg").removeClass("active show");
    $("#denovia").removeClass("active show");
    $(".nav-link").removeClass("active");

    $(".livefit-bg").removeClass("d-block");
    $(".leaf-bg").addClass("d-block");
    $(".ctt-bg").removeClass("d-block");
    $(".kabo-bg").removeClass("d-block");
    $(".pg-bg").removeClass("d-block");
    $(".denovia-bg").removeClass("d-block");

    $(".livefit-default-img").css("display", 'block');
    $(".ctt-default-img").css("display", 'block');
    $(".kabo-default-img").css("display", 'block');
    $(".pg-default-img").css("display", 'block');
    $(".denovia-default-img").css("display", 'block');
    
    $(".livefit-active-img").css("display", 'none');
    $(".ctt-active-img").css("display", 'none');
    $(".kabo-active-img").css("display", 'none');
    $(".pg-active-img").css("display", 'none');
    $(".denovia-active-img").css("display", 'none');

    $(".red-shape svg").css("fill", '#F78568');
    $(".orange-btn").css("backgroundColor", '#F78568');

  })

})