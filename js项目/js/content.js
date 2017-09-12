$(document).ready(function(){
	var pro = [
		{'id':'01','name':'安徽省'},
		{'id':'02','name':'湖南省'},
		];
		var city= [
		{'pid':'01','names':[{'id':'011','name':'合肥市'},{'id':'012','name':'六安市'}]},
		{'pid':'02','names':[{'id':'021','name':'长沙市'},{'id':'022','name':'常德市'}]}
		];
		var area = [
		{'pid':'011','names':[{'id':'0111','name':'高新区'},{'id':'0112','name':'蜀山区'}]},
		{'pid':'012','names':[{'id':'0121','name':'金安区'},{'id':'0122','name':'裕安区'}]},
		{'pid':'021','names':[{'id':'0211','name':'开福区'},{'id':'0212','name':'天心区'}]},
		{'pid':'022','names':[{'id':'0221','name':'武陵区'},{'id':'0222','name':'鼎城区'}]},
		];

		var regN0=/^[\u2E80-\u9FFF]+$/g;
		var regN1=/^[a-zA-Z]+$/g;
		var regY=/^\w+@(\w+)[\.][a-z]{1,3}$/;
		var name=false;
		var youx=false;


		//导航 
	$('.nav>li').each(function(index,obj){
		$(obj).mouseover(function(){

			$(this).children('ul').css({'visibility':'visible','transform':'scale(1.1)'}).stop().animate({'opacity':'1'},500);
		});
		$(obj).mouseout(function(){
			$(this).children('ul').stop().css({'transform':'scale(0.4)'}).animate({'opacity':'0'},500,function(){$(this).children('ul').css('visibility', 'hidden')});
		});
	});

///表单
	$('input').each(function(index,obj){
		$(obj).focus(function(){
			$('.ts').eq(index).css('visibility','visible').siblings('.ts').css('visibility','hidden');
			$('.ets').eq(index).css('visibility','hidden');
			$('.tts').eq(index).css('visibility','hidden');
		});
		//匹配用户名 邮箱
		$(obj).blur(function(){
			var meg0=$(this).val();
			console.log(meg0);
			if(index==0){
				if(regN0.test(meg0)||regN1.test(meg0)){
					name=true;
				}else{
					name=false;
					$('.ets').eq(index).css('visibility','visible');
				};
			}else if (index==1) {
				if(regY.test(meg0)){
					youx=true;
				}else{
					youx=false;
					$('.ets').eq(index).css('visibility','visible');
				};
			}		
		});
		
	});	
	$('form').submit(function(){
		$('.ts').css('visibility','hidden');
		$('input').each(function(index,obj){
			if($(obj).attr('placeholder')){
				$('tts').eq(index).css('visibility','visible');
				return false;
			}
		});
		if(name!=true){
			if($(''))
			$('.ets').eq(0).css('visibility','visible');
			return false;
		}
		else if(youx!=true){
			$('.ets').eq(1).css('visibility','visible');
			return false;
		}else{
			$('.cgts').css('display','block').animate({'opacity':'1'},500,function(){
				$('.cgts').animate({'opacity':'0'},700,function(){
					$('.cgts').css('display','none');
				});
			});
			return true;
		};
	});


	$(window).keydown(function(event){
		
		if(event.keyCode==13){
			$('button').click();
		}


	});

	//遍历三级联动
	$(pro).each(function(index,obj){
		$('#pro').append('<option value="'+obj.id+'">'+obj.name+'</option>');
	});
	$('#pro').change(function(){
		$('input').eq(3).val($("#pro option:selected").text());
		$('#city')[0].length=1;
		$('#area')[0].length=1;
		var proval=$(this).val();
		$(city).each(function(index,obj){
			if(proval==obj.pid){
				$(obj.names).each(function(index,obj){
					$('#city').append('<option value="'+obj.id+'">'+obj.name+'</option>');
				});
			};
		});
	});

	$('#city').change(function(){
		$('input').eq(3).val($("#pro option:selected").text()+'.'+$("#city option:selected").text());
		$('#area')[0].length=1;
		var procity=$(this).val();
		$(area).each(function(index,obj){
			if(procity==obj.pid){
				$(obj.names).each(function(index,obj){
					$('#area').append('<option value="'+obj.id+'">'+obj.name+'</option>');
				});
			};
		});
	});
	$('#area').change(function(){
		$('input').eq(3).val($("#pro option:selected").text()+'.'+$("#city option:selected").text()+'.'+$("#area option:selected").text());
		
	});

	$('.form').children('.fu-6').animate({'top':'0','opacity':'1'},1000);



	$(document).scroll(function(){
		if($(document).scrollTop()>=$('.way').offset().top-400){
		 	$('.way').children('.fu-5:eq(0)').animate({'left':'0','opacity':'1'},300,function(){
		 	$('.way').children('.fu-5:eq(1)').animate({'left':'0','opacity':'1'},300,function(){
		 	$('.way').children('.fu-5:eq(2)').animate({'left':'0','opacity':'1'},300,function(){
		 	$('.way').children('.fu-5:eq(3)').animate({'left':'0','opacity':'1'},300);	
		 	});	
		 	});
		 	});
		};
		if($(document).scrollTop()>=$('.ythink').offset().top-400){
		 	$('.ythink').children('.fu-1:eq(0)').animate({'top':'0','opacity':'1'},400,function(){
		 	$('.ythink').children('.fu-1:eq(1)').animate({'top':'0','opacity':'1'},400,function(){
		 	$('.ythink').children('.fu-1:eq(2)').animate({'top':'0','opacity':'1'},400);	
		 	});
		 	});
		};
	});










});

console.log(navigator.appVersion);