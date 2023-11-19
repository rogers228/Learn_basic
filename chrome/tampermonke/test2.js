// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://chat.openai.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=openai.com
// @grant        none
// ==/UserScript==

(function(){'use strict'; main();})(); // rSun main now

function main(){
    document.addEventListener('keydown', on_keydown);
}

function on_keydown(event){
    const thiskey = event.key.toLowerCase()
    if (event.ctrlKey && thiskey === 'm') { //Ctrl + M 
        my_format();
    }
}

function my_format(){
    const elements = document.querySelectorAll('div[data-testid]');
    elements.forEach((el) => {
        const val = el.getAttribute('data-testid');
        const startIndex = val.lastIndexOf('-') + 1;
        const number = parseInt(val.substring(startIndex));
        el.style.backgroundColor = ((number%2)===0)?'#efeff5':'#b1b1ce';
    });
}
