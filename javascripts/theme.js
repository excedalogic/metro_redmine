$(document).ready(function () {
    var $newElement = $('<a href="http://www.eis.ms">Excedalogic</a>');
    var div = document.getElementById("footer");
    $(div).append(document.createTextNode("Metro Redmine Theme by ")).append($newElement);
    
});