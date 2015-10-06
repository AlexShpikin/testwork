jQuery.noConflict()(function($){
	(function upload_photos(){
		if($('.loadNews').length){
				$(document).on('click', '.loadNews', function(e){
					e.preventDefault();
					e.stopPropagation();
					var	url = 'assets/newsList.inc.php';
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
		}
	})();
	(function fixedBlock(){
		$(window).scroll(function () {
		  if ($(this).scrollTop() > 100) {
		   $('.section-right-inner').addClass('fix');
		  } else {
		   $('.section-right-inner').removeClass('fix');
		  }
		}); 
	})();
	(function scrollTo(){
		$('.side-nav a').each(function(){
			$(this).on('click', function(){
				var target = $(this).attr('href').replace('#','');
				$('html, body').animate({scrollTop: $('#'+target+'').offset().top}, 800);
				return false;
			});	
		});
		
	})();
	(function mobileNav(){
		$(document).on('click', '.header_nav_show', function(){
			if($(this).hasClass('active')){
				$(this).next('ul').hide();
				$(this).removeClass('active');
			}else{
				$(this).next('ul').show();
				$(this).addClass('active');
			}
			return false;
		});
	})();			       			
});