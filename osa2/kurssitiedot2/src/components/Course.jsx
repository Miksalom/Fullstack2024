




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


const Course = ({course}) => {
    return (
        <div>
          <Header course={course}/>
          <Content parts={course.parts} />
    
        </div>
      )
}

export default Course