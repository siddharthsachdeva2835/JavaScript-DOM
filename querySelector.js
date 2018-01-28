let wrap = document.querySelector('#wrapper') ;
console.log(wrap);

//returns the element having class='name' inside the 2nd child
let select = document.querySelector('#book-list li:nth-child(2) .name') ;
console.log(select);

//returns the element having class='name' inside the 1st child
//as querySelector can not return multiple elements
var books = document.querySelector('#book-list li .name') ;
// console.log(books);

var books = document.querySelectorAll('#book-list li .name') ;
//console.log(books);

Array.from(books).forEach(function(item){
  console.log(item);
});
