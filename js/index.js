(function(){
var now = { row:1, col:1 }, last = { row:0, col:0};
const towards = { up:1, right:2, down:3, left:4};
var isAnimating = false;

//document.addEventListener('touchmove',function(event){
//	event.preventDefault(); },false);

	var loadImg = function(pics, callback){
		var index = 0;
		var len = pics.length;
		var img = new Image();
		var flag = false;
		var progress = function(w){
			$('.loading-progress').stop().animate({width:w});
			$(".loading_wrap b").text(w);
		};
		var load = function(){
			img.src = pics[index];
			img.onload = function() {
				progress(Math.floor(((index + 1) / len) * 100) + "%");
				index ++ ;
				if (index < len) {
					load();
				}else{
					callback()
				}
			};
			return img;
		};
		if(len > 0){
			load();
		}else{
			progress("100%");
		}
		return {
			pics: pics,
			load: load,
			progress: progress
		};
	};
	$(function(){
		var pics=new Array();
		pics = ['img/bg.jpg','img/btn1.png','img/wjjti.png','img/btn2.png','img/btn3.png','img/btn4.png','img/btn5.png','img/btn6.png','img/btn7.png'
			,'img/btn8.png','img/btn9.png','img/foot1.png','img/foot2.png','img/foot3.png','img/foothua.png'
			,'img/fxy.png','img/lmwz.png','img/logo.png','img/nfg.png','img/t1.jpg','img/wycj.png'
			,'img/t4.png','img/wz1.png','img/wzjti.png'
			,'img/yun1.png','img/yun2.png','img/zjbg.png','img/zjjl.png','img/yjjti.png','img/jplb.png'];
		loadImg(pics, function(){
			setTimeout(function(){
				$(".page-0-1").hide();
				now.row =1;
				pageMove(towards.up);
			}, 1200);
		});
	});
$(".btn1").click( function () {
	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	now.row = 2;
	pageMove(towards.up);

});
	$(".btn3").click( function () {
		if (isAnimating) return;
		last.row = now.row;
		last.col = now.col;
		now.row = 6;
		pageMove(towards.up);
	});
	$(".btn2").click( function () {
		if (isAnimating) return;
		last.row = now.row;
		last.col = now.col;
		now.row = 4;
		pageMove(towards.up);

	});
$(".btn4").click( function () {
	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	now.row = 3;
	pageMove(towards.up);

});
	$(".btn5").click( function () {
		if (isAnimating) return;
		last.row = now.row;
		last.col = now.col;
		now.row = 4;
		pageMove(towards.up);

	});



	$(".btn6").click( function () {
		if (isAnimating) return;
		last.row = now.row;
		last.col = now.col;
		now.row =5;
		pageMove(towards.up);

	});

$(".btn7").click( function () {
	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	now.row =5;
	pageMove(towards.up);

});
	$(".btn9").click( function () {
		if (isAnimating) return;
		last.row = now.row;
		last.col = now.col;
		now.row =4;
		pageMove(towards.down);

	});
	$(".btn11").click( function () {
		if (isAnimating) return;
		last.row = now.row;
		last.col = now.col;
		now.row =1;
		pageMove(towards.down);

	});

//$(".tj").click( function () {
//	if (isAnimating) return;
//	last.row = now.row;
//	last.col = now.col;
//	now.row =6;
//	pageMove(towards.up);
//
//});
//$(document).swipeUp(function(){
//	if (isAnimating) return;
//	last.row = now.row;
//	last.col = now.col;
//	if (last.row != 5) { now.row = last.row+1; now.col = 1; pageMove(towards.up);}
//})

//$(document).swipeDown(function(){
//	if (isAnimating) return;
//	last.row = now.row;
//	last.col = now.col;
//	if (last.row!=1) { now.row = last.row-1; now.col = 1; pageMove(towards.down);}
//})
function pageMove(tw){
	var lastPage = ".page-"+last.row+"-"+last.col,
		nowPage = ".page-"+now.row+"-"+now.col;
	
	switch(tw) {
		case towards.up:
			outClass = 'pt-page-moveToTop';
			inClass = 'pt-page-moveFromBottom';
			break;
		case towards.right:
			outClass = 'pt-page-moveToRight';
			inClass = 'pt-page-moveFromLeft';
			break;
		case towards.down:
			outClass = 'pt-page-moveToBottom';
			inClass = 'pt-page-moveFromTop';
			break;
		case towards.left:
			outClass = 'pt-page-moveToLeft';
			inClass = 'pt-page-moveFromRight';
			break;
	}
	isAnimating = true;
	$(nowPage).removeClass("hide");
	
	$(lastPage).addClass(outClass);
	$(nowPage).addClass(inClass);
	
	setTimeout(function(){
		$(lastPage).removeClass('page-current');
		$(lastPage).removeClass(outClass);
		$(lastPage).addClass("hide");
		$(lastPage).find("img").addClass("hide");
		
		$(nowPage).addClass('page-current');
		$(nowPage).removeClass(inClass);
		$(nowPage).find("img").removeClass("hide");
		
		isAnimating = false;
	},1000);
}

})();