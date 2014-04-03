
function hideAll()
{
  c = document.getElementById("contact");
  r = document.getElementById("research");
  t = document.getElementById("teaching");

  c.style.display = 'none';
  r.style.display = 'none';
  t.style.display = 'none';
}

function showContact()
{
  c = document.getElementById("contact");
  r = document.getElementById("research");
  t = document.getElementById("teaching");

  c.style.display = 'block';
  r.style.display = 'none';
  t.style.display = 'none';
}

function showResearch()
{
  c = document.getElementById("contact");
  r = document.getElementById("research");
  t = document.getElementById("teaching");

  c.style.display = 'none';
  r.style.display = 'block';
  t.style.display = 'none';
}

function showTeaching()
{
  c = document.getElementById("contact");
  r = document.getElementById("research");
  t = document.getElementById("teaching");

  c.style.display = 'none';
  r.style.display = 'none';
  t.style.display = 'block';
}
