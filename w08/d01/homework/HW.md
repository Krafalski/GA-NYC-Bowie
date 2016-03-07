# React TODO app

Tonight you are going to be building your first very own React
application. You need to implement a TODO app, which allows the user
to create tasks and see a list of the created task. A task should be
able to be marked as done or not done. As a bonus you should work on
making the tasks editable and deletable.

## Express Setup

First build a very simple express server which serves one index page
to which you are able to link static files.

## React Setup

Include all the libraries that react needs and test that it works by
writing a simple react view which shows a 'Hello World' message on the
page. Make sure you understand why we are including each piece, and
how everything connects together. 

## Layout

It is a good idea to first focus on building a static version of your
app. Do not worry about holding state or adding interactivity, but
instead focus on breaking your application into components and
implementing only the `render` method for those components. 

HINT: A TODO app should probably have at least the following
components
- `createTask`
- `taskList`
- `task`

Hardcode an array of tasks and focus on rendering them on the page with
react. 

## Interactivity

Now that you have the components built implement interactivity. 

- Allow the user to create a task by pressing the button in the
createTask component. 
- Allow the user to mark a task as done (possibly through checking a checkbox). 

Think about what state you will need to keep in order to successfully implement all of the interactions. 

## Styling and Polishing

Practice interacting with css through react. 

- Make the checked tasks change their color or opacity. 
- Reorder your tasks dinamically so that the ckeched tasks drop to the
  bottom of the list
- Add a button to allow the user to delete a task
- Allow the user to edit the name of a task

## Bonus

Did you breeze through the previous parts?

Build an API on the backend and use AJAX to persist your tasks to a database!
