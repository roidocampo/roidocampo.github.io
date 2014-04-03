$(document).ready(function(){

    $('a.secclose').click(hideSection);
    // $('a.navitem').click(function(){toggleSection('contact');});

    var gen_a = function(sectionName){
      var tmpl = ' <a href="#x" id="nav-x" class="navitem" onclick="toggleSection(\'x\');">x</a>';
      return tmpl.replace(/x/g, sectionName);
    }

    $('#container').append(''
      + '<div id=navigation>'
      + '<h4 class="access">navigation</h4>'
      + gen_a('contact') + gen_a('research') + gen_a('teaching')
      + '</div>'
    );

    var initialSection = location.hash;
    var avaliableSections = {'#contact':'', '#research':'','#teaching':''}

    if (initialSection in avaliableSections)
    {
      toggleSection(initialSection.substring(1));
    }

    function locationHashChanged() {  
        if (location.hash in avaliableSections) {  
            toggleSection(location.hash.substring(1));
        }  
    }

    window.onhashchange = locationHashChanged;

});


var currentSection = 'none';
var fadingInProgress = false;

function hideSection(ev)
{
  var oldSection = currentSection;

  if (currentSection != 'none')
  {
    $("#" + currentSection).fadeOut("slow");
    //sec = document.getElementById(currentSection);
    //sec.style.display = 'none';
    currentSection = 'none';
  }

  return oldSection;
}

function toggleSection(sectionName)
{
  if (fadingInProgress) { return; }
  fadingInProgress = true;
  if (currentSection != sectionName)
  {
    if (currentSection == 'none')
    {
      $("#" + sectionName).fadeIn("slow", endFading);
    }
    else
    {
      $("#" + currentSection).fadeOut("slow", function(){
        $("#" + sectionName).fadeIn("slow", endFading);
      });
    }
    //sec = document.getElementById(sectionName);
    //sec.style.display = 'block';
    currentSection = sectionName;
  }
  else
  {
    $("#" + currentSection).fadeOut("slow", endFading);
    //sec = document.getElementById(currentSection);
    //sec.style.display = 'none';
    currentSection = 'none';
  }
}

function endFading()
{
  fadingInProgress = false;
}
