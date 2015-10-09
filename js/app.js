(function($, window, undefined){
    $('.loadNews').on('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        var	url = 'assets/newsList.php';
        var data_count = $(this).attr('data');
        $.ajax({
            type: "GET",
            dataType : "html",
            url: url,
            cache: false,
            data:'count='+data_count+'',
            success: function(response) {
                $('.overlay_load').show(); 
                var newsList = $.parseJSON(response);
                var list = '';
                for(var i = 0; i< newsList.length; i++){
                    list +='<li><div class="section-left-item-newsList-item"><div class="section-left-item-newsList-item-image large-4 columns"><a href="'+newsList[i].url+'" title="'+newsList[i].title+'"><img src="'+newsList[i].image+'" alt=""></a></div><div class="section-left-item-newsList-item-text large-8 columns"><div class="section-left-item-newsList-item-text-date">'+newsList[i].date+'</div><h3><a href="'+newsList[i].utl+'" alt="'+newsList[i].title+'">'+newsList[i].title+'</a></h3><div class="section-left-item-newsList-item-text-content"><p>'+newsList[i].preview+'</p></div></div></div></li>';
                }
                setTimeout(function(){
                    $('.section-left-item-newsList').append(list);
                    $('.overlay_load').hide();
                    $('.loadNews').attr('data',data_count-5);
                        if($('.loadNews').attr('data')<0){
                            $('.loadNews').hide();
                        }
                },1000);

            },error:function(response){
                    console.log(response);
            }
        });
    });	

    
    $('.forms_ajax_input_required.email').on('keyup',function(){
        var $el = $(this);
        if($el.val() !== '') {
            var mail = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if(mail.test($el.val())){
                $el.css({'border' : '1px solid #569b44'}).removeClass('required');

            } else {
                $el.addClass('required');
            }
        } else {
            $el.addClass('required');
        }
    });
    $container = $('.forms_ajax');
    //тут исправить
    $container.each(function(){
        $(this).on('keyup', '.forms_ajax_input_required', function(e){
            $('input.name').each(function(){
                    if($(this).val() != ''){
                        if($.isNumeric($(this).val())){
                            $(this).addClass('required');
                        }else{
                            if($(this).val().length > 2){
                                $(this).css({'border' : '1px solid #569b44'}).removeClass('required');
                            }
                            else{
                                $(this).addClass('required');
                            }
                        }
                    }else{
                        $(this).addClass('required');
                    }
            });
            $('input.phone').each(function(){
                    if($(this).val() != ''){
                        if($(this).val().length == 10){
                                $(this).css({'border' : '1px solid #569b44'}).removeClass('required');
                            }
                            else{
                                $(this).addClass('required');
                            }
                    }else{
                        $(this).addClass('required');
                    }
            });
            $('textarea.message').each(function(){
                    if($(this).val() != ''){
                        if($.isNumeric($(this).val())){
                            $(this).addClass('required');
                        }else{
                            if($(this).val().length > 2){
                                $(this).css({'border' : '1px solid #569b44'}).removeClass('required');
                            }
                            else{
                                $(this).addClass('required');
                            }
                        }
                    }else{
                        $(this).addClass('required');
                    }
            });
            if(($('input.phone').hasClass('required') == false ) || ($('input.email').hasClass('required') == false)){
                $('input.phone').removeClass('required');
                $('input.email').removeClass('required')
            }
            if($('.forms_ajax .forms_ajax_input_required').hasClass('required') == false){
                $('.forms_ajax input[type="submit"]').prop('disabled', false);
            }else{
                $('.forms_ajax input[type="submit"]').prop('disabled', 'disabled');
            }
        });
    });
    //тут уже все
    $container.on('submit', 'form', function(e) {
        e.preventDefault();
        e.stopPropagation();
        var $form = $(this),
            urlBase = 'assets/mail.php',
            data = $form.serialize();
        $.ajax({
            type: "post",
            dataType : "html",
            url: urlBase,
            data: data,
            cache: false,
            success: function(response){
                $('.form_overlay').show();
                setTimeout(function() {
                    var message = $.parseJSON(response);
                    if(typeof message.msg === 'undefined') {
                        for(var i=0;i<message.fields.length;i++){
                            $('.forms_ajax_message').html(message.fields[i].error);
                        }
                    } else {
                        $('.forms_ajax_message').html(message.msg);
                        $form.hide()
                    }
                    $('.form_overlay').hide();
                }, 300);
            },error:function(response){
                    console.log(response);
            }
        });
    });
    
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
       $('.section-right-inner').addClass('fix');
      } else {
       $('.section-right-inner').removeClass('fix');
      }
        //$('.section-right-inner').toggleClass('fix', function(){return $(this).scrollTop() > 100;});
    }); 
    
    $('.side-nav a').on('click', function(){
        var target = $(this).attr('href').replace('#','');
        $('body').animate({scrollTop: $('#'+target+'').offset().top}, 800);
        return false;
    });	

    $('.header_nav_show').on('click', function(){
        if($(this).hasClass('active')){
            $(this).next('ul').hide();
            $(this).removeClass('active');
        }else{
            $(this).next('ul').show();
            $(this).addClass('active');
        }
        return false;
    });		       			
})(jQuery, window);