export default function(state=[], action){
  switch (action.type) {
    case 'ADD_NOTE':
      return [...state, action.payload]
    default:
      return state
  }

}
