$(document).ready (function(){

  if($(window).width() <=768) {
    $('nav ul.nav li a.nav-link').attr({"data-toggle":"collapse", "data-target": ".navbar-collapse"});
    $('a#nav-logo-img').remove();
    $('#logo-div').append('<a ui-sref="home"><img src="images/R&W-logo.png" alt="R&W logo" class="center-block" id="logo-img"></a>');
  }

});
