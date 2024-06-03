export function reducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
      return state + action.payload
     case "DECREMENT":
      return state - action.payload
      case "MULTIPLICATION":
        return state * action.payload
      case "DEVIDE":
        return state / action.payload
      default:
        return state;
    }
  }
