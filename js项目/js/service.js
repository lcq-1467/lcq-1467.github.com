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


		$('.main-content').children('.fu-1:eq(0)').animate({'left':'0','opacity':'1','filter':'alpha(opacity=100)'},500,function(){
		$('.main-content').children('.fu-1:eq(1)').animate({'top':'0','opacity':'1'},500,function(){
		$('.wrap-mnf').children('.fu-1:eq(0)').animate({'top':'0','opacity':'1'},300,function(){
		$('.wrap-mnf').children('.fu-1:eq(1)').animate({'top':'0','opacity':'1'},300,function(){
		$('.wrap-mnf').children('.fu-1:eq(2)').animate({'top':'0','opacity':'1'},300,function(){
		$('.wrap-mnf').children('.fu-1:eq(3)').animate({'top':'0','opacity':'1'},300);
		});	
		});
		});	
		});
		});
		
	$(document).scroll(function(){
		if($(document).scrollTop()>=$('.clients').offset().top/2){
			$('.clients').children('.fu-1:eq(0)').animate({'top':'0','opacity':'1'},500,function(){
			$('.clients').children('.fu-1:eq(1)').animate({'top':'0','opacity':'1'},500);	
			});
		};


		if($(document).scrollTop()>=$('.work').offset().top/2){
			$('.work').children('.fu-1:eq(0)').animate({'top':'0','opacity':'1'},500,function(){
			$('.work').children('.fu-1:eq(1)').animate({'top':'0','opacity':'1'},500);	
			});
			$('.work-cont').children('.fu-3:eq(0)').animate({'left':'0','opacity':'1'},500,function(){
			$('.work-cont').children('.fu-3:eq(1)').animate({'left':'0','opacity':'1'},500,function(){
			$('.work-cont').children('.fu-3:eq(2)').animate({'left':'0','opacity':'1'},400,function(){
			$('.work-cont').children('.fu-3:eq(3)').animate({'left':'0','opacity':'1'},400);
			});	
			});	
			});
		};

		if($(document).scrollTop()>=$('.ythink').offset().top-400){
		 	$('.ythink').children('.fu-1:eq(0)').animate({'top':'0','opacity':'1'},500,function(){
		 	$('.ythink').children('.fu-1:eq(1)').animate({'top':'0','opacity':'1'},300,function(){
		 	$('.ythink').children('.fu-1:eq(2)').animate({'top':'0','opacity':'1'},300);	
		 	});
		 	});
		};

		
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