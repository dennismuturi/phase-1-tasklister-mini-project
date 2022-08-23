

document.addEventListener("DOMContentLoaded", () => {
  // Grab the form element
 document.getElementById("create-task-form").addEventListener("submit",(event) =>{
  event.preventDefault();
  const description= document.querySelector("#new-task-description").value;
    toDoList(description);
  // console.log(event.timeStamp);
 });

   function toDoList(description){
        let ul = document.querySelector("#tasks");
        let li = document.createElement('li');
        let btn = document.createElement("button");
        btn.textContent= " x ";
        btn.style.backgroundColor="black";
        btn.style.color= "white";
        btn.style.fontSize= "10px";
        btn.addEventListener("click",(event) => {
             event.target.parentNode.remove();
        });
        li.textContent = ` ${description} `;
        li.style.listStyle="none";
        li.appendChild(btn);
        ul.appendChild(li);
   }
});
