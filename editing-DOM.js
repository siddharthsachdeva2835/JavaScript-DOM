var books = document.querySelectorAll('#book-list li .name') ;
console.log(books);

//replaces the text-content
// Array.from(books).forEach(function(item){
//   item.textContent = 'test' ;
// });

//appends below the text-content
Array.from(books).forEach(function(item){
  item.textContent += '--test' ;
});

const booklist = document.querySelector('#book-list');
//booklist.innerHTML = '<p>test</p>' ;
booklist.innerHTML += '<p>test</p>' ;
