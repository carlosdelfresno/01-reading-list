import './App.css'
import Header from './Header'
import ListOfBooks from './ListOfBooks'
import { FiltersProvider } from './context/book-context'
import Filters from './Filters'

function App() {
  return (
    <FiltersProvider>
      <div className='px-20 pt-3 bg-gray-100 min-h-screen'>
        <Header />
        <Filters />
        <ListOfBooks />
      </div>
    </FiltersProvider>
  )
}

export default App
