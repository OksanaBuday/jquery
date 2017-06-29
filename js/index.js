$(function() {
    $('button').click(handleClick); 
})

function handleClick() {
    $('h1').html('Hello jQuery!');
    $('button').click(handleSecondClick);
}


function handleSecondClick() {
    $('h1').toggle('slow');
}


// var arr = document.querySelectorAll('h1');
// arr.forEach(function(el) {
//     el.innerHTML = 'Hello from Vanilla JS'
// })
