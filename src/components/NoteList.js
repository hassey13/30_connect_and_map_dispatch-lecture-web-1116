import React from 'react'

import { connect } from 'react-redux'
import { fetchNotes } from '../actions'

class NoteList extends React.Component {

  componentDidMount(){
    this.props.fetchNotes()
  }

  render (){
    const notes = this.props.notes
    return (
      <div>
        <h2>All Notes</h2>
        <ul>
          { notes.map((note, i) => <li key={i}>{note}</li> ) }
        </ul>
      </div>)
  }
}

function mapStateToProps (state){
  return {
    notes: state.notes,
    dog: 'Muffin',
    currentNote: state.currentNote
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchNotes: function(){
      let action = fetchNotes()
      dispatch( action )
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( NoteList )



// function sayName(name){
//   return function(){
//     return `Hi, ${name}`
//   }
// }
//
// greeting = sayName('Valerie')() // Hi, Valerie

// < NoteList dog="Muffin" />

// React.createElement(NoteList, {dog: 'Muffin'})

// const props = Object.assign(props, mapStateToProps(store.getState))
// React.createElement(WrappedComponent, props )
