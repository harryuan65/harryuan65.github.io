$(document).ready(function(){
    $(".a-slider").on('click',function(){
        var id = $(this).attr('id').split('-')[2];
        $("#current-slide").html(id);

        $(".wrap-img").animate({
          left:`${(-(parseInt(id)-1))*600}`
        },500,function(){
        })
      })
})