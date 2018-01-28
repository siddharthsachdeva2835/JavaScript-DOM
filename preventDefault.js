const link = document.querySelector('#page-banner a') ;
console.log(link);

link.addEventListener('click',function(e){
  e.preventDefault() ;
  console.log('navidation failed');
});
