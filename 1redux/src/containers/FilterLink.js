/*
 * @Author: TerryMin
 * @Date: 2019-07-28 11:36:14
 * @LastEditors: TerryMin
 * @LastEditTime: 2019-08-16 15:23:27
 * @Description: file not
 */
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => {
  // console.log(state, ownProps);
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  // console.log(dispatch, ownProps);
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink