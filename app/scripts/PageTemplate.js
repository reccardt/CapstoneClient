function drawTop() {
document.write(
 "<div class='TopPart'>"
+ "<img src='images/ppianotext.gif' alt='Paul&#39;s Pianos' style='float: left; margin-right: 40px;'/>"
+ "						Paul Eccardt <br/>"
+ "						Piano Tuning, Repair, Regulation, Voicing, and Rebuilding <br/>"
+ "						1115 Theodora Street <br/>"
+ "						Franklin Square, NY 11010 <br/>"
+ "						516 326-6944<br/> <a href='mailto:paul@paulspianos.com'>e-mail: paul@paulspianos.com</a>"
+ "</div>"
);
}

function drawMenuItem(pageToLoad,theUrl,theText) {
  var s = '';
  if(pageToLoad == theUrl) {
	 s += '<li class="AlreadyThere">';
	 }
  else {
	 s += '<li>';
  }
  s += '<a ';
  if(theText.length > 10) {
	 s += 'style="width: 16em; "';
  }
  s += 'href="';
  s += theUrl;
  s += '">';
  s += theText;
  s += '</a></li>';
  return s;
}

function loadMenu(pageToLoad) {
  var s = '<ul>';
  s += drawMenuItem(pageToLoad,"index.html","Main Page");
  s += drawMenuItem(pageToLoad,"tuning.html","Tuning");
  s += drawMenuItem(pageToLoad,"forsale.html","For Sale");
  s += drawMenuItem(pageToLoad,"links.html","Links");
  s += '</ul><br/>'
  document.getElementById('menuBar').innerHTML = s;
}

function drawInsideStart() {
 	var s = "<table class='TablePart'>	<tbody><tr>";
	s += "<td style='background-image: url(\"images/keyboardvert.gif\"); background-repeat: repeat-y; width: 64px;' />";
	s += "<td>";
	document.write(s);
}

function drawInsideFinish() {
	var s = "</td>";
	s += "<td style='background-image: url(\"images/keyboardvert2.gif\"); background-repeat: repeat-y; width: 64px;' />";
	s += "</tr></tbody></table>";
	document.write(s);
}

