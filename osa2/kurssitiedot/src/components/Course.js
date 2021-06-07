import React from 'react'
import Header from './Header.js'
import Content from './Content.js'

const Course = ({course}) => {
    const total = course.parts.reduce( (s, p) => parseInt(s) + parseInt(p.exercises), 0)
    
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