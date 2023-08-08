import { createContext, useState } from 'react'

export const BooksContext = createContext()

export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: 'Terror',
    pages: 1500,
    search: '',
    showFavorites: true
  })
  const [favorites, setFavorites] = useState([])

  const resetFilters = () => {
    setFilters({
        category: 'all',
        pages: 2000,
        search: '',
        showFavorites: false
      })
    }

  return (
    <BooksContext.Provider
      value={{
        filters,
        setFilters,
        favorites,
        setFavorites,
        resetFilters
      }}
    >
      {children}
    </BooksContext.Provider>
  )
}
