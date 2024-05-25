// Action types

// Definition of Action Types
{ type: 'INCREMENT' };
{ type: 'DECREMENT' };
{ type: 'RESET' };

// Definition of the initial state


// Definition of Reducer
function counter(state = 0, action)
{
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      case 'RESET':
        return state;
      default:
        return state;
    }
  };

// Initiation of store
let store = .createStore(counter);

// Subscribing to state changes
store.subscribe(() => console.log(store.getState()));

// Dispatching Actions 
store.dispatch({type: 'INCREMENT'}); // Should log: State: { count: 1 }
store.dispatch({type: 'INCREMENT'}); // Should log: State: { count: 2 }
store.dispatch({type: 'DECREMENT'}); // Should log: State: { count: 1 }
store.dispatch({type: 'RESET'}); // Should log: State: { count: 0 }