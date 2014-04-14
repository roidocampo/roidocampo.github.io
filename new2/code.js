$(function(){

var avaliableSections = {"#contact":"", "#research":"","#teaching":""}
var currentSection = "";
var nextSection = "";
var slidingInProgress = false;

function hashChanged(newSection, ev) {  
  if (newSection == undefined) {
    newSection = location.hash;
    if (currentSection == newSection)
      return;
  }
  if (slidingInProgress) return;
  slidingInProgress = true;
  nextSection = newSection;
  if (ev)
    ev.preventDefault();
  if (!(nextSection in avaliableSections) || (currentSection == nextSection))
    nextSection = "";
  if (nextSection != location.hash)
    history.pushState('', document.title, 
        window.location.pathname + nextSection);
  hideSection();
}

function hideSection() {
  if (currentSection in avaliableSections)
    $("#close").hide(10, function() {
      $.when( $(currentSection).slideUp().delay(150) ).done(showSection);
    });
  else showSection();
}

function showSection() {
  if (nextSection in avaliableSections)
    $(nextSection).slideDown(function(){
      $("#close").show(10, endSliding);
    });
  else endSliding();
}

function endSliding() {
  currentSection = nextSection;
  slidingInProgress = false;
  hashChanged();
}

$("#nav-teaching").click(function(ev){ hashChanged("#teaching", ev); });
$("#nav-research").click(function(ev){ hashChanged("#research", ev); });
$("#nav-contact").click(function(ev){ hashChanged("#contact", ev); });
$("#close").click(function(ev){ hashChanged("", ev); });

window.onhashchange = function() { hashChanged(); };

hashChanged();

});
