// Action types
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// Definition of Action Types
const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });
const reset = () => ({ type: RESET });

// Definition of the initial state
const initialState = { count: 0 };

// Definition of Reducer
const tallyReducer = (state = initialState, action) => {
    switch (action.type) {
      case INCREMENT:
        return { count: state.count + 1 };
      case DECREMENT:
        return { count: state.count - 1 };
      case RESET:
        return { count: 0 };
      default:
        return state;
    }
  };

// Definition of store class
class Store {
    constructor(reducer, initialState) {
      this.reducer = reducer;
      this.state = initialState;
      this.listeners = [];
    }
    getState() {
      return this.state;
    }
    dispatch(action) {
      this.state = this.reducer(this.state, action);
      this.listeners.forEach((listener) => listener());
    }
    subscribe(listener) {
      this.listeners.push(listener);
      return () => {
        this.listeners = this.listeners.filter((l) => l !== listener);
      };
    }
  }

// Initiation of store
const store = new Store(tallyReducer, initialState);

// Subscribing to state changes
store.subscribe(() => console.log("State:", store.getState()));

// logging of Initial state
console.log("Initial State:", store.getState());

// Dispatching Actions 
store.dispatch(increment()); // Should log: State: { count: 1 }
store.dispatch(increment()); // Should log: State: { count: 2 }
store.dispatch(decrement()); // Should log: State: { count: 1 }
store.dispatch(reset()); // Should log: State: { count: 0 }