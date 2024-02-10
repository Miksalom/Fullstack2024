

const Header = (props) =>{
    console.log(props)
    return (
      <div>
        <h2>{props.course.name}</h2>
      </div>
    )
}
const Part = (props) =>{
    console.log(props)
    return(
    <div>
        <p>{props.name} {props.exercises} </p>
    </div>

    )
  }
const Content = ({parts}) =>{

    return (
      <div>
        <div>
            {parts.map(part => 
            <Part key={part.id} name={part.name} exercises={part.exercises} />
            )}
        </div>
      </div>
    )
}
const Total = ({parts}) => {
  const sum = parts.reduce((s, part) => s += part.exercises, 0)
  
  return (
    <div>
      <b>total of exercises {sum}</b>
    </div>
  )
}
const Course = ({courses}) => {
    return (
        <div>
          <h1>Web development curriculum</h1>
          {courses.map(course =>
          <div key={course.id} >
            <Header course={course}/>
            <Content parts={course.parts} />
            <Total parts={course.parts} />
          </div>
          )}
          
        </div>
      )
}

export default Course