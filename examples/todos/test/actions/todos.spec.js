import expect from 'expect'
import actionCreators from '../../actions'
import objActions from 'reduxr-obj-actions'

const actions = objActions(o => o, actionCreators)

describe('todo actions', () => {
  it('addTodo should create typed action', () => {
    expect(actions.addTodo('Use Redux')).toEqual({
      type: 'addTodo',
      id: 1,
      text: 'Use Redux'
    })
  })

  it('setVisibilityFilter should create typed action', () => {
    expect(actions.setVisibilityFilter('active')).toEqual({
      type: 'setVisibilityFilter',
      filter: 'active'
    })
  })

  it('toogleTodo should create typed action', () => {
    expect(actions.toggleTodo(1)).toEqual({
      type: 'toggleTodo',
      id: 1
    })
  })
})
