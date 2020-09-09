let arr = ['|', '/', '-', '\\'];
let count = 0;

setInterval(function () {
    document.querySelector('.prek').innerHTML = arr[count % 4];
    count++;
}, 500);