$(function(){

var avaliableSections = {'/contact':'', '/research':'','/teaching':''}
var currentSection = 'none';
var nextSection = 'none';
var slidingInProgress = false;

function locationHashChanged() {  
  toggleSection(location.hash.substring(1));
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
      $.when( $("#\\" + currentSection).slideUp().delay(150) ).done(showSection);
    });
  }
  else showSection();
}

function showSection() {
  if (currentSection == nextSection) { 
    nextSection = 'none';
    history.pushState('', document.title, window.location.pathname);
    endSliding(); 
    return;
  }
  if (nextSection in avaliableSections) {
    $("#\\" + nextSection).slideDown(function(){
      $("#close").show(10, endSliding);
    });
  }
  else endSliding();
}

function endSliding() {
  currentSection = nextSection;
  slidingInProgress = false;
}

$("#nav-teaching").click(function(ev){ toggleSection("/teaching", ev); });
$("#nav-research").click(function(ev){ toggleSection("/research", ev); });
$("#nav-contact").click(function(ev){ toggleSection("/contact", ev); });

window.onhashchange = locationHashChanged;

locationHashChanged();

});
