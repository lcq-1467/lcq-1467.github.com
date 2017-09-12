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



	//production产品展示
	$('.img-p').each(function(index,obj){
		$(obj).append('<div class="zz"></div>');
		$(obj).children('.zz').append('<div class="demo"><span>Demo</span><span>Detailes</span></div>');
		$(obj).css({'background':' url(./images/portfolio/item-'+(index+1)+'.jpg) no-repeat center center',"background-size":'108%'});	
		$(obj).mouseover(function(){
			$(this).children('.zz').css('visibility','visible');
			$(this).stop().animate({'background-size':'130%'},500);	

			$($('.demo')[index]).children('.demo span').css({'transform':'scale(1)'});	
		});
		$(obj).mouseout(function(){			
			$(this).stop().animate({'background-size':'110%'},500,function(){
				$(this).children('.zz').css('visibility','hidden');
			});
			$('.demo span').css({'transform':'scale(0)'});

		});

	});

		

		
	
			
	//轮播图
	var lunnum=0;
	lunbo(0);
	function lunbo(inum){
		$('.lunbo-main').css({'background':'url(./images/portfolio/item-'+(inum+1)+'.jpg) no-repeat center center',"background-size":'cover'});
	};
		$('.lunbo .left').click(function(){
			lunnum++;
			if(lunnum==$('.img-p .zz').length){
				lunnum=0;
			};
			lunbo(lunnum);
		});
		$('.lunbo .right').click(function(){
			lunnum--;
			if(lunnum==-1){
				lunnum=$('.img-p .zz').length-1;	
			};
			lunbo(lunnum);
		});
		$('.lunbo .result').click(function(){
			$('.lunbo').fadeOut(400,function(){
				$('.lunbo').css('display','none');
			});
		});
		// 点击demo
		$('.demo').each(function(index,obj){
			$($('.demo')[index]).children('span:eq(0)').click(function(){
				$('.lunbo').css('display','block');
				lunbo(index);
			});
		});

		// 鼠标滚动加载;


			 	$('.pro-h').children('.fu-2:eq(0)').animate({'top':'0','opacity':'1'},300,function(){
			 		$('.pro-h').children('.fu-2:eq(1)').animate({'top':'0','opacity':'1'},300,function(){
			 			$('.pro-mli').children('.fu-5:eq(0)').animate({'left':'0','opacity':'1'},300,function(){
			 	$('.pro-mli').children('.fu-5:eq(1)').animate({'left':'0','opacity':'1'},300,function(){
			 	$('.pro-mli').children('.fu-5:eq(2)').animate({'left':'0','opacity':'1'},300,function(){
			 	$('.pro-mli').children('.fu-5:eq(3)').animate({'left':'0','opacity':'1'},300,function(){
			 	$('.pro-mli').children('.fu-5:eq(4)').animate({'left':'0','opacity':'1'},300,function(){
			 	$('.pro-mli').children('.fu-5:eq(5)').animate({'left':'0','opacity':'1'},300)
			 	});
			 	});
			 	});
			 	});	
			 	});	
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









});