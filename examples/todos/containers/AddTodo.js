import React from 'react'
import { connect } from 'react-redux'

let AddTodo = ({ addTodo }) => {
  let input

  return (
    <div>
      <input ref={node => {
        input = node
      }} />
      <button onClick={() => {
        addTodo(input.value)
        input.value = ''
      }}>
        Add Todo
      </button>
    </div>
  )
}

AddTodo = connect(undefined, ({actions: {addTodo}}) => ({addTodo}))(AddTodo)

export default AddTodo
