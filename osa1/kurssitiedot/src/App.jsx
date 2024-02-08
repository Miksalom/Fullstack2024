const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
  {
    name: 'Fundamentals of React',
    lkm: 10
  },
  {
    name: 'Using props to pass data',
    lkm: 7
  },
  {
    name: 'State of a component',
    lkm: 14
  }
]
}
  
  return (
    <div>
      <Header course={course}/>
      <Content osat={course} />
      <Total osat={course} />

    </div>
  )
}
const Header = (props) =>{
  console.log(props)
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Content = (props) =>{
  console.log(props)
  return (
    <div>
      <Part name={props.osat.parts[0].name} lkm={props.osat.parts[0].lkm}/>
      <Part name={props.osat.parts[1].name} lkm={props.osat.parts[1].lkm}/>
      <Part name={props.osat.parts[2].name} lkm={props.osat.parts[2].lkm}/>
    </div>
  )
}

const Part = (props) =>{
  console.log(props)
  return(
    <div>
      <p>{props.name} {props.lkm} </p>
    </div>
  )
}

const Total = (props) =>{
  console.log(props)
  return(
    <div>
      <p>Number of exercises {props.osat.parts[0].lkm + props.osat.parts[1].lkm + props.osat.parts[2].lkm}</p>
    </div>
  )
}
export default App