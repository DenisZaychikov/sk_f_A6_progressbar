$(document).ready(function() {
    let myProgress = 0;
    $('.button1').on('click', function() {
        myProgress += 1;
        $('#my-progress-bar').width(myProgress + '%');
    });
    $('.button2').on('click', function() {
        myProgress += 3;
        $('#my-progress-bar').width(myProgress + '%');
    });
    $('.button3').on('click', function() {
        myProgress += 7;
        $('#my-progress-bar').width(myProgress + '%');
    });
});