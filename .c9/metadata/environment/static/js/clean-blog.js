{"filter":false,"title":"clean-blog.js","tooltip":"/static/js/clean-blog.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":40,"column":32},"action":"insert","lines":["(function($) {","  \"use strict\"; // Start of use strict","","  // Floating label headings for the contact form","  $(\"body\").on(\"input propertychange\", \".floating-label-form-group\", function(e) {","    $(this).toggleClass(\"floating-label-form-group-with-value\", !!$(e.target).val());","  }).on(\"focus\", \".floating-label-form-group\", function() {","    $(this).addClass(\"floating-label-form-group-with-focus\");","  }).on(\"blur\", \".floating-label-form-group\", function() {","    $(this).removeClass(\"floating-label-form-group-with-focus\");","  });","","  // Show the navbar when the page is scrolled up","  var MQL = 992;","","  //primary navigation slide-in effect","  if ($(window).width() > MQL) {","    var headerHeight = $('#mainNav').height();","    $(window).on('scroll', {","        previousTop: 0","      },","      function() {","        var currentTop = $(window).scrollTop();","        //check if user is scrolling up","        if (currentTop < this.previousTop) {","          //if scrolling up...","          if (currentTop > 0 && $('#mainNav').hasClass('is-fixed')) {","            $('#mainNav').addClass('is-visible');","          } else {","            $('#mainNav').removeClass('is-visible is-fixed');","          }","        } else if (currentTop > this.previousTop) {","          //if scrolling down...","          $('#mainNav').removeClass('is-visible');","          if (currentTop > headerHeight && !$('#mainNav').hasClass('is-fixed')) $('#mainNav').addClass('is-fixed');","        }","        this.previousTop = currentTop;","      });","  }","","})(jQuery); // End of use strict"],"id":1}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":14,"column":0},"end":{"row":14,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1575919640744,"hash":"61d0606a02906fa63e57a175de0a12fcbec2ae31"}