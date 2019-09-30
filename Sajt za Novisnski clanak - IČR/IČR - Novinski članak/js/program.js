$(document).ready(function () { 
    if ($(document).width() < 992) {
        $("#navigacija").removeClass("sticky-top");
        $("#navigacija .navbar-nav .okvir").removeClass("border-right");
        $("#navigacija1").removeClass("sticky-top");
        $("#navigacija1 .navbar-nav .okvir").removeClass("border-right");
    }
    else {
        $("#navigacija").addClass("sticky-top");
        $("#navigacija .navbar-nav .okvir").addClass("border-right");
        $("#navigacija1").addClass("sticky-top");
        $("#navigacija1 .navbar-nav .okvir").addClass("border-right");
    }
    if ($(document).width() < 768) {
        $(".carousel-caption").addClass("caption-responsive");
    }
    else {
        $(".carousel-caption").removeClass("caption-responsive");
    }
    if ($(document).width() < 576) {
        $(".promenaNovosti").removeClass("novosti");
        $(".promenaNovosti").addClass("novosti-top");
        $(".dugmeProv").addClass("dugmeNovosti1");    
        $(".dugmeProv").removeClass("dugmeNovosti");
    }
    else {
        $(".carousel-caption").removeClass("caption-responsive");
        $(".promenaNovosti").addClass("novosti");
        $(".promenaNovosti").removeClass("novosti-top");
        $(".dugmeProv").removeClass("dugmeNovosti1");    
        $(".dugmeProv").addClass("dugmeNovosti");
    }    
    var dat = new Date();
    $("#datum").text(dat.getDate() + "." + (dat.getMonth() + 1) + "." + dat.getFullYear() + ".");
    /*function proveraVrha()
    {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
            $(".fejd").each(function () {
                var objectBottom = $(this).offset().top;
                if (objectBottom <= windowBottom) {
                    if ($(this).css("opacity") == 0) { $(this).fadeTo(1000, 1); }
                }
            });
    }
    $(window).on("load", function () {
        $(window).on('scroll',proveraVrha); 
        window.setInterval(proveraVrha, 50);
        proveraVrha();
    });*/
    window.setInterval(digitalniSat, 1000);
    digitalniSat();
    $("#vertikalni-slajder .card").click(function ()
    {
        var cards = $("#vertikalni-slajder .card");
        for(var i=0;i<cards.length;i++)
        {
            $(cards[i]).removeClass("activeSlajder");
        }
        var brojSlajda = $(this).attr("data-slide-to");
        $(cards[brojSlajda]).addClass("activeSlajder");
    });
    $("#carouselExampleIndicators").on("slid.bs.carousel", function () {
        var cards = $("#vertikalni-slajder .card");
        for(var i=0;i<cards.length;i++)
        {
            $(cards[i]).removeClass("activeSlajder");
        }
        var brojSlajda = $("#carouselExampleIndicators .active").attr("data-slide-to");
        $(cards[brojSlajda]).addClass("activeSlajder");
    });
       
    $("form").submit(function(){
        alert("Uspešno ste poslali poruku našem Portalu! Odgovor ćete dobiti u najskorijem roku!");
    }); 
});
$(window).resize(function () {
    if ($(document).width() < 992) {
        $("#navigacija").removeClass("sticky-top");
        $("#navigacija1").removeClass("sticky-top");
        $("#navigacija .navbar-nav .okvir").removeClass("border-right");
        $("#navigacija1 .navbar-nav .okvir").removeClass("border-right");
    }
    else {
        $("#navigacija").addClass("sticky-top");
        $("#navigacija1").addClass("sticky-top");
        $("#navigacija .navbar-nav .okvir").addClass("border-right");
        $("#navigacija1 .navbar-nav .okvir").addClass("border-right");
    }
    if ($(document).width() < 768) {
        $(".carousel-caption").addClass("caption-responsive");
    }
    else {
        $(".carousel-caption").removeClass("caption-responsive");
    }
    if ($(document).width() < 576) {
        $(".promenaNovosti").removeClass("novosti");
        $(".promenaNovosti").addClass("novosti-top");
        $(".dugmeProv").addClass("dugmeNovosti1");    
        $(".dugmeProv").removeClass("dugmeNovosti");
    }
    else {
        $(".carousel-caption").removeClass("caption-responsive");
        $(".promenaNovosti").addClass("novosti");
        $(".promenaNovosti").removeClass("novosti-top");   
        $(".dugmeProv").removeClass("dugmeNovosti1");    
        $(".dugmeProv").addClass("dugmeNovosti");     
    }
});
function postavljanjeVisine() {
    $('.karusel').each(function(){
      var items = $('.carousel-item', this);
      items.css('min-height', 0);
      var maxHeight = Math.max.apply(null, 
          items.map(function(){
              return $(this).outerHeight()}).get());
      items.css('min-height', maxHeight + 'px');
    });
}
$(window).on('load resize orientationchange',postavljanjeVisine);
function digitalniSat()
{
    var datum = new Date();
    var sat = datum.getHours();
    var minut = datum.getMinutes();
    var sekund = datum.getSeconds();
    
    $("#vreme").text(sat + " : " + minut + " : " + sekund);
}
function promenaSlike(objekat) {
    $("#photo").attr("src",objekat.src);
}
