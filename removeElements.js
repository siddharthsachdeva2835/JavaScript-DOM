var h2 = document.querySelector('#book-list h2') ;

h2.addEventListener('click',function(e){
  console.log(e.target);
  console.log(e);
});

var btns = document.querySelectorAll('#book-list .delete') ;

Array.from(btns).forEach(function(btn){
  btn.addEventListener('click',function(e){
    const li = e.target.parentElement ;
    li.parentNode.removeChild(li) ;
  });
});
