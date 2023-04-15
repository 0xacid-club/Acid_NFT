//scolling function for NFTs
const documentHeight = document.documentElement.scrollHeight;
const viewportHeight = window.innerHeight;
const filter= document.getElementById('filter');
const filterHeight = filter.getBoundingClientRect().height;


window.addEventListener('scroll', () => {
  if (documentHeight >= viewportHeight-filterHeight) {
    filter.style.position='fixed';
  }
  else { 
    filter.style.position='';
  } 
})

