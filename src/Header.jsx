import { useContext } from 'react'
import { BooksContext } from './context/book-context'

export default function Header() {
  const { favorites } = useContext(BooksContext)

  const textCountFavorites = favorites.length === 0 ? '' : favorites.length === 1 ? 'favorito' : 'favoritos'
  

  return (
    <div className='py-5 border-black border-2 rounded-lg'>
      <h1 className='text-center text-3xl font-bold '>Mis libros {
        favorites.length > 0 ? <span>({favorites.length} {textCountFavorites})</span> : ''
      }  </h1>
    </div>
  )
}
