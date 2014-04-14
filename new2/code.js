$(function(){

var avaliableSections = {'contact':'', 'research':'','teaching':''}
var currentSection = 'none';
var nextSection = 'none';
var slidingInProgress = false;

function locationHashChanged() {  
  toggleSection(location.hash.substring(2));
}

function toggleSection(nwsec, ev) {  
  if (slidingInProgress) { return; }
  slidingInProgress = true;
  nextSection = nwsec;
  if (currentSection == nextSection) { 
    ev.preventDefault();
  }
  hideSection();
}

function hideSection() {
  if (currentSection in avaliableSections) {
    $("#close").hide(10, function(){
      $.when( $("#" + currentSection).slideUp().delay(150) ).done(showSection);
    });
  }
  else showSection();
}

function showSection() {
  if (currentSection == nextSection) { 
    nextSection = 'none';
    history.pushState('', document.title, window.location.pathname);
    endSliding(); 
  }
  else if (nextSection in avaliableSections) {
    history.pushState('', document.title, 
        window.location.pathname + "#/" + nextSection);
    $("#" + nextSection).slideDown(function(){
      $("#close").show(10, endSliding);
    });
  }
  else {
    history.pushState('', document.title, window.location.pathname);
    endSliding();
  }
}

function endSliding() {
  currentSection = nextSection;
  slidingInProgress = false;
}

$("#nav-teaching").click(function(ev){ toggleSection("teaching", ev); });
$("#nav-research").click(function(ev){ toggleSection("research", ev); });
$("#nav-contact").click(function(ev){ toggleSection("contact", ev); });
$("#close").click(function(ev){ toggleSection("none", ev); });

window.onhashchange = locationHashChanged;

locationHashChanged();

});
