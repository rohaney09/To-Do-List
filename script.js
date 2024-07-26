const inputbox=document.getElementById("search-input");
const inputbutton=document.getElementById('search-button');
const list=document.getElementById('list');


function addTask() {
    let task = inputbox.value;
    if (task==='') {
        document.getElementById("popup").style.display = "block";
        setTimeout(function() {
            document.getElementById("popup").style.display = "none";
        }, 1000);
    }
       else{
        let li = document.createElement('li');
        li.innerHTML = task;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="X";
        li.appendChild(span)
        document.getElementById("pop").style.display = "block";
        setTimeout(function() {
            document.getElementById("pop").style.display = "none";
        }, 1000);
       }
       inputbox.value = "";
       saveData();
       
}       
       list.addEventListener("click",function(e)
       {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveData();
            }
            else if(e.target.tagName=="SPAN")
            {
                e.target.parentElement.remove();
                saveData();
                document.getElementById("popdown").style.display = "block";
        setTimeout(function() {
            document.getElementById("popdown").style.display = "none";
        }, 1000);
            }
       },false);
   function saveData()
   {
    localStorage.setItem("data",list.innerHTML);
   }

   function showData()
   {
    list.innerHTML = localStorage.getItem("data");
    
   }showData();

  

    

