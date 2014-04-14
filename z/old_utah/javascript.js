
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
  
  r.style.display = 'none';
  t.style.display = 'none';
  if (c.style.display == 'block')
  {
    c.style.display = 'none';
  }
  else
  {
    c.style.display = 'block';
  }
}

function showResearch()
{
  c = document.getElementById("contact");
  r = document.getElementById("research");
  t = document.getElementById("teaching");

  c.style.display = 'none';
  t.style.display = 'none';
  if (r.style.display == 'block')
  {
    r.style.display = 'none';
  }
  else
  {
    r.style.display = 'block';
  }
}

function showTeaching()
{
  c = document.getElementById("contact");
  r = document.getElementById("research");
  t = document.getElementById("teaching");

  c.style.display = 'none';
  r.style.display = 'none';
  if (t.style.display == 'block')
  {
    t.style.display = 'none';
  }
  else
  {
    t.style.display = 'block';
  }
}
