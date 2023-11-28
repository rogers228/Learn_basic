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

(function() {
    'use strict';

    // Your code here...
    setTimeout(main, 1000) // 1秒後執行
})();

function main(){
    console.log('momkey: run now.');
    removeById();
    removeByClass();
    scroll_y(180);
    console.log('monkey: run is finished.');
}

function removeById(){
    const arr_id = [
        'AsideStream',
        'module-moreStories',
        'sda-LDRB-iframe',
        'module-mktIframe',
        'community-bar-container',
        'module-relatedStories',
        'ybar-inner-wrap',
        'Footer',
    ];

    for (let id of arr_id){
        let div = document.getElementById(id);
        if (div) {
            div.parentNode.removeChild(div); // 移除
            console.log(`monkey: success! id:${id} is remove.`);
        }
        else {
            console.log(`monkey: 找不到id:'${id}'`);
        }
    }
}

function removeByClass(){
    const arr_class = [
        'caas-logo',
        'caas-share-section',
    ];
    for (let cls of arr_class){
        let divs = document.getElementsByClassName(cls);
        if (divs.length > 0){
            for (var i = 0; i < divs.length; i++) {
                divs[i].parentNode.removeChild(divs[i]);
            }
            console.log(`monkey: success! class:${cls} is remove.`);
        }
        else{
            console.log(`monkey: 找不到class:'${cls}'`);
        }
    }
}

function scroll_y(pos){
    window.scrollTo(0, window.scrollY + pos);
}