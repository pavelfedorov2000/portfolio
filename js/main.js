new WOW().init();
var mySwiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.projects-pagination',
        bulletClass: 'projects-bullet',
        bulletActiveClass: 'projects-bullet_active',
        clickable: true
    },
});
$(document).ready(function() {
    function validateForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                tel: "required"
            },
            messages: {
                name:  {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} cимвола!")
                },
                tel: "Пожалуйста, введите свой номер телефона"
            }
        });
    };
    
    validateForms('.form');
    
    
    $('input[name=phone]').mask("+375 (99) 999-99-99"); //  маска ввода в инпутах
    
    $("a[href^='#']").click(function(){
        const href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(href).offset().top+"px"});
        return false;
    });

    // Pageup
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });
});