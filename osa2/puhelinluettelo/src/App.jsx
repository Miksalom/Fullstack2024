import { useState } from 'react'
import Filter from './components/Filter'
import Personform from './components/Personform'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      console.log(personObject)
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
    
    
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)

  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
    )


  return (
    <div>
      <h1>Phonebook</h1>
      <Filter event={handleFilterChange} />
      <h1>add a new</h1>
      <Personform event={addPerson} event1={handleNameChange} event2={handleNumberChange}
      name={newName} number={newNumber} />
      <h2>Numbers</h2>
      <Persons ppersons={filteredPersons} />
    </div>
  )

}

export default App