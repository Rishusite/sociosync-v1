let profilePic=document.getElementById("img");
let inputFile=document.getElementById("upload");

inputFile.onchange=function(){
  profilePic.src=URL.createObjectURL(inputFile.files[0]);
}