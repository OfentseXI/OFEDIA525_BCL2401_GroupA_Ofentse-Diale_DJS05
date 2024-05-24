# DJS05 Project Brief: Building a Redux-Inspired Store for a Tally App

**Overview**
This project is a simple implementation of a Redux-like state management system in JavaScript. It includes actions to increment, decrement, and reset a counter, along with a basic store and reducer to manage the state.

**Overview of the Approach**
This project uses a Redux-like architecture to manage state in a predictable way. The core concepts implemented are:

*Actions:* These are plain JavaScript objects that represent a type of event. In this example, we have three actions: INCREMENT, DECREMENT, and RESET.

*Action Creators:* These are functions that return an action object. We have three action creators: increment, decrement, and reset.

*Reducer:* This is a pure function that takes the current state and an action as arguments, and returns a new state based on the action type. The reducer implemented here is tallyReducer.

*Store:* This is an object that holds the state of the application. The store has methods to get the current state, dispatch actions to change the state, and subscribe to changes in the state.

**Challenges Faced and Solutions**
*Challenge:*
Testing State Changes
Verifying that state changes were correctly applied and listeners were notified.

*Solution:*
Subscribed to state changes using store.subscribe and logged the state to the console each time it changed. This allowed for easy verification of state transitions by dispatching actions and observing the output.