var wrong = [] ;
var cnt = 0 ;
var wrongs = wrong.join("").toString();
function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
  }
  function dragging(event) {
  }
  function allowDrop(event) {
    event.preventDefault();
  }
  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    var inputTarget = event.target ;
    event.target.style.border = "none" ;
    event.target.style.boxShadow = "none" ;
    if(inputTarget.id == data){
      cnt ++ ; 
    }
    else{
      wrong.push(data) ;
      event.target.style.color = "red" ;
    }
    arr.push(data)
    event.target.ondrop = false ;
  }
  function checkFunc() {
    if(cnt == 8) {
      alert("Excellent 🎉")
    }
    else{
      alert("Wrong 🤐 " + wrong.join(" , ").toString())
    }
  }
  