$(document).ready(function(){
	//导航 
	$('.nav>li').each(function(index,obj){
		$(obj).mouseover(function(){

			$(this).children('ul').css({'visibility':'visible','transform':'scale(1.1)'}).stop().animate({'opacity':'1'},500);
		});
		$(obj).mouseout(function(){
			$(this).children('ul').stop().css({'transform':'scale(0.4)'}).animate({'opacity':'0'},500,function(){$(this).children('ul').css('visibility', 'hidden')});
		});
	});


		
	$(document).scroll(function(){

		if($(document).scrollTop()>=$('.ythink').offset().top-400){
		 	$('.ythink').children('.fu-1:eq(0)').animate({'top':'0','opacity':'1'},500,function(){
		 	$('.ythink').children('.fu-1:eq(1)').animate({'top':'0','opacity':'1'},300,function(){
		 	$('.ythink').children('.fu-1:eq(2)').animate({'top':'0','opacity':'1'},300);	
		 	});
		 	});
		};

	});











});