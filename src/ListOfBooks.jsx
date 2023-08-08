import { useContext, useEffect } from 'react'
import Book from './Book'
import { BooksContext } from './context/book-context'
import { library } from './mocks/books.json'
import NoBooks from './NoBooks'

export default function ListOfBooks() {
  const { filters, setFilters, favorites, setFavorites } = useContext(BooksContext)

  useEffect(() => {
    if (localStorage.getItem('filters')) {
      setFilters(JSON.parse(localStorage.getItem('filters')))
    }
  }, [setFilters])

  const filteredLibrary = library.filter((book) => {
    if (
      (filters.category === 'all' || book.book.genre === filters.category) &&
      book.book.pages <= filters.pages &&
      (filters.search === '' ||
        book.book.title.toLowerCase().includes(filters.search.toLowerCase())) &&
        (filters.showFavorites === false || favorites.some(fav => fav.ISBN === book.book.ISBN))
    ) {
      return book
    }
  })

  const handleFavoriteChange = (ISBN) => {
    let newFavorites = [...favorites]
    let book = library.find(book => book.book.ISBN === ISBN)
    if (newFavorites.some(fav => fav.ISBN === ISBN)) {
      newFavorites = newFavorites.filter(fav => fav.ISBN !== ISBN)
    } else {
      newFavorites.push(book.book)
    }
    setFavorites(newFavorites)
    localStorage.setItem('favorites', JSON.stringify(newFavorites))
  }

  return (
    <>
      <div className='w-full grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4'>
        {filteredLibrary.length === 0 ? (
          <p className='text-center text-2xl col-span-4 mt-20'>
            <NoBooks />
          </p>
        ) : (
          filteredLibrary.map((book) => {
            return (
              <div key={book.book.ISBN} className=''>
                <Book title={book.book.title} {...book.book} favorite={favorites.some(fav => fav.ISBN === book.book.ISBN)} onFavoriteChange={handleFavoriteChange} />
              </div>
            )
          })
        )}
      </div>
    </>
  )
}
