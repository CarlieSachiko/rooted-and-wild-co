// $(window).bind('orientationchange', checkWidth);

// var width = $(window).width(), height = $(window).height();
// function checkWidth() {
//   if (document.documentElement.clientWidth <= 768) {
//     $('a#nav-logo-img').remove();
//     $('#logo-div').append('<a ui-sref="home"><img src="images/R&W-logo.png" alt="R&W logo" class="center-block" id="logo-img"></a>');
//     // location.reload();
//   };
// };

// $( window ).resize(function() {
//   if($(window).width() >=768) {
//     // $('nav ul.nav li a.nav-link').attr({"data-toggle":"collapse", "data-target": ".navbar-collapse"});
//     // $('a#nav-logo-img').remove();
//     // $('#logo-div').append('<a ui-sref="home"><img src="images/R&W-logo.png" alt="R&W logo" class="center-block" id="logo-img"></a>');
//   }
// });
$(document).ready (function(){
  console.log('js loaded');

  // $(function() {
  // var index = $('#index');
  // var backgrounds = new Array(
  // 'url("../images/IMG_0007.jpg")',
  // 'url("../images/IMG_0057.jpg")'
  // );
  // var current = 0;

  // function nextBackground() {
  // index.css(
  // 'background',
  // backgrounds[current = ++current % backgrounds.length]
  // );

  // setTimeout(nextBackground, 10000);
  // }
  // setTimeout(nextBackground, 10000);
  // index.css('background', backgrounds[0]);
  // });

});

// checkWidth();

// $(document).ready(function() {
//     // Optimalisation: Store the references outside the event handler:
//     var $window = $(window);

//     function checkWidth() {
//         var windowsize = $window.width();
//         if (windowsize < 768) {
//           $('#nav-logo-img').remove();
//           $('#logo-div').append('<img src="images/R&W-LogoLarge2.jpg.jpeg" alt="R&W logo" class="center-block" id="logo-img">');
//         } else {
//           $('#logo-div').remove('<img src="images/R&W-LogoLarge2.jpg.jpeg" alt="R&W logo" class="center-block" id="logo-img">');
//           $('li a.mid-nav').append('<li><img src="images/R&W-LogoLarge2.jpg.jpeg" alt="R&W logo" id="nav-logo-img"></li>');
//         }
//     }
//     // Execute on load
//     checkWidth();
//     // Bind event listener
//     $(window).resize(checkWidth);
// });
