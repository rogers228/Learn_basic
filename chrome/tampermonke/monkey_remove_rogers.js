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

const option = {
    output: false,
    disable: false,
    delay: 0.5,
    elements_by_selector: [
        'AsideStream',
        'module-moreStories',
        'sda-LDRB-iframe',
        'module-mktIframe',
        'community-bar-container',
        'module-relatedStories',
        'ybar-inner-wrap',
        'Footer',
    ],
    elements_by_id_start:[
    ]
}
let scrollTimeout;
function main(){
    'use strict'; //嚴格模式
    setTimeout(find_element, option.delay*1000);

    // scroll to remove
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(find_element, option.delay*1000);
    });
}

function find_element(){
    if (!option.disable){
        for (let selector of option.elements_by_selector){
            let divs = document.querySelectorAll(selector);
            remove_element(selector, divs);
        }
        for (let idstart of option.elements_by_id_start){
            let divs = document.querySelectorAll(`div[id^="${idstart}"]`);
            remove_element(idstart, divs);
        }
    }
}

function remove_element(name, elements){
    if (elements.length > 0){
        for (var i = 0; i < elements.length; i++) {
            elements[i].parentNode.removeChild(elements[i]);
        }
        if (option.output) console.log(`monkey: success! element:${name} is remove.`);
    }
    else{
        if (option.output) console.log(`monkey: element:'${name}' is not found`);
    }
}

main();