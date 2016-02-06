import { connect } from 'react-redux'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = ({actions: {setVisibilityFilter}}, {filter}) => {
  return {
    onClick: () => setVisibilityFilter(filter)
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink
