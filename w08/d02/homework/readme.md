## Warm up

Task: Build a react app which implements a stopwatch. 

First think about what a stopwatch is and how to split it up into
components. Your minimum components should be 

- `app`: you need a parent component to hold state and
  pass props
- `display`: you need some way to display the count down 
- `start`: you need a way to start a timer (possibly a button)
- `stop`: you need a way to stop the timer (did someone say button)
- `reset`: you need a way to reset the timer (do I really need to say
  it again: BUTTON!)
  
Your child components should focus on rendering data, they
should be static and not hold state. Build them first and make sure
they render correctly. 

Decide how exactly you are going to hold state in your parent component
`App`. In general your state should be the minimum amount of
information needed for your components. Do not hold *computed* values
in your state. You will also need to define a few methods, which you
can pass to the buttons as props. You should have at least a `start`,
`stop` and `reset` methods which will be fired by the buttons.

HINT: Use
[setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval)
to measure time. It is not precise in terms of time keeping but is
good enough for our purposes. 

## Persistent TODO app

Finish / polish yours (or Jason's) todo app. Make sure you understand
how it works. Make sure you can create, update, read and delete tasks.

Go back to express and build a database, and create the 4 main REST
routes for cruding tasks

- `GET /tasks`
- `POST /tasks`
- `PUT /tasks/:id`
- `DELETE /tasks/:id`

You will not need forms anymore as you are building a SPA. Use postman
to make sure the routes a working properly. 

Use AJAX in your react app to persist your tasks to the database. 

## Tasks time logger

Now use the power of the *component* paradime to integrate your the
stopwatch functionality you already built into your todo app. Allow for users
to start and stop different timers for each task in order to keep a
log of how much time is spent on a task. First implement it only on
the front end after which modify your backend schema to allow for
persistence of the time spent on tasks. 

Congratulations! Now you can keep track of exactly how much time you
spend on homework!!! 
