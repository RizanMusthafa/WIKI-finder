$(document).ready(function() {
  
  $("#search_word").change(function() {
  	var sw = $(this).val().trim();
  	if(sw===""){
  		window.alert("you have enterd nothing");
      return;
  	}
  	$("#body").html("<div id='res'></div>")
  	
  	var url = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&meta=&srsearch="+sw+"&origin=*";
  	$.getJSON(url, writeData);
  });
});

function writeData(data) {
  data.query.search.forEach(function(i) {
  	var id = i.pageid;
    var snip = i.snippet;
  	var title = i.title;
  	$("#res").append("<a href='https://en.wikipedia.org/?curid="+id+"' target='_blank'><div class='entry animated zoomIn'><h2>"+title+"</h2><p>"+snip+"</p></div></a>");
  });
}