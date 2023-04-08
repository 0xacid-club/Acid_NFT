
const launchButton= document.getElementById('launch_app');
const metamaskButton= document.getElementById('connect_metamask');
const account= document.getElementById('network');

//Click button to launch app
launchButton.addEventListener('click', openApp);
function openApp (){
  window.open("launch_app/index.html", "_self");
}


//Click button to integrate metamask
document.addEventListener('DOMContentLoaded', connectMetamask);

function connectMetamask(){
 metamaskButton.addEventListener('click', integrateMetamask);
 function integrateMetamask (){
if (!window.ethereum) {
 metamaskButton.innerHTML= "Install Metamask";
 return false;
} else {
  loginWithMetamask();
  return true;
}
 }
  }

async function loginWithMetamask(){
  const accounts = await window.ethereum.request({method:'eth_requestAccounts'}).catch((e) =>
    console.error(error));
  metamaskButton.innerHTML="Connected to Metamask";
  metamaskButton.style.backgroundColor="black";
  metamaskButton.style.color="#5FFFF4";
  account.innerHTML=`...${accounts[0][39]}${accounts[0][40]}${accounts[0][41]}`;
  }



