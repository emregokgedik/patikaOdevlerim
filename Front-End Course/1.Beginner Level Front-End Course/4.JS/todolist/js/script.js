/*var buton=document.querySelectorAll(".close").forEach(function(element){
    element.addEventListener("click",function(){
        element.parentElement.remove();
    })
})*/

function newElement(){
    let task=document.querySelector("#task")
    if(task.value!=""){
        let liste=document.querySelector("ul")
        let li=document.createElement("li"); 
        li.textContent=task.value;
        li.innerHTML+=`<span type="button" class="close" data-dismiss="alert" aria-label="Close" style="background-color:none;">
        <span aria-hidden="true">&times;</span>`
        liste.appendChild(li)
        var buton=document.querySelectorAll(".close").forEach(function(element){
            element.addEventListener("click",function(){
                element.parentElement.remove();
            })
        })
        $(".success").toast('show');
    }else{
        $(".error").toast('show');
    }
}