var httpReq=new XMLHttpRequest;
httpReq.open('GET','https://forkify-api.herokuapp.com/api/search?q=pizza');  // forkify api
httpReq.send();
var pizza =[];
var pizzaRow =document.getElementById('pizzaRow');
httpReq.addEventListener('readystatechange',function(){
    if(httpReq.readyState==4){
     pizza= JSON.parse( httpReq.response ).recipes;
     displayPizza()
    }
   
})


function displayPizza(){
    var cartona='';
    for(var i=0;i<pizza.length;i++){
        cartona+=`
        <div class="col-md-4">
                    <div class="post">
                      <h2>${pizza[i].title}</h2>
                      <img src="${pizza[i].image_url}" class="img-fluid" >
                      <a href="pizzadet.html?pid=${pizza[i].recipe_id}" class="btn btn-info">details</a> 
                    </div>
                </div>
        
        `;
    } // بعد علامة السؤال في الرابط بحمل معه داتا معينة 

    pizzaRow.innerHTML=cartona;
}