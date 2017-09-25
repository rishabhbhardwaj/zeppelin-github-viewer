
console.log("Checking Zeppelin Viewer...")
var finalPath =  document.getElementsByClassName("final-path");
if(finalPath.length !=0 ) {

  fileName = finalPath[0].innerText
  console.log("File Name is: "+ fileName);

  if(fileName == "note.json") {
    var dataDiv = document.getElementsByClassName("data")[0];
    var data = dataDiv.innerText;
    var dataObj = JSON.parse(data);
    console.log(dataObj);


    var outerView = document.createElement("div");
    // Add name
    var nameDiv = document.createElement("div");
    nameDiv.setAttribute('class','nbName');
    var nameText = document.createTextNode(dataObj.name);
    nameDiv.appendChild(nameText);

    //Add paragraphs
    var paragraphsDiv = document.createElement("div");
    var paragraphs = dataObj.paragraphs
    console.log(paragraphs);

    for (i = 0; i < paragraphs.length; i++) {
       var paragraph = paragraphs[i];
       if(paragraph.hasOwnProperty('text')) {
         var pElement = document.createElement("div");
         pElement.setAttribute('id', 'p'+i);
         pElement.setAttribute('class','cellCard mdl-grid mdl-card mdl-shadow--4dp');

         var codeElement = document.createElement("div");
         codeElement.setAttribute('id', 'code'+i);
         codeElement.setAttribute('class','codeText');
        //  console.log("text: "+paragraph.text);
         codeElement.innerText = paragraph.text;
         pElement.appendChild(codeElement);

         var outputElement = document.createElement("div");
         outputElement.setAttribute('id', 'out'+i);
         outputElement.setAttribute('class', 'codeOutput mdl-card__supporting-text mdl-card--border mdl-cell--12-col');
        //  console.log("text: "+paragraph.results.msg[0].data);
         outputElement.innerText = paragraph.results.msg[0].data;
         pElement.appendChild(outputElement);

         var statusElement = document.createElement("div");
         statusElement.setAttribute('id', 'status'+i);
         statusElement.setAttribute('class', 'mdl-cell mdl-cell--1-col');
         var statusSpan = document.createElement("span");
         statusSpan.setAttribute('class','statusChip mdl-chip');
        //  console.log(paragraph.status);
         statusSpan.innerHTML = '<span class="mdl-chip__text">'+paragraph.status+'</span>';
         statusElement.appendChild(statusSpan);
         pElement.appendChild(statusElement);


         paragraphsDiv.appendChild(pElement);
       }
    }


    outerView.appendChild(nameDiv);
    outerView.appendChild(paragraphsDiv);

    $("div.data").html(outerView.innerHTML)
  } else {
    console.log("Desired file not found")
  }
}
