
const line=document.getElementsByClassName('line');
const launchButton= document.getElementById('launch_app');


launchButton.addEventListener('click', openApp);
function openApp (){
  window.open("launch_app/index.html", "_self");
}

