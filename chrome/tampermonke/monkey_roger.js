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

const elements = [
    '#header.top-branding-area',
    '.web-allarea.hidden-print',
    '.rightFloat.hidden-print',
    '#bar_ad.meta_ad',
    '.container-fluid.maintop-area.hidden-print',
    '.news-title-area.news-title-area_fullBold',
    '.VoteList',
    '.newsBreadcrumb',
    '.gliaplayer-container.styles-module_container_xuywD',
    '#_popIn_recommend',
    '.col-lg-3.col-md-4.hidden-sm.hidden-xs.hidden-print.contRight',
    '.content.page_title_area.hidden-print',
    '.ai_area.hidden-print',
    '#gad_setn_innity_oop_1x1',
    '.pagination-area',
    '.reporter',
    '.page-tip',
    '.alert-message.alert-message-warning.hidden-print',
    '.hidden-print.bottom-buffer',
    'footer.footer-area',
    '.privacy-area.animated.fadeInDown',
    '.page-keyword.hidden-print',
];

(function() {
    'use strict';
    setTimeout(main, 1000) // 1秒後執行
})();

function main(){
    console.log('momkey: run now.');
    remove_element(elements);
    // scroll_y(180);
    console.log('monkey: run is finished.');
}


function remove_element(arr_element){
    for (let el of arr_element){
        let divs = document.querySelectorAll(el);
        if (divs.length > 0){
            for (var i = 0; i < divs.length; i++) {
                divs[i].parentNode.removeChild(divs[i]);
            }
            console.log(`monkey: success! element:${el} is remove.`);
        }
        else{
            console.log(`monkey: 找不到element:'${el}'`);
        }
    }
}

function scroll_y(pos){
    window.scrollTo(0, window.scrollY + pos);
}