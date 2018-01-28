const booklist = document.querySelector('#book-list') ;

//parents
console.log(booklist.parentNode);
console.log(booklist.parentElement.parentElement);

//children
//outputs a node-list
console.log(booklist.childNodes);
//outputs a HTMLCollectiion i.e only HTML elements
console.log(booklist.children);

//sibling
console.log(booklist.nextSibling);
console.log(booklist.nextElementSibling);
console.log(booklist.previousSibling);
console.log(booklist.previousElementSibling);

booklist.previousElementSibling.querySelector('p').innerHTML+='<br/>Come and Buy' ;
