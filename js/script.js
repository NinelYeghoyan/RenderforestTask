// ---------------mobile menu----------------

$(document).ready(function(){
    var closed = true;

    $("#open").on('click', function(){
        if(closed){

            $("#mySidenav").animate({
                width: 400
            }, 100);

            $("#main").animate({
                marginRight: 400
            }, 100);
        } else {

            $("#mySidenav").animate({
                width: 0
            }, 100);

            $("#main").animate({
                marginRight: 0
            }, 100);
        }

        closed = !closed;

    });
});