import React from "react";

class Logo extends React.Component {

    logoStyle = {
        width: '4.5vh',
        height: '4.5vh',
        borderRadius: '3px',
        backgroundColor: 'white',
        border: 'solid 4px #181010',
        position: 'relative',
        transition: '0.35s',
        top:'0',
        left: '0',
        // position: 'fixed',
        // zIndex: '99',
        // outline: 'none',
        // height: '0',
        // width: '0',
        // borderTop: '30px solid transparent',
        // borderBottom: '30px solid rgba(0,0,0,0.5)',
        // borderLeft: '15px solid transparent',
        // borderRight: '15px solid transparent'
    };

    updateColor(){
        var TURQUOISE = "#53DED3";
        var PURPLE = "#b460ec";
        var RED = "#ff0027";
        var BRIGHT_PINK = "#ff377e";
        var YELLOW = "#cfec60";
        var GREEN = "#109876";
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
        var id = setInterval(changeColor, 500);
        console.log("click");

        var i = -1;
        var length = COLOURS.length;

        function changeColor() {
            if (i < 0) {
                i++
            } else if (i >= length) {
                this.logoStyle({
                    backgroundColor: "",
                    borderColor: ""
                });

                clearInterval(id);

            } else {
                this.logoStyle({
                    backgroundColor: COLOURS[i]});
                i++;
            }
        }


    }




    render() {
        return (
            <div style={this.logoStyle} onClick={this.updateColor}>
            </div>
        )
    }
}

export default Logo





// $( document ).ready(function() {
//     "use strict";
//
//
//
//     var COLOURS = [
//         TURQUOISE,
//         BRIGHT_PINK,
//         GREEN,
//         PURPLE,
//         YELLOW,
//         RED,
//     ];
//
//     (function animateLogo() {
//         var main_logo_elem = $("#main-logo");
//         var colourful_elem = $("#colourful");
//
//         var id = setInterval(changeColor, 500);
//         var i = -1;
//         var length = COLOURS.length;
//
//         function changeColor() {
//             if (i < 0) {
//                 i++
//             } else if (i >= length) {
//                 main_logo_elem.css( { "background-color": "", 'border-color': "" } )
//                 colourful_elem.css( { "transition": "2s", 'opacity': 1, "color": LIGHT_BLUE } )
//
//                 clearInterval(id);
//
//                 var title_elem = $("#title");
//                 title_elem.css( { "transition": "3s", 'opacity': 1, "color": "black" } )
//
//             } else {
//                 main_logo_elem.css( { "background-color": COLOURS[i] } )
//                 colourful_elem.css( { "color": COLOURS[i] } )
//                 i++;
//             }
//         }
//     })();
// })
// ;
