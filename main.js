'use strict';

{
    const btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
        const result = document.getElementById('result');
        const results = ['大吉', '中吉', '小吉', '凶'];
        const random = Math.floor(Math.random() * results.length);
        result.textContent = results[random];
    });
}