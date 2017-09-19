
console.log("Checking Zeppelin Viewer...")
var finalPath =  document.getElementsByClassName("final-path");
if(finalPath.length !=0 ) {

  fileName = finalPath[0].innerText
  console.log("File Name is: "+ fileName);

  if(fileName == "manifest.json") {
    var gitDiv = document.getElementsByClassName("file")[0]
    console.log("gitDiv loaded"+ gitDiv.innerText)

    var outerDiv = document.createElement("div")
    var data = document.createTextNode("<h3>Hello World</h3>")
    outerDiv.appendChild(data)
    console.log(outerDiv.textContent)

    // gitDiv.outerHtml = outerDiv.textContent
    // gitDiv.textContent = outerDiv.textContent
    $("div.file").html(outerDiv.textContent)

    console.log("Update.." + gitDiv.innerHtml)
    console.log("Update.." + gitDiv.outerHtml)
  } else {
    console.log("Desired file not found")
  }
}
