$(document).ready(function(){
  $.ajax({
    url: "https://records-ws.tanbif.ditnet.ac.tz/occurrences?jsoncallback=?",
    success: function(result){
  $('#occurrence').html(result['totalRecords']);
  }});
  $.ajax({
    url: "https://collections.tanbif.ditnet.ac.tz/ws/dataResource/count", 
    success: function(result){
  $('#datasets').html(result['total']);
  }});
  $.ajax({url: "https://collections.tanbif.ditnet.ac.tz/ws/institution/count",crossDomain: true, success: function(result){
  $('#institutions').html(result['total']);
  }});
  $.ajax({url: "http://collections.tanbif.ditnet.ac.tz/ws/collection/count",crossDomain: true, success: function(result){
  $('#collections').html(result['total']);
  }});
});

