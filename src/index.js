// load stuff first!!
document.addEventListener("DOMContentLoaded", function() {
  
  // grab form 
  const form = document.getElementById('create-task-form'); // this is the form
  const taskList = document.getElementById('tasks'); // this is where tasks go
  
  // when u press submit button 
  form.addEventListener('submit', function(submitEvent) {
    submitEvent.preventDefault(); // finna stop page from reloading
    
    // get the text u typed
    const inputThing = document.getElementById('new-task-description');
    const task = inputThing.value;


    if (task != "") {
      // make a new list item 
      const newListItem = document.createElement('li');
      newListItem.innerText = task; // put the task here

      // makes a delete button
      const deleteTheTask = document.createElement('button');
      deleteTheTask.innerText = "X";
      // make the item go bye bye
      deleteTheTask.addEventListener('click', function() {
        newListItem.remove(); // mabadae
      });

      // button goes inside li 
      newListItem.appendChild(deleteTheTask);

      // li goes inside ul 
      taskList.appendChild(newListItem);

      // empty the input box cause damn im good at this
      inputThing.value = "";
    } else {
      // forgot to type something 🤦‍♂️
      alert("write something first!!!");
    }
  });

});

// 