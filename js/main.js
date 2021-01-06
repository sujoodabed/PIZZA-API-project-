var httpReq = new XMLHttpRequest;
httpReq.open('GET','https://jsonplaceholder.typicode.com/photos',true)   // json place holder  // true => async
httpReq.send();
var postRow =document.getElementById('postRow');
var posts=[];
httpReq.addEventListener('readystatechange',function(){
   if(httpReq.readyState==4)
   posts= JSON.parse( httpReq.response)
   displayPosts();
});


function displayPosts(){
    var cartona='';
    for(var i=0;i<posts.length;i++){
        cartona+=`
        <div class="col-md-4">
        <div class="post">
            <img src="${posts[i].url}"  class="img-fluid">
            <h2>${posts[i].title}</h2>
        </div>
    </div>
        `
    };
    postRow.innerHTML=cartona;
}


// دائما كود api بتم تنفيذه اخر اشي لانه ما بعرف الوقت يلي بستغرقه وبنفذ الفنكشن الموجود عندي في نفس الملف لبين ما يخلص 
 /*
         test1   getpost  test2 
 sync => test1   getpost  test2 : ينفذ هدول الفنكشن بالترتيب 
 async => test1   test2   getpost :  

 getpost : function api 
 */