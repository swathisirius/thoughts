//selecting popup-box, popup-overlay, and button
var popupoverlay=document.querySelector(".popup-overlay");
var popupbox=document.querySelector(".popup-box").value;
var addpopupbutton=document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click", function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
    
})
//select cancel button
var cnacelpopup = document.getElementById("cancel-popup")
cnacelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})



//select container,add-book,book-title,book-author-input,book-description-input
 var container =document.querySelector(".container")
 var addquote = document.getElementById("add-quote")
 var title = document.getElementById("title").value;
 var quoteinput = document.getElementById("quote-input").value;
 var quotedescriptioninput = document.getElementById("quote-description-input")
 var quoteauthorinput = document.getElementById("quote-author-input")


 addquote.addEventListener("click", function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","quote-container")
    div.innerHTML=`<h2>${title.value}</h2>
                   <p>${quoteinput.value}</p>
                   <p>${quotedescriptioninput.value}</p>
                   <h5>${quoteauthorinput.value}</h5>
                   <button onclick="delete(event)">Delete</button>`
                   
                   container.append(div)

    popupoverlay.style.display="none"
    popupbox.style.display="none"
    

 })

 
 

 
 function deletequote(event)
 {
    event.target.parentElement.remove()
 }
 
 
 
   