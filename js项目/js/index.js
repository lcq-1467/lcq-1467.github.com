window.onload=function(){
	var nav_s=my('.nav')[0].getElementsByClassName('n');
	for(var i=0;i<nav_s.length;i++){
		nav_s[i].onmouseover=function(){
			if(this.getElementsByTagName('ul')[0]){
				css(this.getElementsByTagName('ul')[0],{'transform':'scale(1.2)','visibility': 'visible','opacity': '1'});	
			}
					
		}
		nav_s[i].onmouseout=function(){
			if(this.getElementsByTagName('ul')[0]){
				css(this.getElementsByTagName('ul')[0],{'transform':'scale(0)','visibility': 'hidden','opacity': '0'});			

			}
		}
	}


	var num=0;
	var tt=setInterval(hm,3000);
	var span=my('.span')[0].getElementsByTagName('span');
	hmain();
	function hm(){
		hmain();
	};
	function hmain(){
		num++;
		if(num>span.length-1){
			num=0;
		}
		for(var i=0;i<span.length;i++){
			css(span[i],{'display':'none','top':'-5px'});			
		}
		css(span[num],{'display':'block'});
		move(span[num],{'top':10},30,function(){
				move(span[num],{'top':0},20);
			});
	}

	for(var i=0;i<my('.img-p').length;i++){
		my('.img-p')[i].index=i;
		css(my('.img-p')[i],{'background':' url(./images/portfolio/item-'+(i+1)+'.jpg) no-repeat center center',"background-size":'108%'});
		my('.img-p')[i].innerHTML='<div class="zz"><div class="demo"><span>Demo</span><span>Detailes</span></div></div>';
		my('.img-p')[i].onmouseover=function(){
			css(this.children[0],{'visibility':'visible'});
			console.log(1);
			css(my('.demo')[this.index].children[0],{'transform':'scale(1)'});
		};
		my('.img-p')[i].onmouseout=function(){
			css(this.children[0],{'visibility':'hidden'});
			css(my('.demo')[this.index].children[0],{'transform':'scale(0)'});
		};
	}


	for(var i=0;i<my('.demo').length;i++){
		my('.demo')[i].index=i;		
		my('.demo')[i].children[0].onclick=function(){
			lunbo(this.parentNode.index);
			css(my('.lunbo')[0],{'display':'block'});
		};
	};
	//轮播
	var lunnum=0;
	lunbo(0);
	function lunbo(inum){
		css(my('.lunbo-main')[0],{'background':'url(./images/portfolio/item-'+(inum+1)+'.jpg) no-repeat center center',"background-size":'cover'});
	};
		my('.lunbo-main')[0].children[1].onclick=function(){
			lunnum++;
			if(lunnum==my('.zz').length){
				lunnum=0;
			};
			lunbo(lunnum);
		};
		my('.lunbo-main')[0].children[2].onclick=function(){
			lunnum--;
			if(lunnum==-1){
				lunnum=my('.zz').length-1;	
			};
			lunbo(lunnum);
		};
		my('.lunbo-main')[0].children[0].onclick=function(){
			css(my('.lunbo')[0],{'display':'none'});			
		};



	var hh=my('header');
	if(scroll().top>=hh[0].offsetTop){
		var hchildren=hh[0].getElementsByClassName('fu-1');
		move(hchildren[0],{'top':0,'opacity':10},50,function(){
		move(hchildren[1],{'top':0,'opacity':10},40,function(){
		move(hchildren[2],{'top':0,'opacity':10},30,function(){
		move(hchildren[3],{'top':0,'opacity':10},30);
		});	
		});	
		});
		 	
	};
	document.onscroll=function(){
		var ss=my('section');
		var schildren=ss[0].children;
		if(scroll().top>=ss[0].offsetTop/2){
			move(schildren[0],{'left':0,'opacity':10},50);
			move(schildren[1],{'right':0,'opacity':10},50);	
		};
		var prochildren=my('.pro-h')[0].children;
		if(scroll().top>=my('.pro-h')[0].offsetTop/2){
			move(prochildren[0],{'top':0,'opacity':10},50,function(){
			move(prochildren[1],{'top':0,'opacity':10},50);
			});
			move(my('.pimg')[0],{'left':0,'opacity':10},30,function(){
			move(my('.pimg')[1],{'left':0,'opacity':10},30,function(){
			move(my('.pimg')[2],{'left':0,'opacity':10},30,function(){
			move(my('.pimg')[3],{'left':0,'opacity':10},30,function(){
			move(my('.pimg')[4],{'left':0,'opacity':10},30,function(){
			move(my('.pimg')[5],{'left':0,'opacity':10},30);
			});	
			});
			});	
			});	
			});	
		};
		var offer=my('.offer-h')[0].children;
		var icon=my('.icon');
		if(scroll().top>=my('.offer')[0].offsetTop/2){
			move(offer[0],{'top':0,'opacity':10},50,function(){
			move(offer[1],{'top':0,'opacity':10},50);
			});
			move(icon[0],{'left':0,'opacity':10},30,function(){
			move(icon[1],{'left':0,'opacity':10},30,function(){
			move(icon[2],{'left':0,'opacity':10},30,function(){
			move(icon[3],{'left':0,'opacity':10},30,function(){
			move(icon[4],{'left':0,'opacity':10},30,function(){
			move(icon[5],{'left':0,'opacity':10},30);
			});	
			});
			});	
			});	
			});	
		};
		var ythink=my('.ythink')[0].children;
		if(scroll().top>=my('.ythink')[0].offsetTop-300){
			move(ythink[0],{'top':0,'opacity':10},30,function(){
			move(ythink[1],{'top':0,'opacity':10},30,function(){
			move(ythink[2],{'top':0,'opacity':10},30);	
			});	
			});	
		};


	};





};