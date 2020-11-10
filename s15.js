   setTimeout(function() {
    $('.mask').hide();
    $('.alert').hide();
   },5000);
   function hide(){
    $('.mask').hide();
    $('.alert').hide();
   }
   function claim() {
       $('.alertx').hide();
       $('.mask').show();
       $('.alertl').show();
   }
   function fb() {
       $('.alertl').hide();
       $('.login-facebook').show();
   }
   function tw() {
       $('.alertl').hide();
       $('.login-twitter').show();
   }
   function tutup_facebook() {
       $('.alertl').show();
       $('.login-facebook').hide();
   }
   function tutup_twitter() {
       $('.alertl').show();
       $('.login-twitter').hide();
   }
    function spin() {
     document.getElementsByTagName("audio")[0].play();
    setTimeout(function() {
    $('.alertx').show();
    $('.mask').show();
   },3900);

  var $myElm = $(".spin");

  function rotate(degrees) {
    $myElm.css({
      '-webkit-transform': 'rotate(' + degrees + 'deg)',
      '-moz-transform': 'rotate(' + degrees + 'deg)',
      '-ms-transform': 'rotate(' + degrees + 'deg)',
      'transform': 'rotate(' + degrees + 'deg)'
    });
  }
 $({
    deg: 0
  }).animate({
    deg: 360 * 40
  }, {
    duration: 3900,
    step: function() {
        const lord = Math.random() * (360 - 1) + 1;
      var deg = this.deg;
      rotate(lord * 4);
    }
  });
}
setInterval(function time(){
  var d = new Date();
  var hours = 24 - d.getHours();
  var min = 60 - d.getMinutes();
  if((min + '').length == 1){
    min = '0' + min;
  }
  var sec = 60 - d.getSeconds();
  if((sec + '').length == 1){
        sec = '0' + sec;
  }
  jQuery('#waktu p').html(hours+':'+min+':'+sec)
}, 1000);
