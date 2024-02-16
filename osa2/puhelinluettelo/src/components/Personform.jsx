const Personform = ({event, event1, event2, name, number}) => {
    return (
    <form onSubmit={event}>
        <div>
          <div>name: <input value={name} onChange={event1}/></div>
          <div>number: <input value={number} onChange={event2}/></div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
    </form>
    )
}







export default Personform