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


		$('section').children('.fu-3').animate({'left':'0','opacity':'1','filter':'alpha(opacity=100)'},500);
		$('section article').children('.fu-1:eq(0)').animate({'top':'0','opacity':'1'},500,function(){
		$('section article').children('.fu-1:eq(1)').animate({'top':'0','opacity':'1'},500,function(){
		$('section article').children('.fu-1:eq(2)').animate({'top':'0','opacity':'1'},500);
		});	
		});
	$(document).scroll(function(){
		if($(document).scrollTop()>=$('.clients').offset().top/2){
			$('.clients').children('.fu-1:eq(0)').animate({'top':'0','opacity':'1'},500,function(){
			$('.clients').children('.fu-1:eq(1)').animate({'top':'0','opacity':'1'},500);	
			});
		};

		if($(document).scrollTop()>=$('.ythink').offset().top-400){
		 	$('.ythink').children('.fu-1:eq(0)').animate({'top':'0','opacity':'1'},500,function(){
		 	$('.ythink').children('.fu-1:eq(1)').animate({'top':'0','opacity':'1'},300,function(){
		 	$('.ythink').children('.fu-1:eq(2)').animate({'top':'0','opacity':'1'},300);	
		 	});
		 	});
		};

		if($(document).scrollTop()>=$('.tema').offset().top-400){
		 	$('.tema-main').children('.fu-5:eq(0)').animate({'left':'0','opacity':'1'},500,function(){
		 	$('.tema-main').children('.fu-5:eq(1)').animate({'left':'0','opacity':'1'},500,function(){
		 	$('.tema-main').children('.fu-5:eq(2)').animate({'left':'0','opacity':'1'},500,function(){
		 	$('.tema-main').children('.fu-5:eq(3)').animate({'left':'0','opacity':'1'},500);	
		 	});	
		 	});
		 	});
		};
	});


	$('.choose .ca').each(function(index,obj){
		$(obj).mouseover(function(){
			$(this).stop().animate({'width':'500px','fontSize':'1.3em'},500).siblings('.ca').stop().animate({'width':'350px','fontSize':'1em'},500);
		});
		$(obj).mouseout(function(){
			$('.choose .ca').stop().animate({'width':'400px','fontSize':'1em'},500);
		});
	});
	
	$('.ta h2').mouseover(function(){
		$(this).children('.s-m').stop().animate({'top':'30%'},500);
	});
	$('.ta h2').mouseout(function(){
		$(this).children('.s-m').stop().animate({'top':'80%'},500);
	});


	// clients滚动
	var cgnum=0;
	setInterval(clientGun,100);
	function clientGun(){
			cgnum+=1;
		if(cgnum==100){
			cgnum=0;
		$('.cimg').css('left');
			$('.cimg').css('left','0%');
		}
		$('.cimg').css('left','-'+cgnum+'%');
	}










});