$( document ).ready(function() {
  "use strict";

  var TURQUOISE = "#53DED3";
  var PURPLE = "#b460ec";
  var RED = "#ff0027";
  var BRIGHT_PINK = "#ff377e";
  var YELLOW = "#cfec60";
  var GREEN = "#109876"
  var LIGHT_BLUE = "#007BFF";
  var WHITE = "#F2F5FB";

  var COLOURS = [
    TURQUOISE,
    BRIGHT_PINK,
    GREEN,
    PURPLE,
    YELLOW,
    RED,
  ];

  (function animateLogo() {
    var main_logo_elem = $("#main-logo");
    var colourful_elem = $("#colourful");

    var id = setInterval(changeColor, 500);
    var i = -1;
    var length = COLOURS.length;

    function changeColor() {
      if (i < 0) {
        i++
      } else if (i >= length) {
        main_logo_elem.css( { "background-color": "", 'border-color': "" } )
        colourful_elem.css( { "transition": "2s", 'opacity': 1, "color": LIGHT_BLUE } )

        clearInterval(id);

        var title_elem = $("#title");
        title_elem.css( { "transition": "3s", 'opacity': 1, "color": "black" } )

      } else {
        main_logo_elem.css( { "background-color": COLOURS[i] } )
        colourful_elem.css( { "color": COLOURS[i] } )
        i++;
      }
    }
  })();
})
;
