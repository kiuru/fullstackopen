import React from 'react'
  
  const Part = (props) => (
    <p>{props.name} {props.exercises}</p>
  )

  const Content = (props) => (
    <div>
        <Part name={props.name} exercises={props.exercises} />
    </div>
  )

export default Content