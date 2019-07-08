import { createStore } from 'redux';

// Action Generator
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy: incrementBy
})

const decrementCount = ({ decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy: decrementBy
})

const setCount = ({ setBy }) => ({
  type: 'SET',
  setBy: setBy
})

const resetCount = () => ({
  type: 'RESET',
  resetBy: 0
})

// Reducers
// 1. Reducers are pure functions (output is only determined by input) (밖에있는 것 건들지도 사용하지도 않음)
// 2. Never change state or action

const countReducer = (state = {count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    case 'SET' :
      return {
        count: action.setBy
      }
    case 'RESET':
      return {
        count: action.resetBy
      }
    default:
      return state
  }
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => { // re render, 특정부분에서 멈출수도있음
  console.log(store.getState());
})

// store.dispatch({ // action에 type으로 접근
//   type: 'INCREMENT',
//   incrementBy: 5
// });
store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10}))

store.dispatch(resetCount())

store.dispatch(setCount({ setBy: 110 }))