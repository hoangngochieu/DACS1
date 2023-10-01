//nút xem thêm thông tin
$('.view-more-detail-char').click(function(){
    $('.popup-characteristic').show();
    $('.modal-menu-full-screen').show();
});
// nút tắt phần xem thêm thông tin bảng
$('.popup-characteristic .close').click(function(){
    $('.popup-characteristic').hide();
    $('.modal-menu-full-screen').hide();
});



// phần video
function reload_video(link_video){
	var video = '<iframe src="'+ link_video +'"></iframe>';
	$('#one_video_play_area .video_item_inner').html('<iframe src="'+link_video+'?rel=0&autoplay=1" allow="autoplay" width="100%" height="348px" frameborder="0" allowfullscreen="false">');
	$('#one_video_play_area .video_item_inner').removeClass('video_item_inner_has_img');
};
$('#one_video_play_area .video_item_inner_has_img').click(function(){
	var img_video = $(this).find('img');
	var link_video = img_video.attr('link-video');
	//link_video = $('.videosssss').attr('link-video');
	//alert(link_video);
	var video = '<iframe src="'+ link_video +'"></iframe>';
	$(this).html('<iframe allow="autoplay" src="'+link_video+'?rel=0&autoplay=1" allow="autoplay" width="100%" height="348px" frameborder="0" allowfullscreen="false">');
	$(this).removeClass('video_item_inner_has_img');
});
// xem thêm đánh giá chi tiết
toogle_desc();
function toogle_desc(){
	var expandedHeight = $('.box_conten_linfo_inner').height();
	$('#readmore_desc span').click(function(){
		if($(this).hasClass('closed')){
			$(this).removeClass('closed').addClass('opened');
			$('#box_conten_linfo').css('max-height','none');
		}else{
//			$('#box_conten_linfo').animate({max-height:'400px'},3000);
			$('#box_conten_linfo').css('max-height','400px');
			$(this).removeClass('opened').addClass('closed');
		}
		
	})
}

function toogle_desc(){
	var expandedHeight = $('.box_conten_linfo_inner').height();
	$('#readmore_desc span').click(function(){
//			$('#box_conten_linfo').animate({max-height:'400px'},3000);
	$('#box_conten_linfo').css('max-height','none');
	$('#readmore_desc').addClass('hide');
	$('#readany_desc').removeClass('hide');
})

	$('#readany_desc span').click(function(){
//			$('#box_conten_linfo').animate({max-height:'400px'},3000);
	$('#box_conten_linfo').css('max-height','400px');
	$('#readany_desc').addClass('hide');
	$('#readmore_desc').removeClass('hide');

})
$('#readmore_desc3 span').click(function(){
    $('#box_conten_linfo3').css('max-height','none');
    $('#readmore_desc3').addClass('hide');
    $('#readany_desc3').removeClass('hide');
})

$('#readany_desc3 span').click(function(){
    $('#box_conten_linfo3').css('max-height','400px');
    $('#readany_desc3').addClass('hide');
    $('#readmore_desc3').removeClass('hide');
})
}

// đóng mở form
$(".cancel_input").click(function(){
    hideInputRating();
});
function showInputRating(){

	$("#rate_add_form").slideToggle('hide_form');
	$('.bcrt a').attr({'href': 'javascript:hideInputRating()'});
	$('.bcrt a').attr({'class':'close_rate'});
	$('.bcrt a').html('Đánh giá');

}
function hideInputRating(){
	$("#rate_add_form").slideToggle('hide_form');
	$('.bcrt a').attr({'href': 'javascript:showInputRating()'});
	$('.bcrt a').removeClass('close_rate');
	$('.bcrt a').html('Viết đánh giá');

}




const navbarItemOn = document.querySelector('.navbar__item-on');

// Kiểm tra trạng thái đăng nhập sau khi tải xong trang
if (typeof loginSuccessful !== 'undefined' && loginSuccessful) {
  navbarItemOn.classList.add('navbar__item-on-hidden');
}