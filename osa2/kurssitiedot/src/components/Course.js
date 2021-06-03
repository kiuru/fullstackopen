import React from 'react'
import Header from './Header.js'
import Content from './Content.js'
  
  const Total = (props) => (
    <p>Number of exercises {props.total}</p>
  )

const Course = ({course}) => {
    let total = 0
    course.parts.map(part => 
        total += parseInt(part.exercises)
    )
    return (
        <div>
            <Header course={course.name} />
            {course.parts.map(part => 
                <Content key={part.id} name={part.name} exercises={part.exercises} />
            )}
            <strong>total of {total} exercises</strong>
            
        </div>
      )
}

export default Course