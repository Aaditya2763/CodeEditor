// callbacks
 function callbackTest(callback){
    setTimeout(() => {
       console.log("callback initialised successfully");
       callback()
    }, 2000);
 }
 function callback(){
    console.log("completed callback")
 }

 callbackTest(callback);


 