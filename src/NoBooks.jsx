import { useContext } from 'react'
import { BooksContext } from './context/book-context'

export default function NoBooks() {
    const { resetFilters } = useContext(BooksContext);

    return (
        <div>
            <p className='text-center text-2xl col-span-4 mt-20'>
                No hay libros que coincidan con los filtros
            </p>
            <button className='bg-blue-400 rounded-md p-2 transition-colors hover:text-white delay-75 duration-1000' onClick={resetFilters}>Resetear filtros</button>
        </div>
    )
}