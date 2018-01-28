var titles = document.getElementsByClassName('title') ;

//logs all the element having class-name as 'title'
console.log(titles);

//logs the 2nd element havig class-name as 'title'
console.log(titles[1]);

var tags = document.getElementsByTagName('li') ;

console.log(tags,tags[1]);


for(var i=0 ; i< titles.length ; i++){
  console.log(titles[i]);
}

//We can also use forEach

//But this is wrong because 'titles' is not an array
//     titles.forEach(function(item){
//       console.log(item);
//     });

//so 'titles' must be converted to an array
Array.from(titles).forEach(function(item){
  console.log(item);
});
