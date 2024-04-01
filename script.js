console.log('111');
// Worksセクションの画像にカーソルが当たった時
$(function(){
  $('#image').on('mouseover',function(){
    console.log('111');
    $(this).animate({
      opacity:1.0,
    });
  });
});

$('#image').mouseover(function() {

  console.log('マウスオーバーしました！');

});



// カルーセル
$('.carousel').slick({
  autoplay: true,
  dots: true,
  infinite: true,
  autoplaySpeed: 5000,
  arrows: false,
});

