const banner = document.querySelector('#page-banner') ;

console.log(banner.nodeType); //output : 1 // (where 1:Element)
console.log(banner.nodeName); //output : DIV
console.log(banner.hasChildNodes());

//cloning a node
const clonedBanner = banner.cloneNode(true) ;
console.log(clonedBanner);
