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

			 if($(document).scrollTop()>=$('.ythink').offset().top-450){
			 	$('.ythink').children('.fu-1:eq(0)').animate({'top':'0','opacity':'1'},500,function(){
			 	$('.ythink').children('.fu-1:eq(1)').animate({'top':'0','opacity':'1'},300,function(){
			 	$('.ythink').children('.fu-1:eq(2)').animate({'top':'0','opacity':'1'},300);	
			 	});
			 	});
			 };
		});


		// 主题轮播
		var imgNum=0;
		var clork;
		cImg(imgNum);
		clork=setInterval(mm,1000);
		

		$('.c-img').mouseover(function(){
			clearInterval(clork);
		});
		$('.c-img').mouseout(function(){
			clork=setInterval(mm,1000);		
		});

		$('.c-img .left').click(function(){
			imgNum++;
			if(imgNum==$('.c-img img').length){
					imgNum=0;
				};
			cImg(imgNum);

		});
		$('.c-img .right').click(function(){
			imgNum--;
			if(imgNum<0){
				imgNum=$('.c-img img').length-1;
				};
			cImg(imgNum);

		});

		$('.c-img ul li').each(function(index,obj){
			$(obj).click(function(){
				cImg(index);
				$('.c-img ul li').eq(index).css('background','rgba(250,100,100,.9)');

			});
		});


		function mm(){
			imgNum++;
			if(imgNum==$('.c-img img').length){
					imgNum=0;
				}	
			cImg(imgNum);		
		};

		
		function cImg(num){			
				$('.c-img img').each(function(index,obj){
					$(obj).css({'z-index':'-1'});
					$('.c-img ul li').css('background','rgba(50,60,100,0.9)');
				});
				$('.c-img img').eq(num).css('z-index','1');
				$('.c-img ul li').eq(num).css('background','rgba(250,100,100,.9)');

		}

});