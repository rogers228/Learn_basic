// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://tw.news.yahoo.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=yahoo.com
// @grant        none
// ==/UserScript==

// 使用 css selector 尋找元素並移除
const option = {
    output: false,
    disable: false,
    delay: 0.5,
    elements: [
    'your_selector',
    ]
}
const output = option.output; const disable = option.disable; const elements = option.elements; const delay = option.delay;
(function() {
    'use strict'; setTimeout(main, delay*1000);
})();

function main(){
    if (!option.disable) remove_element(option.elements);
}

function remove_element(arr_element){
    for (let el of arr_element){
        let divs = document.querySelectorAll(el);
        if (divs.length > 0){
            for (var i = 0; i < divs.length; i++) {
                divs[i].parentNode.removeChild(divs[i]);
            }
            if (option.output) console.log(`monkey: success! element:${el} is remove.`);
        }
        else{
            if (option.output) console.log(`monkey: element:'${el}' is not found`);
        }
    }
}
