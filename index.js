var targetForm = document.querySelector("#message-form");

targetForm.addEventListener("submit",function(e){
    e.preventDefault();
    
    // target Input
    var messageInput = document.querySelector("#message");
   var feedbackInput = document.querySelector(".feedback");
    var messageShow = document.querySelector(".message-content");
    
    if(messageInput.value === ""){
        feedbackInput.classList.add("show");
        setTimeout(function(){
        feedbackInput.classList.remove("show")
        },2000)
    }else{
        messageShow.innerHTML = messageInput.value;
        messageInput.value = "";
    }


});
