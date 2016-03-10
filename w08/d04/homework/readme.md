# Coffee Shop Manager

Tonight you will build a database backed coffee shop manager
application.

## User Stories

As a user I need to be able to see a list of coffee based beverages
offered. Beverages should have at least a name and a price.

As a user I need to be able to add a beverage, delete a beverage, edit
a beverage's name and price.

## Steps

Making a full stack single page application has a lot of moving
pieces. Use this assignment to identify each separate component that
comes into play when building such applications and realize exactly
how these pieces communicate. Complete each step before you proceed to
the next one.

1. **The API**. Use express to create a simple API which implements CRUD
   on one resource: `beverages` attached to the route `/api/`. For
   example the route you need to hit to get all beverages should be
   `GET /api/beverages`. Make sure you have some data seeded and test
   your API with postman.
   
2. **The React entry point**. Your react app should be started when
   you hit the root route. Build a simple React component App which is
   rendered on the DOM when you load the page (Have it display a dummy
   text). Make sure you setup `browserify` so that you can immediately
   start abstracting components in separate files. Do not use a CDN,
   but have every dependency managed from you server.
   
   Checkpoint: You just built the two main components of a SPA: the
   frontend app, and the backend API.

3. **The React App**. Now build your frontend app. 
   - Decide on how to split your design into components. For example, `header`,
   `beverages`, `beverage`. 
   - Decide where you are going to hold state and what props you are
   going to pass to which component. 
   - Build a static version of your components so that you can see a layout of
   your application. 
   - Add interactivity by modifying and reacting to state changes
   - Put in AJAX calls to your API in the correct places of your app
     so that you have persistence. 
