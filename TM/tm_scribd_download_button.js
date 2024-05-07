// ==UserScript==
// @name         Scribd true download button
// @namespace    http://tampermonkey.net/
// @version      2024-05-07
// @description  try to take over the world!
// @author       Francoo86
// @match        https://es.scribd.com/document/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=scribd.com
// @grant        none
// ==/UserScript==

function addDownloadButton(){
    const elem = document.getElementsByClassName("download_btn_container");
    if(elem === undefined || elem.length < 1) {
        return;
    }

    const firstChild = elem[0];
    const button = firstChild.lastChild;
    const clone = button.cloneNode(true);

    firstChild.appendChild(clone);
    clone.style.backgroundColor = "#33dd2b";

    //send form data to download page
    clone.onclick = function(){
        const form = document.createElement("form");
        form.method = "POST";
        form.action = "https://scribd.vpdfs.com/check/";
        form.style.display = "none";

        const input = document.createElement("input");
        input.type = "hidden";
        input.name = "url";
        input.id = "url";
        input.value = document.URL;

        form.appendChild(input);
        document.body.appendChild(form);
        form.submit();
    };

    button.remove();
}

(function() {
    'use strict';
    addDownloadButton();

    // Your code here...
})();
