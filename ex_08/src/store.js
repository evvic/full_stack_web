import {combineReducers, createStore} from 'redux';

function general(state = {colorMode: 0}, action) {
    let newState = {...state};
    if (action.type === 'CHANGE_COLOR_MODE') {
      newState['colorMode'] = (state['colorMode'] + 1) % 2;
    }
    return newState;
}

// You can list several reducers to be combined...
const rootReducer = combineReducers({general});

const store = createStore(rootReducer);
export default store;