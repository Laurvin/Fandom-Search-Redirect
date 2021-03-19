// ==UserScript==
// @name Fandom Search Redirect
// @namespace Fandom Search Redirect
// @author Laurvin
// @description Redirects the search to the correct page if there is a complete match
// @version 1.0
// @icon http://i.imgur.com/XYzKXzK.png
// @match https://*.fandom.com/wiki/Special:Search?search=*
// @grant none
// @run-at document-idle
// ==/UserScript==

(function() {
    'use strict';

    var Searched = document.getElementsByClassName("unified-search__input__query");

    var SearchedText = Searched[0].value;

    var Results = document.getElementsByClassName("unified-search__result__title");

    var ResultText = Results[0].innerText;
    var ResultURL = Results[0].href;

    var Compared = SearchedText.localeCompare(ResultText, 'en', { sensitivity: 'base' })

    if (Compared == 0)
    {
        window.location.replace(ResultURL);
    }
})();
