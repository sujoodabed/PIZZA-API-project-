var query = new URLSearchParams(window.location.search); // location get url , search/URLSearchParams get data from link=> ?pid=3228
var currntId =query.get('pid'); // get 3228

var httpReq = new XMLHttpRequest;
httpReq.open('GET',`https://forkify-api.herokuapp.com/api/get?rId=${currntId}`);
httpReq.send();
var recData;
var recing=[] ;
var recimg = document.getElementById('recimg');
var listing =document.getElementById('listing');

httpReq.addEventListener('readystatechange',function(){
    if(httpReq.readyState==4)
      recData= JSON.parse (httpReq.response).recipe;
      recimg.src=recData.image_url;
      recing=recData.ingredients;
      displayIngradients();
})

function displayIngradients(){
    var cartona='';
    for(var i = 0; i < recing.length; i++) {
      cartona+=`
      <li>${recing[i]}</li>
      `  ;
    }
    listing.innerHTML=cartona;
    


}
 
