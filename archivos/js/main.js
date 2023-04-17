$(document).ready(function(){
    // $('.carruselPrincipal').slick({
    //     dots: false,
    //     prevArrow: false,
    //     nextArrow: false,
    //     slidesToShow: 1,
    //     centerMode: false,
    //     autoplay: true,
    //     autoplaySpeed: 1000,
    // });

    $('.carruselPrincipal').slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 1000,
        // speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    })
    $("#boton").click(function(){
        if($("#nombre").val().length<3){
            $("#nombre").css("border","2px solid red");
            toastMixin.fire({
                title: 'Los nombres debe tener más de 3 carácteres',
                icon: 'error'
              });
        
        } else if($("#apellido").val().length<3){
            toastMixin.fire({
                title: 'Los apellidos debe tener más de 3 carácteres',
                icon: 'error'
              });
            $("#nombre").css("border","2px solid #fff");
            $("#apellido").css("border","2px solid red");
        
        }else if($("#email").val().length<3){
            toastMixin.fire({
                title: 'El email debe tener más de 3 carácteres',
                icon: 'error'
              });
            $("#nombre").css("border","2px solid #fff");
            $("#apellido").css("border","2px solid #fff");
            $("#email").css("border","2px solid red");
        
        }else if($("#telefono").val().length<9){
            toastMixin.fire({
                title: 'El teléfono debe tener 8 dígitos',
                icon: 'error'
              });
            $("#nombre").css("border","2px solid #fff");
            $("#apellido").css("border","2px solid #fff");
            $("#email").css("border","2px solid #fff");
            $("#telefono").css("border","2px solid red");
        
        }else if($("#ciudad").val()==""){

            $("#nombre").css("border","2px solid #fff");
            $("#apellido").css("border","2px solid #fff");
            $("#email").css("border","2px solid #fff");
            $("#telefono").css("border","2px solid #fff");
            $("#ciudad").css("border","1px solid red");

        }else{
            $("#nombre").css("border","1px solid green");
            $("#apellido").css("border","1px solid green");
            $("#email").css("border","1px solid green");
            $("#telefono").css("border","1px solid green");
            $("#ciudad").css("border","1px solid green");
            
            $("#nombre").val("");
            $("#apellido").val("");
            $("#email").val("");
            $("#telefono").val("");
            $("#ciudad").val("");
            
            toastMixin.fire({
                animation: true,
                title: 'Formulario enviado'
              }); 
        }
    });


    $('#collares').click(function(){
        $('#productoBandanas').hide();
        $('#productoCorreas').hide();
        $('#productoCollares').slideDown();
    })

    $('#correas').click(function(){
        $('#productoCollares').hide();
        $('#productoBandanas').hide();
        $('#productoCorreas').slideDown();
    })

    $('#bandanas').click(function(){
        $('#productoCollares').hide();
        $('#productoCorreas').hide();
        $('#productoBandanas').slideDown();
    })

    $('#linkTIenda').click(function(){
        $("html, body").animate({
            scrollTop: $("#tienda").offset().top - 220
        }, 1000);
        $('#navTienda').addClass("active");
        $('#navInicio').removeClass("active");
        $('#navContacto').removeClass("active");
        $('#navDonacion').removeClass("active");
        $('#navNosotros').removeClass("active");
    })
    $('#linkNosotros').click(function(){
        $("html, body").animate({
            scrollTop: $("#nosotros").offset().top - 220
        }, 1000);
        $('#navNosotros').addClass("active");
        $('#navInicio').removeClass("active");
        $('#navContacto').removeClass("active");
        $('#navDonacion').removeClass("active");
        $('#navTienda').removeClass("active");
    })
    $('#linkDonacion').click(function(){
        $("html, body").animate({
            scrollTop: $("#donacion").offset().top - 220
        }, 1000);
        $('#navDonacion').addClass("active");
        $('#navInicio').removeClass("active");
        $('#navContacto').removeClass("active");
        $('#navTienda').removeClass("active");
        $('#navNosotros').removeClass("active");
    })
    $('#linkContacto').click(function(){
        $("html, body").animate({
            scrollTop: $("#contacto").offset().top - 220
        }, 1000);
        $('#navContacto').addClass("active");
        $('#navInicio').removeClass("active");
        $('#navTienda').removeClass("active");
        $('#navDonacion').removeClass("active");
        $('#navNosotros').removeClass("active");
    })



});
var toastMixin = Swal.mixin({
    toast: true,
    icon: 'success',
    title: 'General Title',
    animation: false,
    position: 'top-right',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });