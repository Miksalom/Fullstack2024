const Persons = ({ppersons}) => {
    return (
        <b> 
            {ppersons.map(person => (
            <p key={person.name}>{person.name} {person.number} </p>
            ))}
        </b>
    )
}
export default Persons