// ==UserScript==
// @name         New Userscript
// @namespace    https://news.ebc.net.tw
// @version      2023-12-20
// @description  try to take over the world!
// @author       You
// @match        https://news.ebc.net.tw/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=net.tw
// @grant        none
// ==/UserScript==

const option = {
    output: false,
    disable: false,
    delay: 0.5,
    elements_by_selector: [ // 標準css選擇器
        '#sticky_navigation',
        '.dfp_ad',
    ],
    elements_by_id_start:[ // id開頭
        'div-onead-draft',
        'dablewidget',
    ],
    elements_by_content:[ // 內容
        '【往下看更多】',
    ],
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
        for (let content of option.elements_by_content){
            for (let tag of ['a', 'span', 'div']){
                let divs = getElementsByText(content, tag)
                remove_element(content, divs);
            }
        }
    }
}

function getElementsByText(str, tag = 'a') {
    return Array.prototype.slice.call(document.getElementsByTagName(tag)).filter(el => el.textContent.trim() === str.trim());
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