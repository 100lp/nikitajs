// function: merge(array1, array2)
// https://jsfiddle.net/100lp/4a1qo24q/

// function: my custom map(callback, array)
// https://jsfiddle.net/100lp/mq460b56/
// сделал очень слабо, по факту не справился, нид хелп :)

define(['nikitajs/r'], function (d1) {

     //Your actual script goes here.
     //The dependent scripts will be fetched if necessary.

     return require;  //For example, jQuery object
});

function httpGet(theUrl)
{
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            return xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", theUrl, false );
    xmlhttp.send();
}

httpGet("https://vk.com/mdk.music?w=wall-42440233_114143");
