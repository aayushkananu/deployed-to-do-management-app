import ListHeader from './components/ListHeader'
import { useEffect } from 'react'

const App = () => {

  const getData = async () => {
    const userEmail = 'aayushka@testing.com'
    try{
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`)
      const json = response.json()
      console.log(json)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(()  => getData, [])


  return (
    <div className="app">
      <ListHeader listName = {'📖 To Do Management System'} />
    </div>
  )
}

export default App
