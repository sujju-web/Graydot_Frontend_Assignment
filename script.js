// The JavaScript code is placed in the script.js file, 
// which is linked to the HTML using the <script src="script.js"></script>.

  document.addEventListener("DOMContentLoaded", function() {
  // DOMContentLoaded event listener is used to ensure that the JavaScript code is executed after the HTML has loaded.

  var draggableItems = document.querySelectorAll('.draggable');//querySelectorAll('.draggable') method selects all elements with the class "draggable" and 
  //assigns them to the draggableItems variable. Event listeners for the dragstart and dragend events are added to each draggable item using the forEach method.
   
  // var container1 = document.querySelector('#container1');
  var container2 = document.querySelector('#container2');
  var resetBtn = document.querySelector('#resetBtn');
  var message = document.querySelector('#message');

  draggableItems.forEach(function(item) {

    // The dragstart event handler sets the data type for the dragged item using event.dataTransfer.setData('text/plain', null). 
    // It also adds the class "dragged" to the dragged item.

    item.addEventListener('dragstart', function(event) {
      event.dataTransfer.setData('text/plain', null);
      event.target.classList.add('dragged');//dragend event handler removes the "dragged" class from the item when the dragging is finished.
    });

    item.addEventListener('dragend', function(event) {
      event.target.classList.remove('dragged');
    });
  });

  container2.addEventListener('dragover', function(event) {//dragover event handler on container2 prevents the default behavior of elements being dragged over it.
    event.preventDefault();
  });

  container2.addEventListener('drop', function(event) {//drop event handler on container2 is triggered when an item is dropped onto it. 
    //It prevents the default behavior of dropping elements and retrieves the data set in the dragstart event handler using event.dataTransfer.getData('text/plain'). 
    //It then appends the dragged item to container2 using container2.appendChild(document.querySelector('.dragged')). 
    //Finally, it displays the success message by setting the text content of the message element to 'Item dropped successfully!' and setting its style to display: block.

    event.preventDefault();
    var data = event.dataTransfer.getData('text/plain');
    container2.appendChild(document.querySelector('.dragged'));
    message.style.display = 'block';
    message.textContent = 'Item dropped successfully!';
  });

  resetBtn.addEventListener('click', function() {//resetBtn element has a click event listener attached to it. When clicked, the resetBtn event handler is triggered. 
    //It clears the contents of container1 and container2 by setting their innerHTML to an empty string. It also sets the text content of the message element to 'none'.
   container1.innerHTML = '';
   container2.innerHTML = '';
   message.textContent = 'none';

    //Inside the resetBtn event handler, an array originalItems is defined with the desired original items.
    // The forEach method is used to iterate over originalItems, and for each item, a new div element is created, given the class "draggable" and made draggable. 
   //The item's text content is set to the current item in the loop. Finally, the new item is appended to container1.
    
    var originalItems = ['Item 1', 'Item 2', 'Item 3'];
    originalItems.forEach(function(itemText) {
      var item = document.createElement('div');
      item.classList.add('draggable');
      item.draggable = true;
      item.textContent = itemText;
      container1.appendChild(item);
  });
});
});
