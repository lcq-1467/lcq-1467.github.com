	
	//获取标签
		function my(tag){
			//方法一
			var reg=/^[a-zA-Z]/g;
			if(reg.test(tag)){
			return document.getElementsByTagName(tag);
			}else{
				var jc=tag.slice(0,1);
				var xzq=tag.slice(1);
				switch(jc){
					case '.':
					return document.getElementsByClassName(xzq);
					break;
					case '#':
					return document.getElementsByClassName(xzq);
					break;
				}
			}
	

			//方法二
			/*this.id = function(idname){
               return document.getElementById(idname);
			}
			this.class = function(classname){
				
			}
			this.name = function(nname){
				return document.getElementsByName(nname);
			}
			this.tag= function(tagname){
				return document.getElementsByTagName(tagname)[num];
			}
			this.children = function(classname,num,tagname){
                var temp = document.getElementsByClassName(classname)[num];
                if(tagname){
                	return temp.getElementsByTagName(tagname);
                }else{
                	return temp.children;
                }                
			}
			this.parent = function(sonname,num){
               var tmp = document.getElementsByTagName(sonname)[num];
               return tmp.parentNode;
			}*/
		};

		
		//获取属性;
		function style(obj,attr){
			if(obj.currentStyle){
				return obj.currentStyle[attr];
			}else{
				return getComputedStyle(obj,false)[attr];
			}
		};
		
		//动画函数
		function move(obj,json,clock,fn){
			clearInterval(obj.timer);
			obj.timer=setInterval(function(){
				var flag=true;
			 for(var attr in json){
			 		var istyle=0;
			 	//检测是否是透明属性	
				if(attr=='opacity'){
					istyle=parseFloat(style(obj,attr))*10;
				}else{
					istyle=parseInt(style(obj,attr));
				}
				//设定步长;
				  //缓冲
				/*var speed=(json[attr]-istyle)/8;
				speed=speed>0?Math.ceil(speed):Math.floor(speed);*/
				 //匀速
				 var speed;
				 if(json[attr]<istyle){
				 	speed=-1;
				 }else{
				 	speed=1;
				 }

				//标记检测
				if(json[attr]!=istyle){
					flag=false;
				}

				if(attr=='opacity'){
					obj.style[attr]=(istyle+speed)/10;
				}else{
					obj.style[attr]=istyle+speed+'px';
				}
				
				//检测是否停止计时器
				if(flag){
					clearInterval(obj.timer);
					if(fn){
						fn();
					}	
				}
			 };
				
			},clock);
		}





		//css函数
		function css(obj,json){
			for(var attr in json){
				obj.style[attr]=json[attr];
			}
		};


function scroll(){
	if(window.pageXOffset != null){  //判断是否是IE9以下;
		return{
		left:window.pageXOffset,
		top:window.pageYOffset
		}
	}else if(document.compatMode == "CSS1Compat"){// 声明的了 DTD
	// 检测是不是怪异模式的浏览器 -- 就是没有 声明<!DOCTYPE html>
		return{
		left:document.documentElement.scrollLeft,
		top:document.documentElement.scrollTop
		}
	}
	return{
	left:document.body.scrollLeft,
	top:document.body.scrollTop
	}
}





function  move_main(){
				
}