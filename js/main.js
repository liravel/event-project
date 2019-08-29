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
  currentArtist.style.zIndex = "-1";
  currentArtist.classList.remove("currentArtist");
  selected.style.display = "block";
  selected.style.zIndex = "2";
  selected.classList.add("currentArtist");
  console.log(id);

}
