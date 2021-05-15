// var object ={
//     stuInfo:[{
//         name:"Motiur",
//         lname:"Rahman",
//         id:1
//     },{
//         name:"Misu",
//         lname:"Islam",
//         id:2
//     },{
//         name:"Ayman",
//         lname:"Sadik",
//         id:3
//     }
// ]
// }

// for(var x in object.stuInfo){ 
//     for(var inner_x in object.stuInfo[x]){
//         console.log(object.stuInfo[x][inner_x]);
//     }
// }


// var targetButton = document.querySelector("button");
// var show = document.querySelector(".output");


// targetButton.addEventListener("click",function(){
//     var targetInput = document.querySelector("input").value;
//     var xhm = new XMLHttpRequest;
//     xhm.onprogress = function(){
//         show.innerHTML= "loading";
//     }
//     xhm.open("GET",`http://worldtimeapi.org/api/timezone`,true)
//     xhm.onload = function(){
//         if(this.status === 200){
//            console.log(this.responseText);
//         }
//     }
//     xhm.send();
// });


// (function() {
// //Select the input element
// const form = document.querySelector('#message-form')
// //Set up Submit Button
// form.addEventListener('submit', function(e){
//     // prevent the form's default submission action
//     e.preventDefault()
//     //Get user's input from from
//     const message = document.querySelector('#message')
//     const feedback = document.querySelector('.feedback')
//     const messageContent = document.querySelector('.message-content')

//     if (message.value === ''){
//         feedback.classList.add('show')
//         setTimeout(function(){
//         feedback.classList.remove('show')
//         }, 2000)
//     } else {
//         //Change message content and clear the message input
//         messageContent.textContent = message.value
//         message.value = ''
//     }
// })
// })()


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