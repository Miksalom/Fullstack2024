




const Header = (props) =>{
    console.log(props)
    return (
      <div>
        <h1>{props.course.name}</h1>
      </div>
    )
}
const Part = (props) =>{
    console.log(props)
    return(
    <li>
        {props.name} {props.exercises} 
    </li>

    )
  }
const Content = ({parts}) =>{

    return (
      <div>
        <ul>
            {parts.map(part => 
            <Part key={part.id} name={part.name} exercises={part.exercises} />
            )}
        </ul>
      </div>
    )
}


const Course = ({course}) => {
    return (
        <div>
          <Header course={course}/>
          <Content parts={course.parts} />
    
        </div>
      )
}

export default Course