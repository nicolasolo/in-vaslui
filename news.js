// Create the XHR object.
function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
      // XHR for Chrome/Firefox/Opera/Safari.
      xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
      // XDomainRequest for IE.
      xhr = new XDomainRequest();
      xhr.open(method, url);
    } else {
      // CORS not supported.
      xhr = null;
    }
    return xhr;
  }
  
  // Helper method to parse the title tag from the response.
  function getTitle(text) {
    return text.match('<title>(.*)?</title>')[1];
  }
  
  // Make the actual CORS request.
  function makeCorsRequest() {
    // This is a sample server that supports CORS.
    var url = 'https://news.google.com/rss/search?q=vaslui&hl=ro&gl=RO&ceid=RO:ro';
  
    var xhr = createCORSRequest('GET', url);
    if (!xhr) {
      alert('CORS not supported');
      return;
    }
  
    // Response handlers.
    xhr.onload = function() {
      var text = xhr.responseText;
      var title = getTitle(text);
      alert('Response from CORS request to ' + url + ': ' + title);
      console.log(text);
    };
  
    xhr.onerror = function() {
      alert('Woops, there was an error making the request.');
    };
  
    xhr.send();
  }

  $ = document.getElementById.bind(document);

function showAdvanced() {
   document.body.classList.toggle("show-advanced");
   $("showopt").value = document.body.classList.contains("show-advanced") ? "Less options" : "More options";
}

function doParse() {
   var detail = "";
   if($("detailhide").checked) detail = "&detail=-1";
   if($("detailshow").checked) detail = "&detail=" + $("detailnum").value;

   var limit = $("limit").checked ? ("&limit=" + $("limitnum").value) : "";

   var advanced = document.body.classList.contains("show-advanced");
   var showtitle = (advanced && $("showtitle").checked ? "" : "&showtitle=false");
   var showicon = (advanced && $("showicon").checked ? "&showicon=true" : "");
   var showempty = (advanced && $("showempty").checked ? "&showempty=true" : "");
   var striphtml = (advanced && $("striphtml").checked ? "&striphtml=true" : "");
   var forceutf8 = (advanced && $("forceutf8").checked ? "&forceutf8=true" : "");
   var fixbugs = (advanced && $("fixbugs").checked ? "&fixbugs=true" : "");

   var path = "/?url=" + encodeURIComponent($("url").value) + detail + limit + showtitle + showicon + showempty + striphtml + forceutf8 + fixbugs;
   var url = "";
   var code = "";

   var type = $("form").elements["codegen"].value;
   if(type == "php") code = "<?php\ninclude(\"https:" + url + "\");\nphp?>";
   else if(type == "js") code = "<script src=\"" + url + "&type=js\"></script>";
   else if(type == "html") code = "<iframe src=\"" + url + "&type=html\"></iframe>";

   $("codeout").value = code;
   $("live-example").src = path;

   document.body.classList.add("submitted");

   return false;
}

window.onload = function() {
  $("form").onsubmit = doParse;

  $("limitnum").onclick = function() {
    $("limit").checked = true;
  };

  $("detailnum").onclick = function() {
    $("detailshow").checked = true;
  };

  $("url").focus();
};