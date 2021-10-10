function exchange(){
  //change directory
  let aDiv = document.getElementById("tab-content");
  let oDiv = aDiv.getElementsByTagName("div");
  for(let i = 0;i < oDiv.length;i++){
    oDiv[i].style.display="none";
  }
  let oLi = document.getElementById("tab1");
  oLi.style.display="block";
  //change directory
  let aUl = document.getElementById("ul1")
  let aLi2 = aUl.getElementsByTagName("li")
  for(let i = 0;i < aLi2.length;i++){
    aLi2[i].className="";
  }
  let aLi = document.getElementById("a1");
  aLi.className = "current";


}
function exchange2(){
  // change display
  let aDiv = document.getElementById("tab-content");
  let oDiv = aDiv.getElementsByTagName("div");

   for(let i = 0;i < oDiv.length;i++){
        oDiv[i].style.display="none";
       }
     let oLi = document.getElementById("tab2");
       oLi.style.display="block";

  //change directory
  let aUl = document.getElementById("ul1")
  let aLi2 = aUl.getElementsByTagName("li")
  for(let i = 0;i < aLi2.length;i++){
    aLi2[i].className="";
  }

  let aLi = document.getElementById("a2");
  aLi.className = "current";

}
function exchange3(){
  let aDiv = document.getElementById("tab-content");
  let oDiv = aDiv.getElementsByTagName("div");

  for(let i = 0;i < oDiv.length;i++){
    oDiv[i].style.display="none";
  }
  let oLi = document.getElementById("tab3");
  oLi.style.display="block";

  //change directory
  let aUl = document.getElementById("ul1")
  let aLi2 = aUl.getElementsByTagName("li")
  for(let i = 0;i < aLi2.length;i++){
    aLi2[i].className="";
  }

  let aLi = document.getElementById("a3");
  aLi.className = "current";
}
