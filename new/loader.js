
(function(){

function loadScript(src, callback)
{
  var s, r, t;
  r = false;
  s = document.createElement('script');
  s.type = 'text/javascript';
  s.src = src;
  s.onload = s.onreadystatechange = function() {
    //console.log( this.readyState ); //uncomment this line to see which ready states are called.
    if ( !r && (!this.readyState || this.readyState == 'complete') )
    {
      r = true;
      if (callback !== undefined) callback();
    }
  };
  t = document.getElementsByTagName('script')[0];
  t.parentNode.insertBefore(s, t);
}

function checkCSSLoaded() {
  var e = document.getElementById("css-loaded");
  var info =  ('getComputedStyle' in window) 
           && window.getComputedStyle(e, null) 
           || e.currentStyle;
  return info.width === "1px";
}

function loadScripts(scripts, callback) {
  var aux_cb = function () {
    var src = scripts.shift();
    if (src === undefined) {
      if (callback !== undefined) callback();
    }
    else {
      loadScript(src, aux_cb);
    }
  }
  window.onload = function() {
    if (checkCSSLoaded()) aux_cb();
  }
}

loadScripts([
  "http://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js",
  "http://maps.googleapis.com/maps/api/js?v=3&sensor=false&callback=console.log",
  "http://cdnjs.cloudflare.com/ajax/libs/gmaps.js/0.4.5/gmaps.min.js",
  "code.js"
]);

})();
