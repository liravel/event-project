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
