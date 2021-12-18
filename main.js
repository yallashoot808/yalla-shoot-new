if (!Date.now) {
    Date.now = function() { return new Date().getTime(); };
}


var qs = getQueryStrings();
var rand = qs["rand"];
var url = qs["url"];
var title = qs["title"];
var mySource = qs["source"];
var version = qs["v"];
var background = qs["background"];


//setTimeout(function(){RadioTitle(url, mySource);}, 1000);
//setInterval(function(){RadioTitle(url, mySource);}, 5000);



function getQueryStrings() { 
  var assoc  = {};
  var decode = function (s) { return decodeURIComponent(s.replace(/\+/g, " ")); };
  var queryString = location.search.substring(1); 
  var keyValues = queryString.split('&'); 

  for(var i in keyValues) { 
    var key = keyValues[i].split('=');
    if (key.length > 1) {
      assoc[decode(key[0])] = decode(key[1]);
    }
  } 

  return assoc; 
} 


function popitup() {

var url = document.location.href;
 
 url = addParameterToURL(url, "rand=2");

        LeftPosition = (screen.width) ? (screen.width - 800) / 2 : 0;
        TopPosition = (screen.height) ? (screen.height - 700) / 2 : 0;
        var sheight = 300;/*(screen.height) * 0.9;*/
        var swidth = 400;/*(screen.width) * 0.8;*/          

        settings = 'height='+ sheight + ',width='+ swidth + ',top=' + TopPosition + ',left=' + LeftPosition + ',scrollbars=yes,resizable=yes,toolbar=no,status=no,menu=no, directories=no,titlebar=no,location=no,addressbar=no'
		
		
 
		
        newwindow = window.open('', '', settings);
        if (window.focus) { newwindow.focus(); newwindow.document.location.href=url; /*newwindow.location.reload()*/ 
		
		/*$('audio#player22').mediaelementplayer({
		features: [<?php //echo $feature; ?>]	
		});
		
		setTimeout("newPlayer();", 10000);*/
		
		}
        return false;
    }
	
	
function addParameterToURL(_url, param){
    //_url = location.href;
    _url += (_url.split('?')[1] ? '&':'?') + param;
    return _url;
}	


function toggleEmbed()
{
	var url = document.location.href;

 jQuery('#toggleEmbed').html('<textarea name="ecode" cols="30" rows="5"><iframe src="'+url+'" frameborder="0" marginheight="0" marginwidth="0" scrolling="no"  width="680" height="100"></iframe></textarea>');
 jQuery('#toggleEmbed').toggle(function() {    $(this).animate({ }, 500); });

}



jQuery(document).ready(function(){ 
	
});
