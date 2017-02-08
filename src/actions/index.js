export function addNote(note){
  return {
    type: 'ADD_NOTE',
    payload: note
  }
}

export function fetchNotes(){
  const notes = ["React", "Redux", "Dan Abramov"]
  return {
    type: 'FETCH_NOTES',
    payload: notes
  }
}

export function updateNote(note){
  return {
    type: 'UPDATE_NOTE',
    payload: note
  }
}
