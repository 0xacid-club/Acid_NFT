//scolling function for NFTs
const documentHeight = document.documentElement.scrollHeight;
const viewportHeight = window.innerHeight;
const filter= document.getElementById('filter');
const filterHeight = filter.getBoundingClientRect().height;



window.addEventListener('scroll', scrollRight);
function scrollRight(){
  if (documentHeight >= viewportHeight-filterHeight) {
    filter.style.position='fixed';
  }
  else { 
    filter.style.position='';
  } 
 }

 document.addEventListener('DOMContentLoaded', scrollRight);

//collapsible filter characteristics
const collapse = document.getElementsByClassName("collapsible");


for (i = 0; i < collapse.length; i++) {
  collapse[i].addEventListener("click", collapseElement);
  function collapseElement(){
    const characteristic = this.nextElementSibling;
    if (characteristic.style.height=== "0vh") {
      characteristic.style.height = "40vh";
    } else {
      characteristic.style.height = "0vh";
    }
  };
}


document.addEventListener('DOMContentLoaded', collapseElement);