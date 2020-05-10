$(document).ready(function() {
  var xmlstring = "<" + xmlForm.getControlValue("Hidden000", "", "XF00025");
  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(xmlstring, "text/xml");
  var x = xmlDoc.documentElement.childNodes;
  var headers = '<tbody><tr>';
  if (x.length > 0) {
    y = x[0].childNodes;
    for (j = 0; j < y.length; j++) {
      headers += '<th scope="col">' + x[0].childNodes[j].nodeName + '</th>';
    }
    headers += '</tr>'
  }

  for (i = 0; i < x.length; i++) {
    y = x[i].childNodes;
    for (j = 0; j < y.length; j++) {
      var td = xmlDoc.createElement('td');
      td.innerHTML = x[i].childNodes[j].innerHTML;
      if (td.innerHTML == "")
        td.innerHTML = 'NULL';
      x[i].replaceChild(td, x[i].childNodes[j]);
    }

  }
  var st = new XMLSerializer().serializeToString(xmlDoc.documentElement);
  st = st.split("<row>").join("<tr>").split("</row>").join("</tr>").replace('<root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">', '<table cellspacing="0" rules="all" border="1" style="border-collapse:collapse;">' + headers).replace("</root>", "</table>");
  document.getElementById("C1_PageMainDiv").innerHTML += st
});
