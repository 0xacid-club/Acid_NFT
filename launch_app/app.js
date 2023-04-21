
//Click button to integrate metamaskconst 
metamaskButton= document.getElementById('connect_metamask_');
const account= document.getElementById('network_');

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


//scolling function for NFTs
const documentHeight = document.documentElement.scrollHeight;
const viewportHeight = window.innerHeight;
const filter= document.getElementById('filter');
const filterHeight = filter.getBoundingClientRect().height;

 document.addEventListener('DOMContentLoaded', scrollRight);

window.addEventListener('scroll', scrollRight);
function scrollRight(){
  if (documentHeight >= viewportHeight-filterHeight) {
    filter.style.position='fixed';
  }
  else { 
    filter.style.position='';
  } 
 }



//collapsible filter characteristics
const collapse = document.getElementsByClassName("collapsible");



for (i = 0; i < collapse.length; i++) {
  collapse[i].addEventListener("click", function () {
    const characteristic = this.nextElementSibling;
    if (characteristic.style.height=== "0vh") {
      characteristic.style.height = "40vh";
    } else {
      characteristic.style.height = "0vh";
    }
  });
}

//adding a filter button when screen size changes to mobile
const filterButton= document.createElement('button');
const nav= document.getElementById('nft_navbar');
const media= window.matchMedia("(max-width: 500px)");
const filterFavicon= document.createElement('i');
filterFavicon.setAttribute('class','fa-bars-filter');

document.addEventListener('DOMContentLoaded', mediaMatch);

function mediaMatch() {
  if (media.matches) {
    nav.appendChild(filterButton); 
    filterButton.appendChild(filterFavicon);
    filter.style.display='none'; 

  } 
}

filterButton.style.backgroundColor='black';
filterButton.style.width='10%';
filterButton.style.height='5vh';
filterButton.style.marginLeft='5%';
filterButton.style.marginTop='15%';
filterButton.style.position='absolute';
filterButton.style.border='1px solid';
filterButton.style.borderRadius='10px';
filterButton.style.color='#5FFFF4';

filterFavicon.style.color= '#5FFFF4';

//click filterButton to open filter options

filterButton.addEventListener('click', filterOpen);

function filterOpen (){
 if(filter.style.display=== 'none'){
  filter.style.display='';
 } else {
  filter.style.display = 'none';
 }
}

//move rotating arrows next to filterbutton
const rotateArrows= document.getElementById('arrows-rotate');

document.addEventListener('DOMContentLoaded', moveArrows);

function moveArrows () {
  nav.appendChild(rotateArrows);
}