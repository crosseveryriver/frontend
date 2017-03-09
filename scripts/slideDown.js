$(function(){
    $('.nav_li').click(function(){
    	var siblings = $(this).siblings().filter('.nav_li');
    	for (var i = 0; i < siblings.length; i++) {
    		var siblings_sub_list = $(siblings[i]).children().eq(1);
    		$(siblings_sub_list).slideUp();
    	}
    	var sub_list = $(this).children().eq(1);
    	$(sub_list).toggle();

    });
});