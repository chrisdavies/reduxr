'use strict';

let nextTodoId = 0

export default {
  addTodo: text => ({id: ++nextTodoId, text}),
  setVisibilityFilter: filter => ({filter}),
  toggleTodo: id => ({id})
}
