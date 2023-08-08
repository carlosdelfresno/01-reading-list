import { useContext } from 'react'
import { BooksContext } from './context/book-context'

export default function Filters() {
  const { filters, setFilters } = useContext(BooksContext)
  
  if (localStorage.getItem('filters')) {
    // setFilters(JSON.parse(localStorage.getItem('filters')))
  }

  const handleChangeCategory = (e) => {
    let newFilter = {...filters}
    newFilter.category = e.target.value
    setFilters(newFilter)
    localStorage.setItem('filters', JSON.stringify(newFilter))
  }

  const handleChangePages = (e) => {
    let newFilter = {...filters}
    newFilter.pages = +e.target.value
    setFilters(newFilter)
    localStorage.setItem('filters', JSON.stringify(newFilter))
  }

  const handleChangeSearch = (e) => {
    let newFilter = {...filters}
    newFilter.search = e.target.value
    setFilters(newFilter)
    localStorage.setItem('filters', JSON.stringify(newFilter))
  }

  const handleChangeShowFavorites = (e) => {
    let newFilter = {...filters}
    newFilter.showFavorites = e.target.checked
    setFilters(newFilter)
    localStorage.setItem('filters', JSON.stringify(newFilter))
  }    

  return (
    <div className='w-full flex justify-between gap-4 px-4 py-4'>
      <div className='flex flex-row gap-2'>
        <p className=''>Páginas</p>
        <input
          type='range'
          min='0'
          max='2000'
          step='10'
          className=''
          value={filters.pages}
          onChange={handleChangePages}
        />
        <p className=''>{ filters.pages }</p>
      </div>
      <div className=''>
        <input type='text' className='w-full rounded-sm ring pl-2' placeholder='Buscar' onChange={handleChangeSearch} />
        
      </div>
      <div className='flex flex-row gap-2'>
        <p className=''>Categoría</p>
        <select className='w-full rounded-sm ring' value={filters.category} onChange={handleChangeCategory}>
            <option value='all'>Todos</option>
            <option value='Fantasía'>Fantasía</option>
            <option value='Ciencia ficción'>Ciencia ficción</option>
            <option value='Zombies'>Zombies</option>
            <option value='Terror'>Terror</option>
        </select>
      </div>
      <div>
        <input type='checkbox' className='ring' checked={filters.showFavorites} onChange={handleChangeShowFavorites} /> <span>Mostrar solo favoritos</span>
      </div>
    </div>
  )
}
