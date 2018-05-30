import { createStore } from 'redux';

const incrementCount = ({ incremenBy = 1 } = {}) => ({
        type: 'INCREMENT',
        // incremenBy: typeof payload.incremenBy === 'number' ? payload.incremenBy : 1
        // Same as above by adding the object of incremenBy above called destructuring
        incremenBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const resetCount = () => ({
    type: 'RESET'
})

const setCount = ({ count }) => ({
    type: 'SET',
    count
})

//Reducers
// pure function, doesn't change or use anything outside of the function
// never change state or action!

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type){
        case 'INCREMENT':
        return {
            count: state.count + action.incremenBy
        };
        case 'DECREMENT':
        // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
        return {
            count: state.count - action.decrementBy
        };
        case 'RESET':
        return {
            count: 0
        };
        case 'SET':
        return {
            count: action.count
        }
        default:
        return state;
    }
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {

    console.log(store.getState())
})

// store.dispatch ({
//     type: 'INCREMENT'
// });

store.dispatch(incrementCount({ incremenBy: 5 }))

store.dispatch(incrementCount())

store.dispatch(resetCount())

// store.dispatch ({
//     type: 'RESET'
// });

// store.dispatch ({
//     type: 'DECREMENT',
//     decrementBy: 10
// })
store.dispatch(decrementCount())

store.dispatch(decrementCount({ decrementBy: 10 }))
//
// store.dispatch ({
//     type: 'SET',
//     count: 101
// })
 store.dispatch(setCount({ count: 20 }))
