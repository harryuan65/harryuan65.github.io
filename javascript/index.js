var section_height = 900;
$(document).ready(function(){
  $('body').animate({
    scrollTop: 1
  },0,function(){
    // console.log("finished");
  });

  $(".anchor").click(function(event){
    event.preventDefault();
    var anchor = $(this).attr("href");
    $("body").animate({
      scrollTop: $(anchor).offset().top
    },'slow');
  })

  $('#test').on('click',function(){
  });

  $(document).on('scroll',function(){
    var top = $(this).scrollTop();
    var active_id = Math.floor((top+350)/section_height)+1;
    var active_section = $(`#section-${active_id}`);
    if(!active_section.hasClass('show')){
      // console.log(`Activated  in ${top+350}`)
      $("section").removeClass("show");
      active_section.addClass("show");
    }

    console.log(`Current section: ${Math.floor((top+350)/section_height)+1}`)
  })

    // $('#current-slide').html("1");
    // $('#total-slides').html($(".pic").length);
    // $(".a-slider").on('click',function(){
    //   var id = $(this).attr('id').split('-')[2];
    //   $("#current-slide").html(id);

    //   $(".wrap-img").animate({
    //     left:`${(-(parseInt(id)-1))*600}`
    //   },500,function(){
    //   })
    // })
  })
