// all const selector
const body = document.querySelector("#body");
const hamburger = document.querySelector("#hamburger");
const sidebarShow = document.querySelector("#sidebar-show");
const setting = document.querySelector("#setting");
const settingOverlay = document.querySelector("#settingOverlay");
const checkButton = document.querySelector("#checkButton");
// nav hamburgure 
hamburger.setAttribute("onclick","sideOpen()");
function sideOpen() {
  sidebarShow.style.width="165px";
  hamburger.setAttribute("onclick","sideClose()");
}
function sideClose() {
  sidebarShow.style.width="";
  hamburger.setAttribute("onclick","sideOpen()");
}
// nav bar logo text
document.querySelector("#navLogo").innerText="2nd in World Cup Qualifiers";
// setting box
setting.addEventListener("click",function(){
  body.style.overflow="hidden";
  settingOverlay.style.display="block";
});
settingOverlay.addEventListener("click",function(){
  body.style.overflow="auto";
  settingOverlay.style.display="none";
});
