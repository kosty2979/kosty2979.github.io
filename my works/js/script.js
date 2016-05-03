$(function(){

	 $(".fancybox-effects-c").fancybox({
				wrapCSS    : 'fancybox-custom',
				closeClick : true,

				openEffect : 'none',

				helpers : {
					title : {
						type : 'inside'
					},
					overlay : {
						css : {
							'background' : 'rgba(238,238,238,0.85)'
						}
					}
				}
			}),
	$(document).on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler22);
    function clickHandler22 () {
    		window.scrollTo(0,0); 
    };
$("#butt1").on("click", function(){
	window.scrollTo(0,0); 
	$(".wrapper").hide();
	$("#butt1").hide();
	$("#butt2").show();
	$("body").removeClass();
	$("body").addClass("ww");
	$(".nav").remove();
	$(".tab-content").remove();

	lesson = lessonHtml;
	var tmpl=$("#template").html();
	var html = _.template(tmpl)(lesson);
	 $(".tabs-left").append (html);

	 var $list = $(".nav-tabs").children("li").first();
	
	 $list.addClass("active");

	 var $div = $(".tab-content").children("div").first();

	 $div.addClass("active in");
	 $("a.fancyimage").fancybox(); 

}),
$("#butt2").on("click", function(){
	window.scrollTo(0,0); 
	$(".wrapper").hide();
	$("#butt2").hide();
	$("#butt1").show();
	$("body").removeClass();
	$("body").addClass("ww2");
	$(".nav").remove();
	$(".tab-content").remove();
	lesson = javaScript;
	var tmpl=$("#template").html()
	var html = _.template(tmpl)(lesson);
	 $(".tabs-left").append (html);

	 var $list = $(".nav-tabs").children("li").first();
	
	 $list.addClass("active");

	 var $div = $(".tab-content").children("div").first();

	 $div.addClass("active in");
	 $("a.fancyimage").fancybox(); 

}),
$(".nav>li>a").on("click", function(){
	alert("bggg")
	/*elementClick = $(this).atr("href");
	dest = $(elementClick).offsrt().top;
	$("body").animate( {scrollTop: dest}, 1000)*/

})

}) /*jekyll*/
