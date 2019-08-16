const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISILITY_FILTER':
      return action.filter
    default:
      return state
  }
}
export default visibilityFilter