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

(function() {
    'use strict';
    window.onload = function() { // 網頁讀取完畢後執行
        main();
    }
    
})();

function main(){
    console.log('test monkey 2')

    // 使用js尋找符合條件的div，這裡以包含 data-testid 屬性的 div 為例
    const divsWithTestId = document.querySelectorAll('div[data-testid]');
    console.log(divsWithTestId);

    if (divsWithTestId.length === 0) {
        console.log('length is 0');
        // 如果找不到，延遲一段時間後再次檢查
        setTimeout(function() {
            divsWithTestId = document.querySelectorAll('div[data-testid]');
            console.log(divsWithTestId);
        }, 1000); // 1秒後再次檢查
    }

    // 建立一個 array 存放 data-testid 的值
    let arr_testid = [];

    // 遍歷找到的每個 div，將其 data-testid 的值添加到 arr_testid 中
    divsWithTestId.forEach(function(div) {
        var testDataId = div.getAttribute('data-testid');
        arr_testid.push(testDataId);
    });

    // 輸出結果到控制台
    console.log(arr_testid);
}