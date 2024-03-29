// ==UserScript==
// @name Fandom Search Redirect
// @namespace Fandom Search Redirect
// @author Laurvin
// @description Redirects the search to the correct page if there is a complete match
// @version 1.1
// @icon http://i.imgur.com/XYzKXzK.png
// @updateURL https://github.com/Laurvin/Fandom-Search-Redirect/raw/main/Fandom_Search_Redirect.user.js
// @match https://*.fandom.com/wiki/Special:Search?*
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
