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
}

var next = function(current) {
  var currentId = [...current].slice(0)[0].id;
  var currentNode = document.getElementById(currentId);
  var selectedNode =  document.getElementById(currentId).nextSibling.nextSibling; 
  if(currentId !=="contact") {
    currentNode.classList.remove("top");
    currentNode.style.zIndex = "0";
    currentNode.style.display = "none"
    selectedNode.style.zIndex = "1";
    selectedNode.style.display = "flex";
    selectedNode.classList.add("top");
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

  if(e.key === "ArrowRight" || e.key === "ArrowUp") {
    next(document.getElementsByClassName('top'));
  }
  if(e.key === "ArrowLeft" || e.key === "ArrowDown") {
    prev(document.getElementsByClassName('top'));
  }  
})

