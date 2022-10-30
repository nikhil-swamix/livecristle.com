$(document).ready(function () {
    $('.list-group-item').click(function (e) { 
        $target=$(this)
        $target.addClass('theme1-bg')
        $target.siblings().removeClass('theme1-bg')
        console.log($target)
    });
});