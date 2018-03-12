
(function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery

$(document).ready(function() {
    $('a[href*=#]').each(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
      && location.hostname == this.hostname
      && this.hash.replace(/#/,'') ) {
        var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
        var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
         if ($target) {
           var targetOffset = $target.offset().top;
  
  
           $(this).click(function() {
              $("#nav li a").removeClass("active");
              $(this).addClass('active');
             $('html, body').animate({scrollTop: targetOffset}, 1000);
             return false;
           });
        }
      }
    });
  
  });

  $(document).ready(function() {

    $('body').smoothScroll({
      delegateSelector: 'ul.nav-list a'
    });

    $('h2.subnav a').click(function(event) {
      event.preventDefault();
      var link = this;
      $.smoothScroll({
        scrollTarget: link.hash
      });
    });

    $('#change-speed').bind('click', function() {
      var $p1 = $('ul.mainnav a').first();
      var p1Opts = $p1.smoothScroll('options') || {};

      p1Opts.speed = p1Opts.speed === 1400 ? 400 : 1400;
      $p1.smoothScroll('options', p1Opts);
    });

    $('button.scrollsomething').bind('click', function(event) {
      event.preventDefault();
      $.smoothScroll({
        scrollElement: $('div.scrollme'),
        scrollTarget: '#findme'
      });
    });
    $('button.scrollhorz').bind('click', function(event) {
      event.preventDefault();
      $.smoothScroll({
        direction: 'left',
        scrollElement: $('div.scrollme'),
        scrollTarget: '.horiz'
      });

    });

    $('#scroll-relative-plus').on('click', function() {
      var wHeight = $(window).height();
      $.smoothScroll('+=100px');
    });
    $('#scroll-relative-minus').on('click', function() {
      $.smoothScroll('-=100px');
    });
    $('.page-scroll').on('click', function() {
      var wHeight = $(window).height();
      var wWidth = $(window).width();
      var rel = $(this).hasClass('down') ? '+=' : '-=';

      if (wWidth <= 560) {
        wHeight -= 130;
      }

      $.smoothScroll(rel + wHeight);
    });
  });
