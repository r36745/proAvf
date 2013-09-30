/* Steven Roseman*/
/* 1309*/
/* AVF Demo App Pt One*/
/* 9/24/13*/

$(function() {
  
  
  var bUrl = "http://api.brewerydb.com/v2/featured/?key=851b96f1795e0c133ec62aca2bc49ab4";
  
  $.getJSON(bUrl, beerOutput);
  });

var beerOutput = function(info) {
    console.log(info);
    $.each(info.data.brewery.images, function(index, photo){
           console.log(info.data);
           var beer = "<li><img src='" + photo + "'/></li>";
           console.log(beer);
           $("#beer-data").append(beer);
           });
    
};


$(function() {
  var tag = "restaurant",
  
  url = "https://api.instagram.com/v1/tags/" + tag + "/media/recent?callback=?&amp;client_id=134427b420784a59ad7cddba9e547892";
  
  $.getJSON(url, screenOutput);
  });



var screenOutput = function(bStats) {
    
    
	$.each(bStats.data, function(index, photo) {
           
           
           var pic = "<li><img src ='" + photo.images.standard_resolution.url + "' alt='" + photo.user.id + "'/><li>";
           console.log(pic);
           $("#data-output").append(pic);
           });
};


  document.addEventListener("deviceready", onDeviceReady, false);


function onDeviceReady() {
    var myContact = navigator.contacts.create({"displayName": "Test User"});
    myContact.note = "New contacts can be added.";
    console.log("The contact, " + myContact.displayName + ", note: " + myContact.note);
    $("#home").append(myContact.note);
}

$(function(){
    document.addEventListener("deviceready", onDeviceReady, false);
  });


var onDeviceReady = function() {
    netConnection();
}

var netConnection = function() {
    var networkState = navigator.connection.type;
    
    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';
    
    alert('Connection type: ' + states[networkState]);
}

var checkLanguage = function() {
    navigator.globalization.getPreferredLanguage(
 function (language) {alert('language: ' + language.value + '\n');},
 function () {alert('Error getting language\n');}
 );
}








