function randomword(i) {
  var rand = Math.round(Math.random()*words[i].length);
  return words[i][rand];
}

function stanzaline() {
  var line = lines[Math.round(Math.random()*lines.length)];
  for(var i = 0; i < words.length; i ++) {
    var regex = new RegExp(i+1);
    while(regex.test(line)) {
      line = line.replace(regex,randomword(i));
    }
  }
  line = line.charAt(0).toUpperCase() + line.slice(1);
  return line;
}

function stanza(num) {
  var text = stanzaline();
  for (var i = 0; i < num-2; i ++) {
    text = text + "\n"+stanzaline()+",";
  }
  var text = text + "\n"+stanzaline();
  return text;
}

function onOpen() {
  var body = DocumentApp.getActiveDocument().getBody();
  body.appendParagraph(stanza(4)+".\n");
}
