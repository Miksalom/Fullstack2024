const App = () => {
  const course = 'Half Stack application development'
  const courses = [
    {name: 'Fundamentals of React', lkm: 10},
    {name: 'Using props to pass data', lkm: 7},
    {name: 'State of a component', lkm: 14},
  ]

  return (
    <div>
      <Header course={course}/>
      <Content osat={courses} />
      <Total osat={courses} />

    </div>
  )
}
const Header = (props) =>{
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) =>{
  return (
    <div>
      <Part name={props.osat[0].name} lkm={props.osat[0].lkm}/>
      <Part name={props.osat[1].name} lkm={props.osat[1].lkm}/>
      <Part name={props.osat[2].name} lkm={props.osat[2].lkm}/>
    </div>
  )
}

const Part = (props) =>{
  return(
    <div>
      <p>{props.name} {props.lkm} </p>
    </div>
  )
}

const Total = (props) =>{
  return(
    <div>
      <p>Number of exercises {props.osat[0].lkm + props.osat[1].lkm + props.osat[2].lkm}</p>
    </div>
  )
}
export default App