export default function(state=[], action){
  switch (action.type) {
    case 'FETCH_NOTES':
      return action.payload 
    case 'ADD_NOTE':
      return [...state, action.payload]
    default:
      return state
  }

}
