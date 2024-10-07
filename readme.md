

# SUMMARY :book:
- React is a library used to build user interfaces
- Redux is a library for managing state in a predictable way in JavaScript applications
- Redux toolkit is a library for efficient redux development
- React-redux is a library that provides bindings to use React and Redux (Toolkit) together in an application

## Concepts :monkey:
- 1 Store: Holds the state of your application
- 2 Action: Describes what happened
- 3 Reducer: Ties the store and actions together

## Principles :watch:
- 1 First Principle: The global state of your application is stored as an object inside a single store.
-- Maintain our application state in a single object which would be managed by the Redux store

- 2 The only way to change the state is to dispatch an action, an object that describes what happened
-- To update the state of your app, you need to let Redux know about that with an action
-- Not allowed to directly update the state object

- 3 To specify how the state tree is updated based on actions, you write pure reducers
-- Reducer - (previousState, action) => newState

