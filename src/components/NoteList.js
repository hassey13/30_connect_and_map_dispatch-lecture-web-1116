import React from 'react'

import { connect } from 'react-redux'

class NoteList extends React.Component {

  render (){
    const notes = this.props.notes
    return (
      <div>
        <h2>Note List</h2>
        <ul>
          { notes.map((note, i) => <li key={i}>{note}</li> ) }
        </ul>
      </div>)
  }
}

function mapStateToProps (state){
  return {
    notes: state.notes
  }
}

const wrappedComponentCreator = connect( mapStateToProps )
export default wrappedComponentCreator( NoteList ) // returns a component
