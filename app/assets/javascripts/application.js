// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//
// BEGIN CORE PLUGINS (REQUIRED FOR ALL PAGES)
//= require ./global/plugins/jquery-migrate.min.js
//= require ./global/plugins/bootstrap/js/bootstrap.min.js
//= require ./frontend/layout/scripts/back-to-top.js
//= require ./global/plugins/jquery-slimscroll/jquery.slimscroll.min.js
// END CORE PLUGINS
// BEGIN PAGE LEVEL JAVASCRIPTS (REQUIRED ONLY FOR CURRENT PAGE)
//= require ./global/plugins/fancybox/source/jquery.fancybox.pack.js
//= require ./global/plugins/carousel-owl-carousel/owl-carousel/owl.carousel.min.js
//= require ./global/plugins/zoom/jquery.zoom.min.js
//= require ./global/plugins/bootstrap-touchspin/bootstrap.touchspin.js
//
// BEGIN LayerSlider
//= require ./global/plugins/slider-layer-slider/js/greensock.js
//= require ./global/plugins/slider-layer-slider/js/layerslider.transitions.js
//= require ./global/plugins/slider-layer-slider/js/layerslider.kreaturamedia.jquery.js
//= require ./frontend/pages/scripts/layerslider-init.js
// END LayerSlider
//
//= require ./frontend/layout/scripts/layout.js
// END PAGE LEVEL JAVASCRIPTS
//= require_tree .