require.config({
    urlArgs: "bust=" + (new Date()).getTime()
});

var all=[];
require.onResourceLoad = function (context, map, depArray) {
    all.push(map.name);    
};

function end(){
    console.log("--------------------------- END requirejs:");
    all.map(function(item){
        require.undef(item);
    });
};



function init_requirejs(){
    console.log("--------------------------- INIT requirejs:");
    require([ "helpers/util"], function(util) {
        var count=0;
        $('#content').empty();

        $('#content').append("<input type='button' id='increment_button' value='click to increment the counter'>");
        $('#content').append("<h1 id='the_counter'>0</h1>");

        $('#content').append("<br><br><input type='button' id='init_button' value='click to initialize requirejs files'>");

        $('#increment_button').on('click', function(){
            count++;
            $('#the_counter').text(count);
        });
        $('#init_button').on('click', function(){
            end();
            init_requirejs();
        });

        util();

    });
};
init_requirejs();
