var changeZIndex = function(id, current) {
  var currentId = [...current].slice(0)[0].id;
  var currentNode = document.getElementById(currentId);
  var selectedNode = document.getElementById(id);
  currentNode.classList.remove("top");
  currentNode.style.zIndex = "0";
  currentNode.style.display = "none"
  selectedNode.style.zIndex = "1";
  selectedNode.style.display = "flex";
  selectedNode.classList.add("top");
}


var changeArtist = function(id, current) {
  var currentArtist = document.getElementById(current[0].id);
  var selected = document.getElementById(id);
  currentArtist.style.display = "none";
  currentArtist.classList.remove("currentArtist");
  selected.style.display = "block";
  selected.classList.add("currentArtist");
  console.log(id);

}

var next = function(current) {
  var currentId = [...current].slice(0)[0].id;
  var currentNode = document.getElementById(currentId);
  var selectedNode =  document.getElementById(currentId).nextSibling.nextSibling; 
  if(currentId !=="contact") {
    currentNode.classList.remove("top");
    currentNode.style.display = "none"
    selectedNode.style.display = "flex";
    selectedNode.classList.add("top");
    console.log(selectedNode);
  }

}

var prev = function(current) {
  var currentId = [...current].slice(0)[0].id;
  var currentNode = document.getElementById(currentId);
  var selectedNode =  document.getElementById(currentId).previousSibling.previousSibling;
  if(currentId !== "home") {
    currentNode.classList.remove("top");
    currentNode.style.zIndex = "0";
    currentNode.style.display = "none"
    selectedNode.style.zIndex = "1";
    selectedNode.style.display = "flex";
    selectedNode.classList.add("top");
  }

}


window.addEventListener("keydown", function(e) {
  e = e || this.window.event;
  switch(e.key) {
    case "ArrowLeft":
        prev(document.getElementsByClassName('top'));
        break;
    case "ArrowLeft":
        prev(document.getElementsByClassName('top'));
        break;
    case "ArrowUp":
        next(document.getElementsByClassName('top'));
         break;
    case "ArrowDown":
        prev(document.getElementsByClassName('top'));
        break;      
  }
})

