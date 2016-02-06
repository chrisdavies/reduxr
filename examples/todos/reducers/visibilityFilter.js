import objReducer from 'reduxr-obj-reducer';

export default objReducer('SHOW_ALL', {
  setVisibilityFilter: (_, {filter}) => filter
})
