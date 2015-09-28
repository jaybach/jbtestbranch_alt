$(document).ready(function() {
  // console.log('ready')
  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
  $(window).scroll(function(){
    // console.log('scroll');
    // $('#side_bar').css("position: fixed;");
    $('#side_bar').css({position: $(this).scrollTop()>100 ? "fixed" : "initial"});
  });
});
