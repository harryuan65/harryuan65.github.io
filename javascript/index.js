$(document).ready(function(){
  $(".anchor").click(function(event){
    event.preventDefault();
    var anchor = $(this).attr("href");
    console.log(`Scrolling ${anchor}`);
    $(document.body).stop().animate({
      scrollTop: $(anchor).offset().top + 90,
    }, {duration:900, easing:'easeOut'});
  })

    $('#current-slide').html("1");
    $('#total-slides').html($(".pic").length);
    $(".a-slider").on('click',function(){
      var id = $(this).attr('id').split('-')[2];
      $("#current-slide").html(id);

      $(".wrap-img").animate({
        left:`${(-(parseInt(id)-1))*600}`
      },500,function(){
      })
    })
  })