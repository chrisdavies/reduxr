import objReducer from 'reduxr-obj-reducer';
import {setPropsById} from 'reduxr-reducer-helpers';

export default objReducer([], {
  addTodo: (state, {id, text}) =>
    [...state, {id, text, completed: false}],

  toggleTodo: setPropsById((_, state) =>
    ({...state, completed: !state.completed}))
})
