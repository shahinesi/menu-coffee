/**
* Author: Shahin Eskandari
* License: -
*/

(function () {
    "use strict";
    /**
   * Easy selector helper function
   */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    document.addEventListener("DOMContentLoaded", (function () {
        console.log(
            '░██████╗██╗░░██╗░█████╗░██╗░░██╗██╗███╗░░██╗  ███████╗░██████╗██╗░░██╗░█████╗░███╗░░██╗██████╗░░█████╗░██████╗░██╗\n' +
            '██╔════╝██║░░██║██╔══██╗██║░░██║██║████╗░██║  ██╔════╝██╔════╝██║░██╔╝██╔══██╗████╗░██║██╔══██╗██╔══██╗██╔══██╗██║\n' +
            '╚█████╗░███████║███████║███████║██║██╔██╗██║  █████╗░░╚█████╗░█████═╝░███████║██╔██╗██║██║░░██║███████║██████╔╝██║\n' +
            '░╚═══██╗██╔══██║██╔══██║██╔══██║██║██║╚████║  ██╔══╝░░░╚═══██╗██╔═██╗░██╔══██║██║╚████║██║░░██║██╔══██║██╔══██╗██║\n' +
            '██████╔╝██║░░██║██║░░██║██║░░██║██║██║░╚███║  ███████╗██████╔╝██║░╚██╗██║░░██║██║░╚███║██████╔╝██║░░██║██║░░██║██║\n' +
            '╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝╚═╝░░╚══╝  ╚══════╝╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝'),
            console.group("%cWelcome My Friend", "color: #41b883;"),
            console.log('If you in the devtools, so probably you a developer.\n"imshahineskandari@gmail.com" this is my email.\nPlease contact me, This is the best way to support me.'),
            console.groupEnd();
    }));

})();

(function ($) {

})(jQuery); // End of use strict

