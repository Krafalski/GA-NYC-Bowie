var events = [];

window.onload = function() {
  var nameField = document.querySelector('input[type="text"');
  var dateField = document.querySelector('input[type="datetime-local');
  var button = document.getElementById('add');
  var eventsField = document.querySelector('.events');

  button.addEventListener('click', function(evt) {
    console.log(nameField.value);
    console.log(moment().format(dateField.value));
    var newEvent = {};
    newEvent.name = nameField.value;
    newEvent.date = dateField.value;
    nameField.value = '';
    dateField.value = '';
    events.push(newEvent);
    sortEvents();
    renderEvents(eventsField);
  });
};

function renderEvents(parentElement) {
  parentElement.innerHTML = '';
  events.forEach(function(event) {
    var li = document.createElement('li');
    var datetime = moment(event.date);
    li.innerHTML = event.name + ' ' + datetime.fromNow('');
    parentElement.appendChild(li);
  });
};

function sortEvents() {
  
};

