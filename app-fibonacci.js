'use strict';

function fib(n) {
    const list = [];

    if (n==0) {
        list.push(0);
    } else if (n==1) {
        list.push(0);
        list.push(1);
    } else {
        list.push(0);
        list.push(1);
        for (let i=2; i<=n; i++) {
            var val = list[i-1] + list[i-2];
            list.push(val);
            // console.log(list[i])
        }
    }
    return list
}

const length = 40;
var ans = fib(length)
for (let i=0; i < ans.length; i++) {
    console.log(ans[i])
}